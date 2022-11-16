<template>
  <div class="FooterMusic">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p>{{ playList[playListIndex].al.name}}</p>
        <span>横滑可以切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofanganniu" ></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true"   @click="play"  v-else>
        <use xlink:href="#icon-weibiaoti--" ></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <!-- controls -->
    <audio ref ="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
</template>
<style  lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: .2rem;
  justify-content: space-between;
  
  .footerLeft{ 
    width: 70%;
    height: 100%;
    display: flex; // 弹性布局 左右两边分开
    justify-content: space-around;
    align-items: center;
    img{ 
      width: 1rem; 
      height: 1rem;
      border-radius: 50%;
    }
    .footerRight{ 
      width: 40%; 
      height: 100%; 
      display: flex; 
      justify-content: space-between;
      align-items: center; 
      .icon { 
        width: .6rem; 
        height: .6rem;
      }
    }
  }
}
</style>
<script>
import {mapMutations, mapState}  from 'vuex'
export default { 
  computed: { 
    ...mapState(['playList' , 'playListIndex' , 'isbtnShow'])
  },  
  mounted() { 
    // console.log(this.$refs);
  } ,
  methods : { 
    play: function () { 
      // 音乐播放 
      if (this.$refs.audio.paused) { 
        this.$refs.audio.play() 
        this.updateIsbtnShow(false)
      }
      else { 
        this.$refs.audio.pause() 
        this.updateIsbtnShow(true)
      }
    }, 
    ...mapMutations(['updateIsbtnShow'] )
  }
}

</script>
