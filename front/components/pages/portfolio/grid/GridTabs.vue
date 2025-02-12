<script setup lang="ts">
import { format } from 'date-fns';
const props = defineProps({ post: Object });
const linkTo = props.post?.title
    ?.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
</script>
<template>
        <div class="text-left  h-100 card-box">
            <div class="hover-card card-img overflow-hidden rounded-md lh-10 mb-4 position-relative h-100">
                <NuxtLink :to="linkTo">
                    <img :src="post?.coverImg" alt="post" class="zoom-in w-100" />
                </NuxtLink>
            </div>
            <div class="ms-2 position-relative">
                <h5 class="text-h5 font-weight-bold text-13">
                    <NuxtLink class="text-decoration-none text-dark hover-primary" :to="linkTo">{{ post?.title }}
                    </NuxtLink>
                </h5>
                <p v-text="post?.category" class="text-muted text-h6 font-weight-regular"></p>
            </div>
        </div>

</template>
