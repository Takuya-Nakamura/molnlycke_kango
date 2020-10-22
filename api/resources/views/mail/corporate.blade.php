以下の内容でアンケート回答がありました。
説明：{{$data->detail_explain()}}
資料送付：{{$data->document_send()}}
名前: {{$data->name}}
電子メール: {{$data->email}}
職業: {{$data->jobLabel()}}
職業その他: {{$data->job_other}}
郵便番号:{{$data->zip_code}}
都道府県:{{$data->prefecture}}
市区町村:{{$data->city}}
番地:{{$data->address}}
所属施設:{{$data->facility}}
所属部門など:{{$data->department}}
通知の同意:{{$data->notification()}}

以上
