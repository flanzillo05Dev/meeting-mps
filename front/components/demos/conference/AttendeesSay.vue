<script setup lang="ts">
import { ref } from "vue";
const rating = ref(5);
</script>
<template>
    <div class="attendees-say bg-lightprimarygray py-md-12 py-5 mt-14">
        <div class="py-md-10 py-sm-5 pb-md-0 pb-sm-0 pb-0">
            <v-container>
                <v-row class="align-center">
                    <v-col cols="12" lg="4" md="4" sm="4">
                        <div class="position-relative attendee-img mr-md-15 mr-8 lh-10">
                            <img src="/images/conference/testimonial/karter.png" class="w-100" alt="review" />
                            <v-avatar size="90" class="position-absolute quote bg-white">
                                <img src="/images/conference/testimonial/inverted-comma.jpg" alt="comma">
                            </v-avatar>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="7" md="8" sm="8">
                        <div>
                            <h2 class="text-h2 text-dark mb-7">
                                Cosa dicono i nostri clienti
                            </h2>
                            <p class="text-muted text-h4  font-weight-regular">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam ac
                                rhoncus
                                faucibus, tellus justo aliquam massa, id rutrum mi ante vel mi. Fusce quis
                                aliquet
                                elit.
                            </p>
                            <div class="d-flex review mt-sm-16 mt-8">
                                <v-avatar size="60" class="mr-5">
                                    <img src="/images/conference/testimonial/jordhan.jpg" alt="profile" height="60" width="60">
                                </v-avatar>
                                <div>
                                    <h4 class="text-h4 font-weight-bold">Carlo M.</h4>
                                    <ClientOnly><v-rating v-model="rating" hover density="compact" readonly size="small" color="warning"></v-rating></ClientOnly>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style>
    .attendee-img{
        background: #b2d5ea;
    }
</style>