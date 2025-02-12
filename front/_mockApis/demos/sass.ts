import type { SassSolution,Reviewsdata,PricingPlanTypes, FaqIcons,SassRecentBlog} from "@/types/demos/sass";

//Sass Solution Icons
import icon1 from '/images/sass/svgs/hashtag.svg';
import icon2 from '/images/sass/svgs/tracking-app.svg';
import icon3 from '/images/sass/svgs/growth.svg';
import icon4 from '/images/sass/svgs/megaphone.svg';

const SassSolutionData: SassSolution[] = [
    {
        img: icon1,
        title: ' Hashtag targeting',
        desc:'Letraset sheets containing Lorem Ipsum passages more recently with desktop publishing Various',
    },
    {
        img: icon2,
        title: ' Track activity',
        desc:'making this the first true on the Internet. It uses a dictionary with ahandful',
    },
    {
        img: icon3,
        title: 'Track growth',
        desc:'Randomised words which dont look even slightly believable. If you are going to use a passage',
    },
    {
        img: icon4,
        title: ' Digital Marketing',
        desc:'Letraset sheets containing Lorem Ipsum passages and more recently with Various.',
    },

]

//Reviews
import user1 from '/images/profile/profile-6.jpg';
import user2 from '/images/profile/profile-5.jpg';
import user3 from '/images/profile/profile-7.jpg';
const ReviewsData: Reviewsdata[] = [
    {
        img: user1,
        review: 'Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet Best Saas Product publishing software like Aldus PageMaker including recentlydesktop. ',
        name:'Martin Johnson',
        desg:'Creative head',
    },
    {
        img: user2,
        review: 'Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet Best Saas Product publishing software like Aldus PageMaker including recentlydesktop. ',
        name:'James Adamson',
        desg:'Creative head',
    },
    {
        img: user3,
        review: 'Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet Best Saas Product publishing software like Aldus PageMaker including recentlydesktop. ',
        name:'Robert Wilson',
        desg:'Creative head',
    },
]


//Pricing Plans Cards
/*import tabler icons*/
import { CheckIcon, XIcon, } from 'vue-tabler-icons';
const PricingPlanTypesData: PricingPlanTypes[] = [
    {
        caption: 'Basic',
        price: 39,
        yearlyprice: 39 * 12,
        buttontext: 'get started',
        cardbgcolor:false,
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'success',
                bgcolor:'lightsuccess',
                listtitle: 'Training Intake / Requests',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'success',
                bgcolor:'lightsuccess',
                listtitle: 'Planning Board',
                status:false,
            },
            {
                icon: XIcon,
                iconcolor: 'danger',
                bgcolor:'lightdarkdanger',
                listtitle: 'Unlimited Collaborators',
                status:true,
            },
            {
                icon: XIcon,
                iconcolor: 'danger',
                bgcolor:'lightdarkdanger',
                listtitle: 'Insights and Analytics',
                status:true,
            },
            {
                icon: XIcon,
                iconcolor: 'danger',
                bgcolor:'lightdarkdanger',
                listtitle: 'Live Chat Support',
                status:true,
            },
        ]
    },
    {
        caption: 'Paltinum',
        price: 59,
        yearlyprice: 59 * 12,
        buttontext: 'get started',
        cardbgcolor:true,
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'white',
                bgcolor:'white',
                listtitle: 'Training Intake / Requests',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'white',
                bgcolor:'white',
                listtitle: 'Planning Board',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'white',
                bgcolor:'white',
                listtitle: 'Unlimited Collaborators',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'white',
                bgcolor:'white',
                listtitle: 'Insights and Analytics',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'white',
                bgcolor:'white',
                listtitle: 'Live Chat Support',
                status:false,
            },
            
        ]
    },

];

//Faq Icons
import icn1 from '/images/sass/svgs/best-price.svg';
import icn2 from '/images/sass/svgs/offer.svg';
import icn3 from '/images/sass/svgs/valid.svg';
import icn4 from '/images/sass/svgs/customer-support.svg';
import icn5 from '/images/sass/svgs/protected.svg';
import icn6 from '/images/sass/svgs/settings.svg';

const FaqIconsData: FaqIcons[] = [
    {
        img: icn1,
        title: 'Pricing plans',
        url:'/'
    },
    {
        img: icn2,
        title: 'Special offers',
        url:'/'
    },
    {
        img: icn3,
        title: 'Payments methods',
        url:'/'
    },
    {
        img: icn4,
        title: 'Customer support',
        url:'/'
    },
    {
        img: icn5,
        title: 'General Terms',
        url:'/'
    },
    {
        img: icn6,
        title: 'Features & product',
        url:'/'
    },
]


//Recent Blogs
import blog1 from '/images/sass/blog-1.jpg';
import blog2 from '/images/sass/blog-2.jpg';
import blog3 from '/images/sass/blog-3.jpg';


const SassRecentBlogData: SassRecentBlog[] = [
    {
        image: blog1,
        title: 'Business from the brink of ruin by optimizing our website',
        time: '16 Hours ago',
        tag:'Pricing',
        link: '/',
    },
    {
        image: blog2,
        title: 'The work is top-notch and I consistently outrank all my',
        time: '1 Day ago',
        tag:'Meeting',
        link: '/',
    },
    {
        image: blog3,
        title: 'Grow my business through organic search and marketing',
        time: '20-04-2024',
        tag:'Updates',
        link: '/',

    },

]

export { SassSolutionData,ReviewsData,PricingPlanTypesData,FaqIconsData,SassRecentBlogData};