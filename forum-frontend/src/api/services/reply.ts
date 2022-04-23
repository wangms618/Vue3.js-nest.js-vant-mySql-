import instance from "../axios";
// 一级评论
export async function createRootReply(payload) {
    const data = await instance.post("reply", payload);
    console.log(data);
}

// 获取一个用户的所有评论
export async function getReplysById(user_id) {
    const data = await instance.get("reply/userId", {
        params: {
            user_id,
        },
    });
    return data.data;
}

// 删除对应评论
export async function deleteReply(id) {
    const data = await instance.delete(`reply/${id}`);
    return data.data;
}
