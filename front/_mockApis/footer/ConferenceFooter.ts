import type { ConferenceFooterMenu,ConferenceSocialLinks } from '@/types/footer/demos/conferenceFooter';
import { BrandFacebookIcon, BrandLinkedinIcon, BrandTwitterIcon } from 'vue-tabler-icons';
const ConferenceFooterExloreLinks: ConferenceFooterMenu[] = [
    {
        title: 'About',
        url: '/about',
        tag:false,
    },
    {
        title: 'Pricing',
        url: '#',
        tag:false,
    },
    {
        title: 'Blog',
        url: '/blog/5-bad-landing-page-examples-how-we-would-fix-them',
        tag:false,
    },
    {
        title: 'Careers',
        url: '#',
        tag:true,
    },
    {
        title: 'Contact',
        url: '/contact',
        tag:false,
    }

]

const ConferenceFooterFeatureLinks: ConferenceFooterMenu[] = [
    {
        title: 'Online Payments',
        url: '#',
        tag:false,
    },
    {
        title: 'Financial Projections',
        url: '#',
        tag:false,
    },
    {
        title: 'Bookkeeping',
        url: '#',
        tag:false,
    },
    {
        title: 'Banking',
        url: '#',
        tag:false,
    },

]

const ConferenceFooterResourceLinks: ConferenceFooterMenu[] = [
    {
        title: 'Documentation',
        url: 'https://demos.adminmart.com/premium/nuxtjs/landingpro/docs/index.html',
        tag:false,
    },
    {
        title: 'Integrations',
        url: '#',
        tag:false,
    },
    {
        title: 'API Reference',
        url: '#',
        tag:false,
    },
    {
        title: 'Support',
        url: '#',
        tag:false,
    },
    {
        title: 'Help',
        url: '#',
        tag:false,
    },

]

const ConferenceFooterPlateformLinks: ConferenceFooterMenu[] = [
    {
        title: 'Infrastructure',
        url: '#',
        tag:false,
    },
    {
        title: 'Certifications',
        url: '#',
        tag:false,
    },
    {
        title: 'Licenses',
        url: '#',
        tag:false,
    },
    {
        title: 'Terms and conditions',
        url: '#',
        tag:false,
    },
    {
        title: 'Legal',
        url: '#',
        tag:false,
    },

]

const ConferenceSocialLinksIcons: ConferenceSocialLinks[] = [
    {
        icon: BrandTwitterIcon,
        url:'#',
    },
    {
        icon: BrandFacebookIcon,
        url:'#',
    },
    {
        icon: BrandLinkedinIcon,
        url:'#',
    }
]

export { ConferenceFooterExloreLinks,ConferenceFooterFeatureLinks,ConferenceFooterResourceLinks,ConferenceFooterPlateformLinks,ConferenceSocialLinksIcons }