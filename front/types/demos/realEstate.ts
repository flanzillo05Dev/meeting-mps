//Properties
type Properties = {
    img: string;
    title: string;
    prop:string;
};

//Featured Properties
type FeaturedProperties = {
    image: string;
    tag: string;
    price:string;
    title:string;
    country:string;
    bedrooms:string;
    bathrooms:string;
    livingarea:string;
};

//Why Choose Us
type WhyChooseus = {
    img: string;
    title: string;
    desc:string;
};

//Blog Post
type BlogPost = {
    image: string;
    title: string;
    date:string;
    link:string;
};


export type { Properties,FeaturedProperties,WhyChooseus,BlogPost}