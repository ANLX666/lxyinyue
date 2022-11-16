import service from '..';
//获取歌单详情页的数据
export function getMusicItemList(data) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${data}`
  })
}
// /playlist/track/all?id=24381616&limit=10&offset=1
// 获取歌单的所有歌曲
export function getItemList(data) {
  return service({
    method: 'GET',
    url: `/playlist/track/all?id=${data}&limit=20&offset=0`
  })
}