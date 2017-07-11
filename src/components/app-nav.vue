<template>
<mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
  <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
    <a class="exmaples-appbar-title">欢迎 </a>
    <!-- <mu-badge content="rc" class="exmaples-version" secondary/>  @click="handleMenuChange('#/index')" -->
  </mu-appbar>
  <mu-divider/>
  <div class="exmaple-drawer-content">
    <mu-list @change="handleMenuChange" :value="menuVal">
      <mu-list-item v-for="item in menuTree" :value=" item.v ? '#/'+item.v : undefined" :toggleNested="!item.l" :open="item.l" :title="item.t">
        <mu-list-item v-for="i in item.s" :value="'#/'+i.v" :title="i.t" slot="nested"/>
      </mu-list-item>
    </mu-list>
  </div>
</mu-drawer>
</template>

<script>
import Vue from 'vue'

let fullMenuTree = [
  {
    t: 'CSS代码示例',
    s: [
      {v: 'background', t: '背景与边框'},
      {v: 'cicada', t: '蝉原则'},
      {v: 'shape', t: '形状'},
      {v: 'effects', t: '视觉效果'},
      {v: 'ue', t: '用户体验'},
      {v: 'layout', t: '结构与布局'},
    ]
  }
]

export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      menuVal: '#/',
      menuTree: []
    }
  },
  computed: {
    lang () {
      return Vue.config.lang
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleMenuChange (val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide () {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    },
    changeLang (lang) {
      Vue.config.lang = lang
      window.localStorage.setItem('lang', lang)
    }
  },
  mounted () {
    this.menuTree = fullMenuTree
    this.menuVal = window.location.hash
    window.addEventListener('hashchange', () => {
      this.menuVal = window.location.hash
    })
  }
}
</script>

<style lang="less">

.app-drawer{
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.mu-appbar{
  flex-shrink: 0;
}
.exmaple-drawer-content{
  flex: 1;
  .scrollable();
  .no-scrollbar();
}
.scrollable() {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.exmaples-appbar-title{
  color: inherit;
  display: inline-block;
}
.no-scrollbar() {
  &::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    opacity: 0 !important;
  }
}
.exmaples-nav-sub-header {
  padding-left: 34px;
}

.mu-lang-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}

.mu-lang {
  color: inherit;
  margin-left: 2px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &.active {
    color: #ff5252;
  }
}
</style>
