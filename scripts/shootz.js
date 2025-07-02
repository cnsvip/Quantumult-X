/******************************

测试


*******************************

[rewrite_local]

^https?:\/\/.*\.(shootz\.*|shootz\.tech) url script-response-body https://raw.githubusercontent.com/cnsvip/Quantumult-X/refs/heads/main/scripts/shootz.js

[mitm] 

hostname = *.shootz.*

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/user-api/mini/user/info';
const vipb = '/payment-api/mini/vip/video';



if ($request.url.indexOf(vipa) != -1){
    ojbk.topVip = true;
    ojbk.arenaVip = true;
    ojbk.arenaVipExpireTime = "2030-01-01 00:00:00";
    ojbk.expireTime = "2030-01-01 00:00:00";
    ojbk.vipExpireDate = "2030-01-01 00:00:00";
    ojbk.vipExpiredDays = 0;
}

if ($request.url.indexOf(vipb) != -1){
    ojbk.svip = 1;
    ojbk.vip = 1;
}

$done({body : JSON.stringify(ojbk)});
