import { Commit } from 'vuex'
import http from '../../utils/http'
import * as types from '../mutation-types'
let state = {
    errorOrderList: []
}
interface ErrorOrderList{
    id: string,
    app_name: string,
    financial_flow: string,
    business_flow: string,
    merchant_order: string,
    commodity_name: string,
    error_content: string
}
const mutations = {
    [ types.SET_ERROR_ORDER_LIST ]( state: any, data: ErrorOrderList[] ){
        state.errorOrderList = data
    }
}
const actions = {
    errorOrderLoad (context: {commit: Commit}, params: any) {
        http({
            url: '/order/error',
            params: params
        }).then(data => {
            context.commit(types.SET_ERROR_ORDER_LIST, data)
        })
    }
}

const getters = {
    errorOrderList: (state: any) => state.errorOrderList,
}

export default {
  state,
  mutations,
  actions,
  getters
}
