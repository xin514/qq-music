<template>
  <div id="header">
    <div class="nav-box">
      <ul class="nav-list">
        <router-link
          tag="li"
          to="/main"
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
      <input type="text" name="search" id="search" placeholder="请输入歌曲">
      <i class="iconfont icon-search"></i>
    </div>
  </div>
</template>

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

.search-box{
  position: relative;
  margin: 6px 0;
}

.search-box input{
  margin: 4px 8px;
  padding: 6px 10px 4px 28px;
  width: 94vw;
  border-radius: 16px;
  border: 1px solid gray;

}

.search-box i{
  position: absolute;
  left: 18px;
  top: 10px;
}
</style>