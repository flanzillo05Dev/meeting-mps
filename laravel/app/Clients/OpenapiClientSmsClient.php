<?php

namespace App\Clients;

use GuzzleHttp\Exception\GuzzleException;

class OpenapiClientSmsClient
{
    public \GuzzleHttp\Client $client;

    public function __construct()
    {
        $token = config('services.openapi.sms.token');
        $this->client = new \GuzzleHttp\Client([
            'base_uri' => config('services.openapi.sms.base_uri'),
            'timeout'  => 1000,
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '. $token,
                'accept-encoding' => 'gzip, deflate',
            ],
        ]);
    }

    /**
     * @throws GuzzleException
     */
    public function sendSMS($phone, $message): \Psr\Http\Message\ResponseInterface
    {
        return $this->client->post(config('services.openapi.sms.method.sendSms.endpoint'), [
            'body' => json_encode([
                'test' => config('services.openapi.sms.method.sendSms.test'),
                'sender' => config('services.openapi.sms.method.sendSms.sender'),
                'body' => $message, // limit 163 chars
                'recipients' => "$phone"
            ])
        ]);
    }
}
