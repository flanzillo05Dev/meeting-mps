<script setup lang="ts">

</script>
<template>
    <div class="py-md-12 py-5 position-relative">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="align-center justify-lg-space-between justify-center">
                    <v-col cols="12" md="4">
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="text-md-left text-center">
                            <h2 class="text-h2 text-dark">
                                Learn fast from experts</h2>
                            <p class="text-muted my-md-8 my-4 text-body-1">
                                Take classes on the go with the landing pro. Download to watch on the go.
                            </p>
                            <h4 class="text-h5 text-dark font-weight-bold mb-5">Get our mobile app</h4>
                            <div class="d-flex justify-md-start justify-center">
                                <NuxtLink to="/"><img src="/images/download/apple-1.png" alt="app store" class="me-5">
                                </NuxtLink>
                                <NuxtLink to="/"><img src="/images/download/gp-1.png" alt="google play"></NuxtLink>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                        <div class="position-relative">
                            <img src="/images/course/expert.png" alt="instructor" class="w-100" />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>