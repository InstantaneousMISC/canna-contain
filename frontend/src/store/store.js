import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        messages: [],
        layout: "",
        token: "",
        user: {
            username: "",
            user: "",
            id: ""
        },
        loggedIn: false
    },
    mutations: {
        addMessages(state,
            message
        ) {
            state.messages = message
        },
        addNewMessage(state, message) {
            state.messages.push(message)
        },
        addLayout(state, NewLayout) {
            state.layout = NewLayout
        },
        setToken(state, incomingToken) {
            state.token = incomingToken
        },
        setUser(state, incomingUser) {
            state.user = incomingUser
        },
        login(state, loginInfo) {
            state.token = loginInfo.token
            state.user = loginInfo.user
            state.loggedIn = true
        },
        logOut(state) {
            state.loggedIn = false
            state.token = ""
            state.user = {}
        }
    },
    getters: {
        MESSAGES: state => {
            return state.messages
        },
        LAYOUT: state => {
            return state.layout
        },
        TOKEN: state => {
            return state.token
        },
        USER: state => {
            return state.user
        },
        LOGGED: state => {
            return state.loggedIn
        }
    }
})