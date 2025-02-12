import type { Properties, FeaturedProperties ,WhyChooseus,BlogPost} from "@/types/demos/realEstate";
//Featured
import icon1 from '/images/real-estate/svgs/apartment.svg';
import icon2 from '/images/real-estate/svgs/villa.svg';
import icon3 from '/images/real-estate/svgs/office.svg';
import icon4 from '/images/real-estate/svgs/shop.svg';
import icon5 from '/images/real-estate/svgs/house.svg';
import icon6 from '/images/real-estate/svgs/warehouse.svg';

const PropertiesData: Properties[] = [
    {
        img: icon1,
        title: 'Apartment',
        prop: '35 Properties'
    },
    {
        img: icon2,
        title: 'Villa',
        prop: '15 Properties'
    },
    {
        img: icon3,
        title: 'Office',
        prop: '26 Properties'
    },
    {
        img: icon4,
        title: 'Shop',
        prop: '43 Properties'
    },
    {
        img: icon5,
        title: 'House',
        prop: '95 Properties'
    },
    {
        img: icon6,
        title: 'Warehouse',
        prop: '18 Properties'
    },
]


//Featured Properties
import img1 from '/images/real-estate/property-1.jpg';
import img2 from '/images/real-estate/property-2.jpg';
import img3 from '/images/real-estate/property-3.jpg';
import img4 from '/images/real-estate/property-4.jpg';
import img5 from '/images/real-estate/property-5.jpg';
import img6 from '/images/real-estate/property-6.jpg';

const FeaturedPropertiesData: FeaturedProperties[] = [
    {
        image: img1,
        tag: 'Buy',
        price: '$250,000',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '03',
        bathrooms:' 01',
        livingarea: '320m',
    },
    {
        image: img2,
        tag: 'Sell',
        price: '$460,300',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '05',
        bathrooms:' 05',
        livingarea: '190m',
    },
    {
        image: img3,
        tag: 'Rent',
        price: '$1,600',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '05',
        bathrooms:' 02',
        livingarea: '879m',
    },
    {
        image: img4,
        tag: 'Rent',
        price: '$2,50,000',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '02',
        bathrooms:' 03',
        livingarea: '788m',
    },
    {
        image: img5,
        tag: 'Buy',
        price: '$460,300',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '03',
        bathrooms:' 03',
        livingarea: '657m',
    },
    {
        image: img6,
        tag: 'Rent',
        price: '$1,600',
        title: 'Mithra Villa',
        country: 'California',
        bedrooms: '01',
        bathrooms:' 01',
        livingarea: '657m',
    },
]


//Why Choose us
import icn1 from '/images/real-estate/svgs/users.svg';
import icn2 from '/images/real-estate/svgs/hand.svg';
import icn3 from '/images/real-estate/svgs/support.svg';

const WhyChooseusData: WhyChooseus[] = [
    {
        img: icn1,
        title: 'Great Experience',
        desc: 'Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou',
    },
    {
        img: icn2,
        title: 'Safety Deals',
        desc: 'Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou',
    },
    {
        img: icn3,
        title: 'Comprehensive Support',
        desc: 'Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Variou',
    },
]


//Blog Post Data
import blog1 from '/images/real-estate/blog-1.jpg';
import blog2 from '/images/real-estate/blog-2.jpg';

const BlogPostData: BlogPost[] = [
    {
        image: blog1,
        title: 'Curabitur metus euismod facilisis...',
        date: 'April 28, 2024',
        link:'/'
    },
    {
        image: blog2,
        title: 'Curabitur metus euismod facilisis...',
        date: 'April 28, 2024',
        link:'/'
    },

]


export { PropertiesData, FeaturedPropertiesData,WhyChooseusData,BlogPostData };