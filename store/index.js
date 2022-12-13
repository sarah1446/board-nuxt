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
  updatePost({commit, state}, updatedPost) {
    const idx = state.data.findIndex(post => post.post.id === Number(updatedPost.idx));
    const newState = [...state.data];

    newState.splice(idx, 1, {...newState[idx], post: updatedPost.content});

    commit('setData', newState);
  },
  setData({commit}, posts) {
    commit('setData', posts)
  }
}

export const mutations = {
  setAddPost(state, post) {
    state.data.push(post);

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setPostDetail(state, post) {
    state.postDetail = post;

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setData(state, posts) {
    state.data = posts;

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