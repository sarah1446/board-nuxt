const comments = [];

const post1 = {
  post: {
    id: 1,
    title: '첫번째 게시글입니당.',
    content: '졸려죽것네 진짜ㅉ',
    author: 'sarah',
    createdAt: '2022-12-02',
    updatedAt: '2022-12-03',
  },
  comments: [
    // 댓글 1
    {
      reply: {
        id: 1,
        author: 'sarah',
        content: '퇴근좀 시켜주면 안되겠니', // 삭제된 댓글입니다.
        createdAt: '2022-12-02',
        replies: [
          {
            id: 1,
            author: 'sarah',
            content: '퇴근좀 시켜주면 안되겠니',
            createdAt: '2022-12-02',
          },
          {
            id: 2,
            author: '벌써일년',
            content: '세월이여',
            createdAt: '2022-12-04',
          }
        ]
      },
    },
    // 댓글 2
    {
      reply: {
        id: 2,
        author: '도리',
        content: '오늘 축구한다 !!!!',
        createdAt: '2022-12-02',
        replies: [],
      }
    }
  ]
}

const post2 = {
  post: {
    id: 2,
    title: 'second posting !!!',
    content: 'what do i call you',
    author: '태연',
    createdAt: '2022-12-04',
    updatedAt: null,
  },
  comments: [
    // 댓글 1
    {
      reply: {
        id: 1,
        author: '댓글러',
        content: '킼 심심', // 삭제된 댓글입니다.
        createdAt: '2022-12-04',
        replies: [],
      },
    }
  ]
}

comments.push(post1);
comments.push(post2);

export default comments;

