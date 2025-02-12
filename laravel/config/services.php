<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'openapi' => [
        'sms' => [
            'base_uri' => env("OPENAPI_SMS_BASE_URI",'https://ws.messaggisms.com'),
            'token' => env("OPENAPI_SMS_TOKEN", "67ac5e1e36fbc14669000773"),
            'method' => [
                'sendSms' => [
                    'endpoint' => 'messages/',
                    'verb' => 'POST',
                    'test' => false,
                    'sender' => env("OPENAPI_SMS_SENDER", env("APP_NAME")),
                ]
            ],
            'fixed_price' => 0.05
        ]
    ]

];
