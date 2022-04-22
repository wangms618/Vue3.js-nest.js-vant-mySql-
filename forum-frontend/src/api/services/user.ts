// 跟用户有关的操作

import instance from "../axios";

// 获取用户信息
export async function getUserInfo(id: number) {
    const data = await instance.get(`user/${id}`);
    return data.data;
}

// 更新用户信息
export async function modifyUserInfo(id, user) {
    const data = await instance.put(`user/${id}`, user);
    return data.data;
}
