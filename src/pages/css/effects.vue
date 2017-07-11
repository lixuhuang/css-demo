<template>
  <div class="page">
    <div class="index-paper" :zDepth="paperDepth"> 
      <div class="rect">
        <div class="shadow1" ></div>   
        <div class="shadow2" ></div>   
        <div class="shadow3" ></div>   
      </div>
      <div class="rect">
        <div class="shadow4 speech" > bubble</div>   
        <div class="shadow4 dotted" >dotted</div>   
        <div class="shadow4 cutout" >cutout</div>   
      </div>
      <div class="rect" style="margin-top:6em;">
        <div style="background-image:url(http://csssecrets.io/images/tiger.jpg)" class="tinted-image"></div>
        <div>
          <img class="filter-img" src="http://csssecrets.io/images/tiger.jpg" ></img>
        </div>
      </div>
      <div class="rect1">
        <div class="folded-corner" > “The only way to get rid of a temptation is to yield to it.”
— Oscar Wilde, The Picture of Dorian Gray</div>    
      </div>
      <div>
        <main>
        <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”</em>
        <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
        </blockquote>
        </main>
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
      window.$app.$emit('setTitle', '视觉效果')
    }
  }
</script>
<style lang="css" scoped>

.folded-corner {
	position: relative;
	width: 12em;
	background: #58a; /* Fallback */
	background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
	padding: 2em;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
	border-radius: .5em;
}

.folded-corner::before {
	content: '';
	position: absolute;
	top: 0; right: 0;
	width: 1.73em; height: 3em;
	background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
	transform: translateY(-1.3em) rotate(-30deg);
	transform-origin: bottom right;
	border-bottom-left-radius: .5em;
	box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15)
}

body {
	min-height: 100vh;
	box-sizing: border-box;
	margin: 0;
	padding-top: calc(50vh - 6em);
	font: 150%/1.6 Baskerville, Palatino, serif;
}

body, main::before {
	background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
}

main {
	position: relative;
	margin: 0 auto;
	padding: 1em;
	max-width: 23em;
	background: hsla(0,0%,100%,.25) border-box;
	overflow: hidden;
	border-radius: .3em;
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
}

main::before {
	content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: -30px;
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: blur(20px);
}

blockquote { font-style: italic }
blockquote cite { font-style: normal; }

.tinted-image {
	width: 200px; height: 100px;
	background-size: cover;
	background-color: hsl(0, 0%, 50%);
	background-blend-mode: luminosity;
	transition: .5s background-color;
}

.tinted-image:hover {
	background-color: transparent;
}

.filter-img {
	max-width: 200px;
	transition: 1s filter, 1s -webkit-filter;
	-webkit-filter: sepia() saturate(4) hue-rotate(295deg);
	filter: sepia() saturate(4) hue-rotate(295deg);
}

.filter-img:hover,
.filter-img:focus {
	-webkit-filter: none;
	filter: none;
}

.shadow4 {
	position: relative;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	vertical-align: bottom;
	box-sizing: border-box;
	width: 5.9em;
	height: 5.2em;
	margin: .6em;
	background: #fb3;
	/*box-shadow: .1em .1em .3em rgba(0,0,0,.5);*/
	-webkit-filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
	filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
	font: 200%/1.6 Baskerville, Palatino, serif;
	text-align: center;
}

.speech {
	border-radius: .3em;
}

.speech::before {
	content: '';
	position: absolute;
	top: 1em;
	right: -0.7em;
	width: 0;
	height: 0;
	border: 1em solid transparent;
	border-left-color: #fb3;
	border-right-width: 0;
}

.dotted {
	background: transparent;
	border: .3em dotted #fb3;
}

.cutout {
	border: .5em solid #58a;
	border-image: 1 url('data:image/svg+xml,\
	                     <svg xmlns="http://www.w3.org/2000/svg"\
		                 width="3" height="3" fill="%23fb3">\
		     	         <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
		     	</svg>');
	background-clip: padding-box;
}
.shadow1 {
	background: #fb3;
	box-shadow: 0 5px 4px -4px black;
}
.shadow2 {
	background: #fb3;
	box-shadow: 3px 3px 6px -3px black;
}
.shadow3 {
	background: #fb3;
	box-shadow: 5px 0 5px -5px black,
	           -5px 0 5px -5px black;
}
</style>
