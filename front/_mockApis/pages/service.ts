import type { Specialities,WorkingprocessService,pricingType} from "@/types/pages/service";
import img1 from '/images/shape/red-abstract.svg';
import img2 from '/images/shape/yellow-abstract.svg';
import img3 from '/images/shape/blue-abstract.svg';
import img4 from '/images/shape/green-abstract.svg';

//Servicepage Specialities Data
const SpecialitiesData: Specialities[] = [
    {
        img: img1,
        title: 'We are providing 24/7 support',
        button:'Support',
        bgcolor:'lightdarkdanger',
        textcolor:'danger',
        classname:'red-abstract'
    },
    {
        img: img2,
        title: 'User Experience & Interface',
        button:'Research',
        bgcolor:'lightdarkwarning',
        textcolor:'warning',
        classname:'yellow-abstract'
    },
    {
        img: img3,
        title: 'Handling all accounts & bills',
        button:'Accounts',
        bgcolor:'purple',
        textcolor:'primary',
        classname:'blue-abstract'
    },
    {
        img: img4,
        title: 'Developing all kinds of software',
        button:'Software',
        bgcolor:'lightdarksuccess',
        textcolor:'success',
        classname:'green-abstract'
    },
]

//Workingprocess Service Data
import workimg1 from '/images/icon/icon-info.svg';
import workimg2 from '/images/icon/icon-user-research.svg';
import workimg3 from '/images/icon/icon-setting.svg';
import workimg4 from '/images/icon/icon-mvp-version.svg';
 
const WorkingprocessServiceData:WorkingprocessService[]=[
    {
        img: workimg1,
        title:'Collecting information to identify problem',
        desc:'Sometimes by sometimes chunks as necessary making this the first true gener',
    },
    {
        img: workimg2,
        title:'Conducting a user research',
        desc:'Only five centuries, but also the leap into electronic typesetting remaining essentially.',
    },
    {
        img: workimg3,
        title:'Creating low-fidelity prototypes',
        desc:'Many variations of passages of Lorem Ipsum available, but the majority have suffered',
    },
    {
        img: workimg4,
        title:'Building product MVP version',
        desc:'Sometimes by sometimes chunks as necessary making this the first true gener',
    },
]

/*import tabler icons*/
import { CheckIcon, XIcon, } from 'vue-tabler-icons';
/*-- Pricing Page --*/
const pricingPlans: pricingType[] = [
    {
        caption: 'Basic',
        price: 39,
        yearlyprice: 39 * 12,
        buttontext: 'get started',
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
                icon: CheckIcon,
                iconcolor: 'success',
                bgcolor:'lightsuccess',
                listtitle: 'Unlimited Collaborators',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'success',
                bgcolor:'lightsuccess',
                listtitle: 'Insights and Analytics',
                status:false,
            },
            {
                icon: CheckIcon,
                iconcolor: 'success',
                bgcolor:'lightsuccess',
                listtitle: 'Live Chat Support',
                status:false,
            },
            
        ]
    },

];



export { SpecialitiesData,WorkingprocessServiceData,pricingPlans};