<template lang="pug" src="./com.pug"></template>

<script>
export default {
	props: ['age'],
	data() {
		return {
			name: 'com'
		}
	}
}
</script>

<style lang="less" scoped>
	@import './com.less';
</style>
