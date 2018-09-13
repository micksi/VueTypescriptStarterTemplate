import Vue from 'vue';
import Vuex from 'vuex';
import { MutationTree, ActionTree, GetterTree } from 'vuex';


Vue.use(Vuex)

interface State {
    stateInput: string;
    stateResult: string;
};

const mutations: MutationTree<State> = {
    clearInput: (s) => s.stateInput = '',
    setInput: (s, arg) => { s.stateInput = arg; },
    clearResult: (s) => s.stateResult = '',
    setResult: (s, arg) => { s.stateResult = arg; },
};

const actions: ActionTree<State, any> = {
};

const getters: GetterTree<State, any> = {
    getResult: (s) => s.stateResult,
}

const state: State = {
    stateInput: 'From State',
    stateResult: 'From State',
};

export default new Vuex.Store<State>({
    state,
    getters,
    mutations,
    actions,
});
