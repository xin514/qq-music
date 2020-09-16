<template>
  <div id="header">
    <div class="nav-box">
      <ul class="nav-list">
        <router-link
          tag="li"
          to="/main/recommend"
        >推荐
        </router-link>
        <router-link
          tag="li"
          to="/main/music_hall"
        >音乐馆
        </router-link>
        <router-link
          tag="li"
          to="/main/tingshu"
        >听书
        </router-link>
      </ul>
      <div>
        <i class="iconfont icon-gedan"></i>
      </div>
    </div>
    <div class="search-box">
      <label for="search" :data-before="before" :data-after="after" :class="{animate : shouldAnimate}" @animationend="animationEnded">
        <input type="text" name="search" id="search" @focus="Focusing" @blur="blured" @keydown="doSearch" :placeholder="placeholder" v-model="search">
      </label>
      <i class="iconfont icon-search"></i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: [
        'iPad pro',
        'Macbook pro',
        'iMac',
        'iPhone'
      ],
      isFocusing: false,
      currentIndex: 0,
      animationTriggerFlag: true,
      search: ''
    }
  },
  computed: {
    before () {
      let keyword = this.keywords[this.currentIndex]
      return (this.isFocusing) ? '' : keyword
    },
    after () {
      let keyword = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? this.keywords[0] : this.keywords[this.currentIndex + 1]
      return (this.isFocusing) ? '' : keyword
    },
    placeholder () {
      let keyword = this.keywords[this.currentIndex]
      return (!this.isFocusing) ? '' : keyword
    },
    shouldAnimate () {
      return !this.isFocusing && this.animationTriggerFlag
    }
  },
  methods: {
    animationEnded (e) {
      if (e.pseudoElement === '::after') {
        this.animationTriggerFlag = false
        
        let newIndex = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? 0 : this.currentIndex + 1
        this.currentIndex = newIndex
        
        setTimeout (() => {
          this.animationTriggerFlag = true
        }, 3000)
      }
    },
    doSearch(e) {
      if (e.keyCode === 13) {
        alert(this.keywords[this.currentIndex])
      }
    },
    Focusing () {
      this.search = this.keywords[this.currentIndex]
      this.isFocusing = true
    },
    blured () {
      this.search = ''
      this.isFocusing = false
    }
  }
}
</script>

<style scoped>
#header{
  position: fixed;
}

.nav-box{
  display: flex;
  width: 100vw;
  height: 30px;
  justify-content: space-between;
  align-items: center;
}

.nav-box .nav-list{
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-box .nav-list li{
  margin: 0 10px;
}

.nav-box .nav-list li.router-link-active{
  font-size:18px;
  font-weight: 600;
  border-bottom: 2px solid green;
}

.nav-box div i{
  font-size: 24px;
  padding: 0 8px;
  color: rgb(29, 134, 29);
}

/* 搜索框 */
.search-box{
  position: relative;
  margin: 6px 0;
}

.search-box label{
  position: relative;
  display: block;
  overflow: hidden;
}

.search-box label::before{
  content: attr(data-before);
}

.search-box label::after{
  content: attr(data-after);
}

.search-box label::before,
.search-box label::after{
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  font-size: 13px;
  padding: 10px 35px;
  color: #999;
}

.search-box label input[type='text']{
  margin: 4px 8px;
  padding: 6px 10px 4px 28px;
  width: 94vw;
  border-radius: 16px;
  border: 1px solid gray;
  outline: none;
}

.search-box i{
  position: absolute;
  left: 18px;
  top: 10px;
}

@keyframes placeholder-before {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-61%);
    opacity: 0;
  }
}

@keyframes placeholder-after {
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(-61%);
    opacity: 1;
  }
}

.animate::before {
  animation: .3s placeholder-before ease-in-out;
}

.animate::after {
  animation: .3s placeholder-after ease-in-out;
}

.animate::before, .animate::after {
  animation-fill-mode: forwards;
  animation-delay: 3s;
}
</style>