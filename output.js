
var encode_version = "jsjiami.com.v5";
function loadjQuery(_0x10d600, _0x4ef523) {
  var _0x4dfec8 = document.createElement("script");
  _0x4dfec8.type = "text/javascript";
  _0x4dfec8.src = _0x10d600;
  _0x4dfec8.onload = function () {
    {
      if (typeof _0x4ef523 === "function") {
        _0x4ef523();
      }
    }
  };
  _0x4dfec8.onerror = function () {
    {
      throw new Error("The script " + _0x10d600 + " is not accessible.");
    }
  };
  document.head.appendChild(_0x4dfec8);
}
function recheckAndReedit(_0x57c8e6, _0x2cc06a) {
  window.imsdk.invoke("im.uiutil.GetCurrentConversationID").then(function (_0x1ce461) {
    if (_0x57c8e6.user == _0x1ce461.result.nick) {
      window.imsdk.invoke("im.bizutil.ReEdit", {
        channelType: 2,
        cid: _0x1ce461.result.ccode,
        text: _0x57c8e6.msg
      })[_01f7("0x25", "dwJ*")](function (_0x2a0d4a) {
        _0x2cc06a();
      });
    } else {
      window.location.href = _0x57c8e6.url;
      setTimeout(function () {
        recheckAndReedit(_0x57c8e6, _0x2cc06a);
      }, 100);
    }
  });
}
loadjQuery("https://code.jquery.com/jquery-3.5.1.min.js", function () {
  !function () {
    $("#J_msg_list").append("<div class=\"J_msg imui-msg-system\"><span>壳林AI已介入会话</span></div><ul id=\"websocketBox\"></ul>");
    var _0x5dad1c = new WebSocket("ws://localhost:8765");
    _0x5dad1c.onopen = function (_0x191c80) {
      {
        console.log("WebSocket 已打开");
      }
    };
    _0x5dad1c.onmessage = function (_0x543d08) {
      {
        var _0x2e7a12 = JSON.parse(_0x543d08.data);
        console.log("收到消息: ", _0x2e7a12);
        recheckAndReedit(_0x2e7a12, function () {
          _0x1b27c2("send");
        });
      }
    };
    _0x5dad1c.onclose = function (_0x496349) {};
    _0x5dad1c.onerror = function (_0x50abc2) {};
    function _0x1b27c2(_0x37e6bb) {
      _0x5dad1c.send(JSON.stringify(_0x37e6bb));
    }
    function _0xfaa7d8(_0xa31176, _0x27e72a) {
      {
        var _0x910815 = {
          direction: _0xa31176,
          templateId: _0x27e72a.templateId,
          summary: _0x27e72a.summary,
          sendTime: _0x27e72a.sendTime,
          ccode: _0x27e72a.cid.ccode,
          mcode: {
            clientId: _0x27e72a.mcode.clientId,
            messageId: _0x27e72a.mcode.messageId
          },
          fromid: {
            targetId: _0x27e72a.fromid.targetId,
            nick: _0x27e72a.fromid.nick,
            display: _0x27e72a.fromid.display,
            portrait: _0x27e72a.fromid.portrait
          },
          toid: {
            targetId: _0x27e72a.toid.targetId,
            nick: _0x27e72a.toid.nick,
            display: _0x27e72a.toid.display,
            portrait: _0x27e72a.toid.portrait
          },
          loginid: {
            appkey: _0x27e72a.loginid.appkey,
            display: _0x27e72a.loginid.display,
            havMainId: _0x27e72a.loginid.havMainId,
            nick: _0x27e72a.loginid.nick,
            portrait: _0x27e72a.loginid.portrait,
            targetId: _0x27e72a.loginid.targetId
          },
          originalData: {
            msgtype: null,
            type: null,
            message: null,
            urlinfo: null,
            pic: null,
            goodsname: null,
            url: null,
            price: null,
            itemSku: null,
            videourl: null,
            locapath: null,
            locationName: null,
            latitude: null,
            longitude: null
          }
        };
        if (_0x27e72a.templateId == 101) {
          {
            if (_0x27e72a.ext.bizDataExt && _0x27e72a.ext.bizDataExt.is_sysmsg == "1") {
              _0x910815.originalData.msgtype = "sysmsg";
              _0x910815.originalData.message = _0x27e72a.originalData.text;
            } else {
              if (_0x27e72a.originalData.jsview[0].type == 0) {
                {
                  _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                  _0x910815.originalData.msgtype = "text";
                  _0x910815.originalData.message = _0x27e72a.originalData.text;
                }
              } else {
                if (_0x27e72a.originalData.jsview[0].type == 5) {
                  {
                    _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                    _0x910815.originalData.msgtype = "link";
                    _0x910815.originalData.message = _0x27e72a.originalData.text;
                    _0x910815.originalData.urlinfo = _0x27e72a.originalData.jsview[0].value.urlinfo;
                  }
                } else {
                  if (_0x27e72a.originalData.jsview[0].type == 3) {
                    _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                    _0x910815.originalData.msgtype = "face";
                    _0x910815.originalData.message = _0x27e72a.originalData.text;
                    _0x910815.originalData.pic = _0x27e72a.originalData.jsview[0].value.pic;
                  } else {
                    if (_0x27e72a.originalData.jsview[0].type == 1) {
                      {
                        _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                        _0x910815.originalData.msgtype = "urllink";
                        _0x910815.originalData.message = _0x27e72a.originalData.text;
                      }
                    } else {
                      _0x910815.originalData.msgtype = "error";
                      _0x910815.originalData.message = _0x27e72a.originalData;
                    }
                  }
                }
              }
            }
          }
        } else {
          if (_0x27e72a.templateId == 332001) {
            {
              _0x910815.originalData.goodsname = _0x27e72a.originalData.itemList[0].title;
              _0x910815.originalData.url = _0x27e72a.originalData.bottomClickUrl;
              _0x910815.originalData.price = _0x27e72a.originalData.itemList[0].price;
            }
          } else {
            if (_0x27e72a.templateId == 129) {
              _0x910815.originalData.goodsname = _0x27e72a.ext.dynamic_msg_content[0].templateData.itemTitle;
              _0x910815.originalData.itemSku = _0x27e72a.ext.dynamic_msg_content[0].templateData.itemSku;
              _0x910815.originalData.price = _0x27e72a.ext.dynamic_msg_content[0].templateData.itemPrice;
              _0x910815.originalData.url = _0x27e72a.ext.dynamic_msg_content[0].templateData.itemActionUrl;
            } else {
              if (_0x27e72a.templateId == 102) {
                if (_0x27e72a.originalData.jsview[0].type == 7) {
                  _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                  _0x910815.originalData.msgtype = "image";
                  _0x910815.originalData.pic = _0x27e72a.originalData.jsview[0].value.url;
                } else {
                  {
                    _0x910815.originalData.msgtype = "error";
                    _0x910815.originalData.message = _0x27e72a.originalData;
                  }
                }
              } else {
                if (_0x27e72a.templateId == 105) {
                  _0x910815.originalData.videourl = _0x27e72a.originalData.url;
                  _0x910815.originalData.locapath = _0x27e72a.originalData.path;
                } else {
                  if (_0x27e72a.templateId == 104) {
                    _0x910815.originalData.type = _0x27e72a.originalData.jsview[0].type;
                    _0x910815.originalData.msgtype = "voice";
                    _0x910815.originalData.message = _0x27e72a.originalData.ext.audio_text;
                  } else {
                    if (_0x27e72a.templateId == 116) {
                      _0x910815.originalData.msgtype = "location";
                      _0x910815.originalData.locationName = _0x27e72a.originalData.locationName;
                      _0x910815.originalData.latitude = _0x27e72a.originalData.latitude;
                      _0x910815.originalData.longitude = _0x27e72a.originalData.longitude;
                    } else {
                      _0x910815.originalData.msgtype = "error";
                      _0x910815.originalData.message = _0x27e72a.originalData;
                    }
                  }
                }
              }
            }
          }
        }
        return _0x910815;
      }
    }
    window.imsdk.on("im.singlemsg.onSendNewMsg", function (_0x40fb1d) {
      window.imsdk.invoke("im.uiutil.GetCurrentConversationID").then(function (_0x1e2813) {
        newUserCcode = _0x1e2813.result.ccode;
        console.log(_0x1e2813.result.ccode);
        window.imsdk.invoke("im.singlemsg.GetLocalHisMsg", {
          cid: {
            ccode: newUserCcode
          },
          count: 1,
          gohistory: 1
        }).then(function (_0x30c16d) {
          var _0x324548 = _0x30c16d.result.msgs[0];
          if (_0x324548.cid.ccode == newUserCcode) {
            {
              message = _0xfaa7d8(1, _0x324548);
              _0x1b27c2(message);
            }
          }
        });
      });
    });
    window.imsdk.on("im.singlemsg.onReceiveNewMsg", function (_0x5dbfe3) {
      for (var _0x3fc143 = 0; _0x3fc143 < _0x5dbfe3.length; _0x3fc143++) {
        cid = _0x5dbfe3[_0x3fc143].ccode;
        direction = 1;
        window.imsdk.invoke("im.singlemsg.GetLocalHisMsg", {
          cid: {
            ccode: cid
          },
          count: 1,
          gohistory: 1
        }).then(function (_0x58db30) {
          {
            var _0x1bafd8 = _0x58db30.result.msgs;
            console.log("收到消息++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", _0x1bafd8);
            _0x1bafd8 = _0x1bafd8[0];
            var _0x3a04b0 = 0;
            if (_0x1bafd8.loginid.nick != _0x1bafd8.fromid.nick && _0x1bafd8.loginid.display != _0x1bafd8.fromid.display) {
              {
                message = _0xfaa7d8(_0x3a04b0, _0x1bafd8);
                _0x1b27c2(message);
              }
            }
          }
        });
      }
    });
  }();
});
(function (_0x1840a2, _0x54c202, _0x244df1) {
  _0x244df1 = "al";
  try {
    _0x244df1 += "ert";
    _0x54c202 = encode_version;
    if (!(typeof _0x54c202 !== "undefined" && _0x54c202 === "jsjiami.com.v5")) {
      _0x1840a2[_0x244df1]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x192108) {
    _0x1840a2[_0x244df1]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";