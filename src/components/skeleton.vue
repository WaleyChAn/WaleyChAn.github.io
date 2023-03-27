<template>
  <div v-if="state !== 'done'"
       class="oc-card-column col-box-6"
       ref="skeleton">
    <div class="oc-card-item oc-skeleton">
      <div class="oc-card-cover">
        <font><s class="skeleton-item cover animation"></s></font>
      </div>
      <!-- prev -->
      <div class="oc-card-info">
        <s class="skeleton-item animation"
           style="width: 40%;"></s>
        <s class="skeleton-item animation"></s>
        <s class="skeleton-item animation"></s>
        <s class="skeleton-item animation"
           style="width: 70%;"></s>
      </div>
      <!-- info -->
    </div>
    <!-- item -->
  </div>
</template>

<script>
export default {
  name: 'OcSkeleton',
  components: {

  },
  props: {
    state: {
      type: String,
      default: 'await'
    }
  },
  data () {
    return {

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
      const scrollHeight = document.documentElement.clientHeight

      const _skeleton = this.$refs.skeleton
      if (_skeleton) {
        const skeletonTop = _skeleton.offsetTop
        if (scrollTop + scrollHeight > skeletonTop) {
          if (this.state === 'await') {
            this.$emit('show')
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
