import { Commit } from 'vuex'
import http from '../../utils/http'
import * as types from '../mutation-types'
let state = {
  info: {
    data: 'store data from user'
  },
  auth: {},
  accountList: []
}

const mutations = {
  [ types.SET_ACCOUNT_LIST ] (state: any, accountList: any) {
    accountList.forEach((element: any) => {
      element['edit'] = false
    })
    console.log(accountList, 8712)
    state.accountList = accountList
  },

  [ types.SET_ACCOUNT_LIST_EDIT_OPEN ] (state: any, editIndex: number) {
    state.accountList.forEach((element: any, index: number) => {
      if (editIndex === index) {
        element['edit'] = true
      }
    })
  },
  [ types.SET_ACCOUNT_LIST_EDIT_CLOSE ] (state: any, editIndex: number) {
    state.accountList.forEach((element: any, index: number) => {
      if (editIndex === index) {
        element['edit'] = false
      }
    })
  },
  [ types.SET_ACCOUNT_LIST_ADD_NEW ] (state: any, numbers: number) {
    for (let i = 0; i < numbers; i++) {
      state.accountList.push({
        edit : true,
        account: '',
        status: 3,
        msg: '',
        password: ''
      })
    }
  }
}

const actions = {
  loadData (context: {commit: Commit}, params: any) {
    http({
        url: '/account/list',
        params: params
    }).then((data) => {
      context.commit(types.SET_ACCOUNT_LIST,data)
    })
  }
}

const getters = {
  info: (state: any) => state.info,
  accountList:( state: any) => state.accountList
}

export default {
  state,
  mutations,
  actions,
  getters
}
