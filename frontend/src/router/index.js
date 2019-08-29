import Vue from "vue"
import VueRouter from "vue-router"
import Messages from "../components/Messages/MessagesMain.vue"
import Login from "../components/Login/LoginMain.vue"
import SignUp from "../components/SignUp/SignUpMain.vue"
import Home from "../components/Home/HomeMain.vue"
import DashMain from "../components/Dash/DashMain.vue"
import EmptyComponent from "../components/Empty/Empty.vue"


Vue.use(VueRouter)

const routes = [{
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
        component: DashMain
    },
]

export default new VueRouter({
    routes
})