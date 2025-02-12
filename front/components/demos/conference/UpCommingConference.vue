<script setup lang="ts">
import axios from '@/utils/axios';
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { UpCommingcuroselSettings, UpCommingcuroselSettingsBreakpoints } from '@/_mockApis/demos/Slider';
import { ChevronLeftIcon } from "vue-tabler-icons";
import {requiredValidator} from "~/utils/validators";
import {VPhoneInput} from "v-phone-input";

import { VForm } from 'vuetify/components/VForm'
import Swal from "sweetalert2";

const refVForm = ref<VForm>()
const successBookedMeet = ref(false)

const dataAvailable = ref<DataAvailable[]>()
const dataAvailableSelected = ref<DataAvailable>()
const dataAvailableSlotTime = ref<DataAvailable[]>()

const saveSlotTime = async () => {
    const bodyMeeting = {
        user_company_name: form.value?.company_name,
        user_email: form.value?.email,
        user_name: form.value?.name,
        user_phone: form.value?.phone,
        title: 'Meeting per consultazione nuova legge rifiuti',
        meet_link: null,
        selectedSlot: form.value?.selectedSlot
    }

    await axios.post(`https://meeting-api.mpsrecuperi.it/api/meeting`, {
        bodyMeeting
    })

    await getAvailableDateTimeSlot()
    if (dataAvailableSelected.value) {
        await selectDateAvailable(dataAvailableSelected.value)
    }

    successBookedMeet.value = true
    await Swal.fire({
        title: 'Grazie per aver prenotato un appuntamento',
        text: 'Riceverai una mail di conferma con il link per accedere alla videoconferenza',
        icon: 'success',
        confirmButtonText: 'Chiudi'
    })
}

const onSubmit = () => {
    refVForm.value?.validate()
        .then(({ valid: isValid }) => {
            if (isValid)
                saveSlotTime()
        })
}

type DataAvailable = {
    id: number
    day: number
    year_month: string
    slot_time_start: string
    slot_time_end: string
}

type FormTypeValue = {
    email: string
    name: string
    company_name: string
    phone: string
    selectedSlot: DataAvailable
}

const defaultForm = ref({
    email: '',
    name: '',
    company_name: '',
    phone: '',
    selectedSlot: null
})

const form = ref({
    email: '',
    name: '',
    company_name: '',
    phone: '',
    selectedSlot: null
})

const selectDateAvailable = async (item: DataAvailable) => {
    const res = await axios.get(`https://meeting-api.mpsrecuperi.it/api/meetings/available_date/${item.year_month}/${item.day}`)
    dataAvailableSelected.value = {...item}
    dataAvailableSlotTime.value = [...res.data.items]
}

const getAvailableDateTimeSlot = async () => {
    const res = await axios.get('https://meeting-api.mpsrecuperi.it/api/meetings/available_date')
    if (res.status == 200) {
        dataAvailable.value = {...res.data.items}
    }
}

onMounted(async () => {
    await getAvailableDateTimeSlot()
})

</script>
<template>
    <div class="upcomming-conference py-md-12 py-5 " id="next-date-meeting">
        <div class="py-sm-5">
            <v-container>
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        Prossime date disponibili
                    </h2>
                </div>
                <v-row class="justify-center mt-md-11 mt-6">
                    <v-col cols="12" sm="11">
                        <carousel :settings="UpCommingcuroselSettings" :breakpoints="UpCommingcuroselSettingsBreakpoints"
                            class="">
                            <slide v-for="card in dataAvailable" :key="card.id">
                                <v-sheet class=" py-6 px-4 rounded-md w-100 mx-2 date-block cursor-pointer"
                                     :class="{
                                        'bg-primary': dataAvailableSelected?.id === card.id,
                                        'bg-lightprimarygray': dataAvailableSelected?.id !== card.id,
                                    }"
                                     @click="selectDateAvailable(card)"
                                >
                                    <h3 class="text-h3 text-muted font-weight-regular mb-2"
                                        :class="{
                                        'text-white': dataAvailableSelected?.id === card.id,
                                    }"
                                    >{{ card.day }}</h3>
                                    <p class="text-subtitle-2 text-muted font-weight-medium"
                                       :class="{
                                        'text-white': dataAvailableSelected?.id === card.id,
                                    }"
                                    >{{ card.year_month }}</p>
                                </v-sheet>
                            </slide>
                            <template #addons>
                                <navigation>
                                    <template #next>
                                        <span>
                                            <ChevronRightIcon class="text-primary" size="55" stroke-width="0.8" />
                                        </span>
                                    </template>
                                    <template #prev>
                                        <span>
                                            <ChevronLeftIcon class="text-primary" size="55" stroke-width="0.8" />
                                        </span>
                                    </template>
                                </navigation>
                            </template>
                        </carousel>
                    </v-col>
                </v-row>
                <!-----Details----->
                <v-row class="mt-sm-12 mt-6" v-if="dataAvailableSelected?.id">
                    <v-card elevation="0" class="border mx-md-0 mx-4"
                            :title="`${dataAvailableSelected?.id?'Selezionato: '+dataAvailableSelected?.day+' '+dataAvailableSelected?.year_month:''}`"
                    >
                        <v-form ref="refVForm" @submit.prevent="onSubmit">
                            <div class="pa-md-11 pa-sm-8 pa-5">
                                <v-row class="justify-space-between align-center">
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Azienda"
                                                      :disabled="successBookedMeet"
                                                      v-model="form.company_name"
                                                      :rules="[requiredValidator]" />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Nome e Cognome"
                                                      :disabled="successBookedMeet"
                                                      v-model="form.name"
                                                      :rules="[requiredValidator]" />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field label="Email" type="email"
                                                      :disabled="successBookedMeet"
                                                      v-model="form.email"
                                                      :rules="[requiredValidator]" />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-phone-input
                                            country-label=""
                                            :disabled="successBookedMeet"
                                            label="Cellulare"
                                            v-model="form.phone"
                                            :preferCountries="['IT']"
                                        />
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select label="Slot Orario" :items="dataAvailableSlotTime"
                                                  :disabled="successBookedMeet"
                                                  v-model="form.selectedSlot"
                                                  return-object
                                                  :rules="[requiredValidator]"
                                                  :item-title="(item) => `${item.slot_time_start} - ${item.slot_time_end}` "
                                        />
                                    </v-col>
                                    <v-col cols="12" >
                                        <v-divider></v-divider>
                                    </v-col>
                                </v-row>
                                <v-row justify="center">
                                    <v-col cols="12" md="6" sm="6">
                                        <v-btn
                                            v-show="!successBookedMeet"
                                            type="submit" color="primary" size="x-large" block variant="outlined">
                                            Blocca Slot
                                        </v-btn>
                                        <v-btn
                                            v-show="successBookedMeet"
                                            @click="successBookedMeet=false;form = {...defaultForm}"
                                            color="success" size="x-large" block >
                                            Nuova Video Call
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-form>
                    </v-card>
                </v-row>

            </v-container>
        </div>
    </div>
</template>