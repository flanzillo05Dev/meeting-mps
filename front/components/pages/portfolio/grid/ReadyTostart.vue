<template>
    <v-container>
        <div class="call-to-action mt-md-15 mt-7">
            <div
                class="py-sm-15 py-8 call-to-action-wrapper bg-lightprimarygray rounded-md overflow-hidden position-relative call-to-action-wrapper">
                <v-row class="align-center">
                    <v-col cols="12" md="6">
                        <div class="px-md-15 px-5 text-center text-lg-start" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h4 class="text-h4 mb-4">Pronti per iniziare?</h4>
                            <h2 class="text-h2 text-dark mb-7">Porta la tua <span class="text-primary">Attività</span>
                                al Livello Successivo</h2>
                            <v-btn size="x-large" color="primary" class="px-8" variant="flat"
                                   @click="$router.push('/#next-date-meeting')"
                            >
                                <CalendarIcon size="22" class="mr-3" />Fissa Video call
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="text-center">
                        <img src="/images/portfolio/c2a.png"  class="position-relative img-fluid pa-sm-0 pa-8"/>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>
<script setup lang="ts">
import {CalendarIcon} from "vue-tabler-icons";
</script>