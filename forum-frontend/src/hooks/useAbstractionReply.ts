// 过滤初始回复数组
export function filterReply(replyList: Array<any>) {
    // const list = cloneDeep(replyList);
    const newReplyList = [];
    let count = 0;
    replyList.forEach(item => {
        // 如果为空，是一级评论，放入评论列表，添加后续评论comments字段
        if (item.rootCommentId === null) {
            newReplyList[count] = item;
            newReplyList[count++].comments = [];
        }
    });
    replyList.forEach(item => {
        // 不为空
        if (item.rootCommentId !== null) {
            // 遍历newReplyList，将对应的评论放入comments中
            newReplyList.forEach((val, index) => {
                if (val.id === item.rootCommentId) {
                    newReplyList[index].comments.push(item);
                }
            });
        }
    });

    return newReplyList;
}

// 二级评论及以下的评论抽象
export function filterSecondReply(comments) {
    const len = comments.length;
    for (let i = 0; i < len; i++) {
        if (comments[i].rootCommentId === comments[i].toCommentId) {
            comments[i].isSecond = true;
        } else {
            comments[i].isSecond = false;
            const { toCommentId } = comments[i];
            const comment = comments.filter(item => {
                if (item.id === toCommentId) {
                    return item;
                }
            });
            comments[i].replyByNickname = comment[0].user_nickname;
        }
    }
}
