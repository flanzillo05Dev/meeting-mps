//Sass Solution Icon
type SassSolution = {
    img: string;
    title: string;
    desc:string;
};

//Reviews
type Reviewsdata = {
    img: string;
    review: string;
    name:string;
    desg:string;
};

//Pricing cards
import type { TablerIconComponent } from "vue-tabler-icons";
type PricingPlanType={
    icon: TablerIconComponent;
    iconcolor: string;
    bgcolor:string;
    listtitle: string;
    status:boolean;
    
};
type PricingPlanTypes = {
    caption: string;
    buttontext: string;
    price: number;
    yearlyprice: number;
    cardbgcolor:boolean;
    list:PricingPlanType[];
};

//Faq Icons
type FaqIcons={
    img: string;
    title: string;
    url:string;
}

//Recent Blogs
type SassRecentBlog = {
    image:string;
    title: string;
    time:string;
    link:string;
    tag:string;
};

export type { SassSolution,Reviewsdata,PricingPlanTypes,FaqIcons,SassRecentBlog}