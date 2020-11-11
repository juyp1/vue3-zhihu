import { createStore } from 'vuex'
import { testData, testPosts } from '../testData'
import { columnsList } from '../api/column'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

interface DetailProps {
  id: number;
  title: string;
  content: string;
  img?: string;
  createdAt: string;
  columnId: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  DetailData: DetailProps[];
  user: UserProps;
  loading:boolean;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    DetailData: testPosts,
    user: { isLogin: false },
    loading: false
  },
  mutations: {
    login(state) {
      state.user.isLogin = true
    },
    columnsList(state, payload) {
      console.log('aaa', payload.data)
      state.columns = payload.data
    },
    setLoading(state,status) {
      state.loading = status
    }
  },
  actions: {
    async feachColumns(state, params) {
      const { data } = await columnsList(params)
      state.commit('columnsList', data)
      // return new Promise((resolve, reject) => {
      //   columnsList(params).then(res => {
      //     resolve(res.data)
      //   state.commit('columnsList',res.data)
      //   }).catch(err => {
      //     reject(err)
      //   })
      // })
    }

  },
  modules: {
  },
  getters: {
    getColumnbyId: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    }
  }
})

export default store
