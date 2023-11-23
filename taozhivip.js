var ojbk = JSON.parse($response.body);
const vipa = '/order/client/order_form/isVip';


if ($request.url.indexOf(vipa) != -1){
  ojbk.data = true;
}

$done({body : JSON.stringify(ojbk)});