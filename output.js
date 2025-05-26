
var t = require;
var e = module;
var o = exports;
"use strict";
var n,
  a = this && this.__extends || (n = function (t, e) {
    return (n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }
    n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  }),
  i = this && this.__decorate || function (t, e, o, n) {
    var a,
      i = arguments.length,
      r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);else for (var s = t.length - 1; 0 <= s; s--) (a = t[s]) && (r = (i < 3 ? a(r) : 3 < i ? a(e, o, r) : a(e, o)) || r);
    return 3 < i && r && Object.defineProperty(e, o, r), r;
  };
Object.defineProperty(o, "__esModule", {
  value: true
});
var r,
  s = t("TrackData"),
  c = t("UserData"),
  l = t("BaseUI"),
  d = t("Appcfg"),
  h = t("AudioMgr"),
  u = t("LogMgr"),
  p = t("SdkMgr"),
  g = t("Utils"),
  f = t("CommonCfg"),
  m = t("ComDataMgr"),
  y = t("ComPlayerMgr"),
  e = cc._decorator,
  t = e.ccclass,
  e = e.property,
  t = (r = l.default, a(v, r), v.prototype.onLoad = function () {
    this.addEvent(d.BaseEventName.CloseUI, this.eventCloseUI), this.addEvent(f.CommonEventName.GetRewardEnd, this.refreshRewardEnd), this.addEvent(f.CommonEventName.RefreshTickNum, this.refreshTickNum);
  }, v.prototype.refreshTickNum = function () {
    this.quanNum.string = this.lottyData.getLottyTickNum() + "";
  }, v.prototype.start = function () {
    var i = this;
    this.lottyData = y.ComPlayerMgr.getInstance().getLottyData(), this.normalSpriteFrame = this.startLuck.getComponent(cc.Sprite).spriteFrame, this.playNum = this.lottyData.getLottyNum(), this.quanNum.string = this.lottyData.getLottyTickNum() + "", this.totalFreeNum = m.ComDataMgr.getInstance().getCommonParam(m.CommonParamType.freeLottyNum), this.checkCurrentFree(), this.btnClose.on(cc.Node.EventType.TOUCH_END, function () {
      i.closeUI();
    });
    for (var o = 0, r = this, t = 1; t < 11; t++) !function (t) {
      var e = m.ComDataMgr.getInstance().getLottyGoodsByGirldId(t);
      null == e && u.LogMgr.getInstance().error("cfg is null GirldId:", t);
      var e = e[r.lottyData.getGirldIdIndex(t)].id,
        n = m.ComDataMgr.getInstance().getLottyGoodsById(e);
      r.gildReward.push(n);
      var a = r.rewardLayout.children[t - 1];
      r.itemNodes.push(a), r.scheduleOnce(function () {
        cc.tween(a).to(.2, {
          eulerAngles: new cc.Vec3(0, 180, 0)
        }).call(function () {
          a.eulerAngles = new cc.Vec3(0, 0, 0);
          var t = m.ComDataMgr.getInstance().getGoodsById(n.goodId);
          i.loadSpriteFrame(t.bundleName, t.icon, function (t) {
            a.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t;
          }), 2 == t.id || 3 == t.id || 5 == t.id || 6 == t.id || 14 == t.id || 15 == t.id || 16 == t.id ? (a.getChildByName("icon").scale = 1.1, a.getChildByName("num").active = false) : (a.getChildByName("icon").scale = .8, a.getChildByName("num").active = true), 7 == t.id && (a.getChildByName("num").active = false), a.getChildByName("num").getComponent(cc.Label).string = "x" + n.rewardNum;
          var e,
            o = a.getChildByName("numGet");
          i.showGetNumText ? (e = i.lottyData.getInDontMust(n.id), 0 < n.mustNum && !e ? (t = i.itemNodes[n.girdId - 1].getChildByName("numGet"), e = i.lottyData.getLottyIdOutNum(n.id), e = n.mustNum - e, t.getComponent(cc.Label).string = 1 + e + "次必得", t.active = true) : o.active = false) : o.active = false;
        }).start();
      }, .1 + o), o += .1;
    }(t);
    this.initBtnListener();
  }, v.prototype.initBtnListener = function () {
    var t = this;
    this.startLuck.on(cc.Node.EventType.TOUCH_START, function () {
      h.AudioMgr.getInstance().playEffect(f.ComAudioId.lottyDown), t.startLuck.getComponent(cc.Sprite).spriteFrame = t.startingSpriteFrame, t.checkCurrentFree(), t.freeStart.active = false, t.quanStart.active = false, 1 == t.state || t.isRuning || (t.playNum < t.totalFreeNum && (t.isFree = true), !t.isFree && t.lottyData.getLottyTickNum() <= 0 ? p.SdkMgr.getInstance().playVideo(p.AdType.FreeLotty, function () {
        t.needplayVideo = true, t.isRuning = true, c.UserData.getInstance().getTrackData().youmengTrack(s.TrackId.Ad_lotty), t.startLotty();
      }) : (t.isRuning = true, t.needplayVideo = false, t.startLotty()));
    }), this.startLuck.on(cc.Node.EventType.TOUCH_END, function () {
      t.checkCurrentFree(), t.startLuck.getComponent(cc.Sprite).spriteFrame = t.normalSpriteFrame;
    }), this.startLuck.on(cc.Node.EventType.TOUCH_CANCEL, function () {
      t.startLuck.getComponent(cc.Sprite).spriteFrame = t.normalSpriteFrame;
    });
  }, v.prototype.startLotty = function () {
    var t,
      e = this;
    c.UserData.getInstance().getTrackData().youmengTrack(s.TrackId.lottery_total), this.curNode && this.curNode.stopAllActions(), this.index = this.getCurentReward() - 1, 0 == this.i ? this.totalNum = (this.repeat - 1) * this.oneRepetNum + this.index + 1 : (t = this.i > this.index ? this.oneRepetNum - this.i + this.index : this.i == this.index ? this.oneRepetNum : this.index - this.i, this.totalNum = (this.repeat - 1) * this.oneRepetNum + t), this.index < 5 ? this.needSecond = true : this.needSecond = false, this.refreshState(), this.scheduleOnce(function () {
      e.state = 1;
    }), this.isFree || this.needplayVideo || (this.lottyData.refreshTickNum(1, false), this.quanNum.string = this.lottyData.getLottyTickNum() + "");
  }, v.prototype.checkCurrentFree = function () {
    this.playNum < this.totalFreeNum ? (this.freeStart.active = false, this.quanStart.active = false, this.isFree = true, this.needplayVideo = false) : (this.lottyData.getLottyTickNum() <= 0 ? (this.freeStart.active = true, this.quanStart.active = false, this.needplayVideo = true) : (this.freeStart.active = false, this.quanStart.active = true, this.needplayVideo = false), this.isFree = false);
  }, v.prototype.refreshState = function () {
    this.girdIndexNum = 1, this.finishNum = 0, this.passed_time = 0, this.walk_time = .2, this.curNode && (this.curNode.eulerAngles = new cc.Vec3(0, 0, 0));
    for (var t = 0; t < this.itemNodes.length; t++) {
      var e = this.itemNodes[t];
      e.getChildByName("bg").active = false, e.getChildByName("buttonLight").active = false;
    }
  }, v.prototype.update = function (t) {
    if (0 != this.state) {
      if (1 == this.state && (this.passed_time += t, this.passed_time >= this.walk_time)) {
        this.i >= this.itemNodes.length && (this.i = 0), this.girdIndexNum % this.oneRepetNum == 0 && this.finishNum++, 0 == this.i || 3 == this.i || 6 == this.i || 9 == this.i ? h.AudioMgr.getInstance().playMusic(f.ComAudioId.ding, "lottyRun1", false) : 1 == this.i || 4 == this.i || 7 == this.i || 10 == this.i ? h.AudioMgr.getInstance().playMusic(f.ComAudioId.ding, "lottyRun2", false) : h.AudioMgr.getInstance().playMusic(f.ComAudioId.ding, "lottyRun3", false);
        t = this.itemNodes[this.i];
        t.getChildByName("bg").active = true, t.getChildByName("buttonLight").active = true;
        var t = undefined,
          e = (t = this.i - 1 < 0 ? this.itemNodes[this.itemNodes.length - 1] : this.itemNodes[this.i - 1]).getChildByName("bg");
        cc.tween(e).to(.4, {
          opacity: 0
        }).call(function () {
          e.active = false, e.opacity = 255;
        }).start();
        var o = t.getChildByName("buttonLight");
        if (cc.tween(e).to(.2, {
          opacity: 0
        }).call(function () {
          o.active = false, o.opacity = 255;
        }).start(), this.girdIndexNum > this.totalNum - 2 && this.i == this.index) return this.state = 2, void this.selectNode();
        this.passed_time = 0, this.walk_time = .1, this.girdIndexNum < 3 ? this.walk_time = .5 : this.girdIndexNum < 4 ? this.walk_time = .4 : this.girdIndexNum < 6 ? this.walk_time = .3 : this.girdIndexNum > this.totalNum - 1 ? this.walk_time = .8 : this.girdIndexNum > this.totalNum - 2 ? this.walk_time = .6 : this.girdIndexNum > this.totalNum - 3 ? this.walk_time = .5 : this.girdIndexNum > this.totalNum - 4 && (this.walk_time = .3), this.i++, this.girdIndexNum += 1;
      }
      2 == this.state && (this.state = 0);
    }
  }, v.prototype.selectNode = function () {
    var t = this;
    this.curNode = this.itemNodes[this.index], this.selectNodeTween = cc.tween(this.curNode).to(1, {
      scale: 1.15
    }).to(1, {
      scale: 1
    }).union().repeatForever(), this.selectNodeTween.start(), this.curNode.getChildByName("bg").active = true;
    var e = this.curNode.getChildByName("icon"),
      o = e.scale;
    cc.tween(e).parallel(cc.tween(e).by(.2, {
      position: new cc.Vec3(0, 20, 0)
    }).by(.2, {
      position: new cc.Vec3(0, -20, 0)
    }).start(), cc.tween(e).to(.2, {
      scale: 1.02
    }).to(.2, {
      scale: o
    }).start()).by(.2, {
      position: new cc.Vec3(0, 10, 0)
    }).by(.2, {
      position: new cc.Vec3(0, -10, 0)
    }).call(function () {
      t.finishEnd();
    }).start();
  }, v.prototype.getCurentReward = function () {
    for (var t = [], e = 0; e < this.gildReward.length; e++) if (0 < (i = this.gildReward[e]).mustNum) {
      var o = this.lottyData.getLottyIdOutNum(i.id),
        n = this.lottyData.getInDontMust(i.id);
      if (i.mustNum <= o && !n) return this.goodId = i.goodId, this.goodNum = i.rewardNum, this.lottyGoodCfg = i, e + 1;
    } else {
      n = new d.WeightObject();
      n.id = i.id, n.weight = i.weight, t.push(n);
    }
    if (0 < t.length) {
      var a = g.Utils.weight_rand(t),
        i = m.ComDataMgr.getInstance().getLottyGoodsById(a.id);
      return this.goodId = i.goodId, this.goodNum = i.rewardNum, (this.lottyGoodCfg = i).girdId;
    }
  }, v.prototype.finishEnd = function () {
    var e = this;
    this.scheduleOnce(function () {
      var t = e.curNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
      y.ComPlayerMgr.getInstance().checkOpenReward(e.goodId + f.CommonCfg.splitNum + e.goodNum, t);
    }, .2);
  }, v.prototype.refreshRewardEnd = function () {
    this.eventCloseUI(f.ComUIID.UIReward);
  }, v.prototype.eventCloseUI = function (t) {
    var e = this;
    if (t == f.ComUIID.UIReward) {
      this.selectNodeTween.stop(), cc.tween(this.curNode).to(.1, {
        scale: 1
      }).start();
      for (var o = 0; o < this.gildReward.length; o++) {
        var n,
          a,
          i = this.gildReward[o];
        this.lottyData.addLottyIdOutNum(i.id), this.showGetNumText && 0 < i.mustNum && (n = this.itemNodes[i.girdId - 1].getChildByName("numGet"), a = this.lottyData.getLottyIdOutNum(i.id), a = i.mustNum - a, n.getComponent(cc.Label).string = 1 + a + "次必得");
      }
      this.playNum++, this.lottyData.addLottyNum(), this.startLuck.active = true, this.starting.active = false, this.checkCurrentFree();
      var r = this.lottyGoodCfg.girdId,
        s = this.lottyData.getGirldIdIndex(r),
        c = m.ComDataMgr.getInstance().getLottyGoodsByGirldId(r),
        l = s;
      s < c.length - 1 && (l += 1), 0 < this.lottyGoodCfg.mustNum && this.lottyData.addInDontMust(this.lottyGoodCfg.id);
      var d = this.itemNodes[this.lottyGoodCfg.girdId - 1],
        t = d.getChildByName("numGet");
      1 == this.lottyGoodCfg.replace && l != s ? (this.lottyData.setGirldReward(r, l), i = c[l], l = m.ComDataMgr.getInstance().getGoodsById(i.goodId), this.loadSpriteFrame(l.bundleName, l.icon, function (t) {
        d.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t;
      }), 2 == l.id || 3 == l.id || 5 == l.id || 6 == l.id || 14 == l.id || 15 == l.id || 16 == l.id ? (d.getChildByName("icon").scale = 1.1, d.getChildByName("num").active = false) : (d.getChildByName("icon").scale = .8, d.getChildByName("num").active = true), 7 == l.id && (d.getChildByName("num").active = false), d.getChildByName("num").getComponent(cc.Label).string = "x" + i.rewardNum, this.showGetNumText && 0 < i.mustNum ? (t.getComponent(cc.Label).string = i.mustNum + "次必得", t.active = true) : t.active = false, this.gildReward[this.lottyGoodCfg.girdId - 1] = i, cc.tween(this.curNode).to(.4, {
        eulerAngles: new cc.Vec3(0, 180, 0)
      }).call(function () {
        e.curNode.eulerAngles = new cc.Vec3(0, 0, 0);
      }).start()) : (u.LogMgr.getInstance().debug("没有可替换的"), t.active = false), this.isRuning = false;
    }
  }, v.prototype.onClose = function () {
    h.AudioMgr.getInstance().stopMusic("lottyMusic");
  }, i([e({
    type: cc.Label,
    displayName: "券的数量"
  })], v.prototype, "quanNum", undefined), i([e({
    type: cc.Node
  })], v.prototype, "rewardLayout", undefined), i([e(cc.Node)], v.prototype, "startLuck", undefined), i([e(cc.Node)], v.prototype, "freeStart", undefined), i([e(cc.Node)], v.prototype, "quanStart", undefined), i([e(cc.Node)], v.prototype, "starting", undefined), i([e(cc.Node)], v.prototype, "btnClose", undefined), i([e(cc.SpriteFrame)], v.prototype, "startingSpriteFrame", undefined), i([t], v));
function v() {
  var t = null !== r && r.apply(this, arguments) || this;
  return t.quanNum = null, t.rewardLayout = null, t.startLuck = null, t.freeStart = null, t.quanStart = null, t.starting = null, t.btnClose = null, t.startingSpriteFrame = null, t.normalSpriteFrame = null, t.state = 0, t.itemNodes = [], t.index = 4, t.repeat = 3, t.i = 0, t.finishNum = 0, t.passed_time = 0, t.walk_time = .2, t.needSecond = false, t.girdIndexNum = 1, t.totalNum = 0, t.oneRepetNum = 10, t.isRuning = false, t.showGetNumText = false, t.playNum = 0, t.gildReward = [], t.isFree = false, t.needplayVideo = false, t.totalFreeNum = 0, t;
}
o.default = t;