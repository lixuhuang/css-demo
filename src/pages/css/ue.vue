<template>
  <div class="page" >
    <div class="index-paper page" :zDepth="paperDepth" :class="open ? 'de-emphasized' : ''"> 
      <div class="rect">
        <div> <button disabled>button diasble</button> </div>
        <div> <button>loading</button> </div>
        <div> <button class="expand-button" @click="open = true">expend open dialog</button> </div>
      </div>
      <div class="rect">
        <input type="checkbox" id="awesome" autofocus />
        <label for="awesome">Awesome!</label>
        <input type="checkbox" id="awesome2" checked />
        <label for="awesome2">Awesome!</label>
        <input type="checkbox" id="awesome3" disabled />
        <label for="awesome3">Awesome!</label>
        <input type="checkbox" id="awesome4" checked disabled />
        <label for="awesome4">Awesome!</label>
      </div>
      <div class="rect">
        <p>
          与人的交往多半肤浅，或只有在较为肤浅的层面上，交往才是容易的，一旦走进深处，人与人就是相互的迷宫。——史铁生
          养动物能花多少钱？不生病的情况下，有交朋友的支出大么？我在呼和浩特这么个五线城市，出去请人吃饭都得2～300，人多了一桌就5～600。这还是看得见的东西，看不见的，维持一段关系付出的精力有多大？而收获的又有多少呢？你给猫咪买个玩具，你能和他玩一天，你能找出一个能和你玩一天的人么？就算是你女朋父母，你友/男朋友也不会有这么多精力，大家都这么忙
        </p>

      </div> 
    </div>
    <dialog :open='open' @click="open = !open">O HAI, I’m a dialog. Click on me to dismiss.</dialog>

  </div>
</template>
<script>
  import mixin from '../mixin'
  export default {
    mixins: [mixin],
    data () {
      return {
        test: false,
        open: true
      }
    },
    methods: {
    },
    created () {
      window.$app.$emit('setTitle', '用户体验')
    }
  }
</script>
<style scoped>
dialog {
	position: fixed;
	top: 50%; left: 50%;
	z-index: 1;
	width: 10em;
	padding: 2em;
	margin: -5em;
	border: 1px solid silver;
	border-radius: .5em;
	box-shadow: 0 .2em .5em rgba(0,0,0,.5),
	            0 0 0 100vmax rgba(0,0,0,.2);
}

dialog:not([open]) {
	display: none;
}
.de-emphasized {
	-webkit-filter: blur(3px);
	filter: blur(3px);
}

.main {
  transition: .6s filter;
}
input[type="checkbox"] {
	position: absolute;
	clip: rect(0,0,0,0);
}

input[type="checkbox"] + label::before {
	content: '\a0';
	display: inline-block;
	vertical-align: .2em;
	width: 1.2em;
	height: 1.2em;
	margin-right: .2em;
	border-radius: .2em;
	background: silver;
	text-indent: .15em;
	line-height: .65;
}

input[type="checkbox"]:checked + label::before {
	content: '\2713';
	background: yellowgreen;
}

input[type="checkbox"]:focus + label::before {
	box-shadow: 0 0 .1em .1em #58a;
}

input[type="checkbox"]:disabled + label::before {
	background: gray;
	box-shadow: none;
	color: #555;
	cursor: not-allowed;
}

button {
  cursor: progress;
}
button:disabled {
  cursor: not-allowed;
}

.expand-button {
	position: relative;
	padding: .3em .5em;
	background: #58a;
	border-radius: 50%;
	border: 1px solid rgba(0,0,0,.3);
	box-shadow:  0 .1em .2em -.05em rgba(0,0,0,.5);
	color: white;
	font: bold 150%/1 sans-serif;
	cursor: pointer;
}

.expand-button::before {
	content: '';
	position: absolute;
	top: -30px; right: -30px;
	bottom: -30px; left: -30px;
}

</style>
