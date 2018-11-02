<template lang="pug" src="./events.pug"></template>
<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		msg(a, b) {
			console.log(Math.random(), a, b);
		},
		// 防止冒泡
		parent() {
			console.log('parent');
		},
		child() {
			console.log('child');
		}
	}
}
</script>

<style lang="less">
	.container {
		color: darkolivegreen;
	}
</style>
