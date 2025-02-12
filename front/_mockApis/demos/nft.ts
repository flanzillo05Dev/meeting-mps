import type { HeroBanners,TrendingCollection,HotCollection,Workingprocess,BrowesCatagory,LiveAuction} from '@/types/homepage/index';
import img1 from '/images/backgrounds/nft-banner.svg';
import img2 from '/images/backgrounds/nature-lady.svg';
import img3 from '/images/backgrounds/dome-palace.svg';

//Banner Data
const HeroBannersData: HeroBanners[] = [
    {
        img:img1,
        head1:'By Shreemol',
        title1:'Shadow Lady',
        head2:'height',
        title2:'0.058 ETH'
    },
    {
        img:img2,
        head1:'By Enok',
        title1:'Nature',
        head2:'height',
        title2:'0.055 ETH'
    },
    {
        img:img3,
        head1:'By Shreemol',
        title1:'Dome Palace',
        head2:'height',
        title2:'0.050 ETH'
    }
]

//Trending Collection Data
import profille1 from '/images/homepage/trending-collections/darrell-steward.svg';
import profille2 from '/images/homepage/trending-collections/aida-bugg.svg';
import profille3 from '/images/homepage/trending-collections/teri-dactyl.svg';

import collimg1 from '/images/homepage/trending-collections/dome-palace.svg';
import collimg2 from '/images/homepage/trending-collections/gorilla.svg';
import collimg3 from '/images/homepage/trending-collections/guitar.svg';
import collimg4 from '/images/homepage/trending-collections/nature-lady.svg';

const TrendingCollectionData: TrendingCollection[] = [
    {
        profileicon: profille1,
        title:'Darell Steward',
        price:'0.56 ETH',
        img:collimg4,
        btnlink:'#',   
    },
    {
        profileicon: profille2,
        title:'Aida Bugg',
        price:'0.56 ETH',
        img:collimg2,
        btnlink:'#',   
    },
    {
        profileicon: profille3,
        title:'Teri Dactyl',
        price:'0.56 ETH',
        img:collimg1,
        btnlink:'#',   
    },
    {
        profileicon: profille1,
        title:'Pegge Legge',
        price:'0.56 ETH',
        img:collimg3,
        btnlink:'#',   
    },
    {
        profileicon: profille1,
        title:'Darell Steward',
        price:'0.56 ETH',
        img:collimg4,
        btnlink:'#',   
    },
]


//Hot Collections
import coll1 from '/images/homepage/hot-collections/augusta.svg';
import coll2 from '/images/homepage/hot-collections/simon-sais.svg';
import coll3 from '/images/homepage/hot-collections/percy-kewshun.svg';
import coll4 from '/images/homepage/hot-collections/aida-buggozi.svg';
import coll5 from '/images/homepage/hot-collections/bea-mine.svg';
import coll6 from '/images/homepage/hot-collections/paige-turner.svg';
import coll7 from '/images/homepage/hot-collections/anita-bath.svg';
import coll8 from '/images/homepage/hot-collections/rod-knee.svg';
import coll9 from '/images/homepage/hot-collections/peg-legge.svg';
import coll10 from '/images/homepage/hot-collections/greg-arias.svg';
import coll11 from '/images/homepage/hot-collections/fay-daway.svg';
import coll12 from '/images/homepage/hot-collections/wes-yabinlatelee.svg';

const HotCollectionData : HotCollection[]=[
    {
        img: coll1,
        title:'Augusta Wind',
        price:'$2,963,060',
    },
    {
        img: coll2,
        title:'Simon Sais',
        price:'$5,963,060',
    },
    {
        img: coll3,
        title:'Percy Kewshun',
        price:'$3,963,060',
    },
    {
        img: coll4,
        title:'Aida Buggozi',
        price:'$2,963,060',
    },
    {
        img: coll5,
        title:'Bea Mine',
        price:'$2,963,060',
    },
    {
        img: coll6,
        title:'Paige Turner',
        price:'$6,963,060',
    },
    {
        img: coll7,
        title:'Anita Bath',
        price:'$2,963,011',
    },
    {
        img: coll8,
        title:'Rod Knee',
        price:'$2,963,066',
    },
    {
        img: coll9,
        title:'Peg Legge',
        price:'$2,963,066',
    },
    {
        img: coll10,
        title:'Greg Arias',
        price:'$1,963,060',
    },
    {
        img: coll11,
        title:'Fay Daway',
        price:'$2,963,060',
    },
    {
        img: coll12,
        title:'Wes Yabinlatelee',
        price:'$3,963,060',
    },
]


