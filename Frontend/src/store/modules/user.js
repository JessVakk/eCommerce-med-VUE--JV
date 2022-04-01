import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    userToken: null,
    loggedIn: false,
    register: false
  },
  getters: {
    loggedIn: state => state.loggedIn,
    register: state => state.register
  },
    
  mutations: {
    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.loggedIn = false,
        state.userToken = null
      }
    },
  
    SET_USERS: (state, token) => {
      if(token) {
        state.userToken = token
        state.register = true
      } 
   }
  },

  actions: {
    login: async ({commit}, payload) => {
      const res = await axios.post('users/login', payload.user)
      console.log(res)
      if(res.status === 200) {
        localStorage.setItem('token', res.data.token)
        commit('SET_USER', res.data.token)

        if(payload.route) {
          router.push(payload.route)
        } else {
          router.push({ name: 'home' })
        }

      }
    },
    register: async ({commit}, payload) => {
      const res = await axios.post('users/register', payload.user)
      console.log(res)
      if(res.status === 201) {
        commit('SET_USERS', res.data.token)

        if(payload.route) {
          router.push(payload.route)
        } else{
          router.push({ name: 'home'})
        }
      }        
    
    },

    logout: ({commit}) => {
      try {
        localStorage.removeItem('token')
        commit('SET_USER', null)
      } catch {
        console.log('not logged in')
      }
    },
    checkUser: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        commit('SET_USER', token)
      }
    }
  }
}
