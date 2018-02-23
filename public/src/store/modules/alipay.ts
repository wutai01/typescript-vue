import { Commit } from 'vuex'
import http from '../../utils/http'
import * as types from '../mutation-types'
let state = {
    alipayLists: []
}
interface AlipayLists{
    account: string,
    count: number,
    id: any

}
const mutations = {
    [ types.SET_ALIPAY_LISTS ]( state: any, data: AlipayLists[]){
        state.alipayLists = data
    }
}

const actions = {
  alipayLoadData (context: {commit: Commit}, params: any) {
    http({
        url: '/alipay/list',
        params: params
    }).then(data => {
        context.commit(types.SET_ALIPAY_LISTS, data)
    })
  }
}

const getters = {
  alipayLists: (state: any) => state.alipayLists
}

export default {
  state,
  mutations,
  actions,
  getters
}
