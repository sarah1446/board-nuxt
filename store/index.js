export const state = () => ({
  data: [],
  postDetail: {}
})

export const actions = {
  setAddPost({commit}, post) {
    commit('setAddPost', post)
  },
  getPostDetail({ commit, state }, id) {
    const post = state.data && state.data.filter(post => post.post.id === Number(id));
   
    commit('setPostDetail', ...post)
  },
  deletePost({commit, state}, id) {
    const posts = state.data.filter(post => post.post.id !== Number(id))

    commit('setData', posts);
  },
  updatePost({commit, state}, obj) {
    const idx = state.data.findIndex(post => post.post.id === Number(obj[0]));
    const newState = [...state.data];

    newState.splice(idx, 1, {...newState[idx], post: obj[1]});

    commit('setData', newState);
  },
  setData({commit}, obj) {
    commit('setData', obj)
  }
}

export const mutations = {
  setAddPost(state, obj) {
    state.data.push(obj);

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setPostDetail(state, post) {
    state.postDetail = post;

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setData(state, obj) {
    state.data = obj;

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
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