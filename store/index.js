export const state = () => ({
  data: [],
  postDetail: {}
})

export const actions = {
  getPostDetail({ commit, state }, id) {
    const post = state.data && state.data.filter(post => post.id === Number(id));
    
    commit('setPostDetail', ...post)
  },
  deletePost({commit, state}, id) {
    const posts = state.data.filter(post => post.id !== Number(id))

    commit('setData', posts);
  },
  updatePost({commit, state}, obj) {
    const idx = state.data.findIndex(post => post.id === Number(obj[0]));
    state.data.splice(idx, 1, obj[1]);

    commit('setData', state.data);
  }
}

export const mutations = {
  setAddPost(state, obj) {
    state.data.push(obj)
  },
  setPostDetail(state, post){
    state.postDetail = post;
  },
  setData(state, obj) {
    state.data = obj;
  }
}

export const getters = {
  getData(state) {
    return state.data;
  },
  getPostDetail(state) {
    return state.postDetail;
  }
}