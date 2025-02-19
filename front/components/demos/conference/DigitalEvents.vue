<script setup lang="ts">
import {WifiIcon, DevicesIcon, CalendarIcon } from 'vue-tabler-icons'
</script>
<template>
    <div class="digital-events py-md-12 py-5 pb-md-0">
        <div class="py-md-10 py-sm-5">
            <v-container class="px-md-16">
                <div class="text-center">
                    <h2 class="text-h2 text-dark mb-sm-11 mb-5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        Come Funziona la Consulenza Online?
                    </h2>
                    <p class="text-dark text-body-1" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        Con pochi click, potrà collegarsi con un nostro consulente e ricevere supporto specializzato senza la necessità di spostamenti.
                        Se si trova in ufficio, al termine della consulenza potrà immediatamente applicare le soluzioni discusse,
                        ottimizzando tempi e operatività.
                    </p>
                    <p class="text-dark text-body-1" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        Le consulenze si svolgono tramite <strong>videochiamate, messaggi istantanei, e-mail e chatbot avanzati</strong>,
                        consentendo un'interazione efficace e diretta.
                    </p>
                    <v-row class="mt-md-16 mt-8  justify-sm-center">
                        <v-col cols="12" lg="4" sm="8" md="4">
                            <div class="text-center text-sm-start" data-aos="fade-right" data-aos-delay="200"
                                 data-aos-duration="1000">
                                <div class="d-flex justify-center justify-sm-start">
                                    <v-avatar class="mb-4 bg-surface elevation-10" size="80">
                                        <CalendarIcon size="30" class="text-primary" />
                                    </v-avatar>
                                </div>
                                <h4 class="text-h4 text-dark font-weight-bold mb-md-6 mb-3">Prenotazione Semplice</h4>
                                <p class="text-dark">I clienti selezionano il consulente desiderato e fissano un appuntamento in base alla loro disponibilità.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="4" sm="8" md="4">
                            <div class="text-center text-sm-start" data-aos="fade-right" data-aos-delay="220"
                                 data-aos-duration="1000">
                                <div class="d-flex justify-center justify-sm-start">
                                    <v-avatar class="mb-4 bg-surface elevation-10" size="80">
                                        <WifiIcon size="30" class="text-primary" />
                                    </v-avatar>
                                </div>
                                <h4 class="text-h4 text-dark font-weight-bold mb-md-6 mb-3">Accesso da Qualsiasi Luogo</h4>
                                <p class="text-dark">Basta una connessione Internet per partecipare alla sessione, rendendo il servizio accessibile ovunque ci si trovi.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="4" sm="8" md="4">
                            <div class="text-center text-sm-start" data-aos="fade-right" data-aos-delay="240"
                                 data-aos-duration="1000">
                                <div class="d-flex justify-center justify-sm-start">
                                    <v-avatar class="mb-4 bg-surface elevation-10" size="80">
                                        <DevicesIcon size="30" class="text-primary" />
                                    </v-avatar>
                                </div>
                                <h4 class="text-h4 text-dark font-weight-bold mb-md-6 mb-3">Strumenti Digitali Intuitivi</h4>
                                <p class="text-dark">Utilizziamo piattaforme interattive e compatibili con dispositivi mobili, garantendo un'esperienza fluida e senza interruzioni.</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
    </div>
</template>