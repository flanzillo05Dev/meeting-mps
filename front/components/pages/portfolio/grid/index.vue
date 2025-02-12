<script setup lang="ts">
import GridTabs from './GridTabs.vue';
import { ref, onMounted, computed } from 'vue';
import { useBlogStore } from '@/store/portfolio';

const store = useBlogStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts = computed(() => {
    return store.blogposts;
});
const tab = ref(null);
</script>
<template>
    <div class="border-top pt-md-16 pt-5 mt-95">
        <v-container>
            <div class="portfolio">
                <v-row class="align-center">
                    <v-col cols="12" md="4">
                        <h2 class="text-h2 text-dark">Portfolio Grid</h2>
                    </v-col>
                    <v-col cols="12" md="8">
                        <ClientOnly><v-tabs v-model="tab" align-tabs="end">
                            <v-tab value="1" class="no-effect text-body-1 font-weight-regular rounded-0">All works</v-tab>
                            <v-tab value="2" class="no-effect text-body-1 font-weight-regular rounded-0">WebDesign</v-tab>
                            <v-tab value="3" class="no-effect text-body-1 font-weight-regular rounded-0">Graphic
                                Design</v-tab>
                            <v-tab value="4" class="no-effect text-body-1 font-weight-regular rounded-0">Branding</v-tab>
                            <v-tab value="5" class="no-effect text-body-1 font-weight-regular rounded-0">UI/UX</v-tab>
                        </v-tabs></ClientOnly>
                    </v-col>
                    <v-col cols="12" class="mt-7">
                        <v-window v-model="tab">
                            <v-window-item value="1">
                                <v-row>
                                    <template v-for="(post, i) in getPosts" :key="post.id">
                                        <v-col cols="12" :md="post?.column" class="mb-16  pb-8">
                                            <GridTabs :post="post" />
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-window-item>
                            <v-window-item value="2">
                                <v-row>
                                    <template v-for="(post, i) in getPosts" :key="post.id">
                                        <v-col cols="12" :md="post?.column" class="mb-16  pb-8">
                                            <GridTabs :post="post" />
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-window-item>
                            <v-window-item value="3">
                                <v-row>
                                    <template v-for="(post, i) in getPosts" :key="post.id">
                                        <v-col cols="12" :md="post?.column" class="mb-16  pb-8">
                                            <GridTabs :post="post" />
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-window-item>
                            <v-window-item value="4">
                                <v-row>
                                    <template v-for="(post, i) in getPosts" :key="post.id">
                                        <v-col cols="12" :md="post?.column" class="mb-16  pb-8">
                                            <GridTabs :post="post" />
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-window-item>
                            <v-window-item value="5">
                                <v-row>
                                    <template v-for="(post, i) in getPosts" :key="post.id">
                                        <v-col cols="12" :md="post?.column" class="mb-16  pb-8">
                                            <GridTabs :post="post" />
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
