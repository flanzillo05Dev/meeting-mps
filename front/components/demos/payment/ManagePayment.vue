<script setup lang="ts">

</script>
<template>
    <div class="manage-payment position-relative py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container class="max-width-xl">
                <div class="bg-lightinfo rounded-md pa-lg-10 pa-7">
                    <div class="pa-lg-15 pa-md-6">
                        <v-row class="justify-center">
                            <v-col cols="12" lg="9" class="text-center">
                                <h2 class="text-h2 text-dark mb-5" data-aos="fade-up" data-aos-delay="200"
                                    data-aos-duration="1000">Many ways to manage your <span class="text-primary">online
                                        payment</span>
                                </h2>
                                <p class="text-muted text-body-1">
                                    Embed powerful financial features into your product,<br>
                                    Build in minutes, launch in weeks.
                                </p>

                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-card class="bg-surface pl-lg-15 px-7  pt-lg-5 pt-7  virtual-card rounded-md mb-3" elevation="0">
                                    <v-row >
                                        <v-col cols="12" sm="6" class="pt-md-10">
                                            <h4 class="text-h4 font-weight-bold text-dark mb-4">Physical & Virtual Cards
                                            </h4>
                                            <p class="mb-md-8 mb-4 text-muted">Fully programmable, debit - credit physical &
                                                virtual
                                                cards for individuals
                                                and businesses.</p>
                                            <NuxtLink to="/"
                                                class="font-weight-medium text-decoration-none d-flex align-center text-primary">
                                                Get Started
                                                <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                            </NuxtLink>
                                        </v-col>
                                        <v-col cols="12" sm="6" class="text-sm-right text-center lh-10 pr-sm-0 pb-0">
                                            <img src="/images/payment/virtul-card.png" alt="image" class="mr-n4 img-fluid" />
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="">
                                    <v-card class="bg-surface rounded-md overflow-hidden" elevation="0">
                                        <v-row class="d-flex align-center">
                                            <v-col cols="12" sm="6">
                                                <div class="py-md-11 py-5 pl-7">
                                                    <h4 class="text-h4 font-weight-bold text-dark mb-4">Banking</h4>
                                                    <p class="mb-md-12 mb-6 text-muted">Fully programmable, debit credit
                                                        physical
                                                        & virtual cards for individuals and businesses.</p>
                                                    <NuxtLink to="/"
                                                        class="font-weight-medium text-decoration-none d-flex align-center text-primary">
                                                        Get Started
                                                        <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                                    </NuxtLink>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" sm="6" class="py-0">
                                                <div class="position-relative lh-10">
                                                    <img src="/images/payment/bank-img.png" class="w-100 card-img" />
                                                    <v-avatar class="bg-surface center-btn" size="83">
                                                        <img src="/images/payment/svgs/fin001.svg" height="35" width="35">
                                                    </v-avatar>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </div>
                                <div class="mt-9">
                                    <v-card class="bg-surface rounded-md overflow-hiden" elevation="0">
                                        <v-row class="d-flex align-center">
                                            <v-col cols="12" sm="6">
                                                <div class="py-md-11 py-5 pl-7">
                                                    <h4 class="text-h4 font-weight-bold text-dark mb-4">Payments</h4>
                                                    <p class="mb-md-12 mb-6 text-muted">Fully programmable, debit credit
                                                        physical
                                                        & virtual cards for individuals and businesses.</p>
                                                    <NuxtLink to="/"
                                                        class="font-weight-medium text-decoration-none d-flex align-center text-primary">
                                                        Get Started
                                                        <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                                    </NuxtLink>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" sm="6" class="py-0 ">
                                                <div class="position-relative lh-10">
                                                    <img src="/images/payment/payment.png" class="w-100 card-img" />
                                                    <div class="position-absolute bottom-0 left-0 ml-7 mb-6">
                                                        <div
                                                            class="px-3 py-2 mb-2 bg-white rounded-md d-flex align-center mb-2">
                                                            <img src="/images/payment/svgs/gra001.svg" width="20"
                                                                height="20" alt=""> <span
                                                                class="ms-3 font-weight-bold">sales</span>
                                                        </div>
                                                        <div
                                                            class="px-3 py-2 mb-2 bg-white rounded-md d-flex align-center mb-2">
                                                            <img src="/images/payment/svgs/com006.svg" width="20"
                                                                height="20" alt=""> <span
                                                                class="ms-3 font-weight-bold">Payroll</span>
                                                        </div>
                                                        <div class="px-3 py-2 mb-2 bg-white rounded-md d-flex align-center">
                                                            <img src="/images/payment/svgs/fin003.svg" width="20"
                                                                height="20" alt=""> <span
                                                                class="ms-3 font-weight-bold">Allowance</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </div>
                            </v-col>

                            <v-col cols="12" md="6" sm="12" class="mt-md-0 mt-sm-3 mt-3">
                                <v-card class="bg-surface  rounded-md overflow-hidden" elevation="0">
                                    <img src="/images/payment/rewards.png" class="w-100">
                                    <div class="py-lg-12 px-lg-15 py-sm-7 py-7 px-sm-7 px-7 ">
                                        <h4 class="text-h4 font-weight-bold text-dark mb-4">Access $175,000 in partner
                                            rewards</h4>
                                        <p class="mb-md-12 mb-6 text-muted">Fully programmable, debit credit
                                            physical
                                            & virtual cards for individuals and businesses.</p>
                                        <NuxtLink to="/"
                                            class="font-weight-medium text-decoration-none d-flex align-center text-primary">
                                            Get Started
                                            <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                        </NuxtLink>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>