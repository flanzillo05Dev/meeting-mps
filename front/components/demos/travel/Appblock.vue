<template>
    <div class="position-relative py-md-10 py-sm-8 py-4">
        <v-container>
            <div class="bg-primary rounded-md overflow-hidden">
                <v-row class="align-center">
                    <v-col cols="12" md="7" class="pl-lg-15 pl-md-10 pl-sm-4">
                        <div class="pl-lg-10 pl-4 pr-md-0 pr-4 py-md-0 py-8  text-md-left text-center">
                            <h2 class="text-h2 font-weight-bold text-white " data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"> A journey of a thousand miles begins with a single step</h2>
                            <div class="d-sm-flex justify-md-start justify-center mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                <NuxtLink to="/" class="pb-sm-0 pb-3"><img src="/images/travel/google-play.svg"  alt="google app" class="mb-sm-0 mb-2"/></NuxtLink>
                                <NuxtLink to="/" class="ml-sm-5 mb-sm-0 "><img src="/images/travel/app-store.svg"  alt="apple store app"/></NuxtLink>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <img src="/images/travel/mobile.png"  alt="half-mobile-image" class="d-md-block d-none w-100"/>
                        <img src="/images/travel/mobile-full.png"  alt="full-mobile-image"  class="d-md-none d-block w-100"/>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>