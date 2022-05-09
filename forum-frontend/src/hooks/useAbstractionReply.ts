
// 过滤初始回复数组
export function filterReply(replyList: Array<any>) {
    // const list = cloneDeep(replyList);
    const newReplyList = [];
    let count = 0;
    const visit = new Map();
    // 使用对象将id和index映射起来
    replyList.forEach((item, index) => {
        if (item.rootCommentId === null) {
            newReplyList[count] = item;
            visit.set(item.id, index);
            newReplyList[count++].comments = [];
        }
    });
    replyList.forEach(item => {
        // 如果相等且不为空
        if (item.rootCommentId !== null) {
            const index = visit.get(item.rootCommentId);
            newReplyList[index].comments.push(item);
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
