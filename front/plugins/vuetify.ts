import { ThemeDefinition, createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueTablerIcons from "vue-tabler-icons";
//Mock Api data
import "../_mockApis";

import "vue3-carousel/dist/carousel.css";

//import style
import "@/assets/scss/style.scss";

import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';
import { createVPhoneInput } from 'v-phone-input';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//Declare theme colors
const themecolors: ThemeDefinition = {
    colors: {
      primary:'#266141',
      secondary:'#89c3a3',
      danger:'#dc3545',
      info: '#89c3a3',
      success:'#3cd278',
      warning:'#f9c78f',
      light:'#f0f6fa',
      muted:'#abc6b8',
      dark:'#102d47',
      purple: '#cad7fd',
      lightmuted:'#f8fafc' ,
      lightprimary:'#DAE7FF',
      lightinfo:'#f3f9fd',
      lightinverse:'#dfebfc',
      lightgray:'#e2e8f3',
      lightprimarygray:'#deede5',
      darkprimarygray:'#1358d8',
      lightdarkdanger:'#fbcac9',
      lightdarkwarning:'#ffe8af',
      lightdarksuccess: '#7df9c2',
      lightsuccess:'#cefcf4',
      lightdarkgray:'#bccfe1',
      themecolordark: '#102c46',
      inputdark:'#143655',
      darkprimary: '#16422a',
      darkBorder:'#16422a',
      darkblue:'#102d47',
      lightborder:'#E5ECF8',
      background: '#fff',
      surface: '#fff',
      'on-surface-variant':'#fff',
      white:'#fff',
    },
};



export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            themes: {
                light: themecolors,
                variables: {},
            },
        },
        defaults: {
            VBtn: {
              style: "text-transform: capitalize; letter-spacing:0;",
              rounded: "md",
            },
        },
    });
    
    const vPhoneInput = createVPhoneInput({
        countryIconMode: 'svg',
    });
    

    nuxtApp.vueApp.use(vuetify);
    nuxtApp.vueApp.use(vPhoneInput);
    nuxtApp.vueApp.use(VueSweetalert2);
    nuxtApp.vueApp.use(PerfectScrollbar);
    nuxtApp.vueApp.use(VueTablerIcons);
});
