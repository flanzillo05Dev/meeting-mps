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
        Schema::dropIfExists('meeting_slot_datetime');
        Schema::create('meeting_slot_datetime', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('day');
            $table->string('year_month');
            $table->string('slot_time_start');
            $table->string('slot_time_end');
            $table->timestamp('full_slot_time');
            $table->boolean('available_date')->default(1);
            $table->timestamps();

            $table->unique(['day', 'year_month', 'slot_time_start', 'slot_time_end'], 'UNQ_day_time_meet');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting_slot_datetime');
    }
};
