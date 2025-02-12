<script setup lang="ts">
import { FeaturedCoursesData } from '@/_mockApis/demos/course';
</script>
<template>
    <div class="trending-collections bg-lightprimarygray py-md-12 py-5 position-relative">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <h2 class="text-h2 text-dark mb-md-12 mb-6" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            Featured courses for you</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" sm="6" v-for="item in FeaturedCoursesData" :key="item.title" data-aos="fade-up"
                        data-aos-delay="200" data-aos-duration="1000">
                        <v-card elevation="10" class="rounded-md overflow-hidden">
                            <v-img :src="item.img" height="225px" alt="post" cover class="align-start text-left">
                                <div class="pl-2 pt-3" v-if="item.chip"><v-chip
                                        :class="'text-subtitle-1 rounded-md bg-' + item.chipbg">{{
                                            item.chip
                                        }}</v-chip></div>
                            </v-img>
                            <v-card-text class="pa-4">
                                <div class="review">
                                    <div class="d-flex align-center">
                                        <div class="text-h6 font-weight-bold me-2 text-dark">{{ item.reviewrank }} </div>
                                        <ClientOnly><v-rating v-model="item.reviewstar" hover density="compact" half-increments readonly
                                            size="small" color="warning"></v-rating></ClientOnly>
                                        <div class="text-muted text-subtitle-1 mt-1 ml-2">({{ item.tottalreview }})</div>
                                    </div>
                                </div>
                                <div class="text-subtitle-1 text-muted mb-2 mt-6 font-weight-medium">{{ item.caption }}
                                </div>
                                <h5 class="mb-6 text-dark text-body-1 font-weight-bold lh-normal">
                                    <NuxtLink :to="item.link" class="text-decoration-none text-dark hover-primary">{{
                                        item.title }}</NuxtLink>
                                </h5>
                                <div class="d-flex align-center mb-5">
                                    <div class="d-flex align-center text-h6 text-muted">
                                        <ClockIcon stroke-width="2.5" size="21" class="text-muted mr-2" />{{ item.lesson
                                        }}
                                    </div>
                                    <div class="mx-3 text-muted">/</div>
                                    <div class="d-flex align-center text-h6 text-muted">
                                        <Book2Icon stroke-width="2.5" size="21" class="text-muted mr-2" />{{ item.hour }}
                                    </div>
                                </div>
                                <div class="d-flex align-center justify-space-between">
                                    <div class="d-flex align-center">
                                        <v-avatar class="rounded-md" size="38">
                                            <img :src="item.profileimg" height="38" width="38">
                                        </v-avatar>
                                        <h6 class="text-h6 font-weight-bold text-dark ml-3">{{ item.name }}</h6>
                                    </div>
                                    <div class="price">
                                        <span
                                            class="text-decoration-line-through text-dark font-weight-medium text-subtitle-1 op-04 pr-1">{{ item.regularprice }}</span>
                                        <span class="text-primary font-weight-medium text-h6">{{ item.saleprice }}</span>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <div class="position-absolute bottom-0 ml-n12 d-md-block d-none">
                <img src="/images/shape/Vectorabstract2.png" />
        </div>
    </div>
</div></template>