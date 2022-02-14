// 这里放类型定义
export enum TitleType {
    COMMUNITY = "community",
    POSTS = "POSTS",
    REPLY = "reply",
    HOMEPAGE = "homepage",
}

export enum TitleText {
    COMMUNITY = "冻梨社区",
    POSTS = "发布帖子",
    REPLY = "我的回复",
    HOMEPAGE = "我的主页",
}

export const TitleTextByType = {
    [TitleType.COMMUNITY]: TitleText.COMMUNITY,
    [TitleType.POSTS]: TitleText.POSTS,
    [TitleType.REPLY]: TitleText.REPLY,
    [TitleType.HOMEPAGE]: TitleText.HOMEPAGE,
}
