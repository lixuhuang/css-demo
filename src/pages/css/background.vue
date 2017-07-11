<template>
  <div class="page">
    <div class="index-paper" :zDepth="paperDepth"> 
      <div class="rect1" style="background: url('http://csssecrets.io/images/stone-art.jpg')">
        <div class="semi-transparent">semi-transparent border</div>
      </div> 
      <div class="rect">
        <div class="hor-rect multi-border">multi border</div>         
        <div class="bg-pos  ">bg position</div>
        <div class="bg-origin  ">bg origin</div>
        <div class="bg-calc  ">bg calc</div>
        <div class="inner-round  ">inner round</div>
      </div>

      <div class="rect" >
        <div class="horizontal-stripes  "></div>         
        <div class="vertical-stripes  "></div>  
        <div class="diagonal-stripes  "></div>         
        <div class="diagonal-stripes-60deg  "></div>         
        <div class="subtle-stripes  "></div>         
      </div>

      <div class="rect">
        <div class="blueprint  "></div>         
        <div class="polka  "></div>         
        <div class="checkerboard  "></div>         
        <div class="checkerboard-svg  "></div>  
        <div class="border-image  "></div>         
      </div>

      <div class="rect">
        <div class="border-image border-image2  "></div>         
        <div class="hor-rect continuous-image-borders">border image border image border image </div>         
        <div class="vintage-envelope  "> background clip </div>  
        <div class="vintage-envelope-border-image  "> border image </div>  
        <div class="marching-ants  "></div>  

      </div>

      <div class="rect">
        <mu-raised-button label="CSS Patterns Pallery" style="margin-left:10px" primary href = "http://lea.verou.me/css3patterns"  target="_blank"></mu-raised-button>
        <mu-flat-button label="css images" style="margin-left:10px" href="http://w3.org/TR/css-images" target="_blank"></mu-flat-button>
        <mu-flat-button label="css background" style="margin-left:10px" href="http://w3.org/TR/css-backgrounds" target="_blank" primary></mu-flat-button>
        <mu-flat-button label="SVG" style="margin-left:10px" href="http://w3.org/TR/SVG" target="_blank"></mu-flat-button>
        <mu-flat-button label="css4 images" style="margin-left:10px" primary href="http://w3.org/TR/css4-images" target="_blank"></mu-flat-button>

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
      onPopState (state) {
        console.log(state)
      }
    },
    created () {
      window.$app.$emit('setTitle', '背景')
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log(`from ${from.path}`)
      console.log(`to ${to.path}`)
      // if (to.path.indexOf('ci') !== -1) {
      //   next('cicada')
      // } else {
      //   next('layout')
      // }
      // next('cicada')
      // this.$router.push('cicada')
      if (this.continue) {
        next()
      } else {
        next(false)
        setTimeout(() => { this.continue = true; next('cicada') }, 0)
      }
    },
    mounted () {
    },
    destroyed () {
    }
  }
</script>
<style lang="css" scoped>

@keyframes ants { to { background-position: 100% 100% } }

.vintage-envelope {
	padding: 1em;
	border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, 
	              #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
	
	max-width: 20em;
	font: 100%/1.6 Baskerville, Palatino, serif;
}
.vintage-envelope-border-image {
	padding: 1em;
	border: 16px solid transparent;
	border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em,
	              #58a 0, #58a 3em, transparent 0, transparent 4em);
	max-width: 20em;
  color: black !important;
	font: 100%/1.6 Baskerville, Palatino, serif;
}
.marching-ants {
	padding: 1em;
	border: 1px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
	animation: ants 12s linear infinite;
	
	max-width: 20em;
	font: 100%/1.6 Baskerville, Palatino, serif;
}

