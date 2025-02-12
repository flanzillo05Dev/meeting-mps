
export interface menu {
    header?: string;
    title?: string;
    children?: menu[];
    to?: string;
}

const sidebarItem: menu[] = [

    {
        title: 'Demos',
        to: '/',
        children: [
            {
                title: 'Corporate',
                to: '/'
            },
            {
                title: 'Nft',
                to: '/demos/nft'
            },
            {
                title: 'Conference',
                to: '/demos/conference'
            },
            {
                title: 'Course',
                to: '/demos/course'
            },
            {
                title: 'Medical',
                to: '/demos/medical'
            },
            {
                title: 'Payment',
                to: '/demos/payment'
            },
            {
                title: 'IT',
                to: '/demos/it'
            },
            {
                title: 'Travel',
                to: '/demos/travel'
            },
            {
                title: 'Real Estate',
                to: '/demos/real-estate'
            },
            {
                title: 'Sass',
                to: '/demos/sass-demo'
            },
        ]
    },
    {
        title: 'Pages',
        to: '/',
        children: [
            {
                title: 'About',
                to: '/about'
            },
            {
                title: 'Service',
                to: '/service'
            },
            {
                title: 'Portfolio',
                to: '/portfolio/grid'
            },
            {
                title: 'Portfolio-Two-Colums',
                to: '/portfolio/twocolums'
            },
            {
                title: 'Portfolio-Three-Colums',
                to: '/portfolio/threecolums'
            },
            {
                title: 'Portfolio-Four-Colums',
                to: '/portfolio/fourcolums'
            },
            {
                title: 'Portfolio-Detail',
                to: '/portfolio/white-theming-background'
            }
        ]
    },
   
    {
        title: 'Blog',
        to: '/',
        children: [
            {
                title: 'Blog-Grid',
                to: '/blog/blog-grid'
            },
            {
                title: 'Blog-Detail',
                to: '/blog/5-bad-landing-page-examples-how-we-would-fix-them'
            }
        ]
    },
    {
        title: 'Components',
        to: '/',
        children: [
            {
                title: 'Alert',
                to: '/ui-components/alert'
            },
            {
                title: 'Accordion',
                to: '/ui-components/accordion'
            },
            {
                title: 'Avatar',
                to: '/ui-components/avatar'
            },
            {
                title: 'Chip',
                to: '/ui-components/chip'
            },
            {
                title: 'Dialogs',
                to: '/ui-components/dialogs'
            },
            {
                title: 'List',
                to: '/ui-components/list'
            },
            {
                title: 'Menus',
                to: '/ui-components/menus'
            },
            {
                title: 'Ratting',
                to: '/ui-components/ratting'
            },
            {
                title: 'Tabs',
                to: '/ui-components/tabs'
            },
            {
                title: 'Tooltip',
                to: '/ui-components/tooltip'
            },
            {
                title: 'Typography',
                to: '/ui-components/typography'
            },

           
        ]
    },
    {
        title: 'Contact',
        to: '/contact'
    },
];

export default sidebarItem;
