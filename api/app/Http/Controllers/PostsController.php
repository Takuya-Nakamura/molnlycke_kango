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
        var_dump("Hello world");

        return response()->json(['apple' => 'red', 'peach' => 'pink']);
    }

    //¥Æ¥¹¥È
    public function json(Request $request)
    {
        //$validator = Validator::make($input, $rules, $messages);
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required',
                'body' => 'required',
            ],
            [
                'required' => ':attribute is required',
            ]
        );
        
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        Post::create($request->all());
        return response()->json(['message' => 'success']);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'body' => 'required',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        Post::create($request->all());
        return redirect('posts');
    }
}
