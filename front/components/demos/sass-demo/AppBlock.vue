<template>
    <div class="bg-primary pt-sm-13 pt-8 overflow-hidden">
        <v-container>
            <v-row class="align-center flex-sm-row flex-column-reverse">
                <v-col cols="12" sm="5" class="pb-0 ">
                    <div class="c2a-img position-relative text-center text-md-start">
                        <img src="/images/sass/c2a-sass.png" alt="ca2 banner" class="img-fluid position-relative z-index1 mb-md-n3 mb-sm-n8 mb-n3 mt-sm-0 mt-6" />
                        <div class="pulse-animation position-absolute bottom-0 right-0">
                            <div class="pulse">
                                <div class="ring"></div>
                                <div class="ring"></div>
                                <div class="ring"></div>
                                <div class="ring"></div>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="7">
                    <div class="text-sm-left text-center pl-md-15">
                        <h2 class="text-h2 font-weight-bold text-white " data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">A journey of a thousand miles begins with a single step
                        </h2>
                        <div class="d-sm-flex justify-md-start justify-center mt-6 "  data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <NuxtLink to="/" class="pb-sm-0 pb-3"><img src="/images/travel/google-play.svg" alt="google app"
                                    class="mb-sm-0 mb-2" /></NuxtLink>
                            <NuxtLink to="/" class="ml-sm-5 mb-sm-0 "><img src="/images/travel/app-store.svg"
                                    alt="apple store app" /></NuxtLink>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>