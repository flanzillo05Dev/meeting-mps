<template>
    <div class="payment-banner position-relative py-md-16 py-8">
        <div class="pt-16">
            <v-container class="pt-md-8">
                <v-row class="justify-center align-center position-relative z-index1">
                    <v-col cols="12" md="7">
                        <div class="text-md-left text-center pe-md-16">
                            <h1 class="text-h1 font-weight-bold text-dark mb-6" data-aos="fade-up" data-aos-delay="200"
                                data-aos-duration="1000">
                                Quickest and easiest
                                <span class="bg-lightinverse rounded-md text-primary">online payment</span>
                                platform for your product.
                            </h1>
                            <p class="text-muted text-body-1 my-8" data-aos="fade-up" data-aos-delay="400"
                                data-aos-duration="1000">Embed powerful financial features into your product, Build in
                                minutes, launch in weeks.</p>
                            <div class="d-sm-flex d-block justify-md-start justify-center mt-8 pb-md-10" data-aos="fade-up"
                                data-aos-delay="600" data-aos-duration="1000">
                                <div>
                                    <v-btn color="primary" size="large" class="mr-sm-4 px-9 mb-sm-0 mb-3" variant="flat">
                                        get started
                                        <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                                    </v-btn>
                                </div>
                                <div>
                                    <v-btn size="large" variant="text" class="no-effect text-muted">
                                        see features
                                        <ChevronRightIcon size="18" class="ml-2" stroke-width="2.5" />
                                    </v-btn>
                                </div>
                            </div>
                            <!-----Trusted logos---->
                            <div class="mt-sm-16 mt-sm-10 mt-5" data-aos="fade-up" data-aos-delay="800"
                                data-aos-duration="1000">
                                <h6 class="text-h6 text-muted font-weight-medium mb-4">Trusted by</h6>
                                <ul class="d-sm-flex d-block align-center justify-md-start justify-center">
                                    <li class="me-sm-4 mb-sm-0 mb-4">
                                        <NuxtLink to="/"><img src="/images/payment/google-pay.png" alt="google pay" />
                                        </NuxtLink>
                                    </li>
                                    <li class="mx-sm-4 mb-sm-0 mb-4">
                                        <NuxtLink to="/"><img src="/images/payment/pay-junction.png" alt="pay junction" />
                                        </NuxtLink>
                                    </li>
                                    <li class="mx-sm-4 mb-sm-0 mb-4">
                                        <NuxtLink to="/"><img src="/images/payment/stripe.png" alt="strip" /></NuxtLink>
                                    </li>
                                    <li class="mx-sm-4">
                                        <NuxtLink to="/"><img src="/images/payment/wise.png" alt="wise" /></NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="5" sm="8">
                    <img src="/images/payment/home-phone.png" alt="hero" class="w-100" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</div></template>