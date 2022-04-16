import * as services from "@/api/services";
// 是否重复注册
export async function checkNickname(nickname) {
    return await services.checkNickname(nickname)
}
export async function checkAccount(account) {
    return await services.checkAccount(account);
}
export async function checkPhone(phone) {
    return await services.checkPhone(phone);
}
