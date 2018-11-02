<template lang="pug">
	.page
		| 数字：{{money}}
		hr
		button(@click="increment") 增加
		| &nbsp;&nbsp;
		button(@click="decrement") 减少
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {

		}
	},
	mounted() {
		window['thisPageA'] = this;
	},
	computed: {
		...mapGetters(['money'])
	},
	methods: {
		...mapActions(['increment', 'decrement'])
	}
}
</script>

<style>

</style>
