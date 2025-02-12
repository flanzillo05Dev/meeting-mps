<?php

namespace Database\Seeders;

use App\Models\MeetingSlotDatetimeModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class MeetingSlotDatetimeSeeder extends Seeder
{
    public function generateRandomWeekdayDates() {
        $dates = [];
        $startDate = Carbon::parse('2025-02-14'); // Data di partenza (oggi)

        while ($startDate->lessThanOrEqualTo(now()->addMonths(2)->endOfMonth())) {
            // Escludi sabato (6) e domenica (7)
            if ($startDate->format('N') < 6) {
                $dates[] = [
                    'date' => $startDate->format('Y-m-d'),
                    'time_start' => '10:00',
                    'time_end' => '10:50',
                ];
                $dates[] = [
                    'date' => $startDate->format('Y-m-d'),
                    'time_start' => '11:00',
                    'time_end' => '11:50',
                ];
                $dates[] = [
                    'date' => $startDate->format('Y-m-d'),
                    'time_start' => '12:00',
                    'time_end' => '12:50',
                ];
                $dates[] = [
                    'date' => $startDate->format('Y-m-d'),
                    'time_start' => '15:00',
                    'time_end' => '15:50',
                ];
            }
            $startDate = $startDate->addDay();
        }

        return $dates;
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $arrRandom = collect($this->generateRandomWeekdayDates())
            ->sortBy(['date', 'time_start'])->toArray();

        $datMonthLabel = [
            1 => 'Gen',
            2 => 'Feb',
            3 => 'Mar',
            4 => 'Apr',
            5 => 'Mag',
            6 => 'Giu',
            7 => 'Lug',
            8 => 'Ago',
            9 => 'Set',
            10 => 'Ott',
            11 => 'Nov',
            12 => 'Dic',
        ];

        $_data = [];
        foreach ($arrRandom as $item) {
            $_dateTime = Carbon::parse($item['date']);
            $_data[] = [
                'year_month' => $datMonthLabel[$_dateTime->month].' '.$_dateTime->year,
                'day' => (int)$_dateTime->format('d'),
                'slot_time_start' => $item['time_start'],
                'slot_time_end' => $item['time_end'],
                'full_slot_time' => $_dateTime->format('Y-m-d').' '.$item['time_start'].':00',
            ];
        }


        MeetingSlotDatetimeModel::truncate();

        MeetingSlotDatetimeModel::upsert($_data, ['day', 'month_year', 'slot_time_start', 'slot_time_end']);
    }
}
