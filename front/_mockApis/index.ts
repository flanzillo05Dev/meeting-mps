import mock from './mockAdapter';

import './header/Menu';
import './pages/about';
import './pages/service';
import  './pages/blogData';
import './pages/portfolioData';
import './footer/index';
import './footer/ConferenceFooter';
import './demos/conference';
import './demos/course';
import './demos/medical';
import './demos/payment';
import './demos/itpage';
import './demos/travel';
import './demos/realEstate';
import './demos/sass';
import './demos/corporate';
import './demos/nft';

mock.onAny().passThrough();
