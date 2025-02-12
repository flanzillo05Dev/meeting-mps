<script setup lang="ts">
import { ref } from 'vue';
import { PreferredPricingPlans } from '@/_mockApis/demos/payment';
import { CheckIcon, XIcon } from 'vue-tabler-icons';
/* Switch monthly/yearly pricing */
const text = ref('monthly')
const priceplan = ref(false);
const priceplanyearly = ref(false);
</script>
<template>
    <div class="preferred-price-list position-relative py-md-15 py-sm-10 pb-8">
        <v-container>
            <v-row class="justify-center text-center">
                <v-col cols="12" md="7">
                    <h2 class="text-h2 text-dark mb-5">Choose your <span class="text-primary">preferred plan</span></h2>
                    <p class="text-muted mb-4 text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </v-col>
            </v-row>
            <v-row lass="justify-center text-center">
                <v-col cols="12" md="3" sm="6" class="d-flex mx-auto bg-lightinfo rounded-md pa-2 mb-7">
                        <v-btn-toggle v-model="text" rounded="0" group>
                            <v-btn value="monthly" @click="priceplan = !priceplan" :ripple="false" class="rounded-md no-effect w-50">
                                monthly
                            </v-btn>
                            <v-btn value="annually" @click="priceplan = !priceplan" :ripple="false"  class="rounded-md no-effect w-50">
                               annually
                            </v-btn>
                        </v-btn-toggle>
                </v-col>
            
            </v-row>
            <div class="text-center text-muted text-subtitle-1 mb-sm-9">* prices based on USD</div>
            <v-row>
                <v-col cols="12" md="3" sm="6" class="d-sm-flex align-end">
                    <v-card elevation="0" class="rounded-md py-sm-5 py-4 px-0 position-relative  ">
                        <v-list class="mb-0 pl-0 bg-transparent pt-md-10 pt-8 w-100">
                            <v-list-item class="px-0 border-bottom" density="compact">
                                Monthly service fee
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                Direct debits
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                Online payments
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                Deposits to Savers
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                ATM withdrawals
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                International transaction fees
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                International ATM withdrawal
                            </v-list-item>
                            <v-list-item class="px-0 border-bottom" density="compact">
                                Overdrawn interest rate
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12" md="3" sm="6" v-for="card in PreferredPricingPlans" :key="card.caption">

                    <v-card elevation="0" class="rounded-md border pa-sm-5 pa-4 position-relative  ">
                        <h5 class="text-h5 font-weight-bold text-center">{{ card.caption }}</h5>
                        <div class="d-flex align-center mt-4 mb-4 text-center justify-center">
                            <v-chip v-if="card.tag"
                                class="position-absolute top-0 left-0 bg-warning rounded-md mt-2 ml-2">popular</v-chip>
                            <div v-if="priceplan"  class="text-h1 font-weight-regular text-dark d-flex align-center"><div class="text-h5 font-weight-regular mr-1">USD</div> {{ card.yearlyprice }}</div>
                            <div v-else class="text-h1 font-weight-regular text-dark d-flex align-center">
                                <div class="text-h5 font-weight-regular mr-1">USD</div> {{ card.price }}
                            </div>
                            <div class="mt-5  position-relative">
                                <div v-if="card.strikeprice"
                                    class="text-danger ml-1  text-decoration-line-through text-subtitle-1 strike position-absolute">{{
                                        card.strikeprice }}</div>
                                <span v-if="priceplan" class="text-h5 font-weight-regular ml-1">/Year</span>
                                <div  v-else class="text-h5 font-weight-regular ml-1">/mo</div>
                            </div>
                        </div>
                        <v-btn :color="card.btncolor" size="large" class="mt-6" flat block>{{ card.buttontext }}</v-btn>
                        <v-list class="mb-0 pl-0 bg-transparent pt-md-10 pt-8 text-center">
                            <v-list-item class="px-0 border-bottom" v-for="desc in card.list" :key="desc.listtitle"
                                density="compact">
                                <v-avatar size="20" v-if="desc.iconx" :class="'text-center bg-' + desc.bgcolor">
                                    <XIcon stroke-width="5" size="14" />
                                </v-avatar>
                                <v-avatar size="20" v-if="desc.iconcheck" :class="'text-center bg-' + desc.bgcolor">
                                    <CheckIcon stroke-width="5" size="14" />
                                </v-avatar>

                                {{ desc.listtitle }}
                            </v-list-item>
                        </v-list>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>