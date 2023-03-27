<template>
  <div class="oc-card-swiper">
    <div class="cover">
      <swiper :options="coverOption"
              ref="coverSwiper">
        <swiper-slide v-for="(slide, index) in swiperList"
                      :key="index">
          <div class="cover-item"
               :style="coverBackground(slide.content.cover)"
               @click="sliderClick(slide)"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="info">
      <swiper :options="infoOption"
              ref="infoSwiper"
              @slideChangeTransitionStart="sliderChange()">
        <swiper-slide v-for="(slide, index) in swiperList"
                      :key="index">
          <dl class="info-item"
              @click="sliderClick(slide)">
            <dt>{{slide.content.title}}</dt>
            <dd>{{slide.content.desc}}</dd>
          </dl>
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
        <div class="swiper-button-prev"
             slot="button-prev">
          <i class="fa fa-arrow-left"></i>
        </div>
        <div class="swiper-button-next"
             slot="button-next">
          <i class="fa fa-arrow-right"></i>
        </div>
      </swiper>
    </div>
  </div>
  <!-- swiper -->
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'CardSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      infoOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        spaceBetween: 20,
        pagination: {
          el: '.info .swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.info .swiper-button-next',
          prevEl: '.info .swiper-button-prev'
        }
      },
      coverOption: {
        effect: 'fade',
        simulateTouch: false
      }
    }
  },
  computed: {
    infoSwiper () {
      return this.$refs.infoSwiper.swiper
    },
    coverSwiper () {
      return this.$refs.coverSwiper.swiper
    }
  },
  methods: {
    sliderChange () {
      let swiperIndex = this.infoSwiper.activeIndex
      this.coverSwiper.slideTo(swiperIndex)
    },
    coverBackground (url) {
      let coverStyle = { backgroundImage: 'url(' + url + ')' }
      return coverStyle
    },
    sliderClick (slide) {
      const type = slide.type
      const url = slide.content.url
      const postId = slide.content._id
      switch (type) {
        case 1:
          if (postId) this.goDetails(postId)
          break
        case 2:
          if (url) window.open(url)
          break
      }
    },
    goDetails (id) {
      this.$router.push({
        path: '/details',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
