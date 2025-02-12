import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import mock from '../mockAdapter';

import blog1 from '/images/blog-grid/grid-LP.jpg';
import blog2 from '/images/blog-grid/grid-uxdesign.jpg';
import blog3 from '/images/blog-grid/grid-search.jpg';
import blog4 from '/images/blog-grid/grid-effective-tech.jpg';
import blog5 from '/images/blog-grid/grid-marketing.jpg';
import blog6 from '/images/blog-grid/grid-agile.jpg';
import blog7 from '/images/blog-grid/grid-js.jpg';
import blog8 from '/images/blog-grid/grid-smartwatch.jpg';
import blog9 from '/images/blog-grid/grid-sidelap.jpg';

import profile1 from '/images/blog-grid/jerome.jpg';
import profile2 from '/images/blog/cyrus.jpg';

import { uniqueId } from 'lodash';

import type { BlogGridView } from '@/types/pages/blogTypes';

const chance = new Chance();

const BlogGridData: BlogGridView[] = [
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog1,
        tag: 'Business',
        date:'May 19, 2024',
        title:'5 Bad Landing Page Examples How We Would Fix Them',
        profile:profile1,
        name:'John Bell',
        relatedBlog:true,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog2,
        tag: 'Digital',
        date:'May 19, 2024',
        title:'Why UX Design Matters and How it Affects Ranking',
        profile:profile2,
        name:'James Robert',
        relatedBlog:true,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog3,
        tag: 'Business',
        date:'May 19, 2024',
        title:'This Week in Search: New Limits and Exciting Features',
        profile:profile2,
        name:'David William',
        relatedBlog:true,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog4,
        tag: 'Business',
        date:'April 19, 2024',
        title:'Five Effective Lead Generation Techniques For Your Business',
        profile:profile2,
        name:'Make Richard',
        relatedBlog:false,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog5,
        tag: 'Business',
        date:'April 20, 2024',
        title:'Inclusive Marketing: Why and How Does it Work?',
        profile:profile2,
        name:'Joseph Anthony',
        relatedBlog:false,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog6,
        tag: 'Business',
        date:'April 22, 2024',
        title:'How Agile is Your Forecasting Process?',
        profile:profile1,
        name:'Mark Wood',
        relatedBlog:false,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog7,
        tag: 'Business',
        date:'April 25, 2024',
        title:'Your Guide to Optimising A JavaScript-enabled Website',
        profile:profile2,
        name:'Kevin Donald',
        relatedBlog:false,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog8,
        tag: 'Business',
        date:'April 01, 2024',
        title:'A Study on Smartwatch Design Qualities and People’s Preferences',
        profile:profile2,
        name:'Ryan Jecob',
        relatedBlog:false,
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        image: blog9,
        tag: 'digital',
        date:'April 10, 2024',
        title:'This Long-Awaited Technology May Finally Change the World',
        profile:profile1,
        name:'Scott Brandon',
        relatedBlog:false,
    },
];

mock.onGet('/api/data/blog/BlogPosts').reply(() => {
    return [200, BlogGridData];
});

// ----------------------------------------------------------------------
mock.onPost('/api/data/blog/post').reply((config: string | any) => {
    try {
        const { title } = JSON.parse(config.data);

        const paramCase = (t: string) =>
            t
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

        const post = BlogGridData.find((_post: BlogGridView | string | any) => paramCase(_post.title) === title);

        if (!post) {
            return [404, { message: 'Post not found' }];
        }

        return [200, { post }];
    } catch (error) {
        console.error(error);
        return [500, { message: 'Internal server error' }];
    }
});


