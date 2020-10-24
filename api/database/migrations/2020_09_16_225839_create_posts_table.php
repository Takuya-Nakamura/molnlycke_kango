<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->increments('id');
            $table->integer('detail_explain')->nullable();
            $table->integer('document_send')->nullable();
            $table->string('address_type')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('prefecture')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('job');
            $table->string('job_other')->nullable();
            $table->string('facility');
            $table->string('department');
            $table->boolean('notification');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
