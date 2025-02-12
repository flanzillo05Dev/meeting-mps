//Build website
type Buildweb = {
    img: string;
    title: string;
    desc:string;
    url:string;
};

//Choose Your Plans
import type { TablerIconComponent } from "vue-tabler-icons";
type listPriceType={
    icon: TablerIconComponent;
    iconcolor: string;
    bgcolor:string;
    listtitle: string;
    status:boolean
};
type ChoosePlan = {
    caption: string;
    buttontext: string;
    price: number;
    yearlyprice: number;
    list:listPriceType[];
};


//Faq 
type faqType = {
    question:string;
    answer: string;
};

export type {Buildweb,ChoosePlan,faqType}