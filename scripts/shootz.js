/******************************

测试


*******************************

[rewrite_local]

^https?:\/\/.*\.(shootz\.*|shootz\.tech) url script-response-body https://github.com/cnsvip/Quantumult-X/blob/main/scripts/shootz.js

[mitm] 

hostname = *.shootz.*

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/user-api/mini/user/info';



if ($request.url.indexOf(vipa) != -1){
    ojbk.topVip = true;
  ojbk.arenaVip = true;
}


$done({body : JSON.stringify(ojbk)});
