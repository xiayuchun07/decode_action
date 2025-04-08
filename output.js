//Tue Apr 08 2025 10:20:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _0x506100() {
  this.userInfos = {};
  this.flower = {
    "fresh_flower_num": 0,
    "num": 0,
    "sum": 0,
    "tanhua_flower_num": 0,
    "wild_flower_num": 0
  };
  this.platform;
  this.channel_id = "";
  try {
    this.channel_id = channel_id;
  } catch (_0x431ab4) {}
  this.loginStatus = false;
  this.countServer;
  this.goWXShare;
  this.goWXMainPage;
  this.login;
  this.gameMenu;
  this.sendFlower;
  this.aspect_ratio = 0;
  try {
    this.aspect_ratio = parseInt(aspect_ratio);
  } catch (_0x1d42fd) {}
  this.isVertical = this.aspect_ratio == 3;
  var _0x31800e = $(window).width();
  var _0x2d9828 = $(window).height();
  if (this.isVertical) {
    this.rotate_screen = _0x2d9828 <= _0x31800e;
  } else {
    this.rotate_screen = _0x2d9828 >= _0x31800e;
  }
  this.okCallback;
}
var _0x110900 = new _0x506100();
var _0xc79336 = webUrl,
  _0x5672a6 = cdnUrl + "/website/",
  _0x3839c4 = picUrl;
