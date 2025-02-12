//Bussiness Payment
type BussinessPayment = {
    img: string;
    title: string;
    desc:string;
};

//Online Payment
type Onlinepay = {
    icon: string;
    text: string;
};


//Pricing Plans
import type { TablerIconComponent } from "vue-tabler-icons";
type listPriceType={
    iconx: boolean;
    iconcheck:boolean;
    iconcolor: string;
    bgcolor:string;
    listtitle: string;
    status:boolean
};
type pricingType = {
    caption: string;
    buttontext: string;
    btncolor:string;
    price: number;
    strikeprice:string;
    yearlyprice: number;
    tag:boolean;
    list:listPriceType[];
};


export type {BussinessPayment,Onlinepay,pricingType}