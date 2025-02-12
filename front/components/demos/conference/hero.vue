<script setup lang="ts">
import { CalendarIcon, BrandZoomIcon, BrandWhatsappIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="conference-hero position-relative mt-95">
        <v-container>
            <v-row class="align-center">
                <v-col cols="12" lg="5">
                    <div class="content text-sm-left text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <p class="start-on text-primary font-weight-bold text-h5 mb-4 ">INIZIA IL 14 FEBBRAIO 2025</p>
                        <h1 class="text-h1 font-weight-bold mb-5 text-dark">Nuova gestione rifiuti: quando inizia l’obbligo?</h1>
                        <p class="text-h5 font-weight-regular text-muted">
                            L’obbligo di iscrizione al RENTRI sarà introdotto in tre fasi, non trovarti impreparato!
                        </p>
                        <p class="text-h5 font-weight-regular text-muted">
                            Lasciati seguire da chi ha già affrontato il percorso di adeguamento.
                        </p>
                        <p class="text-h5 font-weight-bold text-muted mt-1">
                            Fissa una video call con noi!
                        </p>
                        <div class="d-sm-flex justify-sm-start justify-center mt-10 text-sm-left text-center">
                            <v-btn href="https://api.whatsapp.com/send?phone=3409496152"
                                color="success" size="x-large" class="mr-sm-4 px-6 mb-sm-0 mb-3 m-btn100" variant="outlined">
                                <BrandWhatsappIcon size="22" class="mr-3" />Contattaci
                            </v-btn>
                            <v-btn color="primary" size="x-large" class="px-6 m-btn100"
                                   @click="$router.push('/#next-date-meeting')"
                                   variant="flat">
                                <CalendarIcon size="22" class="mr-3" />Fissa Video call
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="7" class="position-relative">
                    <div class="mb-5 rounded-md overflow-hidden lh-10">
                        <img src="/images/conference/online-offline-conferences/img1.jpg" alt="conference"
                             class="w-100" />
                    </div>
                    <v-row>
                        <v-col cols="4">
                            <div class=" rounded-md overflow-hidden lh-10">
                                <img src="/images/conference/online-offline-conferences/img2.jpg" alt="conference"
                                     class="w-100" />
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <div class=" rounded-md overflow-hidden lh-10">
                                <img src="/images/conference/online-offline-conferences/img3.jpg" alt="conference "
                                     class="w-100" />
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <div class=" rounded-md overflow-hidden lh-10">
                                <img src="/images/conference/online-offline-conferences/img4.jpg" alt="conference "
                                     class="w-100" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>