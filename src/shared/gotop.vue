<template>
  <div class="gotop-wrapper clear-both"
       :class="{'show-gotop': goTopShow}">
    <div class="gotop-content">
      <ul>
        <!-- <li @click="goOutside('https://github.com/WaleyChAn')">
          <i class="fab fa-github"></i>
          <span>ChAn's<br />github</span>
        </li> -->
        <li class="btn-gotop"
            @click="goTop()">
          <i class="fa fa-arrow-up"></i>
          <span>返 回<br />顶 部</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'OcGotop',
  data () {
    return {
      scrollTop: 0
    }
  },
  computed: {
    ...mapGetters({
      goTopShow: 'getGoTopShow'
    })
  },
  watch: {
    scrollTop (val) {
      if (this.scrollTop > 300) {
        if (!this.goTopShow) {
          this.updateGoTopShow(true)
        }
      } else {
        if (this.goTopShow) {
          this.updateGoTopShow(false)
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      updateGoTopShow: 'UPDATE_GO_TOP_SHOW'
    }),
    handleScroll () {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    },
    goTop () {
      let timer = null
      let _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 500
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.updateGoTopShow(false)
        }
      })
    },
    goOutside (path) {
      if (path) {
        window.open(path)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
</style>
