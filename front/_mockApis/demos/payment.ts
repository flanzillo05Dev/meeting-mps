import type {BussinessPayment,Onlinepay,pricingType } from "@/types/demos/payment";

//Business Payment
import icon1 from '/images/payment/svgs/com006.svg';
import icon2 from '/images/payment/svgs/teh002.svg';
import icon3 from '/images/payment/svgs/fin001.svg';

const BussinessPaymentData: BussinessPayment[] = [
    {
        img: icon1,
        title: 'Create an account',
        desc: 'Landingpro made easy check out across the web and in apps without having to enter any payment information.',
    },
    {
        img: icon2,
        title: 'Verify your identity',
        desc: 'Landingpro made easy check out across the web and in apps without having to enter any payment information.',
    },
    {
        img: icon3,
        title: 'Link your bank account',
        desc: 'Landingpro made easy check out across the web and in apps without having to enter any payment information.',
    },
]


//Online Payment
import img1 from '/images/payment/svgs/gra010.svg';
import img2 from '/images/payment/svgs/com005.svg';
import img3 from '/images/payment/svgs/fin001.svg';
import img4 from '/images/payment/svgs/fil004.svg';
import img5 from '/images/payment/svgs/cod001.svg';

const OnlinepayData: Onlinepay[] = [
    {
        icon: img1,
        text: 'Stop wasteful spend and save thousands with unlimited points and insights that maximize savings.',
    },
    {
        icon: img2,
        text: 'See where the company money is going in real time.',
    },
    {
        icon: img3,
        text: 'Powered by the free app that helps you run your whole business.',
    },
    {
        icon: img4,
        text: 'No more lost receipts and tedious paperwork.',
    },
    {
        icon: img5,
        text: 'It’s an all-digital card designed for online, and even in-store shopping.',
    },
]


/*import tabler icons*/
import { CheckIcon, XIcon, } from 'vue-tabler-icons';
/*-- Pricing Page --*/
const PreferredPricingPlans: pricingType[] = [
    {
        caption: 'Free',
        price: 0,
        strikeprice:'',
        tag:false,
        yearlyprice: 0 * 12,
        buttontext: 'Try for free',
        btncolor:'success',
        list: [
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free',
                status:false,
            },
            {
                iconx: true,
                iconcheck:false,
                iconcolor: 'danger',
                bgcolor:'danger',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free *',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free *',
                status:false,
            },
            {
                iconx: true,
                iconcheck:false,
                iconcolor: 'danger',
                bgcolor:'danger',
                listtitle: '',
                status:false,
            },
            {
                iconx: true,
                iconcheck:false,
                iconcolor: 'danger',
                bgcolor:'danger',
                listtitle: '',
                status:false,
            },
            {
                iconx: true,
                iconcheck:false,
                iconcolor: 'danger',
                bgcolor:'danger',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: '9.81% p.a.',
                status:false,
            },
           
        ]
    },

    {
        caption: 'Basic',
        price: 9,
        strikeprice:'USD12',
        tag:false,
        yearlyprice: 9 * 12,
        buttontext: 'Try free for 14 days',
        btncolor:'primary',
        list: [
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free & unlimited',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free & unlimited',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: '0.5%',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: '9.81% p.a.',
                status:false,
            },

        ]
    },
    {
        caption: 'Pro',
        price: 18,
        strikeprice:'USD24',
        tag:true,
        yearlyprice: 18 * 12,
        buttontext: 'Try free for 14 days',
        btncolor:'primary',
        list: [
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free & unlimited',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: 'Free & unlimited',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: '0.5%',
                status:false,
            },
            {
                iconx: false,
                iconcheck:true,
                iconcolor: 'primary',
                bgcolor:'primary',
                listtitle: '',
                status:false,
            },
            {
                iconx: false,
                iconcheck:false,
                iconcolor: '',
                bgcolor:'',
                listtitle: '6% p.a.',
                status:false,
            },

        ]
    }

];

export { BussinessPaymentData,OnlinepayData,PreferredPricingPlans};