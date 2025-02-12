<script setup lang="ts">
//  const loading=ref(true);
</script>
<template>
    <section class="feature-product py-md-12 py-5">
        <div class="py-md-10 py-sm-5">
            <v-container>
                <v-row class="align-center">
                    <v-col cols="12" md="7">
                        <div class="feature-product-img position-relative px-md-0 px-sm-12 overflow-hidden rounded-md">
                            <img src="/images/backgrounds/ziphop-art-img.svg" alt="banner"  class="position-relative z-index1 w-100 pr-md-12"/>
                        </div>
                    </v-col>
                    <v-col cols="12" md="5" class="text-lg-left text-center">
                        <v-chip color="info" rounded="md" variant="flat">Highest bidded nft</v-chip>
                        <h2 class="text-h1 text-dark font-weight-regular my-6">
                            Ziphop Amazing Digital Art
                        </h2>
                        <div class="d-flex align-center justify-lg-start justify-center">
                           
                            <v-avatar size="30" class="me-2">
                                <img src="/images/homepage/trending-collections/darrell-steward.svg" alt="profileicon" width="30" />
                            </v-avatar>
                            
                            <div class="ml-3">
                                <div class="text-subtitle-2">Created by</div>
                                <div class="text-primary font-weight-medium ">Darrell Steward</div>
                            </div>
                        </div>
                        <div class="details d-flex mt-sm-10 mt-6 justify-lg-start justify-center">
                            <div>
                                <h5 class="text-h5 mb-4">Current Bid</h5>
                                <h3 class="text-h3 text-dark font-weight-regular">4.05 ETH</h3>
                                <div class="text-muted">$4,964.17</div>
                            </div>
                            <v-divider vertical class="mx-md-12 mx-5"></v-divider>
                            <div>
                                <h5 class="text-h5 mb-4">Auction Ends in</h5>
                                <div class="d-flex">
                                        <div class="me-4">
                                            <p class="text-h3 font-weight-regular text-dark">26</p>
                                            <p class="text-muted">Hrs</p>
                                        </div>
                                        <div class="me-4">
                                            <p class="text-h3 font-weight-regular text-dark">70</p>
                                            <p class="text-muted">Min</p>
                                        </div>
                                        <div class="">
                                            <p class="text-h3 font-weight-regular text-dark">13</p>
                                            <p class="text-muted">Sec</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <v-btn color="primary" size="x-large" class="mt-12" variant="outlined">vie art work</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>