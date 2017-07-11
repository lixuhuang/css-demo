export default {
  data () {
    return {
      snackbarShowed: false,
      snackMsg: '',
      snackBarCloseString: '',
      loading: false,
      pageDisabled: false,
      snackBarCallBack: undefined,
      tipsTrigger: false,
      paperDepth: 1,
      delayBackLock: false
    }
  },
  methods: {
    showSnackbars (message, autoCancel = true, callback) {
      this.snackBarCallBack = undefined
      if (callback) {
        this.snackBarCallBack = callback
      }
      this.snackBarCloseString = autoCancel ? '' : '关闭'
      this.snackMsg = message
      this.snackbarShowed = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      if (autoCancel) {
        this.snackTimer = setTimeout(() => { this.snackbarShowed = false }, 2000)
      }
    },
    hideSnackbars () {
      this.snackbarShowed = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
      if (this.snackBarCallBack) this.snackBarCallBack()
    },
    delayBack () {
      if (this.delayBackLock === false) {
        this.delayBackLock = true
        this.pageDisabled = true
        setTimeout(() => {
          this.pageDisabled = false
          this.delayBackLock = false
          $router.back()
        }, 1000)
      }
    },
    totalPages (pageSize, totalCount) {
      return parseInt((totalCount + pageSize - 1) / pageSize)
    }
  }
}
