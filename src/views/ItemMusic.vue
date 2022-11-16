<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList = "state.itemList"  :subscribedCount="state.playlist.subscribedCount"/>
</template>
<style  lang="less" scoped>

</style>
<script>
import ItemMusicTop from '@/components/item/itemMusicTop.vue'
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getMusicItemList ,getItemList } from '@/request/api/item';
import ItemMusicList from '@/components/item/itemMusicTop.vue'

export default {

  setup() {
    const state = reactive({
      //歌单的详情数据
      playlist: {}, 
      itemList: []  // 歌单的歌曲
    })
    onMounted(async () => {
      let id = useRoute().query.id
      // console.log(id);
      //获取歌单详情 
      let res = await getMusicItemList(id);
      // console.log(res);
      state.playlist = res.data.playlist
      // console.log(res);
      //获取歌单的歌曲

      // 防止页面刷新 数据丢失 将数据 保存到sessionStorage
      let result = await getItemList (id) ; 
      // console.log(result);
      state.itemList = result.data.songs ;
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })
    return { state }
  }
  ,
  components: {
    ItemMusicTop,
    ItemMusicList
  },
}

</script>
