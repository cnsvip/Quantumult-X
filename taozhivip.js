/******************************

淘知测试


*******************************

[rewrite_local]

^https?:\/\/.*\.(taozhi\.com|taozhi\.cn) url script-response-body https://raw.githubusercontent.com/cnsvip/Quantumult-X/dev/taozhivip.js

[mitm] 

hostname = *.taozhi.cn

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/order/client/order_form/isVip';


if ($request.url.indexOf(vipa) != -1){
  ojbk.data = true;
}

$done({body : JSON.stringify(ojbk)});
