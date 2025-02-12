<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeetingModel extends Model
{
    protected $table = 'meeting';
    protected $fillable = ['id',
        'user_company_name',
        'user_email',
        'user_name',
        'user_phone',
        'title',
        'description',
        'date_start',
        'date_end',
        'meet_link',
        'created_at', 'updated_at'];
}
