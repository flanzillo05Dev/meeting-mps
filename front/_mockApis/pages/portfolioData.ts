import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import mock from '../mockAdapter';
import s1 from '/images/portfolio/portfolio-1.jpg';
import s2 from '/images/portfolio/portfolio-2.png';
import s3 from '/images/portfolio/portfolio-3.jpg';
import s4 from '/images/portfolio/portfolio-4.jpg';
import s5 from '/images/portfolio/portfolio-5.jpg';
import s6 from '/images/portfolio/portfolio-6.jpg';
import s7 from '/images/browse-category/arts.jpg';
import s8 from '/images/browse-category/collectibles.jpg';

import { uniqueId } from 'lodash';

import type { PortFolioType } from '@/types/pages/PortolioTypes';

const chance = new Chance();

const PortFolioTypeData: PortFolioType[] = [
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'White Theming Background',
        coverImg: s1,
        category:'3D Render',
        relatedPortfolio:true,
        column:5,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'The Heritage',
        coverImg: s2,
        category:'Illustration',
        relatedPortfolio:true,
        column:7,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Belforte Fall',
        coverImg: s3,
        category:'Photography',
        relatedPortfolio:true,
        column:5,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Ipsum neque libero',
        coverImg: s4,
        category:'React',
        relatedPortfolio:false,
        column:7,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'White Theming ',
        coverImg: s5,
        category:' Graphics Design',
        relatedPortfolio:false,
        column:5,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'luctus neque purus',
        coverImg: s6,
        category:'Html',
        relatedPortfolio:false,
        column:7,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Augue OLMO',
        coverImg: s7,
        category:'Jquery',
        relatedPortfolio:false,
        column:5,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Zero UI',
        coverImg: s8,
        category:'Vue',
        relatedPortfolio:false,
        column:7,
    },
];

mock.onGet('/api/portfolio').reply(() => {
    return [200, PortFolioTypeData];
});

// ----------------------------------------------------------------------
mock.onPost('/api/portfolio').reply((config: string | any) => {
    try {
        const { title } = JSON.parse(config.data);

        const paramCase = (t: string) =>
            t
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

        const post = PortFolioTypeData.find((_post: PortFolioType | string | any) => paramCase(_post.title) === title);

        if (!post) {
            return [404, { message: 'Post not found' }];
        }

        return [200, { post }];
    } catch (error) {
        console.error(error);
        return [500, { message: 'Internal server error' }];
    }
});


