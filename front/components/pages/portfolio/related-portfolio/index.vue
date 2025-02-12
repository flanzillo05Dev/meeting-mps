<script setup lang="ts">
import RelatedGrid from './RelatedGrid.vue';
import { ref, onMounted, computed } from 'vue';
import { useBlogStore } from '@/store/portfolio';

const store = useBlogStore();

onMounted(() => {
    store.fetchPosts();
});
const getPosts = computed(() => {
    return store.blogposts;
});

</script>
<template>
    <div class="py-md-15 py-8 bg-lightprimarygray">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex d-block align-center justify-space-between  mb-3 w-100">
                        <h2 class="text-h2 text-dark mb-1">Related Portfolio</h2>
                    </div>
                </v-col>
                <template v-for="(post, i) in getPosts" :key="post.id">
                    <RelatedGrid :post="post" />
                </template>
            </v-row>
        </v-container>
    </div>
</template>