<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import logs from './plugin/logs'

export default {
  created () {
    logs()
  }
}
</script>

<style lang="scss" scoped>
</style>
