//Wed May 07 2025 16:42:58 GMT+0000 (Coordinated Universal Time)
//你好
//你好
var encode_version = "jsjiami.com.v5";
var hunhuanspalbox = function (_0x4b303b) {
  function _0x2a5287() {
    {
      var _0x10c0a6 = _0x4b303b.call(this) || this;
      _0x10c0a6.roleIndex = 0;
      _0x10c0a6.oldIndex = 0;
      _0x10c0a6.roleSelectVis = true;
      _0x10c0a6.skinName = "hunhuanboxskins";
      _0x10c0a6.isTopLevel = true;
      _0x10c0a6.addExclusionWin(egret.getQualifiedClassName(SmeltEquipTotalWin));
      return _0x10c0a6;
    }
  }
  __extends(_0x2a5287, _0x4b303b);
  _0x2a5287.prototype.initUI = function () {};
  _0x2a5287.prototype.open = function () {
    {
      this.addTouchEvent(this.closeBtn, this.onClick);
      _0x4b303b[0] ? this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = _0x4b303b[0] : this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = 0;
      this.addTouchEvent(this, this.onClick);
      this.addChangingEvent(this.tab, this.checkIsOpen);
      this.setOpenIndex(0);
    }
  };
  _0x2a5287.prototype.close = function () {
    for (var _0x36cdd3 = [], _0x30fb51 = 0; _0x30fb51 < arguments.length; _0x30fb51++) {
      _0x36cdd3[_0x30fb51] = arguments[_0x30fb51];
    }
    var _0x5dab5c = ViewManager.ins().getView(UIView2);
    if (_0x5dab5c) {
      _0x5dab5c.closeNav(UIView2.NAV_ROLE);
    }
    for (var _0x2fe262 = this.viewStack.numChildren, _0x58c86c = 0; _0x2fe262 > _0x58c86c; _0x58c86c++) {
      {
        this.viewStack.getChildAt(_0x58c86c) instanceof eui.Group || this.viewStack.getChildAt(_0x58c86c).close();
      }
    }
  };
  _0x2a5287.prototype.checkIsOpen = function (_0x42e2bd) {
    this.setOpenIndex(this.tab.selectedIndex);
    this.viewStack.selectedIndex = this.tab.selectedIndex;
    this.viewStack.getElementAt(this.oldIndex).close();
  };
  _0x2a5287.prototype.setOpenIndex = function (_0x1bd9d4) {
    if (this.oldIndex && 1 == this.oldIndex && this.oldIndex != _0x1bd9d4 && this.getWingPanelInfo()) {
      {
        this.doOpenHintWin(1, this.tab.selectedIndex);
        return void (this.tab.selectedIndex = this.oldIndex);
      }
    }
    switch (_0x1bd9d4) {
      case 0:
        this.HunhuanEquipPanel.open();
    }
  };
  _0x2a5287.prototype.onClick = function (_0x1d33e2) {
    switch (_0x1d33e2.target) {
      case this.closeBtn:
      case this.closeBtn0:
        ViewManager.ins().close(this);
    }
  };
  return _0x2a5287;
}(BaseEuiView);
__reflect(hunhuanspalbox.prototype, "hunhuanspalbox");
ViewManager.ins().reg(hunhuanspalbox, LayerManager.UI_Main);
var xiaoleibaosItemhc = function (_0x48cb44) {
  var _0x303de9 = function () {
    {
      var _0x33a2e0 = true;
      return function (_0x36cf67, _0x2ca40c) {
        var _0x401274 = _0x33a2e0 ? function () {
          {
            if (_0x2ca40c) {
              var _0xfbd67d = _0x2ca40c.apply(_0x36cf67, arguments);
              _0x2ca40c = null;
              return _0xfbd67d;
            }
          }
        } : function () {};
        _0x33a2e0 = false;
        return _0x401274;
      };
    }
  }();
  var _0x48296e = _0x303de9(this, function () {
    {
      var _0x20d312 = function () {};
      var _0x21c856 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x21c856.console) {
        _0x21c856.console = function (_0x15e078) {
          var _0x1ba423 = {};
          _0x1ba423.log = _0x15e078;
          _0x1ba423.warn = _0x15e078;
          _0x1ba423.debug = _0x15e078;
          _0x1ba423.info = _0x15e078;
          _0x1ba423.error = _0x15e078;
          _0x1ba423.exception = _0x15e078;
          _0x1ba423.trace = _0x15e078;
          return _0x1ba423;
        }(_0x20d312);
      } else {
        _0x21c856.console.log = _0x20d312;
        _0x21c856.console.warn = _0x20d312;
        _0x21c856.console.debug = _0x20d312;
        _0x21c856.console.info = _0x20d312;
        _0x21c856.console.error = _0x20d312;
        _0x21c856.console.exception = _0x20d312;
        _0x21c856.console.trace = _0x20d312;
      }
    }
  });
  _0x48296e();
  function _0x429c94() {
    var _0x333142 = _0x48cb44.call(this) || this;
    _0x333142.touchEnabled = true;
    _0x333142.touchChildren = false;
    return _0x333142;
  }
  __extends(_0x429c94, _0x48cb44);
  _0x429c94.prototype.dataChanged = function () {
    this.lv.text = this.data.posn.name;
    this.chosen.visible = this.data.menu;
  };
  return _0x429c94;
}(BaseItemRender);
__reflect(xiaoleibaosItemhc.prototype, "xiaoleibaosItemhc");
var hunhuanItemhc = function (_0x1b1f53) {
  function _0x570642() {
    {
      var _0x1161f7 = _0x1b1f53.call(this) || this;
      _0x1161f7.touchEnabled = true;
      _0x1161f7.touchChildren = false;
      return _0x1161f7;
    }
  }
  __extends(_0x570642, _0x1b1f53);
  _0x570642.prototype.dataChanged = function () {
    this.hunhuanName.text = this.data.name;
    this.Icon.source = this.data.Icon;
  };
  return _0x570642;
}(BaseItemRender);
__reflect(hunhuanItemhc.prototype, "hunhuanItemhc");
var HunhuanEquipPanel = function (_0x56d72a) {
  function _0x57475f() {
    var _0x52a930 = _0x56d72a.call(this) || this;
    _0x52a930._cost = 0;
    _0x52a930.isTopLevel = true;
    _0x52a930.skinName = "HunhuanEquipSkin";
    return _0x52a930;
  }
  __extends(_0x57475f, _0x56d72a);
  _0x57475f.prototype.init = function () {
    {}
  };
  _0x57475f.prototype.open = function () {
    {
      this.ringEff || (this.ringEff = new MovieClip());
      this.roleSelect.setCurRole(this.curRole);
      this.addChangeEvent(this.roleSelect, this.sonChange);
      this.roleSelect.parent.touchEnabled = true;
      SubRoles.ins().getSubRoleByIndex(0);
      this.roleSelect.setCurRole(0);
      this.observe(Dress.ins().postDressInfo, this.edata);
      this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
      this.observe(UserBag.ins().postItemAdd, this.edata);
      this.observe(UserBag.ins().postItemDel, this.edata);
      this.observe(UserBag.ins().postItemCountChange, this.edata);
      this.observe(matrix.ins().postMatrixData, this.edata);
      this.observe(matrix.ins().postMatrixStockingData, this.edata);
      this.observe(matrix.ins().postMatrixQianNengData, this.edata);
      this.observe(matrix.ins().postMatrixTeZhiData, this.edata);
      this.observe(matrix.ins().postMatrixHhuaData, this.edata);
      this.observe(GameLogic.ins().postSubRoleChange, this.getpassInfo);
      this.addTouchEvent(this.item0, this.onlikes);
      this.addTouchEvent(this.item1, this.onlikes);
      this.addTouchEvent(this.item2, this.onlikes);
      this.addTouchEvent(this.item3, this.onlikes);
      this.addTouchEvent(this.item4, this.onlikes);
      this.addTouchEvent(this.item5, this.onlikes);
      this.addTouchEvent(this.upGradeBtn, this.closeMenu);
      this._curRole = 0;
      this._indexid = 0;
      this.edata();
    }
  };
  _0x57475f.prototype.close = function (_0x2ea022) {};
  _0x57475f.prototype.sonChange = function (_0x494f98) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
    }
  };
  _0x57475f.prototype.Bsdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0xcef147 = Dress.ins();
    this.listInfo = [];
    for (var _0x3bc0e3 in ConfgMgr.Hunhuanconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.Hunhuanconfig[_0x3bc0e3].roletype) {
      var _0x53d12e = new DressItemInfo();
      var _0x36a610 = ConfgMgr.Hunhuanconfig[_0x3bc0e3];
      var _0x40788d = _0x36a610.id;
      if (_0xcef147.timeInfo[_0x40788d]) {
        {
          _0x53d12e.lv = _0xcef147.timeInfo[_0x40788d].lv;
        }
      } else {
        _0x53d12e.lv = 0;
      }
      _0x53d12e.id = _0x40788d;
      _0x53d12e.job = _0x36a610.roletype;
      this.listInfo.push(_0x53d12e);
    }
    return this.listInfo;
  };
  _0x57475f.prototype.getpassInfo = function () {};
  _0x57475f.prototype.openeff = function (_0x132ed2) {
    this.removeMc(this.ringEff);
    this.ringEff.scaleX = this.ringEff.scaleY = 1.2;
    this.ringEff.x = 250;
    this.ringEff.y = -100;
    egret.Tween.removeTweens(this.ringEff);
    egret.Tween.get(this.ringEff, {
      loop: true
    }).to({
      y: 0
    }, 2000).to({
      y: 0
    }, 2000);
    this.HHEff.parent && this.HHEff.parent.addChild(this.ringEff);
    this.ringEff.playFile(RES_DIR_EFF + "heunhuans00" + (_0x132ed2 + 1), -1);
  };
  _0x57475f.prototype.removeMc = function (_0x35100f) {
    if (_0x35100f) {
      {
        _0x35100f.dispose();
        DisplayUtils.removeFromParent(_0x35100f);
      }
    }
  };
  _0x57475f.prototype.edata = function (_0x1b5633) {
    var _0x58428c = this.Bsdate();
    var _0x166458 = ConfgMgr.Hunhuanupconfig;
    for (x = 0; x < _0x58428c.length; x++) {
      this._delv = _0x58428c[x].lv;
      this._deid = _0x58428c[x].id;
      var _0x115e8d = _0x58428c[x].lv;
      this["item" + x].Icon.source = "hunhuan_e" + [x + 1] + "_png";
      this["item" + x].level.text = "Lv: " + _0x115e8d;
      this["item" + x].isSelected.visible = 0;
      if (x == this._indexid) {
        this["item" + x].isSelected.visible = 1;
        var _0x153d2f = _0x166458[x + 1][_0x115e8d];
        var _0x81a372 = _0x166458[x + 1][_0x115e8d + 1];
        var _0x2924a3 = parseInt(_0x2924a3) + UserBag.getAttrPower(AttributeData.transformAttr(_0x166458[x + 1][_0x115e8d].attr));
        this.attr0.text = this.getattrlv(_0x153d2f.attr);
        if (_0x81a372) {
          this.addAttr0.text = this.getattrlv(_0x81a372.attr);
          this.addAttr0.visible = 1;
          this.upGradeBtn.visible = this.costGroup.visible = 1;
          this.nexmanlv.visible = 0;
          this._lv = _0x115e8d;
          this._item = _0x81a372.itemid;
          this._count = _0x81a372.count;
          this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
          this.icon.source = ConfgMgr.ItemConfig[this._item].icon + "_png";
          this.countLabel.text = ConfgMgr.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
          this._openid = _0x58428c[x].id;
          _0x115e8d < 1 ? this.upGradeBtn.label = "激  活" : this.upGradeBtn.label = "升  级";
          this._num < this._count ? this.countLabel.textColor = "0xd1c28f" : this.countLabel.textColor = "0xff0012";
        } else {
          this.upGradeBtn.visible = this.costGroup.visible = this.addAttr0.visible = 0;
          this.nexmanlv.visible = 1;
        }
        this.openeff(x);
        this.powerPanel.setPower(_0x2924a3);
      }
    }
  };
  _0x57475f.prototype.getattrlv = function (_0x43c1b7) {
    var _0x5d123a = AttributeData.getAttStr(AttributeData.transformAttr(_0x43c1b7), 0, 1, ": ");
    return _0x5d123a;
  };
  _0x57475f.prototype.getattrnexlv = function (_0x4f3ce6, _0xb5d97c) {
    {
      var _0x485164 = 0;
      if (_0x4f3ce6[_0x485164].type == _0xb5d97c[_0x485164].type && _0x4f3ce6[_0x485164].value != _0xb5d97c[_0x485164].value) {
        var _0x46086b = _0x4f3ce6[_0x485164].value;
        var _0x450575 = _0xb5d97c[_0x485164].value;
        var _0x510400 = _0x450575 - _0x46086b;
        var _0x2229e4 = _0x4f3ce6[_0x485164].type;
        var _0x1de112 = this.Getattrsuanshu(_0x510400, _0x2229e4);
        return _0x1de112;
      } else {
        {
          return 0;
        }
      }
    }
  };
  _0x57475f.prototype.Getattrsuanshu = function (_0x4f71bc, _0x1058f5) {
    if (_0x1058f5 == 7) {
      {
        var _0x1d8d2f = _0x4f71bc / 100 + "%";
      }
    } else {
      {
        if (_0x1058f5 == 20) {
          var _0x8813f4 = _0x4f71bc / 100;
          var _0x63377f = _0x8813f4.toFixed(1) + "%";
        } else {
          {
            var _0x63377f = _0x4f71bc;
          }
        }
      }
    }
    return _0x1ec796;
  };
  _0x57475f.prototype.getattrnewnum = function (_0x3ac4c7) {};
  _0x57475f.prototype.closeMenu = function (_0x1e9454) {
    if (this._num < this._count) {
      {
        return void UserTips.ins().showTips("|C:0xFFFF00&T:  道具不足|");
      }
    }
    if (this._lv < 1) {
      {
        Dress.ins().JiezhikongjianUserReq(this._openid, 21);
      }
    } else {
      {
        Dress.ins().JiezhikongjianLevelUp(this._openid);
      }
    }
  };
  _0x57475f.prototype.getBaolv = function (_0x5f1032) {
    var _0x34cbd1 = this.Bsdate();
    var _0x439e32 = _0x34cbd1[_0x5f1032].lv;
    return _0x439e32;
  };
  _0x57475f.prototype.onlikes = function (_0x24f284) {
    {
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
      switch (_0x24f284.currentTarget) {
        case this.item0:
          this._indexid = 0;
          this.edata();
          break;
        case this.item1:
          this._indexid = 1;
          this.edata();
          break;
        case this.item2:
          this._indexid = 2;
          this.edata();
          break;
        case this.item3:
          this._indexid = 3;
          this.edata();
          break;
        case this.item4:
          this._indexid = 4;
          this.edata();
          break;
        case this.item5:
          this._indexid = 5;
          this.edata();
      }
    }
  };
  _0x57475f.prototype.closeMenus = function (_0x25e552) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x57475f;
}(BaseView);
__reflect(HunhuanEquipPanel.prototype, "HunhuanEquipPanel");
(function (_0x2f6718, _0x2d485a, _0x303df6) {
  var _0x2cd463 = function () {
    var _0x1ab5bb = true;
    return function (_0x5b1af2, _0xd282a1) {
      var _0x2cfb91 = _0x1ab5bb ? function () {
        if (_0xd282a1) {
          var _0x1885ee = _0xd282a1.apply(_0x5b1af2, arguments);
          _0xd282a1 = null;
          return _0x1885ee;
        }
      } : function () {};
      _0x1ab5bb = false;
      return _0x2cfb91;
    };
  }();
  var _0x9f08a7 = _0x2cd463(this, function () {
    var _0xc1c37e = function () {
      return "dev";
    };
    var _0xd53c6e = function () {
      return "window";
    };
    var _0x2b4ee7 = function () {
      var _0x2e063e = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x2e063e.test(_0xc1c37e.toString());
    };
    var _0x13f2d2 = function () {
      var _0x4d1344 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x4d1344.test(_0xd53c6e.toString());
    };
    var _0x1933e9 = function (_0x52ca83) {
      var _0x3886b0 = 0 >> 1 + NaN;
      if (_0x52ca83.indexOf("i" === _0x3886b0)) {
        _0x1899cc(_0x52ca83);
      }
    };
    var _0x1899cc = function (_0x437847) {
      var _0x5495b9 = 3 >> 1 + NaN;
      if (_0x437847.indexOf("true"[3]) !== _0x5495b9) {
        _0x1933e9(_0x437847);
      }
    };
    if (!_0x2b4ee7()) {
      if (!_0x13f2d2()) {
        _0x1933e9("indеxOf");
      } else {
        _0x1933e9("indexOf");
      }
    } else {
      _0x1933e9("indеxOf");
    }
  });
  _0x9f08a7();
  _0x303df6 = "al";
  try {
    _0x303df6 += "ert";
    _0x2d485a = encode_version;
    if (!(typeof _0x2d485a !== "undefined" && _0x2d485a === "jsjiami.com.v5")) {
      _0x2f6718[_0x303df6]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x46c868) {
    {
      _0x2f6718[_0x303df6]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";