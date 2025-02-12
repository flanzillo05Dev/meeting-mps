
<script setup lang="ts">
import { ref } from "vue";
import { BookmarkIcon, ListIcon } from 'vue-tabler-icons';
import { format } from 'date-fns';
const props = defineProps({ post: Object });
const linkTo = props.post?.title
    ?.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

</script>
<template>
            <v-col cols="12" md="4" sm="6"   v-if="post?.relatedBlog">
                <v-card elevation="10" rounded="md" >
                    <div class="hover-card overflow-hidden rounded-md lh-10  position-relative rounded-b-0">
                        <NuxtLink :to="linkTo">
                            <img :src="post?.image" alt="image" class="zoom-in w-100 " />
                        </NuxtLink>
                        <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                            <v-btn variant="plain" density="compact" :ripple="false"
                                class="px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle" min-width="auto"
                                height="auto">
                                <BookmarkIcon color="black" stroke-width="1.5" size="20" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="pa-4">
                        <div class="d-flex justify-space-between">
                            <v-chip class="bg-lightdarkgray text-surface rounded-md pa-2 " height="auto" size="small"
                                variant="tonal" >{{ post?.tag }}</v-chip>
                            <p class="text-muted">{{ post?.date }}</p>
                        </div>
                        <div class="pt-4">
                            <NuxtLink  :to="linkTo" class="text-decoration-none">
                                <h4 class="text-h5 font-weight-medium text-dark hover-primary lh-normal">{{ post?.title }}</h4>
                            </NuxtLink>
                        </div>
                        <div class="d-flex align-center mt-10 pt-5">
                            <v-avatar size="48"><img :src="post?.profile" alt="profile" height="48 " width="48" /></v-avatar>
                            <h4 class="text-dark  ml-3">{{ post?.name }}</h4>
                        </div>
                    </div>
                </v-card>
            </v-col>

</template>