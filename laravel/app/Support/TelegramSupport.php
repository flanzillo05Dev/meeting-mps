<?php

namespace App\Support;

use Telegram\Bot\Exceptions\TelegramSDKException;

class TelegramSupport
{
    public static function sendMessageAlertGroup(string $message): bool
    {
        return self::sendMessage($message, config('telegram.groups.meeting_service_bot.chat_id'));
    }

    public static function sendMessage(string $message, string $chatId): bool
    {
        $botTelegram = \Telegram\Bot\Laravel\Facades\Telegram::bot();

        try {
            $botTelegram->sendMessage([
                'chat_id' => $chatId,
                'text' => $message,
            ]);
            return true;
        } catch (TelegramSDKException $e) {
            return false;
        }
    }
}
