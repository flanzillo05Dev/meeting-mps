<script setup lang="ts">
import { BussinessPaymentData } from '@/_mockApis/demos/payment'
</script>
<template>
    <div class="position-relative py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="justify-center">
                    <v-col col="12" md="8" class="text-center" data-aos="fade-up" data-aos-delay="200"
                        data-aos-duration="1000">
                        <h2 class="text-h2 text-dark mb-6">Easy and affordable for your personal and <span
                                class="text-primary">business payment</span> needs.</h2>
                        <ul class="d-md-flex align-center text-center text-muted justify-center">
                            <li>Cards</li>
                            <li class="d-none d-md-block mx-4">|</li>
                            <li>Expenses</li>
                            <li class="d-none d-md-block mx-4">|</li>
                            <li>Bill Pay</li>
                            <li class="d-none d-md-block mx-4">|</li>
                            <li>Accounting</li>
                            <li class="d-none d-md-block mx-4">|</li>
                            <li>Reporting</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mt-md-16 mt-8  justify-sm-center">
                    <v-col cols="12" lg="4" sm="8" md="4" v-for="item in BussinessPaymentData" :key="item.title">
                        <div class="text-center text-sm-start" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <div class="d-flex justify-center justify-sm-start">
                                <v-avatar class="mb-4 bg-surface elevation-10" size="80">
                                    <img :src="item.img" height="40" width="40">
                                </v-avatar>
                            </div>
                            <h4 class="text-h4 text-dark font-weight-bold mb-md-6 mb-3">{{ item.title }}</h4>
                            <p class="text-muted">{{ item.desc }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>