function _0x560675() {
  this.FLOWER_SHARE_PLUS_FLOWER = _0xc79336 + "/ajax/share/share_game.json";
  this.FLOWER_SEND_FLOWER = _0xc79336 + "/ajax/contains/flower.json";
  this.FLOWER_SHARE_ALL_INFO = _0xc79336 + "/ajax/share/all_share_award_conf.json";
  this.FLOWER_SHARE_NOW_FLOWER = _0xc79336 + "/ajax/share/share_award_conf.json";
  this.USER_CJH_INFO = _0xc79336 + "/ajax/user/get_flower.json";
  this.GAME_GET_GAME_INFO = _0xc79336 + "/ajax/game/get_game_info.json";
  this.GAME_SHARE_HREF = _0xc79336 + "/game";
  this.GAME_UPDATE_LOG = _0xc79336 + "/ajax/game/update_log_list.json";
  this.GAME_SYSTEM_TIME = _0xc79336 + "/api/tool?action=get_server_time";
  this.GAME_LINK_OVER = _0xc79336 + "/ajax/game/get_game_link.json";
  this.GAME_COMMENT = _0xc79336 + "/ajax/comment/comments.json";
  this.GAME_FINE_COMMEN = _0xc79336 + "/ajax/comment/fine_comments.json";
  this.GET_THUMBS_NUM = _0xc79336 + "/ajax/game/score_sum.json";
  this.GET_THUMBS_STATE = _0xc79336 + "/ajax/game/score_by_me.json";
  this.UP_THUMBS = _0xc79336 + "/ajax/game/score.json";
  this.GET_ATTENTION_STATE = _0xc79336 + "/ajax/follow/status.json";
  this.UP_ATTENTION = _0xc79336 + "/ajax/follow/create.json";
  this.UP_ATTENTION_CANCEL = _0xc79336 + "/ajax/follow/delete.json";
  this.GET_COLLECT_STATE = _0xc79336 + "/ajax/favorite/isfaved.json";
  this.UP_COLLECT = _0xc79336 + "/ajax/favorite/create.json";
  this.UP_COLLECT_CANCEL = _0xc79336 + "/ajax/favorite/destory.json";
}
var _0x504f1a = new _0x560675();
function _0x5d6fbe() {
  this.Silence = false;
  this.FontSpeed = "centre";
}
var _0x4ec78e = new _0x5d6fbe();
window.controlFontSpeed = function (_0x355bf2) {
  if (_0x328b72.WEB) {
    if (_0x355bf2 == "fast") {
      _0x4ec78e.FontSpeed = _0x355bf2;
    } else if (_0x355bf2 == "center") {
      _0x4ec78e.FontSpeed = _0x355bf2;
    } else {
      _0x4ec78e.FontSpeed = _0x355bf2;
    }
    WebFontSpeedControl && WebFontSpeedControl(_0x4ec78e.FontSpeed);
  }
};
window.controlSilence = function (_0x21dd7a) {
  if (_0x328b72.WEB) {
    if (_0x21dd7a) {
      _0x4ec78e.Silence = true;
    } else {
      _0x4ec78e.Silence = false;
    }
    WebAudioControl && WebAudioControl(_0x4ec78e.Silence);
  }
};
window.changeGameScreen = function (_0x5c6259) {
  if (_0x328b72.WEB) {
    _0x110900.gameMenu.fullScreen = !!_0x5c6259;
  }
};
window.MathRandom = function (_0x49b031, _0x29e24c) {
  var _0x2f7f96 = false;
  _0x2f7f96 = Math.floor(Math.random() * _0x29e24c);
  if (!(_0x49b031 == undefined) && _0x29e24c >= _0x49b031) {
    _0x2f7f96 = Math.floor(Math.random() * (_0x29e24c - _0x49b031) + _0x49b031);
  } else if (_0x29e24c < _0x49b031) {
    return false;
  }
  return _0x2f7f96;
};
function _0x6d1d61() {
  var _0x398d81;
  var _0x6a1f1f;
  var _0xa9ae4;
  var _0x3e10a4 = {};
  var _0x5f5408 = {};
  var _0x2b9d8a = this;
  this.gameInfoData;
  this.updateListData;
  this.gameOverData;
  this.gameLinkData;
  this.gameCommentData = {};
  this.fineCommentData = {};
  this.author_uid = 0;
  this.thumbsNum = 0;
  this.thumbsState = 0;
  this.attentionState = 0;
  this.collectNum = 0;
  this.collectState = 0;
  this.thumbsStateFlag = false;
  this.attentionStateFlag = false;
  this.collectStateFlag = false;
  this.thumsAllMsg = ["您已经点过赞了哦！", "", "", ""];
  this.attentionAllMsg = [""];
  this.collectAllMsg = [];
  this.thumsMsg = "";
  this.attentionMsg = "";
  this.collectMsg = "";
  this.stateCallBack = null;
  this.userMenuStateFn = null;
  this.fullScreen = false;
  this.uid = 0;
  this.get_Game_Info = function (_0x1773fb) {
    if (this.gameInfoData) {
      _0x1773fb && _0x1773fb(this.gameInfoData);
    } else {
      {
        var _0x4807ad = _0x504f1a.GAME_GET_GAME_INFO;
        var _0x4cf5d6 = {
          "gindex": _0x3fd9a8,
          "all": 1
        };
        getAjax(_0x4807ad, "get", _0x4cf5d6, function (_0x1778dd) {
          if (parseInt(_0x1778dd.status) == 1) {
            {
              _0x2b9d8a.gameInfoData = _0x1778dd.data.game;
              _0x2b9d8a.author_uid = _0x1778dd.data.game.author_uid;
              _0x1773fb && _0x1773fb(_0x2b9d8a.gameInfoData);
            }
          } else {
            console.log(_0x1778dd.msg);
          }
        }, function () {
          console.log("获取游戏简介失败");
        }, true);
      }
    }
  };
  this.get_Update_List = function (_0x4c2d98) {
    if (_0x398d81) {
      _0x4c2d98 && _0x4c2d98(_0x398d81);
    } else {
      var _0x3a5520 = _0x504f1a.GAME_UPDATE_LOG;
      var _0x332791 = {
        "gindex": _0x3fd9a8,
        "game_flg": 1
      };
      getAjax(_0x3a5520, "get", _0x332791, function (_0xec0f71) {
        {
          if (parseInt(_0xec0f71.status) == 1) {
            _0x398d81 = _0xec0f71.data;
            _0x4c2d98 && _0x4c2d98(_0x398d81);
          } else {
            {
              console.log(_0xec0f71.msg);
            }
          }
        }
      }, function () {
        console.log("获取更新日志失败");
      }, true);
    }
  };
  this.commentBut = function (_0x82a7e1) {
    if (_0x328b72.WEB) {
      {
        window.parent.asUserOperate.jumpComment();
      }
    } else {
      _0x82a7e1 && _0x82a7e1();
    }
  };
  this.MoreBut = function (_0x28c3fc) {
    _0x28c3fc && _0x28c3fc("查看更多");
  };
  this.shareBut = function (_0x6b2570) {
    if (_0x328b72.WEB) {
      _0x6b2570 && _0x6b2570("调web喽");
      window.parent.asUserOperate.shareBox();
    } else {
      {
        _0x31effc.init();
      }
    }
  };
  this.ExitBut = function (_0x50c37e) {
    if (_0x328b72.WEB) {
      if (window.parent.asUserOperate.windowChange()) {
        window.parent.asUserOperate.quitFullScreen();
        _0x50c37e && _0x50c37e();
      } else {
        window.parent.asUserOperate.fullScreen();
        _0x50c37e && _0x50c37e();
      }
      return;
    }
    var _0xb31ddf = confirm("确定要退出作品吗？");
    if (_0xb31ddf) {
      var _0x5d24ba = mUrl + "/game/" + _0x3fd9a8;
      window.location.href = _0x5d24ba;
    }
  };
  this.get_Over_Info = function (_0x5acaa1) {
    {
      if (_0x6a1f1f) {
        _0x5acaa1 && _0x5acaa1(_0x6a1f1f);
      } else {
        var _0x26e476 = _0x504f1a.GAME_LINK_OVER;
        var _0x2b77b1 = {
          "gindex": _0x3fd9a8
        };
        getAjax(_0x26e476, "get", _0x2b77b1, function (_0x2da3b3) {
          if (parseInt(_0x2da3b3.status) == 1) {
            var _0x2b77b1 = _0x2da3b3.data;
            _0x6a1f1f = _0x2b77b1.ending_info;
            _0xa9ae4 = _0x2b77b1.friendly_link;
            _0x5acaa1 && _0x5acaa1(_0x6a1f1f);
          } else {
            console.log(_0x2da3b3.msg);
          }
        }, function () {
          console.log("获取结局信息==友情链接失败");
        }, true);
      }
    }
  };
  this.get_Game_Comment = function (_0xc5653, _0x323ff8, _0x33c2f6) {
    var _0x59d990 = _0xc5653;
    var _0x59cac6 = _0x323ff8;
    if (_0x3e10a4["" + _0x59d990]) {
      _0x33c2f6 && _0x33c2f6(_0x3e10a4["" + _0x59d990]);
    } else {
      var _0x2f0feb = _0x504f1a.GAME_COMMENT;
      var _0x51c6eb = {
        "gindex": _0x3fd9a8,
        "page": _0x59d990,
        "limit": _0x59cac6,
        "call_source": "game",
        "fine": 1,
        "desc": 1
      };
      getAjax(_0x2f0feb, "get", _0x51c6eb, function (_0x42ef4b) {
        {
          if (parseInt(_0x42ef4b.status) == 1 || parseInt(_0x42ef4b.status) == 8) {
            {
              var _0x51c6eb = _0x42ef4b.data;
              _0x3e10a4["" + _0x59d990] = _0x51c6eb.comments;
              _0x33c2f6 && _0x33c2f6(_0x3e10a4["" + _0x59d990]);
            }
          } else {
            console.log(_0x42ef4b.msg);
          }
        }
      }, function () {
        console.log("获取游戏评论失败");
      }, true);
    }
  };
  this.get_Fine_Comment = function (_0x1daedd, _0x16c9c8, _0x4c3e67) {
    var _0xd41758 = _0x1daedd;
    var _0x17f961 = _0x16c9c8;
    if (_0x5f5408["" + _0xd41758]) {
      {
        _0x4c3e67 && _0x4c3e67(_0x5f5408["" + _0xd41758]);
      }
    } else {
      {
        var _0xb21b74 = _0x504f1a.GAME_FINE_COMMEN;
        var _0x34d4a3 = {
          "gindex": _0x3fd9a8,
          "page": _0xd41758,
          "limit": _0x17f961,
          "call_source": "game",
          "fine": 1,
          "desc": 1
        };
        var _0x19be0d = function (_0x3368ed) {
          if (parseInt(_0x3368ed.status) == 1) {
            var _0x34d4a3 = _0x3368ed.data;
            _0x5f5408["" + _0xd41758] = _0x34d4a3.comments;
            _0x4c3e67 && _0x4c3e67(_0x5f5408["" + _0xd41758]);
          } else {
            {
              console.log(_0x3368ed.msg);
            }
          }
        };
        var _0x1c1510 = function (_0x23399a) {
          console.log("获取精品评论失败" + _0x23399a);
        };
        getAjax(_0xb21b74, "get", _0x34d4a3, _0x19be0d, _0x1c1510, true);
      }
    }
  };
  this.gameMenuState = function (_0x38a22b) {
    {
      this.stateCallBack = _0x38a22b;
      this.uid = _0x110900.userInfos.uid;
      _0x2b9d8a.get_Game_Info(function () {
        {
          _0x2b9d8a.get_Thumbs_Num(function () {
            {
              _0x2b9d8a.get_Collect_Num(function () {
                if (_0x110900.channel_id == "") {
                  _0x2b9d8a.get_Menu_state(function () {
                    _0x2b9d8a.stateCallBack && _0x2b9d8a.stateCallBack();
                  });
                } else {
                  {
                    return;
                  }
                }
              });
            }
          });
        }
      });
    }
  };
  this.get_Menu_state = function (_0x22eff6) {
    {
      this.userMenuStateFn = _0x22eff6;
      if (_0x110900.loginStatus) {
        if (_0x328b72.WEB) {
          if (_0x110900.userInfos.uid != 0) {
            {
              window.parent.NewGame.loadComplete();
            }
          } else {
            {
              this.clearMenuState();
              _0x2b9d8a.userMenuStateFn && _0x2b9d8a.userMenuStateFn();
            }
          }
        } else {
          _0x2b9d8a.get_Thumbs_State(function () {
            {
              _0x2b9d8a.get_Attention_State(function () {
                {
                  _0x2b9d8a.get_Collect_State(function () {
                    _0x2b9d8a.userMenuStateFn && _0x2b9d8a.userMenuStateFn();
                  });
                }
              });
            }
          });
        }
      } else {
        {
          _0x2b9d8a.thumbsState = 0;
          _0x2b9d8a.attentionState = 0;
          _0x2b9d8a.collectState = 0;
          this.userMenuStateFn && this.userMenuStateFn();
        }
      }
    }
  };
  this.get_Thumbs_Num = function (_0x1cf85e) {
    {
      if (_0x2b9d8a.thumbsNum > 1) {
        _0x1cf85e && _0x1cf85e();
      } else {
        if (_0x328b72.WEB) {
          {
            _0x2b9d8a.thumbsNum = parseInt(window.parent.asUserOperate.gameDetail().detail.like_sum);
            _0x1cf85e && _0x1cf85e();
          }
        } else {
          var _0x1306a3 = _0x504f1a.GET_THUMBS_NUM;
          var _0x1a6f72 = {
            "gindex": _0x3fd9a8
          };
          var _0x28d44c = function (_0x1a6f72) {
            {
              if (parseInt(_0x1a6f72.status) == 1) {
                _0x2b9d8a.thumbsNum = parseInt(_0x1a6f72.data);
                _0x1cf85e && _0x1cf85e();
              } else {
                {
                  console.log(_0x1a6f72.msg);
                }
              }
            }
          };
          var _0x5138e3 = function () {
            console.log("获取点赞数目---error");
          };
          getAjax(_0x1306a3, "get", _0x1a6f72, _0x28d44c, _0x5138e3, true);
        }
      }
    }
  };
  this.get_Thumbs_State = function (_0x272296) {
    var _0x2a08ae = _0x504f1a.GET_THUMBS_STATE;
    var _0x429bef = {
      "gindex": _0x3fd9a8
    };
    var _0x360e29 = function (_0x429bef) {
      {
        if (parseInt(_0x429bef.status) == 1) {
          {
            _0x2b9d8a.thumbsState = 1;
            _0x272296 && _0x272296(_0x429bef);
          }
        } else {
          {
            _0x2b9d8a.thumbsState = 0;
            _0x272296 && _0x272296(_0x429bef);
          }
        }
      }
    };
    var _0x58cbe1 = function () {
      {
        console.log("获取点赞状态---error");
      }
    };
    getAjax(_0x2a08ae, "get", _0x429bef, _0x360e29, _0x58cbe1, true);
  };
  this.up_Thumbs = function (_0xad3503) {
    this.up_Thumbs_Fn = _0xad3503;
    if (_0x110900.loginStatus) {
      if (this.author_uid == _0x110900.userInfos.uid) {
        _0x2b9d8a.thumbsState = 0;
        _0x2b9d8a.thumsMsg = "作者本人不可点赞哦！";
        _0x2b9d8a.up_Thumbs_Fn && _0x2b9d8a.up_Thumbs_Fn(_0x2b9d8a.thumsMsg, this.thumbsState, _0x2b9d8a.thumbsNum);
        return;
      }
      if (this.thumbsState == 1) {
        this.thumsMsg = "您已经点过赞了哦！";
        this.up_Thumbs_Fn && this.up_Thumbs_Fn(this.thumsMsg, this.thumbsState, _0x2b9d8a.thumbsNum);
      } else {
        {
          if (_0x328b72.WEB) {
            {
              if (this.thumbsState == 0) {
                window.parent.asUserOperate.asUserBtn("dz", "点赞");
              }
            }
          } else {
            var _0xfca63d = _0x504f1a.UP_THUMBS;
            var _0x1ab5f5 = {
              "gindex": _0x3fd9a8
            };
            var _0x20b091 = function (_0x1ab5f5) {
              {
                if (_0x1ab5f5.status == 1) {
                  {
                    _0x2b9d8a.thumbsState = 1;
                    _0x2b9d8a.thumbsNum += 1;
                    _0x2b9d8a.thumsMsg = "点赞成功！";
                    _0x2b9d8a.up_Thumbs_Fn && _0x2b9d8a.up_Thumbs_Fn(_0x2b9d8a.thumsMsg, _0x2b9d8a.thumbsState, _0x2b9d8a.thumbsNum);
                  }
                } else {
                  _0x2b9d8a.thumbsState = 0;
                  _0x2b9d8a.up_Thumbs_Fn && _0x2b9d8a.up_Thumbs_Fn(_0x1ab5f5.msg, _0x2b9d8a.thumbsState, _0x2b9d8a.thumbsNum);
                }
              }
            };
            var _0x526b72 = function () {
              console.log("去点赞==error");
            };
            getAjax(_0xfca63d, "get", _0x1ab5f5, _0x20b091, _0x526b72, true);
          }
        }
      }
    }
  };
  this.get_Attention_State = function (_0x3ca6f2) {
    {
      var _0x12f6a6 = _0x504f1a.GET_ATTENTION_STATE;
      var _0x2f331f = {
        "uid2": _0x2b9d8a.author_uid
      };
      var _0x3bfa6f = function (_0x2f331f) {
        {
          if (_0x2f331f.status == 1) {
            if (_0x2f331f.data.self_status == 1 || _0x2f331f.data.self_status == 2 || _0x2f331f.data.self_status == 3) {
              _0x2b9d8a.attentionState = 1;
            } else {
              {
                _0x2b9d8a.attentionState = 0;
              }
            }
          } else if (_0x2f331f.status == -2) {
            _0x2b9d8a.attentionState = -2;
          } else {
            {
              _0x2b9d8a.attentionState = 0;
            }
          }
          _0x3ca6f2 && _0x3ca6f2(_0x2f331f);
        }
      };
      var _0x5ebc8e = function () {
        {
          console.log("获取关注状态--error");
        }
      };
      getAjax(_0x12f6a6, "get", _0x2f331f, _0x3bfa6f, _0x5ebc8e, true);
    }
  };
  this.attention_Btn = function (_0x2c8f6f) {
    this.attention_Btn_Fn = _0x2c8f6f;
    if (_0x110900.loginStatus) {
      if (this.author_uid == _0x110900.userInfos.uid) {
        {
          _0x2b9d8a.attentionState = 0;
          _0x2b9d8a.attentionMsg = "作者本人不可关注哦！";
          _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
          return;
        }
      }
      if (_0x328b72.WEB) {
        if (_0x2b9d8a.attentionState == 101 || this.attentionState == 0) {
          window.parent.asUserOperate.asUserBtn("gz", "关注");
        } else {
          window.parent.asUserOperate.asUserBtn("qxgz", "取消关注");
        }
      } else {
        if (_0x2b9d8a.attentionState == 101 || this.attentionState == 0) {
          _0x2b9d8a.up_Attention(function (_0x355ed1) {
            {
              if (_0x355ed1.status == 1) {
                _0x2b9d8a.attentionState = 1;
                _0x2b9d8a.attentionMsg = "关注成功！";
                _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
              } else {
                _0x2b9d8a.attentionState = 0;
                _0x2b9d8a.attentionMsg = "关注失败啦！";
                _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
              }
            }
          });
        } else if (_0x2b9d8a.attentionState == -2) {
          _0x2b9d8a.attentionState = -2;
          _0x2b9d8a.attentionMsg = "作者本人不可关注哦！";
          _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
        } else {
          _0x2b9d8a.up_Attention_cancel(function (_0x171fcf) {
            {
              if (_0x171fcf.status == 1) {
                _0x2b9d8a.attentionState = 0;
                _0x2b9d8a.attentionMsg = "取消关注成功！";
                _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
              } else {
                {
                  _0x2b9d8a.attentionMsg = "取消关注失败！";
                  _0x2b9d8a.attention_Btn_Fn && _0x2b9d8a.attention_Btn_Fn(_0x2b9d8a.attentionMsg, _0x2b9d8a.attentionState);
                }
              }
            }
          });
        }
      }
    }
  };
  this.up_Attention = function (_0x1fec15) {
    var _0x87f3cb = _0x504f1a.UP_ATTENTION;
    var _0x5eb19f = {
      "uid2": _0x2b9d8a.author_uid,
      "platform": 4
    };
    var _0x1bff9f = function (_0x5eb19f) {
      {
        _0x1fec15 && _0x1fec15(_0x5eb19f);
      }
    };
    var _0x356f76 = function () {
      {
        console.log("去关注接口错误");
      }
    };
    getAjax(_0x87f3cb, "get", _0x5eb19f, _0x1bff9f, _0x356f76, true);
  };
  this.up_Attention_cancel = function (_0x1adb94) {
    var _0x173611 = _0x504f1a.UP_ATTENTION_CANCEL;
    var _0x418e23 = {
      "uid2": _0x2b9d8a.author_uid,
      "platform": 4
    };
    var _0x4774c3 = function (_0x3f0cad) {
      _0x1adb94 && _0x1adb94(_0x3f0cad);
    };
    var _0x57cde1 = function () {
      console.log("取消关注接口报错");
    };
    getAjax(_0x173611, "get", _0x418e23, _0x4774c3, _0x57cde1, true);
  };
  this.get_Collect_Num = function (_0x5ba17a) {
    if (this.collectNum > 0) {
      _0x5ba17a && _0x5ba17a();
    } else {
      {
        if (_0x328b72.WEB) {
          this.collectNum = parseInt(window.parent.asUserOperate.gameDetail().detail.collect_sum);
        } else {
          {
            this.collectNum = parseInt(gamefv_times);
          }
        }
        _0x5ba17a && _0x5ba17a();
      }
    }
  };
  this.get_Collect_State = function (_0x1e9aea) {
    var _0x366b88 = _0x504f1a.GET_COLLECT_STATE;
    var _0x29de09 = {
      "gindex": _0x3fd9a8
    };
    var _0xed1850 = function (_0x29de09) {
      _0x2b9d8a.collectState = _0x29de09.status;
      _0x1e9aea && _0x1e9aea(_0x29de09);
    };
    var _0x583f6c = function () {};
    getAjax(_0x366b88, "get", _0x29de09, _0xed1850, _0x583f6c, true);
  };
  this.collect_Btn = function (_0x3086a8) {
    {
      this.collect_Btn_Fn = _0x3086a8;
      if (_0x110900.loginStatus) {
        if (this.author_uid == _0x110900.userInfos.uid) {
          {
            _0x2b9d8a.collectState = 0;
            _0x2b9d8a.collectMsg = "作者本人不可收藏哦！";
            _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
            return;
          }
        }
        if (_0x328b72.WEB) {
          {
            if (_0x2b9d8a.collectState == 0) {
              window.parent.asUserOperate.asUserBtn("sc", "收藏");
            } else if (_0x2b9d8a.collectState == 1) {
              window.parent.asUserOperate.asUserBtn("sc", "取消收藏");
            }
          }
        } else {
          {
            if (_0x2b9d8a.collectState == 0) {
              {
                _0x2b9d8a.up_Collect(function (_0xf9867c) {
                  if (parseInt(_0xf9867c.status) == 1) {
                    _0x2b9d8a.collectState = 1;
                    _0x2b9d8a.collectNum += 1;
                    _0x2b9d8a.collectMsg = "收藏成功";
                    _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                  } else if (parseInt(_0xf9867c.status) == -2) {
                    _0x2b9d8a.collectState = 0;
                    _0x2b9d8a.collectMsg = "" + _0xf9867c.msg;
                    _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                  } else {
                    {
                      _0x2b9d8a.collectState = 0;
                      _0x2b9d8a.collectMsg = "" + _0xf9867c.msg;
                      _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                    }
                  }
                });
              }
            } else if (_0x2b9d8a.collectState == 1) {
              _0x2b9d8a.up_Collect_cancel(function (_0x350d25) {
                if (_0x350d25.status == 1) {
                  _0x2b9d8a.collectState = 0;
                  _0x2b9d8a.collectNum -= 1;
                  _0x2b9d8a.collectMsg = "取消收藏成功";
                  _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                } else if (_0x350d25.status == -2) {
                  _0x2b9d8a.collectMsg = "" + _0x350d25.msg;
                  _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                } else if (_0x350d25.status == 0) {
                  _0x2b9d8a.collectMsg = "已经取消收藏";
                  _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                } else {
                  _0x2b9d8a.collectMsg = "" + _0x350d25.msg;
                  _0x2b9d8a.collect_Btn_Fn && _0x2b9d8a.collect_Btn_Fn(_0x2b9d8a.collectMsg, _0x2b9d8a.collectState, _0x2b9d8a.collectNum);
                }
              });
            }
          }
        }
      }
    }
  };
  this.up_Collect = function (_0x15168c) {
    {
      var _0x14bcf5 = _0x504f1a.UP_COLLECT;
      var _0x5a1dba = {
        "gindex": _0x3fd9a8,
        "platform": 4
      };
      var _0x4069e0 = function (_0x193c8e) {
        _0x15168c && _0x15168c(_0x193c8e);
      };
      var _0xec1ac3 = function () {
        {
          console.log("收藏接口不通");
        }
      };
      getAjax(_0x14bcf5, "get", _0x5a1dba, _0x4069e0, _0xec1ac3, true);
    }
  };
  this.up_Collect_cancel = function (_0x29fc04) {
    {
      var _0x3af993 = _0x504f1a.UP_COLLECT_CANCEL;
      var _0x3ab82d = {
        "gindex": _0x3fd9a8,
        "platform": 4
      };
      var _0x522155 = function (_0x3ab82d) {
        {
          _0x29fc04(_0x3ab82d);
        }
      };
      var _0x5a86b7 = function () {};
      getAjax(_0x3af993, "get", _0x3ab82d, _0x522155, _0x5a86b7, true);
    }
  };
  this.clearMenuState = function () {
    {
      this.collectState = 0;
      this.attentionState = 0;
      this.thumbsState = 0;
    }
  };
}
_0x110900.gameMenu = new _0x6d1d61();
function _0x34d625() {
  var _0x44c770 = _0x110900.gameMenu;
  _0x44c770.thumbsState = 0;
  _0x44c770.attentionState = 0;
  _0x44c770.collectState = 0;
  _0x44c770.userMenuStateFn && _0x44c770.userMenuStateFn();
}
function _0x250306(_0x5cf6ab, _0x48ed87) {
  var _0x415c9a = _0x110900.gameMenu;
  switch (_0x5cf6ab) {
    case 0:
      if (_0x48ed87 == 1) {
        {
          _0x415c9a.collectState = 1;
        }
      } else if (_0x48ed87 == -2) {
        _0x415c9a.collectState = -2;
      } else {
        {
          _0x415c9a.collectState = 0;
        }
      }
      _0x415c9a.collectStateFlag = true;
      break;
    case 1:
      if (_0x48ed87 == 1) {
        _0x415c9a.collectMsg = "收藏成功！";
        _0x415c9a.collectNum += 1;
        _0x415c9a.collectState = 1;
        _0x415c9a.collect_Btn_Fn && _0x415c9a.collect_Btn_Fn(_0x415c9a.collectMsg, _0x415c9a.collectState, _0x415c9a.collectNum);
      } else if (_0x48ed87 == 6) {
        {
          _0x415c9a.collectMsg = "收藏成功！";
          _0x415c9a.collectNum += 1;
          _0x415c9a.collectState = 1;
          _0x415c9a.collect_Btn_Fn && _0x415c9a.collect_Btn_Fn(_0x415c9a.collectMsg, _0x415c9a.collectState, _0x415c9a.collectNum);
        }
      } else {
        _0x415c9a.collectMsg = "收藏失败！";
        _0x415c9a.collectState = 0;
        _0x415c9a.collect_Btn_Fn && _0x415c9a.collect_Btn_Fn(_0x415c9a.collectMsg, _0x415c9a.collectState, _0x415c9a.collectNum);
      }
      break;
    case 2:
      if (_0x48ed87 == 1) {
        {
          _0x415c9a.collectMsg = "取消收藏成功！";
          _0x415c9a.collectNum -= 1;
          _0x415c9a.collectState = 0;
          _0x415c9a.collect_Btn_Fn && _0x415c9a.collect_Btn_Fn(_0x415c9a.collectMsg, _0x415c9a.collectState, _0x415c9a.collectNum);
        }
      } else {
        _0x415c9a.collectMsg = "取消收藏失败！";
        _0x415c9a.collectState = 1;
        _0x415c9a.collect_Btn_Fn && _0x415c9a.collect_Btn_Fn(_0x415c9a.collectMsg, _0x415c9a.collectState, _0x415c9a.collectNum);
      }
      break;
    case 3:
      if (_0x48ed87 == 1) {
        _0x415c9a.attentionState = 1;
      } else if (_0x48ed87 == -201) {
        {
          _0x415c9a.attentionState = -2;
        }
      } else if (_0x48ed87 == 0 || _0x48ed87 == 101) {
        {
          _0x415c9a.attentionState = 0;
        }
      } else {
        _0x415c9a.attentionState = 0;
      }
      _0x415c9a.attentionStateFlag = true;
      break;
    case 4:
      if (_0x48ed87 == 1) {
        {
          _0x415c9a.attentionMsg = "关注成功！";
          _0x415c9a.attentionState = 1;
          _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
        }
      } else if (_0x48ed87 == -201) {
        {
          _0x415c9a.attentionMsg = "作者本人不可关注哦！";
          _0x415c9a.attentionState = 0;
          _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
        }
      } else if (_0x48ed87 == 0 || _0x48ed87 == 101) {
        {
          _0x415c9a.attentionMsg = "未关注！";
          _0x415c9a.attentionState = 0;
          _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
        }
      } else {
        _0x415c9a.attentionMsg = "关注失败！";
        _0x415c9a.attentionState = 0;
        _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
      }
      break;
    case 5:
      if (_0x48ed87 == 1) {
        {
          _0x415c9a.attentionMsg = "取消关注失败！";
          _0x415c9a.attentionState = 1;
          _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
        }
      } else if (_0x48ed87 == -201) {
        _0x415c9a.attentionMsg = "作者本人不可关注哦！";
        _0x415c9a.attentionState = 0;
        _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
      } else if (_0x48ed87 == 0 || _0x48ed87 == 101) {
        _0x415c9a.attentionMsg = "取消关注成功！";
        _0x415c9a.attentionState = 0;
        _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
      } else {
        _0x415c9a.attentionMsg = "关注失败！";
        _0x415c9a.attentionState = 0;
        _0x415c9a.attention_Btn_Fn && _0x415c9a.attention_Btn_Fn(_0x415c9a.attentionMsg, _0x415c9a.attentionState);
      }
      break;
    case 6:
      if (_0x48ed87 == 1) {
        _0x415c9a.thumbsState = 1;
      } else {
        _0x415c9a.thumbsState = 0;
      }
      _0x415c9a.thumbsStateFlag = true;
      break;
    case 7:
      if (_0x328b72.WEB) {
        if (_0x48ed87 == 1) {
          _0x415c9a.thumbsState = 1;
          _0x415c9a.thumbsNum += 1;
          _0x415c9a.thumsMsg = "点赞成功！";
        } else if (_0x48ed87 == -100) {
          _0x415c9a.thumbsState = 0;
          _0x415c9a.thumsMsg = "作者本人不可点赞哦！";
        } else {
          _0x415c9a.thumsMsg = "";
        }
      } else {
        if (_0x48ed87 == 1) {
          _0x415c9a.thumbsState = 1;
          _0x415c9a.thumbsNum += 1;
          _0x415c9a.thumsMsg = "点赞成功！";
        } else if (_0x48ed87 == -100) {
          _0x415c9a.thumbsState = 0;
          _0x415c9a.thumsMsg = "作者本人不可点赞哦！";
        } else {
          _0x415c9a.thumsMsg = "不能重复点赞";
        }
      }
      _0x415c9a.up_Thumbs_Fn && _0x415c9a.up_Thumbs_Fn(_0x415c9a.thumsMsg, _0x415c9a.thumbsState, _0x415c9a.thumbsNum);
      break;
  }
  if (_0x415c9a.thumbsStateFlag && _0x415c9a.attentionStateFlag && _0x415c9a.collectStateFlag) {
    _0x415c9a.thumbsStateFlag = false;
    _0x415c9a.attentionStateFlag = false;
    _0x415c9a.collectStateFlag = false;
    _0x415c9a.userMenuStateFn && _0x415c9a.userMenuStateFn();
  }
}
function _0x35259d() {
  var _0x5e4fab = this;
  this.shareWps = null;
  this.init = function () {
    this.shareAllAwardConf(function (_0x973450, _0x2b2cf1) {
      if (_0x2b2cf1) {
        {
          return;
        }
      }
      var _0x973450 = _0x973450.data.share_num;
      if (_0x973450) {
        if (_0x973450[1].wild_flower_count) {
          var _0x479214 = $(".box2 .clearfix").eq(0);
          var _0x49d9ac = $(".box2 .clearfix").eq(0);
          var _0x876aed = _0x973450[1].wild_flower_count / 100;
          if (_0x876aed != 0) {
            var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x5672a6 + "orange/img/common/f3.png\"><span class=\"btnAFlower1\">" + _0x876aed + "</span>朵花</div>";
            _0x479214.append(_0x501298);
          } else {
            if (_0x973450[1].integral_count == 0) {
              {
                _0x479214.remove();
              }
            }
          }
        }
        if (_0x973450[2].wild_flower_count) {
          var _0x479214 = $(".box2 .clearfix").eq(1);
          var _0x876aed = _0x973450[2].wild_flower_count / 100;
          if (_0x876aed != 0) {
            var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x5672a6 + "orange/img/common/f3.png\"><span class=\"btnAFlower1\">" + _0x876aed + "</span>朵花</div>";
            _0x479214.append(_0x501298);
          } else {
            {
              if (_0x973450[2].integral_count == 0) {
                _0x479214.remove();
              }
            }
          }
        }
        if (_0x973450[3].wild_flower_count) {
          var _0x479214 = $(".box2 .clearfix").eq(2);
          var _0x876aed = _0x973450[3].wild_flower_count / 100;
          if (_0x876aed != 0) {
            var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x5672a6 + "orange/img/common/f3.png\"><span class=\"btnAFlower1\">" + _0x876aed + "</span>朵花</div>";
            _0x479214.append(_0x501298);
          } else {
            if (_0x973450[3].integral_count == 0) {
              {
                _0x479214.remove();
              }
            }
          }
        }
        if (_0x973450[1].integral_count) {
          var _0x479214 = $(".box2 .clearfix").eq(0);
          var _0x876aed = _0x973450[1].integral_count;
          if (_0x876aed != 0) {
            {
              var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x3839c4 + "orange/common/list/icon_color_leaf.png\"><span class=\"btnANum1\">" + _0x876aed + "</span>积分" + "</div>";
              _0x479214.append(_0x501298);
            }
          }
        }
        if (_0x973450[2].integral_count) {
          {
            var _0x479214 = $(".box2 .clearfix").eq(1);
            var _0x876aed = _0x973450[2].integral_count;
            if (_0x876aed != 0) {
              var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x3839c4 + "orange/common/list/icon_color_leaf.png\"><span class=\"btnANum1\">" + _0x876aed + "</span>积分" + "</div>";
              _0x479214.append(_0x501298);
            }
          }
        }
        if (_0x973450[3].integral_count) {
          var _0x479214 = $(".box2 .clearfix").eq(2);
          var _0x876aed = _0x973450[3].integral_count;
          if (_0x876aed != 0) {
            var _0x501298 = "<div><img class=\"icon\" src=\"" + _0x3839c4 + "orange/common/list/icon_color_leaf.png\"><span class=\"btnANum1\">" + _0x876aed + "</span>积分" + "</div>";
            _0x479214.append(_0x501298);
          }
        }
      }
    });
    this.shareAwardConf(function (_0x30e119) {
      if (_0x30e119.status != -2) {
        var _0x3e9c1e = _0x30e119.data.share_max.getmax;
        var _0x39b48c = _0x30e119.data.share_max.maxFlower;
        if (_0x39b48c && _0x39b48c != "null") {
          _0x39b48c = parseInt(_0x39b48c);
        }
        var _0x30e119 = _0x30e119.data.integral_flower_info;
        if (_0x30e119) {
          {
            if (_0x30e119.share_num) {
              var _0x28544d = $(".sharenum").length;
              for (var _0x174bb1 = 0; _0x174bb1 < _0x28544d; _0x174bb1++) {
                if (_0x174bb1 + 1 == parseInt(_0x30e119.share_num)) {
                  {
                    $(".share-modal-sp .tr").eq(_0x174bb1).addClass("tr_act");
                    $(".sharenum").eq(_0x174bb1).addClass("sharenum_act");
                    $(".arrow_icon").eq(_0x174bb1).addClass("arrow_icon_act");
                  }
                } else {
                  $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
                  $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
                  $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
                }
              }
            } else {
              {
                for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
                  $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
                  $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
                  $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
                }
                $(".btnBFlower").html(0);
                $(".btnBNum").html(0);
                $("#shareCon").html("谢谢分享！");
              }
            }
            if (_0x39b48c != null && _0x3e9c1e != null) {
              {
                if (_0x39b48c - _0x3e9c1e <= 1.5 && _0x39b48c - _0x3e9c1e != 0) {
                  {
                    $("#shareCon").html("<div>本作品最多可通过分享获得" + _0x39b48c + "朵花</div>" + "<div>您当前已获得" + _0x3e9c1e + "朵花</div>");
                  }
                } else if (_0x39b48c - _0x3e9c1e == 0 || _0x39b48c - _0x3e9c1e < 0) {
                  {
                    $("#shareCon").html("<div>分享本作品送花已达上限</div><div>去分享其他作品试试看~</div>");
                    for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
                      {
                        $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
                        $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
                        $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
                      }
                    }
                  }
                } else {
                  var _0x2abb89 = "";
                  if (_0x30e119.wild_flower_count) {
                    {
                      $(".btnBFlower").html(_0x30e119.wild_flower_count / 100);
                      _0x2abb89 += "<div>为本作品送<img class=\"icon\" src=\"" + _0x5672a6 + "orange/img/common/f3.png\" /><span class=\"btnBFlower\">" + _0x30e119.wild_flower_count / 100 + "</span>朵花</div>";
                    }
                  }
                  if (_0x30e119.integral_count) {
                    $(".btnBNum").html(_0x30e119.integral_count);
                    _0x2abb89 += "<div>您获得<img class=\"icon\" src=\"" + _0x3839c4 + "orange/common/list/icon_color_leaf.png\" />积分<span class=\"btnBNum\">" + _0x30e119.integral_count + "</span>分</div>";
                  }
                  if (!_0x30e119.wild_flower_count && !_0x30e119.integral_count) {
                    _0x2abb89 = "谢谢分享";
                    for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
                      {
                        $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
                        $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
                        $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
                      }
                    }
                  }
                  $("#shareCon").html(_0x2abb89);
                }
              }
            } else if (!_0x30e119.share_num) {
              $(".btnBFlower").html(0);
              $(".btnBNum").html(0);
              $("#shareCon").html("谢谢分享！");
              for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
                $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
                $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
                $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
              }
            }
          }
        } else {
          {
            for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
              $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
              $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
              $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
            }
            $(".btnBFlower").html(0);
            $(".btnBNum").html(0);
            $("#shareCon").html("谢谢分享！");
          }
        }
      } else {
        $("#shareCon").html("您还没有登录哦，登录后分享获得奖励吧！");
        for (var _0x174bb1 = 0; _0x174bb1 < 3; _0x174bb1++) {
          $(".share-modal-sp .tr").eq(_0x174bb1).removeClass("tr_act");
          $(".sharenum").eq(_0x174bb1).removeClass("sharenum_act");
          $(".arrow_icon").eq(_0x174bb1).removeClass("arrow_icon_act");
        }
      }
      $(".share-modal-sp").show(50);
      $(".share-mask").show();
      _0x5e4fab.ReDirectSharetes();
    });
  };
  this.shareGamePlusFlower = function (_0x42f731, _0x55be39) {
    this.url = _0x504f1a.FLOWER_SHARE_PLUS_FLOWER + "?gindex=" + _0x3fd9a8 + "&platform=4&share_channel=" + _0x55be39.share_channel + "&share_msg_id=" + _0x55be39.share_msg_id;
    this.GetServiceData(this.url, "get", function (_0x55be39) {
      _0x42f731(_0x55be39);
    });
  };
  this.shareAllAwardConf = function (_0x4152fb) {
    {
      this.url = _0x504f1a.FLOWER_SHARE_ALL_INFO;
      if (_0x5e4fab.shareAllAwardData) {
        {
          _0x4152fb(_0x5e4fab.shareAllAwardData, true);
        }
      } else {
        {
          this.GetServiceData(this.url, "get", function (_0x1a68c8) {
            _0x5e4fab.shareAllAwardData = _0x1a68c8;
            _0x4152fb(_0x1a68c8);
          });
        }
      }
      return;
    }
  };
  this.shareAwardConf = function (_0x2a54f4) {
    this.url = _0x504f1a.FLOWER_SHARE_NOW_FLOWER + "?gindex=" + _0x3fd9a8;
    this.GetServiceData(this.url, "get", function (_0x1eea6b) {
      {
        _0x2a54f4(_0x1eea6b);
      }
    });
  };
  this.ReDirectSharetes = function () {
    var _0x349801 = $("#share-modal");
    var _0x346c97 = $(".share-modal-box");
    var _0x56b031 = $("#sso_login_modal");
    if (_0x349801 != null) {
      if (_0x349801.css("display") != "none") {
        {
          if (_0x110900.aspect_ratio == 3) {
            if (_0x110900.rotate_screen) {
              _0x349801.height($(window).height()).width($(window).width());
              _0x346c97.width(_0x349801.height() * 0.8);
              _0x346c97.css({
                "transform": "rotate(270deg)",
                "top": parseInt((_0x349801.height() - _0x346c97.height()) / 2),
                "left": parseInt((_0x349801.width() - _0x346c97.width()) / 2)
              });
            } else {
              {
                _0x349801.height("100%").width("100%");
                _0x346c97.css({
                  "-webkit-transform": "none",
                  "width": _0x349801.width() * 0.8,
                  "left": "10%",
                  "top": parseInt((_0x349801.height() - _0x346c97.height()) / 2)
                });
              }
            }
          } else {
            $(".share-modal-sp > .share-modal-box > .box2 ").css("width", "64%");
            $(".share-modal-sp > .share-modal-box > .box3 ").css({
              "padding": "0",
              "width": "34%"
            });
            $(".share-modal-sp > .share-modal-box > .box3 > ul > li ").css({
              "width": "50%",
              "margin-top": "1rem"
            });
            $("#shareCon_v").css({
              "width": "80%"
            });
            if (_0x110900.rotate_screen) {
              {
                _0x349801.height($(window).height()).width($(window).width());
                _0x346c97.width(_0x349801.height() * 0.8);
                _0x346c97.css({
                  "transform": "rotate(90deg)",
                  "top": parseInt((_0x349801.height() - _0x346c97.height()) / 2),
                  "left": parseInt((_0x349801.width() - _0x346c97.width()) / 2)
                });
              }
            } else {
              _0x349801.height("100%").width("100%");
              _0x346c97.css({
                "-webkit-transform": "none",
                "width": _0x349801.width() * 0.8,
                "left": "10%",
                "top": parseInt((_0x349801.height() - _0x346c97.height()) / 2)
              });
            }
          }
        }
      }
    }
    var _0x3f77da = $(".share-wechat-qrcode");
    if ($(".share-wechat-qrcode")[0]) {
      if (_0x110900.rotate_screen) {
        {
          if (_0x110900.aspect_ratio == 3) {
            {
              _0x3f77da.css({
                "height": "20rem",
                "width": "16rem",
                "transform-origin": "left 100%",
                "-webkit-transform": "rotate(270deg)",
                "left": "90%",
                "top": "45%"
              });
            }
          } else {
            {
              _0x3f77da.css({
                "height": "20rem",
                "width": "16rem",
                "margin-top": $(window).height() / 2 - _0x3f77da.height() / 2,
                "-webkit-transform": "rotate(90deg)",
                "top": 0,
                "margin-left": "-8rem"
              });
            }
          }
        }
      } else {
        {
          if (_0x110900.aspect_ratio == 3) {
            {
              _0x3f77da.css({
                "height": "20rem",
                "width": "16rem",
                "-webkit-transform": "none",
                "left": "50%",
                "top": "55%"
              });
            }
          } else {
            _0x3f77da.css({
              "height": "20rem",
              "width": "16rem",
              "margin-top": "0",
              "-webkit-transform": "none",
              "left": "50%",
              "top": ($(window).height() - _0x3f77da.height()) / 2
            });
          }
        }
      }
    }
  };
  this.openShareWindow = function (_0x5e02ac, _0x876f80) {
    var _0x2332ae = [],
      _0x541944;
    for (_0x541944 in _0x876f80) {
      _0x2332ae.push(_0x541944 + "=" + encodeURIComponent(_0x876f80[_0x541944] || ""));
    }
    _0x2332ae = _0x5e02ac + _0x2332ae.join("&");
    window.open(_0x2332ae, "_blank");
  };
  this.GetServiceData = function (_0x325120, _0xa85c17, _0x5acfb3) {
    var _0x5e4fab = this;
    $.ajax({
      "url": _0x325120,
      "type": "get",
      "dataType": "jsonp",
      "jsonp": "jsonCallBack",
      "success": function (_0x27dfaa) {
        _0x5acfb3(_0x27dfaa);
      },
      "error": function (_0xb673d8) {
        console.log(_0xb673d8);
        _0x5acfb3("fail");
      }
    });
  };
}
var _0x31effc = new _0x35259d();
var _0x20c8a8 = function (_0xeb7c09, _0x21abc2) {
  var _0x1d9c24 = this;
  if (!document.getElementById(_0xeb7c09)) {
    {
      return false;
    }
  }
  var _0x1a5c1e = {
    "qq": {
      "forbid": 0,
      "lower": 1,
      "higher": 2
    },
    "uc": {
      "forbid": 0,
      "allow": 1
    }
  };
  var _0x457886 = navigator.appVersion;
  _0x1d9c24.isqqBrowser = _0x457886.split("MQQBrowser/").length > 1 ? _0x1a5c1e.qq.higher : _0x1a5c1e.qq.forbid;
  _0x1d9c24.isucBrowser = _0x457886.split("UCBrowser/").length > 1 ? _0x1a5c1e.uc.allow : _0x1a5c1e.uc.forbid;
  _0x1d9c24.isWeixin = false;
  var _0x106804 = {
    "uc": "",
    "qq": ""
  };
  _0x21abc2 = _0x21abc2 || {};
  this.elementNode = _0xeb7c09;
  this.url = _0x21abc2.url || document.location.href || "";
  this.title = _0x21abc2.title || document.title || "";
  this.desc = _0x21abc2.desc || document.title || "";
  this.img = _0x21abc2.img || document.getElementsByTagName("img").length > 0 && document.getElementsByTagName("img")[0].src || "";
  this.img_title = _0x21abc2.img_title || document.title || "";
  this.from = _0x21abc2.from || window.location.host || "";
  this.ucAppList = {
    "sinaWeibo": ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"],
    "weixin": ["kWeixin", "WechatFriends", 1, "微信好友"],
    "weixinFriend": ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"],
    "QQ": ["kQQ", "QQ", "4", "QQ好友"],
    "QZone": ["kQZone", "QZone", "3", "QQ空间"]
  };
  this.share = function (_0xe57c2e) {
    {
      var _0x3a62b6 = this.title,
        _0x382148 = this.url,
        _0x2e0866 = this.desc,
        _0x245639 = this.img,
        _0x442572 = this.img_title,
        _0x32683b = this.from;
      if (_0x1d9c24.isucBrowser) {
        _0xe57c2e = _0xe57c2e == "" ? "" : platform_os == "iPhone" ? this.ucAppList[_0xe57c2e][0] : this.ucAppList[_0xe57c2e][1];
        if (_0xe57c2e == "QZone") {
          {
            B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url=" + _0x245639 + "&title=" + _0x3a62b6 + "&description=" + _0x2e0866 + "&url=" + _0x382148 + "&app_name=" + _0x32683b;
            k = document.createElement("div");
            k.style.visibility = "hidden";
            k.innerHTML = "<iframe src=\"" + B + "\" scrolling=\"no\" width=\"1\" height=\"1\"></iframe>";
            document.body.appendChild(k);
            setTimeout(function () {
              k && k.parentNode && k.parentNode.removeChild(k);
            }, 5000);
          }
        }
        if (typeof ucweb != "undefined") {
          ucweb.startRequest("shell.page_share", [_0x3a62b6, _0x3a62b6, _0x382148, _0xe57c2e, "", "@" + _0x32683b, ""]);
        } else {
          if (typeof ucbrowser != "undefined") {
            ucbrowser.web_share(_0x3a62b6, _0x3a62b6, _0x382148, _0xe57c2e, "", "@" + _0x32683b, "");
          } else {}
        }
      } else {
        {
          if (_0x1d9c24.isqqBrowser && !_0x1d9c24.isWeixin) {
            _0xe57c2e = _0xe57c2e == "" ? "" : this.ucAppList[_0xe57c2e][2];
            var _0x1b978c = {
              "url": _0x382148,
              "title": _0x3a62b6,
              "description": _0x2e0866,
              "img_url": _0x245639,
              "img_title": _0x442572,
              "to_app": _0xe57c2e,
              "cus_txt": _0x2e0866
            };
            _0x1b978c = _0xe57c2e == "" ? "" : _0x1b978c;
            if (typeof browser != "undefined") {
              {
                if (typeof browser.app != "undefined" && _0x1d9c24.isqqBrowser == _0x1a5c1e.qq.higher) {
                  browser.app.share(_0x1b978c);
                }
              }
            } else {
              if (typeof window.qb != "undefined" && _0x1d9c24.isqqBrowser == _0x1a5c1e.qq.lower) {
                {
                  window.qb.share(_0x1b978c);
                }
              } else {}
            }
          } else {}
        }
      }
    }
  };
  this.html = function () {};
  this.isloadqqApi = function () {
    {
      if (_0x1d9c24.isqqBrowser) {
        var _0x377775 = "http://3gimg.qq.com/html5/js/qb.js";
        var _0x4bcbb7 = document.createElement("script");
        var _0x2ea7a6 = document.getElementsByTagName("body")[0];
        _0x4bcbb7.setAttribute("src", _0x377775);
        _0x2ea7a6.appendChild(_0x4bcbb7);
      }
    }
  };
  this.getPlantform = function () {
    ua = navigator.userAgent;
    if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1) {
      {
        return "iPhone";
      }
    }
    return "Android";
  };
  this.is_weixin = function () {
    var _0x161478 = _0x457886.toLowerCase();
    if (_0x161478.match(/MicroMessenger/i) == "micromessenger") {
      {
        return true;
      }
    } else {
      {
        return false;
      }
    }
  };
  this.getVersion = function (_0x1bf752) {
    var _0x8cf9f3 = _0x1bf752.split("."),
      _0x299dd0 = parseFloat(_0x8cf9f3[0] + "." + _0x8cf9f3[1]);
    return _0x299dd0;
  };
  this.init = function () {
    platform_os = this.getPlantform();
    _0x106804.qq = _0x1d9c24.isqqBrowser ? this.getVersion(_0x457886.split("MQQBrowser/")[1]) : 0;
    _0x106804.uc = _0x1d9c24.isucBrowser ? this.getVersion(_0x457886.split("UCBrowser/")[1]) : 0;
    _0x1d9c24.isWeixin = this.is_weixin();
    if (_0x1d9c24.isqqBrowser && true && platform_os == "iPhone" || _0x1d9c24.isqqBrowser && true && platform_os == "Android") {
      {
        _0x1d9c24.isqqBrowser = _0x1a5c1e.qq.forbid;
      }
    } else {
      {
        if (_0x1d9c24.isqqBrowser && true && platform_os == "Android") {
          {
            _0x1d9c24.isqqBrowser = _0x1a5c1e.qq.lower;
          }
        } else {
          {
            if (_0x1d9c24.isucBrowser && (true && platform_os == "iPhone" || true && platform_os == "Android")) {
              {
                _0x1d9c24.isucBrowser = _0x1a5c1e.uc.forbid;
              }
            }
          }
        }
      }
    }
    this.isloadqqApi();
    if (_0x1d9c24.isqqBrowser || _0x1d9c24.isucBrowser) {} else {}
  };
  this.init();
  return this;
};
var _0x507614 = "";
var _0x1f253d = "";
$(function () {
  _0x1f253d = _0x3839c4 + "orange/title/" + guid + "_" + ver + ".jpg!470x270";
  var _0x3a408d = _0x504f1a.GAME_SHARE_HREF + "/" + _0x3fd9a8 + "?stype=1";
  $(".share-modal-colse").click(function () {
    $(".share-modal-sp").hide();
    $(".share-mask").hide();
  });
  $(".menu_close").click(function () {
    {
      $(this).parents(".pop_up_box").hide();
      $("#startLogin").hide();
    }
  });
  $(".rpg_menu ,#back_tools").click(function (_0x16820a) {
    {
      _0x16820a.stopPropagation();
    }
  });
  var _0x43161c = $(".share-modal-box").height;
  var _0x66bc7a = document.body.clientHeight;
  $(".share-modal-box").css("top", (_0x66bc7a - _0x43161c) / 2);
  var _0x54778d = {
    "url": _0x3a408d,
    "title": _0x507614,
    "desc": "",
    "img": _0x1f253d,
    "img_title": _0x507614,
    "from": "",
    "share_msg_id": 0,
    "share_channel": 0
  };
  var _0x4727a8 = new _0x20c8a8("share-modal", _0x54778d);
  window.shareModal = function (_0x4d83fb) {
    var _0x498a5a = $(".share-modal"),
      _0x3c8237 = _0x498a5a.find(".share-modal-box");
    if (_0x4d83fb == "show") {
      if (_0x498a5a.hasClass("showed")) {
        return false;
      }
      _0x498a5a.addClass("showed");
      _0x498a5a.css({
        "display": "block"
      });
      _0x3c8237.css({
        "margin-top": "0",
        "margin-left": "0",
        "margin-top": _0x3c8237.outerHeight() / -2,
        "margin-left": _0x3c8237.outerWidth() / -2
      });
    } else if (_0x4d83fb == "hide") {
      {
        _0x498a5a.removeClass("showed");
        _0x498a5a.css("display", "none");
      }
    }
    _0x498a5a.find(".share-modal-colse").click(function () {
      {
        window.shareModal("hide");
      }
    });
  };
  $(".js-share").click(function () {
    {
      window.shareModal("show");
    }
  });
  $(".share-modal-itemlist > li").click(function () {
    var _0x869e32 = _0x3a408d;
    var _0x272e8d = _0x110900.userInfos.uid.toString();
    if ($.isEmptyObject(_0x110900.userInfos) === false && _0x272e8d) {
      _0x869e32 += "&starget=" + _0x3fd9a8 + "&sflag=" + Base64.encodeURL(_0x272e8d);
      _0x507614 = _0x110900.gameMenu.gameInfoData.gname;
    }
    var _0x1a8266 = _0x110900.gameMenu.gameInfoData.play_times;
    _0x31effc.shareWps = {
      "weibo_1": "#橙光推荐# 厉害了我的哥，最近有" + _0x1a8266 + "个小伙伴都在疯玩.....（分享自@橙光官方微博）立即去玩：",
      "weibo_2": "#橙光推荐# 哈喽！推荐你一个超好玩的东西，身边人都在玩！（分享自@橙光官方微博）",
      "weibo_3": "#橙光推荐# 这是我见过的最精彩的故事，没有之一！（分享自@橙光官方微博）作品地址：",
      "qzone_4": "厉害了我的哥，最近有" + _0x1a8266 + "人都在疯玩.....",
      "qzone_5": "哈喽！推荐你一个超好玩的东西，身边人都在玩！ ",
      "qzone_6": "玩着玩着，竟有身临其境的感觉，难怪这么多人玩！ ",
      "qq_7": "厉害了我的哥，最近有" + _0x1a8266 + "人都在疯玩..... ",
      "qq_8": "哈喽！推荐你一个超好玩的东西，身边人都在玩！",
      "qq_9": "这是我见过的最精彩的故事，没有之一！ ",
      "wechat_10": "厉害了我的哥，最近有" + _0x1a8266 + "人都在疯玩..... ",
      "wechat_11": "哈喽！推荐你一个超好玩的东西，身边人都在玩！",
      "wechat_12": "这是我见过的最精彩的故事，没有之一！"
    };
    _0x54778d = {
      "url": _0x869e32,
      "title": "曲折的作品剧情太过瘾，橙光作品【" + _0x507614 + "】等你好久啦！戳链接马上试玩~",
      "desc": "曲折的作品剧情太过瘾，橙光作品【" + _0x507614 + "】等你好久啦！戳链接马上试玩~",
      "img": _0x1f253d,
      "img_title": "曲折的作品剧情太过瘾，橙光作品【" + _0x507614 + "】等你好久啦！戳链接马上试玩~",
      "from": ""
    };
    var _0x6b0bb2 = $(this).data("share") || "weibo";
    if (_0x6b0bb2 == "weibo") {
      {
        var _0x8ebc18 = parseInt(MathRandom(1, 4));
        _0x54778d.share_msg_id = _0x8ebc18;
        _0x54778d.title = _0x31effc.shareWps["weibo_" + _0x8ebc18];
        _0x54778d.desc = _0x31effc.shareWps["weibo_" + _0x8ebc18];
        _0x54778d.img_title = _0x507614;
        _0x54778d.share_channel = 1;
      }
    } else if (_0x6b0bb2 == "qzone") {
      {
        var _0x8ebc18 = parseInt(MathRandom(4, 7));
        _0x54778d.share_msg_id = _0x8ebc18;
        _0x54778d.title = _0x507614;
        _0x54778d.desc = _0x31effc.shareWps["qzone_" + _0x8ebc18];
        _0x54778d.img_title = _0x31effc.shareWps["qzone_" + _0x8ebc18];
        _0x54778d.share_channel = 2;
      }
    } else if (_0x6b0bb2 == "qq") {
      var _0x8ebc18 = parseInt(MathRandom(7, 10));
      _0x54778d.share_msg_id = _0x8ebc18;
      _0x54778d.title = _0x507614;
      _0x54778d.desc = _0x31effc.shareWps["qq_" + _0x8ebc18];
      _0x54778d.img_title = _0x31effc.shareWps["qq_" + _0x8ebc18];
      _0x54778d.share_channel = 3;
    } else if (_0x6b0bb2 == "wechat") {
      {
        var _0x8ebc18 = parseInt(MathRandom(10, 13));
        _0x54778d.share_msg_id = _0x8ebc18;
        _0x54778d.title = _0x507614;
        _0x54778d.desc = _0x31effc.shareWps["wechat_" + _0x8ebc18];
        _0x54778d.img_title = _0x31effc.shareWps["wechat_" + _0x8ebc18];
        _0x54778d.share_channel = 4;
      }
    }
    _0x869e32 = _0x869e32 + "&platform=4&share_channel=" + _0x54778d.share_channel + "&share_msg_id=" + _0x54778d.share_msg_id;
    _0x4727a8 = new _0x20c8a8("share-modal", _0x54778d);
    switch ($(this).data("share")) {
      case "weibo":
        _0x31effc.openShareWindow("http://service.weibo.com/share/share.php?", {
          "appkey": "2pcGaX",
          "url": _0x869e32,
          "title": _0x54778d.title,
          "pic": _0x1f253d
        });
        break;
      case "qzone":
        _0x31effc.openShareWindow("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?", {
          "url": _0x869e32,
          "title": _0x54778d.title,
          "summary": _0x54778d.desc,
          "pics": _0x1f253d,
          "desc": "超好玩，根本停不下来！"
        });
        break;
      case "wechat":
        if (_0x4727a8.isqqBrowser) {
          {
            _0x4727a8.share("weixin");
          }
        } else {
          {
            var _0x356f31 = $(".share-modal"),
              _0x27c380 = _0x356f31.find(".share-modal-box");
            _0x27c380.hide();
            _0x869e32 = encodeURIComponent(_0x869e32);
            $(".share-modal").append("<div class=\"share-wechat-qrcode\" style=\"border-radius:8px;box-shadow: 0 0 6px 0 rgba(0,0,0,0.4);height:24rem;width:20rem;position:absolute;left:50%;top:50%;margin-left:-10rem;margin-top:-12rem;background:#FFF;\"><div class=\"share-wechat-qrcode-close\" style=\"position: absolute; right: -0.8rem; top: -0.8rem; height: 2rem; width: 2rem; border: 1px solid #FFF; border-radius: 1rem; box-shadow: 0 0 4px 0 rgba(0,0,0,0.6); background: url(//c1.cgyouxi.com/website/orange/img/common/share/close.png) no-repeat center center #FFF; background-size: 100%;\"></div><img src=\"https://www.66rpg.com/redirect/make_code_url?size=6&url=" + _0x869e32 + "\" style=\"width:92%;display:block;margin:auto;margin-top:0.8rem;\" /><div style=\"height:2rem;padding:0 4%;\"><span style=\"vertical-align:middle;\">截屏后用微信识别，分享到朋友圈</span></div></div>");
            _0x54778d.share_channel = -3;
            _0x31effc.ReDirectSharetes();
          }
        }
        break;
      case "qq":
        if (_0x4727a8.isqqBrowser) {
          {
            _0x4727a8.share("QQ");
          }
        } else {
          _0x31effc.openShareWindow("http://connect.qq.com/widget/shareqq/index.html?url=" + _0x869e32 + "&title=" + _0x54778d.title + "&summary=" + _0x54778d.desc + "&pics=" + _0x1f253d, {});
        }
        break;
    }
    _0x31effc.shareAwardConf(function (_0x60c846) {
      {
        if (_0x60c846.status != -2) {
          var _0x60c846 = _0x60c846.data.integral_flower_info;
          var _0x1abbdb = {
            "share_channel": _0x54778d.share_channel,
            "share_msg_id": _0x54778d.share_msg_id
          };
          if (_0x60c846 && _0x60c846.share_num && _0x60c846.share_num <= 3) {
            {
              _0x31effc.shareGamePlusFlower(function (_0x60c846) {
                {
                  if (_0x60c846.status == 1) {
                    {
                      updateFlower();
                    }
                  }
                }
              }, _0x1abbdb);
            }
          } else {
            _0x31effc.shareGamePlusFlower(function (_0x60c846) {
              if (_0x60c846.status == 1) {}
            }, _0x1abbdb);
          }
        }
      }
    });
  });
  $(".share-modal").delegate(".share-wechat-qrcode-close", "click", function () {
    $(".share-wechat-qrcode").remove();
    $(".share-modal > .share-modal-box").show();
    $(".share-mask").hide();
    window.shareModal("hide");
  });
});
function _0x4df729() {
  var _0x203744 = this;
  this.userCoin = 11;
  this.sendFlowerState = function (_0x1817d1, _0x16f52e) {
    {
      if (_0x203744.userCoin && _0x203744.userCoin.coin2) {
        _0x1817d1 && _0x1817d1(_0x203744.userCoin.coin2.coin_count, _0x16f52e);
      } else {
        {
          var _0x2e6cfa = _0x504f1a.USER_CJH_INFO;
          var _0x79f461 = {};
          var _0xe1a784 = function (_0x446b18) {
            {
              if (_0x446b18.status == 1) {
                _0x203744.userCoin = _0x446b18.data;
                _0x1817d1 && _0x1817d1(_0x203744.userCoin.coin2.coin_count, _0x16f52e);
              } else {
                _0x1817d1 && _0x1817d1(-1, _0x16f52e);
              }
            }
          };
          var _0x1ddfa3 = function () {
            {
              _0x1817d1 && _0x1817d1("error");
            }
          };
          if (_0x16f52e) {
            {
              _0x79f461.flower_place = _0x16f52e;
            }
          }
          getAjax(_0x2e6cfa, "get", _0x79f461, _0xe1a784, _0x1ddfa3, true, _0x16f52e);
        }
      }
    }
  };
  this.up_Sent_Flower = function (_0x4f9051, _0x435bf5, _0x5463be) {
    {
      var _0x173df4 = _0x504f1a.FLOWER_SEND_FLOWER;
      var _0x4abce6 = {
        "gindex": _0x3fd9a8,
        "num": _0x4f9051
      };
      if (_0x5463be) {
        _0x4abce6.flower_place = _0x5463be;
      }
      var _0x5b77f8 = function (_0x4abce6) {
        {
          if (_0x4abce6.status == 1) {
            _0x203744.userCoin.coin2.coin_count -= parseInt(_0x4f9051);
            _0x203744.userCoin.coin1.coin_count += 30 * _0x4f9051;
            _0x435bf5 && _0x435bf5("送花成功了");
          } else if (_0x4abce6.status == -2000) {
            {
              _0x435bf5 && _0x435bf5(_0x4abce6.status);
            }
          } else {
            {
              _0x435bf5 && _0x435bf5(_0x4abce6.status);
            }
          }
        }
      };
      var _0x563428 = function () {
        {
          _0x435bf5 && _0x435bf5("error");
        }
      };
      getAjax(_0x173df4, "get", _0x4abce6, _0x5b77f8, _0x563428, true, _0x5463be);
    }
  };
  this.go_To_Pay = function () {
    var _0x55f7b6 = document.getElementById("mainFrameDiv");
    if (!_0x55f7b6) {
      var _0x55f7b6 = document.createElement("div");
      _0x55f7b6.id = "mainFrameDiv";
      document.body.appendChild(_0x55f7b6);
    }
    _0x55f7b6.style.display = "block";
    window.location.href = webUrl + "/home/pay?platForm=h5";
  };
}
_0x110900.sendFlower = new _0x4df729();
function _0x44fe24() {
  var _0x576c43 = this;
  this.loginCallBack;
  this.getUserInfo = function () {
    if (_0x110900.platform == 0) {
      {
        return window.parent.$("#data").data("user");
      }
    } else {
      {
        return $("#data").data("user");
      }
    }
  };
  this.init = function (_0x5cd54b) {
    {
      var _0x4eb18e = this.getUserInfo();
      var _0x4a9933 = function () {
        initUserData();
        _0x5cd54b && _0x5cd54b();
      };
      _0x110900.loginStatus = false;
      _0x110900.userInfos.uid = 0;
      if (_0x4eb18e) {
        _0x110900.userInfos = JSON.parse(JSON.stringify(_0x4eb18e));
        _0x110900.userInfos.uid = parseInt(_0x4eb18e.uid);
        if (_0x110900.userInfos.uid > 0) {
          _0x110900.loginStatus = true;
          _0x110900.sendFlower.sendFlowerState(_0x4a9933);
        }
      }
      if (!_0x110900.loginStatus) {
        _0x4a9933();
      }
    }
  };
  this.midLogin = function (_0x44ac13) {
    if (_0x328b72.WEB) {
      window.parent.asUserOperate.userLogin();
    } else {
      {
        location.href = "/sso/mobileLogin?curUrl=" + encodeURIComponent(location.href.slice());
      }
    }
    _0x576c43.loginCallBack = _0x44ac13;
  };
  this.clearUserInfo = function () {
    _0x110900.userInfos = {
      "uid": 0,
      "uname": "",
      "account_info": "",
      "account_type": "",
      "angel_logo": 0,
      "author_level": "",
      "avatar": "",
      "client_type": "",
      "email": "",
      "login_type": "",
      "mobile": "",
      "nick_name": "",
      "nick_name_set": 0,
      "regdate": "",
      "screen_game_ad": 0,
      "screen_scroll_ad": 0,
      "session_loginday": "",
      "status": "",
      "super_title": "",
      "temp_vip_end_time": "",
      "temp_vip_level": "",
      "user_exp": "",
      "user_level": "",
      "username": "",
      "vip_level": ""
    };
    _0x110900.loginStatus = false;
  };
}
_0x110900.login = new _0x44fe24();
loginSuc = function () {
  if (isInit) {
    _0x110900.login.init(function () {
      {
        location.reload();
      }
    });
  }
};
loginOut = function () {
  console.log("登录退出");
  location.reload();
};
ajaxLoginCall = function () {
  _0x110900.login.init(function () {
    {
      initGame();
    }
  });
};
notLoginCall = function () {
  console.log("没有登录进入游戏");
  _0x110900.login.init(function () {
    {
      initGame();
    }
  });
};
var _0x3fd9a8;
function _0x310952() {
  this.ANDROID = false;
  this.H5 = false;
  this.WEB = false;
  this.IOS = false;
  this.isGoldOrange = 0;
  this.isMini = GetQueryString("where") == "mini";
  this.shareChannel = GetQueryString("share_channel");
  var _0x5b264b = GetQueryString("ohp");
  if (_0x5b264b) {
    {
      var _0x239198 = window.location.href.replaceAll("/game?", "");
      var _0x425628 = _0x239198.split("?");
      if (_0x425628[1]) {
        var _0xfe1df8 = _0x239198.split("/");
        _0x3fd9a8 = _0xfe1df8[_0xfe1df8.length - 1].split("?")[0];
      } else {
        var _0xfe1df8 = _0x239198.split("/");
        _0x3fd9a8 = _0xfe1df8[_0xfe1df8.length - 1];
      }
    }
  } else {
    {
      var _0x239198 = window.location.href;
      var _0x425628 = _0x239198.split("?");
      if (_0x425628[0]) {
        var _0xfe1df8 = _0x425628[0].split("/");
      } else {
        var _0xfe1df8 = _0x425628[0].split("/");
      }
      _0x3fd9a8 = _0xfe1df8[_0xfe1df8.length - 1];
      if (_0x3fd9a8.toLowerCase().indexOf(".") != -1) {
        {
          var _0x17c193 = _0x3fd9a8.split(".");
          _0x3fd9a8 = _0x17c193[0];
        }
      }
    }
  }
  this.init = function () {
    var _0xdfa174 = GetQueryString("mark");
    if (_0xdfa174 == "isFlash") {
      {
        this.WEB = true;
        _0x110900.platform = 0;
      }
    } else if (_0xdfa174 && _0xdfa174.toLowerCase() == "ios") {
      this.IOS = true;
      _0x110900.platform = 1;
    } else if (_0xdfa174 == "android") {
      this.ANDROID = true;
      _0x110900.platform = 2;
    } else {
      {
        this.H5 = true;
        _0x110900.platform = 4;
      }
    }
  };
  this.sdkInit = function () {
    var _0x53e979 = GetQueryString("platform");
    if (_0x53e979 == "0") {
      {
        this.WEB = true;
        _0x110900.platform = 0;
      }
    } else if (_0x53e979 == "1") {
      {
        this.IOS = true;
        _0x110900.platform = 1;
      }
    } else if (_0x53e979 == "2") {
      this.ANDROID = true;
      _0x110900.platform = 2;
    } else {
      {
        this.H5 = true;
        _0x110900.platform = 4;
      }
    }
  };
  if (channel_id.length > 0) {
    this.sdkInit();
  } else {
    this.init();
  }
  if (this.WEB) {
    this.isGoldOrange = GetQueryString("is_gold_orange");
  }
}
var _0x328b72 = new _0x310952();
window.getAjax = function (_0x106bee, _0x473b17, _0x3f8742, _0x1d7cdb, _0x5758eb, _0x2d03b1) {
  if (_0x2d03b1) {
    {
      $.ajax({
        "url": _0x106bee,
        "type": "get",
        "data": _0x3f8742,
        "dataType": "jsonp",
        "jsonp": "jsonCallBack",
        "success": function (_0x3f8742) {
          _0x1d7cdb && _0x1d7cdb(_0x3f8742);
        },
        "error": function (_0x3f8742) {
          {
            _0x5758eb && _0x5758eb(_0x3f8742);
          }
        }
      });
    }
  } else {
    {
      $.ajax({
        "url": _0x106bee,
        "type": _0x473b17,
        "data": _0x3f8742,
        "dataType": "json",
        "success": function (_0x3f8742) {
          _0x1d7cdb && _0x1d7cdb(_0x3f8742);
        },
        "error": function (_0x3f8742) {
          _0x5758eb && _0x5758eb(_0x3f8742);
        }
      });
    }
  }
};
function _0x5596a2(_0x3b63ab) {
  var _0x1f9860 = window.location.protocol + "//www.66rpg.com/ajax/program/get_program";
  var _0x41bfb4 = {
    "gindex": window.commonGIndex,
    "program": 1
  };
  getAjax(_0x1f9860, "json", _0x41bfb4, function (_0x2a4d5f) {
    {
      if (parseInt(_0x2a4d5f.status) == 1 && _0x2a4d5f.data && _0x2a4d5f.data.gindex) {
        {
          _0x3b63ab && _0x3b63ab(true);
        }
      } else {
        {
          _0x3b63ab && _0x3b63ab(false);
        }
      }
    }
  }, function (_0x41bfb4) {
    alert("网络异常，请刷新重试！");
  }, true);
}
function _0x7771d6(_0x1429a7, _0x43d85f, _0x4248d1) {
  window.parent.payModel.init(_0x1429a7, _0x43d85f, _0x4248d1);
}
function _0xd728ae() {
  window.parent.getLimitFreeState();
}
function _0x25412f(_0x43b1a7) {}
function _0x2c2cf6() {
  window.location.reload();
}
function _0x1e5636(_0x1e63df, _0x5521d) {
  let _0x4536fb = JSON.stringify({
    "origin_name": _0x1e63df
  });
  window.parent.showRenameBox(_0x4536fb);
  _0x110900.okCallback = _0x5521d;
}
function _0x583a84(_0x20fbf6) {
  _0x110900.okCallback && _0x110900.okCallback(_0x20fbf6);
}
_0xodQ = "jsjiami.com.v6";