<?php

namespace App\Support;

use Google_Client;
use Google_Service_Calendar;
use Google_Service_Calendar_Event;
use Illuminate\Support\Facades\Validator;

class MeetingGoogleCloudSupport
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function createMeetingLink($request)
    {
        try {
            Validator::make($request, [
                'title' => 'required|string',
                'start_time' => 'required|date',
                'end_time' => 'required|date|after:start_time',
            ]);


            $googleClient = new Google_Client();
            $googleClient->setAuthConfig(storage_path('google/n4nd0-d3v-6bc525fb565f.json'));
            $googleClient->addScope(Google_Service_Calendar::CALENDAR);
            $googleClient->addScope(Google_Service_Calendar::CALENDAR_EVENTS);
            $googleClient->setAccessType('offline');

            $calendarService = new Google_Service_Calendar($googleClient);
            $event = new Google_Service_Calendar_Event([
                'summary' => $request['title'],
                'start' => ['dateTime' => date('c', strtotime($request['start_time'])), 'timeZone' => env("APP_TIMEZONE")],
                'end' => ['dateTime' => date('c', strtotime($request['end_time'])), 'timeZone' => env("APP_TIMEZONE")],
                'attendees' => array_map(function ($email) {
                    return ['email' => $email];
                }, $request['attendees'] ?? []),
                'conferenceData' => [
                    'createRequest' => [
                        'requestId' => uniqid(),
                        "conferenceSolutionKey" => [
                            "type" => "hangoutsMeet"
                        ],
                    ],
                ],
            ]);


            $calendarId = 'primary';
            $event = $calendarService->events->insert($calendarId, $event, ['conferenceDataVersion' => 1]);

            dd($event->created);
        } catch (\Throwable $e) {
            dd($e->getMessage());
        }
    }
}
