// 这里放类型定义
export enum TitleType {
    COMMUNITY = "community",
    SORT = "sort",
    REPLY = "reply",
    HOMEPAGE = "homepage",
}

export enum TitleText {
    COMMUNITY = "冻梨社区",
    SORT = "话题分类",
    REPLY = "我的回复",
    HOMEPAGE = "我的主页",
}

export const TitleTextByType = {
    [TitleType.COMMUNITY]: TitleText.COMMUNITY,
    [TitleType.SORT]: TitleText.SORT,
    [TitleType.REPLY]: TitleText.REPLY,
    [TitleType.HOMEPAGE]: TitleText.HOMEPAGE,
}