//Working Process

import workimg1 from '/images/icon/vectorwallet.svg';
import workimg2 from '/images/icon/sum-up.svg';
import workimg3 from '/images/icon/nft.svg';
import workimg4 from '/images/icon/price-tag.svg';
 
const WorkingprocessData:Workingprocess[]=[
    {
        img: workimg1,
        title:'Set Up your wallet',
        desc:'Sometimes by sometimes chunks as necessary making this the first true gener',
    },
    {
        img: workimg2,
        title:'Create your Collection',
        desc:'Only five centuries, but also the leap into electronic typesetting remaining essentially.',
    },
    {
        img: workimg3,
        title:'Add your NFTs',
        desc:'Many variations of passages of Lorem Ipsum available, but the majority have suffered',
    },
    {
        img: workimg4,
        title:'List them for Sale',
        desc:'Sometimes by sometimes chunks as necessary making this the first true gener',
    },
]


//BrowesCatagory Data

import catimg1 from '/images/homepage/browse-category/arts.jpg';
import catimg2 from '/images/homepage/browse-category/virtual.jpg';
import catimg3 from '/images/homepage/browse-category/collectibles.jpg';
import catimg4 from '/images/homepage/browse-category/music.jpg';

const BrowesCatagoryData:BrowesCatagory[]=[
    {
        img: catimg1,
        title:'Arts',
        price:'12,890 NFTs',
    },
    {
        img: catimg2,
        title:'Virtual',
        price:'10,310 NFTs',
    },
    {
        img: catimg3,
        title:'Collectibles',
        price:'890 NFTs',
    },
    {
        img: catimg4,
        title:'Music',
        price:'10,890 NFTs',
    },
]

//LiveAuction Data

import bidimg1 from '/images/homepage/live-auctions/magic-lady.svg';
import bidimg2 from '/images/homepage/live-auctions/bling-bits.svg';
import bidimg3 from '/images/homepage/live-auctions/digital-unicorns.svg';
import bidimg4 from '/images/homepage/live-auctions/magic-lady-1.svg';
import bidimg5 from '/images/homepage/live-auctions/fight-punks.svg';
import bidimg6 from '/images/homepage/live-auctions/spher-art.svg';
import bidimg7 from '/images/homepage/live-auctions/artistic-alpha.svg';
import bidimg8 from '/images/homepage/live-auctions/thunder-nft.svg';

const LiveAuctionData:LiveAuction[]=[
    {
        img: bidimg1,
        title:'Magic Lady',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'36 Total bids',
    },
    {
        img: bidimg2,
        title:'Bling Bits',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'50 Total bids',
    },
    {
        img: bidimg3,
        title:'Digital Unicorns',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'25 Total bids',
    },
    {
        img: bidimg4,
        title:'Magic Lady',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'No bids',
    },
    {
        img: bidimg5,
        title:'Fight Punks',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'33 Total bids',
    },
    {
        img: bidimg6,
        title:'Sphere Art',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'06 Total bids',
    },
    {
        img: bidimg7,
        title:'Artistic Alpha',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'No bids',
    },
    {
        img: bidimg8,
        title:'Thunder NFT',
        price1:'0.068 ETH',
        price2:'$16.30',
        bid:'11 Total bids',
    },
]


export { HeroBannersData,TrendingCollectionData,HotCollectionData,WorkingprocessData,BrowesCatagoryData,LiveAuctionData};