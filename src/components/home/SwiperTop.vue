<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<style  lang="less" scoped>
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;

    .van-swipe-item {
      img {
        width: 100%;
        height: 3rem;
      }
    }
  }
}
</style>
<script >
import axios from 'axios'
import {getBanner} from '@/request/api/home'
import { reactive, onMounted } from 'vue';
export default {
  setup() {
    const state = reactive({
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
      ]
    }
    );
    onMounted(async () => {
      // axios.get('banner?type=2').then((res) => {
      //   // console.log(res);
      //   state.images = res.data.banners
      //   // console.log( state.images);
      // })
      let res = await getBanner() ;
      state.images = res.data.banners
    })
    return { state };
  },
};
</script>
