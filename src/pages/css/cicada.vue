<template>
  <div class="page">
    <mu-paper class="index-paper" :zDepth="paperDepth"> 
      <div class="rect bg">
        <div class="loading">loading</div>         
      </div>

      <div class="rect stripes">
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
      window.$app.$emit('setTitle', '蝉原则')
    }
  }
</script>

<style lang="css" scoped>
@keyframes spin { to { transform: rotate(1turn); } }
@keyframes radius { 50% { border-radius: 50%; } }
@keyframes color { 33% { color: orange; } 66% { color: deeppink } }
@keyframes width { 50% { border-width: .3em; } }

.loading:before {
	content: '';
	display: block;
	width: 4em;
	height: 4em;
	margin: 0 auto 1em;
	border: 1.5em solid;
	color: yellowgreen;
	box-sizing: border-box;
	animation: 1s spin, .7s radius, 1.1s color, 1.3s width;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.loading {
  width: 250px;
	margin: auto;
  margin-top: 2em; 
}

.bg {
  width: 250px;
	margin: 0;
  margin-bottom: 1em;
	display: flex;
	text-align: center;
	background: #655;
	color: white;
}

.stripes {
  background: hsl(20, 40%, 90%);
  background-image: 
    linear-gradient(90deg, #fb3 11px, transparent 0),
    linear-gradient(90deg, #ab4 23px, transparent 0),
    linear-gradient(90deg, #655 23px, transparent 0);
  background-size: 83px 100%, 61px 100%, 41px 100%;
}
</style>
