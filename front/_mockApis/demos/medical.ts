import type { WhyChooseUs, ClientReview } from "@/types/demos/medical";
//Explore by categories
import icon1 from '/images/medical/svgs/abs034.svg';
import icon2 from '/images/medical/svgs/abs014.svg';
import icon3 from '/images/medical/svgs/abs029.svg';

const WhyChooseUsData: WhyChooseUs[] = [
    {
        img: icon1,
        title: 'Confidential',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        img: icon2,
        title: '24/7 Services',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        img: icon3,
        title: 'Online Booking',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
]


//Client Reviews
const ClientReviewData: ClientReview[] = [
    {
        star: 5,
        review: 'Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  beata  vitae dicta sunt   explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut        fugit,        sed quia        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque        porro        quisquam est, qui        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non        numquam        eius modi tempora        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        name:'John nath',
        position: 'Partner',

    },
    {
        star: 5,
        review: 'Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  beata  vitae dicta sunt   explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut        fugit,        sed quia        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque        porro        quisquam est, qui        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non        numquam        eius modi tempora        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        name:'John nath',
        position: 'Partner',
    },
    {
        star: 5,
        review: 'Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium, totam  rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  beata  vitae dicta sunt   explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut        fugit,        sed quia        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque        porro        quisquam est, qui        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non        numquam        eius modi tempora        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        name:'John nath',
        position: 'Partner',
    },
]

export { WhyChooseUsData,ClientReviewData};