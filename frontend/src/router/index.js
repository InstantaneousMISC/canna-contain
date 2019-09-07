import Vue from "vue"
import VueRouter from "vue-router"
import Messages from "../components/Messages/MessagesMain.vue"
import Login from "../components/Login/LoginMain.vue"
import SignUp from "../components/SignUp/SignUpMain.vue"
import Home from "../components/Home/HomeMain.vue"
import DashMain from "../components/Dash/DashMain.vue"
import EmptyComponent from "../components/Empty/Empty.vue"
import {
    store
} from '../store/store'


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
                console.log('before query')
                var isLoggedIn = await store.state.loggedIn
                console.log('after query')
                if (isLoggedIn) next()
                next()
            } catch (err) {
                console.log("error in routing" + err)
                next({
                    name: 'HOME'
                })
            }
        }
    }
]

export default new VueRouter({
    routes
})