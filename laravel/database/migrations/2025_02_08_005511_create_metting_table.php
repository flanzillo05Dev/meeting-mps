<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meeting', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_company_name');
            $table->unsignedBigInteger('user_email');
            $table->unsignedBigInteger('user_name');
            $table->unsignedBigInteger('user_phone')->nullable();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->timestamp('date_start');
            $table->timestamp('date_end');
            $table->string('meet_link', 1500)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting');
    }
};
