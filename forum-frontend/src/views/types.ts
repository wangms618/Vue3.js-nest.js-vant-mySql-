// 这里放类型定义
export enum TitleType {
    COMMUNITY = "community",
    EDITPOSTS = "EDITPOSTS",
    REPLY = "reply",
    HOMEPAGE = "homepage",
}

export enum TitleText {
    COMMUNITY = "冻梨社区",
    EDITPOSTS = "发布帖子",
    REPLY = "我的回复",
    HOMEPAGE = "我的主页",
}

export const TitleTextByType = {
    [TitleType.COMMUNITY]: TitleText.COMMUNITY,
    [TitleType.EDITPOSTS]: TitleText.EDITPOSTS,
    [TitleType.REPLY]: TitleText.REPLY,
    [TitleType.HOMEPAGE]: TitleText.HOMEPAGE,
};

// export const Grade = [
//     "其他",
//     "大一",
//     "大二",
//     "大三",
//     "大四",
//     "研一",
//     "研二",
//     "研三",
// ];

