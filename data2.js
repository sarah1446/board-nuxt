const data = [];

const post1 = {
  id: 1,
  title: '첫번째 게시글입니당.',
  content: '졸려죽것네 진짜ㅉ',
  author: 'sarah',
  createdAt: '2022-12-02',
  updatedAt: '2022-12-03',
  comments: [
    {
      id: 1,
      author: 'sarah',
      content: '1. 퇴근좀 시켜주면 안되겠니', // 삭제된 댓글입니다.
      createdAt: '2022-12-02',
      replies: [
        {
          id: 1,
          author: 'sarah',
          content: '1-1. 아아악 내눈ㄴ',
          createdAt: '2022-12-02',
          replies: [
            {
              id: 1,
              author: 'kikiki',
              content: '1-1-1. 뭔가 잘못됐어',
              createdAt: '2022-12-14',
              replies: []
            },
            {
              id: 2,
              author: 'sarah',
              content: '1-1-2. 아,,,,,,ㅜㅜ',
              createdAt: '2022-12-14',
              replies: []
            }
          ]
        },
        {
          id: 2,
          author: '벌써일년',
          content: '1-2. 세월이여',
          createdAt: '2022-12-04',
          replies: []
        }
      ]
    },
    // 댓글 2
    {
      id: 2,
      author: '도리',
      content: '2. 오늘 축구한다 !!!!',
      createdAt: '2022-12-02',
      replies: [],
    }
  ]
}

const post2 = {
  id: 2,
  title: 'second posting !!!',
  content: 'what do i call you',
  author: '태연',
  createdAt: '2022-12-04',
  updatedAt: null,
  comments: [
    // 댓글 1
    {
      id: 1,
      author: '댓글러',
      content: '킼 심심', // 삭제된 댓글입니다.
      createdAt: '2022-12-04',
      replies: [],
    }
  ]
}

data.push(post1);
data.push(post2);

export default data;

