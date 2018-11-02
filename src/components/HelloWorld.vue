<template lang="pug">
  .container
    a.link {{msg}}
    div(v-html="msg1" :id="id")
    p {{number - 1}}
    p(v-if="seem") 要显示了
    p(v-else) 不显示了
    p(:class="[a1,a2]") 借了{{money}} 还了 {{back}} 剩下 {{remain}}
    p(:class="{ test1: a3 }") style:object
    p(:class="obj") style:obj
    ul
      li(v-for="(item, index) in list" :key="index") {{item}}
    ul
      template(v-for="(item, index) in list")
        li(:key="item+1") hello
        li(:key="item") {{item}}

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      msg1: '<span>this is tag</span>', // v-html
      id: 'test', // v-bind:id | :id
      number: 12, // { number ++ } 表达式
      seem: true, // v-if | v-else 使用
      money: 1000, // 实时计算computed应用
      back: 100,
      a1: 'a1',
      a2: 'a2',
      a3: true,
      obj: {
        test1: true
      },
      list: ['a', 'b', 'c', 'd'] // 阻止渲染是一些未改动过的都重新渲染，提高性能
    }
  },
  computed: {
    remain() {
      return this.money - this.back
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {
  margin:0;
  padding: 0;
  border: none;
}
</style>
