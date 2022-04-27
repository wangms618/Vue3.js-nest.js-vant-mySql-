import instance from "../axios";
import { Posts, PostsList } from "@/types";
// 创建文章
export async function createPosts(payload) {
    // 需要用户id、titie、content、imgList、postsTypeId
    const data = await instance.post("posts", payload);
    return data.data;
}

// 获取文章列表
export async function getPostsList(
    pageNum = 1,
    pageSize = 10,
    type = 0,
    topic = 0
): Promise<PostsList> {
    const data = await instance.get("posts", {
        params: {
            pageNum,
            pageSize,
            type,
            topic,
        },
    });
    if (data.data) {
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

// 获取单个用户所有文章
export async function getPostByUser(id) {
    const data = await instance.get("/posts/userId", {
        params: {
            id,
        },
    });
    if (data.data) {
        const len = data.data.length;
        for (let i = 0; i < len; i++) {
            data.data[i].imgList = JSON.parse(data.data[i].imgList);
        }
    }
    return data.data;
}

// 删除文章
export async function deletePosts(id) {
    const data = await instance.delete(`posts/${id}`);
    return data.data;
}

// 关键词搜索文章
export async function searchPosts(key) {
    const data = await instance.get("posts/searchPosts", {
        params: {
            key,
        },
    });
    if (data.data) {
        const len = data.data.length;
        for (let i = 0; i < len; i++) {
            data.data[i].imgList = JSON.parse(data.data[i].imgList);
        }
    }
    return data.data;
}
