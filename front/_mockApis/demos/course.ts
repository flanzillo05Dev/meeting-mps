import type {Category,FeaturedCourses,Company} from "@/types/demos/course";
//Explore by categories
import icon1 from '/images/course/heart.png';
import icon2 from '/images/course/lock.png';
import icon3 from '/images/course/square.png';
import icon4 from '/images/course/drop.png';
import icon5 from '/images/course/loading.png';

const CategoryData: Category[] = [
    {
        img: icon1,
        title: 'Loved by thousands',
        desc: 'Lorem ipsum dolor sit amet,sed do eiusmod tempor magna aliqua.',
    },
    {
        img: icon2,
        title: 'Powerful security',
        desc: 'Lorem ipsum dolor sit amet,sed do eiusmod tempor magna aliqua.',
    },
    {
        img: icon3,
        title: 'Semantic coding',
        desc: 'Lorem ipsum dolor sit amet,sed do eiusmod tempor magna aliqua.',
    },
    {
        img: icon4,
        title: 'Separate components',
        desc: 'Lorem ipsum dolor sit amet,sed do eiusmod tempor magna aliqua.',
    },
    {
        img: icon5,
        title: 'Fast loading pages',
        desc: 'Lorem ipsum dolor sit amet,sed do eiusmod tempor magna aliqua.',
    },

]

//Feature Couses
import courseimg1 from '/images/course/bootstrap.png';
import courseimg2 from '/images/course/python.png';
import courseimg3 from '/images/course/vuejs.png';
import courseimg4 from '/images/course/flutter.png';
import courseimg5 from '/images/course/js.png';
import courseimg6 from '/images/course/jquery.png';
import user1 from '/images/profile/profile-1.png';
import user2 from '/images/profile/profile-2.png';

const FeaturedCoursesData: FeaturedCourses[] = [
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'85,229',
        img: courseimg1,
        chip:'Hot' ,
        chipbg:'danger',
        caption:'Google Flutter',
        title:'Flutter & Firebase: Build a Complete App for iOS',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user1 ,
        name: 'Dr. Angela Burr',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'23,229',
        img: courseimg2,
        chip:'Bestseller' ,
        chipbg:'success',
        caption:'Machine Learning',
        title:'Python for Data Science and Machine Learning Bootcamp',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user2 ,
        name: 'Mark Freeman',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'56,390',
        img: courseimg3,
        chip:'' ,
        chipbg:'',
        caption:'AWS Certification',
        title:'Ultimate AWS Certified Developer 2024 - NEW!',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user1 ,
        name: 'Arya B. Rao',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'85,229',
        img: courseimg4,
        chip:'' ,
        chipbg:'danger',
        caption:'Google Flutter',
        title:'Flutter & Firebase: Build a Complete App for iOS',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user1 ,
        name: 'Dr. Angela Burr',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'23,229',
        img: courseimg5,
        chip:'' ,
        chipbg:'success',
        caption:'Machine Learning',
        title:'Python for Data Science and Machine Learning Bootcamp',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user2 ,
        name: 'Mark Freeman',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
    {
        reviewrank:4.7,
        reviewstar:4.5,
        tottalreview:'56,390',
        img: courseimg6,
        chip:'' ,
        chipbg:'',
        caption:'AWS Certification',
        title:'Ultimate AWS Certified Developer 2024 - NEW!',
        lesson:'8 lessons' ,
        hour: '18h 20m',
        profileimg:user1 ,
        name: 'Arya B. Rao',
        regularprice:'$114.99',
        saleprice:'99.99',
        link:'/'
    },
];


//Companies Logos
import compnayimg1 from '/images/course/clickup.png';
import compnayimg2 from '/images/course/fast.png';
import compnayimg3 from '/images/course/slack.png';
import compnayimg4 from '/images/course/stripe.png';
import compnayimg5 from '/images/course/tc.png';
const CompanyLogos: Company[] = [
    {
        img:compnayimg1,
        link:'/'
    },
    {
        img:compnayimg2,
        link:'/'
    },
    {
        img:compnayimg3,
        link:'/'
    },
    {
        img:compnayimg4,
        link:'/'
    },
    {
        img:compnayimg5,
        link:'/'
    }
]


export { CategoryData,FeaturedCoursesData,CompanyLogos};