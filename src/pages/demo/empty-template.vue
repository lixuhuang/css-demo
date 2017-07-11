<template>
  <div class="page">
    <div class="index-paper" :zDepth="paperDepth"> 
      <div class="rect">
        <div>multi border</div>         
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
      window.$app.$emit('setTitle', 'DEMO')
    }
  }
</script>