import type { FooterMenu,SocialLinks } from '@/types/footer/index';
import { BrandFacebookIcon, BrandLinkedinIcon, BrandTwitterIcon } from 'vue-tabler-icons';

const FooterMenu1: FooterMenu[] = [
    {
        title: 'About Us',
        url: '/about'
    },
    {
        title: 'Blog',
        url: '/blog/5-bad-landing-page-examples-how-we-would-fix-them'
    },
    {
        title: 'Success Stories',
        url: '#'
    },
    {
        title: 'Careers',
        url: '#'
    }

]

const FooterMenu2: FooterMenu[] = [
    {
        title: 'stay',
        url: '#'
    },
    {
        title: 'Flight',
        url: '#'
    },
    {
        title: 'train',
        url: '#'
    },
    {
        title: 'destinations',
        url: '#'
    }

]

const FooterMenu3: FooterMenu[] = [
    {
        title: 'Contact us',
        url: '/contact'
    },
    {
        title: 'top destinations',
        url: '#'
    },
    {
        title: 'feature destinaiton',
        url: '#'
    }
]

const SocialLinksIcons: SocialLinks[] = [
    {
        icon: BrandFacebookIcon,
        url:'#',
    },
    {
        icon: BrandTwitterIcon,
        url:'#',
    },
    {
        icon: BrandLinkedinIcon,
        url:'#',
    }
]


export { FooterMenu1,FooterMenu2,FooterMenu3,SocialLinksIcons }