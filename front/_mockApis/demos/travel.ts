import type { Features, LiveAnywhere, PopularCountries, Testimonials, RecentBlog } from "@/types/demos/travel";
//Feature
import icon1 from '/images/icon/icon-customer.svg';
import icon2 from '/images/icon/icon-air-balloon.svg';
import icon3 from '/images/icon/icon-price-tag.svg';
import icon4 from '/images/icon/icon-price-tag.svg';

const Featureslider: Features[] = [
    {
        img: icon1,
        title: '1,000+ local guides',
        subtitle: 'Latin words that, as they are positione not form sentences with complete.',
    },
    {
        img: icon2,
        title: '96% happy travelers',
        subtitle: 'Latin words that, as they are positione not form sentences with complete.',
    },
    {
        img: icon3,
        title: 'Best traveling offers',
        subtitle: 'Latin words that, as they are positione not form sentences with complete.',
    },
    {
        img: icon4,
        title: 'Best traveling offers',
        subtitle: 'Latin words that, as they are positione not form sentences with complete.',
    },

]


//Leave Anywhere Data
import img1 from '/images/travel/live-1.jpg';
import img2 from '/images/travel/live-2.jpg';
import img3 from '/images/travel/live-3.jpg';
import img4 from '/images/travel/live-4.jpg';
import img5 from '/images/travel/live-5.jpg';
import img6 from '/images/travel/live-6.jpg';

const LiveAnywhereSlider: LiveAnywhere[] = [
    {
        image: img1,
        name: 'Mountain Stay',
        desc: '150 Properties',
        price: 'Starts $350'
    },
    {
        image: img2,
        name: 'Forest Stay',
        desc: '150 Properties',
        price: 'Starts $230'
    },
    {
        image: img3,
        name: 'Seaside Stay',
        desc: '150 Properties',
        price: 'Starts $500'
    },
    {
        image: img4,
        name: 'Castel Stay',
        desc: '150 Properties',
        price: 'Starts $450'
    },
    {
        image: img5,
        name: 'Hill Stay',
        desc: '150 Properties',
        price: 'Starts $100'
    },
    {
        image: img6,
        name: 'Ice Mountain Stay',
        desc: '150 Properties',
        price: 'Starts $490'
    },
]

//Popular Countries
import flag1 from '/images/travel/flag/france.svg';
import flag2 from '/images/travel/flag/spain.svg';
import flag3 from '/images/travel/flag/china.svg';
import flag4 from '/images/travel/flag/turkey.svg';
import flag5 from '/images/travel/flag/germany.svg';
import flag6 from '/images/travel/flag/thailand.svg';
import flag7 from '/images/travel/flag/mexico.svg';
import flag8 from '/images/travel/flag/canada.svg';
import flag9 from '/images/travel/flag/brazil.svg';
import flag10 from '/images/travel/flag/india.svg';
import flag11 from '/images/travel/flag/colombia.svg';
import flag12 from '/images/travel/flag/malaysia.svg';

const PopularCountriesData: PopularCountries[] = [
    {
        flag: flag1,
        country: 'France',
        offer: '1500 Offers',
    },
    {
        flag: flag2,
        country: 'Spain',
        offer: '135 Offers',
    },
    {
        flag: flag3,
        country: 'China',
        offer: '1593 Offers',
    },
    {
        flag: flag4,
        country: 'Turkey',
        offer: '69 Offers',
    },
    {
        flag: flag5,
        country: 'Germany',
        offer: '589 Offers',
    },
    {
        flag: flag6,
        country: 'Thailand',
        offer: '3600 Offers',
    },
    {
        flag: flag7,
        country: 'Mexico',
        offer: '330 Offers',
    },
    {
        flag: flag8,
        country: 'Canada',
        offer: '1030 Offers',
    },
    {
        flag: flag9,
        country: 'Brazil',
        offer: '890 Offers',
    },
    {
        flag: flag10,
        country: 'India',
        offer: '3100 Offers',
    },
    {
        flag: flag11,
        country: 'Colombia',
        offer: '150 Offers',
    },
    {
        flag: flag12,
        country: 'Malaysia',
        offer: '2480 Offers',
    },
]

//Testimonials
import user1 from '/images/profile/profile-5.jpg';
import user2 from '/images/profile/profile-6.jpg';
import user3 from '/images/profile/profile-7.jpg';


const TestimonialsData: Testimonials[] = [
    {
        user: user1,
        name: 'Jordhan Daniyel',
        star: 5,
        review: 'Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That s how I would describe Jeramy and his team at The Lorem Ipsum Company.',
    },
    {
        user: user2,
        name: 'John Deo',
        star: 5,
        review: 'Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That s how I would describe Jeramy and his team at The Lorem Ipsum Company.',
    },
    {
        user: user3,
        name: 'Nirav Joshi',
        star: 5,
        review: 'Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That s how I would describe Jeramy and his team at The Lorem Ipsum Company.',
    },
]

//Recent Blogs
import blog1 from '/images/travel/blog-1.jpg';
import blog2 from '/images/travel/blog-2.jpg';
import blog3 from '/images/travel/blog-3.jpg';


const RecentBlogData: RecentBlog[] = [
    {
        image: blog1,
        title: 'Business from the brink of ruin by optimizing our website....',
        country: 'Kerala',
        time: '16 Hours ago',
        link: '/',
    },
    {
        image: blog2,
        title: 'The work is top-notch and I consistently outrank all my...',
        country: 'Japan',
        time: '1 Day ago',
        link: '/',
    },
    {
        image: blog3,
        title: 'Grow my business through organic search and marketing...',
        country: 'China',
        time: '20-04-2024',
        link: '/',
    },

]



export { Featureslider, LiveAnywhereSlider, PopularCountriesData, TestimonialsData,RecentBlogData };