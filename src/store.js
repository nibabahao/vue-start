import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count: 1,
	money: `1 元`
};

const count = state => state.count;


// 针对某一个值进行指定的操作
const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	},
	currentcy(state) {
		state.money = state.count + ' 元';
	}
}

// 在组件中调用mapActions针对对应的方法来操作
const actions = {
	increment: ({commit}) => {
		commit('increment');
		commit('currentcy');
	},
	decrement: ({commit}) => {
		commit('decrement');
		commit('currentcy');
	}
}

// 在组件中调用mapGetters来获取对应的值
const getters = {
	count: state => state.count,
	money: state => state.money
}

export default new Vuex.Store({state, getters ,mutations, actions})