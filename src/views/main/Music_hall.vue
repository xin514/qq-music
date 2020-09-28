<template>
  <div>
    <my-swiper/>
  </div>
</template>

<script>
import MySwiper from '@/components/main/music-hall/MySwiper'

export default {
  components: {
    MySwiper
  },
  methods: {
    async fetchSwiperList () {
      const res = await this.$http.get('/banner')
      console.log(res.data)
    }
  },
  created () {
    this.fetchSwiperList()
  }
}
</script>

