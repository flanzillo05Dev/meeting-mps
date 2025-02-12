<script setup lang="ts">
</script>
<template>
    <section>
        <div class="bg-lightinfo py-md-16 py-sm-5 ">
            <div class="py-md-16 py-5 ">
                <v-container>
                    <v-row class="mx-n6">
                        <v-col cols="12" md="6" class="px-6">
                            <div class="work-revenue position-relative text-center text-sm-start z-index1">
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    <h2 class="text-h2 font-weight-bold text-dark mb-6 pr-lg-16 ">Work done by us to grow your
                                        revenue</h2>
                                    <p class="text-muted mb-6 text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elited do
                                        eiusmod tempor incididunt.</p>
                                    <v-btn color="primary" size="large" class="px-9" variant="flat">
                                        get started
                                        <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                                    </v-btn>
                                </div>
                                <v-card elevation="10" class="mt-md-15 mt-8">
                                    <div class="pa-sm-10 pa-5">
                                        <h4 class="text-h4 font-weight-bold pr-md-16 mr-md-16 lh-26 text-dark mb-6 lh-28">Weby Dashboard
                                            Design Project &
                                            Branding</h4>
                                        <NuxtLink to="/"
                                            class="font-weight-medium text-decoration-none d-flex align-center text-primary card-link">
                                            Learn More
                                            <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                        </NuxtLink>
                                    </div>
                                    <div class="text-end mt-3 lh-10">
                                        <img src="/images/it/developer.png" class="img-fluid" alt="">
                                    </div>
                                </v-card>
                                <div class="position-absolute shape z-index-n1">
                                    <img src="/images/shape/shapeline-2.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" class="px-6">
                            <v-card elevation="10" class="position-relative z-index1">
                                <div class="pa-sm-10 pa-5">
                                    <h4 class="text-h4 font-weight-bold pr-md-16 mr-md-16 lh-26 text-dark mb-6 lh-28">Apex Mobile Application
                                        Development</h4>
                                    <NuxtLink to="/"
                                        class="font-weight-medium text-decoration-none d-flex align-center text-primary card-link">
                                        Learn More
                                        <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                    </NuxtLink>
                                </div>
                                <div class="text-end mt-3 lh-10">
                                    <img src="/images/it/mobile.png" class="img-fluid" alt="">
                                </div>
                            </v-card>
                            <v-card elevation="10" class="mt-md-12 mt-6 position-relative z-index1">
                                <div class="pa-sm-10 pa-5">
                                    <h4 class="text-h4 font-weight-bold pr-md-16 mr-md-16 lh-26 text-dark mb-6 lh-28">Frontend Development
                                        Project in React</h4>
                                    <NuxtLink to="/"
                                        class="font-weight-medium text-decoration-none d-flex align-center text-primary card-link">
                                        Learn More
                                        <ChevronRightIcon size="17" class="ml-2" stroke-width="2.5" />
                                    </NuxtLink>
                                </div>
                                <div class="text-end mt-3 lh-10">
                                    <img src="/images/it/project.png" class="img-fluid" alt="">
                                </div>
                            </v-card>
                        </v-col>

                    </v-row>
                </v-container>
            </div>
        </div>
</section></template>