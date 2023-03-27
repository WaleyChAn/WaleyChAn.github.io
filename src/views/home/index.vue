<template>
  <div class="oc-container">
    <div class="oc-card clear-both">
      <div class="oc-card-news col-box-4">
        <oc-affix :offsetTop="40">
          <card-swiper :swiperList="swiperList"></card-swiper>
        </oc-affix>
        <!-- swiper -->
      </div>
      <!-- news -->
      <div class="oc-card-main col-box-8 clear-both">
        <div class="oc-card-column col-box-6"
             v-for="(item,index) in cardList"
             :key="index">
          <div class="oc-card-item">
            <div class="oc-card-cover"
                 @click="goDetails(item._id)">
              <!-- <img :src="item.cover"> -->
              <font :style="coverBackground(item.cover)"></font>
              <span>{{item.title}}</span>
            </div>
            <!-- prev -->
            <div class="oc-card-info">
              <dl>
                <dt>
                  <div class="wrapper">
                    <span v-for="(citem, cindex) in item.categories"
                          :key="cindex"
                          :style="{backgroundColor: citem.color}"
                          @click="tagsClick(citem)">{{ citem.name }}</span>
                    <div class="wrapper-btn"
                         @click="goDetails(item._id)">
                      <i class="fa fa-ellipsis-h"></i>
                    </div>
                  </div>
                </dt>
                <dd>{{ item.createdAt | date }}</dd>
              </dl>
              <!-- dl -->
              <div class="card-info-main"
                   @click="goDetails(item._id)">
                <b>{{ item.title }}</b>
                <p>{{ item.desc }}</p>
                <!-- p -->
              </div>
            </div>
            <!-- info -->
          </div>
          <!-- item -->
        </div>
        <!-- column -->
        <oc-skeleton :state="skeletonState"
                     @show="onShowMore()"></oc-skeleton>
      </div>
      <!-- main -->
    </div>
    <!-- card -->
  </div>
</template>

<script>
import CardSwiper from '@/components/cardSwiper'
import OcSkeleton from '@/components/skeleton'
import OcAffix from '@/components/affix'
import { mapGetters, mapMutations } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'OcHome',
  components: {
    CardSwiper,
    OcSkeleton,
    OcAffix
  },
  filters: {
    date (val) {
      return dayjs(val).format('YYYY/MM/DD hh:mm')
    }
  },
  data () {
    return {
      cardList: [],
      swiperList: [],
      adFetchOpt: {
        populate: [{
          path: 'post',
          select: 'title cover desc'
        }]
      },
      listFetchOpt: {
        populate: ['categories'],
        select: '-body',
        sort: {
          createdAt: -1
        }
      },
      listPaginationOpt: {
        current: 1,
        size: 15
      },
      listSearchOpt: {
        keyword: '',
        author: '',
        isPublic: true,
        state: 1,
        categories: [],
        createdRange: [],
        updatedRange: []
      },
      skeletonState: 'loading'
    }
  },
  computed: {
    ...mapGetters({
      currentNav: 'getCurrentNav'
    }),
    cardListGroup () {
      let newList = []
      const columns = 2
      this.cardList.map((item, index) => {
        const column = index % columns
        if (!newList[column]) newList[column] = []
        newList[column].push(item)
      })
      return newList
    }
  },
  watch: {
    currentNav () {
      this.listPaginationOpt.current = 1
      this.cardList = []
      this.fetchPost()
    }
  },
  created () {
    this.fetchPost()
    this.fetchAd()
  },
  methods: {
    ...mapMutations({
      updateCurrenNav: 'UPDATE_CURRENT_NAV'
    }),
    coverBackground (url) {
      let coverStyle = { backgroundImage: 'url(' + url + ')' }
      return coverStyle
    },
    goDetails (id) {
      this.$router.push({
        path: '/details',
        query: {
          id: id
        }
      })
    },
    tagsClick (item) {
      this.updateCurrenNav(item._id || 'home')
      this.$router.push('/')
    },
    onShowMore () {
      if (this.skeletonState !== 'done') {
        this.listPaginationOpt.current++
        this.fetchPost()
      }
    },
    setFilters (opt = [], arr = []) {
      opt.map(({ valid, filter }) => {
        if (valid) arr.push(filter)
      })
      return arr
    },
    getFilters () {
      let {
        keyword = '',
        author = '',
        state = 0,
        isPublic = null,
        categories = [],
        createdRange = [],
        updatedRange = []
      } = this.listSearchOpt

      categories = []
      if (this.currentNav !== 'home') {
        categories.push(this.currentNav)
      }

      // find
      const option = [
        {
          valid: keyword.length > 0,
          filter: { title: { $regex: keyword, $options: 'i' } }
        },
        {
          valid: author.length > 0,
          filter: { author: { $eq: author } }
        },
        {
          valid: state !== 0,
          filter: { state: { $eq: state } }
        },
        {
          valid: isPublic !== null,
          filter: { isPublic: { $eq: isPublic } }
        },
        {
          valid: categories.length > 0,
          filter: { categories: { $all: categories } }
        },
        {
          valid: createdRange.length > 0,
          filter: {
            createdAt: {
              $gte: createdRange[0],
              $lte: createdRange[1]
            }
          }
        },
        {
          valid: updatedRange.length > 0,
          filter: {
            updatedAt: {
              $gte: updatedRange[0],
              $lte: updatedRange[1]
            }
          }
        }
      ]
      const filters = this.setFilters(option)

      // init
      let where = {}
      if (filters.length > 0) {
        where = {
          $and: filters
        }
      }
      return where
    },
    async fetchPost () {
      this.skeletonState = 'loading'
      const { current: page, size: limit } = this.listPaginationOpt
      const { populate, select, sort } = this.listFetchOpt
      const where = this.getFilters()
      const query = { where, populate, select, sort, page, limit }
      const res = await this.$http.get('rest/posts', { params: query })
      if (res && res.data) {
        this.cardList.push(...res.data.result)
        if (this.cardList.length === res.data.total) {
          this.skeletonState = 'done'
        } else {
          this.skeletonState = 'await'
        }
      }
    },
    async fetchAd () {
      const { populate } = this.adFetchOpt
      const query = { populate }
      const res = await this.$http.get('rest/ads', { params: query })
      if (res && res.data) {
        this.swiperList = res.data.result.map(item => {
          this.$set(item, 'content', item.type === 1 ? item.post : item.site)
          return item
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
