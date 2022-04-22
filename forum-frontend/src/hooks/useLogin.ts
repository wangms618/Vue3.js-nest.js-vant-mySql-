import { login } from "@/api/services";
import bcryptjs from "bcryptjs";
export async function checkPassword(password, userInfo) {
    const data = await login(userInfo.account);
    const { salt } = data;
    return bcryptjs.compareSync(password, salt);
}

