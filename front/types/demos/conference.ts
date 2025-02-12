//World Class Speakers
type WorldClassSpeakers = {
    img: string;
    name: string;
    designation:string;
};

//Highlight Video Section
type Highlight = {
    banner: string;
};

//Upcomming Conference Section
type UpcommingConference  = {
    date: number;
    monthyear:string;
    selected:boolean;
};

export type { WorldClassSpeakers,Highlight,UpcommingConference }