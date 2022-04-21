import instance from "../axios";
// 一级评论
export async function createRootReply(payload) {
    const data = await instance.post("reply", payload);
    console.log(data);
}

// 二级评论
// export async function createSecondReply() {}

// // 二级评论的评论
// export async function createByCommentReply() {}
