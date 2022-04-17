import { getToken } from "@/api/services";
import { Toast } from "vant";
import { random } from "lodash";
import * as qiniu from "qiniu-js";
import { createUrl } from "./useCreateURL";
/**
 * 图片上传
 * @param file 图片文件
 * @returns string  返回图片线上url
 */
export async function uploadFile(file) {
    const token = await getToken();
    if (!token) {
        Toast.fail("获取token失败");
    }
    const fname = random(111111111, 999999999) + file.name;
    const putExtra = {
        fname: file.name,
        params: {},
        mimeType: null,
    };
    const observable = qiniu.upload(file, fname, token, putExtra);
    const observer = {
        error(err) {
            console.log(err);
        },
    };
    observable.subscribe(observer); // 上传开始
    return createUrl(fname);
}

export async function uploadFileList(fileList) {
    const len = fileList.length;
    const urlList = [];
    for (let i = 0; i < len; i++) {
        const file = fileList[i];
        const fname = await uploadFile(file.file);
        urlList[i] = fname;
    }
    return JSON.stringify(urlList);
}
