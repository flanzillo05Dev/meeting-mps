<script setup lang="ts">
import WhiteLogo from "@/layouts/logo/WhiteLogo.vue"
import { SendIcon } from "vue-tabler-icons";
import { ConferenceFooterExloreLinks, ConferenceFooterFeatureLinks, ConferenceFooterResourceLinks, ConferenceFooterPlateformLinks } from '@/_mockApis/footer/ConferenceFooter';
import { ConferenceSocialLinksIcons } from '@/_mockApis/footer/ConferenceFooter';
import { MailIcon, MapPinIcon, PhoneCallIcon } from 'vue-tabler-icons';
import {useDisplay} from "vuetify";

const {mdAndUp} = useDisplay()
</script>
<template>
    <section class="conference-footer bg-themecolordark position-relative">
        <v-container class="pb-3">
            <v-row>
                <v-col cols="12" sm="6">
                    <WhiteLogo />
                </v-col>
                <v-col cols="12" sm="6">
                    <div class="d-sm-flex align-center float-end fill-height">
                        <ul class="d-flex align-center">
                            <li v-for="social in ConferenceSocialLinksIcons" class="mr-4">
                                <NuxtLink :to="social.url" class="text-decoration-none text-muted">
                                    <component :is="social.icon" stroke-width="2" size="22" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
            <div class="footer-bottom border-top-dark mt-sm-12 mt-6">
                <template v-if="!mdAndUp">
                    <v-row class="text-center pt-3 text-muted">
                        <v-col cols="12">
                            <MapPinIcon size="22" />
                            San Giorgio a Cremano (NA) Via Giovanni Papini, 29, 80046
                        </v-col>
                        <v-col cols="12">
                            IT03245731215
                        </v-col>
                        <v-col cols="12">
                            <MailIcon size="22"  />
                            mpsrecuperi@pec.it
                        </v-col>
                        <v-col cols="12">
                            <div class="text-muted mb-sm-0 mb-4">©Copyright {{ (new Date()).getFullYear() }} by <a
                                href="https://www.linkedin.com/in/ferdinando-lanzillo-4b7983b9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-decoration-none text-muted"
                            >Nando</a>
                            </div>
                        </v-col>
                    </v-row>
                </template>
                <template v-else>
                    <div class="text-muted mt-8 d-flex align-start">
                        <MapPinIcon size="22" class="mr-3" />
                        San Giorgio a Cremano (NA) Via Giovanni Papini, 29, 80046
                        <div class="text-muted ml-3 mb-4 d-flex align-start">
                            | IT03245731215
                        </div>
                        <div class="text-muted ml-3 mb-4 d-flex align-start">
                            <MailIcon size="22" class="mr-3" />
                            mpsrecuperi@pec.it
                        </div>
                    </div>
                    <div class="d-sm-flex justify-space-between pt-2 align-center">
                        <div class="text-muted mb-sm-0 mb-4">©Copyright {{ (new Date()).getFullYear() }} by <a
                            href="https://www.linkedin.com/in/ferdinando-lanzillo-4b7983b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-decoration-none text-muted"
                        >Nando</a>
                        </div>
                        <div class="text-muted mb-sm-0 mb-4"></div>
                    </div>
                </template>
            </div>
    </v-container>
</section>
</template>

<style scoped lang="scss">
.bg-themecolordark {
    background-color: #256141 !important;
}
</style>