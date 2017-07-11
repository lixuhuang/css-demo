<template>
  <div class="page">
    <div class="index-paper" :zDepth="paperDepth"> 
      <div class="rect center-text">
        <mu-raised-button style="padding:1em;" href="http://dabblet.com/gist/763229b68fa27c5c1bfa" primary target="_blank">满幅背景，定宽内容</mu-raised-button>     
        <mu-raised-button style="padding:1em;" href="http://play.csssecrets.io/" primary target="_blank">CSS Secrets代码</mu-raised-button>     
      </div>
    </div>
  </div>
</template>
<script>
  import mixin from '../mixin'
  export default {
    mixins: [mixin],
    data () {
      return {
        test: false
      }
    },
    methods: {
    },
    created () {
      window.$app.$emit('setTitle', '结构与布局')
    }
  }
</script>

<style scoped>


</style>
