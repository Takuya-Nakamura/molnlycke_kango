<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CorporateMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $content;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($content)
    {
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->from('no-reply@molnlycke.com') 
        ->subject('第34回日本手術看護学会年次大会アンケート回答') 
        ->text('mail.corporate')
        // ->view('mail.corporate')
        ->with(['data' => $this->content]);
    }
}


