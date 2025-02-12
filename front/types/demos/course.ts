//Category
type Category = {
    img: string;
    title: string;
    desc:string;
};

//Featured Courses
type FeaturedCourses = {
    img: string;
    chip: string;
    chipbg:string;
    caption: string;
    title: string;
    lesson: string;
    hour: string;
    profileimg: string;
    name: string;
    reviewrank:number;
    reviewstar:number;
    tottalreview:string;
    regularprice:string;
    saleprice:string;
    link:string;
};

//Company Logos
type Company = {
    img: string;
    link: string;
};

export type {Category,FeaturedCourses,Company}