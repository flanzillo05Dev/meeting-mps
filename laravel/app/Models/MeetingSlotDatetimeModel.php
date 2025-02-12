<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeetingSlotDatetimeModel extends Model
{
    protected $table = 'meeting_slot_datetime';
    protected $casts = [
        'full_slot_time' => 'datetime'
    ];
    protected $fillable = [
        'day',
        'year_month',
        'slot_time_start',
        'slot_time_end',
        'available_date',
        'full_slot_time',
    ];
}
