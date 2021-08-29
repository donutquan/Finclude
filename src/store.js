import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);



export default new Vuex.Store({
    state:{
        login: 0,
        agent: 0,
        user: "Guest",
        userId: "123450",
        agentId: ""

    },
    mutations: { //synchronous way to update data
        setLogin(state, payload){
            state.login = payload;
        },
        setUser(state, payload){
            state.user = payload;
        },
        setAgent(state, payload){
            state.agent = payload;
        },
        setUserId(state, payload){
            state.userId = payload;
        },
        setAgentId(state, payload){
            state.agentId = payload;
        }
    },
    actions: {},
    modules: {},
    getters: {
        getLogin(state){
            return state.login;
        },
        getMessage(state){
            return state.message;
        }
    }
})