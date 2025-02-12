<script setup lang="ts">
import BlogGridView from './GridView.vue';
import { ref, onMounted, computed } from 'vue';
import { useBlogGridStore } from '@/store/blog';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { format } from 'date-fns';

const store = useBlogGridStore();

onMounted(() => {
    store.fetchPosts();
});

const getPosts = computed(() => {
    return store.blogposts;
});

// theme breadcrumb
const page = ref({ title: 'Blog Grid' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Blog Grid no Sidebar',
        disabled: true,
        color: 'primary',
        to: '/'
    }
]);
const page1 = ref(1);
const selected = ref('All Categories');
const items = ref(["All Categories", "Processes and Tools", "Startups", "Digital", "Strategy", "Business"]);

</script>
<template>
    <div class="mt-95 border-top">
    <v-container class="pb-md-16 pb-8 mb-md-5 pt-10">
        <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
        <v-row class="align-center">
            <v-col cols="12" md="4">
                <h2 class="text-h2 text-dark">Blog Grid</h2>
            </v-col>
            <v-col cols="12" md="3">
                <div class="d-flex align-center">
                    <NuxtLink class="text-decoration-none text-muted pr-5" to="#">
                        <ListIcon />
                    </NuxtLink>
                    <v-select :items="items" variant="outlined" v-model="selected" density="comfortable" class="text-muted"
                        hide-details></v-select>
                </div>
            </v-col>
            <v-col cols="12" md="5">
                <div class="pl-md-2">
                    <v-text-field variant="outlined" density="comfortable" color="primary"
                        class="bg-surface  position-relative custom-placeholer-color" placeholder="Search the blog..."
                        single-line hide-details>
                        <v-btn density="compact" variant="plain"
                            class="no-effect position-absolute right-0 text-primary op-1 mr-n2 mt-n1" :ripple="false">
                            <SearchIcon size="20" stroke-width="3" />
                        </v-btn>
                    </v-text-field>
                </div>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <template v-for="(post, i) in getPosts" :key="post.id">
                <BlogGridView :post="post" />
            </template>
            <v-col cols="12" class="mt-md-5 mt-3">
                <v-pagination v-model="page1" :length="4" rounded="circle" density="comfortable"
                    class="no-effect"></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
