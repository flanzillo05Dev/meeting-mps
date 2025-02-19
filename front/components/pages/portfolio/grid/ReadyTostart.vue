<template>
    <v-container>
        <div class="call-to-action mt-md-15 mt-7">
            <div
                class="py-sm-15 py-8 call-to-action-wrapper bg-lightprimarygray rounded-md overflow-hidden position-relative call-to-action-wrapper">
                <v-row class="align-center">
                    <v-col cols="12" md="6">
                        <div class="px-md-15 px-5 text-center text-lg-start" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                            <h2 class="text-h2 text-dark mb-7">
                                I Vantaggi della <span class="text-primary">Consulenza Online</span>
                            </h2>
                            <ul data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                                <li class="d-flex mb-6">
                                    <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                    <p class="text-dark">Prenoti la sua sessione secondo le sue esigenze, gestendo al meglio impegni personali e professionali.</p>
                                </li>
                                <li class="d-flex mb-6">
                                    <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                    <p class="text-dark">
                                        Un team di esperti in diversi settori, pronto a fornirle consulenze mirate e personalizzate.
                                    </p>
                                </li>
                                <li class="d-flex mb-4">
                                    <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                    <p class="text-dark">
                                        Elimina le spese di viaggio e i costi logistici legati alle consulenze in presenza, ottenendo lo stesso livello di professionalità e competenza.
                                    </p>
                                </li>
                                <li class="d-flex mb-4">
                                    <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                    <p class="text-dark">
                                        Lavorare da un ambiente familiare favorisce un'interazione più rilassata e produttiva, permettendole di ottenere il massimo beneficio dalla sessione.
                                    </p>
                                </li>
                            </ul>

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
import {CalendarIcon, CircleCheckFilledIcon} from "vue-tabler-icons";
</script>