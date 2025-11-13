import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Favorites from '../views/Favorites.vue';
import Cart from '../views/Cart.vue';
import Categories from '../views/Categories.vue';
import CustomerService from '../views/CustomerService.vue';
import Feedback from '../views/Feedback.vue';
import Messages from '../views/Messages.vue';
import Language from '../views/Language.vue';
import About from '../views/About.vue';
import HowToBuy from '../views/HowToBuy.vue';
import HowToSell from '../views/HowToSell.vue';
import Help from '../views/Help.vue';
import Profile from '../views/Profile.vue';
import SellItem from '../views/SellItem.vue';
import Orders from '../views/Orders.vue';

const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/shop', name: 'Shop', component: Shop },
{ path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
{ path: '/login', name: 'Login', component: Login },
{ path: '/register', name: 'Register', component: Register },
{ path: '/forgot', name: 'ForgotPassword', component: ForgotPassword },
{ path: '/favorites', name: 'Favorites', component: Favorites },
{ path: '/cart', name: 'Cart', component: Cart },
{ path: '/categories', name: 'Categories', component: Categories },
{ path: '/customer-service', name: 'CustomerService', component: CustomerService },
{ path: '/feedback', name: 'Feedback', component: Feedback },
{ path: '/messages', name: 'Messages', component: Messages },
{ path: '/language', name: 'Language', component: Language },
{ path: '/about', name: 'About', component: About },
{ path: '/how-to-buy', name: 'HowToBuy', component: HowToBuy },
{ path: '/how-to-sell', name: 'HowToSell', component: HowToSell },
{ path: '/help', name: 'Help', component: Help },
{ path: '/profile', name: 'Profile', component: Profile },
{ path: '/sell', name: 'SellItem', component: SellItem },
{ path: '/orders', name: 'Orders', component: Orders },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;