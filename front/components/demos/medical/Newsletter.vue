<template>
    <div class="email-newsletter bg-lightinfo py-md-12 py-5 position-relative">
        <div class="py-md-8 py-sm-5">
            <v-container>
                <v-row class="justify-center text-center">
                    <v-col cols="12" md="8">
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <h2 class="text-center text-h2 text-dark font-weight-bold mb-5">How Can We Help You?</h2>
                            <p class="text-muted  text-body-1 mb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            <v-row class="justify-center">
                                <v-col cols="12" sm="9">
                                    <div class="newsletter-conatiner rounded-pill justify-center bg-surface elevation-10 py-2 px-3">
                                        <div class="d-flex">
                                            <v-text-field variant="plain" density="comfortable"
                                                class="position-relative rounded-pill bg-surface" placeholder="Type your email"
                                                single-line hide-details rounded>
                                            </v-text-field>
                                            <v-btn variant="flat" size="large" class="px-sm-10 px-5" rounded
                                                color="primary">subscribe</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>