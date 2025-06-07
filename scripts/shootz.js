var ojbk = JSON.parse($response.body);
const vipa = '/user-api/mini/user/info';


if ($request.url.indexOf(vipa) != -1){
  ojbk.topVip = true;
  ojbk.arenaVip = true;
}

$done({body : JSON.stringify(ojbk)});
