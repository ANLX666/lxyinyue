import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      //播放列表
      al: {
        id: 141320455,
        name: "脱胎换骨",
        pic: 109951167114856500,
        picUrl: "https://p2.music.126.net/u3a_9vYOQC4xz7-kKOCJlA==/109951167114856500.jpg",
        pic_str: "109951167114856500",
      }, 
      id: 1925396986 
    }], 
    playListIndex : 0 , //默认下标 为 0 
    isbtnShow: true  // 暂停按钮显示  
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow : function (state ,value ) {  
      state.isbtnShow = value 
    },
    updatePlaList: function (state,value ) { 
      state.playList = value 
    }
  },
  actions: {
  },
  modules: {
  }
})
