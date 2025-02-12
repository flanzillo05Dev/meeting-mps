<script setup lang="ts">
import logo from '@/layouts/logo/WhiteLogoIcon.vue';
const RegisterDialog = ref(false);
</script>
<template>
    <v-btn color="primary" class="ms-3 sticky-border d-lg-flex d-none" size="large" variant="flat"
        @click="RegisterDialog = true">Register</v-btn>
    <v-dialog v-model="RegisterDialog" max-width="450">
        <v-card>
            <div class="px-md-12 px-6 pt-md-15 pb-8">
                <!----Header---->
                <div class="text-center mb-6 ">
                    <logo />
                    <h4 class="text-h4 text-dark font-weight-bold mt-5 mb-sm-7 mb-4">Register your account</h4>
                </div>
                <!---------->
                <v-form class="project-form">
                    <div class="">
                        <v-text-field variant="outlined" type="text" density="comfortable" placeholder="Name"
                            color="primary" elevation="0" class="custom-placeholer-color" />
                    </div>
                    <div class="">
                        <v-text-field variant="outlined" type="email" density="comfortable" placeholder="Email address"
                            color="primary" elevation="0" class="custom-placeholer-color" />
                    </div>
                    <div>
                        <v-text-field variant="outlined" type="password" density="comfortable" placeholder="Password"
                            color="primary" elevation="0" class="custom-placeholer-color" />
                    </div>
                    <div class="ml-n2 mt-n2">
                        <div class="">
                            <v-checkbox hide-details color="primary" label="Remember me" class="text-dark">
                            </v-checkbox>
                        </div>
                    </div>
                    <div class="mt-3">
                        <v-btn size="large" color="primary" block variant="flat">
                            <LockIcon class="mr-3" size="20" /> Register Now
                        </v-btn>
                    </div>
                </v-form>
                <!----Footer---->
                <div class="text-right mt-5 pt-5">
                    <v-btn @click="RegisterDialog = false" variant="plain" density="compact"
                        class="no-effect px-0 text-dark op-1 text-h6 " min-width="auto" :ripple="false">
                        Got it, thanks!
                    </v-btn>
                </div>
                <!-------->
            </div>
        </v-card>
</v-dialog></template>