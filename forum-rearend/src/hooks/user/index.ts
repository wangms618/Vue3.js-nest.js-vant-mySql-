import { UsersEntity } from "@/user/user.entity";
import { UserInfo } from "@/interface";
export function userInfoTransform(userDataInfo: UsersEntity): UserInfo {
    const {
        id,
        user_account,
        user_birthday,
        user_colleges,
        user_grade,
        user_imgUrl,
        user_name,
        user_nickname,
        user_phone,
        user_sex,
        user_show,
    } = userDataInfo;
    const userInfo: UserInfo = {
        id: id,
        account: user_account,
        username: user_name,
        nickname: user_nickname,
        phone: user_phone,
        sex: user_sex,
        imgUrl: user_imgUrl,
        grade: user_grade,
        birthday: user_birthday,
        colleges: user_colleges,
        show: user_show,
    };

    return userInfo;
}
