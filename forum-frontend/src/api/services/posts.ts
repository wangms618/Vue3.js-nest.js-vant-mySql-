import instance from "../axios";
import { Posts, PostsList } from "@/types";
// 创建文章
export async function createPosts(payload) {
    // 需要用户id、titie、content、imgList、postsTypeId
    const data = await instance.post("posts", payload);
    return data.data;
}

// 获取文章列表
export async function getPostsList(): Promise<PostsList> {
    const data = await instance.get("posts");
    if (data) {
        const len = data.data.list.length;
        for (let i = 0; i < len; i++) {
            data.data.list[i].imgList = JSON.parse(data.data.list[i].imgList);
        }
    }
    return data.data;
}

// 获取对应id文章
export async function getPostById(id: number): Promise<Posts> {
    const data = await instance.get(`posts/${id}`);
    data.data.imgList = JSON.parse(data.data.imgList);
    return data.data;
}
