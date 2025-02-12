
//Specialities Slider
type Specialities = {
    img: string;
    title: string;
    button:string;
    bgcolor:string;
    textcolor:string;
    classname:string;
};

//Working process
type WorkingprocessService = {
    img: string;
    title: string;
    desc:string;
};

//Pricing Plans
import type { TablerIconComponent } from "vue-tabler-icons";
type listPriceType={
    icon: TablerIconComponent;
    iconcolor: string;
    bgcolor:string;
    listtitle: string;
    status:boolean
};
type pricingType = {
    caption: string;
    buttontext: string;
    price: number;
    yearlyprice: number;
    list:listPriceType[];
};

export type { Specialities,WorkingprocessService,pricingType }