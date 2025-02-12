<script setup lang="ts">
import PortfolioThreeCols from './PortfolioThreeColums.vue';
import { ref, onMounted, computed } from 'vue';
import { useBlogStore } from '@/store/portfolio';

const store = useBlogStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts = computed(() => {
    return store.blogposts;
});

const page1 = ref(1);

</script>
<template>
    <div class="mt-95 pt-md-10 border-top">
        <v-container>
            <v-row>
                <template v-for="(post, i) in getPosts" :key="post.id">
                    <PortfolioThreeCols :post="post" />
                </template>
                <v-col cols="12" class="mt-md-5 mt-3">
                    <v-pagination v-model="page1" :length="4" rounded="circle" density="comfortable"
                        class="no-effect"></v-pagination>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
