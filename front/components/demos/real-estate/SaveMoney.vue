<script setup lang="ts">
import { ref } from "vue";
const tab = ref(null);
const slider1 = ref(89000);
const min = ref(0);
const max = ref(100000);
const slider2 = ref(2500);
const min2 = ref(0);
const max2 = ref(100000);
</script>
<template>
  <div class="save-money py-md-15 py-sm-8 py-4">
    <v-container>
      <v-row class="justify-space-between align-center">
        <v-col cols="12" sm="6">
          <div>
            <h2 class="text-h2 text-dark mb-6">Save Your Money</h2>
            <p class="text-muted text-body-1 mb-10">
              Sometimes by accident, sometimes chunks as necessary making this
              the first true generator on the Internet.
            </p>
            <div class="position-relative mb-11">
              <div class="money-line"></div>
              <div class="d-flex justify-space-between pt-6">
                <div>
                  <div class="money-dot">
                    <div class="mini-dot"></div>
                  </div>
                  <h3 class="font-weight-bold text-h4">3% Save</h3>
                  <span class="text-muted">Above $50K</span>
                </div>
                <div>
                  <div class="money-dot">
                    <div class="mini-dot"></div>
                  </div>
                  <h3 class="font-weight-bold text-h4">5% Save</h3>
                  <span class="text-muted">Above $75K</span>
                </div>
                <div>
                  <div class="money-dot">
                    <div class="mini-dot"></div>
                  </div>
                  <h3 class="font-weight-bold text-h4">8% Save</h3>
                  <span class="text-muted">Above $90K</span>
                </div>
              </div>
            </div>
            <div class="d-flex mt-md-13 mt-8">
              <v-btn color="primary" size="x-large" class="me-3" variant="flat"
                >buy house</v-btn
              >
              <v-btn color="primary" size="x-large" variant="outlined"
                >sell house</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="5">
          <v-card elevation="0">
            <v-card-item
              class="py-md-12 py-6 pa-sm-4 pa-4 bg-primary rounded-0 rounded-t-md mt-sm-0 mt-5 save-calcultor"
            >
              <h2 class="text-h2 text-center text-white mb-5">
                Savings Calculator
              </h2>
              <ClientOnly>
                <ClientOnly><v-tabs v-model="tab" align-tabs="center">
                  <div class="tab-border rounded-md pa-2">
                    <v-tab
                      value="one"
                      class="no-effect text-body-2 rounded-md px-6"
                      >BUY</v-tab
                    >
                    <v-tab
                      value="two"
                      class="no-effect text-body-2 rounded-md px-6"
                      >SELL</v-tab
                    >
                  </div>
                </v-tabs></ClientOnly>

                <v-card-text class="px-0">
                  <v-window v-model="tab">
                    <v-window-item value="one">
                      <h5
                        class="text-h5 font-weight-bold text-white text-center text-uppercase mb-3"
                      >
                        Savings
                      </h5>
                      <div class="text-white text-center text-h1">
                        ${{ slider1 }}
                      </div>
                      <div class="position-relative">
                        <v-slider
                          class="mt-10 mb-5 mx-6"
                          v-model="slider1"
                          hide-details
                          step="20"
                          :max="max"
                          :min="min"
                        ></v-slider>
                        <div class="d-flex justify-space-between mx-6 mt-n4">
                          <div class="text-subtitle-1 font-weight-medium">
                            $10K
                          </div>
                          <div class="text-subtitle-1 font-weight-medium mr-n2">
                            $400K
                          </div>
                        </div>
                      </div>
                    </v-window-item>

                    <v-window-item value="two">
                      <h5
                        class="text-h5 font-weight-bold text-white text-center text-uppercase mb-3"
                      >
                        Savings
                      </h5>
                      <div class="text-white text-center text-h1">
                        ${{ slider2 }}
                      </div>
                      <div class="position-relative">
                        <v-slider
                          class="mt-10 mb-5 mx-6"
                          v-model="slider2"
                          hide-details
                          step="20"
                          :max="max2"
                          :min="min2"
                        ></v-slider>
                        <div class="d-flex justify-space-between mx-6 mt-n4">
                          <div class="text-subtitle-1 font-weight-medium">
                            $10K
                          </div>
                          <div class="text-subtitle-1 font-weight-medium mr-n2">
                            $400K
                          </div>
                        </div>
                      </div>
                    </v-window-item>
                  </v-window>
                </v-card-text>
              </ClientOnly>
            </v-card-item>
            <div class="pa-4 tabfooter rounded-0 rounded-b-md text-center">
              <p class="mb-0 text-20 text-white op-07">Have Questions?</p>
              <span class="text-white op-07 text-h5 font-weight-regular"
                >Call us :</span
              >
              <NuxtLink
                to="/"
                class="font-weight-bold text-decoration-none text-white text-h5 font-weight-regular"
              >
                +909 887 0980
              </NuxtLink>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.save-calcultor .v-slide-group-item--active,
.tabfooter {
  background-color: #054ac8 !important;
}
</style>
