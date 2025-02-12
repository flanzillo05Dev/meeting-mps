//Why Choose Us
type WhyChooseUs = {
    img: string;
    title: string;
    desc:string;
};

//Client Reviews
type ClientReview = {
   star:number;
   review:string
   name:string;
   position:string;
};

export type {WhyChooseUs,ClientReview}