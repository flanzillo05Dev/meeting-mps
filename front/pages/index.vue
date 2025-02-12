<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/ConferenceFooter.vue';
import Hero from '@/components/demos/conference/hero.vue';
import DigitalEvents from '@/components/demos/conference/DigitalEvents.vue';
import UpCommingConference from '@/components/demos/conference/UpCommingConference.vue';
import AttendeesSay from '@/components/demos/conference/AttendeesSay.vue';
import ReadyTostart from "~/components/pages/portfolio/grid/ReadyTostart.vue";
</script>
<template>
    <!--Header-->
    <Header />
        <Hero />
        <DigitalEvents />
        <ReadyTostart />
        <UpCommingConference />
<!--        <AttendeesSay />-->
    <Footer />
</template>
