/*
 * @Author: kuiwang3
 * @CreateDate: Do not edit
 * @LastEditors: kuiwang3
 * @LastEditTime: 2018-10-22 19:17:15
 * @Description: vuex全局状态数据
 */
import {
  playMode
} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放暂停
  playlist: [], // 播放列表
  fullScreen: false, // 是否全屏
  sequenceList: [], // 当前歌曲列表
  mode: playMode.sequence, // 当前歌曲播放模式
  currentIndex: -1 // 当前播放歌曲的index
}

export default state