.continuous-image-borders {
	border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            url(http://csssecrets.io/images/stone-art.jpg) border-box  0 / cover;
  padding: 1em;
  color: black !important;
}

.border-image {
	border: 40px solid transparent;
	border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http:%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="30"> \
	                      <circle cx="5" cy="5" r="5" fill="%23ab4"%2F><circle cx="15" cy="5" r="5" fill=" %23655"%2F> \
	                      <circle cx="25" cy="5" r="5" fill="%23e07"%2F><circle cx="5" cy="15" r="5" fill=" %23655"%2F> \
	                      <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"%2F> \
	                      <circle cx="25" cy="15" r="5" fill=" %23655"%2F><circle cx="5" cy="25" r="5" fill="%23fb3"%2F> \
	                      <circle cx="15" cy="25" r="5" fill=" %23655"%2F><circle cx="25" cy="25" r="5" fill="%2358a"%2F><%2Fsvg>');
	padding: 1em;
	max-width: 20em;
	font: 130%/1.6 Baskerville, Palatino, serif;
}

.border-image2 {
	border-image-repeat: round;
}


.checkerboard-svg {
  background: #eee url('data:image/svg+xml,\
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
              <rect x="50" width="50" height="50" />\
              <rect y="50" width="50" height="50" />\
              </svg>');
  background-size: 30px 30px;
}

.checkerboard {
  background: #eee;
  background-image: 
    linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0),
    linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;

  min-height: 100%;
}

.polka {
  background: #655;
  background-image: radial-gradient(tan 20%, transparent 0),
                    radial-gradient(tan 20%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;  
}

.subtle-stripes {
  background: #58a;
  background-image: repeating-linear-gradient(30deg, 
                hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px,
                transparent 0, transparent 30px);

}

.blueprint {
  background: #58a;
  background-image: linear-gradient(white 2px, transparent 0),
                    linear-gradient(90deg, white 2px, transparent 0),
                    linear-gradient(hsla(0,0%,100%,.3) 1px, transparent 0),
                    linear-gradient(90deg, hsla(0,0%,100%,.3) 1px, transparent 0);
  background-size: 50px 50px, 50px 50px,
                  10px 10px, 10px 10px;
}

.horizontal-stripes {
  background: linear-gradient(#fb3 50%, #58a 0);
  background-size: 100% 20px;
}
.vertical-stripes {
  background: linear-gradient(to right, #fb3 50%, #58a 0);
  background-size: 30px 100%;
}

.diagonal-stripes {
  background: linear-gradient(45deg, 
                #fb3 25%, #58a 0, #58a 50%,
                #fb3 0, #fb3 75%, #58a 0);
  background-size: 42.4px 42.4px;
}

.diagonal-stripes-60deg {
  background: repeating-linear-gradient(60deg, 
                #fb3, #fb3 15px,
                #58a 0, #58a 30px);

}

.semi-transparent {
  border: 10px solid hsla(0, 0%, 100%, .5);
  background: white;
  background-clip: padding-box;

  max-width: 20em;
	padding: 2em;
	margin: 2em auto 0;
	font: 100%/1.5 sans-serif;
}
.multi-border {
	margin: 25px;
	background: yellowgreen;
	box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink,
            0 2px 5px 15px rgba(0,0,0,.6);  
}

.bg-pos {
	background: url(http://csssecrets.io/images/code-pirate.svg)
	            no-repeat bottom right #58a;
	background-position: right 20px bottom 10px;
}

.bg-origin {
  background: url(http://csssecrets.io/images/code-pirate.svg)
	            no-repeat bottom right #58a;
	background-origin: content-box;
}

.bg-calc {
	background: url(http://csssecrets.io/images/code-pirate.svg)
	            no-repeat bottom right #58a;
	background-position: calc(100% - 20px) calc(100% - 10px);
}

.inner-round {
	outline: .6em solid #655;
	box-shadow: 0 0 0 .4em #655; /* todo calculate max of this */
	max-width: 10em;
	border-radius: .8em;
	padding: 1em;
	margin: 1em;
	background: tan;
	font: 100%/1.5 sans-serif;
}
</style>
