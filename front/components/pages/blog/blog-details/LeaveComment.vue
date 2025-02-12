<template>
    <div>
        <h2 class="text-h2 mb-md-11 mb-6">Leave a comment</h2>
        <v-form>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-label class="text-muted mb-2">Name*</v-label>
                    <v-text-field density="comfortable" variant="outlined"  class="custom-placeholer-color" hide-details></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-label class="text-muted mb-2">Email*</v-label>
                    <v-text-field density="comfortable" variant="outlined" class="custom-placeholer-color" hide-details></v-text-field>
                </v-col>
                <v-col cols="12" class="pt-sm-1">
                    <v-label class="text-muted mb-2">Comment*</v-label>
                    <v-textarea variant="outlined" auto-grow density="compact" 
                        rows="3" color="primary" row-height="30" hide-details class="custom-placeholer-color" />
                </v-col>
                <v-col cols="12" class="text-sm-start text-center">
                    <v-btn size="x-large" color="primary">post comment</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>