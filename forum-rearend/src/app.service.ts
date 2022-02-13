import { Injectable } from '@nestjs/common';
import * as qiniu from 'qiniu';
@Injectable()
export class AppService {
  async getToken() {
    const accessKey = 'Pnywrqhd25kEqBwisnO2ucpdoqKuTSR5WwIoLTML';
    const secretKey = 'SQkMFeE1RPte9yPLST5P_2vXF6OWyjk4QVjYtd2-';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    // 空间名字bucket
    const bucket = 'wms-forum-img';
    var options = {
      scope: bucket,
      // 有效期，目前设置为1天
      expires: 86400,
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }
}
