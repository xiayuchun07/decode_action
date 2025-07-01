
(function () {})();
var _0x3e3cd6 = "",
  _0x10e004 = "",
  _0x4b49b1 = false,
  _0x2fdaa4,
  _0x4704c6 = 0;
let _0x16d7ea = new Int16Array();
let _0xee15f5 = "stopped";
const _0x51529e = document.querySelector("#btnButtonCall"),
  _0x589a2c = "url(./images/phone_call.png)",
  _0x158c88 = "url(./images/phone_down.png)",
  _0x46141d = new WebSocketConnectMethod({
    "msgHandle": _0x2f940a,
    "stateHandle": _0xb9513b
  });
let _0x47705c = false;
var _0x1b59a1 = Recorder({
  "type": "pcm",
  "bitRate": 16,
  "sampleRate": 16000,
  "audioTrackSet": {
    "echoCancellation": true,
    "noiseSuppression": true,
    "autoGainControl": true
  },
  "bufferSize": 4096,
  "onProcess": _0x2b2a89
});
const _0x2d77b0 = ["小幸运", "小。幸运"];
function _0x4adfcd(_0x513cec) {
  videoElement.muted = _0x513cec;
  console.log("音频和视频已" + (_0x513cec ? "静音" : "取消静音"));
}
$(document).ready(function () {
  start();
  _0x347bd7();
  _0x4adfcd(false);
  _0x51529e.style.backgroundImage = _0x589a2c;
  _0x51529e.addEventListener("click", function (_0xb36473) {
    _0x51529e.style.backgroundImage.includes("phone_call") ? (_0x4adfcd(false), show_click_message = false, _0x51529e.style.backgroundImage = _0x158c88, _0x5ab044()) : (_0x51529e.style.backgroundImage = _0x589a2c, _0x3f2e38(), _0x4adfcd(true));
  });
});
function _0x5ab044() {
  if (_0xee15f5 !== "stopped") {
    {
      console.log("录音当前状态: " + _0xee15f5 + ", 等待1秒后重试");
      _0x18f5e7(() => _0x5ab044(), 1000);
      return;
    }
  }
  try {
    _0xee15f5 = "starting";
    const _0x586b23 = _0x415e3e();
    if (_0x586b23 === 1) {
      _0x462ef3();
      console.log("录音开始成功");
    } else console.log("录音启动失败"), _0x3f2e38();
  } catch (_0x2f165a) {
    console.error("录音启动出错:", _0x2f165a);
    _0x3f2e38();
  }
}
function _0x2f940a(_0x3485e9) {
  const _0x416264 = JSON.parse(_0x3485e9.data),
    _0x21a65d = String(_0x416264.text);
  console.log("--------------------org_text: " + _0x21a65d);
  const _0x4add5c = _0x2d77b0.some(_0x569dd5 => _0x21a65d.includes(_0x569dd5));
  if (!_0x4add5c) return;
  const _0x2cc702 = _0x416264.mode,
    _0xbe06b = _0x416264.is_final;
  switch (_0x2cc702) {
    case "2pass-offline":
      const _0x565a9f = _0x21a65d.replace(/ +/g, "");
      _0x10e004 += _0x565a9f + "\n";
      _0x3e3cd6 = _0x10e004;
      _0x1989c0(_0x21a65d);
      console.log("==================2pass-offline: " + _0x21a65d);
      break;
    case "offline":
      break;
    default:
      _0x3e3cd6 += _0x21a65d;
  }
}
function _0xb9513b(_0x58bc8c) {
  if (_0x58bc8c === 0) _0x4b49b1 && _0x33f2f0();else {
    if (_0x58bc8c === 1) {} else {
      if (_0x58bc8c === 2) {
        _0x3f2e38();
        alert("连接地址" + document.getElementById("wssip").value + "失败,请检查asr地址和端口。或试试界面上手动授权，再连接。");
      }
    }
  }
}
function _0x33f2f0() {
  _0x16d7ea = new Uint8Array(_0x2fdaa4);
  var _0x5372a2 = 960;
  while (_0x16d7ea.length >= _0x5372a2) {
    sendBuf = _0x16d7ea.slice(0, _0x5372a2);
    _0x4704c6 = _0x4704c6 + _0x16d7ea.length;
    _0x16d7ea = _0x16d7ea.slice(_0x5372a2, _0x16d7ea.length);
    _0x46141d.wsSend(sendBuf);
  }
  _0x3f2e38();
}
function _0x18f5e7(_0x45ce60, _0x270430) {
  setTimeout(() => {
    _0x45ce60();
  }, _0x270430);
}
function _0x462ef3() {
  _0x1b59a1.open(function () {
    try {
      _0x1b59a1.start();
      _0xee15f5 = "recording";
      console.log("录音已开始");
    } catch (_0x553b21) {
      console.error("录音启动失败:", _0x553b21);
      _0x3f2e38();
    }
  }, function (_0x4413c5) {
    console.error("录音设备打开失败:", _0x4413c5);
    _0x3f2e38();
  });
}
function _0x415e3e() {
  if (_0xee15f5 !== "starting") {
    console.log("录音状态错误: " + _0xee15f5);
    return 0;
  }
  _0x32443c();
  const _0x1bc28e = _0x46141d.wsStart();
  if (_0x1bc28e === 1) {
    _0x47705c = true;
    return 1;
  } else return console.log("WebSocket连接失败"), 0;
}
function _0x3f2e38() {
  if (_0xee15f5 === "stopped") {
    console.log("录音已经停止");
    return;
  }
  try {
    _0x47705c = false;
    _0x1b59a1.stop();
    console.log("录音已停止");
  } catch (_0xbbf64a) {
    console.error("停止录音时出错:", _0xbbf64a);
  } finally {
    _0xee15f5 = "stopped";
    _0x47705c = false;
  }
}
function _0x32443c() {
  _0x3e3cd6 = "";
  _0x10e004 = "";
}
function _0x2b2a89(_0x560002, _0x1532d6, _0x597ef0, _0x1caecc, _0xf0d43b, _0x57c5a6) {
  if (!_0x47705c) return;
  const _0x309f32 = _0x560002[_0x560002.length - 1],
    _0x3c570d = [_0x309f32],
    _0x1327b3 = Recorder.SampleData(_0x3c570d, _0x1caecc, 16000).data;
  _0x16d7ea = new Int16Array([..._0x16d7ea, ..._0x1327b3]);
  const _0x5d61e2 = 960;
  while (_0x16d7ea.length >= _0x5d61e2) {
    const _0x174abb = _0x16d7ea.slice(0, _0x5d61e2);
    _0x46141d.wsSend(_0x174abb);
    _0x16d7ea = _0x16d7ea.slice(_0x5d61e2);
  }
}
function _0x46d2b5() {
  var _0x543896 = {
    "阿里巴巴": 20,
    "钱心怡": 40
  };
  return JSON.stringify(_0x543896);
}
function _0x979c93() {
  return "2pass";
}
function _0xc6d0a3() {
  return true;
}
async function _0x466d95() {
  var _0x1845f0 = $("#message").val();
  console.log("Sending: " + _0x1845f0);
  console.log("sessionid: ", document.getElementById("sessionid").value);
  const _0x11d549 = document.getElementById("btnSubmit"),
    _0x1555ee = _0x11d549.textContent;
  _0x11d549.textContent = "分析中...";
  _0x11d549.classList.add("analyzing");
  _0x11d549.disabled = true;
  try {
    if (userStream && userCamera && userCamera.videoWidth && userCamera.videoHeight) {
      console.log("摄像头已启动，进行视觉识别");
      const _0x4d34fd = await _0x1989c0(_0x1845f0);
    } else console.log("摄像头未启动，直接发送消息"), _0x162b19(_0x1845f0);
    $("#message").val("");
  } catch (_0x2c70ae) {
    console.error("处理消息时出错:", _0x2c70ae);
    _0x162b19(_0x1845f0);
    $("#message").val("");
  } finally {
    _0x11d549.textContent = _0x1555ee;
    _0x11d549.classList.remove("analyzing");
    _0x11d549.disabled = false;
  }
}
async function _0x1989c0(_0x43097f) {
  return new Promise(async (_0x4d4e71, _0xfd6227) => {
    if (!userStream || !userCamera.videoWidth || !userCamera.videoHeight) {
      {
        _0x162b19(_0x43097f);
        console.log("摄像头未开启，跳过视觉识别");
        _0x4d4e71(null);
        return;
      }
    }
    let _0x436e15 = _0x43097f;
    _0x2d77b0.forEach(_0x22a97d => {
      _0x436e15 = _0x436e15.replace(new RegExp(_0x22a97d, "g"), "");
    });
    addChatMessage(_0x436e15, "right", false, "text");
    const _0x45cb0 = document.createElement("canvas"),
      _0x547a1b = _0x45cb0.getContext("2d");
    _0x45cb0.width = userCamera.videoWidth;
    _0x45cb0.height = userCamera.videoHeight;
    _0x547a1b.drawImage(userCamera, 0, 0, _0x45cb0.width, _0x45cb0.height);
    const _0x9a9a3f = _0x45cb0.toDataURL("image/jpeg", 0.8);
    fetch("/human", {
      "body": JSON.stringify({
        "interrupt": true,
        "type": "vision",
        "image": _0x9a9a3f,
        "text": _0x436e15,
        "sessionid": document.getElementById("sessionid").value
      }),
      "headers": {
        "Content-Type": "application/json"
      },
      "method": "POST"
    }).then(_0x2c0b71 => _0x2c0b71.json()).then(_0x427fce => {
      {
        if (_0x427fce.code === 0 && _0x427fce.data) {
          if (_0x427fce.type == "text") addChatMessage(_0x427fce.data, "left", false, "szr");else {
            if (_0x427fce.type == "video") showMediaInTechPlayerHandler(_0x427fce);else {
              if (_0x427fce.type == "music") addBackgroundMusic(_0x427fce);else {
                addChatMessage(_0x427fce.data, "left", false, "szr");
              }
            }
          }
          _0x4d4e71(_0x427fce.data);
        } else {
          addChatMessage("消息发送失败，请重试", "left", false, "szr");
          _0x4d4e71(null);
        }
      }
    }).catch(_0x5de066 => {
      console.error("请求发生错误:", _0x5de066);
      addChatMessage("网络错误，或数字人未开启，请检查连接", "left", false, "szr");
      _0x4d4e71(null);
    });
  });
}
function _0x162b19(_0x163d17) {
  let _0x48633e = _0x163d17;
  _0x2d77b0.forEach(_0x418242 => {
    _0x48633e = _0x48633e.replace(new RegExp(_0x418242, "g"), "");
  });
  addChatMessage(_0x48633e, "right", false, "text");
  fetch("/human", {
    "body": JSON.stringify({
      "text": _0x48633e,
      "type": "chat",
      "interrupt": true,
      "sessionid": parseInt(document.getElementById("sessionid").value)
    }),
    "headers": {
      "Content-Type": "application/json"
    },
    "method": "POST",
    "cache": "no-store"
  }).then(_0x340aa5 => _0x340aa5.json()).then(_0x3605eb => {
    console.log("Received chat response:", _0x3605eb);
    if (_0x3605eb.code === 0 && _0x3605eb.data) {
      {
        if (_0x3605eb.type == "text") addChatMessage(_0x3605eb.data, "left", false, "szr");else {
          if (_0x3605eb.type == "video") showMediaInTechPlayerHandler(_0x3605eb);else _0x3605eb.type == "music" ? addBackgroundMusic(_0x3605eb) : addChatMessage(_0x3605eb.data, "left", false, "szr");
        }
      }
    } else addChatMessage("消息发送失败，请重试", "left", false, "szr");
  }).catch(_0x16bf2a => {
    console.error("请求发生错误:", _0x16bf2a);
    addChatMessage("网络错误，或数字人未开启，请检查连接", "left", false, "szr");
  });
}
function _0x3c08da() {
  fetch("/is_speaking", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      "sessionid": parseInt(document.getElementById("sessionid").value)
    }),
    "cache": "no-store"
  }).then(_0xff8520 => _0xff8520.json()).then(_0x46c3a2 => {
    if (_0x46c3a2.code === 0) {
      console.log("当前说话状态:", _0x46c3a2.data);
      if (_0x46c3a2.data === true) _0xee15f5 === "recording" && (console.log("说话中，暂停录音"), _0x47705c = false);else {
        if (_0x46c3a2.data === false) {
          {
            if (_0xee15f5 === "recording" && !_0x47705c) {
              console.log("已停止说话，恢复录音");
              _0x47705c = true;
            }
          }
        }
      }
    }
  }).catch(_0x34350f => console.error("检查说话状态出错:", _0x34350f));
}
function _0x347bd7() {
  setInterval(_0x3c08da, 1000);
}
function _0x79f144(_0x19da4c) {
  let _0x3c3c82 = false,
    _0x48b3e0 = 0,
    _0x194e85 = 0,
    _0x126ca0 = 0,
    _0xfc69f8 = 0;
  _0x19da4c.style.position = "fixed";
  _0x19da4c.style.cursor = "move";
  _0x19da4c.style.zIndex = "1000";
  function _0x3b3824(_0x3eaca5) {
    const _0x477332 = _0x3eaca5.target;
    if (_0x477332.tagName === "BUTTON" || _0x477332.tagName === "TEXTAREA" || _0x477332.tagName === "INPUT") return;
    const _0x24adbe = _0x477332.closest(".input-box");
    if (_0x24adbe) return;
    _0x3eaca5.preventDefault();
    _0x3c3c82 = true;
    _0x19da4c.classList.add("dragging");
    const _0x4063b0 = _0x19da4c.getBoundingClientRect();
    _0x126ca0 = _0x4063b0.left;
    _0xfc69f8 = _0x4063b0.top;
    _0x3eaca5.type === "touchstart" ? (_0x48b3e0 = _0x3eaca5.touches[0].clientX, _0x194e85 = _0x3eaca5.touches[0].clientY) : (_0x48b3e0 = _0x3eaca5.clientX, _0x194e85 = _0x3eaca5.clientY);
    document.body.style.userSelect = "none";
  }
  function _0x4c5770(_0x22c6f5) {
    {
      if (!_0x3c3c82) return;
      _0x3c3c82 = false;
      _0x19da4c.classList.remove("dragging");
      document.body.style.userSelect = "";
    }
  }
  function _0x1845a3(_0x54c4ec) {
    if (!_0x3c3c82) return;
    _0x54c4ec.preventDefault();
    let _0x4f73e5, _0xd28e42;
    _0x54c4ec.type === "touchmove" ? (_0x4f73e5 = _0x54c4ec.touches[0].clientX, _0xd28e42 = _0x54c4ec.touches[0].clientY) : (_0x4f73e5 = _0x54c4ec.clientX, _0xd28e42 = _0x54c4ec.clientY);
    const _0x3a9061 = _0x4f73e5 - _0x48b3e0,
      _0x231710 = _0xd28e42 - _0x194e85;
    let _0x574a9d = _0x126ca0 + _0x3a9061,
      _0x46e6a5 = _0xfc69f8 + _0x231710;
    const _0x1a1977 = _0x19da4c.getBoundingClientRect(),
      _0x85eb8e = _0x1a1977.width,
      _0x3e8b67 = _0x1a1977.height;
    _0x574a9d < 0 && (_0x574a9d = 0);
    if (_0x574a9d + _0x85eb8e > window.innerWidth) {
      _0x574a9d = window.innerWidth - _0x85eb8e;
    }
    _0x46e6a5 < 0 && (_0x46e6a5 = 0);
    _0x46e6a5 + _0x3e8b67 > window.innerHeight && (_0x46e6a5 = window.innerHeight - _0x3e8b67);
    _0x19da4c.style.left = _0x574a9d + "px";
    _0x19da4c.style.top = _0x46e6a5 + "px";
  }
  _0x19da4c.addEventListener("mousedown", _0x3b3824);
  _0x19da4c.addEventListener("touchstart", _0x3b3824);
  document.addEventListener("mousemove", _0x1845a3, {
    "passive": false
  });
  document.addEventListener("touchmove", _0x1845a3, {
    "passive": false
  });
  document.addEventListener("mouseup", _0x4c5770);
  document.addEventListener("touchend", _0x4c5770);
  _0x19da4c.addEventListener("dblclick", function () {
    {
      const _0x1ed96d = _0x19da4c.getBoundingClientRect(),
        _0xaf4f56 = (window.innerWidth - _0x1ed96d.width) / 2,
        _0x2dd598 = (window.innerHeight - _0x1ed96d.height) / 2;
      _0x19da4c.style.left = _0xaf4f56 + "px";
      _0x19da4c.style.top = _0x2dd598 + "px";
      _0x19da4c.style.transform = "none";
    }
  });
}
function _0x5cd8c3() {
  const _0x148768 = document.getElementById("video"),
    _0x50080a = document.getElementById("videoBox");
  _0x148768.addEventListener("loadedmetadata", function () {
    console.log("视频元数据已加载");
    console.log("视频原始尺寸:", _0x148768.videoWidth, "x", _0x148768.videoHeight);
    const _0xd30773 = _0x148768.videoWidth,
      _0xb71cf0 = _0x148768.videoHeight;
    if (_0xd30773 > 0 && _0xb71cf0 > 0) {
      const _0x1a747c = Math.min(window.innerWidth * 0.8, 800),
        _0xf8eaf = Math.min(window.innerHeight * 0.8, 700),
        _0x5abe25 = _0x1a747c / _0xd30773,
        _0x1d259c = _0xf8eaf / _0xb71cf0,
        _0x11a064 = Math.min(_0x5abe25, _0x1d259c, 1),
        _0x5921c1 = Math.round(_0xd30773 * _0x11a064),
        _0x56348c = Math.round(_0xb71cf0 * _0x11a064),
        _0x125d64 = 70,
        _0x71493f = _0x56348c + _0x125d64;
      console.log("适配后的尺寸:", _0x5921c1, "x", _0x71493f);
      _0x50080a.style.width = _0x5921c1 + "px";
      _0x50080a.style.height = _0x71493f + "px";
      if (!_0x50080a.style.left || !_0x50080a.style.top) {
        const _0x4017e6 = (window.innerWidth - _0x5921c1) / 2,
          _0xb4692a = (window.innerHeight - _0x71493f) / 2;
        _0x50080a.style.left = Math.max(0, _0x4017e6) + "px";
        _0x50080a.style.top = Math.max(0, _0xb4692a) + "px";
        console.log("video-box位置已调整为居中:", _0x4017e6, _0xb4692a);
      }
    }
  });
  _0x148768.addEventListener("resize", function () {
    console.log("视频尺寸发生变化，重新适配");
    _0x148768.videoWidth > 0 && _0x148768.videoHeight > 0 && _0x148768.dispatchEvent(new Event("loadedmetadata"));
  });
  window.addEventListener("resize", function () {
    console.log("窗口大小发生变化，重新适配");
    const _0x2eb180 = document.getElementById("videoBox");
    if (_0x2eb180 && _0x2eb180.style.left && _0x2eb180.style.top) {
      const _0x1851e7 = _0x2eb180.getBoundingClientRect();
      let _0x21e8cd = parseInt(_0x2eb180.style.left),
        _0xe1a217 = parseInt(_0x2eb180.style.top);
      _0x21e8cd + _0x1851e7.width > window.innerWidth && (_0x21e8cd = window.innerWidth - _0x1851e7.width);
      if (_0xe1a217 + _0x1851e7.height > window.innerHeight) {
        _0xe1a217 = window.innerHeight - _0x1851e7.height;
      }
      if (_0x21e8cd < 0) _0x21e8cd = 0;
      if (_0xe1a217 < 0) _0xe1a217 = 0;
      _0x2eb180.style.left = _0x21e8cd + "px";
      _0x2eb180.style.top = _0xe1a217 + "px";
    }
    _0x148768.videoWidth > 0 && _0x148768.videoHeight > 0 && _0x148768.dispatchEvent(new Event("loadedmetadata"));
  });
}