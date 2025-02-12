import type { AboutHistory,OurTeam } from "@/types/pages/about";
import img1 from '/images/aboutpage/landing-history/landing-hostory-1.jpg';
import img2 from '/images/aboutpage/landing-history/landing-hostory-2.jpg';

//About History Data
const AboutHistoryData: AboutHistory[] = [
    {
        year: '2016-2018',
        desc:'Normal distribution of letters, as opposed to using Content here, content here',
        img: img1
    },
    {
        year: '2019-2024',
        desc:'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',
        img: img2
    },
    {
        year: '2024-2024',
        desc:'Normal distribution of letters, as opposed to using Content here, content here',
        img: img1
    }
]

//About Our Team Data

import team1 from '/images/aboutpage/team/team-1.jpg';
import team2 from '/images/aboutpage/team/team-2.jpg';
import team3 from '/images/aboutpage/team/team-3.jpg';
import team4 from '/images/aboutpage/team/team-4.jpg';
import team5 from '/images/aboutpage/team/team-5.jpg';
import team6 from '/images/aboutpage/team/team-6.jpg';
import team7 from '/images/aboutpage/team/team-7.jpg';
import team8 from '/images/aboutpage/team/team-8.jpg';

const OurTeamData: OurTeam[] = [
    {
        img:team1,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team2,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team3,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team4,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team5,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team6,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team7,
        name: 'Darrell Steward',
        designation:'Designation',
    },
    {
        img:team8,
        name: 'Darrell Steward',
        designation:'Designation',
    }

]

export { AboutHistoryData,OurTeamData};