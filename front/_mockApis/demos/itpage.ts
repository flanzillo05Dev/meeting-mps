import type {Buildweb,ChoosePlan,faqType } from "@/types/demos/itpage";

//Business Payment
import icon1 from '/images/it/svgs/abs014.svg';
import icon2 from '/images/it/svgs/abs027.svg';
import icon3 from '/images/it/svgs/abs020.svg';
import icon4 from '/images/it/svgs/abs014.svg';

const BuildwebData: Buildweb[] = [
    {
        img: icon1,
        title: 'Beautiful designs premade',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
        url:'/'
    },
    {
        img: icon2,
        title: 'Amazing demos included',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
        url:'/'
    },
    {
        img: icon3,
        title: 'Coded with much care & notes',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
        url:'/'
    },
    {
        img: icon4,
        title: 'Beautiful designs premade',
        desc: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
        url:'/'
    },
]

/*import tabler icons*/
import { CheckIcon, XIcon, } from 'vue-tabler-icons';
/*-- Pricing Page --*/
const ChoosePlanData: ChoosePlan[] = [
    {
        caption: 'Basic',
        price: 9,
        yearlyprice: 9 * 12,
        buttontext: 'Try free for 14 days',
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Monthly service fee',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Direct debits',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Online payments',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Deposits to Savers',
                status:false,
            },
             {
                icon: XIcon,
                iconcolor: 'muted',
                bgcolor:'lightinfo',
                listtitle: 'International transaction fees',
                status:false,
            },
        ]
    },
    {
        caption: 'Professional',
        price: 18,
        yearlyprice: 18 * 12,
        buttontext: 'Try free for 14 days',
        list: [
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Monthly service fee',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Direct debits',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Online payments',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'Deposits to Savers',
                status:false,
            },
             {
                icon: CheckIcon,
                iconcolor: 'primary',
                bgcolor:'lightinfo',
                listtitle: 'International transaction fees',
                status:false,
            },
        ]
    },

];

const faqData: faqType[] = [
    {
        question: 'Sed ut perspiciatis omnis iste?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,'
    },
    {
        question: 'Nemo enim ipsam voluptatem?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,'
    },
    {
        question: 'Duis aute irure dolor?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,'
    },
    {
        question: 'Excepteur sint occaecat cupidatat?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,'
    },
    {
        question: 'Sed ut perspiciatis unde omnis?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,'
    },
];


export {BuildwebData,ChoosePlanData,faqData};