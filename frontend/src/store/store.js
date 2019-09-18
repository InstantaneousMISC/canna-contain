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
        loggedIn: false,
        strains: [],
        activeStrain: {
            name: "",
            provider: "",
            providerURL: "",
            description: "",
            rating: "",
            appearance: "",
            smell: "",
            taste: "",
            feel: "",
            images: ""
        },
        providers: []
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
        addStrains(state,
            incomingStrains
        ) {
            state.strains = incomingStrains
        },
        addStrain(state,
            incomingStrain
        ) {
            state.activeStrain = incomingStrain
            //images are stored as a string and needs to be split from component
        },
        addProviders(state,
            incomingProviders
        ) {
            state.providers = incomingProviders
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
        },
        STRAINS: state => {
            return state.strains
        },
        ACTIVESTRAIN: state => {
            return state.activeStrain
        },
        PROVIDERS: state => {
            return state.providers
        }
    }
})