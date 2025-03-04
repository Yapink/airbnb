import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})
export const changetotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 1.根据页码获取最新的数据33
    const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)
    
    // 2.获取到最新的数据，保存redux到store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changetotalCountAction(totalCount))
  }
}