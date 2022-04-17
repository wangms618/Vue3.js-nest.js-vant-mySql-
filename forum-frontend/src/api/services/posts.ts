import instance from "../axios";
// 创建文章
export async function createPosts(payload) {
    // 需要用户id、titie、content、imgList、postsTypeId
    const data = await instance.post("posts", payload);
    return data.data;
}

export async function getPosts() {
    const data = await instance.get("posts");
    if (data) {
        const len = data.data.list.length;
        for (let i = 0; i < len; i++) {
            data.data.list[i].imgList = JSON.parse(data.data.list[i].imgList);
        }
    }
    return data.data;
}
