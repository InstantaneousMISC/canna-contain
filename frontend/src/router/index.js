import Vue from "vue"
import VueRouter from "vue-router"
import Messages from "../components/Messages/MessagesMain.vue"
import Login from "../components/Login/LoginMain.vue"
import SignUp from "../components/SignUp/SignUpMain.vue"
import Home from "../components/Home/HomeMain.vue"
import DashMain from "../components/Dash/DashMain.vue"
import {
    store
} from '../store/store'
import StrainsMain from "../components/Strains/StrainsMain.vue"
import addStrainsMain from "../components/Strains/AddStrainMain.vue"
import addStrainReview from "../components/Forms/AddStrainReviewForm.vue"
import EditStrainMain from "../components/Strains/EditStrainMain.vue"
import ProvidersMain from "../components/Providers/ProvidersMain.vue"
import AddProviderMain from "../components/Providers/AddProviderMain.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'HOME',
        component: Home,
        alias: '/'
    }, {
        path: '/messages',
        name: 'MESSAGESMAIN',
        component: Messages
    }, {
        path: '/login',
        name: 'LOGINMAIN',
        component: Login
    }, {
        path: '/signup',
        name: 'SIGNUPMAIN',
        component: SignUp
    },
    {
        path: '/dash',
        name: 'DASHMAIN',
        component: DashMain,
        async beforeEnter(to, from, next) {
            try {
                var isLoggedIn = await store.state.loggedIn
                if (isLoggedIn) next()
                next()
            } catch (err) {
                next({
                    name: 'HOME'
                })
            }
        }
    },
    {
        path: '/strains',
        name: 'STRAINSMAIN',
        component: StrainsMain
    },
    {
        path: '/strains/:id',
        name: 'EDITSTRAIN',
        component: EditStrainMain
    },
    {
        path: '/addStrain',
        name: 'Add',
        component: addStrainsMain
    },
    {
        path: '/addStrainReview',
        name: 'AddReview',
        component: addStrainReview
    },
    {
        path: '/providers',
        name: 'PROVIDERSSMAIN',
        component: ProvidersMain
    },
    {
        path: '/addProviders',
        name: 'ADDPROVIDER',
        component: AddProviderMain
    },
]

export default new VueRouter({
    routes
})