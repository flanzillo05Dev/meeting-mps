<script setup lang="ts">
import { ref, onMounted } from "vue";
const sheet = computed(() => {
    return useCookie('accept_cookie').value===undefined
})

const accept = () => {
    useCookie('accept_cookie').value = true
}

const reject = () => {
    useCookie('accept_cookie').value = false
}

console.log(useCookie('accept_cookie').value)
</script>

<template>
    <v-bottom-sheet v-model="sheet">
        <v-card>
            <v-card-text title="Utilizzo dei Cookie">
                <v-row>
                    <v-col cols="12">
                        <p>
                            Utilizziamo i cookie per migliorare la tua esperienza di navigazione, ottimizzare le funzionalità del nostro sito e offrirti contenuti personalizzati. Alcuni cookie sono essenziali per il funzionamento della piattaforma, mentre altri ci aiutano ad analizzare il traffico e a migliorare i nostri servizi.
                        </p>
                        <p>
                            Puoi accettare tutti i cookie, gestire le tue preferenze o rifiutare quelli non essenziali. Per maggiori informazioni, consulta la nostra Informativa sui Cookie.
                        </p>
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="12" md="6"></v-col>
                            <v-col cols="12" md="3">
                                <v-btn
                                    block
                                    color="error"
                                    variant="outlined"
                                    @click="reject"
                                >
                                    Rifiuta
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-btn
                                    block
                                    color="success"
                                    variant="outlined"
                                    @click="accept"
                                >
                                    Accetto
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<style scoped>

</style>