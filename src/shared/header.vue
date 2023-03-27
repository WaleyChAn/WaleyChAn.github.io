<template>
  <div class="oc-container clear-both">
    <div class="oc-logo"
         @click="goto('/')">
      <img src="@/assets/images/logo.png">
    </div>
    <div class="oc-nav">
      <div class="oc-nav-content">
        <ul class="clear-both">
          <li v-for="(item, index) in navList"
              :key="index"
              :class="{'active':item._id === currentNav}"
              @click="navClick(item)">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'OcHeader',
  data () {
    return {
      navActive: 'home',
      navList: [
        {
          _id: 'home',
          name: '首页'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentNav: 'getCurrentNav'
    })
  },
  created () {
    this.fetchNav()
  },
  methods: {
    ...mapMutations({
      updateCurrenNav: 'UPDATE_CURRENT_NAV'
    }),
    navClick (item) {
      this.updateCurrenNav(item._id || 'home')
      this.$router.push('/')
    },
    goto (path) {
      this.$router.push(path)
    },
    async fetchNav () {
      const res = await this.$http.get('rest/categories')
      if (res && res.data) {
        this.navList.push(...res.data.result)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
