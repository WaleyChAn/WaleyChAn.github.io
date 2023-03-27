<template>
  <div class="oc-details oc-container">
    <div class="details-flex-title"
         :class="{'active': goTopShow}">
      <div class="flex-title-content oc-container">
        <div class="flex-title-btn"
             @click="goto('/')">
          <i class="fa fa-reply"></i>
          返回首页
        </div>
        {{ tmpItem.title }}
      </div>
    </div>
    <div class="oc-box">
      <div class="details-content">
        <div class="details-header">
          <div class="details-title">{{ tmpItem.title }}</div>
          <!-- title -->
          <div class="details-info clear-both">
            <div v-if="tmpItem.author"
                 class="oc-avatar left">
              <div class="avatar-main">
                <img v-if="tmpItem.author.avatar"
                     :src="tmpItem.author.avatar" />
              </div>
              <div class="avatar-text">
                {{ tmpItem.author.nickname || tmpItem.author.username }}
              </div>
            </div>
            <!-- avatar -->
            <div class="left">{{ tmpItem.createdAt | date }}</div>
          </div>
          <!-- info -->
        </div>
        <!-- header -->
        <div class="details-body"
             v-html="tmpItem.body"></div>
        <!-- body -->
        <div class="details-tags">
          <div v-for="(item, index) in tmpItem.categories"
               :key="index"
               :style="{backgroundColor: item.color}"
               class="tags-item"
               @click="tagsClick(item)">{{ item.name }}</div>
        </div>
        <!-- tags -->
      </div>
    </div>
    <!-- box -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters, mapMutations } from 'vuex'

import Prism from 'prismjs'
Prism.manual = true

export default {
  name: 'OcDetails',
  data () {
    return {
      tmpItem: {},
      fetchOpt: {
        populate: ['author', 'categories']
      },
      pageLoading: false
    }
  },
  filters: {
    date (val) {
      return dayjs(val).format('YYYY-MM-DD hh:mm')
    }
  },
  computed: {
    postID () {
      return this.$route.query.id || ''
    },
    ...mapGetters({
      goTopShow: 'getGoTopShow'
    })
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapMutations({
      updateCurrenNav: 'UPDATE_CURRENT_NAV'
    }),
    goto (path) {
      this.$router.push(path)
    },
    tagsClick (item) {
      this.updateCurrenNav(item._id || 'home')
      this.$router.push('/')
    },
    async fetchData () {
      if (this.postID) {
        const { populate } = this.fetchOpt
        const query = { populate }
        this.pageLoading = true
        const res = await this.$http.get(`rest/posts/${this.postID}`, { params: query })
        if (res && res.data) {
          this.tmpItem = res.data
        }
        setTimeout(() => { Prism.highlightAll() }, 0)
        this.pageLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
