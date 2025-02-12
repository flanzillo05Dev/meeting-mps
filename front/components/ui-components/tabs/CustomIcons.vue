<template>
   <v-sheet elevation="0">
     <ClientOnly><v-tabs
       bg-color="primary"
       next-icon="mdi-arrow-right-bold-box-outline"
       prev-icon="mdi-arrow-left-bold-box-outline"
       show-arrows
       class="no-effect"
     >
       <v-tab
         v-for="i in 30"
         :key="i"
       >
         Item {{ i }}
       </v-tab>
     </v-tabs></ClientOnly>
   </v-sheet>
 </template>