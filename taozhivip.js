/******************************

淘知测试


*******************************

[rewrite_local]

^https?:\/\/.*\.(taozhi\.*|taozhi\.cn) url script-response-body https://raw.githubusercontent.com/cnsvip/Quantumult-X/dev/taozhivip.js

[mitm] 

hostname = *.taozhi.*

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/order/client/order_form/isVip';
const buya = 'order/client/order_form/is/buy';
const admin = '/userRole/isAdminManager';



if ($request.url.indexOf(vipa) != -1){
  ojbk.data = true;
}

if ($request.url.indexOf(buya) != -1){
  ojbk.data.success = true;
}

if ($request.url.indexOf(admin) != -1){
  ojbk.data = true;
}

$done({body : JSON.stringify(ojbk)});
