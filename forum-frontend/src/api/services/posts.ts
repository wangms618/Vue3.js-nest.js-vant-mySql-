import instance from "../axios";
// 创建文章
export async function createPosts(payload) {
    // 需要用户id、titie、content、imgList、postsTypeId
    const data = await instance.post("posts", payload);
    return data.data;
}
