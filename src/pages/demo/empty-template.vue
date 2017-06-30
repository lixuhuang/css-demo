<template>
  <div class="page">
    <mu-paper class="index-paper" :zDepth="paperDepth"> 
      <div class="rect">
        <div class="hor-rect">multi border</div>         
      </div>
    </mu-paper>
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
      window.$app.$emit('setTitle', 'DEMO')
    }
  }
</script>