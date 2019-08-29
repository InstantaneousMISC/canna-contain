import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        messages: [],
        layout: ""
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
        }
    },
    getters: {
        MESSAGES: state => {
            return state.messages
        },
        LAYOUT: state => {
            return state.layout
        }
    }
})