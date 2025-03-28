<?php

namespace App\Http\Controllers;

use App\Clients\OpenapiClientSmsClient;
use App\Models\MeetingSlotDatetimeModel;
use App\Support\TelegramSupport;
use Illuminate\Support\Carbon;

class MeetingController extends Controller
{
    public function store()
    {
        try {
            $body = request('bodyMeeting');
            $meeting = new \App\Models\MeetingModel();
            $slotTime = MeetingSlotDatetimeModel::find($body['selectedSlot']['id']);

            $datStart = $slotTime->full_slot_time->format('Y-m-d').' '.$slotTime->slot_time_start.':00';
            $datEnd = $slotTime->full_slot_time->format('Y-m-d').' '.$slotTime->slot_time_end.':00';
            $meeting->fill([
                'user_company_name' => $body['user_company_name'],
                'user_email' => $body['user_email'],
                'user_name' => $body['user_name'],
                'user_phone' => $body['user_phone']??null,
                'title' => $body['title'],
                'date_start' => $datStart,
                'date_end' => $datEnd,
            ]);
            $meeting->save();
            $slotTime->available_date = false;
            $slotTime->save();


            $bodyMeeting = $meeting->toArray();

//            if ($bodyMeeting['user_phone']) {
//                $message = substr(view('sms.meet-created', [
//                    'data' => $slotTime->full_slot_time->format('d/m/Y'),
//                    'time_start' => $slotTime->slot_time_start,
//                    'time_end' => $slotTime->slot_time_end,
//                ])->render(), 0, -1);
//
//                $res = json_decode(
//                    app(OpenapiClientSmsClient::class)
//                        ->sendSMS($bodyMeeting['user_phone'],
//                            $message
//                        )->getBody()->getContents(), TRUE);
//            }

            $bodyMeetingCreatedAt = Carbon::parse($bodyMeeting['created_at'])->format('Y-m-d H:i:s');

            TelegramSupport::sendMessageAlertGroup("
------------------------------------
Nuovo Meeting creato il: {$bodyMeetingCreatedAt}
Azienda: {$bodyMeeting['user_company_name']}
Nome e Cognome: {$bodyMeeting['user_name']}
Email: {$bodyMeeting['user_email']}
Tel./Cell.: {$bodyMeeting['user_phone']}

🗓️Data: {$slotTime->full_slot_time->format('d/m/Y')}
⏳Ora: {$slotTime->slot_time_start} / {$slotTime->slot_time_end}

👇🏻👇🏻Puoi usare il titolo e descrizione di seguito per la creazione del meet (copia e incolla) 👇🏻👇🏻

TITOLO:
🗓️ Meeting {$bodyMeeting['user_company_name']} Formativo: Novità e Implicazioni della Nuova Legge sui Rifiuti - RENTRI ♻️


DESCRIZIONE:
Gentile Cliente,

La ringraziamo per averci comunicato la ricezione del Registro di Carico e Scarico Rifiuti.

⚠️ Per un meeting efficace, la preghiamo di avere con sé:
    • ✅ Il Registro di Carico e Scarico Rifiuti aggiornato al 12 febbraio 2025
    • ✅ Gli ultimi Formulari di Identificazione dei Rifiuti (FIR)

⏳ Durata della sessione: 50 minuti

Per qualsiasi chiarimento, restiamo a sua disposizione.

Cordiali saluti,
Team MPS Recuperi S.a.s

------------------------------------
            ");

            return response()->json(['item' => $meeting]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }

    public function getById($id)
    {
        try {
            $meeting = \App\Models\MeetingModel::find($id);
            return response()->json(['item' => $meeting]);
        } catch (\Throwable $e) {
            return response()->json();
        }
    }

    public function deleteById($id)
    {
        try {
            $meeting = \App\Models\MeetingModel::find($id)->delete();
            return response()->json(['deleted' => $meeting]);
        } catch (\Throwable $e) {
            return response()->json();
        }
    }

    public function listByUserId($user_id)
    {
        try {
            $meeting = \App\Models\MeetingModel::where('user_id', $user_id)->get();
            return response()->json(['items' => $meeting]);
        } catch (\Throwable $e) {
            return response()->json();
        }
    }

    public function availableDate()
    {
        try {

            $meetingSlots = \App\Models\MeetingSlotDatetimeModel::where('available_date', 1)
                ->where('full_slot_time', '>=', now())
                ->groupBy(['year_month', 'day'])
                ->get()
            ;

            return response()->json(['items' => $meetingSlots]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
    public function availableDateSlotTime($year_month, $day)
    {
        try {

            $meetingSlots = \App\Models\MeetingSlotDatetimeModel::where('available_date', 1)
                ->where('full_slot_time', '>=', now())
                ->where('year_month', $year_month)
                ->where('day', $day)
                ->get();

            return response()->json(['items' => $meetingSlots]);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
}
