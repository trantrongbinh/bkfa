<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSlidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('slides');
        Schema::create('slides', function (Blueprint $table) {
            $table->increments('idslide');
            $table->string('url');
            $table->string('urlanh');
            $table->string('gioithieu');
            $table->longText('ghichu');
            $table->string('luotxem');
            $table->integer('idmon')->unsigned();
            $table->foreign('idmon')->references('idmon')->on('mons');
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
        Schema::dropIfExists('slides');
    }
}