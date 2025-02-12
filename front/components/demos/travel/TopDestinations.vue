
<template>
    <div class="browse-category py-md-15 py-8">
        <v-container>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                <h2 class="text-h2  text-dark mb-4">Top Destinations</h2>
            </div>
            <v-row class="mt-5">
                <v-col cols="12" md="6">
                    <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100">
                        <NuxtLink to="#">
                            <img src="/images/travel/destinations-1.jpg" alt="top destination" class="img-fluid zoom-in w-100 h-100">
                        </NuxtLink>
                        <div class="browse-img-content position-absolute  mb-3 ml-sm-3">
                            <h4 class="text-white text-h4 font-weight-bold mb-1 lh-normal">OutHikingdoor Adventure</h4>
                            <p class="text-body-1 text-white">306 Destinations</p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" >
                    <v-row>
                        <v-col cols="12">
                            <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100">
                                <NuxtLink to="#">
                                    <img src="/images/travel/destinations-2.jpg" alt="top destination"
                                        class="img-fluid zoom-in w-100 h-100">
                                </NuxtLink>
                                <div class="browse-img-content position-absolute  mb-3 ml-sm-3">
                                    <h4 class="text-white text-h4 font-weight-bold mb-1 lh-normal">Outdoor Adventure</h4>
                                    <p class="text-body-1 text-white">418 Destinations</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100">
                                <NuxtLink to="#">
                                    <img src="/images/travel/destinations-3.jpg" alt="top destination"
                                        class="img-fluid zoom-in w-100 h-100">
                                </NuxtLink>
                                <div class="browse-img-content position-absolute  mb-3 ml-sm-3">
                                    <h4 class="text-white text-h4 font-weight-bold mb-1 lh-normal">Beach Adventure</h4>
                                    <p class="text-body-1 text-white">85 Destinations</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="browse-img rounded-md position-relative overflow-hidden hover-card h-100">
                                <NuxtLink to="#">
                                    <img src="/images/travel/destinations-4.jpg" alt="top destination"
                                        class="img-fluid zoom-in w-100 h-100">
                                </NuxtLink>
                                <div class="browse-img-content position-absolute  mb-3 ml-sm-3">
                                    <h4 class="text-white text-h4 font-weight-bold mb-1 lh-normal">Pilgrimage Destination</h4>
                                    <p class="text-body-1 text-white">29 Destinations</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="d-flex justify-center mt-sm-12 mt-8">
                <v-btn variant="outlined" size="large"  class="px-8" color="primary">view more</v-btn>
            </div>
        </v-container>
    </div>
</template>