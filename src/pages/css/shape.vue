<template>
  <div class="page">
    <div class="index-paper" :zDepth="paperDepth"> 
      <div class="rect">
        <div class="shape1">shap1</div>         
        <div class="ellipse">ellipse</div>         
        <div class="half-ellipse">half ellipse</div>         
        <div class="quater-ellipse">quater ellipse</div>
        <a label="糖果" style="margin-left:10px" class="button blue brackets" primary href = "http://simurai.com/archive/buttons"  target="_blank">糖果按钮</a>
      </div>
      <div class="rect">
        <div class="parallelograms">parallelograms</div>     
        <div ><img style="height:5em;width:5em;" src="http://csssecrets.io/images/adamcatlace.jpg"></div> 
        <div class="corner-clip">gradient clip</div>   
        <div class="round-corner-clip" >round gradient clip</div>   
      </div>
      <div class="rect" style="margin-top:3em">
        <div class="svg-corner-clip">svg-corner-clip</div>     
        <div class="clippath-corner-clip">clippath-corner-clip</div>     
        <mu-raised-button label="点击看梯形" style="margin-left:10px" primary href="http://dabblet.com/gist/1345dc9399dc8e794502" target="_blank"></mu-raised-button>
      </div>
      <div class="rect1">
        <h2>使用负数延迟</h2>
        <div class="color-rect"></div>
        <div class="color-rect"></div>
        <div class="color-rect"></div>
        <div class="color-rect"></div>
        <div class="color-rect"></div>
        <div class="color-rect"></div>
      </div>
      <div class="rect1">
        <h2>SVG 画饼图</h2>
        <div class="pie">
          <svg class="svg" width="100" height="100">
            <circle class="circle" r="25" cx="50" cy="50"></circle>
            <circle class="circle2" r="25" cx="50" cy="50"></circle>
          </svg>
        </div>
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
      window.$app.$emit('setTitle', '形状')
    },
    mounted () {
    }
  }
</script>

<style scoped>
@import '../../less/buttons.css';

.pie {
	width: 100px;
	height: 100px;
	display: inline-block;
	margin: 10px;
	transform: rotate(-90deg);
}

.svg {
	background: yellowgreen;
	border-radius: 50%;
}

.circle {
	fill: rgba(0, 0, 0, 0);
	stroke: green;
	stroke-width: 50;
  stroke-dasharray: 80 158;
  transition: 1s;
}

.circle2 {
	fill: rgba(0, 0, 0, 0);
	stroke: yellow;
	stroke-width: 50;
  stroke-dashoffset: -80;
  stroke-dasharray: 30 158;
  transition: 1s;
}

.circle:hover {
  /*animation: fillup 1s linear;
  animation-fill-mode: forwards;*/
  stroke-dasharray: 90 158;
}

/*@keyframes fillup {
  to {stroke-dasharray: 90 158}
}*/

@keyframes foo {
	from { background: red }
	to { background: yellowgreen }
}

.color-rect {
	display: inline-block;
	width: 100px; height: 100px;
	
	animation: foo 1s both linear;
	animation-play-state: paused;
}

.color-rect:nth-of-type(2) { animation-delay: -.2s; }
.color-rect:nth-of-type(3) { animation-delay: -.4s; }
.color-rect:nth-of-type(4) { animation-delay: -.6s; }
.color-rect:nth-of-type(5) { animation-delay: -.8s; }
.color-rect:nth-of-type(6) { animation-delay: -1s; }


.svg-corner-clip {
	border: 21px solid transparent;
	border-image: 1 url('data:image/svg+xml,\
	                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
	                      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
	                      </svg>');
	background: #58a;
	background-clip: padding-box;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
}


.clippath-corner-clip {
	background: #58a;
	-webkit-clip-path: 
		polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
		calc(100% - 20px) 100%,
		20px 100%, 0 calc(100% - 20px), 0 20px);
	clip-path:
	 		polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
	 		calc(100% - 20px) 100%,
	 		20px 100%, 0 calc(100% - 20px), 0 20px);
	padding: 1em 1.2em;
	color: white;
}

.round-corner-clip {
	background: #58a;
	background:	radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
	            radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
	            radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
	            radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
	background-size: 51% 51%;
	background-repeat: no-repeat;
	
	padding: 1em 1.2em;
	max-width: 12em;
	color: white;
	font: 130%/1.6 Baskerville, Palatino, serif;
}

.corner-clip {
	background: #58a;
	background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
	            linear-gradient(-135deg, transparent 15px, #58a 0) top right,
	            linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
	            linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
	background-size: 51% 51%;
	background-repeat: no-repeat;
	
	padding: 1em 1.2em;
	max-width: 12em;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
}

img {
	max-width: 250px;
	margin: 20px;
	-webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	transition: 1s;
}

img:hover {
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.parallelograms 
{
	position: relative;
	display: inline-block;
	padding: .5em 1em;
	border: 0; margin: 3em;
	background: transparent;
	color: white;
	text-decoration: none;
  z-index: 10;
}
.parallelograms::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: plum;
  transform: skew(45deg);
  z-index: -1;
}

.shape1
 {
  background: yellowgreen;
  border-radius: 50% 0 50% 0 / 50% 0 50% 0;
  padding-top: 3em;
  text-align: center;
  color: white;
}

.ellipse
 {
  background: grey;
  border-radius: 50%;
  padding-top: 3em;
  text-align: center;
  color: white;
}

.half-ellipse
 {
  background: yellowgreen;
  border-radius: 50%/100% 100% 0 0;
  padding-top: 3em;
  text-align: center;
  color: white;
}

.quater-ellipse
 {
  background: grey;
  border-radius: 100% 0 0 0;
  padding-top: 3em;
  text-align: center;
  color: white;
}

</style>
