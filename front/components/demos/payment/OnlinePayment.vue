<script setup lang="ts">
import { OnlinepayData } from '@/_mockApis/demos/payment'
</script>
<template>
    <div class="onlinepay position-relative py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container class="max-width-xl">
                <div class="bg-lightinfo pa-lg-10 pa-7 rounded-shaped-large">
                    <div class="pa-lg-15 pa-md-7">
                        <v-row>
                            <v-col cols="12" lg="7">
                                <h2 class="text-h2 text-dark mb-md-12 mb-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">How will <span
                                        class="text-primary bg-lightinverse rounded-md">online payment</span>
                                    platform benefit your product.</h2>
                            </v-col>
                        </v-row>
                        <v-row class="align-center">
                            <v-col cols="12" md="6" class="text-lg-start text-center mb-lg-0 mb-10">
                                <img src="/images/payment/online-payment.png" class="img-fluid" alt="online payment" />
                            </v-col>
                            <v-col cols="12" md="6">
                                <h4 class="text-h4 font-weight-bold mb-md-8 mb-4">Grow revenues and delight your customers
                                    by building financial features.</h4>
                                <div class="d-flex align-center mb-7" v-for="item in OnlinepayData" :key="item.text">
                                    <img :src="item.icon" height="28" width="28">
                                    <p class="text-dark ml-6">{{ item.text }}</p>
                                </div>
                                <v-btn color="primary" size="large" class="mt-md-7 mt-5 px-9" variant="flat">
                                    get started
                                    <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>