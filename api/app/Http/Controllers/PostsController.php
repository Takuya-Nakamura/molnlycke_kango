<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\Post;

use App\Mail\SampleMail;
use Illuminate\Support\Facades\Mail;


class PostsController extends Controller
{
    public function index()
    {
        // return view('posts.index')->with([ 'posts' => Post::all() ]);
        $content = ['apple' => 'red', 'peach' => 'pink'];
        $res = Mail::to("nakamura0803@gmail.com")->send(new SampleMail($content));
        return response()->json(['apple' => 'red', 'peach' => 'pink']);
    }

    // post
    public function post(Request $request)
    {
        //$validator = Validator::make($input, $rules, $messages);
        $validator = Validator::make(
            $request->all(),
            [
                // 'detail_explain' => 'required',
                // 'document_send' => 'required',
                'name' => 'required',
                'email' => 'required',
                'tel' => 'required',
                'facility' => 'required',
                'department' => 'required',
                'zip_code' => 'required',
                'prefecture' => 'required',
                'city' => 'required',
                'adress' => 'required',
                'notification' => 'required',

            ],
            [
                'required' => ':attribute 必須です。',
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        //save
        Post::create($request->all());

        //メール送信
        // $content = ['apple' => 'red', 'peach' => 'pink'];
        // Mail::to("nakamura0803@gmail.com")->send(new SampleMail($content));

        return response()->json(['message' => 'success']);
    }

}
