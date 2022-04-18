// 文章类型
interface Posts {
    id: number;
    title: string;
    content: string;
    imgList: Array<string>;
    user_id: number;
    user_nickname: string;
    clickNum: number;
    collectionNum: number;
    replyNum: number;
    upNum: number;
    create_time: string;
    update_time: string;
}
// 文章列表
interface PostsList {
    count: number;
    list: Array<Posts>;
}

interface CommonObj {
    [key: string]: any;
}

export { Posts, PostsList };
