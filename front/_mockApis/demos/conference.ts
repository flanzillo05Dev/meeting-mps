import type { WorldClassSpeakers,Highlight ,UpcommingConference} from "@/types/demos/conference";


//World Class Speakers

import team1 from '/images/aboutpage/team/team-1.jpg';
import team3 from '/images/aboutpage/team/team-3.jpg';
import team4 from '/images/aboutpage/team/team-4.jpg';
import team5 from '/images/aboutpage/team/team-5.jpg';

const WorldClassSpeakersData: WorldClassSpeakers[] = [
    {
        img: team3,
        name: 'Dan Cristan',
        designation: 'Designation',
    },
    {
        img: team4,
        name: 'Jorgea Steward',
        designation: 'Designation',
    },
    {
        img: team5,
        name: 'Brian Roberto',
        designation: 'Designation',
    },
    {
        img: team1,
        name: 'Darrell Lewis',
        designation: 'Designation',
    },

]


//Highlight Banner slider 

import banner1 from '/images/conference/previous-highlights/audience.jpg';
import banner2 from '/images/conference/previous-highlights/audience.jpg';
import banner3 from '/images/conference/previous-highlights/audience.jpg';
const HighlightData: Highlight[] = [
    {
        banner:banner1,
    },
    {
        banner:banner2,
    },
    {
        banner:banner3,
    }
]

//Upcomming Conference
const UpcommingConferenceData: UpcommingConference[] = [
    {
        date:10,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:11,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:12,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:13,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:14,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:17,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:18,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:19,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:20,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:21,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:24,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:25,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:26,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:27,
        monthyear:'Feb 2025',
        selected: false
    },{
        date:28,
        monthyear:'Feb 2025',
        selected: false
    }
]

export { WorldClassSpeakersData,HighlightData,UpcommingConferenceData };