export const state = () => ({
  data: [],
})

export const mutations = {
  setAddPost(state, obj) {
    state.data.push(obj)
  }
}