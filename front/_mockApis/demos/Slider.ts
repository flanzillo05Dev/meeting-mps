
//Nft Demo Banner slider
const SliderSettings = {
  snapAlign: "start",
  itemsToShow: 1,
  autoplay: 4000,
  wrapAround:true,
  transition:600
};

//Nft Demo Trending collection curosel
const curoselSettings = {
snapAlign: "start",
itemsToShow: 4,
itemsToScroll:4,
autoplay: false,
transition:600
};
const curoselSettingsBreakpoints = {
300: { itemsToShow: 1 },  
600: { itemsToShow: 2 },
767: { itemsToShow: 2 },
991: { itemsToShow: 3 },
1024: { itemsToShow: 4 },
1500: { itemsToShow: 4 },
1800: { itemsToShow: 4 },
};


//Highlight Slider
const HighlightSliderSettings = {
  snapAlign: "start",
  itemsToShow: 1,
  autoplay: 4000,
  wrapAround: true,
  transition: 600
};


//Upcomming Conference curosel
const UpCommingcuroselSettings = {
  snapAlign: "start",
  itemsToShow: 9,
  itemsToScroll: 1,
  autoplay: false,
  transition: 600,
  wrapAround: false

};
const UpCommingcuroselSettingsBreakpoints = {
  300: { itemsToShow: 3 },
  600: { itemsToShow: 3 },
  767: { itemsToShow: 5 },
  991: { itemsToShow: 7 },
  1024: { itemsToShow: 8 },
  1500: { itemsToShow: 9 },
  1800: { itemsToShow: 9 },
};


//Explore by categories
const CategorySettings = {
  snapAlign: "center",
  itemsToShow: 5,
  itemsToScroll: 1,
  autoplay: 4000,
  transition: 600,
  wrapAround: true
};
const CategorySettingsBreakpoints = {
  300: { itemsToShow: 1 },
  600: { itemsToShow: 2 },
  767: { itemsToShow: 3 },
  991: { itemsToShow: 4 },
  1024: { itemsToShow: 5 },
  1500: { itemsToShow: 5 },
};

//Company Logos
const CompanyLogoSettings = {
  snapAlign: "start",
  itemsToShow: 5,
  itemsToScroll: 1,
  autoplay: 3000,
  transition: 600,
  wrapAround: true
};
const CompanyLogoBreakpoints = {
  300: { itemsToShow: 1 },
  600: { itemsToShow: 2 },
  767: { itemsToShow: 4 },
  991: { itemsToShow: 4 },
  1024: { itemsToShow: 5 },
  1500: { itemsToShow: 5 },
};


//Clients Reviews 
const ClientsReviewSettings = {
  snapAlign: "start",
  itemsToShow: 1,
  itemsToScroll: 1,
  autoplay: false,
  transition: 600,
  wrapAround: false
};


//Travel Demo
//Feature 
const FeaturesliderSettings = {
  snapAlign: "start",
  itemsToShow: 3,
  itemsToScroll: 1,
  autoplay: false,
  transition: 600,
  wrapAround: true
};
const FeaturesliderBreakpoints = {
  300: { itemsToShow: 1 },
  600: { itemsToShow: 2 },
  767: { itemsToShow: 2 },
  991: { itemsToShow: 3 },
  1024: { itemsToShow: 3 },
  1500: { itemsToShow: 3 },
};

// Live Anywhere
const LeaveAnywheresliderSettings = {
  snapAlign: "start",
  itemsToShow: 3,
  itemsToScroll: 1,
  autoplay: 3000,
  transition: 600,
  wrapAround: true
};
const LeaveAnywhereBreakpoints = {
  300: { itemsToShow: 1 },
  600: { itemsToShow: 2 },
  767: { itemsToShow: 2 },
  991: { itemsToShow: 3 },
  1024: { itemsToShow: 3 },
  1500: { itemsToShow: 3 },
};

//Travel Demo Testimonials Slider
const TestimonialsSlider = {
  snapAlign: "start",
  itemsToShow: 1,
  itemsToScroll: 1,
  autoplay: 3000,
  transition: 600,
  wrapAround: true
};

//Sass Demo Review Slider
const SassReviewSlider = {
  snapAlign: "start",
  itemsToShow: 1,
  itemsToScroll: 1,
  autoplay: false,
  transition: 600,
  wrapAround: true
};


export {
  HighlightSliderSettings,
  UpCommingcuroselSettings,
  UpCommingcuroselSettingsBreakpoints,
  CategorySettings,
  CategorySettingsBreakpoints,
  CompanyLogoSettings,
  CompanyLogoBreakpoints,
  ClientsReviewSettings,
  FeaturesliderSettings,
  FeaturesliderBreakpoints,
  LeaveAnywheresliderSettings,
  LeaveAnywhereBreakpoints,
  TestimonialsSlider,
  SassReviewSlider,
  SliderSettings,
  curoselSettings,
  curoselSettingsBreakpoints
}