import type { Services, BuildFeatures } from "@/types/demos/corporate";

//Services
import icon1 from '/images/it/svgs/abs024.svg';
import icon2 from '/images/it/svgs/com006.svg';
import icon3 from '/images/it/svgs/fin006.svg';

const ServicesData: Services[] = [
    {
        img: icon1,
        title: '4.86',
        desc: 'Out of 5 stars from 3896 reviews on google platform',
    },
    {
        img: icon2,
        title: '364',
        desc: 'Client testimonials received in year 2024',
    },
    {
        img: icon3,
        title: '45M+',
        desc: 'Revenue generated through new projects & marketing',
    },
]

//Build Features
import featureicon1 from '/images/it/svgs/abs014.svg';
import featureicon2 from '/images/it/svgs/abs020.svg';
import featureicon3 from '/images/it/svgs/abs027.svg';

const BuildFeaturesData: BuildFeatures[] = [
    {
        icon: featureicon1,
        title: 'Beautiful designs premade',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    },
    {
        icon: featureicon2,
        title: 'Coded with much care & notes',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    },
    {
        icon: featureicon3,
        title: 'Amazing demos included',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '/',
    }
]

export { ServicesData,BuildFeaturesData };