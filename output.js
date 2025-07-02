
function calcYZM(str) {
  return eval(str);
}
const _0x4c8763 = {
  id: "1906889989430448129",
  link: "客服微信：Dengli_1122",
  url: ""
};
let _0x5afa92 = [_0x4c8763];
let _0x4c1a4e = "http://doc.zhanyc.cn/pages/cqrsw/";
let _0x386da7 = true;
let _0x1a5884 = false;
_0x1a5884 = true;
let _0x21da8b = true;
_0x21da8b = false;
_0x386da7 = false;
const _0xd7e3d = {
  version: "202506242336",
  body: "<div style=\"padding:10px;\">第一版本</div>"
};
const _0x71d0ec = {
  tjjl: "推荐购买脚本，返佣40%",
  version: _0xd7e3d
};
const _0x593296 = {
  maxComment: 100
};
const _0x23dd37 = {
  list: null,
  docList: null
};
const _0x20cb04 = {
  index: null
};
const _0xf04c97 = {
  oldListTxt: "",
  listType: null,
  userNameIndex: null,
  videoMgIndex: null,
  listStudyScoreData: null,
  calcListFinish: false,
  curStudyData: null,
  curStudyPosition: 0,
  closeTipsIndex: null,
  confirmRunIndex: null,
  studyTime: {},
  waitTime: 0,
  index: _0x23dd37,
  video: _0x20cb04
};
const _0x2c6843 = {
  showErr: true
};
const _0x3f8bc8 = {
  showErr: true
};
const _0x5ce231 = {
  showErr: true
};
let _0x42e799 = Object.assign(baseConfig, {
  setting: _0x71d0ec,
  config: _0x593296,
  pageData: _0xf04c97,
  async init() {
    console.log("%c init", "background:rgb(0,0,0);color:#fff");
    var _0x7e2728;
    try {
      _0x42e799.setHook();
    } catch (_0x574c61) {}
    if (navigator && navigator.locks && navigator.locks.request) {
      {
        const _0x3c4289 = new Promise(_0x1aecdd => {
          {
            _0x7e2728 = _0x1aecdd;
          }
        });
        navigator.locks.request("unique_lock_name", {
          mode: "shared"
        }, () => {
          {
            return _0x3c4289;
          }
        });
      }
    }
    _0x42e799.addStyle();
    unsafeWindow.alert = function (_0x427068) {
      {
        layer.alert(_0x427068);
      }
    };
    if (location.href.indexOf("loginSuccess.html?yh=") != -1) {
      {
        console.log("%c loginSuccess.html?yh", "background:rgb(255,0,0);color:#fff");
        _0x42e799.page_yhwelcome();
      }
    }
    let _0x57e570 = true;
    _0x57e570 = await _0x42e799.checkVersion();
    if (_0x57e570) {
      _0x42e799.firstRun();
    }
  },
  requestNotify() {
    Notification.requestPermission().then(function (_0x5898b3) {
      {
        if (_0x5898b3 === "granted") {
          _0x42e799.tipsMsg("通知权限已授予");
        } else {
          if (_0x5898b3 === "denied") {
            _0x42e799.tipsMsg("通知权限已拒绝");
          }
        }
      }
    });
  },
  firstRun() {
    _0x21da8b && _0x42e799.requestNotify();
    if (_0x42e799.isDZKFMode()) {
      {
        _0x42e799.begin("iamzhankuo");
        return;
      }
    }
    if (top === window && _0x42e799.getGMData("showDoc", true)) {
      layer.confirm("首次使用本脚本?点击下方按钮查看使用说明", {
        icon: 3,
        title: "首次使用？",
        btn: ["查看使用说明", "取消"]
      }, function (_0x230b99) {
        _0x42e799.openDoc();
        layer.close(_0x230b99);
        _0x42e799.setGMData("showDoc", false);
        _0x42e799.begin("iamzhankuo");
      }, function () {
        _0x42e799.setGMData("showDoc", false);
        _0x42e799.begin("iamzhankuo");
      });
    } else {
      {
        _0x42e799.begin("iamzhankuo");
      }
    }
  },
  async begin(_0x4f004f) {
    if (_0x4f004f != "iamzhankuo") {
      return;
    }
    if (window === top) {
      {
        _0x42e799.addMenu();
        _0x42e799.registerMenuCommand();
      }
    }
    let _0x55d695 = location.href;
    setInterval(async () => {
      if (_0x55d695 != location.href) {
        {
          _0x55d695 = location.href;
          if (_0x55d695.includes("/org/courseDetail") || _0x55d695.includes("/personCenter.myCollectCourse.do")) {
            _0x42e799.runByUrl(location.href);
          }
        }
      }
    }, 500);
    _0x42e799.runByUrl(location.href);
  },
  async addMenu() {
    await _0x42e799.waitOf(_0x5c5f2d => $("body:visible").length > 0);
    if ($("#zfkLeftMenuContainer").length > 0) {
      return;
    }
    GM_addStyle("#zfkLeftMenuContainer{z-index:9999;position:fixed;left:0;top:40%;color:#fff;box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;animation:glowAnimation 3s infinite alternate;}@keyframes glowAnimation{0%{box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;}20%{box-shadow:0 0 15px #ff66cc,0 0 25px #ff66cc,0 0 35px #ff66cc;}40%{box-shadow:0 0 10px #ffcc33,0 0 20px #ffcc33,0 0 30px #ffcc33;}60%{box-shadow:0 0 15px #66ff66,0 0 25px #66ff66,0 0 35px #66ff66;}80%{box-shadow:0 0 10px #3399ff,0 0 20px #3399ff,0 0 30px #3399ff;}100%{box-shadow:0 0 10px #fffb00,0 0 20px #fffb00,0 0 30px #fffb00;}}#zfkLeftMenuContainer .zfkLeftMenuStep{position:absolute;background:#3498db;width:max-content;top:-35px;display:block;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu{background:rgba(0,0,0,0.4);border-radius:0 4px 4px 0;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu:hover .zfkLeftMenuBtn-titile{width:auto}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtn-titile{cursor:pointer;word-wrap:break-word;width:1em;display:inline-block}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl{display:none;margin:0 -6px;box-sizing:border-box}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li{list-style:none;color:#fff !important;cursor:pointer;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li:hover{background:#000}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li::before{content:\"+ \"}#zfkIp51Config{padding:10px}");
    $("<div id=\"zfkLeftMenuContainer\">\n      <div class=\"zfkLeftMenu\">\n        <span class=\"zfkLeftMenuBtn-titile\">菜单</span>\n        <ul class=\"zfkLeftMenuBtnUl\">\n        </ul>\n  \n      </div>\n      </div>").appendTo("body");
    $(".zfkLeftMenu").hover(() => {
      $(".zfkLeftMenuBtnUl").show();
    }, () => {
      $(".zfkLeftMenuBtnUl").hide();
    });
  },
  async runByUrl(_0x250c22) {
    if (baseConfig.project.id == "1845418970929172482") {
      {
        if (_0x250c22.includes("examCenter/myExamPaperView.do?")) {
          {
            _0x42e799.page_myExamPaperView();
          }
        }
        return;
      }
    }
    if (_0x250c22.includes("/courseSetting/coursePlay/")) {
      {
        _0x42e799.page_video();
      }
    } else {
      if (_0x250c22.includes("/courseStudyItem/courseStudyItem.learn.do")) {
        _0x42e799.page_videoTop();
      } else {
        if (_0x250c22.includes("/template-frontent/bipartitescreen")) {
          _0x42e799.page_video_bipartitescreen();
        } else {
          if (_0x250c22.includes("/frontend-page/specialSubjectDetail?")) {
            await _0x42e799.setUserName2();
            _0x42e799.page_specialSubjectDetail();
          } else {
            if (_0x250c22.includes("/course/course.courseInfo.do?")) {
              await _0x42e799.setUserName2();
              _0x42e799.page_courseInfo();
            } else {
              if (_0x250c22.includes("/els/html/index.parser.do")) {
                await _0x42e799.setUserName2();
                top.zfk.pageData.listType = 1;
              } else {
                if (_0x250c22.includes("examCenter/myExamPaperView.do?")) {
                  {
                    _0x42e799.page_myExamPaperView();
                  }
                } else {
                  if (_0x250c22.includes("/singleExamTemp.do")) {
                    _0x42e799.page_singleExamTemp();
                  } else {
                    if (_0x250c22.includes("/mix-pc/detail?")) {
                      _0x42e799.page_list3();
                    } else {
                      if (_0x250c22.includes("/studyCourse/studyCourse.viewCourseExamPage.do?")) {
                        {
                          _0x42e799.page_viewCourseExamPage();
                        }
                      } else {
                        if (_0x250c22.includes("/studyCourse/studyCourse.enterCourse.do")) {
                          {
                            _0x42e799.page_enterCourse();
                          }
                        } else {
                          if (_0x250c22.includes("/studyCourse/studyCourse.viewEvaluatePage.do")) {
                            _0x42e799.page_viewEvaluatePage();
                          } else {
                            if (_0x250c22.includes("/org/courseDetail")) {
                              _0x42e799.page_courseDetail();
                            } else {
                              if (_0x250c22.includes("/yyth/player/s/")) {
                                _0x42e799.page_yythPlayer();
                              } else {
                                if (_0x250c22.includes("/personCenter.myCollectCourse.do")) {
                                  await _0x42e799.setUserName2();
                                  _0x42e799.page_myCollectCourse();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  async page_myCollectCourse_NextPage() {
    let _0x1bdd65 = $(".user-action-study-list").text().trim();
    if ($(".laypage_next").length > 0) {
      $(".laypage_next")[0].click();
      await _0x42e799.waitOf(_0xf3079e => $(".user-action-study-list").text().trim() && $(".user-action-study-list").text().trim() != _0x1bdd65);
      _0x42e799.page_myCollectCourse();
      return;
    }
    _0x42e799.alertMsg("学习完成，如果结果有误，请使用`脚本菜单`中的清理缓存功能后再试");
  },
  async page_myCollectCourse() {
    console.log("%c page_myCollectCourse", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    _0x42e799.setGMData("close", _0x42e799.now());
    await _0x42e799.waitOf(_0x408655 => $(".user-action-study-list").length > 0);
    _0x42e799.setGMData("listUrl", location.href);
    await _0x42e799.waitTimeout(1000);
    let _0x383656 = null;
    let _0x59cf9a = await _0x42e799.getUserData();
    $(".user-action-study-list").each((_0x20cda4, _0x39cb82) => {
      let _0x669c2e = $(_0x39cb82).find(".user-course-show-title").text().trim();
      let _0x1773ba = _0x42e799.parseQueryString($(_0x39cb82).find("a.tit").attr("href")).courseId;
      if (!_0x59cf9a.finishCourseArr.includes(_0x1773ba)) {
        {
          _0x383656 = $(_0x39cb82);
          return false;
        }
      }
    });
    if (_0x383656 == null) {
      _0x42e799.page_myCollectCourse_NextPage();
      return;
    }
    _0x42e799.confirmRun("3秒后执行下一步", 3000).then(_0x582add => {
      _0x42e799.openLjTips();
      _0x42e799.setGMData("toListType", "open");
      _0x383656.find("a")[0].click();
    });
  },
  async page_yythPlayer() {
    console.log("%c page_yythPlayer", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.waitOf(_0x765a6 => $(".chapter-list .video").length > 0);
    await _0x42e799.waitTimeout(1000);
    let _0xbe450f = null;
    $(".chapter-list .video").each((_0x262afe, _0x4d41d5) => {
      let _0x129d1c = $(_0x4d41d5).find(".video-process:last").text().split("/").map(_0x177dec => Number(_0x177dec.replace(/[^0-9]/g, "")));
      if (_0x129d1c[0] < _0x129d1c[1]) {
        _0xbe450f = $(_0x4d41d5);
        return false;
      }
    });
    if (_0xbe450f == null) {
      let _0x47d401 = _0x42e799.getGMData("toListType", "notify");
      if (_0x47d401 == "open") {
        window.open(_0x42e799.getGMData("listUrl", "/"));
      } else {
        _0x42e799.setGMData("videoFinish", _0x42e799.now());
      }
      _0x42e799.setGMData("saveAndClose", _0x42e799.now());
      return;
    }
    if (_0xbe450f.is(".video-active")) {
      return;
    }
    await _0x42e799.confirmRun("准备切换到第一个未完成的节点");
    _0xbe450f.find(".video-title").click();
    if (_0x42e799.pageData.video.index != null) {
      return;
    }
    let _0x235ec1 = 2;
    let _0x53fd08 = null;
    let _0x287768 = 60;
    let _0x93761 = _0x287768;
    _0x42e799.pageData.video.index = setInterval(async () => {
      {
        try {
          if (_0x42e799.pageData.waitTime > 0) {
            _0x42e799.pageData.waitTime -= _0x235ec1;
            return;
          }
          if (!_0x42e799.getVideo()) {
            console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
            return;
          }
          let _0x245bbd = _0x42e799.getCurTime();
          if (_0x245bbd == _0x53fd08) {
            {
              _0x53fd08 = _0x42e799.getCurTime();
              _0x93761 -= _0x235ec1;
              if (_0x93761 <= 0) {
                {
                  _0x93761 = _0x287768;
                  _0x42e799.confirmRun("貌似卡死了，刷新页面重启").then(_0x54bc41 => {
                    {
                      _0x42e799.setGMData("reload", _0x42e799.now());
                    }
                  });
                  _0x42e799.pageData.waitTime = 10;
                  return;
                }
              }
            }
          } else {
            {
              _0x53fd08 = _0x245bbd;
              _0x93761 = _0x287768;
            }
          }
          _0x42e799.getVideo().volume = 0;
          let _0x30c6b1 = "进度：" + _0x42e799.getCurTime().toFixed(0) + "/" + _0x42e799.getTotalTime().toFixed(0);
          _0x42e799.setGMData("updateTitle", _0x30c6b1);
          if ($("body").text().trim() == "请求超时") {
            {
              _0x42e799.pageData.waitTime = 10;
              _0x42e799.setGMData("reload", _0x42e799.now());
              return;
            }
          }
          console.log("%c video run", "background:rgb(255,0,0);color:#fff");
          let _0x188696 = $(".video-active").find(".video-process:last").text().split("/").map(_0x41af9f => Number(_0x41af9f.replace(/[^0-9]/g, "")));
          if (_0x188696[0] >= _0x188696[1]) {
            {
              _0x42e799.pageData.waitTime = 30;
              _0x42e799.confirmRun("当前视频播放完成，准备刷新页面以进行下一个视频").then(_0x3e4d31 => {
                {
                  _0x42e799.setGMData("reload", _0x42e799.now());
                }
              });
              return false;
            }
          }
          let _0x2135af = await _0x42e799.isPlayFinish();
          if (_0x2135af) {
            {
              _0x42e799.pageData.waitTime = 15;
              layer.msg("视频即将结束，等待下一步操作", {
                time: 10000
              });
              setTimeout(() => {
                {
                  _0x42e799.play();
                }
              }, 10000);
              return;
            }
          }
          let _0xd45315 = await _0x42e799.videoIsPlay();
          if (!_0xd45315) {
            if (!_0x2135af) {
              _0x42e799.play();
            }
          }
        } catch (_0x2842f4) {
          {
            console.error("视频页面定时器出错", _0x2842f4);
          }
        }
      }
    }, _0x235ec1 * 1000);
  },
  async page_courseDetail() {
    console.log("%c page_courseDetail", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.waitOf(_0x3c0e95 => $(".info-content").text().includes("您还需要学习"));
    await _0x42e799.waitOf(_0x5a115b => $(".text-item:visible").length > 0);
    _0x42e799.tipsMsg("等待脚本操作", 5000);
    await _0x42e799.waitOf(_0x4d701b => _0x42e799.pageData.calcListFinish == true);
    await _0x42e799.waitTimeout(1000);
    let _0x1c3bba = $(".info-content").text().split("必修学分，");
    _0x1c3bba[0] = Number(_0x1c3bba[0].replace(/.*要学习/, ""));
    _0x1c3bba[1] = Number(_0x1c3bba[1].replace(/[^0-9\.]/g, ""));
    let _0x494aa5 = _0x42e799.getConfig();
    if (_0x494aa5.studyMode == "1") {
      return;
    }
    _0x42e799.setSkipBtn();
    if (_0x1c3bba[0] == 0 && _0x1c3bba[1] == 0) {
      {
        _0x42e799.alertMsg("学时已经达到要求");
        return;
      }
    }
    if ($("#tab-MUST").is(".is-active")) {
      {
        if (_0x1c3bba[0] != 0) {
          _0x42e799.beginRunList();
          return;
        }
        let _0x32c4d2 = $("#tab-SELECTIVE").click();
        await _0x42e799.waitListUpdate(_0x32c4d2);
        await _0x42e799.waitTimeout(500);
        _0x42e799.page_courseDetail();
        return;
      }
    } else {
      if (_0x1c3bba[1] != 0) {
        _0x42e799.beginRunList();
        return;
      }
      _0x42e799.alertMsg("学时已经达到要求");
    }
  },
  async waitListUpdate(_0x51c793) {
    return new Promise(async (_0x15334f, _0x215940) => {
      await _0x42e799.waitOf(_0x5a4b6f => $(".text-box:visible").text() != _0x51c793);
      return _0x15334f();
    });
  },
  async page_kcpg() {
    console.log("%c page_kcpg", "background:rgb(0,0,0);color:#fff");
  },
  async page_viewEvaluatePage() {
    console.log("%c page_viewEvaluatePage", "background:rgb(0,0,0);color:#fff");
    _0x42e799.closeWaitConfrimWin();
  },
  setHook() {
    ah.proxy({
      onRequest: (_0x34fd69, _0x3a22d4) => {
        {
          let _0x4a3ee9 = _0x34fd69.url;
          try {
            {
              if (_0x4a3ee9.includes("/courseStudy/getCourseDetailByProjectId")) {
                {
                  _0x42e799.clearStipBtnByHook();
                  return _0x3a22d4.next(_0x34fd69);
                }
              } else {
                if (_0x4a3ee9.includes("/record/updateCourseRecord")) {
                  {
                    let _0x482a4b = _0x42e799.getConfig();
                    if (_0x482a4b.mg == "1") {
                      _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc", false).then(_0x4c4837 => {
                        {
                          let _0x24ae16 = JSON.parse(_0x34fd69.body);
                          _0x24ae16.currentStudyTime = 180;
                          _0x24ae16.currentPosition = _0x42e799.pageData.curStudyPosition;
                          let _0x6871a2 = _0x42e799.pageData.curStudyData.playTime || _0x42e799.pageData.curStudyData.minStudyTime;
                          let _0x1a23cc = (_0x42e799.pageData.curStudyPosition + 180) * 100 / _0x6871a2;
                          if (_0x1a23cc > 100) {
                            _0x1a23cc = 100;
                          }
                          _0x42e799.tipsMsg("当前进度：" + _0x1a23cc.toFixed(2) + "%");
                          _0x42e799.pageData.curStudyPosition += 180;
                          if (_0x42e799.pageData.curStudyPosition > _0x6871a2) {
                            _0x42e799.pageData.curStudyPosition = _0x6871a2;
                          }
                          _0x34fd69.body = JSON.stringify(_0x24ae16);
                          return _0x3a22d4.next(_0x34fd69);
                        }
                      }, _0x588fa0 => {
                        {
                          return _0x3a22d4.next(_0x34fd69);
                        }
                      });
                    } else {
                      return _0x3a22d4.next(_0x34fd69);
                    }
                  }
                } else {
                  {
                    _0x3a22d4.next(_0x34fd69);
                  }
                }
              }
            }
          } catch (_0x33b9c4) {
            {
              _0x3a22d4.next(_0x34fd69);
            }
          }
        }
      },
      onError: (_0x434d0a, _0x159a30) => {
        console.log(_0x434d0a.type);
        _0x159a30.next(_0x434d0a);
      },
      onResponse: (_0x1fc3b5, _0x90622a) => {
        try {
          {
            let _0xd87c54 = _0x1fc3b5.config.url;
            if (_0xd87c54.includes("/record/updateCourseRecord")) {
              _0x1fc3b5.response.includes("操作处理成功");
            } else {
              if (_0xd87c54.includes("/getRmProjectDetail.do")) {
                let _0x47ae53 = JSON.parse(_0x1fc3b5.response);
                _0x42e799.pageData.listStudyScoreData = _0x47ae53;
                _0x42e799.calcListFinish();
              } else {
                if (_0xd87c54.includes("/courseStudy/getCourseDetailByProjectId")) {
                  _0x42e799.waitSetSkipBtnByHook();
                } else {
                  if (_0xd87c54.includes("/course.loadCourseSystemSeting.do")) {
                    let _0x2d5abd = JSON.parse(_0x1fc3b5.response);
                    _0x2d5abd.preventHangTime = 99999;
                    _0x1fc3b5.response = JSON.stringify(_0x2d5abd);
                  }
                }
              }
            }
          }
        } finally {
          {
            _0x90622a.next(_0x1fc3b5);
          }
        }
      }
    }, unsafeWindow.window);
  },
  findQA(_0x49fe01, _0xc23520) {
    let _0x2b37e1 = _0x49fe01.find(_0x5071bc => _0x5071bc.fullTitle == _0xc23520);
    if (!_0x2b37e1) {
      _0x2b37e1 = _0x49fe01.find(_0x20f497 => _0x42e799.simpleHtml(_0x20f497.fullTitle) == _0x42e799.simpleHtml(_0xc23520));
    }
    if (!_0x2b37e1) {
      _0x2b37e1 = _0x49fe01.find(_0x58610d => _0x42e799.simpleText(_0x58610d.fullTitle) == _0x42e799.simpleText(_0xc23520));
    }
    return _0x2b37e1;
  },
  async page_enterCourse() {
    console.log("%c page_enterCourse", "background:rgb(0,0,0);color:#fff");
    _0x42e799.closeWaitConfrimWin();
    await _0x42e799.waitOf(_0x4c69de => $(".cs-test-item").length > 0);
    await _0x42e799.waitTimeout(1000);
    if ($(".cs-test-title").text().trim() == "课程评估") {
      _0x42e799.page_kcpg();
      return;
    }
    let _0x330cdb = [];
    _0x42e799.tipsMsg("准备查询答案");
    $(".cs-test-item").each((_0x4c3960, _0x47a5bf) => {
      let _0x233298 = $(_0x47a5bf).find(".cs-test-question").text().trim();
      _0x233298 = _0x233298.replace(/\d+、(.*)（\d+.*?分）/, "$1");
      _0x330cdb.push(_0x233298);
    });
    _0x21da8b && console.log(_0x330cdb);
    let _0x5af37a = [];
    let _0x4dcc4a = await _0x42e799.queryQaFree(_0x330cdb, "云端学习");
    let _0x1375ed = false;
    $(".cs-test-item").each((_0x1b2eda, _0x389bfd) => {
      {
        let _0x1d049c = $(_0x389bfd).find(".cs-test-question").text().trim();
        _0x1d049c = _0x1d049c.replace(/\d+、(.*)（\d+.*?分）/, "$1");
        let _0x51f64f = _0x42e799.findQA(_0x4dcc4a, _0x1d049c);
        if (!_0x51f64f) {
          {
            _0x5af37a.push($(_0x389bfd).find(".cs-test-option .cs-option-row").eq(0));
            _0x1375ed = true;
            return;
          }
        }
        let _0x1a33c8 = _0x51f64f.fullAnswer.split("#split#");
        $(_0x389bfd).find(".cs-test-option .cs-option-row").each((_0x12be3c, _0x476922) => {
          let _0x22623d = $(_0x476922).text().trim();
          let _0x46352e = _0x1a33c8.find(_0x3da5bf => _0x3da5bf == _0x22623d || _0x42e799.isMatchQAText(_0x22623d, _0x3da5bf));
          if (_0x46352e) {
            _0x5af37a.push($(_0x476922));
          }
        });
      }
    });
    for (let _0x6a2579 = 0; _0x6a2579 < _0x5af37a.length; _0x6a2579++) {
      const _0xca5f34 = _0x5af37a[_0x6a2579];
      _0xca5f34.click();
      _0x42e799.tipsMsg("正在答题");
      await _0x42e799.waitTimeout(100);
    }
    _0x42e799.tipsMsg("答题完毕");
    if (_0x1375ed) {
      {
        _0x42e799.confirmRun("存在没有答案的题目（全选A），10秒后自动交卷并采集答案后重新答题。如不想这样子，请点击下面[取消执行按钮]后手动答题并交卷", 10000).then(_0x3e818c => {
          _0x42e799.page_exam_submit();
        });
        return;
      }
    }
    _0x42e799.confirmRun("3秒后交卷").then(_0x3794cf => {
      _0x42e799.page_exam_submit();
    });
  },
  async page_exam_submit() {
    $("#goNext").click();
    await _0x42e799.waitTimeout(500);
    _0x42e799.getElByText($("a.layui-layer-btn1"), "确定")[0].click();
    _0x42e799.waitOf(_0x4f060b => _0x42e799.getElByText($("a.layui-layer-btn0"), "查看详情") != null).then(_0x52c8e9 => {
      _0x42e799.getElByText($("a.layui-layer-btn0"), "查看详情")[0].click();
    });
    _0x42e799.waitOf(_0x5de8be => _0x42e799.getElByText($(".elpui-layer-btn0"), "查看结果") != null).then(_0x59aba4 => {
      {
        _0x42e799.getElByText($(".elpui-layer-btn0"), "查看结果")[0].click();
      }
    });
  },
  async page_viewCourseExamPage() {
    console.log("%c page_viewCourseExamPage", "background:rgb(0,0,0);color:#fff");
    _0x42e799.closeWaitConfrimWin();
    await _0x42e799.waitOf(_0x94fbff => $(".cs-test-item").length > 0);
    await _0x42e799.waitTimeout(1000);
    _0x42e799.tipsMsg("准备采集答案");
    let _0x311834 = [];
    $(".cs-test-item").each((_0x11c847, _0x4a728c) => {
      let _0x2a3ef3 = $(_0x4a728c).find(".cs-test-question").text().trim();
      _0x2a3ef3 = _0x2a3ef3.replace(/\d+、(.*)（\d+.*?分）/, "$1");
      let _0x3c145f = [];
      $(_0x4a728c).find("script").each((_0x39441a, _0x546b51) => {
        let _0x9f6b5c = $(_0x546b51).text().split(",")[1].replace(/.*'(.*)'.*/, "$1");
        let _0x3d1a85 = $("#" + _0x9f6b5c).parents(".cs-option-cell:first").next().text().trim();
        if ($("#" + _0x9f6b5c).is("p")) {
          _0x3d1a85 = $("#" + _0x9f6b5c).text().trim();
        }
        _0x3c145f.push(_0x3d1a85);
      });
      _0x311834.push({
        key: _0x2a3ef3,
        value: _0x3c145f.join("#split#")
      });
    });
    _0x21da8b && console.log(_0x311834);
    await _0x42e799.uploadQA(_0x311834, 60, "云端学习");
    _0x42e799.tipsMsg("答案采集完毕");
    if ($("#startStudy").length > 0) {
      $("#startStudy").click();
      return;
    }
    _0x42e799.confirmRun().then(_0x30b0eb => {
      location.href = _0x42e799.getGMData("listUrl", "/");
    });
  },
  async page_singleExamTemp() {
    console.log("%c page_singleExamTemp", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.waitOf(_0x32ad52 => $(".question-panel-middle").length > 0);
    let _0x43731e = [];
    _0x42e799.tipsMsg("准备查询答案");
    $(".question-panel-middle").each((_0x538e7b, _0x3623c8) => {
      {
        let _0x50a2e3 = $(_0x3623c8).find(".question-stem").text().trim();
        _0x50a2e3 = _0x50a2e3.replace(/^(\d+\s*?\.)\s*(.*)\s*（\d+\.?\d*分）/, "$2");
        _0x43731e.push(_0x50a2e3);
      }
    });
    _0x21da8b && console.log(_0x43731e);
    let _0x1c9a32 = [];
    let _0x2fe2f0 = await _0x42e799.queryQaFree(_0x43731e, "云端学习");
    $(".question-panel-middle").each((_0x3f5232, _0x146c44) => {
      let _0x564ec3 = $(_0x146c44).find(".question-stem").text().trim();
      _0x564ec3 = _0x564ec3.replace(/^(\d+\s*?\.)\s*(.*)\s*（\d+\.?\d*分）/, "$2");
      let _0x22813e = _0x2fe2f0.find(_0x4d198f => _0x4d198f.fullTitle == _0x564ec3 || _0x42e799.isMatchQAText(_0x4d198f.fullTitle, _0x564ec3));
      if (!_0x22813e) {
        return;
      }
      let _0x344e7d = _0x22813e.fullAnswer.split("#split#");
      $(_0x146c44).find("label").each((_0x1abf0e, _0x3d9846) => {
        {
          let _0x4d286c = $(_0x3d9846).text().replace(/^[a-zA-Z]\./, "").trim();
          _0x4d286c = _0x4d286c.replace(/^[a-zA-Z]\.\s*/, "");
          let _0xd7c526 = _0x344e7d.find(_0x290bcc => _0x290bcc == _0x4d286c || _0x42e799.isMatchQAText(_0x4d286c, _0x290bcc));
          if (_0xd7c526) {
            {
              _0x1c9a32.push($(_0x3d9846));
            }
          }
        }
      });
    });
    for (let _0x8e11dd = 0; _0x8e11dd < _0x1c9a32.length; _0x8e11dd++) {
      {
        const _0x2bad58 = _0x1c9a32[_0x8e11dd];
        _0x2bad58.click();
        _0x42e799.tipsMsg("正在答题");
        await _0x42e799.waitTimeout(100);
      }
    }
    _0x42e799.tipsMsg("答题完毕");
  },
  async page_wrongAnswer() {
    console.log("%c page_wrongAnswer", "background:rgb(0,0,0);color:#fff");
    if ($(".choice-cont").length == 0) {
      _0x42e799.tipsMsg("未找到错题本的题目列表");
      return;
    }
    _0x42e799.tipsMsg("准备采集答案");
    await _0x42e799.waitTimeout(500);
    let _0x33978e = [];
    $(".choice-cont").each((_0x5bd3ba, _0x382a71) => {
      let _0x341b0a = $(_0x382a71).find(".title-span").text().trim().replace(/^[\d+\.]*(.*)/, "$1");
      let _0x246f28 = $(_0x382a71).find(".biaozhun").text().trim().replace("标准答案", "").trim();
      if (!_0x246f28 || _0x246f28 == "") {
        return true;
      }
      let _0x172a55 = [];
      if (["正确", "错误", "对", "错"].includes(_0x246f28)) {
        _0x172a55 = [_0x246f28];
      } else {
        _0x172a55 = _0x246f28.replace(/[^A-Z]/g, "").split("");
      }
      let _0x5972f7 = [];
      _0x172a55.forEach(_0x426129 => {
        {
          console.log(_0x341b0a, _0x426129);
          let _0x10c9e2 = $(_0x382a71).find("label").eq(_0x42e799.formatAnswerOption(_0x426129)).text().replace(/^[a-zA-Z]\./, "").trim();
          _0x10c9e2 = _0x10c9e2.replace(/^[a-zA-Z]\.\s*/, "");
          if (["正确", "错误", "对", "错"].includes(_0x426129)) {
            _0x10c9e2 = _0x426129;
          }
          _0x10c9e2 = _0x10c9e2.trim().replace(/^[a-zA-Z]\s*/, "").trim();
          _0x5972f7.push(_0x10c9e2);
        }
      });
      _0x33978e.push({
        key: _0x341b0a,
        value: _0x5972f7.join("#split#")
      });
    });
    _0x21da8b && console.log(_0x33978e);
    await _0x42e799.uploadQA(_0x33978e, 50, "云端学习");
    _0x42e799.tipsMsg("答案采集完毕");
  },
  async page_myExamPaperView() {
    console.log("%c page_myExamPaperView", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.waitOf(_0x68db78 => $("#resultDateForm .question-panel-middle").length > 0);
    _0x42e799.tipsMsg("准备采集答案");
    await _0x42e799.waitTimeout(500);
    let _0xc214b2 = [];
    $("#resultDateForm .question-panel-middle").each((_0xc5e3f6, _0x1da3d5) => {
      {
        let _0x5e2ab3 = $(_0x1da3d5).find(".question-stem .name").text().trim();
        _0x5e2ab3 = _0x5e2ab3.replace(/^\.?\s*(.*)\s*（\d+\.?\d*\s*分）$/, "$1");
        let _0x36dc57 = $(_0x1da3d5).find(".true-answer").text().trim().replace(/^.*参考答案\s*：(.*)$/, "$1");
        if (!_0x36dc57 || _0x36dc57 == "") {
          return true;
        }
        let _0x320698 = [];
        if (["正确", "错误"].includes(_0x36dc57)) {
          {
            _0x320698 = [_0x36dc57];
          }
        } else {
          _0x320698 = _0x36dc57.replace(/[^A-Z]/g, "").split("");
        }
        let _0x51cd78 = [];
        _0x320698.forEach(_0x2ee471 => {
          console.log(_0x5e2ab3, _0x2ee471);
          let _0x3b9e69 = $(_0x1da3d5).find("label").eq(_0x42e799.formatAnswerOption(_0x2ee471)).text().replace(/^[a-zA-Z]\./, "").trim();
          _0x3b9e69 = _0x3b9e69.replace(/^[a-zA-Z]\.\s*/, "");
          if (["正确", "错误"].includes(_0x2ee471)) {
            _0x3b9e69 = _0x2ee471;
          }
          _0x51cd78.push(_0x3b9e69);
        });
        _0xc214b2.push({
          key: _0x5e2ab3,
          value: _0x51cd78.join("#split#")
        });
      }
    });
    _0x21da8b && console.log(_0xc214b2);
    await _0x42e799.uploadQA(_0xc214b2, 60, "云端学习");
    _0x42e799.tipsMsg("答案采集完毕");
  },
  async page_video_bipartitescreen() {
    console.log("%c page_courseInfo", "background:rgb(0,0,0);color:#fff");
    _0x42e799.closeWaitConfrimWin();
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    let _0x4e50f2 = 2;
    let _0x566b7f = null;
    let _0x46c2c2 = 60;
    let _0x52c020 = _0x46c2c2;
    _0x42e799.closeWaitConfrimWin();
    if (_0x42e799.pageData.video.index != null) {
      {
        return;
      }
    }
    let _0x55d2b6 = _0x42e799.getConfig();
    let _0x146270 = Number(_0x55d2b6.bs);
    setTimeout(async () => {
      let _0x50dad3 = _0x42e799.getCurTime();
      await _0x42e799.waitTimeout(5000);
      if (_0x42e799.getCurTime() == _0x50dad3) {
        {
          _0x42e799.confirmRun("貌似卡主了，3秒后刷新页面").then(_0xf530a2 => {
            location.reload();
          });
        }
      }
    }, 60000);
    _0x42e799.pageData.video.index = setInterval(async () => {
      try {
        {
          if (_0x42e799.pageData.waitTime > 0) {
            {
              _0x42e799.pageData.waitTime -= _0x4e50f2;
              return;
            }
          }
          if (!_0x42e799.getVideo()) {
            {
              console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
              return;
            }
          }
          let _0x5e8e16 = _0x42e799.getCurTime();
          if (_0x5e8e16 == _0x566b7f) {
            {
              _0x566b7f = _0x42e799.getCurTime();
              _0x52c020 -= _0x4e50f2;
              if (_0x52c020 <= 0) {
                _0x52c020 = _0x46c2c2;
                _0x42e799.confirmRun("貌似卡死了，前往列表页面").then(_0x111eb1 => {
                  location.href = _0x42e799.getGMData("courseDetailUrl", "/");
                });
                _0x42e799.pageData.waitTime = 10;
                return;
              }
            }
          } else {
            {
              _0x566b7f = _0x5e8e16;
              _0x52c020 = _0x46c2c2;
            }
          }
          _0x42e799.getVideo().volume = 0;
          let _0x3fd3b5 = "进度：" + _0x42e799.getCurTime().toFixed(0) + "/" + _0x42e799.getTotalTime().toFixed(0);
          $("title").text(_0x3fd3b5);
          console.log("%c video run", "background:rgb(255,0,0);color:#fff");
          let _0x39a5d3 = _0x42e799.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
          if (_0x39a5d3 != null) {
            _0x39a5d3.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
          }
          let _0x5bc562 = await _0x42e799.isPlayFinish();
          if (_0x5bc562) {
            {
              _0x42e799.pageData.waitTime = 15;
              const _0x2d25be = {
                time: 10000
              };
              layer.msg("视频即将结束，等待下一步操作", _0x2d25be);
              setTimeout(() => {
                _0x42e799.confirmRun("课程学习完毕，准备关闭当前页面").then(_0x32bdbb => {
                  {
                    _0x42e799.setGMData("videoFinish", _0x42e799.now());
                  }
                });
              }, 10000);
              clearInterval(_0x42e799.pageData.video.index);
              _0x42e799.pageData.video.index = null;
              return;
            }
          }
          let _0x53cb4c = await _0x42e799.videoIsPlay();
          if (!_0x53cb4c) {
            {
              if (!_0x5bc562) {
                _0x42e799.play();
              }
            }
          }
        }
      } catch (_0x31c3a8) {
        {
          console.error("视频页面定时器出错", _0x31c3a8);
        }
      }
    }, _0x4e50f2 * 1000);
  },
  async page_courseInfo() {
    console.log("%c page_courseInfo", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.waitOf(_0x3986c5 => $("#goStudyBtn").length > 0);
    await _0x42e799.waitTimeout(1000);
    $("#goStudyBtn")[0].click();
    let _0x432ab7 = location.href;
    setTimeout(() => {
      {
        if (location.href != _0x432ab7) {
          {
            _0x42e799.runByUrl(location.href);
          }
        }
      }
    }, 3000);
  },
  async page_specialSubjectDetail() {
    console.log("%c page_specialSubjectDetail", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x42e799.waitOf(_0x4d3aa1 => $(".course-list .ant-list-item").length > 0);
    await _0x42e799.waitTimeout(1000);
    let _0x2b5a1d = null;
    $(".course-list .ant-list-item").each((_0x236607, _0x47282b) => {
      {
        if ($(_0x47282b).find(".top-extra").text().includes("已完成") || $(_0x47282b).find(".top-extra").text().includes("课程评估")) {
          {
            return true;
          }
        }
        _0x2b5a1d = $(_0x47282b);
        return false;
      }
    });
    if (_0x2b5a1d == null) {
      _0x42e799.alertMsg("学习完成，请检查");
      return;
    }
    _0x42e799.setGMData("docListUrl", location.href);
    _0x42e799.confirmRun("3秒后执行下一步", 3000).then(_0x5131ae => {
      _0x2b5a1d.find(".course-meta").click();
      _0x42e799.openLjTips(false);
    });
    if (_0x42e799.pageData.index.docList == null) {
      _0x42e799.pageData.index.docList = GM_addValueChangeListener("videoFinish", function (_0x4976cb, _0x1eef76, _0x4002fe, _0x5d6692) {
        location.reload();
      });
    }
  },
  async page_list2() {
    console.log("%c page_list2", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.setUserName_http();
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x42e799.waitTimeout(1000);
    if (_0x42e799.pageData.index.list == null) {
      _0x42e799.pageData.index.list = GM_addValueChangeListener("videoFinish", function (_0x5f92f0, _0x3ea2f1, _0x357911, _0x2c8e37) {
        _0x42e799.tipsMsg("等待脚本自动操作", 10000);
        setTimeout(() => {
          $(".nc-rank-link.nc-rank-active")[0].click();
          setTimeout(() => {
            _0x42e799.setGMData("runTime", _0x42e799.now());
            _0x42e799.page_list();
          }, 5000);
        }, 5000);
      });
    }
    let _0x887436 = null;
    $(".nc-mycourse-card").each((_0x207169, _0x30f3c0) => {
      if ($(_0x30f3c0).find(".done-txt").length > 0) {
        {
          return true;
        }
      }
      let _0x186b68 = _0x42e799.getElByText($(_0x30f3c0).find("p"), "学习进度:", "startsWith");
      if (_0x186b68.find(".nc-progress").length > 0) {
        {
          _0x887436 = $(_0x30f3c0);
          return false;
        }
      }
    });
    if (_0x887436 == null) {
      {
        _0x42e799.page_list_nextPage2();
        return;
      }
    }
    _0x42e799.setGMData("listUrl", location.href);
    _0x42e799.confirmRun("3秒后执行下一步", 3000).then(_0x3bea56 => {
      _0x887436.find(".goStudy")[0].click();
      _0x42e799.openLjTips(false);
    });
  },
  async page_list3() {
    console.log("%c page_list3", "background:rgb(0,0,0);color:#fff");
    await _0x42e799.setUserName_http();
    _0x42e799.closeWaitConfrimWin();
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x42e799.waitOf(_0x468f8e => $(".task-list").length > 0);
    await _0x42e799.waitTimeout(1000);
    let _0x13ce4a = null;
    $(".task-list").each((_0x2d4cea, _0x26ded2) => {
      if ($(_0x26ded2).find(".task-status").text().trim() == "已完成") {
        return true;
      }
      _0x13ce4a = $(_0x26ded2);
      return false;
    });
    if (_0x13ce4a == null) {
      _0x42e799.alertMsg("学习完成");
      return;
    }
    _0x42e799.setGMData("listUrl", location.href);
    _0x42e799.setGMData("toListType", "open");
    _0x42e799.confirmRun("3秒后执行下一步", 3000).then(_0x21cc09 => {
      _0x13ce4a.find(".task-name").click();
      _0x42e799.openLjTips(true);
    });
  },
  async beginRunList() {
    _0x42e799.setGMData("runTime", _0x42e799.now());
    _0x42e799.page_list();
  },
  clearStipBtnByHook() {
    $(".zfk-skipContainer").remove();
    _0x42e799.pageData.oldListTxt = $(".text-item:visible").text();
  },
  async waitSetSkipBtnByHook() {
    await _0x42e799.waitOf(_0xec6c2c => $(".text-item:visible").text() != _0x42e799.pageData.oldListTxt);
    await _0x42e799.waitTimeout(500);
    _0x42e799.setSkipBtn();
  },
  setSkip(_0x5ecd89, _0x35ce47, _0x5a3133) {
    _0x5ecd89.stopPropagation();
    $(".zfk-skipContainer").remove();
    var _0x2c139e = _0x42e799.getGMData("skipList", []);
    if (_0x5a3133) {
      _0x2c139e.push(_0x35ce47);
      _0x42e799.setGMData("skipList", _0x2c139e);
    } else {
      _0x42e799.setGMData("skipList", _0x2c139e.filter(_0x43695a => _0x43695a != _0x35ce47));
    }
    layer.msg("操作成功");
    _0x42e799.setSkipBtn();
  },
  setSkipBtn() {
    var _0x19252d = _0x42e799.getGMData("skipList", []);
    $(".zfk-skipContainer").remove();
    $(".text-item:visible").each((_0x1bc9dc, _0x4775cc) => {
      let _0x1ef3e2 = $(_0x4775cc).find(".item__name").attr("title");
      let _0x598e86 = $(_0x4775cc);
      if (_0x19252d.includes(_0x1ef3e2)) {
        _0x598e86.append("<div class=\"text-center zfk-skipContainer\"><button type=\"button\" class=\"zfk-btn info\"  onclick=\"zfk.setSkip(event,'" + _0x1ef3e2 + "',false)\">脚本：取消跳过</button></div>");
      } else {
        {
          _0x598e86.append("<div class=\"text-center zfk-skipContainer\"><button type=\"button\" class=\"zfk-btn danger\" onclick=\"zfk.setSkip(event,'" + _0x1ef3e2 + "',true)\">脚本：跳过课程</button></div>");
        }
      }
    });
  },
  async page_list() {
    console.log("%c page_list", "background:rgb(0,0,0);color:#fff");
    _0x42e799.pageData.listStudyScoreData = null;
    if (_0x42e799.pageData.listType == 1) {
      $("iframe[src^=\"/els/html/index.parser.do\"]")[0].contentWindow.zfk.page_list();
      return;
    }
    if ($(".text-item:visible").length == 0 && $(".nc-mycourse-card").length == 0) {
      _0x42e799.tipsMsg("请进入课程列表页面再启动脚本");
      return;
    }
    if ($(".nc-mycourse-card").length > 0) {
      _0x42e799.page_list2();
      return;
    }
    await _0x42e799.setUserName();
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x42e799.openMgConfigTips(0);
    await _0x42e799.waitTimeout(1000);
    _0x42e799.setSkipBtn();
    if (_0x42e799.pageData.index.list == null) {
      _0x42e799.pageData.index.list = GM_addValueChangeListener("videoFinish", function (_0x306587, _0x1426e4, _0x21fecc, _0x71fbdf) {
        {
          _0x42e799.tipsMsg("等待脚本自动操作", 5000);
          _0x42e799.pageData.listStudyScoreData = null;
          let _0x19e699 = _0x42e799.getConfig();
          if (_0x19e699.studyMode == "2") {
            _0x42e799.setGMData("runTime", _0x42e799.now());
            location.reload();
            return;
          }
          setTimeout(() => {
            {
              $(".el-tabs__item.is-active").click();
              setTimeout(() => {
                _0x42e799.setGMData("runTime", _0x42e799.now());
                _0x42e799.page_list();
              }, 5000);
            }
          }, 5000);
        }
      });
    }
    let _0x3d8527 = null;
    var _0x48132c = _0x42e799.getGMData("skipList", []);
    $(".text-item:visible").each((_0x2d540d, _0x4a1c67) => {
      {
        let _0x26c53 = $(_0x4a1c67).find(".item__name").attr("title");
        if (_0x48132c.includes(_0x26c53)) {
          return true;
        }
        if ($(_0x4a1c67).find(".info-num").text().includes("已完成")) {
          return true;
        }
        _0x3d8527 = $(_0x4a1c67);
        return false;
      }
    });
    if (_0x3d8527 == null) {
      {
        _0x42e799.page_list_nextPage();
        return;
      }
    }
    _0x42e799.setGMData("listUrl", location.href);
    _0x42e799.setGMData("toListType", "notify");
    _0x42e799.confirmRun("3秒后执行下一步", 3000).then(_0x16598f => {
      {
        _0x3d8527.click();
        _0x42e799.openLjTips(false);
      }
    });
  },
  calcListFinish() {
    _0x42e799.pageData.calcListFinish = true;
  },
  async page_list_nextPage2() {
    let _0x4791f1 = $(".nc-mycourse-card").eq(0).text().trim();
    if ($(".a.laypage_next").length > 0) {
      {
        $(".a.laypage_next")[0].click();
        await _0x42e799.waitOf(_0x5d435e => $(".nc-mycourse-card").eq(0).text().trim() != _0x4791f1);
        await _0x42e799.waitTimeout(500);
        _0x42e799.page_list2();
      }
    } else {
      _0x42e799.alertMsg("学习完成");
    }
  },
  async page_list_nextPage() {
    let _0xca258 = $(".text-item:visible").eq(0).text().trim();
    if (!$(".btn-next").is("[disabled]")) {
      {
        $(".btn-next").click();
        await _0x42e799.waitOf(_0x5745bd => $(".text-item:visible").eq(0).text().trim() != _0xca258);
        await _0x42e799.waitTimeout(500);
        _0x42e799.page_list();
      }
    } else {
      _0x42e799.alertMsg("学习完成");
    }
  },
  toListPage(_0xcee90d = true, _0x12d48a = false) {
    let _0x29e040 = 3000;
    if (!_0xcee90d) {
      _0x29e040 = 0;
    }
    let _0x54d290 = location;
    if (_0x12d48a) {
      _0x54d290 = _0x12d48a.location;
    }
    _0x42e799.confirmRun("当前课程已经完成，准备前往下一个课程", _0x29e040).then(_0x38f6e1 => {
      let _0x471a02 = _0x42e799.getGMData("listUrl", null);
      if (_0x471a02 == null) {
        _0x42e799.alertMsg("请手动前往列表页面，让脚本自动从列表页面打开视频播放页面，否则无法完成自动换课");
        return;
      }
      _0x54d290.href = _0x471a02;
    });
  },
  async page_videoTopYZM() {
    console.log("%c page_videoTopYZM", "background:rgb(0,0,0);color:#fff");
    let _0x5161b5 = _0x42e799.getGMData("page_videoTopYZM_LastTime", 0);
    if (_0x42e799.now() - _0x5161b5 < 10000) {
      return;
    }
    _0x42e799.setGMData("page_videoTopYZM_LastTime", _0x42e799.now());
    _0x42e799.sendNotify("出现验证码了，请尽快手动输入");
  },
  async orc(_0x22de1d, _0x312300 = false, _0x5a8553 = false) {
    return new Promise(async (_0x4424b1, _0x4d341f) => {
      if (!_0x22de1d) {
        return _0x4d341f("请传入dom元素");
      }
      let _0x490595 = null;
      if (_0x312300) {
        {
          _0x490595 = _0x42e799.base64ToFile(_0x22de1d);
        }
      } else {
        _0x490595 = _0x42e799.base64ToFile(_0x42e799.imgToBase64(_0x22de1d.get(0)));
      }
      if (_0x490595 == null) {
        return _0x4d341f("图片错误");
      }
      var _0x29f87d = new FormData();
      _0x29f87d.append("image", _0x490595, "image.png");
      let _0x3a0e66 = _0x42e799.url.base + "/ocr/file";
      await _0x42e799.gmAuthPost("/yh/price/downYZM", {});
      GM_xmlhttpRequest({
        method: "post",
        url: _0x3a0e66,
        data: _0x29f87d,
        onload: function (_0x2ab911) {
          let _0x24e28e = _0x2ab911.response;
          _0x5a8553 && layer.msg(_0x24e28e);
          return _0x4424b1(_0x24e28e);
        },
        onerror: function (_0x3c3f3e) {
          console.log(_0x3c3f3e);
          _0x4d341f(_0x3c3f3e);
        }
      });
    });
  },
  imgToBase64(_0x589dee) {
    const _0x3c8475 = document.createElement("canvas");
    const _0x40822e = _0x3c8475.getContext("2d");
    _0x3c8475.width = _0x589dee.width;
    _0x3c8475.height = _0x589dee.height;
    _0x40822e.drawImage(_0x589dee, 0, 0, _0x589dee.width, _0x589dee.height);
    return _0x3c8475.toDataURL("image/png");
  },
  base64ToFile(_0x2b83b5, _0xba7667) {
    var _0x3ec2e4 = _0x2b83b5.split(",");
    var _0x4ad49c = _0x3ec2e4[0].match(/:(.*?);/)[1];
    var _0x2493c2 = atob(_0x3ec2e4[1]);
    var _0x3ea692 = _0x2493c2.length;
    var _0xe300cf = new Uint8Array(_0x3ea692);
    while (_0x3ea692--) {
      _0xe300cf[_0x3ea692] = _0x2493c2.charCodeAt(_0x3ea692);
    }
    const _0x18f464 = {
      type: _0x4ad49c
    };
    return new File([_0xe300cf], _0xba7667, _0x18f464);
  },
  async setCourseFinish() {
    return new Promise(async (_0x415094, _0x2e9b4b) => {
      {
        let _0x14f16f = _0x42e799.parseQueryString();
        let _0x59532a = await _0x42e799.getUserData();
        _0x59532a.finishCourseArr.push(_0x14f16f.courseId);
        await _0x42e799.setUserData(_0x59532a);
        return _0x415094();
      }
    });
  },
  async page_videoTop() {
    console.log("%c page_videoTop", "background:rgb(0,0,0);color:#fff");
    _0x42e799.closeWaitConfrimWin();
    await _0x42e799.openMgConfigTips(0);
    GM_addValueChangeListener("closePage", function (_0x20598b, _0x4673ac, _0xea8997, _0x52e6e7) {
      {
        _0x42e799.openLjTips();
      }
    });
    GM_addValueChangeListener("close", function (_0x15b925, _0x586790, _0x131aa4, _0x487855) {
      window.close();
    });
    GM_addValueChangeListener("reload", function (_0x28784e, _0x191d52, _0x38e0c6, _0x107d1f) {
      {
        location.reload();
      }
    });
    GM_addValueChangeListener("toUrl", function (_0x2d209a, _0x4f7069, _0xc0cf02, _0x584f7f) {
      {
        location.href = _0xc0cf02.url;
      }
    });
    GM_addValueChangeListener("updateTitle", function (_0xcde281, _0x47da8e, _0x59e950, _0x14f650) {
      $("title").val(_0x59e950.title);
    });
    GM_addValueChangeListener("setCourseFinish", async function (_0x390670, _0x3434cb, _0x39e5a7, _0x143f6f) {
      _0x42e799.setCourseFinish();
    });
    GM_addValueChangeListener("saveAndClose", async function (_0x1078c8, _0x186dec, _0x734a5e, _0xf0d71e) {
      {
        $("#goBack").click();
        await _0x42e799.waitTimeout(500);
        $(".layui-layer-btn1")[0].click();
      }
    });
    let _0x7d22da = setInterval(() => {
      if (_0x42e799.getElByText($("p"), "当前已有课程正在学习中", "startsWith") != null) {
        _0x42e799.tipsMsg("课程切换间隔过短，等待脚本自动操作", 15000);
        clearInterval(_0x7d22da);
        setTimeout(() => {
          {
            location.reload();
          }
        }, 15000);
        return;
      }
      if ($("#identifyCode:visible").length > 0) {
        _0x42e799.page_videoTopYZM();
      }
      if ($("[title=\"恭喜您已经完成课程\"]:visible").length > 0) {
        {
          clearInterval(_0x7d22da);
          _0x42e799.setGMData("videoFinish", _0x42e799.now());
          let _0x19d64f = _0x42e799.getGMData("toListType", "notify");
          if (!(_0x19d64f == "open")) {
            {
              _0x42e799.page_video_saveAndClose();
            }
          }
        }
      }
    }, 2000);
    _0x42e799.waitOf(_0x28bde8 => $(".cl-catalog-link").length > 0).then(_0x4e94ef => {});
  },
  async page_video_mg() {
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    console.log("%c page_video_mg", "background:rgb(0,0,0);color:#fff");
    let _0x596393 = ["pdf", "ppt", "word", "excel", "pptx"];
    await _0x42e799.waitOf(_0x34ed6b => $("#app > div")[0].__vue__.courseData[0].resourceDTOS.length > 0);
    let _0x58a93b = $("#app > div")[0].__vue__;
    let _0x4773ac = 0;
    $(".chapter-box>ul").each((_0x1b969a, _0x5911a7) => {
      {
        if ($(_0x5911a7).find(".active").length > 0) {
          {
            _0x4773ac = _0x1b969a;
            return false;
          }
        }
      }
    });
    let _0x329fe6 = 0;
    $(".chapter-box>ul").eq(_0x4773ac).find(".section-item").each((_0x5d5b21, _0x7b5e0b) => {
      if ($(_0x7b5e0b).find(".active").length > 0) {
        {
          _0x329fe6 = _0x5d5b21;
          return false;
        }
      }
    });
    let _0x44f859 = _0x58a93b.courseData[_0x4773ac].resourceDTOS[_0x329fe6];
    _0x42e799.pageData.curStudyData = _0x44f859;
    _0x42e799.pageData.currentPosition = _0x44f859.currentStudyTime || 0;
    let _0x4ef3fa = () => {
      {
        if (!_0x596393.includes(_0x44f859.type)) {
          document.querySelector("video").pause();
        }
        if ($(".section-item .active").parent().is(".finish")) {
          clearInterval(_0x42e799.pageData.videoMgIndex);
          _0x42e799.pageData.videoMgIndex = null;
          location.reload();
          return;
        }
        let _0x18e0e6 = _0x44f859.playTime;
        if (_0x596393.includes(_0x44f859.type)) {
          _0x18e0e6 = _0x44f859.minStudyTime;
        }
        if (_0x42e799.pageData.curStudyPosition <= _0x18e0e6) {
          {
            _0x58a93b.updateCourseRecord();
          }
        } else {
          clearInterval(_0x42e799.pageData.videoMgIndex);
          _0x42e799.pageData.videoMgIndex = null;
          location.reload();
          return;
        }
      }
    };
    _0x4ef3fa();
    let _0x3e85a8 = _0x42e799.getConfig();
    let _0x1190a2 = Number(_0x3e85a8.mgjg) * 1000;
    if (!_0x1190a2 || isNaN(_0x1190a2) || _0x1190a2 < 1000) {
      {
        _0x1190a2 = 1000;
      }
    }
    if (_0x42e799.pageData.videoMgIndex != null) {
      return;
    }
    _0x42e799.pageData.videoMgIndex = setInterval(() => {
      _0x4ef3fa();
    }, _0x1190a2);
  },
  sendNotify(_0x3535d3 = "脚本通知", _0x1408f9 = "", _0x3726ab) {
    if (Notification.permission === "granted") {
      {
        const _0x62409c = {
          body: _0x1408f9,
          vibrate: [300, 100, 300]
        };
        var _0x1ba059 = new Notification(_0x3535d3, _0x62409c);
        _0x1ba059.onclick = function () {
          {
            console.log("通知被点击");
            _0x3726ab && _0x3726ab();
          }
        };
      }
    }
  },
  async page_video_saveAndClose() {
    $("#goBack").click();
    await _0x42e799.waitTimeout(500);
    $(".layui-layer-btn1")[0].click();
  },
  async page_video() {
    await _0x42e799.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    console.log("%c page_video", "background:rgb(0,0,0);color:#fff");
    let _0x552cec = 2;
    _0x42e799.closeWaitConfrimWin();
    if (_0x42e799.pageData.video.index != null) {
      return;
    }
    setInterval(() => {
      if (_0x42e799.getElByText($(".message-cont"), "学霸君，系统检测到你的学", "startsWith") != null) {
        {
          location.reload();
        }
      }
    }, 3000);
    await _0x42e799.waitOf(_0x4dc8e6 => $(".section-item").length > 0);
    await _0x42e799.waitTimeout(1000);
    if ($(".section-item").not(".finish").length == 0) {
      let _0x5173aa = _0x42e799.getGMData("toListType", "notify");
      _0x42e799.setGMData("setCourseFinish", _0x42e799.now());
      if (_0x5173aa == "open") {
        {
          top.zfk.page_video_saveAndClose();
          await _0x42e799.waitTimeout(1000);
          window.open(_0x42e799.getGMData("listUrl", "/"));
        }
      } else {
        {
          top.zfk.page_video_saveAndClose();
          await _0x42e799.waitTimeout(1000);
          _0x42e799.setGMData("videoFinish", _0x42e799.now());
        }
      }
      return;
    }
    $(".section-item").not(".finish").eq(0).click();
    let _0x3c6166 = _0x42e799.getConfig();
    if (_0x3c6166.mg == "1") {
      _0x42e799.page_video_mg();
      return;
    }
    let _0x4168a1 = Number(_0x3c6166.bs);
    _0x42e799.pageData.video.index = setInterval(async () => {
      try {
        if (_0x42e799.pageData.waitTime > 0) {
          _0x42e799.pageData.waitTime -= _0x552cec;
          return;
        }
        if (!_0x42e799.getVideo()) {
          {
            console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
            return;
          }
        }
        _0x42e799.getVideo().volume = 0;
        let _0x3a29fc = "进度：" + _0x42e799.getCurTime().toFixed(0) + "/" + _0x42e799.getTotalTime().toFixed(0);
        $("title").text(_0x3a29fc);
        _0x42e799.setGMData("updateTitle", {
          title: _0x3a29fc,
          time: _0x42e799.now()
        });
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x17fe8b = _0x42e799.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x17fe8b != null) {
          {
            _0x17fe8b.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
          }
        }
        let _0x12450d = await _0x42e799.isPlayFinish();
        if (_0x12450d) {
          {
            _0x42e799.pageData.waitTime = 15;
            layer.msg("视频即将结束，等待下一步操作", {
              time: 10000
            });
            _0x42e799.nextVideo();
            clearInterval(_0x42e799.pageData.video.index);
            _0x42e799.pageData.video.index = null;
            return;
          }
        }
        let _0x23fa6c = await _0x42e799.videoIsPlay();
        if (!_0x23fa6c) {
          {
            if (!_0x12450d) {
              _0x42e799.play();
            }
          }
        }
        if (_0x42e799.getVideo().playbackRate != _0x4168a1) {
          _0x42e799.getVideo().playbackRate = _0x4168a1;
        }
      } catch (_0x54c753) {
        {
          console.error("视频页面定时器出错", _0x54c753);
        }
      }
    }, _0x552cec * 1000);
  },
  nextVideo(_0x2cdec5 = 10) {
    layer.msg("视频即将结束，等待下一步操作", {
      time: 10000
    });
    setTimeout(() => {
      {
        location.reload();
      }
    }, _0x2cdec5 * 1000);
  },
  async checkVersion() {
    return new Promise(_0x5337fa => {
      if (!_0x1a5884) {
        {
          return _0x5337fa(true);
        }
      }
      if (_0x21da8b) {
        _0x42e799.delGMData("code");
      }
      if (!top === window || _0x21da8b) {
        {
          return _0x5337fa(true);
        }
      }
      let _0x31bb53 = _0x42e799.getGMData("lastCheckVersionTime", 0);
      if (_0x42e799.now() - _0x31bb53 < 30000) {
        {
          console.log("%c 跳过更新检测", "background:rgb(0,0,0);color:#fff");
          return _0x5337fa(true);
        }
      }
      _0x42e799.setGMData("lastCheckVersionTime", _0x42e799.now());
      _0x42e799.gmPost("/yh/base/checkVersion", {
        id: baseConfig.project.id,
        v1: baseConfig.project.version,
        v2: _0x42e799.getGMData("version", "")
      }).then(_0x3f9e4c => {
        if (_0x3f9e4c.message == "更新脚本") {
          layer.alert(_0x3f9e4c.result.msg, function () {
            {
              top.open(_0x3f9e4c.result.url);
            }
          });
        } else {
          if (_0x3f9e4c.message == "更新内容") {
            _0x42e799.delGMData("code");
            location.href = location.href;
          }
        }
        return _0x5337fa(true);
      }, _0x2acb80 => {
        if (_0x21da8b) {
          console.log(_0x2acb80);
        }
      });
    });
  },
  play() {
    _0x42e799.getVideo().volume = 0;
    setTimeout(() => {
      {
        _0x42e799.getVideo().play();
      }
    }, 200);
  },
  getVideo() {
    return $("video")[0];
  },
  setVideoVolume() {
    try {
      if (_0x42e799.getVideo().volume != 0) {
        _0x42e799.getVideo().volume = 0;
      }
    } catch (_0x63358d) {
      {
        console.error(_0x63358d);
      }
    }
  },
  setStep(_0x46f482) {
    if (_0x42e799.getVideo()) {
      {
        if (_0x46f482 >= 0) {
          {
            _0x42e799.getVideo().currentTime = _0x46f482;
          }
        } else {
          {
            _0x42e799.getVideo().currentTime = _0x42e799.getVideo().duration + _0x46f482;
          }
        }
      }
    }
  },
  isPlayFinish() {
    try {
      return _0x42e799.getTotalTime() > 0 && _0x42e799.getCurTime() + 5 >= _0x42e799.getTotalTime();
    } catch (_0x36524b) {
      return false;
    }
  },
  getCurTime() {
    let _0x26d4fe = 0;
    try {
      _0x26d4fe = _0x42e799.getVideo().currentTime;
    } catch (_0xccc9b1) {
      {
        console.error(_0xccc9b1);
      }
    }
    return _0x26d4fe;
  },
  getTotalTime() {
    let _0x24f982 = 0;
    try {
      _0x24f982 = _0x42e799.getVideo().duration;
    } catch (_0x31eb5e) {
      console.error(_0x31eb5e);
    }
    return _0x24f982;
  },
  formatAnswerOption(_0x295707) {
    let _0x24bddc = [["A", "B", "C", "D", "E", "F", "G", "H"], ["正确", "错误"], ["对", "错"]];
    let _0x535beb = _0x295707.toUpperCase();
    let _0x313fb4 = -1;
    _0x24bddc.forEach(_0x15f14e => {
      if (_0x15f14e.includes(_0x535beb)) {
        _0x313fb4 = _0x15f14e.indexOf(_0x535beb);
        return false;
      }
    });
    return _0x313fb4;
  },
  formatAnswerOptionNo(_0x40618e) {
    return ["A", "B", "C", "D", "E", "F", "G", "H"][_0x40618e];
  },
  isMatchQAText(_0x3ba288, _0x3d20a3) {
    return _0x3ba288 == _0x3d20a3 || _0x42e799.simpleHtml(_0x3ba288) == _0x42e799.simpleHtml(_0x3d20a3) || _0x42e799.simpleText(_0x3ba288) == _0x42e799.simpleText(_0x3d20a3);
  },
  simpleHtml(_0x536077) {
    _0x536077 = _0x536077.replace(/&nbsp;|<br\/>|<br>|\n|\r/gi, "");
    _0x536077 = _0x536077.trim();
    if (!_0x536077) {
      return _0x536077;
    }
    if (_0x536077.startsWith("<") && _0x536077.endsWith(">")) {
      {
        return $(_0x536077).text().trim();
      }
    }
    return _0x536077.trim();
  },
  simpleText(_0x25b3e0) {
    return _0x25b3e0.replace(/[^\u4e00-\u9fa5a-zA-Z0-9#split#√×]/g, "").replace(/[的]/g, "");
  },
  async uploadQA(_0x2b1c06, _0x210e22 = -1, _0x300c26 = null) {
    return new Promise(async (_0x2b148c, _0x26ad39) => {
      {
        _0x2b1c06 = _0x2b1c06.map(_0x27579f => {
          if (_0x27579f.key.length > 499) {
            {
              _0x27579f.key = _0x27579f.key.substring(0, 499);
              const _0x7abb4f = {
                key: _0x27579f.key,
                value: _0x27579f.value
              };
              return _0x7abb4f;
            }
          } else {
            {
              return _0x27579f;
            }
          }
        });
        _0x2b1c06 = _0x2b1c06.filter(_0x5ef789 => _0x5ef789.key && _0x5ef789.value && (_0x5ef789.key + "").length < 500);
        if (_0x2b1c06.length == 0) {
          return _0x26ad39("无数据");
        }
        _0x21da8b && console.log("uploadQA", _0x2b1c06);
        let _0x4b3863 = "/business/qaQuestionSimple/uploadQaResult";
        if (_0x42e799.isDZKFMode()) {
          _0x4b3863 = "/business/common/uploadQaResult";
        }
        const _0x7a0bc1 = {
          list: _0x2b1c06,
          score: _0x210e22,
          webSite: _0x300c26
        };
        let _0xa83d05 = await _0x42e799.gmAuthPost(_0x4b3863, _0x7a0bc1);
        return _0x2b148c(_0xa83d05);
      }
    });
  },
  async queryQaFree(_0x53e1e0, _0x7a1daf = "", _0x5a7c88 = false, _0x5bd8e7 = "rb", _0x1cd600 = ["400px", "400px"]) {
    return new Promise(async (_0x20dad1, _0x3ab720) => {
      let _0x2a50f1 = "/business/qaQuestionSimple/freeSimpleQueryList";
      if (_0x42e799.isDZKFMode()) {
        _0x2a50f1 = "/business/common/freeSimpleQueryList";
      }
      let _0x2d6731 = [];
      _0x53e1e0.forEach(_0x3fce32 => {
        let _0x2beefb = _0x3fce32 + "";
        if (_0x3fce32.length > 499) {
          _0x2beefb = _0x2beefb.substring(0, 499);
        }
        _0x2d6731.push(_0x2beefb);
      });
      const _0x364b48 = {
        list: _0x2d6731,
        webSite: _0x7a1daf
      };
      let _0x167799 = await _0x42e799.gmAuthPost(_0x2a50f1, _0x364b48);
      if (_0x21da8b) {
        console.log(_0x167799);
      }
      let _0x1597eb = _0x167799.length;
      if (_0x5a7c88) {
        let _0x5ec08f = [];
        _0x53e1e0.forEach(_0x9fe9df => {
          let _0x59f7c3 = _0x167799.find(_0xe6386a => _0xe6386a.fullTitle == _0x9fe9df);
          if (!_0x59f7c3) {
            _0x5ec08f.push(_0x9fe9df);
          }
        });
        if (_0x5ec08f.length > 0) {
          const _0x15f582 = {
            list: _0x5ec08f,
            webSite: ""
          };
          let _0x228268 = await _0x42e799.gmAuthPost(_0x2a50f1, _0x15f582);
          _0x167799 = _0x167799.concat(_0x228268);
          _0x1597eb += _0x228268.length;
          if (_0x21da8b) {
            {
              console.log(_0x228268);
              console.log(_0x167799);
            }
          }
        }
      }
      _0x42e799.tipsMsg("共搜索到" + _0x1597eb + "个题目");
      if (!_0x5bd8e7) {
        return _0x20dad1(_0x167799);
      }
      let _0x1ae49e = "";
      _0x167799.forEach(_0x487839 => {
        _0x1ae49e += "<div style=\"margin:4px;border-bottom:1px solid #ddd;\">" + _0x487839.fullTitle + "<br>答案：" + _0x487839.fullAnswer.replace(/(#split#)/gi, "|") + "</div>";
      });
      const _0x2178b7 = {
        type: 1,
        closeBtn: "1",
        shade: 0,
        title: "题库搜索到" + _0x167799.length + "个相似题目(这里可拖动)",
        content: "<div style=\"padding:10px\">" + _0x1ae49e + "</div>",
        offset: _0x5bd8e7,
        area: _0x1cd600
      };
      layer.open(_0x2178b7);
      return _0x20dad1(_0x167799);
    });
  },
  async videoIsPlay() {
    return new Promise(_0x3dbdd4 => {
      {
        try {
          let _0x460d3d = $("video")[0].currentTime;
          setTimeout(() => {
            {
              let _0x3c0d76 = $("video")[0].currentTime;
              let _0x46206f = _0x3c0d76 > _0x460d3d;
              if (_0x46206f) {
                {
                  setTimeout(() => {
                    let _0x3eccb5 = $("video")[0].currentTime;
                    let _0x53b92b = _0x3eccb5 > _0x3c0d76;
                    _0x3dbdd4(_0x53b92b);
                  }, 100);
                }
              } else {
                return _0x3dbdd4(false);
              }
            }
          }, 100);
        } catch (_0x3e2b1d) {
          {
            _0x3dbdd4(false);
          }
        }
      }
    });
  },
  beginMan() {
    console.log("%c beginMan", "background:rgb(0,0,0);color:#fff");
  },
  stop() {
    location.href = location.href;
  },
  openDoc() {
    window.open(_0x4c1a4e);
  },
  async setUserName_http() {
    return new Promise(async (_0x5e1591, _0x17430f) => {
      try {
        {
          $.get("/rtr/html/personCenter/personCenter.toBasicInfo.do", _0x1269e7 => {
            {
              let _0x2077fd = _0x42e799.getElByText($("<html>" + _0x1269e7 + "</html>").find(".tbc-basic-info-title"), "姓名：", "eq", false).next().text().trim();
              if (!_0x2077fd || _0x2077fd.trim() == "") {
                _0x42e799.alertMsg("脚本启动错误，请联系脚本客服处理");
                return _0x17430f();
              }
              _0x42e799.setGMData("username", _0x2077fd);
              return _0x5e1591();
            }
          });
        }
      } catch (_0x3742e0) {
        {
          _0x42e799.alertMsg("脚本启动错误，请联系脚本客服处理");
          return _0x17430f();
        }
      }
    });
  },
  isDZKFMode() {
    let _0x3ad307 = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x3ad307) {
      _0x3ad307 = typeof isDZKF == "boolean" && !!isDZKF;
    }
    return _0x3ad307;
  },
  async callRegisterMenuCommand(_0x93bc52, _0x5f1a45) {
    if (!_0x42e799.pageData.menuBtnIndex) {
      {
        _0x42e799.pageData.menuBtnIndex = 0;
      }
    }
    GM_registerMenuCommand(_0x93bc52, _0x5f1a45);
    await _0x42e799.waitOf(_0x1ebce0 => $("body:visible").length > 0);
    await _0x42e799.waitTimeout(500);
    if ($("#zfkLeftMenuContainer").length > 0) {
      {
        _0x42e799.pageData.menuBtnIndex++;
        $("#zfkLeftMenuContainer .zfkLeftMenuBtnUl").append("<li id=\"zfkMenuBtn_" + _0x42e799.pageData.menuBtnIndex + "\">" + _0x93bc52 + "</li>");
        $("#zfkMenuBtn_" + _0x42e799.pageData.menuBtnIndex).click(function () {
          _0x5f1a45();
        });
      }
    }
  },
  registerMenuCommand() {
    _0x42e799.callRegisterMenuCommand("清理缓存", _0x42e799.clearResult);
    _0x42e799.callRegisterMenuCommand("采集错题本", _0x42e799.page_wrongAnswer);
    _0x42e799.callRegisterMenuCommand("启动脚本", _0x42e799.beginRunList);
    _0x42e799.callRegisterMenuCommand("脚本菜单", _0x42e799.openConfig);
    if (!_0x42e799.isDZKFMode()) {
      _0x42e799.callRegisterMenuCommand("使用说明", _0x42e799.openDoc);
      _0x42e799.callRegisterMenuCommand("我的信息", _0x42e799.myInfo);
    }
    _0x42e799.callRegisterMenuCommand("联系作者", _0x42e799.linkAuthor);
    _0x42e799.callRegisterMenuCommand("版本：" + _0x42e799.setting.version.version, _0x42e799.showVersionAlert);
  },
  showVersionAlert(_0x354cfd = true) {
    let _0x29bc49 = _0x42e799.getGMData("showVersionAlert", "");
    if (!_0x354cfd && _0x29bc49 == _0x42e799.getGMData("version")) {
      return;
    }
    layer.open({
      type: "1",
      title: _0x42e799.setting.version.version,
      content: _0x42e799.setting.version.body,
      btn: "我知道了",
      area: ["600px", "auto"],
      yes: function (_0xba74d0) {
        _0x42e799.setGMData("showVersionAlert", _0x42e799.getGMData("version"));
        layer.close(_0xba74d0);
      }
    });
  },
  linkAuthor() {
    window.open("http://doc.zhanyc.cn/contact-me/");
  },
  logout() {
    _0x42e799.delGMData("token");
    _0x42e799.delGMData("code");
    layer.msg("脚本账号已退出");
  },
  setClip(_0x2732a2) {
    GM_setClipboard(_0x2732a2, "text");
    layer.msg("复制成功");
  },
  async getUserData(_0x3fcbc6 = null) {
    return new Promise(async (_0x1f0329, _0xcd472e) => {
      {
        let _0x32120d = _0x42e799.getUserName();
        if (_0x42e799.project.isSelf) {
          {
            let _0x1088f1 = await _0x42e799.getUserDataOnline(_0x3fcbc6);
            let _0x5a0035 = {
              id: _0x1088f1.id,
              acc: _0x1088f1.acc,
              pwd: _0x1088f1.pwd,
              name: _0x1088f1.name,
              video: [],
              ks: []
            };
            if (_0x1088f1.list) {
              {
                let _0x2ecdc6 = JSON.parse(_0x1088f1.list);
                _0x5a0035.video = _0x2ecdc6.video;
                _0x5a0035.ks = _0x2ecdc6.ks;
                _0x5a0035.courseList = _0x2ecdc6.courseList;
              }
            }
            return _0x1f0329(_0x5a0035);
          }
        }
        let _0x50b227 = {
          acc: _0x32120d,
          name: _0x32120d,
          video: [],
          sinishSubArr: [],
          finishCourseArr: [],
          finishCoursewareidArr: []
        };
        let _0x26c72c = _0x42e799.getGMData("result", []);
        let _0x46c205 = _0x26c72c.find(_0x4a510a => _0x4a510a.acc == _0x32120d);
        if (!_0x46c205) {
          _0x46c205 = _0x50b227;
          _0x26c72c.push(_0x46c205);
          _0x42e799.setGMData("result", _0x26c72c);
        } else {
          _0x46c205 = Object.assign(_0x50b227, _0x46c205);
        }
        return _0x1f0329(_0x46c205);
      }
    });
  },
  async getUserDataOnline(_0x3de4b8 = null) {
    return new Promise(async (_0x2411d3, _0x5a2865) => {
      {
        return _0x2411d3(await _0x42e799.queryCurAcc(_0x3de4b8));
      }
    });
  },
  async setUserData(_0x11acd1) {
    return new Promise(async (_0xf0a8d0, _0x4a3e98) => {
      {
        if (_0x42e799.project.isSelf) {
          await _0x42e799.setUserDataOnline(_0x11acd1);
          return _0xf0a8d0();
        }
        let _0x42cc52 = _0x42e799.getGMData("result", []);
        let _0x85ae3 = _0x42e799.getUserName();
        let _0x6c2136 = _0x42cc52.findIndex(_0xe87320 => _0xe87320.acc == _0x85ae3);
        if (_0x6c2136 == -1) {
          userData = _0x11acd1;
          _0x42cc52.push(userData);
        } else {
          _0x42cc52.splice(_0x6c2136, 1, _0x11acd1);
        }
        _0x42e799.setGMData("result", _0x42cc52);
        await _0x42e799.waitTimeout(100);
        return _0xf0a8d0();
      }
    });
  },
  getUserName() {
    return _0x42e799.getGMData("username", "");
  },
  addStyle() {
    GM_addStyle("\n      .zfk-btn{background-color:#0fbcf9;color:white;padding:4px 12px;border:none;box-sizing:content-box;font-size:14px;height:20px;border-radius:4px;cursor:pointer;display:inline-block;border:1px solid transparent;white-space:nowrap;user-select:none;text-align:center;vertical-align:middle}.zfk-btn:hover{opacity:.8}.zfk-btn.success{background-color:#38b03f}.zfk-btn.warning{background-color:#f1a325}.zfk-btn.info{background-color:#03b8cf}.zfk-btn.danger{background-color:#ea644a}.zfk-form-tips{font-size:1.2em;color:red}.tips{color:red}.zfk-form textarea,.zfk-form input[type=text],.zfk-form input[type=number],.zfk-form input[type=password]{border:1px solid #888;border-radius:4px;padding:5px;box-sizing:border-box}.zfk-form textarea{width:100%}.zfk-form-item{margin-bottom:10px}.zfk-form-item>label:first-child{width:7em;text-align:right;display:inline-block;padding-right:5px;margin-right:0}.zfk-form-item label{margin-right:4px}.zfk-form-item.block>label:first-child{text-align:left;display:block;width:100%;font-weight:bold}.text-l{text-align:left !important}.text-c{text-align:center !important}.text-r{text-align:right !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-t-0{padding-top:0px !important}.p-t-5{padding-top:5px !important}.p-t-10{padding-top:10px !important}.p-t-15{padding-top:15px !important}.p-t-20{padding-top:20px !important}.p-b-0{padding-bottom:0px !important}.p-b-5{padding-bottom:5px !important}.p-b-10{padding-bottom:10px !important}.p-b-15{padding-bottom:15px !important}.p-b-20{padding-bottom:20px !important}.p-l-0{padding-left:0px !important}.p-l-5{padding-left:5px !important}.p-l-10{padding-left:10px !important}.p-l-15{padding-left:15px !important}.p-l-20{padding-left:20px !important}.p-r-0{padding-right:0px !important}.p-r-5{padding-right:5px !important}.p-r-10{padding-right:10px !important}.p-r-15{padding-right:15px !important}.p-r-20{padding-right:20px !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.m-t-0{margin-top:0px !important}.m-t-5{margin-top:5px !important}.m-t-10{margin-top:10px !important}.m-t-15{margin-top:15px !important}.m-t-20{margin-top:20px !important}.m-b-0{margin-bottom:0px !important}.m-b-5{margin-bottom:5px !important}.m-b-10{margin-bottom:10px !important}.m-b-15{margin-bottom:15px !important}.m-b-20{margin-bottom:20px !important}.m-l-0{margin-left:0px !important}.m-l-5{margin-left:5px !important}.m-l-10{margin-left:10px !important}.m-l-15{margin-left:15px !important}.m-l-20{margin-left:20px !important}.m-r-0{margin-right:0px !important}.m-r-5{margin-right:5px !important}.m-r-10{margin-right:10px !important}.m-r-15{margin-right:15px !important}.m-r-20{margin-right:20px !important}.bold{font-weight:bold !important}.tips-box{padding:10px;border:1px solid red;background-color:#fff0f0;color:red}.bold{font-weight:bold}.font-l{font-size:1.2em}.font-xl{font-size:40px}.font-l{font-size:25px}.color-default{color:#ea644a !important}.color-success{color:#38b03f !important}.color-warning{color:#f1a325 !important}.color-danger{color:#ea644a !important}.bg-default{background-color:#ea644a !important}.bg-success{background-color:#38b03f !important}.bg-warning{background-color:#f1a325 !important}.bg-danger{background-color:#ea644a !important}.zfk-table{border-collapse:collapse}.zfk-table thead{background-color:#1abc9c}.zfk-table td,.zfk-table th{text-align:center;padding:6px;border:1px solid #888}.zfk-table tr:nth-child(2n){background-color:#f2f2f2}.zfk-table tr:hover{background-color:#fff799}.zfk-container *{font-size:17px}\n      ");
  },
  openLjTips(_0x28d6b3 = true, _0x8b07d6 = false) {
    const _0x577b8e = {
      type: 1,
      title: "请确认",
      offset: "100px",
      content: "\n          <div style=\"padding:10px\">\n          <p>已经为你打开下一门课程，如果没有打开窗口，请检查浏览器地址栏右侧是否有拦截提示，请选择【永久允许】或者在浏览器设置中设置本网站【弹出式窗口和重定向】设置为允许</p>\n          <p style=\"color:red;\">如下图所示：</p>\n          <img src=\"https://js.zhanyc.cn/img/ljts.jpg\"/>\n          </div>\n          "
    };
    let _0x1fd95d = layer.open(_0x577b8e);
    let _0x4895fd = _0x8b07d6 ? location.href : "";
    if (_0x42e799.pageData.closeTipsIndex != null) {
      return;
    }
    _0x42e799.pageData.closeTipsIndex = GM_addValueChangeListener(_0x42e799.getGMKey("closeLJTS"), function (_0x3b6bc6, _0x29c686, _0x33cbbc, _0x367e32) {
      layer.close(_0x1fd95d);
      _0x28d6b3 && _0x42e799.tipsAndClose && _0x42e799.tipsAndClose(_0x4895fd);
    });
  },
  tipsAndClose(_0x35d83a) {
    _0x42e799.confirmRun("3秒后关闭当前页面", 3000).then(_0x45d290 => {
      if (!_0x35d83a || location.href == _0x35d83a) {
        window.close();
      }
    });
  },
  closeWaitConfrimWin() {
    _0x42e799.setGMData("closeLJTS", _0x42e799.now());
  },
  async setUserName2() {
    return new Promise(async (_0x4b58f2, _0x24ba15) => {
      $.get("/rtr/html/personCenter/personCenter.toBasicInfo.do", _0x31ed88 => {
        let _0x2af4c7 = _0x42e799.getElByText($(_0x31ed88).find(".tbc-basic-info-title"), "姓名：", "eq", false).next();
        let _0x56424a = _0x2af4c7.text().trim();
        if (!!_0x2af4c7.attr("title")) {
          _0x56424a = _0x2af4c7.attr("title").trim();
        }
        if (!_0x56424a) {
          {
            _0x42e799.alertMsg("脚本启动失败，请联系作者更新");
            return _0x24ba15();
          }
        }
        _0x42e799.setGMData("username", _0x56424a);
        return _0x4b58f2();
      });
    });
  },
  async setUserName() {
    return new Promise(async (_0x3bb9ed, _0x351a10) => {
      let _0x39365c = "";
      await _0x42e799.waitOf(_0x589796 => {
        try {
          _0x39365c = $(".user-name").text().trim();
          if (_0x39365c != "") {
            _0x42e799.setGMData("username", _0x39365c);
            return true;
          }
          return false;
        } catch (_0xad5fe8) {
          return false;
        }
      });
      return _0x3bb9ed(_0x39365c);
    });
  },
  confirmMsg(_0x543239 = "请确认", _0x4cd535 = {}) {
    let _0x2aec6b = {
      title: "脚本提示",
      btn: ["确定", "关闭"],
      fun1(_0x270ffb) {
        {
          layer.close(_0x270ffb);
        }
      },
      fun2() {},
      fun3() {}
    };
    Object.assign(_0x2aec6b, _0x4cd535);
    const _0x476641 = {
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x543239 + "</div>",
      title: _0x2aec6b.title,
      offset: "100px",
      btn: _0x2aec6b.btn,
      yes: _0x2aec6b.fun1,
      btn2: _0x2aec6b.fun2,
      btn3: _0x2aec6b.fun3
    };
    layer.open(_0x476641);
  },
  toUserNamePage() {
    layer.open({
      type: 1,
      title: "脚本启动失败",
      content: "<div style=\"padding:10px\">脚本启动失败，请按脚本说明文档，请在指定的【启动页面】刷新页面后启动脚本</div>",
      offset: "100px",
      area: ["400px", "180px"],
      btn: ["查看脚本说明文档", "关闭"],
      yes: function (_0x845c12) {
        window.open(_0x4c1a4e);
        return false;
      }
    });
    return;
  },
  callAuthSuccess() {
    _0x42e799.setGMData("authSuccess", _0x42e799.now());
  },
  initBuyAuth() {
    if (!_0x42e799.pageData.authListnerIndex) {
      _0x42e799.pageData.authListnerIndex = GM_addValueChangeListener("authSuccess", function (_0x826299, _0x11fcf9, _0x3ae89c, _0x46f96a) {
        if (_0x46f96a) {
          {
            layer.close(_0x42e799.pageData.myInfoIndex);
            layer.close(_0x42e799.pageData.noAuthIndex);
            const _0x5195ae = {
              type: "1",
              offset: "100px",
              title: "脚本授权提示",
              content: "<div style=\"padding:16px;font-size:20px;\">😃授权购买成功，刷新页面后授权生效</div>"
            };
            layer.open(_0x5195ae);
          }
        }
      });
    }
    if (!_0x42e799.buyAuthFun) {
      {
        _0x42e799.buyAuthFun = function () {
          let _0x5e31c2 = "https://m.zhanyc.cn";
          _0x21da8b && (_0x5e31c2 = "http://localhost:3000");
          window.open(_0x5e31c2 + "/yh-auth?i=" + baseConfig.project.id + "&t=" + _0x42e799.getGMData("token"));
        };
      }
    }
  },
  myInfo() {
    _0x42e799.initBuyAuth();
    _0x42e799.gmAuthPost("/yh/user/myInfo").then(_0x3714ba => {
      if (_0x21da8b) {
        console.log(_0x3714ba);
      }
      let _0xb89d9b = "脚本ID：【" + baseConfig.project.id + "】 脚本账号昵称：【" + _0x3714ba.name + "】 脚本账号：【" + _0x3714ba.acc + "】";
      let _0x440c64 = "\n        <div class=\"p-10 zfk-container\" style=\"padding: 10px;\">\n        <div class=\"kv\" style=\"text-align: center;color: #ffffff;background: #38a1ff;font-weight: bold;margin: -10px -10px 10px;\">" + (_0x42e799.setting.tjjl || "") + "</div>\n        <div class=\"kv\"><label>脚本ID：</label><span>【" + baseConfig.project.id + "】</span></div>\n        <div class=\"kv\"><label>脚本账号昵称：</label><span>【" + _0x3714ba.name + "】</span></div>\n        <div class=\"kv\"><label>脚本账号：</label><span>【" + _0x3714ba.acc + "】</span></div>\n\n        <div class=\"kv\" style=\"text-align: center;margin: 10px 0 20px;\">\n          <button onclick=\"zfk.buyAuthFun()\" style=\"cursor: pointer;background:#BE2EDD;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">自助购买授权（👍推荐）</button>\n          <button onclick=\"zfk.setClip('" + _0xb89d9b + "')\" style=\"cursor: pointer;background:#34495E;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">点这里复制以上信息</button>\n        </div>\n        <div class=\"kv\" style=\"text-align: center;\">\n          <button onclick=\"window.open('https://www.todesk.com/download.html')\" style=\"cursor: pointer;background:#009349;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">下载远程控制软件（需要协助才下载）</button>\n          <button onclick=\"zfk.logout()\" style=\"cursor: pointer;background:#FF6B81;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">退出脚本账号</button>\n        </div>\n\n        </div>\n        ";
      const _0xdc70f5 = {
        type: "1",
        title: "脚本信息",
        content: _0x440c64,
        area: ["460px", "300px"],
        offset: "100px"
      };
      _0x42e799.pageData.myInfoIndex = layer.open(_0xdc70f5);
    });
  },
  exportResult() {
    let _0x5a7edd = _0x42e799.getGMData("result", []);
    let _0xd23ef6 = "";
    let _0xaa6c8 = ["视频标题", "视频地址", "评论人", "评论时间", "评论内容", "点赞数", "回复数"];
    _0xd23ef6 += _0xaa6c8.join("\t") + "\r\n";
    _0x5a7edd.forEach(_0x1e6d4e => {
      _0x1e6d4e.list.forEach(_0xabc61c => {
        {
          let _0x42736f = [_0x1e6d4e.title, _0x1e6d4e.url, _0xabc61c.name, _0xabc61c.time, _0xabc61c.comment, _0xabc61c.likeCount, _0xabc61c.commentCount];
          _0xd23ef6 += _0x42736f.join("\t") + "\r\n";
        }
      });
    });
    _0x42e799.downloadTxt(_0x42e799.dateFormat(new Date(), "yyyyMMddHHmmss") + "导出.txt", _0xd23ef6);
  },
  clearResult() {
    if (confirm("确认要清空结果数据吗？")) {
      _0x42e799.setGMData("result", []);
      _0x42e799.delGMData("code", []);
      layer.msg("清空完成");
    }
  },
  openConfig() {
    let _0x30c3c7 = "\n      <div class=\"p-10 zfk-container\">\n      <form class=\"zfk-form\">\n      <div class=\"zfk-form-item block\">\n        <label>是否秒过</label>\n        <label><input type=\"radio\" name=\"mg\" value=\"1\" />秒过</label>\n        <label><input type=\"radio\" name=\"mg\" value=\"2\" />不秒过</label>\n      </div>\n      <div class=\"zfk-form-item block\">\n        <label>学习模式（部分课程支持自动识别学时）</label>\n        <label><input type=\"radio\" name=\"studyMode\" value=\"1\" />全学</label>\n        <label><input type=\"radio\" name=\"studyMode\" value=\"2\" />学分够就停</label>\n      </div>\n      <div class=\"zfk-form-item block\">\n        <label>秒过间隔（如果进行出现“学霸君”提示，则适当加长间隔，单位：秒）</label>\n        <input type=\"number\" name=\"mgjg\" />\n      </div>\n        <div class=\"zfk-form-item block\">\n          <label></label>\n          <button class=\"zfk-btn\" onclick=\"zfk.saveConfig()\" type=\"button\">\n            保存\n          </button>\n          <button\n            class=\"zfk-btn danger\"\n            onclick=\"zfk.closeConfig()\"\n            type=\"button\"\n          >\n            关闭\n          </button>\n        </div>\n      </form>\n    </div>\n    ";
    const _0x3a288d = {
      type: "1",
      title: "设置",
      content: _0x30c3c7,
      btn: false,
      area: ["600px", "600px"]
    };
    layer.open(_0x3a288d);
    let _0x173266 = _0x42e799.getConfig();
    _0x42e799.setFormVal(".zfk-form", _0x173266);
  },
  saveConfig() {
    var _0xae17b4 = _0x42e799.getFormVal(".zfk-form");
    console.log(_0xae17b4);
    _0x42e799.setConfig(_0xae17b4);
    layer.msg("保存成功");
  },
  closeConfig() {
    layer.closeAll();
  },
  removeArrEmpty(_0x53060c) {
    let _0xa13c4b = [];
    _0x53060c.forEach(_0x4b920f => {
      if (!!_0x4b920f && _0x4b920f.trim() != "") {
        _0xa13c4b.push(_0x4b920f);
      }
    });
    return _0xa13c4b;
  },
  confirmRun(_0x3e7c12 = "脚本：3秒后执行下一步操作", _0x5e3e83 = 3000) {
    return new Promise((_0x33721f, _0x1830d6) => {
      let _0x18eede = true;
      clearTimeout(_0x42e799.pageData.confirmRunIndex);
      const _0x590abd = {
        icon: 3,
        title: "是否继续？",
        btn: ["取消执行"],
        offset: "100px"
      };
      _0x42e799.pageData.confirmRunIndex = layer.alert(_0x3e7c12, _0x590abd, function (_0x2957a1) {
        {
          _0x18eede = false;
          _0x1830d6();
          layer.close(_0x42e799.pageData.confirmRunIndex);
        }
      });
      setTimeout(() => {
        layer.close(_0x42e799.pageData.confirmRunIndex);
        _0x33721f(true);
      }, _0x5e3e83);
    });
  },
  waitTimeout(_0x3ad412) {
    return new Promise((_0x487c94, _0x59b942) => {
      {
        setTimeout(() => {
          _0x487c94();
        }, _0x3ad412);
      }
    });
  },
  waitOf(_0xa3a3a, _0xf4491c = 1000, _0x4866fe = 30, _0x5d4bed = false) {
    console.log("%c waitOf", "background:rgb(0,0,0);color:#fff");
    if (_0x21da8b) {
      console.log(_0xa3a3a);
    }
    return new Promise((_0x38df85, _0x2160e3) => {
      let _0x5c77c2 = _0x4866fe * 1000;
      try {
        {
          if (_0xa3a3a()) {
            return _0x38df85();
          }
        }
      } catch (_0x4bdb73) {
        {
          console.log(_0x4bdb73);
        }
      }
      let _0x3272cd = setInterval(() => {
        if (_0x4866fe != -1) {
          _0x5c77c2 -= _0xf4491c;
          if (_0x5c77c2 < 0) {
            clearInterval(_0x3272cd);
            {
              if (_0x5d4bed) {
                return _0x38df85();
              } else {
                return _0x2160e3();
              }
            }
          }
        }
        try {
          if (_0xa3a3a()) {
            clearInterval(_0x3272cd);
            return _0x38df85();
          }
        } catch (_0x50e728) {
          console.log(_0x50e728);
        }
      }, _0xf4491c);
    });
  },
  toLogin() {
    top.location.href = _0x42e799.url.login + "?yh=" + window.btoa(encodeURI(top.location.href));
  },
  getUrlParam(_0x589592, _0x101e7e) {
    if (arguments.length == 1) {
      _0x101e7e = _0x589592;
      _0x589592 = window.location;
    }
    var _0x2743f8 = new RegExp("(^|&)" + _0x101e7e + "=([^&]*)(&|$)");
    var _0x31c050 = _0x589592.search.substr(1).match(_0x2743f8);
    if (_0x31c050 != null) {
      return unescape(_0x31c050[2]);
    }
    return "";
  },
  objectToQueryString(_0x1c0547) {
    var _0x62b4e8 = [];
    for (var _0x2963d7 in _0x1c0547) {
      if (_0x1c0547.hasOwnProperty(_0x2963d7)) {
        var _0x513d55 = _0x1c0547[_0x2963d7];
        if (Array.isArray(_0x513d55)) {
          {
            for (var _0x4e95ca = 0; _0x4e95ca < _0x513d55.length; _0x4e95ca++) {
              _0x62b4e8.push(encodeURIComponent(_0x2963d7) + "=" + encodeURIComponent(_0x513d55[_0x4e95ca]));
            }
          }
        } else {
          _0x62b4e8.push(encodeURIComponent(_0x2963d7) + "=" + encodeURIComponent(_0x513d55));
        }
      }
    }
    return _0x62b4e8.join("&");
  },
  parseQueryString(_0x268d92) {
    _0x268d92 = !_0x268d92 ? window.location.href : _0x268d92;
    if (_0x268d92.indexOf("?") === -1) {
      {
        return {};
      }
    }
    let _0x4622d1 = _0x268d92[0] === "?" ? _0x268d92.substr(1) : _0x268d92.substring(_0x268d92.lastIndexOf("?") + 1);
    if (_0x4622d1 === "") {
      return {};
    }
    _0x4622d1 = _0x4622d1.split("&");
    let _0x4b4832 = {};
    for (let _0x26d729 = 0; _0x26d729 < _0x4622d1.length; _0x26d729++) {
      let _0x1268af = _0x4622d1[_0x26d729].split("=");
      _0x4b4832[decodeURIComponent(_0x1268af[0])] = decodeURIComponent(_0x1268af[1] || "");
    }
    return _0x4b4832;
  },
  getAttrName(_0x285c47, _0x1deb6d) {
    if (_0x285c47.jquery) {
      _0x285c47 = _0x285c47.get(0);
    }
    let _0x4ede88 = Object.keys(_0x285c47).find(_0x26bcf0 => _0x26bcf0.startsWith(_0x1deb6d));
    return _0x4ede88;
  },
  getAttrNameList(_0x5eae4c, _0x3c406e) {
    if (_0x5eae4c.jquery) {
      _0x5eae4c = _0x5eae4c.get(0);
    }
    let _0x420a67 = Object.keys(_0x5eae4c).filter(_0x287f4f => _0x287f4f.startsWith(_0x3c406e));
    return _0x420a67;
  },
  gmAuthGet(_0x35f30d, _0x426e44, _0xa10f85 = _0x2c6843) {
    _0x35f30d = _0x42e799.fullUrl(_0x35f30d);
    if (_0x21da8b) {
      console.log("gmGet", _0x35f30d);
    }
    return new Promise((_0x1dd00b, _0x3ca3f6) => {
      if (_0x35f30d.indexOf("?") != -1) {
        for (key in _0x426e44) {
          _0x35f30d += "&" + key + "=" + _0x426e44[key];
        }
      } else {
        {
          let _0x21f6d0 = true;
          for (key in _0x426e44) {
            {
              _0x35f30d += (_0x21f6d0 ? "?" : "&") + (key + "=" + _0x426e44[key]);
              _0x21f6d0 = false;
            }
          }
        }
      }
      let _0x54164c = {};
      if (_0x42e799.getGMData("token", "")) {
        {
          _0x54164c["X-Access-Token"] = this.getGMData("token", "");
        }
      }
      GM_xmlhttpRequest({
        method: "get",
        url: _0x35f30d,
        data: _0x426e44,
        headers: _0x54164c,
        responseType: "json",
        onload: function (_0x20da24) {
          if (_0x21da8b) {
            console.log(_0x20da24);
          }
          let _0x313ec6 = _0x20da24.response;
          if (_0x313ec6.code != 200) {
            if (_0x313ec6.message.indexOf("Token失效") != -1) {
              {
                _0x42e799.tipsLogin();
              }
            } else {
              if (_0xa10f85.showErr) {
                layer.alert(_0x313ec6.message);
              }
            }
            _0x3ca3f6(_0x313ec6);
          } else {
            {
              _0x1dd00b(_0x313ec6.result);
            }
          }
        },
        onerror: function (_0x36d41f) {
          if (_0x21da8b) {
            console.log(_0x36d41f);
          }
          _0x3ca3f6(_0x36d41f);
        }
      });
    });
  },
  tipsLogin(_0x9e9bdc = "【未登录】脚本需要付费后才可使用。点击[确定]按钮将前往[脚本账号]的注册/登录页面") {
    layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x9e9bdc + "</div>",
      title: "使用脚本前请先登录脚本账号！",
      offset: "100px",
      btn: ["去登录", "查看授权说明", "关闭"],
      yes: function (_0x891f4b) {
        layer.close(_0x891f4b);
        _0x42e799.pageData.loginTipsIndex = layer.alert("已经为您打开登录页面，请留意浏览器窗口");
        _0x42e799.toLogin();
      },
      btn2: function (_0x286803) {
        window.open("https://doc.zhanyc.cn/pages/auth/");
        return false;
      },
      btn2function(_0x31b7fb) {
        layer.close(_0x31b7fb);
      }
    });
  },
  gmAuthPost(_0x28f4b4, _0x3d4ffb = {}, _0x4f7d5b = _0x3f8bc8) {
    _0x28f4b4 = _0x42e799.fullUrl(_0x28f4b4);
    if (_0x21da8b) {
      console.log("gmPost", _0x28f4b4);
    }
    let _0x53e126 = {
      "Content-Type": "application/json"
    };
    if (_0x42e799.getGMData("token", "")) {
      _0x53e126["X-Access-Token"] = this.getGMData("token", "");
    }
    return new Promise((_0x1ed240, _0x56aff7) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0x28f4b4,
        data: JSON.stringify(_0x3d4ffb),
        headers: _0x53e126,
        responseType: "json",
        onload: function (_0x138846) {
          if (_0x21da8b) {
            console.log(_0x138846);
          }
          let _0x48c765 = _0x138846.response;
          try {
            if (typeof _0x48c765 == "string") {
              _0x48c765 = JSON.parse(_0x48c765);
            }
          } finally {}
          if (_0x48c765.message.indexOf("Token失效") != -1) {
            {
              _0x42e799.tipsLogin();
              return;
            }
          }
          if (_0x48c765.code != 200) {
            if (_0x4f7d5b.showErr) {
              if (_0x48c765.message.startsWith("脚本需收费授权使用")) {
                {
                  _0x42e799.initBuyAuth();
                  _0x42e799.pageData.noAuthIndex = layer.open({
                    type: "1",
                    content: "<div style=\"padding:14px;\">" + _0x48c765.message + "</div>",
                    icon: 3,
                    title: "当前学生账号未授权",
                    offset: "100px",
                    btn: ["去购买授权", "查看授权信息", "查看帮助"],
                    yes: function (_0x39c0e5) {
                      _0x42e799.buyAuthFun();
                    },
                    btn2: function (_0x296a71) {
                      {
                        _0x42e799.myInfo();
                      }
                    },
                    btn3: function (_0xd7b868) {
                      top.open("http://doc.zhanyc.cn/pages/auth/");
                      return false;
                    }
                  });
                }
              } else {
                const _0x4d1b85 = {
                  offset: "100px"
                };
                layer.alert(_0x48c765.message, _0x4d1b85, function () {
                  {
                    _0x42e799.myInfo();
                  }
                });
              }
            }
            _0x56aff7(_0x48c765);
          } else {
            _0x1ed240(_0x48c765.result);
          }
        },
        onerror: function (_0xb89575) {
          {
            if (_0x21da8b) {
              console.log(_0xb89575);
            }
            _0x56aff7(_0xb89575);
          }
        }
      });
    });
  },
  gmAuthDownScore(_0x19283e) {
    return new Promise((_0x52fb54, _0x10c6ef) => {
      {
        if (_0x42e799.isDZKFMode() || _0x386da7) {
          return _0x52fb54(true);
        }
        if (typeof _0x42e799.pageData.downSuccess !== "undefined" && _0x42e799.pageData.downSuccess.includes(_0x19283e)) {
          return _0x52fb54(true);
        }
        var _0x1e0129 = _0x42e799.getUserName();
        if (!_0x1e0129) {
          {
            _0x42e799.toUserNamePage();
            return;
          }
        }
        const _0x48217f = {
          id: _0x19283e,
          key: _0x1e0129
        };
        const _0x14f4c2 = {
          showErr: true
        };
        _0x42e799.gmAuthPost("/yh/price/down", _0x48217f, _0x14f4c2).then(_0x3d4289 => {
          if (_0x42e799.pageData) {
            {
              if (!_0x42e799.pageData.downSuccess) {
                _0x42e799.pageData.downSuccess = [];
              }
              _0x42e799.pageData.downSuccess.push(_0x19283e);
            }
          }
          _0x52fb54(true);
        }, _0x466ec0 => {
          {
            _0x10c6ef(_0x466ec0);
          }
        });
      }
    });
  },
  alertMsg(_0x4aed05) {
    const _0xc98d2d = {
      offset: "100px"
    };
    layer.alert(_0x4aed05, _0xc98d2d);
  },
  tipsMsg(_0x3312b9, _0x4bbb76 = 3000) {
    const _0x4ab211 = {
      offset: "100px",
      time: _0x4bbb76
    };
    layer.msg(_0x3312b9, _0x4ab211);
  },
  checkLogin() {
    return new Promise((_0x918f9c, _0x5779bc) => {
      {
        if (typeof _0x42e799.pageData.checkLoginRes != "undefined") {
          {
            if (_0x42e799.pageData.checkLoginRes) {
              {
                return _0x918f9c(true);
              }
            } else {
              {
                return _0x5779bc();
              }
            }
          }
        }
        _0x42e799.gmAuthPost("/yh/price/check").then(_0x3d3791 => {
          if (_0x3d3791) {
            _0x42e799.pageData.checkLoginRes = true;
            return _0x918f9c(true);
          }
        }, _0x1c0bd3 => {
          _0x42e799.pageData.checkLoginRes = false;
          return _0x5779bc();
        });
      }
    });
  },
  fullUrl(_0x3dbcd8, _0xbfbe0e = "") {
    if (!_0xbfbe0e) {
      _0xbfbe0e = _0x42e799.url.base;
    }
    if (!_0x3dbcd8.startsWith("http")) {
      return _0xbfbe0e + _0x3dbcd8;
    }
    return _0x3dbcd8;
  },
  async openMgConfigTips(_0xa9888a = 0) {
    return new Promise(async (_0x2092a0, _0x4e3d60) => {
      {
        let _0x3bbd04 = 1;
        let _0x5501c8 = _0x42e799.getConfig();
        if (_0x5501c8.mg == "1") {
          _0x42e799.setGMData("openMgConfigTipsMark", _0x3bbd04);
          return _0x2092a0();
        }
        let _0x2da48b = _0x42e799.getGMData("openMgConfigTipsMark", 0);
        if (_0x2da48b != _0x3bbd04) {
          await _0x42e799.waitTimeout(_0xa9888a);
          _0x42e799.confirmMsg("本脚本具有秒过功能，是否需要开启？", {
            btn: ["开启秒过", "1倍速慢放"],
            fun1(_0x1ae9be) {
              {
                _0x5501c8.mg = "1";
                _0x42e799.setConfig(_0x5501c8);
                _0x42e799.alertMsg("秒过开启成功，祝您玩的愉快！【刷新页面后脚本自动执行】");
                _0x42e799.setGMData("openMgConfigTipsMark", _0x3bbd04);
                layer.close(_0x1ae9be);
              }
            },
            fun2(_0xa64248) {
              {
                _0x5501c8.mg = "2";
                _0x42e799.setConfig(_0x5501c8);
                _0x42e799.alertMsg("未开启秒过。如果您后续需要使用秒过，可通过浏览器右上角的[脚本菜单]切换！【刷新页面后脚本自动执行】");
                _0x42e799.setGMData("openMgConfigTipsMark", _0x3bbd04);
                layer.close(_0xa64248);
              }
            }
          });
          return _0x4e3d60();
        }
        return _0x2092a0();
      }
    });
  },
  getConfig() {
    let _0x4ce1ce = GM_getValue("config", {});
    let _0x4d229e = {
      bs: 1,
      mg: "2",
      studyMode: "2",
      mgjg: 3
    };
    _0x4ce1ce = Object.assign(_0x4d229e, _0x4ce1ce);
    return _0x4ce1ce;
  },
  setConfig(_0x427780, _0xb9bff2 = "") {
    console.log("setConfig" + _0xb9bff2, JSON.stringify(_0x427780));
    GM_setValue("config", _0x427780);
  },
  fullUrl(_0x39f24e, _0x11b42b = "") {
    if (!_0x11b42b) {
      _0x11b42b = _0x42e799.url.base;
    }
    if (!_0x39f24e.startsWith("http")) {
      return _0x11b42b + _0x39f24e;
    }
    return _0x39f24e;
  },
  matchUrl(_0xd2519, _0x4d7f2c = "like", _0x41919e = location.href) {
    let _0x2ff383 = false;
    switch (_0x4d7f2c) {
      case "eq":
        _0x2ff383 = _0xd2519 == _0x41919e;
        break;
      case "like":
        _0x2ff383 = _0x41919e.indexOf(_0xd2519) != -1;
        break;
      case "left":
        _0x2ff383 = _0x41919e.startsWith(_0xd2519);
        break;
      case "right":
        _0x2ff383 = _0x41919e.endsWith(_0xd2519);
        break;
    }
    return _0x2ff383;
  },
  getPromiseWithAbort(_0x25322f) {
    let _0x3a3032 = {};
    let _0x5ab001 = new Promise(function (_0x2f77db, _0xf05c7) {
      {
        _0x3a3032.abort = _0xf05c7;
      }
    });
    _0x3a3032.promise = Promise.race([_0x25322f, _0x5ab001]);
    return _0x3a3032;
  },
  page_yhwelcome() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    var _0x367fea = sessionStorage.getItem("token");
    this.setGMData("token", _0x367fea);
    this.setGMData("login", {
      login: true,
      time: _0x42e799.now()
    });
  },
  gmGet(_0x29a89, _0x57439c) {
    if (_0x21da8b) {
      console.log("gmGet", _0x29a89);
    }
    if (_0x29a89.indexOf("?") != -1) {
      {
        for (key in _0x57439c) {
          _0x29a89 += "&" + key + "=" + _0x57439c[key];
        }
      }
    } else {
      {
        let _0x22870e = true;
        for (key in _0x57439c) {
          {
            _0x29a89 += (_0x22870e ? "?" : "&") + (key + "=" + _0x57439c[key]);
            _0x22870e = false;
          }
        }
      }
    }
    return new Promise((_0x232a23, _0x437854) => {
      GM_xmlhttpRequest({
        method: "get",
        url: _0x29a89,
        data: _0x57439c,
        headers: {},
        responseType: "json",
        onload: function (_0x1d99af) {
          let _0x47bca5 = _0x1d99af.response;
          if (_0x21da8b) {
            console.log(_0x47bca5);
          }
          _0x232a23(_0x47bca5);
        },
        onerror: function (_0x5b5871) {
          if (_0x21da8b) {
            console.log(_0x5b5871);
          }
          _0x437854(_0x5b5871);
        }
      });
    });
  },
  gmPost(_0x27f472, _0x4794c4, _0x1fa223 = _0x5ce231) {
    _0x27f472 = _0x42e799.fullUrl(_0x27f472);
    if (_0x21da8b) {
      console.log("gmPost", _0x27f472);
    }
    return new Promise((_0x1aab39, _0xa221b3) => {
      {
        GM_xmlhttpRequest({
          method: "post",
          url: _0x27f472,
          data: JSON.stringify(_0x4794c4),
          headers: {
            "Content-Type": "application/json"
          },
          responseType: "json",
          onload: function (_0x2e02d7) {
            {
              let _0x54a835 = _0x2e02d7.response;
              if (_0x21da8b) {
                console.log(_0x54a835);
              }
              if (_0x54a835.code != 200 && _0x1fa223.showErr) {
                const _0x52f745 = {
                  offset: "100px"
                };
                layer.alert(_0x54a835.message, _0x52f745);
                return;
              }
              _0x1aab39(_0x54a835);
            }
          },
          onerror: function (_0xd50c32) {
            if (_0x21da8b) {
              console.log(_0xd50c32);
            }
            _0xa221b3(_0xd50c32);
          }
        });
      }
    });
  },
  createWorker(_0x3785d4) {
    var _0xaeac5e = new Blob(["(" + _0x3785d4 + ")()"]);
    var _0x45d75e = window.URL.createObjectURL(_0xaeac5e);
    var _0x5e7e6e = new Worker(_0x45d75e);
    return _0x5e7e6e;
  },
  createIntervalWorker(_0x2ff5ad, _0x21e617) {
    var _0x1fea42 = _0x42e799.createWorker("async function (e) {\n              setInterval(async function () {\n                this.postMessage(null)\n              }, " + _0x21e617 + ")\n            }");
    _0x1fea42.onmessage = _0x2ff5ad;
    return _0x1fea42;
  },
  createTimeoutWorker(_0x1999bb, _0x16f3d7) {
    var _0x45fd8f = _0x42e799.createWorker("async function (e) {\n                setTimeout(async function () {\n                  this.postMessage(null)\n                }, " + _0x16f3d7 + ")\n              }");
    _0x45fd8f.onmessage = function () {
      _0x1999bb();
      _0x42e799.stopWorker(_0x45fd8f);
    };
    return _0x45fd8f;
  },
  stopWorker(_0x15ad3f) {
    try {
      {
        _0x15ad3f && _0x15ad3f.terminate();
      }
    } catch (_0x4c0726) {
      console.log(_0x4c0726);
    }
  },
  getGMData(_0x4dd091, _0x4b4d80) {
    return GM_getValue(_0x42e799.getGMKey(_0x4dd091), _0x4b4d80);
  },
  getGMKey(_0x16e3ba) {
    return _0x16e3ba;
    let _0x24a5c7 = localStorage.getItem("ZFK_KEYPREFIX");
    if (!_0x24a5c7) {
      _0x24a5c7 = _0x42e799.generateRandomString(10);
      localStorage.setItem("ZFK_KEYPREFIX", _0x24a5c7);
    }
    let _0x4c0dc4 = ["token"];
    if (_0x4c0dc4.includes(_0x16e3ba)) {
      {
        return _0x16e3ba;
      }
    }
    return _0x24a5c7 + "_";
  },
  setGMData(_0x36718b, _0x281ba5) {
    return GM_setValue(_0x42e799.getGMKey(_0x36718b), _0x281ba5);
  },
  delGMData(_0x461ed5, _0x58478f) {
    return GM_deleteValue(_0x42e799.getGMKey(_0x461ed5));
  },
  generateRandomString(_0x5cb383) {
    const _0x4b689f = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let _0x322d6b = "";
    for (let _0x8c3efc = 0; _0x8c3efc < _0x5cb383; _0x8c3efc++) {
      const _0x3f6a55 = Math.floor(Math.random() * _0x4b689f.length);
      _0x322d6b += _0x4b689f.charAt(_0x3f6a55);
    }
    return _0x322d6b;
  },
  timeStringToSeconds(_0xa3671b) {
    _0xa3671b = _0xa3671b.replace("小时", ":").replace("分", ":").replace("秒", "");
    if (_0xa3671b.endsWith(":")) {
      {
        _0xa3671b = _0xa3671b.substring(0, _0xa3671b.length - 1);
      }
    }
    const _0x1bce43 = _0xa3671b.split(":");
    if (_0x1bce43.length !== 3) {
      if (_0x1bce43.length == 2) {
        _0x1bce43.push(0);
      } else {
        {
          throw new Error("Invalid time string format. Expected 'hh:mm:ss'.");
        }
      }
    }
    const _0x2a9159 = parseInt(_0x1bce43[0]);
    const _0x2f16c2 = parseInt(_0x1bce43[1]);
    const _0x143944 = parseInt(_0x1bce43[2]);
    if (isNaN(_0x2a9159) || isNaN(_0x2f16c2) || isNaN(_0x143944)) {
      {
        throw new Error("Invalid time string format. Expected numeric values.");
      }
    }
    return _0x2a9159 * 3600 + _0x2f16c2 * 60 + _0x143944;
  },
  getLocalData(_0x54145c, _0x55d24a) {
    var _0x5528ca = localStorage.getItem(_0x54145c);
    if (_0x5528ca == null) {
      return _0x55d24a;
    }
    return JSON.parse(_0x5528ca).val;
  },
  setLocalData(_0x2ae2fa, _0x4eda23) {
    const _0x57d094 = {
      val: _0x4eda23
    };
    return localStorage.setItem(_0x2ae2fa, JSON.stringify(_0x57d094));
  },
  setFormVal(_0x5f2a8a, _0x282625) {
    $.each(_0x282625, function (_0xa718a9, _0x5cb04a) {
      let _0x1e02e3 = $(_0x5f2a8a).find("[name=\"" + _0xa718a9 + "\"]");
      if (_0x1e02e3.length == 0) {
        return true;
      } else {
        if (_0x1e02e3.length == 1) {
          {
            let _0x1c9971 = _0x1e02e3.eq(0).attr("type");
            switch (_0x1c9971) {
              case "radio":
              case "checkbox":
                if (_0x1e02e3.val() == _0x5cb04a) {
                  _0x1e02e3.prop("checked", true);
                }
                break;
              default:
                _0x1e02e3.val(_0x5cb04a);
                break;
            }
          }
        } else {
          _0x1e02e3.each((_0x8dcdb4, _0x25f98f) => {
            {
              if (_0x5cb04a.includes($(_0x25f98f).val())) {
                $(_0x25f98f).prop("checked", true);
              }
            }
          });
        }
      }
    });
  },
  getFormVal(_0x469234) {
    let _0x15cedb = {};
    var _0x2016e2 = $(_0x469234).serializeArray();
    let _0x3c0358 = [];
    $.each(_0x2016e2, function () {
      console.log(this);
      if (!_0x3c0358.includes(this.name)) {
        _0x3c0358.push(this.name);
        _0x15cedb[this.name] = this.value;
      } else {
        {
          let _0x5d85b3 = _0x15cedb[this.name];
          if (Array.isArray(_0x5d85b3)) {
            _0x15cedb[this.name].push(this.value);
          } else {
            _0x15cedb[this.name] = [_0x15cedb[this.name], this.value];
          }
        }
      }
    });
    return _0x15cedb;
  },
  now() {
    return new Date().getTime();
  },
  getElByText(_0x1dc14a, _0x925edb, _0x155809 = "eq", _0x1786f6 = true) {
    let _0x2258f0 = null;
    $(_0x1dc14a).each((_0x1c762c, _0x518242) => {
      {
        if (_0x1786f6 && !$(_0x518242).is(":visible")) {
          return true;
        }
        if (_0x155809 == "eq" && $(_0x518242).text().trim() == _0x925edb) {
          _0x2258f0 = $(_0x518242);
          return false;
        } else {
          if (_0x155809 == "startsWith" && $(_0x518242).text().trim().startsWith(_0x925edb)) {
            _0x2258f0 = $(_0x518242);
            return false;
          } else {
            if (_0x155809 == "endsWith" && $(_0x518242).text().trim().endsWith(_0x925edb)) {
              {
                _0x2258f0 = $(_0x518242);
                return false;
              }
            }
          }
        }
      }
    });
    return _0x2258f0;
  },
  getElListByText(_0x5ad7c0, _0x3453d4, _0x249465 = "eq", _0x15edeb = true) {
    let _0x8e0d21 = [];
    $(_0x5ad7c0).each((_0x5ecbe0, _0x49f7d3) => {
      {
        if (_0x15edeb && !$(_0x5ad7c0).is(":visible")) {
          {
            return true;
          }
        }
        if (_0x249465 == "eq" && $(_0x49f7d3).text().trim() == _0x3453d4) {
          {
            _0x8e0d21.push($(_0x49f7d3));
          }
        } else {
          if (_0x249465 == "startsWith" && $(_0x49f7d3).text().trim().startsWith(_0x3453d4)) {
            {
              _0x8e0d21.push($(_0x49f7d3));
            }
          } else {
            if (_0x249465 == "endsWith" && $(_0x49f7d3).text().trim().endsWith(_0x3453d4)) {
              {
                _0x8e0d21.push($(_0x49f7d3));
              }
            }
          }
        }
      }
    });
    return _0x8e0d21;
  },
  random(_0x1d53f8, _0x525720) {
    if (arguments.length === 2) {
      return Math.floor(_0x1d53f8 + Math.random() * (_0x525720 + 1 - _0x1d53f8));
    } else {
      return null;
    }
  },
  downloadTxt(_0x4fac2b, _0x5dcd62) {
    var _0x42a88d = document.createElement("a");
    _0x42a88d.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(_0x5dcd62));
    _0x42a88d.setAttribute("download", _0x4fac2b);
    _0x42a88d.style.display = "none";
    document.body.appendChild(_0x42a88d);
    _0x42a88d.click();
    document.body.removeChild(_0x42a88d);
  },
  dateFormat(_0x40327f = new Date(), _0x25a765 = "yyyy-MM-dd HH:mm") {
    let _0x3f3137;
    if (typeof _0x40327f === "number") {
      _0x40327f = new Date(_0x40327f);
    }
    const _0x2ef913 = {
      "y+": _0x40327f.getFullYear().toString(),
      "M+": (_0x40327f.getMonth() + 1).toString(),
      "d+": _0x40327f.getDate().toString(),
      "H+": _0x40327f.getHours().toString(),
      "m+": _0x40327f.getMinutes().toString(),
      "s+": _0x40327f.getSeconds().toString()
    };
    for (let _0x351f77 in _0x2ef913) {
      {
        _0x3f3137 = new RegExp("(" + _0x351f77 + ")").exec(_0x25a765);
        if (_0x3f3137) {
          {
            _0x25a765 = _0x25a765.replace(_0x3f3137[1], _0x3f3137[1].length == 1 ? _0x2ef913[_0x351f77] : _0x2ef913[_0x351f77].padStart(_0x3f3137[1].length, "0"));
          }
        }
      }
    }
    return _0x25a765;
  }
});
_0x42e799.setGMData("version", _0x42e799.setting.version.version);
_0x42e799.init();
if (!unsafeWindow.zfk) {
  unsafeWindow.zfk = _0x42e799;
}