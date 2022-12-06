export const state = () => ({
  data: [],
})

export const mutations = {
  setAddPost(state, obj) {
    state.data.push(obj)
  }
}

export const actions = {

}

export const getters = {
  getData(state) {
    return state.data;
  }
}