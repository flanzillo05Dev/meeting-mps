
//Hero Banner
type HeroBanners = {
    img: string;
    head1:string;
    title1:string;
    head2:string;
    title2:string;
};

//Trending Collection
type TrendingCollection = {
    profileicon: string;
    title: string;
    price:string;
    img:string;
    btnlink:string
};

//Hot Collections
type HotCollection = {
    img: string;
    title: string;
    price:string;
};

//Working process
type Workingprocess = {
    img: string;
    title: string;
    desc:string;
};

//Browes catagory 
type BrowesCatagory = {
    img: string;
    title: string;
    price:string;
};

//Live Auction
type LiveAuction = {
    img: string;
    title: string;
    price1:string;
    price2:string;
    bid:string
};

export type { HeroBanners,TrendingCollection,HotCollection,Workingprocess,BrowesCatagory,LiveAuction }
