/******************************

彩云天气-净化/SVIP


*******************************

[rewrite_local]

^http.*biz.cyapi.cn.* url script-response-body https://raw.githubusercontent.com/cnsvip/Quantumult-X/dev/caiyun.js

[mitm] 

hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/v1/vip_info';
const vipb = '/v2/user?app_name=weather';

if ($request.url.indexOf(vipa) != -1){
  ojbk.svip.expires_time = "1761560323";
  ojbk.svip.is_auto_renewal = true;
}

if ($request.url.indexOf(vipb) != -1){
  ojbk.result.svip_given = 1095;
  ojbk.result.wt.svip_given = 1095;
  ojbk.result.wt.vip.svip_expired_at = 1761560323;
  ojbk.result.svip_expired_at = 1761560323;
  
}



$done({body : JSON.stringify(ojbk)});