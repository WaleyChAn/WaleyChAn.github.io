<template>
  <div class="oc-layout">
    <div class="oc-header">
      <oc-header></oc-header>
    </div>
    <!-- header -->
    <div class="oc-content">
      <router-view></router-view>
    </div>
    <!-- content -->
    <div class="oc-footer">
      <oc-footer></oc-footer>
    </div>
    <!-- footer -->
    <div class="oc-gotop">
      <oc-gotop></oc-gotop>
    </div>
    <!-- gotop -->
  </div>
</template>

<script>
import OcHeader from '@/shared/header'
import OcFooter from '@/shared/footer'
import OcGotop from '@/shared/gotop'

export default {
  name: 'OcLayout',
  components: {
    OcHeader,
    OcFooter,
    OcGotop
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
