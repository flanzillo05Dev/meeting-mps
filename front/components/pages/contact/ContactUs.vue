<script setup lang="ts">
import { ArrowRightIcon } from 'vue-tabler-icons';

</script>
<template>
    <div class="mt-95 pt-md-16 pt-5 border-top">
        <div class="border-bottom">
            <v-container>
                <div class="mb-sm-16 mb-8 pb-md-5">
                    <h2 class="text-h2 text-dark mb-sm-15 mb-7 text-sm-start text-center">Contact Us</h2>
                    <v-row>
                        <v-col cols="12" md="5">
                            <div class="d-sm-flex d-block align-start text-md-start text-center">
                                <v-avatar class="bg-lightprimary mb-sm-0 mb-4" size="66">
                                    <img src="/images/icon/icon-mail.svg" height="34" width="34">
                                </v-avatar>
                                <div class="ml-md-12 ml-sm-5">
                                    <h3 class="text-h5 font-weight-bold text-dark mb-2">EMAIL US</h3>
                                    <p class="text-body-1 text-muted mb-md-10 mb-sm-5 mb-3">Please feel free to drop us a
                                        line. We will
                                        respond as soon as possible.</p>
                                    <NuxtLink to="#"
                                        class="text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start">
                                        Leave a message
                                        <ArrowRightIcon class="ml-4" stroke-width="1.2" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="5">
                            <div class="d-sm-flex d-block align-start mt-md-0 mt-3 text-md-start text-center">
                                <v-avatar class="bg-lightprimary mb-sm-0 mb-4" size="66">
                                    <img src="/images/icon/icon-career.svg" height="34" width="34">
                                </v-avatar>
                                <div class="ml-md-12 ml-sm-5">
                                    <h3 class="text-h5 font-weight-bold text-dark mb-2">CAREERS</h3>
                                    <p class="text-body-1 text-muted mb-md-10 mb-sm-5 mb-3">Please feel free to drop us a
                                        line. We will
                                        respond as soon as possible.</p>
                                    <NuxtLink to="#"
                                        class="text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start">
                                        Leave a message
                                        <ArrowRightIcon class="ml-4" stroke-width="1.2" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="mb-sm-16 mb-10 pb-md-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d133882.93730002322!2d70.40910303944116!3d20.89705364701693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd329f0417cb75%3A0x2f5a510de9857963!2sShree%20Somnath%20Jyotirling%20Temple!5e0!3m2!1sen!2sin!4v1666170979861!5m2!1sen!2sin"
                        width="100%" height="400" style="border:0;" allowfullscreen="true" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </v-container>
        </div>
    </div>
</template>