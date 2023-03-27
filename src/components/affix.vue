<template>
  <div class="oc-affix"
       ref="affix"
       :class="{'affixing': affixing}"
       :style="affixsStyle">
    <div class="affix-wrapper"
         :style="wrapperStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OcAffix',
  components: {

  },
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      timer: null,
      scrollTop: 0,
      affixTop: 0,
      affixsStyle: {},
      wrapperStyle: {},
      affixing: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const _affix = this.$refs.affix
      if (_affix) {
        const affixTop = _affix.offsetTop
        const affixLeft = _affix.offsetLeft
        const affixWidth = _affix.clientWidth
        const affixHeight = _affix.clientHeight
        if (scrollTop > affixTop - this.offsetTop) {
          if (!this.affixing) {
            this.affixing = true
            this.affixsStyle = {
              width: affixWidth + 'px',
              height: affixHeight + 'px'
            }
            this.wrapperStyle = {
              top: affixTop > this.offsetTop ? this.offsetTop + 'px' : affixTop + 'px',
              left: affixLeft + 'px',
              width: affixWidth + 'px',
              height: affixHeight + 'px'
            }
          }
        } else {
          if (this.affixing) {
            this.affixing = false
            this.affixsStyle = {}
            this.wrapperStyle = {}
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
