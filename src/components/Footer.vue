<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/main">
        <i class="iconfont icon-music"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/audio">
        <i class="iconfont icon-play"></i>
        <p>视频</p>
      </router-link>
      <router-link tag="li" to="/putong">
        <i class="iconfont icon-yun"></i>
        <p>扑通</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // name: 'Footer'
}
</script>

<style scoped>
#footer{
  height: 60px;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul{
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(80, 82, 83);
}
#footer ul li{
  flex: 1;
  text-align: center;
}

#footer ul li.router-link-active{
  color: rgb(55, 230, 55);
}

#footer ul li i{
  font-size: 26px;
}

#footer ul li p{
  font-size: 10px;
  padding: 4px 0;
}
</style>