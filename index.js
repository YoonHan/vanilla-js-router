import App from './App';
import HashRouter from '@/router';
import Main from '@/component/Main';
import One from '@/component/One';
import Two from '@/component/Two';
import Three from '@/component/Three';

import './index.css';


// Add routes
const router = new HashRouter({
    root: '/',
    view: 'div#route-view'
});
router.add('/', Main);
router.add('/one', One);
router.add('/two', Two);
router.add('/three', Three);

// Add App to root
document.getElementById('app').innerHTML = new App().render();