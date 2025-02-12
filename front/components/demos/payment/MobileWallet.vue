<script setup lang="ts">
import { ref } from 'vue';
import { CircleCheckFilledIcon } from 'vue-tabler-icons';
</script>
<template>
    <div class="position-relative pb-md-15 pb-8">
            <v-container>
                <v-row class="align-center justify-lg-space-between justify-center">
                    <v-col cols="12" md="5">
                        <h2 class="text-h2 text-dark mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            Mobile wallets made for <span class="text-primary">any situation</span></h2>
                        <p class="text-muted mb-md-6 pb-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Cards issued through us can easily be added to mobile wallets to
                            be used to buy online, in store, and in-app.</p>
                        <ul data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                            <li class="d-flex mb-6">
                                <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                <p class="text-dark">When you pay with a debit or credit card, Landingpro doesn't keep
                                    transaction information that can be tied back to you.</p>
                            </li>
                            <li class="d-flex mb-6">
                                <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                <p class="text-dark">
                                    Digital wallets are becoming more popular than ever before.
                                </p>
                            </li>
                            <li class="d-flex mb-4">
                                <div><CircleCheckFilledIcon class="text-primary  mr-3" size="30" /></div>
                                <p class="text-dark">
                                    You can also add your student ID card to Wallet to access places like your dorm and the
                                    library.
                                </p>
                            </li>
                        </ul>
                        <v-btn color="primary" size="large" class="mt-md-7 mt-5 px-9" variant="flat" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                                    get started
                                    <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                                </v-btn>
                    </v-col>
                    <v-col cols="12" md="6">
                        <img src="/images/payment/phone.png" alt="mobille wallet" class="w-100">
                    </v-col>
                </v-row>
            </v-container>
      
    </div>
</template>