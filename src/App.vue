<template>
  <div id="app" >
    <mu-appbar v-if="!isHomePage && !isLoginPage" :zDepth="0" :title="title" class="example-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left" />
    </mu-appbar>
    <app-nav v-if="!isHomePage && !isLoginPage" @change="handleMenuChange" @close="toggleNav" :open="open" :docked="docked" />
    <div v-if="!isLoginPage" class="example-content" :class="{'nav-hide': !open, 'home-page': isHomePage}">
      <router-view v-if="allowed" ></router-view>
      <div v-else>您没有当前页面访问权限</div>
    </div>
    <div v-else>
      <router-view v-if="allowed" ></router-view>
      <div v-else>您没有当前页面访问权限</div>
    </div>
    
  </div>
</template>

<script>
  import AppNavDrawer from './components/app-nav'

  export default {
    data () {
      const desktop = isDesktop()
      return {
        open: desktop,
        docked: desktop,
        desktop: desktop,
        title: '',
        allowed: true
      }
    },
    created () {
      window.$app = this
      this.$on('setTitle', title => { this.title = title })
    },
    mounted () {
      let loading = document.getElementById('loading')
      if (loading.parentNode) {
        loading.parentNode.removeChild(loading)
      }
      this.routes = this.$router.options.routes
      this.setTitle()
      this.changeNav()
      this.handleResize = () => {
        this.changeNav()
      }
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('unload', (data) => {
        console.log(data)
        // this.setTitle()
        // this.allowed = true
      })
    },
    computed: {
      isHomePage () {
        return this.$route.fullPath === '/index'
      },
      isLoginPage () {
        return this.$route.fullPath === '/login' || this.$route.fullPath === '/register'
      }
    },
    methods: {
      toggleNav () {
        this.open = !this.open
      },
      exit () {
        this.$router.replace({ path: '/login' })
      },
      changeNav () {
        const desktop = isDesktop()
        this.docked = desktop
        if (desktop === this.desktop) return
        if (!desktop && this.desktop && this.open) {
          this.open = false
        }
        if (desktop && !this.desktop && !this.open) {
          this.open = true
        }
        this.desktop = desktop
      },
      handleMenuChange (path) {
        if (!this.desktop) this.open = false
      },
      setTitle () {
        // this.title = getTitle()
        // let path = window.location.hash
        // if (path && path.length > 1) path = path.substring(1)
        // for (let i = 0; i < this.routes.length; i++) {
        //   var route = this.routes[i]
        //   if (route.path === path) {
        //     this.title = path.substring(1) || ''
        //     return
        //   }
        // }
      }
    },
    destroyed () {
      window.removeEventListener('resize', this.handleResize)
    },
    components: {
      'app-nav': AppNavDrawer
    }
  }
  function isDesktop () {
    return window.innerWidth > 993
  }
</script>

<style lang="less">
@import "./less/common.css";
.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  z-index: 10;
  width: calc(~'100% -  256px') !important;
  &.nav-hide {
    left: 0;
    width: 100% !important;
  }
}

.example-content{
  padding-top: 28px;
  padding-left: 284px;
  padding-right: 28px;
  &.nav-hide {
    padding-left: 28px;
  }
}

.content-wrapper{
  padding: 48px 72px;
}

@media (min-width: 480px) {
  .example-content{
    padding-top: 92px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
    width: 100% !important;
  }
  .example-content{
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
}
.home-page{
  padding: 0;
  .example-content {
    transition-duration: 0s;
  }
}
</style>