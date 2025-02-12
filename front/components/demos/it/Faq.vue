<script setup lang="ts">
import { ref } from 'vue';
import { faqData } from '@/_mockApis/demos/itpage';
</script>
<template>
    <div class="faq pt-8">
        <v-container>
            <h2 class="text-h2 text-dark text-center mb-md-12 mb-6">Frequently asked questions</h2>
            <v-row class="justify-center">
                <v-col cols="12" md="8">
                    <v-card  elevation="0" class="rounded-md position-relative z-index1 overflow-hidden">
                        <v-expansion-panels elevation="0">
                            <v-expansion-panel elevation="0" rounded="0" v-for="item in faqData" :key="item.question">
                                <v-expansion-panel-title class="text-h5 text-dark font-weight-bold py-sm-6 py-5 px-sm-10 px-5" expand-icon="mdi-plus" collapse-icon="mdi-minus">{{ item.question }}</v-expansion-panel-title>
                                <v-expansion-panel-text class="text-h6 font-weight-regular text-muted pt-3 pb-2 lh-normal">
                                    {{ item.answer }}
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <div class="bg-lightinfo pa-6 text-center border-top">
                                <p class="mb-0">Still have questions?</p>
                                <NuxtLink to="/" class="link-primary font-weight-medium text-decoration-none text-primary">Contact our support team </NuxtLink>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
