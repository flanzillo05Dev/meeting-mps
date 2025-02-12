<template>
    <div class="start-project bg-darkblue py-md-15 py-8">
        <div class="py-md-8 py-sm-5">
            <v-container>
                <v-row class="align-center justify-space-between">
                    <v-col cols="12" md="5">
                        <div>
                            <div class="d-flex align-center mb-5">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-white font-weight-bold">we can help</h6>
                        </div>
                            <h2 class="text-h2 py-6 text-white">Let’s discuss about your project and take it the next level.</h2>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <h6 class="text-body-1 text-muted font-weight-regular">Phone</h6>
                                    <h5 class="font-weight-medium text-h5 text-white">+323-25-8964</h5>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <h6 class="text-body-1 text-muted font-weight-regular">Email</h6>
                                    <h5 class="font-weight-medium text-h5 text-white">me@landingpro.com</h5>
                                </v-col>
                                <v-col cols="12">
                                    <h6 class="text-body-1 text-muted font-weight-regular">Location</h6>
                                    <h5 class="font-weight-medium text-h5 text-white">Mark Avenue, Dalls Road, New York</h5>
                                </v-col>
                                <v-col cols="12">
                                    <!-----Trusted logos---->
                                    <div class="border-top-dark pt-md-15 pt-7 mt-md-8 mt-2">
                                        <h6 class="text-h6 text-muted font-weight-medium mb-7">Trusted by</h6>
                                        <ul class="d-sm-flex d-block align-center justify-sm-start justify-center">
                                            <li class="me-sm-4 mb-sm-0 mb-4">
                                                <NuxtLink to="/"><img src="/images/corporate/google-pay.png"
                                                        alt="google pay" /></NuxtLink>
                                            </li>
                                            <li class="mx-sm-5 mb-sm-0 mb-4">
                                                <NuxtLink to="/"><img src="/images/corporate/pay-junction.png"
                                                        alt="pay junction" /></NuxtLink>
                                            </li>
                                            <li class="mx-sm-5 mb-sm-0 mb-4">
                                                <NuxtLink to="/"><img src="/images/corporate/stripe.png" alt="strip" />
                                                </NuxtLink>
                                            </li>
                                            <li class="mx-sm-5">
                                                <NuxtLink to="/"><img src="/images/corporate/wise.png" alt="wise" />
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" md="5">
                        <div class="position-relative">
                            <img src="/images/shape/footer-v3-shapeline.png" alt="shape"
                                class="position-absolute img-fluid top-icon mt-6" />
                            <v-card elevation="0" class="position-relative rounded-md z-index1">
                                <div class="pa-md-11 pa-sm-8 pa-4">
                                    <h4 class="text-dark text-h4 font-weight-bold mb-7">Start the project</h4>
                                    <v-form class="project-form">
                                        <v-row>
                                            <v-col cols="12" sm="6" class="pb-1">
                                                <v-text-field variant="outlined" density="comfortable" color="primary"
                                                    elevation="0" placeholder="First name" hide-details
                                                    class="" />
                                            </v-col>
                                            <v-col cols="12" sm="6" class="pb-1">
                                                <v-text-field variant="outlined" density="comfortable" color="primary"
                                                    placeholder="Last name" hide-details  />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-text-field variant="outlined" density="comfortable" color="primary"
                                                    placeholder="youremail@website.com" hide-details
                                                     />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-text-field variant="outlined" density="comfortable" color="primary"
                                                    placeholder="Country" hide-details  />
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-1">
                                                <v-textarea variant="outlined" auto-grow density="comfortable"
                                                    placeholder="Let us know about your project" rows="5" color="primary"
                                                    row-height="40" hide-details  />
                                            </v-col>
                                            <v-col cols="12" class="mb-md-3 mb-1">
                                                <div class="ml-n2">
                                                    <div class="d-flex align-center agree">
                                                        <v-checkbox color="primary" hide-details
                                                            class="mt-md-n5 mt-sm-n1 mt-n5 flex-grow-0"></v-checkbox>
                                                        <div class="text-muted pl-2">
                                                            I have read and acknowledge the
                                                            <NuxtLink to="/"
                                                                class=" opacity-1 text-decoration-none text-primary">
                                                                Terms and Conditions</NuxtLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" class="pt-0">
                                                <v-btn color="primary" variant="flat" size="large" block>submit
                                                    inquiry</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card>
                            <img src="/images/shape/circle-line.png" alt=""
                                class="img-fluid position-absolute bottom-icon ml-sm-n15 ml-n5">
                        </div>
                    </v-col>
                </v-row>
            </v-container>
    </div>
</div></template>