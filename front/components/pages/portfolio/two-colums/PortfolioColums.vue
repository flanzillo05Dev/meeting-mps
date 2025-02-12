<script setup lang="ts">
import { format } from 'date-fns';
const props = defineProps({ post: Object });
const linkTo = props.post?.title
    ?.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
</script>
<template>
    <v-col cols="12" sm="6">
        <div class="mb-sm-6 ">
            <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
                <NuxtLink :to="linkTo" class="text-decoration-none">
                    <v-img :src="post?.coverImg" height="300px" alt="post" cover class="zoom-in w-100">
                    </v-img>
                </NuxtLink>
            </div>
            <div class="mt-4">
                <h5 class="text-h5 font-weight-bold text-13">
                    <NuxtLink class="text-decoration-none text-dark hover-primary" :to="linkTo">{{ post?.title }}</NuxtLink>
                </h5>
                <p v-text="post?.category" class="text-muted text-h6 font-weight-regular"></p>
            </div>
        </div>
    </v-col>
</template>
