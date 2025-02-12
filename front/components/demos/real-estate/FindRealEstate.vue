<script setup lang="ts">
import { ref } from "vue";
const tab = ref(null);
const reviewstar = ref(5);
</script>
<template>
  <div class="find-real-estate">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" md="7" sm="8">
          <h1
            class="text-h1 text-dark lh-60 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Find Your Best Real Estate
          </h1>
          <ClientOnly>
            <div class="search-tabs">
              <ClientOnly><v-tabs v-model="tab">
                <v-tab
                  value="one"
                  class="no-effect text-h5 font-weight-medium text-dark px-9 py-3 mr-1 rounded-0 rounded-t-md"
                  >Sell</v-tab
                >
                <v-tab
                  value="two"
                  class="no-effect text-h5 font-weight-medium text-dark px-9 py-3 mr-1 rounded-0 rounded-t-md"
                  >Buy</v-tab
                >
                <v-tab
                  value="three"
                  class="no-effect text-h5 font-weight-medium text-dark px-9 py-3 rounded-0 rounded-t-md"
                  >Rent</v-tab
                >
              </v-tabs></ClientOnly>

              <div
                class="bg-surface rounded-0 rounded-b-md pa-8"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <div
                      class="d-flex align-center flex-fill bg-surface border rounded-md py-3 px-5"
                    >
                      <img
                        src="/images/real-estate/svgs/gen018.svg"
                        height="25"
                        width="25"
                      />
                      <v-text-field
                        variant="plain"
                        density="comfortable"
                        class="position-relative pt-0 ml-3 custom-placeholer-color"
                        placeholder="Search Location"
                        single-line
                        hide-details
                      >
                      </v-text-field>
                    </div>
                    <div
                      class="d-sm-flex d-block justify-md-start justift center mt-7"
                    >
                      <v-btn
                        size="x-large"
                        class="mr-sm-3 mb-sm-0 mb-3 flex-fill w-50"
                        color="primary"
                        >search</v-btn
                      >
                      <v-btn
                        size="x-large"
                        class="ml-sm-3 flex-fill w-50"
                        color="info"
                        >advance search</v-btn
                      >
                    </div>
                  </v-window-item>

                  <v-window-item value="two">
                    <div
                      class="d-flex align-center flex-fill bg-surface border rounded-md py-3 px-5"
                    >
                      <img
                        src="/images/real-estate/svgs/gen018.svg"
                        height="25"
                        width="25"
                      />
                      <v-text-field
                        variant="plain"
                        density="comfortable"
                        class="position-relative pt-0 ml-3 custom-placeholer-color"
                        placeholder="Search Location"
                        single-line
                        hide-details
                      >
                      </v-text-field>
                    </div>
                    <div
                      class="d-sm-flex d-block justify-md-start justift center mt-7"
                    >
                      <v-btn
                        size="x-large"
                        class="mr-sm-3 mb-sm-0 mb-3 flex-fill w-50"
                        color="primary"
                        >search</v-btn
                      >
                      <v-btn
                        size="x-large"
                        class="ml-sm-3 flex-fill w-50"
                        color="info"
                        >advance search</v-btn
                      >
                    </div>
                  </v-window-item>

                  <v-window-item value="three">
                    <div
                      class="d-flex align-center flex-fill bg-surface border rounded-md py-3 px-5"
                    >
                      <img
                        src="/images/real-estate/svgs/gen018.svg"
                        height="25"
                        width="25"
                      />
                      <v-text-field
                        variant="plain"
                        density="comfortable"
                        class="position-relative pt-0 ml-3 custom-placeholer-color"
                        placeholder="Search Location"
                        single-line
                        hide-details
                      >
                      </v-text-field>
                    </div>
                    <div
                      class="d-sm-flex d-block justify-md-start justift center mt-7"
                    >
                      <v-btn
                        size="x-large"
                        class="mr-sm-3 mb-sm-0 mb-3 flex-fill w-50"
                        color="primary"
                        >search</v-btn
                      >
                      <v-btn
                        size="x-large"
                        class="ml-sm-3 flex-fill w-50"
                        color="info"
                        >advance search</v-btn
                      >
                    </div>
                  </v-window-item>
                </v-window>
              </div>

              <div
                class="mt-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <ClientOnly
                  ><v-rating
                    v-model="reviewstar"
                    hover
                    density="compact"
                    half-increments
                    readonly
                    color="info"
                    size="small"
                    class="ml-n1"
                  ></v-rating
                ></ClientOnly>
                <h6 class="text-18 mt-n1 text-dark">
                  4.9/5
                  <span class="text-muted font-weight-light"
                    >-from 658 reviews</span
                  >
                </h6>
              </div>
            </div>
          </ClientOnly>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
