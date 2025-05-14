
import { n as _0x24ad8d, o as _0x1ba002, p as _0x33ef26, q as _0x2df7c0, g as _0x342d90, v as _0x582f7f, w as _0x46fce9, x as _0x177678, y as _0x2e2f8f, z as _0x82467, A as _0x7c7675, C as _0x31cbf4, D as _0x2a9b17, E as _0x191422, F as _0x2987d5, G as _0x50c6e2, f as _0x337643, m as _0xe5de93, t as _0x5607b0, H as _0x4db8ad, e as _0x4e57d8, M as _0x291717, I as _0x3c4dc0, J as _0xb3fff7, K as _0x5ea033, s as _0x445bc8, L as _0x479c1e, N as _0x349b8d, O as _0x77f36, b as _0x2638d6, P as _0x558d8b } from "./index.5d21018c.js";
import { Q as _0x278fa7, T as _0x6d01ac, D as _0x1b5c55, B as _0xde5847, a as _0x43f8da, I as _0x1e17db, b as _0x52aff7, P as _0x3a24a4, c as _0x32c1ea, d as _0x25518e, e as _0x1dc03e, f as _0x21b258, g as _0x343352, h as _0x2857f3, M as _0x3fd5b5, W as _0x2f90c4 } from "./arco.min.d6f6abcd.js";
const _0xaf3011 = {
  class: "w-full px-2"
};
const _0xa0b157 = {
  class: "mb-1 layout-slide"
};
const _0x3e31c8 = {
  class: ""
};
const _0x5a668b = {
  class: "layout-slide mb-2 w-full"
};
const _0x692add = {
  class: "layout-items-center"
};
const _0x5392a0 = {
  class: "user-table"
};
const _0xd1ab1d = {
  class: "layout-slide mb-1"
};
const _0x2e4efb = {
  class: ""
};
const _0x519da4 = {
  class: "layout-items-center"
};
const _0x103e76 = {
  class: "w-[120px] layout-items-center mr-2"
};
const _0x26de86 = {
  class: "w-[160px]"
};
const _0x44097d = {
  class: "layout-items-center"
};
const _0x37e8b5 = ["src"];
const _0x4a5e3f = {
  class: "ml-2 truncate"
};
const _0x226f1c = {
  key: 0,
  class: "whitespace-nowrap flex"
};
const _0x145ed8 = {
  class: "layout-items-center"
};
const _0x3ac5d5 = {
  class: "custom-pagination"
};
const _0x4d383e = _0x177678("div", {
  class: "ml-2 whitespace-nowrap"
}, " 每页条数： ", -1);
const _0x51e163 = {
  class: "w-[120px]"
};
const _0x570b7c = {
  __name: "UserList",
  setup(_0xaf881f, {
    expose: _0x57fc7e
  }) {
    const _0x1c549f = _0x24ad8d([]);
    const _0x1627db = _0x24ad8d(false);
    const _0x56df78 = _0x24ad8d({
      pageSize: 10,
      size: "small",
      total: 0,
      current: 1
    });
    const _0x100353 = _0x24ad8d([]);
    const _0x24b8fb = _0x1ba002({
      type: "checkbox",
      showCheckedAll: true,
      onlyCurrent: false
    });
    const _0x1efe1b = _0x24ad8d("all");
    const _0x3411e4 = _0x24ad8d(0);
    const _0x76b43 = _0x24ad8d("");
    const _0x430c7f = _0x24ad8d("");
    const _0x260459 = new _0x278fa7({
      concurrent: 1,
      interval: 300,
      start: true
    });
    const _0x42e2e1 = _0xa4ca9f => {
      _0x56df78.value.current = 1;
      _0x1efe1b.value = _0xa4ca9f;
    };
    const _0x3bdd12 = async _0x2bd3a0 => {
      const _0x2dacac = _0x1c549f.value.find(_0x16fde1 => _0x16fde1.mid === _0x2bd3a0);
      _0x2dacac && (_0x430c7f.value = _0x2dacac.nickname || _0x2dacac.mid);
    };
    const _0x24c877 = async () => {
      _0x1627db.value = true;
      const _0x17f31a = await _0x337643();
      _0x1c549f.value = _0x17f31a;
      _0x56df78.value.total = _0x17f31a.length;
      _0x3411e4.value = _0x1c549f.value.length;
      const _0x1ac28a = await _0xe5de93("DedeUserID");
      _0x1ac28a && _0x3bdd12(_0x1ac28a);
    };
    const _0x363269 = _0x24ad8d(false);
    const _0x39861f = _0x24ad8d(0);
    const _0x296e66 = _0x505fe0 => {
      _0x505fe0 || (_0x505fe0 = [..._0x1c549f.value].slice(_0x39861f.value));
      _0x505fe0.forEach((_0x14bcb8, _0x4b0e05) => {
        _0x260459.enqueue(() => new Promise(_0x36747d => {
          _0x5607b0(_0x14bcb8).then(() => {
            _0x4db8ad(_0x14bcb8.mid).then(async _0x42b1fb => {
              await _0x4e57d8({
                mid: String(_0x14bcb8.mid),
                face: _0x42b1fb.face,
                nickname: _0x42b1fb.name,
                silence: _0x42b1fb.silence,
                level_exp: _0x42b1fb.level_exp,
                level: _0x42b1fb.level,
                coins: _0x42b1fb.coins,
                status: _0x42b1fb.silence === 1 ? "已封禁" : "正常"
              }).then(() => {
                _0x291717.success("用户【" + _0x14bcb8.mid + "】数据更新成功");
                _0x24c877();
              });
            }).catch(_0x36c3d3 => {
              _0x36c3d3.message === "账号未登录" && _0x4e57d8({
                mid: String(_0x14bcb8.mid),
                status: "已掉线"
              }).then(() => {
                _0x24c877();
              });
            }).finally(() => {
              _0x36747d();
            });
          });
        }));
      });
    };
    const _0x494c13 = () => {
      let _0x4547ca = [..._0x1c549f.value];
      _0x100353.value.length ? (_0x4547ca = _0x1c549f.value.filter(_0x2abe1b => _0x100353.value.includes(String(_0x2abe1b.mid))), _0x296e66(_0x4547ca)) : _0x363269.value = true;
    };
    const _0x2f5016 = _0x24ad8d("");
    const _0x14ade7 = _0x24ad8d(false);
    const _0x7b39c0 = () => {
      _0x14ade7.value = true;
    };
    const _0x42984d = async () => {
      if (!_0x2f5016.value) {
        _0x291717.error("请输入视频BV号");
        return;
      }
      (await _0x337643()).forEach((_0xbcafe6, _0x36a62a) => {
        _0x260459.enqueue(async () => (await _0x5607b0(_0xbcafe6), await _0x3c4dc0({
          bvid: _0x2f5016.value,
          csrf: _0xbcafe6.csrf
        }).then(_0xf712e0 => {
          _0x291717.success("用户" + _0xbcafe6.nickname + "已观看视频");
        })));
      });
      _0x260459.on("end", () => {
        _0x291717.success("全部已完成");
      });
    };
    const _0x46c105 = async _0x4e6505 => {
      _0x5607b0(_0x4e6505, true);
      _0x3bdd12(_0x4e6505.mid);
    };
    const _0x2590cf = _0x44fa4f => {
      const _0x2d75ce = _0xb3fff7(_0x44fa4f);
      navigator.clipboard.writeText(_0x2d75ce).then(() => {
        _0x291717.success("复制成功");
      });
    };
    const _0x182b05 = _0x13c427 => {
      _0x5ea033(_0x13c427).then(() => {
        _0x291717.success("删除成功");
        _0x24c877();
      });
    };
    const _0x41155b = () => {
      const _0x18e937 = [..._0x1c549f.value].filter(_0x3250e0 => _0x3250e0.status !== "已掉线" && _0x3250e0.status !== "已封禁");
      _0x445bc8("userList", _0x18e937).then(() => {
        _0x24c877();
        _0x291717.success("清空全部死号成功");
      });
    };
    const _0x18993b = () => {
      if (_0x100353.value.length === 0) {
        _0x291717.error("请先选择账号");
        return;
      }
      const _0x4dc821 = [..._0x1c549f.value];
      _0x100353.value.forEach(_0x5cb978 => {
        const _0x4edb67 = _0x4dc821.findIndex(_0x22c1e2 => String(_0x22c1e2.mid) === _0x5cb978);
        _0x4edb67 > -1 && _0x4dc821.splice(_0x4edb67, 1);
      });
      _0x445bc8("userList", _0x4dc821).then(() => {
        _0x24c877();
        _0x291717.success("删除成功");
      });
    };
    const _0x11c99c = _0x3758c8 => {
      if (_0x100353.value.length === 0) {
        _0x291717.error("请先选择账号");
        return;
      }
      const _0x2a4e28 = [..._0x1c549f.value];
      _0x100353.value.forEach(_0x313a61 => {
        const _0x441835 = _0x2a4e28.findIndex(_0x4da1d7 => String(_0x4da1d7.mid) === _0x313a61);
        _0x441835 > -1 && (_0x3758c8 === "clear" ? _0x1efe1b.value === "all" ? (_0x2a4e28[_0x441835].imgNote = false, _0x2a4e28[_0x441835].reply = false, _0x2a4e28[_0x441835].danmu = false, _0x2a4e28[_0x441835].dy = false, _0x2a4e28[_0x441835].tripleLike = false, _0x2a4e28[_0x441835].video = false) : _0x2a4e28[_0x441835][_0x1efe1b.value] = false : _0x2a4e28[_0x441835][_0x3758c8] = true);
      });
      _0x445bc8("userList", _0x2a4e28).then(() => {
        _0x24c877();
        _0x291717.success("标记成功");
      });
      _0x100353.value = [];
    };
    const _0x1fd835 = _0x24ad8d(false);
    const _0x42798a = () => {
      document.querySelector("#importJson").click();
    };
    const _0x329849 = _0x24ad8d("");
    const _0x1dd0e4 = _0x24ad8d("");
    const _0xedeec3 = _0x33ef26(() => {
      let _0x552044 = [..._0x1c549f.value];
      _0x1efe1b.value !== "all" && (_0x552044 = _0x552044.filter(_0x1bc0c5 => _0x1bc0c5[_0x1efe1b.value]));
      _0x1dd0e4.value && (_0x552044 = _0x552044.filter(_0x1217de => {
        var _0x3cf8e6;
        return ((_0x3cf8e6 = _0x1217de.level_exp) == null ? undefined : _0x3cf8e6.current_level) === _0x1dd0e4.value;
      }));
      _0x329849.value && (_0x552044 = _0x552044.filter(_0x2a68a7 => {
        var _0x161b15;
        return String(_0x2a68a7.mid).includes(_0x329849.value) || ((_0x161b15 = _0x2a68a7.nickname) == null ? undefined : _0x161b15.includes(_0x329849.value));
      }));
      let _0x1af0b6 = _0x56df78.value.current;
      (_0x1dd0e4.value || _0x329849.value) && (_0x1af0b6 = 1);
      const _0x35863f = (_0x1af0b6 - 1) * _0x56df78.value.pageSize;
      const _0x27dad7 = _0x1af0b6 * _0x56df78.value.pageSize;
      const _0x3a2096 = _0x552044.slice(_0x35863f, _0x27dad7);
      _0x56df78.value.total = _0x552044.length;
      _0x1627db.value = false;
      return _0x3a2096;
    });
    const _0x10a767 = _0xa9d145 => {
      _0x56df78.value.current = _0xa9d145;
      _0x445bc8("currentPage", _0xa9d145);
    };
    const _0x2335f6 = _0x22954c => {
      _0x22954c >= 1 ? _0x56df78.value.pageSize = _0x22954c : _0x56df78.value.pageSize = 10;
      _0x10a767(1);
    };
    const _0x5339be = _0x588b47 => {
      _0x76b43.value = _0x588b47.mid;
      _0x445bc8("currentMid", _0x588b47.mid);
    };
    const _0x4c845b = _0x1ceee3 => _0x1ceee3.raw.mid === _0x76b43.value ? "bg-red-row" : "";
    const _0x9d9d37 = _0x24ad8d(false);
    const _0x5c6804 = _0x24ad8d(0);
    const _0x100b7c = _0x24ad8d(0);
    const _0x4c0803 = _0x3e92f4 => {
      const _0x392df8 = _0x1c549f.value.findIndex(_0x4b0acb => _0x4b0acb.mid === _0x3e92f4.mid);
      _0x100b7c.value = _0x392df8;
      _0x9d9d37.value = true;
    };
    const _0x23ef59 = () => {
      const _0x70b166 = [..._0x1c549f.value];
      const [_0x736fa8] = _0x70b166.splice(_0x100b7c.value, 1);
      _0x70b166.splice(_0x5c6804.value, 0, _0x736fa8);
      _0x445bc8("userList", _0x70b166).then(() => {
        _0x24c877();
        _0x291717.success("排序成功");
      });
    };
    const _0xdb9720 = _0x302a73 => {
      _0x479c1e().then(_0x3082ee => {
        _0x349b8d(_0x302a73.originCookie);
      }).catch(() => {
        _0x291717.error("请先启动投稿客户端");
      });
    };
    _0x2df7c0(async () => {
      _0x76b43.value = await _0x342d90("currentMid");
      const _0x1320f2 = await _0x342d90("currentPage");
      _0x1320f2 && (_0x56df78.value.current = _0x1320f2);
      _0x24c877();
    });
    _0x57fc7e({
      getList: _0x24c877
    });
    return (_0x576cbb, _0x47b414) => (_0x582f7f(), _0x46fce9("div", _0xaf3011, [_0x177678("div", _0xa0b157, [_0x177678("div", _0x3e31c8, [_0x2e2f8f(" 已登录账号： "), _0x82467(_0x2a9b17(_0x6d01ac), {
      color: "#fb7299"
    }, {
      default: _0x7c7675(() => [_0x2e2f8f(_0x31cbf4(_0x2a9b17(_0x430c7f)), 1)]),
      _: 1
    })])]), _0x177678("div", _0x5a668b, [_0x177678("div", _0x692add, [_0x82467(_0x2a9b17(_0x52aff7), {
      onSelect: _0x11c99c
    }, {
      content: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x1b5c55), {
        value: "imgNote"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 发图 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "reply"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 评论 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "video"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 发视频 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "dy"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 动态 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "danmu"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 弹幕 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "tripleLike"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 三连 ")]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x1b5c55), {
        value: "clear"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 清除标记 ")]),
        _: 1
      })]),
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
        disabled: _0x2a9b17(_0x100353).length === 0,
        type: "primary",
        class: "",
        size: "mini"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 账号分类 "), _0x82467(_0x2a9b17(_0x43f8da), {
          content: "用于对不同的账号的用途进行分类，例如选择哪些账号标记为点赞，或者评论等"
        }, {
          default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x1e17db))]),
          _: 1
        })]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }), _0x82467(_0x2a9b17(_0x43f8da), {
      content: "获取并更新账号信息"
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
        type: "primary",
        class: "ml-2",
        size: "mini",
        onClick: _0x494c13
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 检查 ")]),
        _: 1
      })]),
      _: 1
    }), _0x82467(_0x2a9b17(_0x3a24a4), {
      content: "批量刷视频领取硬币",
      position: "bottom",
      type: "warning",
      onOk: _0x7b39c0
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
        type: "primary",
        class: "ml-2",
        size: "mini"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 领硬币 ")]),
        _: 1
      })]),
      _: 1
    }), _0x2a9b17(_0x100353).length ? _0x2987d5("", true) : (_0x582f7f(), _0x191422(_0x2a9b17(_0x3a24a4), {
      key: 0,
      content: "确认清空全部死号吗？建议先导出CK进行备份",
      position: "bottom",
      type: "warning",
      onOk: _0x41155b
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x43f8da), {
        content: "一键删除【已掉线、已封禁】账号"
      }, {
        default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
          class: "ml-2",
          type: "primary",
          status: "danger",
          size: "mini"
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(" 清空死号 ")]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })), _0x2a9b17(_0x100353).length ? (_0x582f7f(), _0x191422(_0x2a9b17(_0x3a24a4), {
      key: 1,
      content: "确认删除已选账号吗？建议先导出CK进行备份",
      position: "bottom",
      type: "warning",
      onOk: _0x18993b
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
        class: "ml-2",
        type: "primary",
        status: "danger",
        size: "mini"
      }, {
        default: _0x7c7675(() => [_0x2e2f8f(" 批量删除 ")]),
        _: 1
      })]),
      _: 1
    })) : _0x2987d5("", true)])]), _0x177678("div", _0x5392a0, [_0x177678("div", _0xd1ab1d, [_0x177678("div", _0x2e4efb, [_0x82467(_0x2a9b17(_0x25518e), {
      "active-key": _0x2a9b17(_0x1efe1b),
      onTabClick: _0x42e2e1
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x32c1ea), {
        key: "all",
        title: "全部"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "imgNote",
        title: "发图"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "video",
        title: "发视频"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "reply",
        title: "评论"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "dy",
        title: "动态"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "danmu",
        title: "弹幕"
      }), _0x82467(_0x2a9b17(_0x32c1ea), {
        key: "tripleLike",
        title: "三连"
      })]),
      _: 1
    }, 8, ["active-key"])]), _0x177678("div", _0x519da4, [_0x177678("div", _0x103e76, [_0x82467(_0x2a9b17(_0x1dc03e), {
      modelValue: _0x2a9b17(_0x1dd0e4),
      "onUpdate:modelValue": _0x47b414[0] || (_0x47b414[0] = _0x5e6200 => _0x50c6e2(_0x1dd0e4) ? _0x1dd0e4.value = _0x5e6200 : null),
      placeholder: "等级筛选",
      size: "mini",
      min: 0,
      max: 6
    }, null, 8, ["modelValue"])]), _0x177678("div", _0x26de86, [_0x82467(_0x2a9b17(_0x21b258), {
      modelValue: _0x2a9b17(_0x329849),
      "onUpdate:modelValue": _0x47b414[1] || (_0x47b414[1] = _0x18233e => _0x50c6e2(_0x329849) ? _0x329849.value = _0x18233e : null),
      "allow-clear": "",
      class: "",
      size: "mini",
      placeholder: "输入账号/昵称，回车搜索"
    }, null, 8, ["modelValue"])])])]), _0x82467(_0x2a9b17(_0x2857f3), {
      selectedKeys: _0x2a9b17(_0x100353),
      "onUpdate:selectedKeys": _0x47b414[2] || (_0x47b414[2] = _0xf3f965 => _0x50c6e2(_0x100353) ? _0x100353.value = _0xf3f965 : null),
      loading: _0x2a9b17(_0x1627db),
      "virtual-list-props": {
        height: "60vh"
      },
      scroll: {
        w: "100%"
      },
      "row-key": "mid",
      data: _0x2a9b17(_0xedeec3),
      pagination: _0x2a9b17(_0x56df78),
      "row-selection": _0x2a9b17(_0x24b8fb),
      "row-class": _0x4c845b,
      onPageChange: _0x10a767,
      onRowClick: _0x5339be
    }, {
      columns: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x343352), {
        title: "",
        "data-index": "index",
        width: "30",
        "body-cell-class": "index-column"
      }, {
        cell: _0x7c7675(({
          rowIndex: _0x266a9d
        }) => [_0x2e2f8f(_0x31cbf4(_0x2a9b17(_0x56df78).pageSize * (_0x2a9b17(_0x56df78).current - 1) + _0x266a9d + 1), 1)]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "昵称/账号",
        "data-index": "nickname",
        ellipsis: "",
        tooltip: "",
        width: "120"
      }, {
        cell: _0x7c7675(({
          record: _0x40e079
        }) => [_0x177678("div", _0x44097d, [_0x40e079.face ? (_0x582f7f(), _0x46fce9("img", {
          key: 0,
          src: _0x40e079.face,
          class: "w-6 h-6 rounded-full"
        }, null, 8, _0x37e8b5)) : _0x2987d5("", true), _0x82467(_0x2a9b17(_0x43f8da), {
          content: _0x40e079.nickname || _0x40e079.mid
        }, {
          default: _0x7c7675(() => [_0x177678("span", _0x4a5e3f, _0x31cbf4(_0x40e079.nickname || _0x40e079.mid), 1)]),
          _: 2
        }, 1032, ["content"])])]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "状态",
        "data-index": "status",
        width: "60"
      }, {
        cell: _0x7c7675(({
          record: _0x31e4a6
        }) => [_0x82467(_0x2a9b17(_0x6d01ac), {
          size: "small",
          color: _0x31e4a6.status === "正常" ? "#00B42A" : "#F53F3F"
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(_0x31cbf4(_0x31e4a6.status || "待检查"), 1)]),
          _: 2
        }, 1032, ["color"])]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "等级",
        width: "100"
      }, {
        cell: _0x7c7675(({
          record: _0x271e38
        }) => [_0x271e38.level || _0x271e38.level_exp ? (_0x582f7f(), _0x46fce9("div", _0x226f1c, [_0x82467(_0x2a9b17(_0x6d01ac), {
          color: "arcoblue",
          size: "small"
        }, {
          default: _0x7c7675(() => {
            var _0x4a32f5;
            return [_0x2e2f8f(_0x31cbf4(_0x271e38.level || ((_0x4a32f5 = _0x271e38.level_exp) == null ? undefined : _0x4a32f5.current_level)), 1)];
          }),
          _: 2
        }, 1024)])) : _0x2987d5("", true)]),
        _: 1
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "硬币",
        "data-index": "coins",
        width: "80"
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "mid",
        "data-index": "mid",
        width: "100",
        ellipsis: "",
        tooltip: "",
        align: "center"
      }), _0x82467(_0x2a9b17(_0x343352), {
        title: "操作",
        width: "200"
      }, {
        cell: _0x7c7675(({
          record: _0x1d6f7f
        }) => [_0x177678("div", _0x145ed8, [_0x82467(_0x2a9b17(_0xde5847), {
          class: "ml-2",
          type: "primary",
          status: "info",
          size: "mini",
          onClick: _0x37c5cc => _0x46c105(_0x1d6f7f)
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(" 登录 ")]),
          _: 2
        }, 1032, ["onClick"]), _0x82467(_0x2a9b17(_0xde5847), {
          class: "ml-2",
          type: "primary",
          status: "info",
          size: "mini",
          onClick: _0x3c405c => _0xdb9720(_0x1d6f7f)
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(" 去投稿 ")]),
          _: 2
        }, 1032, ["onClick"]), _0x82467(_0x2a9b17(_0xde5847), {
          class: "ml-2",
          type: "primary",
          status: "success",
          size: "mini",
          onClick: _0x316bdd => _0x2590cf(_0x1d6f7f)
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(" 复制CK ")]),
          _: 2
        }, 1032, ["onClick"]), _0x82467(_0x2a9b17(_0xde5847), {
          class: "ml-2",
          type: "primary",
          status: "success",
          size: "mini",
          onClick: _0xccf204 => _0x4c0803(_0x1d6f7f)
        }, {
          default: _0x7c7675(() => [_0x2e2f8f(" 排序 ")]),
          _: 2
        }, 1032, ["onClick"]), _0x82467(_0x2a9b17(_0x3a24a4), {
          content: "确认删除吗？",
          position: "lt",
          onOk: _0x381789 => _0x182b05(_0x1d6f7f)
        }, {
          default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0xde5847), {
            class: "ml-2",
            type: "primary",
            status: "danger",
            size: "mini"
          }, {
            default: _0x7c7675(() => [_0x2e2f8f(" 删除 ")]),
            _: 1
          })]),
          _: 2
        }, 1032, ["onOk"])])]),
        _: 1
      })]),
      _: 1
    }, 8, ["selectedKeys", "loading", "data", "pagination", "row-selection"]), _0x177678("div", _0x3ac5d5, [_0x82467(_0x2a9b17(_0x6d01ac), {
      color: "#fb7299"
    }, {
      default: _0x7c7675(() => [_0x2e2f8f(" 共 " + _0x31cbf4(_0x2a9b17(_0x1c549f).length) + "条 ", 1)]),
      _: 1
    }), _0x4d383e, _0x177678("div", _0x51e163, [_0x82467(_0x2a9b17(_0x21b258), {
      "model-value": _0x2a9b17(_0x56df78).pageSize,
      size: "mini",
      placeholder: "请输入每页显示多少条",
      onInput: _0x2335f6
    }, null, 8, ["model-value"])])])]), _0x82467(_0x2a9b17(_0x3fd5b5), {
      visible: _0x2a9b17(_0x14ade7),
      "onUpdate:visible": _0x47b414[4] || (_0x47b414[4] = _0x4dbe9c => _0x50c6e2(_0x14ade7) ? _0x14ade7.value = _0x4dbe9c : null),
      title: "视频BV号",
      onOk: _0x42984d
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x21b258), {
        modelValue: _0x2a9b17(_0x2f5016),
        "onUpdate:modelValue": _0x47b414[3] || (_0x47b414[3] = _0x552e10 => _0x50c6e2(_0x2f5016) ? _0x2f5016.value = _0x552e10 : null),
        placeholder: "请输入视频BV号，例如BV1MP4y1D7jJ"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["visible"]), _0x82467(_0x2a9b17(_0x3fd5b5), {
      visible: _0x2a9b17(_0x363269),
      "onUpdate:visible": _0x47b414[6] || (_0x47b414[6] = _0x479ab6 => _0x50c6e2(_0x363269) ? _0x363269.value = _0x479ab6 : null),
      title: "一键检查状态开始位置",
      onOk: _0x296e66
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x21b258), {
        modelValue: _0x2a9b17(_0x39861f),
        "onUpdate:modelValue": _0x47b414[5] || (_0x47b414[5] = _0x193370 => _0x50c6e2(_0x39861f) ? _0x39861f.value = _0x193370 : null),
        placeholder: "请输入从第几个账号开始检查"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["visible"]), _0x82467(_0x2a9b17(_0x3fd5b5), {
      visible: _0x2a9b17(_0x1fd835),
      "onUpdate:visible": _0x47b414[8] || (_0x47b414[8] = _0x79c14e => _0x50c6e2(_0x1fd835) ? _0x1fd835.value = _0x79c14e : null),
      title: "CK导入起始位置",
      onOk: _0x42798a
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x1dc03e), {
        modelValue: _0x2a9b17(_0x3411e4),
        "onUpdate:modelValue": _0x47b414[7] || (_0x47b414[7] = _0x133c73 => _0x50c6e2(_0x3411e4) ? _0x3411e4.value = _0x133c73 : null),
        min: 0,
        placeholder: "请输入从第几个账号开始插入新导入的CK"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["visible"]), _0x82467(_0x2a9b17(_0x3fd5b5), {
      visible: _0x2a9b17(_0x9d9d37),
      "onUpdate:visible": _0x47b414[10] || (_0x47b414[10] = _0x4874ec => _0x50c6e2(_0x9d9d37) ? _0x9d9d37.value = _0x4874ec : null),
      title: "新的位置",
      onOk: _0x23ef59
    }, {
      default: _0x7c7675(() => [_0x82467(_0x2a9b17(_0x1dc03e), {
        modelValue: _0x2a9b17(_0x5c6804),
        "onUpdate:modelValue": _0x47b414[9] || (_0x47b414[9] = _0x20eaec => _0x50c6e2(_0x5c6804) ? _0x5c6804.value = _0x20eaec : null),
        min: 0,
        placeholder: "请输入新的位置，第几个账号就输入几"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["visible"])]));
  }
};
const _0x18f486 = {
  id: "main",
  class: "px-4 py-10 text-center text-gray-700 dark:text-gray-200"
};
const _0x43228c = {
  class: "text-left ml-2 mb-2 font-bold text-blue-600"
};
const _0x126bc1 = _0x77f36({
  __name: "Options",
  setup(_0x38e4d2) {
    _0x2638d6.exports.runtime.getManifest().version;
    const _0x3735b0 = _0x24ad8d({});
    _0x2df7c0(() => {
      _0x342d90("commonConfig").then(_0x12c008 => {
        _0x3735b0.value = _0x12c008;
        new _0x2f90c4({
          text: _0x12c008.contact,
          width: 120,
          height: 64,
          gapX: 150,
          gapY: 150,
          opacity: "0.2",
          container: "main"
        }).show();
      });
    });
    return (_0x59d866, _0x355129) => (_0x582f7f(), _0x46fce9("main", _0x18f486, [_0x177678("div", _0x43228c, " 联系：" + _0x31cbf4(_0x2a9b17(_0x3735b0).contact), 1), _0x82467(_0x570b7c)]));
  }
});
const _0x1a97e0 = _0x558d8b(_0x126bc1);
_0x1a97e0.mount("#app");