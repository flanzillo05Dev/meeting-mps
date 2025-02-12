//Fetaure
type Features  = {
    img: string;
    title:string;
    subtitle:string;
};

//Live anywhere
type LiveAnywhere = {
    image: string;
    name: string;
    desc:string;
    price:string;
};

//Popular Countries
type PopularCountries = {
    flag: string;
    country: string;
    offer:string;
};

//Testimonials
type Testimonials = {
    user:string;
    name: string;
    star: number;
    review:string;
};

//Recent Blogs
type RecentBlog = {
    image:string;
    title: string;
    country: string;
    time:string;
    link:string;
};

export type { Features,LiveAnywhere,PopularCountries,Testimonials,RecentBlog}