<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { HighlightData } from '@/_mockApis/demos/conference';
import {HighlightSliderSettings } from '@/_mockApis/demos/Slider';
const dialog = ref(false);
</script>
<template>
    <div class="highlights bg-lightprimarygray py-md-12 py-5 mt-14">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row justify="center" class="text-center">
                    <v-col cols="12" md="8">
                        <div class="pr-md-10">
                            <h2 class="text-h2 text-dark mb-sm-11 mb-5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                Continuiamo a crescere perché uniamo il meglio al meglio.
                            </h2>
                            <p class="text-muted text-body-1" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                Abbiamo creato un servizio di consulenza aziendale totale, indispensabile per chi, come noi,
                                ha l’obiettivo di crescere responsabilmente. Non dovrai più rincorrere i professionisti per adempiere
                                alle numerose attività da svolgere, poiché saremo noi che puntualmente ti guideremo verso il rispetto pieno delle normative.
                                Azzeriamo i rischi derivanti da una cattiva gestione, e mettiamo al servizio dei
                                nostri clienti gli strumenti necessari per far crescere il proprio business sostenibilmente.
                            </p>
                            <div class="d-flex flex-wrap justify-space-between mt-md-15 mt-8">
                                <div>
                                    <h2 class="text-primary text-h2">18M KG</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Rifiuti recuperati</h6>
                                </div>
                                <div>
                                    <h2 class="text-primary text-h2">527 Piani</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Sicurezza gestiti</h6>
                                </div>
                                <div>
                                    <h2 class="text-primary text-h2">2032</h2>
                                    <h6 class="text-body-1 text-muted font-weight-medium">Consulenze erogate</h6>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>