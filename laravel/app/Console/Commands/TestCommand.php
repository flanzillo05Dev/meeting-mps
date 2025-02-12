<?php

namespace App\Console\Commands;

use App\Support\MeetingGoogleCloudSupport;
use Illuminate\Console\Command;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $meetingSlots = \App\Models\MeetingSlotDatetimeModel::where('available_date', 1)
            ->get()
            ->groupBy(['year_month', 'day'])
            ->toArray()
        ;

        dd($meetingSlots);

        app(MeetingGoogleCloudSupport::class)->createMeetingLink([
            'title' => 'Test Meeting',
            'description' => 'Test Meeting Description',
            'start_time' => now()->addDays(5)->format("Y-m-d\TH:i:s"),
            'end_time' => now()->addDays(10)->format("Y-m-d\TH:i:s"),
            'location' => 'Test Location',
            'attendees' => [
                'flanzillo05@gmail.com',
            ]
        ]);
    }
}
