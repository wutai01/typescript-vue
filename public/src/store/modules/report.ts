import { Commit } from 'vuex'
import http from '../../utils/http'
import * as types from '../mutation-types'
let state = {
    alipayReport: [],
    alipayReportAll: []
}
interface AlipayLists{
    account: string,
    count: number,
    id: any

}
const mutations = {
    [ types.SET_ALIPAY_REPORT ]( state: any, data: AlipayLists[] ){
        state.alipayReport = data
    },

    [ types.SET_ALIPAY_REPORT_ALL ](  state: any, data: any[] ){
        state.alipayReportAll = data
    }
}

const actions = {
    alipayReportLoadData (context: {commit: Commit}, params: any) {
        http({
            url: '/money/month/count',
            params: params
        }).then(data => {
            context.commit(types.SET_ALIPAY_REPORT, data)
        })
    },
    alipayReportallLoad (context: {commit: Commit}, params: any){
        http({
            url: '/money/all/count',
            params: params
        }).then(data => {
            context.commit(types.SET_ALIPAY_REPORT_ALL, data)
        })
    }
}

const getters = {
    alipayReport: (state: any) => state.alipayReport,
    alipayReportAll: (state: any) => state.alipayReportAll
}

export default {
  state,
  mutations,
  actions,
  getters
}
