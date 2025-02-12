<script setup  lang="ts">
import { ref } from 'vue';
import Comments from './Commets.vue';
import LeaveComments from './LeaveComment.vue';
import RelatedBlog from '../related-blog/index.vue';
import { format } from 'date-fns';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogGridStore } from '@/store/blog';
import { BrandFacebookIcon, BrandLinkedinIcon, BrandTwitterIcon } from 'vue-tabler-icons';
// import RelatedPortfolio from '../related-portfolio/index.vue';
const title = useRoute();
const getTitle = title.path.split('/').pop();

onMounted(() => {
    store.fetchPost(`${getTitle}`);
    store.fetchPosts();
});
const store = useBlogGridStore();

const post = computed(() => {
    return store.selectedPost;
});

const dialog = ref(false);
</script>
<template>
    <!---Model Video dialog----->
    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <div class="d-flex align-center justify-space-between pa-4">
                <h3 class="text-caption font-weight-bold text-dark">Video</h3>
                <v-btn @click="dialog = false" variant="plain" density="compact" class="no-effect mr-n4 text-dark" :ripple="false">
                    <XIcon />
                </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="pa-4">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/BHYMc9m4tQA?si=xF1wF-KW24FbWITG"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true"></iframe>
            </div>
        </v-card>
    </v-dialog>
    <div class="mt-95 border-top pt-md-12 pt-5">
        <v-container class="mb-md-15 pb-md-15  pb-md-8 ">
            <div class="blog-text-area position-relative pt-md-7 ">
                <v-row class="justify-center">
                    <v-col cols="12" md="8">
                        <div>
                            <ul class="list-unstyled d-flex flex-wrap align-center justify-center justify-sm-start">
                                <li>
                                    <NuxtLink to="#"
                                        class="py-1 px-3 rounded-md badge font-weight-medium mr-4 bg-lightprimary text-primary text-decoration-none text-capitalize">
                                        {{ post?.tag }}</NuxtLink>
                                </li>
                            </ul>
                            <h2 class="text-h2 mt-4 text-sm-start text-center">{{ post.title }}</h2>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" class="bg-surface position-relative z-index1 my-md-0 my-sm-5 my-3 ">
                        <div class="d-flex align-center justify-md-end justify-sm-start justify-center">
                            <v-avatar size="83"><img :src="post?.profile" alt="profile" /></v-avatar>
                            <div class="ml-5">
                                <h4 class="text-primary text-h4 font-weight-bold">{{ post?.name }}</h4>
                                <p class="text-muted text-h5 font-weight-regular">Author</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <!-----Blog main image----->
            <div class="py-sm-10 py-6 position-relative rounded-md overflow-hidden">
                <v-img :src="post.image" height="480" cover class="rounded-md">
                </v-img>
            </div>

            <!-----Blog part----->
            <v-row>
                <v-col cols="12" md="8">
                    <p class="text-h4 font-weight-regular mb-sm-15 mb-8">We are a dedicated team of passionate product
                        managers,developers, UX/UI designers, QA engineers experts helping businesses from new startups</p>
                    <h2 class="text-h2 text-dark mb-4">Main Heading Points</h2>
                    <p class="text-muted text-body-1 mb-sm-11 mb-6">Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown when
                        an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It
                        was popularised in the</p>
                    <div class="mb-sm-15 pb-md-3 mb-8 ">
                        <div class="d-flex align-center mb-4">
                            <v-avatar size="30" class="bg-lightprimary">
                                <CheckIcon class="text-primary" stroke-width="4" size="12" />
                            </v-avatar>
                            <div class="text-muted ml-5 text-body-1">Vivamus eu lacus scelerisque, placerat commodo lectus.
                            </div>
                        </div>
                        <div class="d-flex align-center mb-4">
                            <v-avatar size="30" class="bg-lightprimary">
                                <CheckIcon class="text-primary" stroke-width="4" size="12" />
                            </v-avatar>
                            <div class="text-muted ml-5 text-body-1">Etiam etanteatex porta fringilla.</div>
                        </div>
                        <div class="d-flex align-center mb-4">
                            <v-avatar size="30" class="bg-lightprimary">
                                <CheckIcon class="text-primary" stroke-width="4" size="12" />
                            </v-avatar>
                            <div class="text-muted ml-5 text-body-1">Nullam dignissim sem eu magna aliquet, sit amet
                                volutpat
                                tellus
                            </div>
                        </div>
                    </div>
                    <!----Video--->
                    <div class="position-relative lh-10 mb-7">
                        <img src="/images/blog/image-pc.jpg" alt="video banner" class="w-100 rounded-md" />
                        <!------Video  play button----->
                        <v-avatar size="68" class="play-btn position-absolute center-btn">
                            <v-btn height="68" width="68" @click="dialog = true" class="play-btn bg-white">
                                <PlayerPlayFilledIcon class="text-primary " size="22" />
                            </v-btn>
                        </v-avatar>
                    </div>
                    <p class="text-muted text-body-1 mb-sm-9 mb-6">
                        Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It
                        was popularised in the
                    </p>
                    <div class="ps-sm-15 ps-7 border-left-primary  mb-sm-11 mb-6">
                        <p class="text-caption  mb-md-10 mb-6 lh-normal">
                            We are a dedicated team of passionate product managers,developers, UX/UI designers, QA engineers
                            experts helping businesses from new startups
                        </p>
                        <div class="d-flex align-center">
                            <v-avatar size="83"><img src="/images/blog/cyrus.jpg" alt="profile" /></v-avatar>
                            <div class="ml-5">
                                <h4 class="text-dark text-h4 font-weight-bold">Cyrus George</h4>
                                <p class="text-body-1">Creative Head</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-muted text-body-1 mb-md-15 mb-7">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable making this the first true generator on the Internet. It uses a dictionary
                    </p>
                    <!---Tags--->
                    <div class="mb-md-13 mb-8">
                        <div class="d-sm-flex align-center border-top border-bottom py-6">
                            <h4 class="text-dark text-h4 mr-sm-5 mb-sm-0 mb-3">Tags</h4>
                            <ul class="list-unstyled d-sm-flex align-center mb-0">
                                <li class="mb-2 mb-sm-0 me-sm-4">
                                    <NuxtLink to="#"
                                        class="bg-lightprimary py-1 px-3 rounded-md d-block text-primary text-decoration-none">
                                        Trends</NuxtLink>
                                </li>
                                <li class=" mb-2 mb-sm-0 me-sm-4">
                                    <NuxtLink to="#"
                                        class="bg-lightprimary py-1 px-3 rounded-md d-block text-primary text-decoration-none">
                                        Design</NuxtLink>
                                </li>
                                <li class="mb-2 mb-sm-0 mb-sm-0">
                                    <NuxtLink to="#"
                                        class="bg-lightprimary py-1 px-3 rounded-md d-block text-primary text-decoration-none">
                                        Research</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!---Comment-->
                    <Comments />
                    <!-------------->
                    <!----Leave Comment Form--->
                    <LeaveComments />
                    <!-------------->
                </v-col>
                <v-col cols="12" md="4">
                    <v-card elevation="10" class="rounded-md bg-surface">
                        <div class="px-sm-11 px-4 pt-sm-12 pt-6 pb-sm-8 pb-6">
                            <h4 class="text-h4 text-dark font-weight-medium mb-4">Share</h4>
                            <div class="share-btn">
                                <div class="mb-4">
                                    <NuxtLink to="#"
                                        class="rounded-md fb py-4 px-5 w-100 text-white text-decoration-none d-flex align-center justify-sm-start justify-center text-h5 font-weight-regular ">
                                        <BrandFacebookIcon class="me-3" /> Facebook
                                    </NuxtLink>
                                </div>
                                <div class="mb-4">
                                    <NuxtLink to="#"
                                        class="rounded-md twitter py-4 px-5 w-100 text-white text-decoration-none d-flex justify-sm-start justify-center align-center text-h5 font-weight-regular">
                                        <BrandTwitterIcon class="me-3" /> Twitter
                                    </NuxtLink>
                                </div>
                                <div class="mb-4">
                                    <NuxtLink to="#"
                                        class="rounded-md linkedin py-4 px-5 w-100 text-white text-decoration-none d-flex justify-sm-start justify-center align-center text-h5 font-weight-regular">
                                        <BrandLinkedinIcon class="me-3" /> Linkedin
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="px-sm-11 px-4 py-sm-12 py-6 border-top">
                            <h4 class="text-h4 text-dark font-weight-medium mb-4">Join our Newsletter</h4>
                            <v-text-field density="comfortable" variant="outlined" color="primary"
                                placeholder="Email address" hide-details
                                class="custom-placeholer-color mb-4"></v-text-field>
                            <v-btn size="large" variant="flat" color="primary" block> subscribe</v-btn>
                        </div>
                    </v-card>
                </v-col>
        </v-row>
    </v-container>
    </div>
<!---Related Blog-->
<RelatedBlog />
<!------------------></template>