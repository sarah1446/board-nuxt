
export const state = () => ({
  data: [],
  postDetail: {},
  originalCommentInfo: {}
})

export const actions = {
  addPost({commit}, post) {
    const time = post.createdAt;
    const month = time.getMonth();
    const date = time.getDate();

    const postInfo = {
      ...post,
      createdAt: `${month + 1}월 ${date}일`,
    }

    commit('addPost', postInfo)
  },
  getPostDetail({ commit, state }, id) {
    const post = state.data && state.data.filter(post => post.id === Number(id));

    commit('setPostDetail', ...post)
  },
  deletePost({commit, state}, id) {
    const posts = state.data.filter(post => post.id !== Number(id))

    commit('setData', posts);
  },
  updatePost({commit, state}, updatedPost) {
    const idx = state.data.findIndex(post => post.id === Number(updatedPost.idx));
    const newState = [...state.data];

    newState.splice(idx, 1, {...newState[idx], ...updatedPost.content});

    commit('setData', newState);
  },
  setData({commit}, posts) {
    commit('setData', posts)
  },


  addComment({commit, state}, postInfo) {
    const postId = postInfo.postId; 
    const newCommentInfo = postInfo.comment;
    const targetPost = state.data.filter(item => item.id === Number(postId))[0];
    const targetCommentId = postInfo.targetCommentId ?? null;
    const parentCommentId = postInfo.parentCommentId
    // 대댓일 경우 commentId 받아와서 분기처리
    if(postId && targetCommentId) {
      // 대댓
      commit('addComment', {
        targetPost, 
        newCommentInfo, 
        postId, 
        targetCommentId,
        parentCommentId
      })
    }else if(postId && !targetCommentId){
      // 그냥 댓글
      commit('addComment', {
        targetPost,
        postId, 
        newCommentInfo, 
        targetCommentId
      }) 
    }
  },
  setOriginalCommentInfo({commit}, commentInfo) {
    commit('setOriginalCommentInfo', commentInfo)
  },
  resetOriginalCommentInfo({commit}) {
    commit('resetOriginalCommentInfo')
  }
}

export const mutations = {
  addPost(state, post) {
    state.data.push(post);

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setPostDetail(state, post) {
    state.postDetail = post;
  },
  setData(state, posts) {
    state.data = posts;

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  },
  setOriginalCommentInfo(state, info) {
    state.originalCommentInfo = info
  },
  resetOriginalCommentInfo(state) {
    state.originalCommentInfo = {}
  }, 
  addComment(state, info) {
    const targetPost = info.targetPost;
    const targetCommentId = info.targetCommentId;
    const newCommentInfo = info.newCommentInfo;
    // const parentCommentId = info.parentCommentId;

    if(targetCommentId) {
      // 대댓
      function generateReply(comments) {
        comments.map(comment => {
          if(comment.id === targetCommentId) {
            comment.replies.push(newCommentInfo)
          }else if(comment.id !== targetCommentId && comment.replies.length > 0){
            generateReply(comment.replies)
          }
          return comment
        })
      }

      generateReply(targetPost.comments)
    }else {
      // 댓글 
      targetPost.comments.push(newCommentInfo);
    }

    const stateJson = JSON.stringify(state.data);
    localStorage.setItem('postData', stateJson);
  }
}

export const getters = {
  getData(state) {
    return state.data;
  },
  getReverseData(state) {
    const reversedData = [...state.data].reverse()
    return reversedData;
  },
  getPostDetail(state) {
    return state.postDetail;
  },
  getOriginalCommentInfo(state) {
    return state.originalCommentInfo;
  }
}
