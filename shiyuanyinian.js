/******************************

淘知测试


*******************************

[rewrite_local]

^http.*shiyuanyinian.*/coupon/check.* url script-response-body https://raw.githubusercontent.com/cnsvip/Quantumult-X/dev/shiyuanyinian.js

[mitm] 

hostname = *.shiyuanyinian.*

*************************************/

var ojbk = JSON.parse($response.body);
const vipa = '/api/v1/user/coupon/check';

if ($request.url.indexOf(vipa) != -1){
  ojbk.data = {
    "id" : 2,
    "limit_period" : null,
    "created_at" : 1696486320,
    "type" : 1,
    "value" : 300,
    "code" : "ZKeELbIs",
    "show" : 1,
    "limit_use" : null,
    "updated_at" : 1702610516,
    "limit_plan_ids" : [
      "5"
    ],
    "started_at" : 1696486283,
    "limit_use_with_user" : 1,
    "ended_at" : 1984543883,
    "name" : "白嫖9.9加群折扣券"
  };
}

$done({body : JSON.stringify(ojbk)});