<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Ev/>
    <Com :age="age" @path="msg">
      <h1 slot="a">加在上面</h1>
      <h1 slot="b">我要加东西2</h1>
    </Com>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ev from './components/events.vue'
import Com from './components/com.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Ev,
    Com
  },
  data() {
    return {
      age: 184
    }
  },
  methods: {
    msg(ag) {
      this.age++;
      console.log(ag);
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
