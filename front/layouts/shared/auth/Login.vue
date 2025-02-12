<script setup lang="ts">
import { LockIcon, XIcon } from 'vue-tabler-icons';
import logo from '@/layouts/logo/WhiteLogoIcon.vue';
const LoginDialog = ref(false);
const Itheader = ref(false)
</script>
<template>
    <v-btn color="primary" size="large" variant="outlined" class="rounded-md d-md-flex d-none white-outline"
        @click="LoginDialog = true"><img src="/images/icon/icon-login-user.png" class="me-2" alt="login" />Login</v-btn>
    <!------Login Dialog------>
    <v-dialog v-model="LoginDialog" max-width="450">
        <v-card>
            <div class="px-md-12 px-6 pt-md-15 pb-8">
                <!----Header---->
                <div class="text-center mb-6 ">
                    <logo/>
                    <h4 class="text-h4 text-dark font-weight-bold mt-5 mb-sm-7 mb-4">Sign in to your account</h4>
                </div>
                <!---------->
                
                <!----Form---->
                <v-form class="project-form">
                    <div class="">
                        <v-text-field variant="outlined"  type="email" density="comfortable" color="primary" placeholder="Username" elevation="0"
                            class="custom-placeholer-color" />
                    </div>
                    <div>
                        <v-text-field variant="outlined"  type="password" placeholder="Password" density="comfortable" color="primary" elevation="0"
                            class="custom-placeholer-color" />
                    </div>
                    <div>
                        <div class="ml-n2">
                            <div class="d-flex flex-wrap align-center">
                                <v-checkbox hide-details color="primary" label="Remember me" class="text-dark">
                                </v-checkbox>
                                <div class="ml-sm-auto">
                                    <NuxtLink to="/"
                                        class="text-primary text-decoration-none text-h6 opacity-1 font-weight-regular">
                                        Forgot Password ?</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <v-btn size="large" color="primary" block variant="flat"><LockIcon class="mr-3" size="20" /> Sign in</v-btn>
                    </div>
                </v-form>
                <!-------->
                <!----Footer---->
                 <div class="text-right mt-5 pt-5">
                    <v-btn @click="LoginDialog = false"  variant="plain" density="compact" class="no-effect px-0 text-dark op-1 text-h6 " min-width="auto"
                    :ripple="false">
                    Got it, thanks!
                </v-btn>
                 </div>   
                 <!-------->
            </div>
        </v-card>
    </v-dialog>
</template>