
const _0x208af7 = {
  id: "1906889989430448129",
  link: "客服微信：Dengli_1122",
  url: ""
};
let _0x226ea2 = [_0x208af7];
let _0x69792 = "http://doc.zhanyc.cn/pages/cqrsw/";
let _0x2f230c = true;
let _0x350dd1 = false;
_0x350dd1 = true;
let _0x3accad = true;
_0x3accad = false;
_0x2f230c = false;
const _0x38bd9b = {
  version: "202506122151",
  body: "<div style=\"padding:10px;\">第一版本</div>"
};
const _0xe3d208 = {
  tjjl: "推荐购买脚本，返佣40%",
  version: _0x38bd9b
};
const _0x1bb081 = {
  maxComment: 100
};
const _0xdb207e = {
  list: null,
  docList: null
};
const _0x385bd3 = {
  index: null
};
const _0x46b831 = {
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
  index: _0xdb207e,
  video: _0x385bd3
};
const _0xa686b8 = {
  showErr: true
};
const _0x2db7ec = {
  showErr: true
};
const _0x413ae9 = {
  showErr: true
};
let _0x1a4a81 = Object.assign(baseConfig, {
  setting: _0xe3d208,
  config: _0x1bb081,
  pageData: _0x46b831,
  async init() {
    console.log("%c init", "background:rgb(0,0,0);color:#fff");
    var _0x50ffec;
    try {
      _0x1a4a81.setHook();
    } catch (_0x3fa2d4) {}
    if (navigator && navigator.locks && navigator.locks.request) {
      {
        const _0x2f1682 = new Promise(_0x1ee9bf => {
          _0x50ffec = _0x1ee9bf;
        });
        navigator.locks.request("unique_lock_name", {
          mode: "shared"
        }, () => {
          return _0x2f1682;
        });
      }
    }
    _0x1a4a81.addStyle();
    unsafeWindow.alert = function (_0x2be93f) {
      {
        layer.alert(_0x2be93f);
      }
    };
    if (location.href.indexOf("loginSuccess.html?yh=") != -1) {
      {
        console.log("%c loginSuccess.html?yh", "background:rgb(255,0,0);color:#fff");
        _0x1a4a81.page_yhwelcome();
      }
    }
    let _0x59bd66 = true;
    _0x59bd66 = await _0x1a4a81.checkVersion();
    if (_0x59bd66) {
      _0x1a4a81.firstRun();
    }
  },
  requestNotify() {
    Notification.requestPermission().then(function (_0x1603c7) {
      if (_0x1603c7 === "granted") {
        _0x1a4a81.tipsMsg("通知权限已授予");
      } else {
        if (_0x1603c7 === "denied") {
          _0x1a4a81.tipsMsg("通知权限已拒绝");
        }
      }
    });
  },
  firstRun() {
    _0x3accad && _0x1a4a81.requestNotify();
    if (_0x1a4a81.isDZKFMode()) {
      _0x1a4a81.begin("iamzhankuo");
      return;
    }
    if (top === window && _0x1a4a81.getGMData("showDoc", true)) {
      {
        layer.confirm("首次使用本脚本?点击下方按钮查看使用说明", {
          icon: 3,
          title: "首次使用？",
          btn: ["查看使用说明", "取消"]
        }, function (_0x3af039) {
          {
            _0x1a4a81.openDoc();
            layer.close(_0x3af039);
            _0x1a4a81.setGMData("showDoc", false);
            _0x1a4a81.begin("iamzhankuo");
          }
        }, function () {
          _0x1a4a81.setGMData("showDoc", false);
          _0x1a4a81.begin("iamzhankuo");
        });
      }
    } else {
      {
        _0x1a4a81.begin("iamzhankuo");
      }
    }
  },
  async begin(_0x5bffb5) {
    if (_0x5bffb5 != "iamzhankuo") {
      {
        return;
      }
    }
    if (window === top) {
      _0x1a4a81.addMenu();
      _0x1a4a81.registerMenuCommand();
    }
    let _0x59c3ab = location.href;
    setInterval(async () => {
      {
        if (_0x59c3ab != location.href) {
          {
            _0x59c3ab = location.href;
            if (_0x59c3ab.includes("/org/courseDetail")) {
              {
                _0x1a4a81.runByUrl(location.href);
              }
            }
          }
        }
      }
    }, 500);
    _0x1a4a81.runByUrl(location.href);
  },
  async addMenu() {
    await _0x1a4a81.waitOf(_0x211672 => $("body:visible").length > 0);
    if ($("#zfkLeftMenuContainer").length > 0) {
      return;
    }
    GM_addStyle("#zfkLeftMenuContainer{z-index:9999;position:fixed;left:0;top:40%;color:#fff;box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;animation:glowAnimation 3s infinite alternate;}@keyframes glowAnimation{0%{box-shadow:0 0 10px #00ffcc,0 0 20px #00ffcc,0 0 30px #00ffcc;}20%{box-shadow:0 0 15px #ff66cc,0 0 25px #ff66cc,0 0 35px #ff66cc;}40%{box-shadow:0 0 10px #ffcc33,0 0 20px #ffcc33,0 0 30px #ffcc33;}60%{box-shadow:0 0 15px #66ff66,0 0 25px #66ff66,0 0 35px #66ff66;}80%{box-shadow:0 0 10px #3399ff,0 0 20px #3399ff,0 0 30px #3399ff;}100%{box-shadow:0 0 10px #fffb00,0 0 20px #fffb00,0 0 30px #fffb00;}}#zfkLeftMenuContainer .zfkLeftMenuStep{position:absolute;background:#3498db;width:max-content;top:-35px;display:block;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu{background:rgba(0,0,0,0.4);border-radius:0 4px 4px 0;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu:hover .zfkLeftMenuBtn-titile{width:auto}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtn-titile{cursor:pointer;word-wrap:break-word;width:1em;display:inline-block}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl{display:none;margin:0 -6px;box-sizing:border-box}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li{list-style:none;color:#fff !important;cursor:pointer;padding:6px}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li:hover{background:#000}#zfkLeftMenuContainer .zfkLeftMenu .zfkLeftMenuBtnUl li::before{content:\"+ \"}#zfkIp51Config{padding:10px}");
    $("<div id=\"zfkLeftMenuContainer\">\n      <div class=\"zfkLeftMenu\">\n        <span class=\"zfkLeftMenuBtn-titile\">菜单</span>\n        <ul class=\"zfkLeftMenuBtnUl\">\n        </ul>\n  \n      </div>\n      </div>").appendTo("body");
    $(".zfkLeftMenu").hover(() => {
      $(".zfkLeftMenuBtnUl").show();
    }, () => {
      {
        $(".zfkLeftMenuBtnUl").hide();
      }
    });
  },
  async runByUrl(_0x50cdd2) {
    if (baseConfig.project.id == "1845418970929172482") {
      if (_0x50cdd2.includes("examCenter/myExamPaperView.do?")) {
        {
          _0x1a4a81.page_myExamPaperView();
        }
      }
      return;
    }
    if (_0x50cdd2.includes("/courseSetting/coursePlay/")) {
      _0x1a4a81.page_video();
    } else {
      if (_0x50cdd2.includes("/courseStudyItem/courseStudyItem.learn.do")) {
        _0x1a4a81.page_videoTop();
      } else {
        if (_0x50cdd2.includes("/template-frontent/bipartitescreen")) {
          _0x1a4a81.page_video_bipartitescreen();
        } else {
          if (_0x50cdd2.includes("/frontend-page/specialSubjectDetail?")) {
            await _0x1a4a81.setUserName2();
            _0x1a4a81.page_specialSubjectDetail();
          } else {
            if (_0x50cdd2.includes("/course/course.courseInfo.do?")) {
              {
                await _0x1a4a81.setUserName2();
                _0x1a4a81.page_courseInfo();
              }
            } else {
              if (_0x50cdd2.includes("/els/html/index.parser.do")) {
                await _0x1a4a81.setUserName2();
                top.zfk.pageData.listType = 1;
              } else {
                if (_0x50cdd2.includes("examCenter/myExamPaperView.do?")) {
                  _0x1a4a81.page_myExamPaperView();
                } else {
                  if (_0x50cdd2.includes("/singleExamTemp.do")) {
                    _0x1a4a81.page_singleExamTemp();
                  } else {
                    if (_0x50cdd2.includes("/mix-pc/detail?")) {
                      _0x1a4a81.page_list3();
                    } else {
                      if (_0x50cdd2.includes("/studyCourse/studyCourse.viewCourseExamPage.do?")) {
                        _0x1a4a81.page_viewCourseExamPage();
                      } else {
                        if (_0x50cdd2.includes("/studyCourse/studyCourse.enterCourse.do")) {
                          _0x1a4a81.page_enterCourse();
                        } else {
                          if (_0x50cdd2.includes("/studyCourse/studyCourse.viewEvaluatePage.do")) {
                            _0x1a4a81.page_viewEvaluatePage();
                          } else {
                            if (_0x50cdd2.includes("/org/courseDetail")) {
                              _0x1a4a81.page_courseDetail();
                            } else {
                              if (_0x50cdd2.includes("/yyth/player/s/")) {
                                {
                                  _0x1a4a81.page_yythPlayer();
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
  async page_yythPlayer() {
    console.log("%c page_yythPlayer", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.waitOf(_0x438c2b => $(".chapter-list .video").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    let _0x2a053d = null;
    $(".chapter-list .video").each((_0x88a261, _0x3adaaa) => {
      {
        let _0xff09fc = $(_0x3adaaa).find(".video-process:last").text().split("/").map(_0x2e7810 => Number(_0x2e7810.replace(/[^0-9]/g, "")));
        if (_0xff09fc[0] < _0xff09fc[1]) {
          _0x2a053d = $(_0x3adaaa);
          return false;
        }
      }
    });
    if (_0x2a053d == null) {
      let _0x126869 = _0x1a4a81.getGMData("toListType", "notify");
      if (_0x126869 == "open") {
        window.open(_0x1a4a81.getGMData("listUrl", "/"));
      } else {
        _0x1a4a81.setGMData("videoFinish", _0x1a4a81.now());
      }
      _0x1a4a81.setGMData("saveAndClose", _0x1a4a81.now());
      return;
    }
    if (_0x2a053d.is(".video-active")) {
      return;
    }
    await _0x1a4a81.confirmRun("准备切换到第一个未完成的节点");
    _0x2a053d.find(".video-title").click();
    if (_0x1a4a81.pageData.video.index != null) {
      return;
    }
    let _0x1677d5 = 2;
    let _0x31165a = null;
    let _0x50d0e9 = 60;
    let _0xadfa8e = _0x50d0e9;
    _0x1a4a81.pageData.video.index = setInterval(async () => {
      {
        try {
          {
            if (_0x1a4a81.pageData.waitTime > 0) {
              {
                _0x1a4a81.pageData.waitTime -= _0x1677d5;
                return;
              }
            }
            if (!_0x1a4a81.getVideo()) {
              {
                console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
                return;
              }
            }
            let _0x5f0888 = _0x1a4a81.getCurTime();
            if (_0x5f0888 == _0x31165a) {
              _0x31165a = _0x1a4a81.getCurTime();
              _0xadfa8e -= _0x1677d5;
              if (_0xadfa8e <= 0) {
                _0xadfa8e = _0x50d0e9;
                _0x1a4a81.confirmRun("貌似卡死了，刷新页面重启").then(_0x519471 => {
                  {
                    _0x1a4a81.setGMData("reload", _0x1a4a81.now());
                  }
                });
                _0x1a4a81.pageData.waitTime = 10;
                return;
              }
            } else {
              _0x31165a = _0x5f0888;
              _0xadfa8e = _0x50d0e9;
            }
            _0x1a4a81.getVideo().volume = 0;
            let _0x4e6872 = "进度：" + _0x1a4a81.getCurTime().toFixed(0) + "/" + _0x1a4a81.getTotalTime().toFixed(0);
            _0x1a4a81.setGMData("updateTitle", _0x4e6872);
            if ($("body").text().trim() == "请求超时") {
              _0x1a4a81.pageData.waitTime = 10;
              _0x1a4a81.setGMData("reload", _0x1a4a81.now());
              return;
            }
            console.log("%c video run", "background:rgb(255,0,0);color:#fff");
            let _0xb1e58 = $(".video-active").find(".video-process:last").text().split("/").map(_0x3631fe => Number(_0x3631fe.replace(/[^0-9]/g, "")));
            if (_0xb1e58[0] >= _0xb1e58[1]) {
              {
                _0x1a4a81.pageData.waitTime = 30;
                _0x1a4a81.confirmRun("当前视频播放完成，准备刷新页面以进行下一个视频").then(_0x39cf04 => {
                  _0x1a4a81.setGMData("reload", _0x1a4a81.now());
                });
                return false;
              }
            }
            let _0x23ce4c = await _0x1a4a81.isPlayFinish();
            if (_0x23ce4c) {
              {
                _0x1a4a81.pageData.waitTime = 15;
                layer.msg("视频即将结束，等待下一步操作", {
                  time: 10000
                });
                setTimeout(() => {
                  _0x1a4a81.play();
                }, 10000);
                return;
              }
            }
            let _0x2f8202 = await _0x1a4a81.videoIsPlay();
            if (!_0x2f8202) {
              {
                if (!_0x23ce4c) {
                  _0x1a4a81.play();
                }
              }
            }
          }
        } catch (_0x4bc17a) {
          {
            console.error("视频页面定时器出错", _0x4bc17a);
          }
        }
      }
    }, _0x1677d5 * 1000);
  },
  async page_courseDetail() {
    console.log("%c page_courseDetail", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.waitOf(_0x3fb98e => $(".info-content").text().includes("您还需要学习"));
    await _0x1a4a81.waitOf(_0x3f10ef => $(".text-item:visible").length > 0);
    _0x1a4a81.tipsMsg("等待脚本操作", 5000);
    await _0x1a4a81.waitOf(_0xb91169 => _0x1a4a81.pageData.calcListFinish == true);
    await _0x1a4a81.waitTimeout(1000);
    let _0x3fcf81 = $(".info-content").text().split("必修学分，");
    _0x3fcf81[0] = Number(_0x3fcf81[0].replace(/.*要学习/, ""));
    _0x3fcf81[1] = Number(_0x3fcf81[1].replace(/[^0-9\.]/g, ""));
    let _0x3c4562 = _0x1a4a81.getConfig();
    if (_0x3c4562.studyMode == "1") {
      {
        return;
      }
    }
    _0x1a4a81.setSkipBtn();
    if (_0x3fcf81[0] == 0 && _0x3fcf81[1] == 0) {
      _0x1a4a81.alertMsg("学时已经达到要求");
      return;
    }
    if ($("#tab-MUST").is(".is-active")) {
      {
        if (_0x3fcf81[0] != 0) {
          {
            _0x1a4a81.beginRunList();
            return;
          }
        }
        let _0xa4a4d1 = $("#tab-SELECTIVE").click();
        await _0x1a4a81.waitListUpdate(_0xa4a4d1);
        await _0x1a4a81.waitTimeout(500);
        _0x1a4a81.page_courseDetail();
        return;
      }
    } else {
      {
        if (_0x3fcf81[1] != 0) {
          {
            _0x1a4a81.beginRunList();
            return;
          }
        }
        _0x1a4a81.alertMsg("学时已经达到要求");
      }
    }
  },
  async waitListUpdate(_0x506326) {
    return new Promise(async (_0x514a3f, _0x2ce2d7) => {
      await _0x1a4a81.waitOf(_0x52e09c => $(".text-box:visible").text() != _0x506326);
      return _0x514a3f();
    });
  },
  async page_kcpg() {
    console.log("%c page_kcpg", "background:rgb(0,0,0);color:#fff");
  },
  async page_viewEvaluatePage() {
    console.log("%c page_viewEvaluatePage", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.closeWaitConfrimWin();
  },
  setHook() {
    ah.proxy({
      onRequest: (_0x10cbb4, _0x1e27cf) => {
        let _0x301de7 = _0x10cbb4.url;
        try {
          if (_0x301de7.includes("/courseStudy/getCourseDetailByProjectId")) {
            {
              _0x1a4a81.clearStipBtnByHook();
              return _0x1e27cf.next(_0x10cbb4);
            }
          } else {
            if (_0x301de7.includes("/record/updateCourseRecord")) {
              {
                let _0x193dd7 = _0x1a4a81.getConfig();
                if (_0x193dd7.mg == "1") {
                  {
                    _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc", false).then(_0x424470 => {
                      let _0x2deb85 = JSON.parse(_0x10cbb4.body);
                      _0x2deb85.currentStudyTime = 180;
                      _0x2deb85.currentPosition = _0x1a4a81.pageData.curStudyPosition;
                      let _0x27b488 = _0x1a4a81.pageData.curStudyData.playTime || _0x1a4a81.pageData.curStudyData.minStudyTime;
                      let _0x479c41 = (_0x1a4a81.pageData.curStudyPosition + 180) * 100 / _0x27b488;
                      if (_0x479c41 > 100) {
                        _0x479c41 = 100;
                      }
                      _0x1a4a81.tipsMsg("当前进度：" + _0x479c41.toFixed(2) + "%");
                      _0x1a4a81.pageData.curStudyPosition += 180;
                      if (_0x1a4a81.pageData.curStudyPosition > _0x27b488) {
                        _0x1a4a81.pageData.curStudyPosition = _0x27b488;
                      }
                      _0x10cbb4.body = JSON.stringify(_0x2deb85);
                      return _0x1e27cf.next(_0x10cbb4);
                    }, _0x20e1bd => {
                      return _0x1e27cf.next(_0x10cbb4);
                    });
                  }
                } else {
                  return _0x1e27cf.next(_0x10cbb4);
                }
              }
            } else {
              {
                _0x1e27cf.next(_0x10cbb4);
              }
            }
          }
        } catch (_0x4c3ccc) {
          _0x1e27cf.next(_0x10cbb4);
        }
      },
      onError: (_0x26df3d, _0x5841c3) => {
        console.log(_0x26df3d.type);
        _0x5841c3.next(_0x26df3d);
      },
      onResponse: (_0x361f02, _0x4c192d) => {
        {
          try {
            let _0x5e2831 = _0x361f02.config.url;
            if (_0x5e2831.includes("/record/updateCourseRecord")) {
              {
                _0x361f02.response.includes("操作处理成功");
              }
            } else {
              if (_0x5e2831.includes("/getRmProjectDetail.do")) {
                let _0x46d280 = JSON.parse(_0x361f02.response);
                _0x1a4a81.pageData.listStudyScoreData = _0x46d280;
                _0x1a4a81.calcListFinish();
              } else {
                if (_0x5e2831.includes("/courseStudy/getCourseDetailByProjectId")) {
                  _0x1a4a81.waitSetSkipBtnByHook();
                } else {
                  if (_0x5e2831.includes("/course.loadCourseSystemSeting.do")) {
                    {
                      let _0x554afa = JSON.parse(_0x361f02.response);
                      _0x554afa.preventHangTime = 99999;
                      _0x361f02.response = JSON.stringify(_0x554afa);
                    }
                  }
                }
              }
            }
          } finally {
            {
              _0x4c192d.next(_0x361f02);
            }
          }
        }
      }
    }, unsafeWindow.window);
  },
  findQA(_0xb54cf7, _0x4b4697) {
    let _0x45cd1f = _0xb54cf7.find(_0x2e6875 => _0x2e6875.fullTitle == _0x4b4697);
    if (!_0x45cd1f) {
      _0x45cd1f = _0xb54cf7.find(_0x3fd1de => _0x1a4a81.simpleHtml(_0x3fd1de.fullTitle) == _0x1a4a81.simpleHtml(_0x4b4697));
    }
    if (!_0x45cd1f) {
      _0x45cd1f = _0xb54cf7.find(_0x53fafd => _0x1a4a81.simpleText(_0x53fafd.fullTitle) == _0x1a4a81.simpleText(_0x4b4697));
    }
    return _0x45cd1f;
  },
  async page_enterCourse() {
    console.log("%c page_enterCourse", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.closeWaitConfrimWin();
    await _0x1a4a81.waitOf(_0x238390 => $(".cs-test-item").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    if ($(".cs-test-title").text().trim() == "课程评估") {
      _0x1a4a81.page_kcpg();
      return;
    }
    let _0x3a15fc = [];
    _0x1a4a81.tipsMsg("准备查询答案");
    $(".cs-test-item").each((_0x4625a1, _0x15bd0b) => {
      {
        let _0x4b6a8b = $(_0x15bd0b).find(".cs-test-question").text().trim();
        _0x4b6a8b = _0x4b6a8b.replace(/\d+、(.*)（\d+.*?分）/, "$1");
        _0x3a15fc.push(_0x4b6a8b);
      }
    });
    _0x3accad && console.log(_0x3a15fc);
    let _0x36c8ef = [];
    let _0x59f858 = await _0x1a4a81.queryQaFree(_0x3a15fc, "云端学习");
    let _0x586364 = false;
    $(".cs-test-item").each((_0x5b1ec2, _0x2b8adb) => {
      {
        let _0x1be80a = $(_0x2b8adb).find(".cs-test-question").text().trim();
        _0x1be80a = _0x1be80a.replace(/\d+、(.*)（\d+.*?分）/, "$1");
        let _0x160e2c = _0x1a4a81.findQA(_0x59f858, _0x1be80a);
        if (!_0x160e2c) {
          _0x36c8ef.push($(_0x2b8adb).find(".cs-test-option .cs-option-row").eq(0));
          _0x586364 = true;
          return;
        }
        let _0x11950f = _0x160e2c.fullAnswer.split("#split#");
        $(_0x2b8adb).find(".cs-test-option .cs-option-row").each((_0x5f3534, _0x4302f3) => {
          let _0x1f5953 = $(_0x4302f3).text().trim();
          let _0x2bb87d = _0x11950f.find(_0x3d1f9e => _0x3d1f9e == _0x1f5953 || _0x1a4a81.isMatchQAText(_0x1f5953, _0x3d1f9e));
          if (_0x2bb87d) {
            {
              _0x36c8ef.push($(_0x4302f3));
            }
          }
        });
      }
    });
    for (let _0x1c3d2f = 0; _0x1c3d2f < _0x36c8ef.length; _0x1c3d2f++) {
      const _0x216404 = _0x36c8ef[_0x1c3d2f];
      _0x216404.click();
      _0x1a4a81.tipsMsg("正在答题");
      await _0x1a4a81.waitTimeout(100);
    }
    _0x1a4a81.tipsMsg("答题完毕");
    if (_0x586364) {
      _0x1a4a81.confirmRun("存在没有答案的题目（全选A），10秒后自动交卷并采集答案后重新答题。如不想这样子，请点击下面[取消执行按钮]后手动答题并交卷", 10000).then(_0x3b164f => {
        {
          _0x1a4a81.page_exam_submit();
        }
      });
      return;
    }
    _0x1a4a81.confirmRun("3秒后交卷").then(_0x102967 => {
      {
        _0x1a4a81.page_exam_submit();
      }
    });
  },
  async page_exam_submit() {
    $("#goNext").click();
    await _0x1a4a81.waitTimeout(500);
    _0x1a4a81.getElByText($("a.layui-layer-btn1"), "确定")[0].click();
    _0x1a4a81.waitOf(_0x19d5de => _0x1a4a81.getElByText($("a.layui-layer-btn0"), "查看详情") != null).then(_0x3ccaa8 => {
      _0x1a4a81.getElByText($("a.layui-layer-btn0"), "查看详情")[0].click();
    });
    _0x1a4a81.waitOf(_0x2e7e5e => _0x1a4a81.getElByText($(".elpui-layer-btn0"), "查看结果") != null).then(_0x439523 => {
      {
        _0x1a4a81.getElByText($(".elpui-layer-btn0"), "查看结果")[0].click();
      }
    });
  },
  async page_viewCourseExamPage() {
    console.log("%c page_viewCourseExamPage", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.closeWaitConfrimWin();
    await _0x1a4a81.waitOf(_0x23c3e8 => $(".cs-test-item").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    _0x1a4a81.tipsMsg("准备采集答案");
    let _0x5a0597 = [];
    $(".cs-test-item").each((_0x130f2d, _0x392c07) => {
      let _0x4d00f7 = $(_0x392c07).find(".cs-test-question").text().trim();
      _0x4d00f7 = _0x4d00f7.replace(/\d+、(.*)（\d+.*?分）/, "$1");
      let _0x12e7b9 = [];
      $(_0x392c07).find("script").each((_0x52d229, _0x244fdb) => {
        let _0x3fe7f7 = $(_0x244fdb).text().split(",")[1].replace(/.*'(.*)'.*/, "$1");
        let _0x1584cb = $("#" + _0x3fe7f7).parents(".cs-option-cell:first").next().text().trim();
        if ($("#" + _0x3fe7f7).is("p")) {
          {
            _0x1584cb = $("#" + _0x3fe7f7).text().trim();
          }
        }
        _0x12e7b9.push(_0x1584cb);
      });
      _0x5a0597.push({
        key: _0x4d00f7,
        value: _0x12e7b9.join("#split#")
      });
    });
    _0x3accad && console.log(_0x5a0597);
    await _0x1a4a81.uploadQA(_0x5a0597, 60, "云端学习");
    _0x1a4a81.tipsMsg("答案采集完毕");
    if ($("#startStudy").length > 0) {
      {
        $("#startStudy").click();
        return;
      }
    }
    _0x1a4a81.confirmRun().then(_0x31a7b6 => {
      location.href = _0x1a4a81.getGMData("listUrl", "/");
    });
  },
  async page_singleExamTemp() {
    console.log("%c page_singleExamTemp", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.waitOf(_0x4af640 => $(".question-panel-middle").length > 0);
    let _0x3bd466 = [];
    _0x1a4a81.tipsMsg("准备查询答案");
    $(".question-panel-middle").each((_0x469829, _0x5a09bd) => {
      let _0x4edc38 = $(_0x5a09bd).find(".question-stem").text().trim();
      _0x4edc38 = _0x4edc38.replace(/^(\d+\s*?\.)\s*(.*)\s*（\d+\.?\d*分）/, "$2");
      _0x3bd466.push(_0x4edc38);
    });
    _0x3accad && console.log(_0x3bd466);
    let _0x2c5cd6 = [];
    let _0x4a8034 = await _0x1a4a81.queryQaFree(_0x3bd466, "云端学习");
    $(".question-panel-middle").each((_0x7b4129, _0x2b399f) => {
      {
        let _0x4118d0 = $(_0x2b399f).find(".question-stem").text().trim();
        _0x4118d0 = _0x4118d0.replace(/^(\d+\s*?\.)\s*(.*)\s*（\d+\.?\d*分）/, "$2");
        let _0x4b4498 = _0x4a8034.find(_0x4ab40a => _0x4ab40a.fullTitle == _0x4118d0 || _0x1a4a81.isMatchQAText(_0x4ab40a.fullTitle, _0x4118d0));
        if (!_0x4b4498) {
          return;
        }
        let _0x4d228f = _0x4b4498.fullAnswer.split("#split#");
        $(_0x2b399f).find("label").each((_0x16c466, _0x322e74) => {
          {
            let _0x2f8a1e = $(_0x322e74).text().replace(/^[a-zA-Z]\./, "").trim();
            _0x2f8a1e = _0x2f8a1e.replace(/^[a-zA-Z]\.\s*/, "");
            let _0x2711ff = _0x4d228f.find(_0x4acc10 => _0x4acc10 == _0x2f8a1e || _0x1a4a81.isMatchQAText(_0x2f8a1e, _0x4acc10));
            if (_0x2711ff) {
              _0x2c5cd6.push($(_0x322e74));
            }
          }
        });
      }
    });
    for (let _0x33ac62 = 0; _0x33ac62 < _0x2c5cd6.length; _0x33ac62++) {
      const _0x268389 = _0x2c5cd6[_0x33ac62];
      _0x268389.click();
      _0x1a4a81.tipsMsg("正在答题");
      await _0x1a4a81.waitTimeout(100);
    }
    _0x1a4a81.tipsMsg("答题完毕");
  },
  async page_wrongAnswer() {
    console.log("%c page_wrongAnswer", "background:rgb(0,0,0);color:#fff");
    if ($(".choice-cont").length == 0) {
      {
        _0x1a4a81.tipsMsg("未找到错题本的题目列表");
        return;
      }
    }
    _0x1a4a81.tipsMsg("准备采集答案");
    await _0x1a4a81.waitTimeout(500);
    let _0x270245 = [];
    $(".choice-cont").each((_0x2afd4d, _0x7be9dd) => {
      {
        let _0x56d16e = $(_0x7be9dd).find(".title-span").text().trim().replace(/^[\d+\.]*(.*)/, "$1");
        let _0x56830e = $(_0x7be9dd).find(".biaozhun").text().trim().replace("标准答案", "").trim();
        if (!_0x56830e || _0x56830e == "") {
          return true;
        }
        let _0x4d5521 = [];
        if (["正确", "错误", "对", "错"].includes(_0x56830e)) {
          {
            _0x4d5521 = [_0x56830e];
          }
        } else {
          {
            _0x4d5521 = _0x56830e.replace(/[^A-Z]/g, "").split("");
          }
        }
        let _0x588ad7 = [];
        _0x4d5521.forEach(_0x2b3f0c => {
          console.log(_0x56d16e, _0x2b3f0c);
          let _0x3e99cb = $(_0x7be9dd).find("label").eq(_0x1a4a81.formatAnswerOption(_0x2b3f0c)).text().replace(/^[a-zA-Z]\./, "").trim();
          _0x3e99cb = _0x3e99cb.replace(/^[a-zA-Z]\.\s*/, "");
          if (["正确", "错误", "对", "错"].includes(_0x2b3f0c)) {
            {
              _0x3e99cb = _0x2b3f0c;
            }
          }
          _0x3e99cb = _0x3e99cb.trim().replace(/^[a-zA-Z]\s*/, "").trim();
          _0x588ad7.push(_0x3e99cb);
        });
        _0x270245.push({
          key: _0x56d16e,
          value: _0x588ad7.join("#split#")
        });
      }
    });
    _0x3accad && console.log(_0x270245);
    await _0x1a4a81.uploadQA(_0x270245, 50, "云端学习");
    _0x1a4a81.tipsMsg("答案采集完毕");
  },
  async page_myExamPaperView() {
    console.log("%c page_myExamPaperView", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.waitOf(_0x3b6ad5 => $("#resultDateForm .question-panel-middle").length > 0);
    _0x1a4a81.tipsMsg("准备采集答案");
    await _0x1a4a81.waitTimeout(500);
    let _0x3ff702 = [];
    $("#resultDateForm .question-panel-middle").each((_0x5d8bff, _0xe66c8) => {
      let _0xc18387 = $(_0xe66c8).find(".question-stem .name").text().trim();
      _0xc18387 = _0xc18387.replace(/^\.?\s*(.*)\s*（\d+\.?\d*\s*分）$/, "$1");
      let _0x2279c1 = $(_0xe66c8).find(".true-answer").text().trim().replace(/^.*参考答案\s*：(.*)$/, "$1");
      if (!_0x2279c1 || _0x2279c1 == "") {
        return true;
      }
      let _0x249965 = [];
      if (["正确", "错误"].includes(_0x2279c1)) {
        _0x249965 = [_0x2279c1];
      } else {
        _0x249965 = _0x2279c1.replace(/[^A-Z]/g, "").split("");
      }
      let _0x424c3d = [];
      _0x249965.forEach(_0x48471d => {
        console.log(_0xc18387, _0x48471d);
        let _0x4518e4 = $(_0xe66c8).find("label").eq(_0x1a4a81.formatAnswerOption(_0x48471d)).text().replace(/^[a-zA-Z]\./, "").trim();
        _0x4518e4 = _0x4518e4.replace(/^[a-zA-Z]\.\s*/, "");
        if (["正确", "错误"].includes(_0x48471d)) {
          {
            _0x4518e4 = _0x48471d;
          }
        }
        _0x424c3d.push(_0x4518e4);
      });
      _0x3ff702.push({
        key: _0xc18387,
        value: _0x424c3d.join("#split#")
      });
    });
    _0x3accad && console.log(_0x3ff702);
    await _0x1a4a81.uploadQA(_0x3ff702, 60, "云端学习");
    _0x1a4a81.tipsMsg("答案采集完毕");
  },
  async page_video_bipartitescreen() {
    console.log("%c page_courseInfo", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.closeWaitConfrimWin();
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    let _0x364340 = 2;
    let _0x4ea294 = null;
    let _0x3c601a = 60;
    let _0x190fb4 = _0x3c601a;
    _0x1a4a81.closeWaitConfrimWin();
    if (_0x1a4a81.pageData.video.index != null) {
      return;
    }
    let _0x20b371 = _0x1a4a81.getConfig();
    let _0x185f08 = Number(_0x20b371.bs);
    setTimeout(async () => {
      {
        let _0x5813f2 = _0x1a4a81.getCurTime();
        await _0x1a4a81.waitTimeout(5000);
        if (_0x1a4a81.getCurTime() == _0x5813f2) {
          {
            _0x1a4a81.confirmRun("貌似卡主了，3秒后刷新页面").then(_0xd556e2 => {
              location.reload();
            });
          }
        }
      }
    }, 60000);
    _0x1a4a81.pageData.video.index = setInterval(async () => {
      try {
        if (_0x1a4a81.pageData.waitTime > 0) {
          {
            _0x1a4a81.pageData.waitTime -= _0x364340;
            return;
          }
        }
        if (!_0x1a4a81.getVideo()) {
          {
            console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
            return;
          }
        }
        let _0x48e6ab = _0x1a4a81.getCurTime();
        if (_0x48e6ab == _0x4ea294) {
          _0x4ea294 = _0x1a4a81.getCurTime();
          _0x190fb4 -= _0x364340;
          if (_0x190fb4 <= 0) {
            _0x190fb4 = _0x3c601a;
            _0x1a4a81.confirmRun("貌似卡死了，前往列表页面").then(_0x22aace => {
              location.href = _0x1a4a81.getGMData("courseDetailUrl", "/");
            });
            _0x1a4a81.pageData.waitTime = 10;
            return;
          }
        } else {
          _0x4ea294 = _0x48e6ab;
          _0x190fb4 = _0x3c601a;
        }
        _0x1a4a81.getVideo().volume = 0;
        let _0x3adadb = "进度：" + _0x1a4a81.getCurTime().toFixed(0) + "/" + _0x1a4a81.getTotalTime().toFixed(0);
        $("title").text(_0x3adadb);
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x478b4b = _0x1a4a81.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x478b4b != null) {
          {
            _0x478b4b.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
          }
        }
        let _0x357bdf = await _0x1a4a81.isPlayFinish();
        if (_0x357bdf) {
          _0x1a4a81.pageData.waitTime = 15;
          layer.msg("视频即将结束，等待下一步操作", {
            time: 10000
          });
          setTimeout(() => {
            _0x1a4a81.confirmRun("课程学习完毕，准备关闭当前页面").then(_0x3fa571 => {
              _0x1a4a81.setGMData("videoFinish", _0x1a4a81.now());
            });
          }, 10000);
          clearInterval(_0x1a4a81.pageData.video.index);
          _0x1a4a81.pageData.video.index = null;
          return;
        }
        let _0x44ac5c = await _0x1a4a81.videoIsPlay();
        if (!_0x44ac5c) {
          if (!_0x357bdf) {
            _0x1a4a81.play();
          }
        }
      } catch (_0x50afd3) {
        console.error("视频页面定时器出错", _0x50afd3);
      }
    }, _0x364340 * 1000);
  },
  async page_courseInfo() {
    console.log("%c page_courseInfo", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.waitOf(_0x26ba06 => $("#goStudyBtn").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    $("#goStudyBtn")[0].click();
    let _0x1333ca = location.href;
    setTimeout(() => {
      if (location.href != _0x1333ca) {
        {
          _0x1a4a81.runByUrl(location.href);
        }
      }
    }, 3000);
  },
  async page_specialSubjectDetail() {
    console.log("%c page_specialSubjectDetail", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x1a4a81.waitOf(_0x185125 => $(".course-list .ant-list-item").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    let _0x2add98 = null;
    $(".course-list .ant-list-item").each((_0x4e7471, _0x56c6f2) => {
      if ($(_0x56c6f2).find(".top-extra").text().includes("已完成") || $(_0x56c6f2).find(".top-extra").text().includes("课程评估")) {
        {
          return true;
        }
      }
      _0x2add98 = $(_0x56c6f2);
      return false;
    });
    if (_0x2add98 == null) {
      {
        _0x1a4a81.alertMsg("学习完成，请检查");
        return;
      }
    }
    _0x1a4a81.setGMData("docListUrl", location.href);
    _0x1a4a81.confirmRun("3秒后执行下一步", 3000).then(_0xfe499b => {
      {
        _0x2add98.find(".course-meta").click();
        _0x1a4a81.openLjTips(false);
      }
    });
    if (_0x1a4a81.pageData.index.docList == null) {
      {
        _0x1a4a81.pageData.index.docList = GM_addValueChangeListener("videoFinish", function (_0x4e0dcb, _0x31b0be, _0x32f3d3, _0x4ce341) {
          location.reload();
        });
      }
    }
  },
  async page_list2() {
    console.log("%c page_list2", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.setUserName_http();
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x1a4a81.waitTimeout(1000);
    if (_0x1a4a81.pageData.index.list == null) {
      _0x1a4a81.pageData.index.list = GM_addValueChangeListener("videoFinish", function (_0x9a6b81, _0x559549, _0x3a8c8e, _0x1df4db) {
        _0x1a4a81.tipsMsg("等待脚本自动操作", 10000);
        setTimeout(() => {
          $(".nc-rank-link.nc-rank-active")[0].click();
          setTimeout(() => {
            {
              _0x1a4a81.setGMData("runTime", _0x1a4a81.now());
              _0x1a4a81.page_list();
            }
          }, 5000);
        }, 5000);
      });
    }
    let _0x31e214 = null;
    $(".nc-mycourse-card").each((_0x4e37c1, _0x4c4755) => {
      if ($(_0x4c4755).find(".done-txt").length > 0) {
        {
          return true;
        }
      }
      let _0x5a787a = _0x1a4a81.getElByText($(_0x4c4755).find("p"), "学习进度:", "startsWith");
      if (_0x5a787a.find(".nc-progress").length > 0) {
        {
          _0x31e214 = $(_0x4c4755);
          return false;
        }
      }
    });
    if (_0x31e214 == null) {
      {
        _0x1a4a81.page_list_nextPage2();
        return;
      }
    }
    _0x1a4a81.setGMData("listUrl", location.href);
    _0x1a4a81.confirmRun("3秒后执行下一步", 3000).then(_0x1b9a14 => {
      {
        _0x31e214.find(".goStudy")[0].click();
        _0x1a4a81.openLjTips(false);
      }
    });
  },
  async page_list3() {
    console.log("%c page_list3", "background:rgb(0,0,0);color:#fff");
    await _0x1a4a81.setUserName_http();
    _0x1a4a81.closeWaitConfrimWin();
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x1a4a81.waitOf(_0xc16536 => $(".task-list").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    let _0x221c46 = null;
    $(".task-list").each((_0x1efc62, _0x322d9e) => {
      {
        if ($(_0x322d9e).find(".task-status").text().trim() == "已完成") {
          return true;
        }
        _0x221c46 = $(_0x322d9e);
        return false;
      }
    });
    if (_0x221c46 == null) {
      {
        _0x1a4a81.alertMsg("学习完成");
        return;
      }
    }
    _0x1a4a81.setGMData("listUrl", location.href);
    _0x1a4a81.setGMData("toListType", "open");
    _0x1a4a81.confirmRun("3秒后执行下一步", 3000).then(_0x2a619c => {
      {
        _0x221c46.find(".task-name").click();
        _0x1a4a81.openLjTips(true);
      }
    });
  },
  async beginRunList() {
    _0x1a4a81.setGMData("runTime", _0x1a4a81.now());
    _0x1a4a81.page_list();
  },
  clearStipBtnByHook() {
    $(".zfk-skipContainer").remove();
    _0x1a4a81.pageData.oldListTxt = $(".text-item:visible").text();
  },
  async waitSetSkipBtnByHook() {
    await _0x1a4a81.waitOf(_0x14579d => $(".text-item:visible").text() != _0x1a4a81.pageData.oldListTxt);
    await _0x1a4a81.waitTimeout(500);
    _0x1a4a81.setSkipBtn();
  },
  setSkip(_0x576870, _0x3b0022, _0x15d633) {
    _0x576870.stopPropagation();
    $(".zfk-skipContainer").remove();
    var _0x563c5a = _0x1a4a81.getGMData("skipList", []);
    if (_0x15d633) {
      {
        _0x563c5a.push(_0x3b0022);
        _0x1a4a81.setGMData("skipList", _0x563c5a);
      }
    } else {
      _0x1a4a81.setGMData("skipList", _0x563c5a.filter(_0x45abb3 => _0x45abb3 != _0x3b0022));
    }
    layer.msg("操作成功");
    _0x1a4a81.setSkipBtn();
  },
  setSkipBtn() {
    var _0x105d72 = _0x1a4a81.getGMData("skipList", []);
    $(".zfk-skipContainer").remove();
    $(".text-item:visible").each((_0x46bc83, _0x135f7d) => {
      {
        let _0x47ef03 = $(_0x135f7d).find(".item__name").attr("title");
        let _0x5eb3d2 = $(_0x135f7d);
        if (_0x105d72.includes(_0x47ef03)) {
          {
            _0x5eb3d2.append("<div class=\"text-center zfk-skipContainer\"><button type=\"button\" class=\"zfk-btn info\"  onclick=\"zfk.setSkip(event,'" + _0x47ef03 + "',false)\">脚本：取消跳过</button></div>");
          }
        } else {
          _0x5eb3d2.append("<div class=\"text-center zfk-skipContainer\"><button type=\"button\" class=\"zfk-btn danger\" onclick=\"zfk.setSkip(event,'" + _0x47ef03 + "',true)\">脚本：跳过课程</button></div>");
        }
      }
    });
  },
  async page_list() {
    console.log("%c page_list", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.pageData.listStudyScoreData = null;
    if (_0x1a4a81.pageData.listType == 1) {
      $("iframe[src^=\"/els/html/index.parser.do\"]")[0].contentWindow.zfk.page_list();
      return;
    }
    if ($(".text-item:visible").length == 0 && $(".nc-mycourse-card").length == 0) {
      {
        _0x1a4a81.tipsMsg("请进入课程列表页面再启动脚本");
        return;
      }
    }
    if ($(".nc-mycourse-card").length > 0) {
      _0x1a4a81.page_list2();
      return;
    }
    await _0x1a4a81.setUserName();
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    await _0x1a4a81.openMgConfigTips(0);
    await _0x1a4a81.waitTimeout(1000);
    _0x1a4a81.setSkipBtn();
    if (_0x1a4a81.pageData.index.list == null) {
      _0x1a4a81.pageData.index.list = GM_addValueChangeListener("videoFinish", function (_0x5a62c2, _0x41295b, _0x21bd9b, _0x8a3183) {
        _0x1a4a81.tipsMsg("等待脚本自动操作", 5000);
        _0x1a4a81.pageData.listStudyScoreData = null;
        let _0x3b70a6 = _0x1a4a81.getConfig();
        if (_0x3b70a6.studyMode == "2") {
          {
            _0x1a4a81.setGMData("runTime", _0x1a4a81.now());
            location.reload();
            return;
          }
        }
        setTimeout(() => {
          $(".el-tabs__item.is-active").click();
          setTimeout(() => {
            {
              _0x1a4a81.setGMData("runTime", _0x1a4a81.now());
              _0x1a4a81.page_list();
            }
          }, 5000);
        }, 5000);
      });
    }
    let _0x233d12 = null;
    var _0x15e755 = _0x1a4a81.getGMData("skipList", []);
    $(".text-item:visible").each((_0x5b52c0, _0x328091) => {
      {
        let _0x4a889e = $(_0x328091).find(".item__name").attr("title");
        if (_0x15e755.includes(_0x4a889e)) {
          {
            return true;
          }
        }
        if ($(_0x328091).find(".info-num").text().includes("已完成")) {
          {
            return true;
          }
        }
        _0x233d12 = $(_0x328091);
        return false;
      }
    });
    if (_0x233d12 == null) {
      _0x1a4a81.page_list_nextPage();
      return;
    }
    _0x1a4a81.setGMData("listUrl", location.href);
    _0x1a4a81.setGMData("toListType", "notify");
    _0x1a4a81.confirmRun("3秒后执行下一步", 3000).then(_0x480c74 => {
      _0x233d12.click();
      _0x1a4a81.openLjTips(false);
    });
  },
  calcListFinish() {
    _0x1a4a81.pageData.calcListFinish = true;
  },
  async page_list_nextPage2() {
    let _0x335fd4 = $(".nc-mycourse-card").eq(0).text().trim();
    if ($(".a.laypage_next").length > 0) {
      $(".a.laypage_next")[0].click();
      await _0x1a4a81.waitOf(_0x29f6ae => $(".nc-mycourse-card").eq(0).text().trim() != _0x335fd4);
      await _0x1a4a81.waitTimeout(500);
      _0x1a4a81.page_list2();
    } else {
      {
        _0x1a4a81.alertMsg("学习完成");
      }
    }
  },
  async page_list_nextPage() {
    let _0x1cf10d = $(".text-item:visible").eq(0).text().trim();
    if (!$(".btn-next").is("[disabled]")) {
      $(".btn-next").click();
      await _0x1a4a81.waitOf(_0x113f02 => $(".text-item:visible").eq(0).text().trim() != _0x1cf10d);
      await _0x1a4a81.waitTimeout(500);
      _0x1a4a81.page_list();
    } else {
      _0x1a4a81.alertMsg("学习完成");
    }
  },
  toListPage(_0x3be4a3 = true, _0x577baf = false) {
    let _0x423ecc = 3000;
    if (!_0x3be4a3) {
      _0x423ecc = 0;
    }
    let _0x216fc6 = location;
    if (_0x577baf) {
      _0x216fc6 = _0x577baf.location;
    }
    _0x1a4a81.confirmRun("当前课程已经完成，准备前往下一个课程", _0x423ecc).then(_0x15902e => {
      let _0x404647 = _0x1a4a81.getGMData("listUrl", null);
      if (_0x404647 == null) {
        {
          _0x1a4a81.alertMsg("请手动前往列表页面，让脚本自动从列表页面打开视频播放页面，否则无法完成自动换课");
          return;
        }
      }
      _0x216fc6.href = _0x404647;
    });
  },
  async page_videoTopYZM() {
    console.log("%c page_videoTopYZM", "background:rgb(0,0,0);color:#fff");
    let _0x3c914c = _0x1a4a81.getGMData("page_videoTopYZM_LastTime", 0);
    if (_0x1a4a81.now() - _0x3c914c < 10000) {
      return;
    }
    _0x1a4a81.setGMData("page_videoTopYZM_LastTime", _0x1a4a81.now());
    _0x1a4a81.sendNotify("出现验证码了，请尽快手动输入");
  },
  async orc(_0x4bc02a, _0x3384cd = false, _0x4175dc = false) {
    return new Promise(async (_0x4034d8, _0x31474c) => {
      if (!_0x4bc02a) {
        return _0x31474c("请传入dom元素");
      }
      let _0x1f01d9 = null;
      if (_0x3384cd) {
        _0x1f01d9 = _0x1a4a81.base64ToFile(_0x4bc02a);
      } else {
        {
          _0x1f01d9 = _0x1a4a81.base64ToFile(_0x1a4a81.imgToBase64(_0x4bc02a.get(0)));
        }
      }
      if (_0x1f01d9 == null) {
        {
          return _0x31474c("图片错误");
        }
      }
      var _0x306d23 = new FormData();
      _0x306d23.append("image", _0x1f01d9, "image.png");
      let _0x475038 = _0x1a4a81.url.base + "/ocr/file";
      await _0x1a4a81.gmAuthPost("/yh/price/downYZM", {});
      GM_xmlhttpRequest({
        method: "post",
        url: _0x475038,
        data: _0x306d23,
        onload: function (_0x5da2e2) {
          let _0x3c8221 = _0x5da2e2.response;
          _0x4175dc && layer.msg(_0x3c8221);
          return _0x4034d8(_0x3c8221);
        },
        onerror: function (_0x5b0492) {
          console.log(_0x5b0492);
          _0x31474c(_0x5b0492);
        }
      });
    });
  },
  imgToBase64(_0x14586f) {
    const _0x404ec9 = document.createElement("canvas");
    const _0x6a754a = _0x404ec9.getContext("2d");
    _0x404ec9.width = _0x14586f.width;
    _0x404ec9.height = _0x14586f.height;
    _0x6a754a.drawImage(_0x14586f, 0, 0, _0x14586f.width, _0x14586f.height);
    return _0x404ec9.toDataURL("image/png");
  },
  base64ToFile(_0x48e475, _0x550bb4) {
    var _0x121a9c = _0x48e475.split(",");
    var _0x5c6893 = _0x121a9c[0].match(/:(.*?);/)[1];
    var _0x2c216a = atob(_0x121a9c[1]);
    var _0xd40b4c = _0x2c216a.length;
    var _0x5e8878 = new Uint8Array(_0xd40b4c);
    while (_0xd40b4c--) {
      _0x5e8878[_0xd40b4c] = _0x2c216a.charCodeAt(_0xd40b4c);
    }
    const _0x4ac01e = {
      type: _0x5c6893
    };
    return new File([_0x5e8878], _0x550bb4, _0x4ac01e);
  },
  async page_videoTop() {
    console.log("%c page_videoTop", "background:rgb(0,0,0);color:#fff");
    _0x1a4a81.closeWaitConfrimWin();
    await _0x1a4a81.openMgConfigTips(0);
    GM_addValueChangeListener("closePage", function (_0x300fc1, _0x1702bb, _0x86c72b, _0x31d16a) {
      _0x1a4a81.openLjTips();
    });
    GM_addValueChangeListener("close", function (_0x3f1dbb, _0x496632, _0x5ebd95, _0x198c95) {
      {
        window.close();
      }
    });
    GM_addValueChangeListener("reload", function (_0x1cde91, _0x59751d, _0x2593b0, _0x50d70b) {
      {
        location.reload();
      }
    });
    GM_addValueChangeListener("toUrl", function (_0xa43ea8, _0x1c0bff, _0x435b3c, _0x4f53c3) {
      location.href = _0x435b3c.url;
    });
    GM_addValueChangeListener("updateTitle", function (_0x78afbc, _0x2ca29a, _0x4b29f2, _0x4164e1) {
      $("title").val(_0x4b29f2.title);
    });
    GM_addValueChangeListener("saveAndClose", async function (_0x41e3bb, _0x285974, _0x5519d4, _0x3b2dcc) {
      $("#goBack").click();
      await _0x1a4a81.waitTimeout(500);
      $(".layui-layer-btn1")[0].click();
    });
    let _0x30f46d = setInterval(() => {
      if (_0x1a4a81.getElByText($("p"), "当前已有课程正在学习中", "startsWith") != null) {
        {
          _0x1a4a81.tipsMsg("课程切换间隔过短，等待脚本自动操作", 15000);
          clearInterval(_0x30f46d);
          setTimeout(() => {
            {
              location.reload();
            }
          }, 15000);
          return;
        }
      }
      if ($("#identifyCode:visible").length > 0) {
        {
          _0x1a4a81.page_videoTopYZM();
        }
      }
      if ($("[title=\"恭喜您已经完成课程\"]:visible").length > 0) {
        {
          clearInterval(_0x30f46d);
          _0x1a4a81.setGMData("videoFinish", _0x1a4a81.now());
          let _0x17133b = _0x1a4a81.getGMData("toListType", "notify");
          if (!(_0x17133b == "open")) {
            _0x1a4a81.page_video_saveAndClose();
          }
        }
      }
    }, 2000);
    _0x1a4a81.waitOf(_0x57528b => $(".cl-catalog-link").length > 0).then(_0x354a21 => {});
  },
  async page_video_mg() {
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    console.log("%c page_video_mg", "background:rgb(0,0,0);color:#fff");
    let _0x2bc9f2 = ["pdf", "ppt", "word", "excel", "pptx"];
    await _0x1a4a81.waitOf(_0x2ff9b9 => $("#app > div")[0].__vue__.courseData[0].resourceDTOS.length > 0);
    let _0xacd550 = $("#app > div")[0].__vue__;
    let _0x55c4e8 = 0;
    $(".chapter-box>ul").each((_0x8cb292, _0x9aaef8) => {
      if ($(_0x9aaef8).find(".active").length > 0) {
        _0x55c4e8 = _0x8cb292;
        return false;
      }
    });
    let _0x4d3613 = 0;
    $(".chapter-box>ul").eq(_0x55c4e8).find(".section-item").each((_0x58dcdd, _0x366632) => {
      {
        if ($(_0x366632).find(".active").length > 0) {
          _0x4d3613 = _0x58dcdd;
          return false;
        }
      }
    });
    let _0xce7975 = _0xacd550.courseData[_0x55c4e8].resourceDTOS[_0x4d3613];
    _0x1a4a81.pageData.curStudyData = _0xce7975;
    _0x1a4a81.pageData.currentPosition = _0xce7975.currentStudyTime || 0;
    let _0x64e003 = () => {
      if (!_0x2bc9f2.includes(_0xce7975.type)) {
        document.querySelector("video").pause();
      }
      if ($(".section-item .active").parent().is(".finish")) {
        clearInterval(_0x1a4a81.pageData.videoMgIndex);
        _0x1a4a81.pageData.videoMgIndex = null;
        location.reload();
        return;
      }
      let _0x5b638d = _0xce7975.playTime;
      if (_0x2bc9f2.includes(_0xce7975.type)) {
        {
          _0x5b638d = _0xce7975.minStudyTime;
        }
      }
      if (_0x1a4a81.pageData.curStudyPosition <= _0x5b638d) {
        _0xacd550.updateCourseRecord();
      } else {
        {
          clearInterval(_0x1a4a81.pageData.videoMgIndex);
          _0x1a4a81.pageData.videoMgIndex = null;
          location.reload();
          return;
        }
      }
    };
    _0x64e003();
    let _0x44aa83 = _0x1a4a81.getConfig();
    let _0x134742 = Number(_0x44aa83.mgjg) * 1000;
    if (!_0x134742 || isNaN(_0x134742) || _0x134742 < 1000) {
      _0x134742 = 1000;
    }
    if (_0x1a4a81.pageData.videoMgIndex != null) {
      return;
    }
    _0x1a4a81.pageData.videoMgIndex = setInterval(() => {
      {
        _0x64e003();
      }
    }, _0x134742);
  },
  sendNotify(_0x4156d1 = "脚本通知", _0x1caa4e = "", _0x3d22d8) {
    if (Notification.permission === "granted") {
      const _0x4f0869 = {
        body: _0x1caa4e,
        vibrate: [300, 100, 300]
      };
      var _0x1dec64 = new Notification(_0x4156d1, _0x4f0869);
      _0x1dec64.onclick = function () {
        {
          console.log("通知被点击");
          _0x3d22d8 && _0x3d22d8();
        }
      };
    }
  },
  async page_video_saveAndClose() {
    $("#goBack").click();
    await _0x1a4a81.waitTimeout(500);
    $(".layui-layer-btn1")[0].click();
  },
  async page_video() {
    await _0x1a4a81.gmAuthDownScore("f77a959726d546f88041ed8bc8cc7bbc");
    console.log("%c page_video", "background:rgb(0,0,0);color:#fff");
    let _0x44f94f = 2;
    _0x1a4a81.closeWaitConfrimWin();
    if (_0x1a4a81.pageData.video.index != null) {
      return;
    }
    setInterval(() => {
      {
        if (_0x1a4a81.getElByText($(".message-cont"), "学霸君，系统检测到你的学", "startsWith") != null) {
          location.reload();
        }
      }
    }, 3000);
    await _0x1a4a81.waitOf(_0x506314 => $(".section-item").length > 0);
    await _0x1a4a81.waitTimeout(1000);
    if ($(".section-item").not(".finish").length == 0) {
      {
        let _0x32e434 = _0x1a4a81.getGMData("toListType", "notify");
        if (_0x32e434 == "open") {
          window.open(_0x1a4a81.getGMData("listUrl", "/"));
          top.zfk.page_video_saveAndClose();
        } else {
          _0x1a4a81.setGMData("videoFinish", _0x1a4a81.now());
          top.zfk.page_video_saveAndClose();
        }
        return;
      }
    }
    $(".section-item").not(".finish").eq(0).click();
    let _0x31d54c = _0x1a4a81.getConfig();
    if (_0x31d54c.mg == "1") {
      _0x1a4a81.page_video_mg();
      return;
    }
    let _0x15cc53 = Number(_0x31d54c.bs);
    _0x1a4a81.pageData.video.index = setInterval(async () => {
      try {
        if (_0x1a4a81.pageData.waitTime > 0) {
          _0x1a4a81.pageData.waitTime -= _0x44f94f;
          return;
        }
        if (!_0x1a4a81.getVideo()) {
          {
            console.log("%c zfk no video", "background:rgb(0,0,0);color:#fff");
            return;
          }
        }
        _0x1a4a81.getVideo().volume = 0;
        let _0x5119eb = "进度：" + _0x1a4a81.getCurTime().toFixed(0) + "/" + _0x1a4a81.getTotalTime().toFixed(0);
        $("title").text(_0x5119eb);
        _0x1a4a81.setGMData("updateTitle", {
          title: _0x5119eb,
          time: _0x1a4a81.now()
        });
        console.log("%c video run", "background:rgb(255,0,0);color:#fff");
        let _0x14390b = _0x1a4a81.getElByText(".layui-layer-content p", "您好，本平台要求实时在线学习，点击按钮，继续学习课程。");
        if (_0x14390b != null) {
          _0x14390b.parents(".layui-layer").find(".layui-layer-btn0")[0].click();
        }
        let _0x1fe997 = await _0x1a4a81.isPlayFinish();
        if (_0x1fe997) {
          _0x1a4a81.pageData.waitTime = 15;
          layer.msg("视频即将结束，等待下一步操作", {
            time: 10000
          });
          _0x1a4a81.nextVideo();
          clearInterval(_0x1a4a81.pageData.video.index);
          _0x1a4a81.pageData.video.index = null;
          return;
        }
        let _0x1f62b0 = await _0x1a4a81.videoIsPlay();
        if (!_0x1f62b0) {
          if (!_0x1fe997) {
            {
              _0x1a4a81.play();
            }
          }
        }
        if (_0x1a4a81.getVideo().playbackRate != _0x15cc53) {
          {
            _0x1a4a81.getVideo().playbackRate = _0x15cc53;
          }
        }
      } catch (_0xb28b67) {
        console.error("视频页面定时器出错", _0xb28b67);
      }
    }, _0x44f94f * 1000);
  },
  nextVideo(_0x114746 = 10) {
    layer.msg("视频即将结束，等待下一步操作", {
      time: 10000
    });
    setTimeout(() => {
      location.reload();
    }, _0x114746 * 1000);
  },
  async checkVersion() {
    return new Promise(_0x2e417b => {
      {
        if (!_0x350dd1) {
          return _0x2e417b(true);
        }
        if (_0x3accad) {
          _0x1a4a81.delGMData("code");
        }
        if (!top === window || _0x3accad) {
          {
            return _0x2e417b(true);
          }
        }
        let _0x5cb764 = _0x1a4a81.getGMData("lastCheckVersionTime", 0);
        if (_0x1a4a81.now() - _0x5cb764 < 30000) {
          console.log("%c 跳过更新检测", "background:rgb(0,0,0);color:#fff");
          return _0x2e417b(true);
        }
        _0x1a4a81.setGMData("lastCheckVersionTime", _0x1a4a81.now());
        _0x1a4a81.gmPost("/yh/base/checkVersion", {
          id: baseConfig.project.id,
          v1: baseConfig.project.version,
          v2: _0x1a4a81.getGMData("version", "")
        }).then(_0x43b71d => {
          {
            if (_0x43b71d.message == "更新脚本") {
              layer.alert(_0x43b71d.result.msg, function () {
                {
                  top.open(_0x43b71d.result.url);
                }
              });
            } else {
              if (_0x43b71d.message == "更新内容") {
                _0x1a4a81.delGMData("code");
                location.href = location.href;
              }
            }
            return _0x2e417b(true);
          }
        }, _0x5829bd => {
          {
            if (_0x3accad) {
              console.log(_0x5829bd);
            }
          }
        });
      }
    });
  },
  play() {
    _0x1a4a81.getVideo().volume = 0;
    setTimeout(() => {
      {
        _0x1a4a81.getVideo().play();
      }
    }, 200);
  },
  getVideo() {
    return $("video")[0];
  },
  setVideoVolume() {
    try {
      {
        if (_0x1a4a81.getVideo().volume != 0) {
          _0x1a4a81.getVideo().volume = 0;
        }
      }
    } catch (_0x5c8b30) {
      {
        console.error(_0x5c8b30);
      }
    }
  },
  setStep(_0x142feb) {
    if (_0x1a4a81.getVideo()) {
      {
        if (_0x142feb >= 0) {
          _0x1a4a81.getVideo().currentTime = _0x142feb;
        } else {
          {
            _0x1a4a81.getVideo().currentTime = _0x1a4a81.getVideo().duration + _0x142feb;
          }
        }
      }
    }
  },
  isPlayFinish() {
    try {
      {
        return _0x1a4a81.getTotalTime() > 0 && _0x1a4a81.getCurTime() + 5 >= _0x1a4a81.getTotalTime();
      }
    } catch (_0xe9b2fb) {
      {
        return false;
      }
    }
  },
  getCurTime() {
    let _0x4c3bde = 0;
    try {
      {
        _0x4c3bde = _0x1a4a81.getVideo().currentTime;
      }
    } catch (_0x41158e) {
      console.error(_0x41158e);
    }
    return _0x4c3bde;
  },
  getTotalTime() {
    let _0x5073af = 0;
    try {
      {
        _0x5073af = _0x1a4a81.getVideo().duration;
      }
    } catch (_0x53c3ed) {
      {
        console.error(_0x53c3ed);
      }
    }
    return _0x5073af;
  },
  formatAnswerOption(_0x1b5154) {
    let _0x4cae1a = [["A", "B", "C", "D", "E", "F", "G", "H"], ["正确", "错误"], ["对", "错"]];
    let _0x56f768 = _0x1b5154.toUpperCase();
    let _0x454c2c = -1;
    _0x4cae1a.forEach(_0x34b2ae => {
      if (_0x34b2ae.includes(_0x56f768)) {
        {
          _0x454c2c = _0x34b2ae.indexOf(_0x56f768);
          return false;
        }
      }
    });
    return _0x454c2c;
  },
  formatAnswerOptionNo(_0x51189e) {
    return ["A", "B", "C", "D", "E", "F", "G", "H"][_0x51189e];
  },
  isMatchQAText(_0x2c3b4a, _0x3541a0) {
    return _0x2c3b4a == _0x3541a0 || _0x1a4a81.simpleHtml(_0x2c3b4a) == _0x1a4a81.simpleHtml(_0x3541a0) || _0x1a4a81.simpleText(_0x2c3b4a) == _0x1a4a81.simpleText(_0x3541a0);
  },
  simpleHtml(_0x32929e) {
    _0x32929e = _0x32929e.replace(/&nbsp;|<br\/>|<br>|\n|\r/gi, "");
    _0x32929e = _0x32929e.trim();
    if (!_0x32929e) {
      return _0x32929e;
    }
    if (_0x32929e.startsWith("<") && _0x32929e.endsWith(">")) {
      {
        return $(_0x32929e).text().trim();
      }
    }
    return _0x32929e.trim();
  },
  simpleText(_0x944140) {
    return _0x944140.replace(/[^\u4e00-\u9fa5a-zA-Z0-9#split#√×]/g, "").replace(/[的]/g, "");
  },
  async uploadQA(_0x3cd45f, _0x37d3c7 = -1, _0x203fcd = null) {
    return new Promise(async (_0x15e718, _0x3248f4) => {
      _0x3cd45f = _0x3cd45f.map(_0x4b7c8d => {
        if (_0x4b7c8d.key.length > 499) {
          _0x4b7c8d.key = _0x4b7c8d.key.substring(0, 499);
          const _0x2b10cb = {
            key: _0x4b7c8d.key,
            value: _0x4b7c8d.value
          };
          return _0x2b10cb;
        } else {
          {
            return _0x4b7c8d;
          }
        }
      });
      _0x3cd45f = _0x3cd45f.filter(_0x17b52d => _0x17b52d.key && _0x17b52d.value && (_0x17b52d.key + "").length < 500);
      if (_0x3cd45f.length == 0) {
        return _0x3248f4("无数据");
      }
      _0x3accad && console.log("uploadQA", _0x3cd45f);
      let _0x42eaf6 = "/business/qaQuestionSimple/uploadQaResult";
      if (_0x1a4a81.isDZKFMode()) {
        {
          _0x42eaf6 = "/business/common/uploadQaResult";
        }
      }
      const _0x51dd0b = {
        list: _0x3cd45f,
        score: _0x37d3c7,
        webSite: _0x203fcd
      };
      let _0x24a02e = await _0x1a4a81.gmAuthPost(_0x42eaf6, _0x51dd0b);
      return _0x15e718(_0x24a02e);
    });
  },
  async queryQaFree(_0x4e943b, _0x60d1c8 = "", _0xd62cc5 = false, _0x4f5df2 = "rb", _0xdd35c5 = ["400px", "400px"]) {
    return new Promise(async (_0x4003d6, _0x48b2e8) => {
      {
        let _0x4a2720 = "/business/qaQuestionSimple/freeSimpleQueryList";
        if (_0x1a4a81.isDZKFMode()) {
          _0x4a2720 = "/business/common/freeSimpleQueryList";
        }
        let _0x2157c5 = [];
        _0x4e943b.forEach(_0x46d933 => {
          let _0x271813 = _0x46d933 + "";
          if (_0x46d933.length > 499) {
            {
              _0x271813 = _0x271813.substring(0, 499);
            }
          }
          _0x2157c5.push(_0x271813);
        });
        const _0x1a7ad6 = {
          list: _0x2157c5,
          webSite: _0x60d1c8
        };
        let _0x51eca5 = await _0x1a4a81.gmAuthPost(_0x4a2720, _0x1a7ad6);
        if (_0x3accad) {
          console.log(_0x51eca5);
        }
        let _0x429805 = _0x51eca5.length;
        if (_0xd62cc5) {
          let _0x30d24d = [];
          _0x4e943b.forEach(_0x35a46e => {
            {
              let _0x4431ff = _0x51eca5.find(_0x354634 => _0x354634.fullTitle == _0x35a46e);
              if (!_0x4431ff) {
                _0x30d24d.push(_0x35a46e);
              }
            }
          });
          if (_0x30d24d.length > 0) {
            {
              const _0x53261b = {
                list: _0x30d24d,
                webSite: ""
              };
              let _0x34a391 = await _0x1a4a81.gmAuthPost(_0x4a2720, _0x53261b);
              _0x51eca5 = _0x51eca5.concat(_0x34a391);
              _0x429805 += _0x34a391.length;
              if (_0x3accad) {
                console.log(_0x34a391);
                console.log(_0x51eca5);
              }
            }
          }
        }
        _0x1a4a81.tipsMsg("共搜索到" + _0x429805 + "个题目");
        if (!_0x4f5df2) {
          return _0x4003d6(_0x51eca5);
        }
        let _0x196208 = "";
        _0x51eca5.forEach(_0x3c7511 => {
          _0x196208 += "<div style=\"margin:4px;border-bottom:1px solid #ddd;\">" + _0x3c7511.fullTitle + "<br>答案：" + _0x3c7511.fullAnswer.replace(/(#split#)/gi, "|") + "</div>";
        });
        const _0x5d0c35 = {
          type: 1,
          closeBtn: "1",
          shade: 0,
          title: "题库搜索到" + _0x51eca5.length + "个相似题目(这里可拖动)",
          content: "<div style=\"padding:10px\">" + _0x196208 + "</div>",
          offset: _0x4f5df2,
          area: _0xdd35c5
        };
        layer.open(_0x5d0c35);
        return _0x4003d6(_0x51eca5);
      }
    });
  },
  async videoIsPlay() {
    return new Promise(_0x12ab02 => {
      {
        try {
          {
            let _0x4e5b4a = $("video")[0].currentTime;
            setTimeout(() => {
              {
                let _0x1ccf46 = $("video")[0].currentTime;
                let _0x469b82 = _0x1ccf46 > _0x4e5b4a;
                if (_0x469b82) {
                  setTimeout(() => {
                    let _0x226fbc = $("video")[0].currentTime;
                    let _0x438dfc = _0x226fbc > _0x1ccf46;
                    _0x12ab02(_0x438dfc);
                  }, 100);
                } else {
                  return _0x12ab02(false);
                }
              }
            }, 100);
          }
        } catch (_0x61f401) {
          {
            _0x12ab02(false);
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
    window.open(_0x69792);
  },
  async setUserName_http() {
    return new Promise(async (_0x443839, _0x3d5155) => {
      {
        try {
          {
            $.get("/rtr/html/personCenter/personCenter.toBasicInfo.do", _0x26b168 => {
              let _0x1db42f = _0x1a4a81.getElByText($("<html>" + _0x26b168 + "</html>").find(".tbc-basic-info-title"), "姓名：", "eq", false).next().text().trim();
              if (!_0x1db42f || _0x1db42f.trim() == "") {
                _0x1a4a81.alertMsg("脚本启动错误，请联系脚本客服处理");
                return _0x3d5155();
              }
              _0x1a4a81.setGMData("username", _0x1db42f);
              return _0x443839();
            });
          }
        } catch (_0x284fef) {
          {
            _0x1a4a81.alertMsg("脚本启动错误，请联系脚本客服处理");
            return _0x3d5155();
          }
        }
      }
    });
  },
  isDZKFMode() {
    let _0x38c710 = typeof loadFun == "function" && loadFun.toString().includes("var data = res.response;");
    if (!_0x38c710) {
      _0x38c710 = typeof isDZKF == "boolean" && !!isDZKF;
    }
    return _0x38c710;
  },
  async callRegisterMenuCommand(_0x53080b, _0x126c4f) {
    if (!_0x1a4a81.pageData.menuBtnIndex) {
      {
        _0x1a4a81.pageData.menuBtnIndex = 0;
      }
    }
    GM_registerMenuCommand(_0x53080b, _0x126c4f);
    await _0x1a4a81.waitOf(_0x85fae7 => $("body:visible").length > 0);
    await _0x1a4a81.waitTimeout(500);
    if ($("#zfkLeftMenuContainer").length > 0) {
      _0x1a4a81.pageData.menuBtnIndex++;
      $("#zfkLeftMenuContainer .zfkLeftMenuBtnUl").append("<li id=\"zfkMenuBtn_" + _0x1a4a81.pageData.menuBtnIndex + "\">" + _0x53080b + "</li>");
      $("#zfkMenuBtn_" + _0x1a4a81.pageData.menuBtnIndex).click(function () {
        _0x126c4f();
      });
    }
  },
  registerMenuCommand() {
    _0x1a4a81.callRegisterMenuCommand("清理缓存", _0x1a4a81.clearResult);
    _0x1a4a81.callRegisterMenuCommand("采集错题本", _0x1a4a81.page_wrongAnswer);
    _0x1a4a81.callRegisterMenuCommand("启动脚本", _0x1a4a81.beginRunList);
    _0x1a4a81.callRegisterMenuCommand("脚本菜单", _0x1a4a81.openConfig);
    if (!_0x1a4a81.isDZKFMode()) {
      _0x1a4a81.callRegisterMenuCommand("使用说明", _0x1a4a81.openDoc);
      _0x1a4a81.callRegisterMenuCommand("我的信息", _0x1a4a81.myInfo);
    }
    _0x1a4a81.callRegisterMenuCommand("联系作者", _0x1a4a81.linkAuthor);
    _0x1a4a81.callRegisterMenuCommand("版本：" + _0x1a4a81.setting.version.version, _0x1a4a81.showVersionAlert);
  },
  showVersionAlert(_0x8b112 = true) {
    let _0x4a6f63 = _0x1a4a81.getGMData("showVersionAlert", "");
    if (!_0x8b112 && _0x4a6f63 == _0x1a4a81.getGMData("version")) {
      return;
    }
    layer.open({
      type: "1",
      title: _0x1a4a81.setting.version.version,
      content: _0x1a4a81.setting.version.body,
      btn: "我知道了",
      area: ["600px", "auto"],
      yes: function (_0x5dd56a) {
        {
          _0x1a4a81.setGMData("showVersionAlert", _0x1a4a81.getGMData("version"));
          layer.close(_0x5dd56a);
        }
      }
    });
  },
  linkAuthor() {
    window.open("http://doc.zhanyc.cn/contact-me/");
  },
  logout() {
    _0x1a4a81.delGMData("token");
    _0x1a4a81.delGMData("code");
    layer.msg("脚本账号已退出");
  },
  setClip(_0x39c5a8) {
    GM_setClipboard(_0x39c5a8, "text");
    layer.msg("复制成功");
  },
  async getUserData(_0x1c2d6f = null) {
    return new Promise(async (_0x300a2d, _0x195125) => {
      {
        let _0x28f2fc = _0x1a4a81.getUserName();
        if (_0x1a4a81.project.isSelf) {
          {
            let _0x32d4f2 = await _0x1a4a81.getUserDataOnline(_0x1c2d6f);
            let _0x4a5329 = {
              id: _0x32d4f2.id,
              acc: _0x32d4f2.acc,
              pwd: _0x32d4f2.pwd,
              name: _0x32d4f2.name,
              video: [],
              ks: []
            };
            if (_0x32d4f2.list) {
              let _0x1f935e = JSON.parse(_0x32d4f2.list);
              _0x4a5329.video = _0x1f935e.video;
              _0x4a5329.ks = _0x1f935e.ks;
              _0x4a5329.courseList = _0x1f935e.courseList;
            }
            return _0x300a2d(_0x4a5329);
          }
        }
        let _0x34b869 = {
          acc: _0x28f2fc,
          name: _0x28f2fc,
          video: [],
          sinishSubArr: [],
          finishCourseArr: [],
          finishCoursewareidArr: []
        };
        let _0x103857 = _0x1a4a81.getGMData("result", []);
        let _0x55b359 = _0x103857.find(_0x11b280 => _0x11b280.acc == _0x28f2fc);
        if (!_0x55b359) {
          _0x55b359 = _0x34b869;
          _0x103857.push(_0x55b359);
          _0x1a4a81.setGMData("result", _0x103857);
        } else {
          {
            _0x55b359 = Object.assign(_0x34b869, _0x55b359);
          }
        }
        return _0x300a2d(_0x55b359);
      }
    });
  },
  async getUserDataOnline(_0x49b1a0 = null) {
    return new Promise(async (_0x1d8ac7, _0x3af059) => {
      return _0x1d8ac7(await _0x1a4a81.queryCurAcc(_0x49b1a0));
    });
  },
  async setUserData(_0xda3d14) {
    return new Promise(async (_0x13c99e, _0x7ad163) => {
      if (_0x1a4a81.project.isSelf) {
        await _0x1a4a81.setUserDataOnline(_0xda3d14);
        return _0x13c99e();
      }
      let _0x4cfaf3 = _0x1a4a81.getGMData("result", []);
      let _0x5ec94a = _0x1a4a81.getUserName();
      let _0x20c4e9 = _0x4cfaf3.findIndex(_0x19bff4 => _0x19bff4.acc == _0x5ec94a);
      if (_0x20c4e9 == -1) {
        userData = _0xda3d14;
        _0x4cfaf3.push(userData);
      } else {
        {
          _0x4cfaf3.splice(_0x20c4e9, 1, _0xda3d14);
        }
      }
      _0x1a4a81.setGMData("result", _0x4cfaf3);
      return _0x13c99e();
    });
  },
  getUserName() {
    return _0x1a4a81.getGMData("username", "");
  },
  addStyle() {
    GM_addStyle("\n      .zfk-btn{background-color:#0fbcf9;color:white;padding:4px 12px;border:none;box-sizing:content-box;font-size:14px;height:20px;border-radius:4px;cursor:pointer;display:inline-block;border:1px solid transparent;white-space:nowrap;user-select:none;text-align:center;vertical-align:middle}.zfk-btn:hover{opacity:.8}.zfk-btn.success{background-color:#38b03f}.zfk-btn.warning{background-color:#f1a325}.zfk-btn.info{background-color:#03b8cf}.zfk-btn.danger{background-color:#ea644a}.zfk-form-tips{font-size:1.2em;color:red}.tips{color:red}.zfk-form textarea,.zfk-form input[type=text],.zfk-form input[type=number],.zfk-form input[type=password]{border:1px solid #888;border-radius:4px;padding:5px;box-sizing:border-box}.zfk-form textarea{width:100%}.zfk-form-item{margin-bottom:10px}.zfk-form-item>label:first-child{width:7em;text-align:right;display:inline-block;padding-right:5px;margin-right:0}.zfk-form-item label{margin-right:4px}.zfk-form-item.block>label:first-child{text-align:left;display:block;width:100%;font-weight:bold}.text-l{text-align:left !important}.text-c{text-align:center !important}.text-r{text-align:right !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.p-t-0{padding-top:0px !important}.p-t-5{padding-top:5px !important}.p-t-10{padding-top:10px !important}.p-t-15{padding-top:15px !important}.p-t-20{padding-top:20px !important}.p-b-0{padding-bottom:0px !important}.p-b-5{padding-bottom:5px !important}.p-b-10{padding-bottom:10px !important}.p-b-15{padding-bottom:15px !important}.p-b-20{padding-bottom:20px !important}.p-l-0{padding-left:0px !important}.p-l-5{padding-left:5px !important}.p-l-10{padding-left:10px !important}.p-l-15{padding-left:15px !important}.p-l-20{padding-left:20px !important}.p-r-0{padding-right:0px !important}.p-r-5{padding-right:5px !important}.p-r-10{padding-right:10px !important}.p-r-15{padding-right:15px !important}.p-r-20{padding-right:20px !important}.p-0{padding:0px !important}.p-5{padding:5px !important}.p-10{padding:10px !important}.p-15{padding:15px !important}.p-20{padding:20px !important}.m-t-0{margin-top:0px !important}.m-t-5{margin-top:5px !important}.m-t-10{margin-top:10px !important}.m-t-15{margin-top:15px !important}.m-t-20{margin-top:20px !important}.m-b-0{margin-bottom:0px !important}.m-b-5{margin-bottom:5px !important}.m-b-10{margin-bottom:10px !important}.m-b-15{margin-bottom:15px !important}.m-b-20{margin-bottom:20px !important}.m-l-0{margin-left:0px !important}.m-l-5{margin-left:5px !important}.m-l-10{margin-left:10px !important}.m-l-15{margin-left:15px !important}.m-l-20{margin-left:20px !important}.m-r-0{margin-right:0px !important}.m-r-5{margin-right:5px !important}.m-r-10{margin-right:10px !important}.m-r-15{margin-right:15px !important}.m-r-20{margin-right:20px !important}.bold{font-weight:bold !important}.tips-box{padding:10px;border:1px solid red;background-color:#fff0f0;color:red}.bold{font-weight:bold}.font-l{font-size:1.2em}.font-xl{font-size:40px}.font-l{font-size:25px}.color-default{color:#ea644a !important}.color-success{color:#38b03f !important}.color-warning{color:#f1a325 !important}.color-danger{color:#ea644a !important}.bg-default{background-color:#ea644a !important}.bg-success{background-color:#38b03f !important}.bg-warning{background-color:#f1a325 !important}.bg-danger{background-color:#ea644a !important}.zfk-table{border-collapse:collapse}.zfk-table thead{background-color:#1abc9c}.zfk-table td,.zfk-table th{text-align:center;padding:6px;border:1px solid #888}.zfk-table tr:nth-child(2n){background-color:#f2f2f2}.zfk-table tr:hover{background-color:#fff799}.zfk-container *{font-size:17px}\n      ");
  },
  openLjTips(_0x47edf1 = true, _0x46d7ba = false) {
    const _0x3cde6c = {
      type: 1,
      title: "请确认",
      offset: "100px",
      content: "\n          <div style=\"padding:10px\">\n          <p>已经为你打开下一门课程，如果没有打开窗口，请检查浏览器地址栏右侧是否有拦截提示，请选择【永久允许】或者在浏览器设置中设置本网站【弹出式窗口和重定向】设置为允许</p>\n          <p style=\"color:red;\">如下图所示：</p>\n          <img src=\"https://js.zhanyc.cn/img/ljts.jpg\"/>\n          </div>\n          "
    };
    let _0x1ebd74 = layer.open(_0x3cde6c);
    let _0x5a054a = _0x46d7ba ? location.href : "";
    if (_0x1a4a81.pageData.closeTipsIndex != null) {
      return;
    }
    _0x1a4a81.pageData.closeTipsIndex = GM_addValueChangeListener(_0x1a4a81.getGMKey("closeLJTS"), function (_0x2a05bb, _0x2d05cc, _0x2e0b32, _0x55faa1) {
      layer.close(_0x1ebd74);
      _0x47edf1 && _0x1a4a81.tipsAndClose && _0x1a4a81.tipsAndClose(_0x5a054a);
    });
  },
  tipsAndClose(_0x4751a0) {
    _0x1a4a81.confirmRun("3秒后关闭当前页面", 3000).then(_0x4a5dae => {
      {
        if (!_0x4751a0 || location.href == _0x4751a0) {
          window.close();
        }
      }
    });
  },
  closeWaitConfrimWin() {
    _0x1a4a81.setGMData("closeLJTS", _0x1a4a81.now());
  },
  async setUserName2() {
    return new Promise(async (_0x4bf81b, _0x1b9741) => {
      {
        $.get("/rtr/html/personCenter/personCenter.toBasicInfo.do", _0x1c2fd4 => {
          {
            let _0x1845fa = _0x1a4a81.getElByText($(_0x1c2fd4).find(".tbc-basic-info-title"), "姓名：", "eq", false).next();
            let _0x630db7 = _0x1845fa.text().trim();
            if (!!_0x1845fa.attr("title")) {
              {
                _0x630db7 = _0x1845fa.attr("title").trim();
              }
            }
            if (!_0x630db7) {
              {
                _0x1a4a81.alertMsg("脚本启动失败，请联系作者更新");
                return _0x1b9741();
              }
            }
            _0x1a4a81.setGMData("username", _0x630db7);
            return _0x4bf81b();
          }
        });
      }
    });
  },
  async setUserName() {
    return new Promise(async (_0x4c7bcb, _0x582a4f) => {
      let _0x225867 = "";
      await _0x1a4a81.waitOf(_0x5365ab => {
        try {
          _0x225867 = $(".user-name").text().trim();
          if (_0x225867 != "") {
            _0x1a4a81.setGMData("username", _0x225867);
            return true;
          }
          return false;
        } catch (_0x8b013d) {
          {
            return false;
          }
        }
      });
      return _0x4c7bcb(_0x225867);
    });
  },
  confirmMsg(_0x2ffdb5 = "请确认", _0x1d7d8b = {}) {
    let _0x172b79 = {
      title: "脚本提示",
      btn: ["确定", "关闭"],
      fun1(_0x38070c) {
        {
          layer.close(_0x38070c);
        }
      },
      fun2() {},
      fun3() {}
    };
    Object.assign(_0x172b79, _0x1d7d8b);
    const _0x4bc723 = {
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x2ffdb5 + "</div>",
      title: _0x172b79.title,
      offset: "100px",
      btn: _0x172b79.btn,
      yes: _0x172b79.fun1,
      btn2: _0x172b79.fun2,
      btn3: _0x172b79.fun3
    };
    layer.open(_0x4bc723);
  },
  toUserNamePage() {
    layer.open({
      type: 1,
      title: "脚本启动失败",
      content: "<div style=\"padding:10px\">脚本启动失败，请按脚本说明文档，请在指定的【启动页面】刷新页面后启动脚本</div>",
      offset: "100px",
      area: ["400px", "180px"],
      btn: ["查看脚本说明文档", "关闭"],
      yes: function (_0x132734) {
        window.open(_0x69792);
        return false;
      }
    });
    return;
  },
  callAuthSuccess() {
    _0x1a4a81.setGMData("authSuccess", _0x1a4a81.now());
  },
  initBuyAuth() {
    if (!_0x1a4a81.pageData.authListnerIndex) {
      _0x1a4a81.pageData.authListnerIndex = GM_addValueChangeListener("authSuccess", function (_0x15d453, _0x3be53e, _0xffd134, _0x3a5c5c) {
        if (_0x3a5c5c) {
          layer.close(_0x1a4a81.pageData.myInfoIndex);
          layer.close(_0x1a4a81.pageData.noAuthIndex);
          const _0x4cab92 = {
            type: "1",
            offset: "100px",
            title: "脚本授权提示",
            content: "<div style=\"padding:16px;font-size:20px;\">😃授权购买成功，刷新页面后授权生效</div>"
          };
          layer.open(_0x4cab92);
        }
      });
    }
    if (!_0x1a4a81.buyAuthFun) {
      _0x1a4a81.buyAuthFun = function () {
        let _0xe976f5 = "https://m.zhanyc.cn";
        _0x3accad && (_0xe976f5 = "http://localhost:3000");
        window.open(_0xe976f5 + "/yh-auth?i=" + baseConfig.project.id + "&t=" + _0x1a4a81.getGMData("token"));
      };
    }
  },
  myInfo() {
    _0x1a4a81.initBuyAuth();
    _0x1a4a81.gmAuthPost("/yh/user/myInfo").then(_0xe1599 => {
      if (_0x3accad) {
        console.log(_0xe1599);
      }
      let _0x4bb0ce = "脚本ID：【" + baseConfig.project.id + "】 脚本账号昵称：【" + _0xe1599.name + "】 脚本账号：【" + _0xe1599.acc + "】";
      let _0x483e7c = "\n        <div class=\"p-10 zfk-container\" style=\"padding: 10px;\">\n        <div class=\"kv\" style=\"text-align: center;color: #ffffff;background: #38a1ff;font-weight: bold;margin: -10px -10px 10px;\">" + (_0x1a4a81.setting.tjjl || "") + "</div>\n        <div class=\"kv\"><label>脚本ID：</label><span>【" + baseConfig.project.id + "】</span></div>\n        <div class=\"kv\"><label>脚本账号昵称：</label><span>【" + _0xe1599.name + "】</span></div>\n        <div class=\"kv\"><label>脚本账号：</label><span>【" + _0xe1599.acc + "】</span></div>\n\n        <div class=\"kv\" style=\"text-align: center;margin: 10px 0 20px;\">\n          <button onclick=\"zfk.buyAuthFun()\" style=\"cursor: pointer;background:#BE2EDD;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">自助购买授权（👍推荐）</button>\n          <button onclick=\"zfk.setClip('" + _0x4bb0ce + "')\" style=\"cursor: pointer;background:#34495E;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">点这里复制以上信息</button>\n        </div>\n        <div class=\"kv\" style=\"text-align: center;\">\n          <button onclick=\"window.open('https://www.todesk.com/download.html')\" style=\"cursor: pointer;background:#009349;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">下载远程控制软件（需要协助才下载）</button>\n          <button onclick=\"zfk.logout()\" style=\"cursor: pointer;background:#FF6B81;color:#fff;border-radius:4px;padding:2px 8px!important;margin-right:10px;height:30px;border:0;line-height:30px;box-sizing:border-box;vertical-align:middle;font-size:16px;font-weight:700\">退出脚本账号</button>\n        </div>\n\n        </div>\n        ";
      const _0x1619a1 = {
        type: "1",
        title: "脚本信息",
        content: _0x483e7c,
        area: ["460px", "300px"],
        offset: "100px"
      };
      _0x1a4a81.pageData.myInfoIndex = layer.open(_0x1619a1);
    });
  },
  exportResult() {
    let _0x1e1e44 = _0x1a4a81.getGMData("result", []);
    let _0x14ce54 = "";
    let _0x13f330 = ["视频标题", "视频地址", "评论人", "评论时间", "评论内容", "点赞数", "回复数"];
    _0x14ce54 += _0x13f330.join("\t") + "\r\n";
    _0x1e1e44.forEach(_0x1452cc => {
      _0x1452cc.list.forEach(_0x4346c0 => {
        {
          let _0x538855 = [_0x1452cc.title, _0x1452cc.url, _0x4346c0.name, _0x4346c0.time, _0x4346c0.comment, _0x4346c0.likeCount, _0x4346c0.commentCount];
          _0x14ce54 += _0x538855.join("\t") + "\r\n";
        }
      });
    });
    _0x1a4a81.downloadTxt(_0x1a4a81.dateFormat(new Date(), "yyyyMMddHHmmss") + "导出.txt", _0x14ce54);
  },
  clearResult() {
    if (confirm("确认要清空结果数据吗？")) {
      _0x1a4a81.setGMData("result", []);
      _0x1a4a81.delGMData("code", []);
      layer.msg("清空完成");
    }
  },
  openConfig() {
    let _0x3da1d6 = "\n      <div class=\"p-10 zfk-container\">\n      <form class=\"zfk-form\">\n      <div class=\"zfk-form-item block\">\n        <label>是否秒过</label>\n        <label><input type=\"radio\" name=\"mg\" value=\"1\" />秒过</label>\n        <label><input type=\"radio\" name=\"mg\" value=\"2\" />不秒过</label>\n      </div>\n      <div class=\"zfk-form-item block\">\n        <label>学习模式（部分课程支持自动识别学时）</label>\n        <label><input type=\"radio\" name=\"studyMode\" value=\"1\" />全学</label>\n        <label><input type=\"radio\" name=\"studyMode\" value=\"2\" />学分够就停</label>\n      </div>\n      <div class=\"zfk-form-item block\">\n        <label>秒过间隔（如果进行出现“学霸君”提示，则适当加长间隔，单位：秒）</label>\n        <input type=\"number\" name=\"mgjg\" />\n      </div>\n        <div class=\"zfk-form-item block\">\n          <label></label>\n          <button class=\"zfk-btn\" onclick=\"zfk.saveConfig()\" type=\"button\">\n            保存\n          </button>\n          <button\n            class=\"zfk-btn danger\"\n            onclick=\"zfk.closeConfig()\"\n            type=\"button\"\n          >\n            关闭\n          </button>\n        </div>\n      </form>\n    </div>\n    ";
    const _0x105d0e = {
      type: "1",
      title: "设置",
      content: _0x3da1d6,
      btn: false,
      area: ["600px", "600px"]
    };
    layer.open(_0x105d0e);
    let _0x22f996 = _0x1a4a81.getConfig();
    _0x1a4a81.setFormVal(".zfk-form", _0x22f996);
  },
  saveConfig() {
    var _0x2246b9 = _0x1a4a81.getFormVal(".zfk-form");
    console.log(_0x2246b9);
    _0x1a4a81.setConfig(_0x2246b9);
    layer.msg("保存成功");
  },
  closeConfig() {
    layer.closeAll();
  },
  removeArrEmpty(_0x1f2b2b) {
    let _0x3499cf = [];
    _0x1f2b2b.forEach(_0x3c1687 => {
      if (!!_0x3c1687 && _0x3c1687.trim() != "") {
        _0x3499cf.push(_0x3c1687);
      }
    });
    return _0x3499cf;
  },
  confirmRun(_0x356424 = "脚本：3秒后执行下一步操作", _0x2dc460 = 3000) {
    return new Promise((_0x448da1, _0x4a6a7c) => {
      let _0x3abe42 = true;
      clearTimeout(_0x1a4a81.pageData.confirmRunIndex);
      const _0x3702c2 = {
        icon: 3,
        title: "是否继续？",
        btn: ["取消执行"],
        offset: "100px"
      };
      _0x1a4a81.pageData.confirmRunIndex = layer.alert(_0x356424, _0x3702c2, function (_0xb483ee) {
        {
          _0x3abe42 = false;
          _0x4a6a7c();
          layer.close(_0x1a4a81.pageData.confirmRunIndex);
        }
      });
      setTimeout(() => {
        layer.close(_0x1a4a81.pageData.confirmRunIndex);
        _0x448da1(true);
      }, _0x2dc460);
    });
  },
  waitTimeout(_0x3cd1a7) {
    return new Promise((_0xbda1bc, _0x459c7c) => {
      setTimeout(() => {
        _0xbda1bc();
      }, _0x3cd1a7);
    });
  },
  waitOf(_0x2c51d6, _0x57f08f = 1000, _0x1df595 = 30, _0x2f5787 = false) {
    console.log("%c waitOf", "background:rgb(0,0,0);color:#fff");
    if (_0x3accad) {
      console.log(_0x2c51d6);
    }
    return new Promise((_0x1ba048, _0x4fbabb) => {
      let _0x3d6187 = _0x1df595 * 1000;
      try {
        {
          if (_0x2c51d6()) {
            return _0x1ba048();
          }
        }
      } catch (_0x1098d8) {
        console.log(_0x1098d8);
      }
      let _0x548f96 = setInterval(() => {
        if (_0x1df595 != -1) {
          {
            _0x3d6187 -= _0x57f08f;
            if (_0x3d6187 < 0) {
              {
                clearInterval(_0x548f96);
                {
                  {
                    if (_0x2f5787) {
                      return _0x1ba048();
                    } else {
                      return _0x4fbabb();
                    }
                  }
                }
              }
            }
          }
        }
        try {
          {
            if (_0x2c51d6()) {
              clearInterval(_0x548f96);
              return _0x1ba048();
            }
          }
        } catch (_0x2d4386) {
          console.log(_0x2d4386);
        }
      }, _0x57f08f);
    });
  },
  toLogin() {
    top.location.href = _0x1a4a81.url.login + "?yh=" + window.btoa(encodeURI(top.location.href));
  },
  getUrlParam(_0x224fe8, _0x299032) {
    if (arguments.length == 1) {
      _0x299032 = _0x224fe8;
      _0x224fe8 = window.location;
    }
    var _0x5eeeee = new RegExp("(^|&)" + _0x299032 + "=([^&]*)(&|$)");
    var _0x17f4ae = _0x224fe8.search.substr(1).match(_0x5eeeee);
    if (_0x17f4ae != null) {
      return unescape(_0x17f4ae[2]);
    }
    return "";
  },
  objectToQueryString(_0x47db2d) {
    var _0x6f012c = [];
    for (var _0x58e27b in _0x47db2d) {
      if (_0x47db2d.hasOwnProperty(_0x58e27b)) {
        var _0x291a83 = _0x47db2d[_0x58e27b];
        if (Array.isArray(_0x291a83)) {
          for (var _0x4020e8 = 0; _0x4020e8 < _0x291a83.length; _0x4020e8++) {
            {
              _0x6f012c.push(encodeURIComponent(_0x58e27b) + "=" + encodeURIComponent(_0x291a83[_0x4020e8]));
            }
          }
        } else {
          _0x6f012c.push(encodeURIComponent(_0x58e27b) + "=" + encodeURIComponent(_0x291a83));
        }
      }
    }
    return _0x6f012c.join("&");
  },
  parseQueryString(_0x222b91) {
    _0x222b91 = !_0x222b91 ? window.location.href : _0x222b91;
    if (_0x222b91.indexOf("?") === -1) {
      {
        return {};
      }
    }
    let _0xa4f142 = _0x222b91[0] === "?" ? _0x222b91.substr(1) : _0x222b91.substring(_0x222b91.lastIndexOf("?") + 1);
    if (_0xa4f142 === "") {
      {
        return {};
      }
    }
    _0xa4f142 = _0xa4f142.split("&");
    let _0x487ea1 = {};
    for (let _0x49acd6 = 0; _0x49acd6 < _0xa4f142.length; _0x49acd6++) {
      {
        let _0x37844e = _0xa4f142[_0x49acd6].split("=");
        _0x487ea1[decodeURIComponent(_0x37844e[0])] = decodeURIComponent(_0x37844e[1] || "");
      }
    }
    return _0x487ea1;
  },
  getAttrName(_0x5265c2, _0x3b073b) {
    if (_0x5265c2.jquery) {
      _0x5265c2 = _0x5265c2.get(0);
    }
    let _0x4e5d61 = Object.keys(_0x5265c2).find(_0x34700b => _0x34700b.startsWith(_0x3b073b));
    return _0x4e5d61;
  },
  getAttrNameList(_0x539554, _0x2f7c55) {
    if (_0x539554.jquery) {
      _0x539554 = _0x539554.get(0);
    }
    let _0x1156b4 = Object.keys(_0x539554).filter(_0x179683 => _0x179683.startsWith(_0x2f7c55));
    return _0x1156b4;
  },
  gmAuthGet(_0x54c7c9, _0x237bb9, _0x1c9033 = _0xa686b8) {
    _0x54c7c9 = _0x1a4a81.fullUrl(_0x54c7c9);
    if (_0x3accad) {
      console.log("gmGet", _0x54c7c9);
    }
    return new Promise((_0x41fd8a, _0x1be94b) => {
      if (_0x54c7c9.indexOf("?") != -1) {
        {
          for (key in _0x237bb9) {
            {
              _0x54c7c9 += "&" + key + "=" + _0x237bb9[key];
            }
          }
        }
      } else {
        let _0x3f2287 = true;
        for (key in _0x237bb9) {
          _0x54c7c9 += (_0x3f2287 ? "?" : "&") + (key + "=" + _0x237bb9[key]);
          _0x3f2287 = false;
        }
      }
      let _0x1a2575 = {};
      if (_0x1a4a81.getGMData("token", "")) {
        _0x1a2575["X-Access-Token"] = this.getGMData("token", "");
      }
      GM_xmlhttpRequest({
        method: "get",
        url: _0x54c7c9,
        data: _0x237bb9,
        headers: _0x1a2575,
        responseType: "json",
        onload: function (_0x303faa) {
          if (_0x3accad) {
            console.log(_0x303faa);
          }
          let _0x2a68dc = _0x303faa.response;
          if (_0x2a68dc.code != 200) {
            {
              if (_0x2a68dc.message.indexOf("Token失效") != -1) {
                _0x1a4a81.tipsLogin();
              } else {
                if (_0x1c9033.showErr) {
                  layer.alert(_0x2a68dc.message);
                }
              }
              _0x1be94b(_0x2a68dc);
            }
          } else {
            _0x41fd8a(_0x2a68dc.result);
          }
        },
        onerror: function (_0x2e0101) {
          if (_0x3accad) {
            console.log(_0x2e0101);
          }
          _0x1be94b(_0x2e0101);
        }
      });
    });
  },
  tipsLogin(_0x20ec08 = "【未登录】脚本需要付费后才可使用。点击[确定]按钮将前往[脚本账号]的注册/登录页面") {
    layer.open({
      type: "1",
      content: "<div style=\"padding:14px;\">" + _0x20ec08 + "</div>",
      title: "使用脚本前请先登录脚本账号！",
      offset: "100px",
      btn: ["去登录", "查看授权说明", "关闭"],
      yes: function (_0x1a2a4a) {
        {
          layer.close(_0x1a2a4a);
          _0x1a4a81.pageData.loginTipsIndex = layer.alert("已经为您打开登录页面，请留意浏览器窗口");
          _0x1a4a81.toLogin();
        }
      },
      btn2: function (_0x3e0828) {
        window.open("https://doc.zhanyc.cn/pages/auth/");
        return false;
      },
      btn2function(_0x2f6eb1) {
        layer.close(_0x2f6eb1);
      }
    });
  },
  gmAuthPost(_0x1b17d5, _0x30d537 = {}, _0x37df68 = _0x2db7ec) {
    _0x1b17d5 = _0x1a4a81.fullUrl(_0x1b17d5);
    if (_0x3accad) {
      console.log("gmPost", _0x1b17d5);
    }
    let _0x21f472 = {
      "Content-Type": "application/json"
    };
    if (_0x1a4a81.getGMData("token", "")) {
      _0x21f472["X-Access-Token"] = this.getGMData("token", "");
    }
    return new Promise((_0x52a2aa, _0x86a846) => {
      GM_xmlhttpRequest({
        method: "post",
        url: _0x1b17d5,
        data: JSON.stringify(_0x30d537),
        headers: _0x21f472,
        responseType: "json",
        onload: function (_0x5cb3b1) {
          {
            if (_0x3accad) {
              console.log(_0x5cb3b1);
            }
            let _0x2f9730 = _0x5cb3b1.response;
            try {
              if (typeof _0x2f9730 == "string") {
                _0x2f9730 = JSON.parse(_0x2f9730);
              }
            } finally {}
            if (_0x2f9730.message.indexOf("Token失效") != -1) {
              {
                _0x1a4a81.tipsLogin();
                return;
              }
            }
            if (_0x2f9730.code != 200) {
              {
                if (_0x37df68.showErr) {
                  {
                    if (_0x2f9730.message.startsWith("脚本需收费授权使用")) {
                      {
                        _0x1a4a81.initBuyAuth();
                        _0x1a4a81.pageData.noAuthIndex = layer.open({
                          type: "1",
                          content: "<div style=\"padding:14px;\">" + _0x2f9730.message + "</div>",
                          icon: 3,
                          title: "当前学生账号未授权",
                          offset: "100px",
                          btn: ["去购买授权", "查看授权信息", "查看帮助"],
                          yes: function (_0x46b403) {
                            _0x1a4a81.buyAuthFun();
                          },
                          btn2: function (_0x35fdb8) {
                            _0x1a4a81.myInfo();
                          },
                          btn3: function (_0x4d6089) {
                            top.open("http://doc.zhanyc.cn/pages/auth/");
                            return false;
                          }
                        });
                      }
                    } else {
                      const _0x173cc2 = {
                        offset: "100px"
                      };
                      layer.alert(_0x2f9730.message, _0x173cc2, function () {
                        {
                          _0x1a4a81.myInfo();
                        }
                      });
                    }
                  }
                }
                _0x86a846(_0x2f9730);
              }
            } else {
              _0x52a2aa(_0x2f9730.result);
            }
          }
        },
        onerror: function (_0x568944) {
          {
            if (_0x3accad) {
              console.log(_0x568944);
            }
            _0x86a846(_0x568944);
          }
        }
      });
    });
  },
  gmAuthDownScore(_0xc713d2) {
    return new Promise((_0xeff51f, _0x31c251) => {
      {
        if (_0x1a4a81.isDZKFMode() || _0x2f230c) {
          {
            return _0xeff51f(true);
          }
        }
        if (typeof _0x1a4a81.pageData.downSuccess !== "undefined" && _0x1a4a81.pageData.downSuccess.includes(_0xc713d2)) {
          return _0xeff51f(true);
        }
        var _0x22a8d5 = _0x1a4a81.getUserName();
        if (!_0x22a8d5) {
          _0x1a4a81.toUserNamePage();
          return;
        }
        const _0x4abaa2 = {
          id: _0xc713d2,
          key: _0x22a8d5
        };
        const _0x29662a = {
          showErr: true
        };
        _0x1a4a81.gmAuthPost("/yh/price/down", _0x4abaa2, _0x29662a).then(_0x51da03 => {
          if (_0x1a4a81.pageData) {
            {
              if (!_0x1a4a81.pageData.downSuccess) {
                _0x1a4a81.pageData.downSuccess = [];
              }
              _0x1a4a81.pageData.downSuccess.push(_0xc713d2);
            }
          }
          _0xeff51f(true);
        }, _0x1f1608 => {
          _0x31c251(_0x1f1608);
        });
      }
    });
  },
  alertMsg(_0x27cebd) {
    const _0x422853 = {
      offset: "100px"
    };
    layer.alert(_0x27cebd, _0x422853);
  },
  tipsMsg(_0x4fbd12, _0x2288cc = 3000) {
    const _0x2b5570 = {
      offset: "100px",
      time: _0x2288cc
    };
    layer.msg(_0x4fbd12, _0x2b5570);
  },
  checkLogin() {
    return new Promise((_0x45b18d, _0x738200) => {
      {
        if (typeof _0x1a4a81.pageData.checkLoginRes != "undefined") {
          {
            if (_0x1a4a81.pageData.checkLoginRes) {
              {
                return _0x45b18d(true);
              }
            } else {
              return _0x738200();
            }
          }
        }
        _0x1a4a81.gmAuthPost("/yh/price/check").then(_0x45ff92 => {
          {
            if (_0x45ff92) {
              {
                _0x1a4a81.pageData.checkLoginRes = true;
                return _0x45b18d(true);
              }
            }
          }
        }, _0x318014 => {
          _0x1a4a81.pageData.checkLoginRes = false;
          return _0x738200();
        });
      }
    });
  },
  fullUrl(_0x363f9e, _0x3858fb = "") {
    if (!_0x3858fb) {
      _0x3858fb = _0x1a4a81.url.base;
    }
    if (!_0x363f9e.startsWith("http")) {
      return _0x3858fb + _0x363f9e;
    }
    return _0x363f9e;
  },
  async openMgConfigTips(_0x300a3c = 0) {
    return new Promise(async (_0x10b5d6, _0x1a7e98) => {
      let _0x2494e9 = 1;
      let _0x2545bb = _0x1a4a81.getConfig();
      if (_0x2545bb.mg == "1") {
        {
          _0x1a4a81.setGMData("openMgConfigTipsMark", _0x2494e9);
          return _0x10b5d6();
        }
      }
      let _0x4c1339 = _0x1a4a81.getGMData("openMgConfigTipsMark", 0);
      if (_0x4c1339 != _0x2494e9) {
        await _0x1a4a81.waitTimeout(_0x300a3c);
        _0x1a4a81.confirmMsg("本脚本具有秒过功能，是否需要开启？", {
          btn: ["开启秒过", "1倍速慢放"],
          fun1(_0xde870b) {
            {
              _0x2545bb.mg = "1";
              _0x1a4a81.setConfig(_0x2545bb);
              _0x1a4a81.alertMsg("秒过开启成功，祝您玩的愉快！【刷新页面后脚本自动执行】");
              _0x1a4a81.setGMData("openMgConfigTipsMark", _0x2494e9);
              layer.close(_0xde870b);
            }
          },
          fun2(_0x370705) {
            _0x2545bb.mg = "2";
            _0x1a4a81.setConfig(_0x2545bb);
            _0x1a4a81.alertMsg("未开启秒过。如果您后续需要使用秒过，可通过浏览器右上角的[脚本菜单]切换！【刷新页面后脚本自动执行】");
            _0x1a4a81.setGMData("openMgConfigTipsMark", _0x2494e9);
            layer.close(_0x370705);
          }
        });
        return _0x1a7e98();
      }
      return _0x10b5d6();
    });
  },
  getConfig() {
    let _0x4787d4 = GM_getValue("config", {});
    let _0x16d794 = {
      bs: 1,
      mg: "2",
      studyMode: "2",
      mgjg: 3
    };
    _0x4787d4 = Object.assign(_0x16d794, _0x4787d4);
    return _0x4787d4;
  },
  setConfig(_0x247ad7, _0x49a417 = "") {
    console.log("setConfig" + _0x49a417, JSON.stringify(_0x247ad7));
    GM_setValue("config", _0x247ad7);
  },
  fullUrl(_0x45dda9, _0x3b525c = "") {
    if (!_0x3b525c) {
      _0x3b525c = _0x1a4a81.url.base;
    }
    if (!_0x45dda9.startsWith("http")) {
      return _0x3b525c + _0x45dda9;
    }
    return _0x45dda9;
  },
  matchUrl(_0x1746ab, _0x1ec766 = "like", _0x5af36d = location.href) {
    let _0x58134b = false;
    switch (_0x1ec766) {
      case "eq":
        _0x58134b = _0x1746ab == _0x5af36d;
        break;
      case "like":
        _0x58134b = _0x5af36d.indexOf(_0x1746ab) != -1;
        break;
      case "left":
        _0x58134b = _0x5af36d.startsWith(_0x1746ab);
        break;
      case "right":
        _0x58134b = _0x5af36d.endsWith(_0x1746ab);
        break;
    }
    return _0x58134b;
  },
  getPromiseWithAbort(_0x294616) {
    let _0x3c5e5e = {};
    let _0x1dd254 = new Promise(function (_0xf2a40e, _0x4140fe) {
      _0x3c5e5e.abort = _0x4140fe;
    });
    _0x3c5e5e.promise = Promise.race([_0x294616, _0x1dd254]);
    return _0x3c5e5e;
  },
  page_yhwelcome() {
    console.log("%c page_yhwelcome", "background:rgb(255,0,0);color:#fff");
    var _0x1816ad = sessionStorage.getItem("token");
    this.setGMData("token", _0x1816ad);
    this.setGMData("login", {
      login: true,
      time: _0x1a4a81.now()
    });
  },
  gmGet(_0x53c137, _0x4d99f2) {
    if (_0x3accad) {
      console.log("gmGet", _0x53c137);
    }
    if (_0x53c137.indexOf("?") != -1) {
      {
        for (key in _0x4d99f2) {
          _0x53c137 += "&" + key + "=" + _0x4d99f2[key];
        }
      }
    } else {
      {
        let _0x10015e = true;
        for (key in _0x4d99f2) {
          _0x53c137 += (_0x10015e ? "?" : "&") + (key + "=" + _0x4d99f2[key]);
          _0x10015e = false;
        }
      }
    }
    return new Promise((_0x11f143, _0x5f1bcb) => {
      GM_xmlhttpRequest({
        method: "get",
        url: _0x53c137,
        data: _0x4d99f2,
        headers: {},
        responseType: "json",
        onload: function (_0x4dc02d) {
          {
            let _0x130175 = _0x4dc02d.response;
            if (_0x3accad) {
              console.log(_0x130175);
            }
            _0x11f143(_0x130175);
          }
        },
        onerror: function (_0x584883) {
          {
            if (_0x3accad) {
              console.log(_0x584883);
            }
            _0x5f1bcb(_0x584883);
          }
        }
      });
    });
  },
  gmPost(_0x2d18ef, _0x4dc515, _0x2eeccb = _0x413ae9) {
    _0x2d18ef = _0x1a4a81.fullUrl(_0x2d18ef);
    if (_0x3accad) {
      console.log("gmPost", _0x2d18ef);
    }
    return new Promise((_0xfdfd7c, _0x2f1464) => {
      const _0x4cb9b5 = {
        "Content-Type": "application/json"
      };
      GM_xmlhttpRequest({
        method: "post",
        url: _0x2d18ef,
        data: JSON.stringify(_0x4dc515),
        headers: _0x4cb9b5,
        responseType: "json",
        onload: function (_0x4584b0) {
          let _0x11da04 = _0x4584b0.response;
          if (_0x3accad) {
            console.log(_0x11da04);
          }
          if (_0x11da04.code != 200 && _0x2eeccb.showErr) {
            const _0x3af45b = {
              offset: "100px"
            };
            layer.alert(_0x11da04.message, _0x3af45b);
            return;
          }
          _0xfdfd7c(_0x11da04);
        },
        onerror: function (_0x5b5779) {
          {
            if (_0x3accad) {
              console.log(_0x5b5779);
            }
            _0x2f1464(_0x5b5779);
          }
        }
      });
    });
  },
  createWorker(_0x32194c) {
    var _0x3b789b = new Blob(["(" + _0x32194c + ")()"]);
    var _0x3046d5 = window.URL.createObjectURL(_0x3b789b);
    var _0x89f4d7 = new Worker(_0x3046d5);
    return _0x89f4d7;
  },
  createIntervalWorker(_0x2ecce3, _0x3415d8) {
    var _0x4b93e9 = _0x1a4a81.createWorker("async function (e) {\n              setInterval(async function () {\n                this.postMessage(null)\n              }, " + _0x3415d8 + ")\n            }");
    _0x4b93e9.onmessage = _0x2ecce3;
    return _0x4b93e9;
  },
  createTimeoutWorker(_0x30805b, _0x538a2c) {
    var _0x2cd4f1 = _0x1a4a81.createWorker("async function (e) {\n                setTimeout(async function () {\n                  this.postMessage(null)\n                }, " + _0x538a2c + ")\n              }");
    _0x2cd4f1.onmessage = function () {
      {
        _0x30805b();
        _0x1a4a81.stopWorker(_0x2cd4f1);
      }
    };
    return _0x2cd4f1;
  },
  stopWorker(_0x1fd716) {
    try {
      _0x1fd716 && _0x1fd716.terminate();
    } catch (_0x245d54) {
      {
        console.log(_0x245d54);
      }
    }
  },
  getGMData(_0x596708, _0x442969) {
    return GM_getValue(_0x1a4a81.getGMKey(_0x596708), _0x442969);
  },
  getGMKey(_0x1fcfd0) {
    return _0x1fcfd0;
    let _0x5e73d6 = localStorage.getItem("ZFK_KEYPREFIX");
    if (!_0x5e73d6) {
      _0x5e73d6 = _0x1a4a81.generateRandomString(10);
      localStorage.setItem("ZFK_KEYPREFIX", _0x5e73d6);
    }
    let _0x5b2f2a = ["token"];
    if (_0x5b2f2a.includes(_0x1fcfd0)) {
      {
        return _0x1fcfd0;
      }
    }
    return _0x5e73d6 + "_";
  },
  setGMData(_0x8aac8e, _0x288387) {
    return GM_setValue(_0x1a4a81.getGMKey(_0x8aac8e), _0x288387);
  },
  delGMData(_0x5b111c, _0x13c49c) {
    return GM_deleteValue(_0x1a4a81.getGMKey(_0x5b111c));
  },
  generateRandomString(_0x2838fe) {
    const _0x146250 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let _0x4248bd = "";
    for (let _0x46c6d4 = 0; _0x46c6d4 < _0x2838fe; _0x46c6d4++) {
      const _0x24de87 = Math.floor(Math.random() * _0x146250.length);
      _0x4248bd += _0x146250.charAt(_0x24de87);
    }
    return _0x4248bd;
  },
  timeStringToSeconds(_0x2cc8b8) {
    _0x2cc8b8 = _0x2cc8b8.replace("小时", ":").replace("分", ":").replace("秒", "");
    if (_0x2cc8b8.endsWith(":")) {
      _0x2cc8b8 = _0x2cc8b8.substring(0, _0x2cc8b8.length - 1);
    }
    const _0x170db6 = _0x2cc8b8.split(":");
    if (_0x170db6.length !== 3) {
      {
        if (_0x170db6.length == 2) {
          {
            _0x170db6.push(0);
          }
        } else {
          {
            throw new Error("Invalid time string format. Expected 'hh:mm:ss'.");
          }
        }
      }
    }
    const _0x180fca = parseInt(_0x170db6[0]);
    const _0x2b2691 = parseInt(_0x170db6[1]);
    const _0x2bd6cb = parseInt(_0x170db6[2]);
    if (isNaN(_0x180fca) || isNaN(_0x2b2691) || isNaN(_0x2bd6cb)) {
      throw new Error("Invalid time string format. Expected numeric values.");
    }
    return _0x180fca * 3600 + _0x2b2691 * 60 + _0x2bd6cb;
  },
  getLocalData(_0x2f5fb9, _0x20312b) {
    var _0xc41652 = localStorage.getItem(_0x2f5fb9);
    if (_0xc41652 == null) {
      return _0x20312b;
    }
    return JSON.parse(_0xc41652).val;
  },
  setLocalData(_0x562cca, _0x25c30e) {
    const _0x4b4eec = {
      val: _0x25c30e
    };
    return localStorage.setItem(_0x562cca, JSON.stringify(_0x4b4eec));
  },
  setFormVal(_0x3b861b, _0x113c41) {
    $.each(_0x113c41, function (_0x69c253, _0x3429ff) {
      {
        let _0x37fd92 = $(_0x3b861b).find("[name=\"" + _0x69c253 + "\"]");
        if (_0x37fd92.length == 0) {
          return true;
        } else {
          if (_0x37fd92.length == 1) {
            {
              let _0x2bd900 = _0x37fd92.eq(0).attr("type");
              switch (_0x2bd900) {
                case "radio":
                case "checkbox":
                  if (_0x37fd92.val() == _0x3429ff) {
                    _0x37fd92.prop("checked", true);
                  }
                  break;
                default:
                  _0x37fd92.val(_0x3429ff);
                  break;
              }
            }
          } else {
            {
              _0x37fd92.each((_0x46f1fe, _0x43762c) => {
                {
                  if (_0x3429ff.includes($(_0x43762c).val())) {
                    $(_0x43762c).prop("checked", true);
                  }
                }
              });
            }
          }
        }
      }
    });
  },
  getFormVal(_0x4a09c6) {
    let _0x21dd10 = {};
    var _0x4dcf20 = $(_0x4a09c6).serializeArray();
    let _0x1f1104 = [];
    $.each(_0x4dcf20, function () {
      {
        console.log(this);
        if (!_0x1f1104.includes(this.name)) {
          _0x1f1104.push(this.name);
          _0x21dd10[this.name] = this.value;
        } else {
          let _0x69216 = _0x21dd10[this.name];
          if (Array.isArray(_0x69216)) {
            _0x21dd10[this.name].push(this.value);
          } else {
            _0x21dd10[this.name] = [_0x21dd10[this.name], this.value];
          }
        }
      }
    });
    return _0x21dd10;
  },
  now() {
    return new Date().getTime();
  },
  getElByText(_0x241b03, _0x53671c, _0x1b62d7 = "eq", _0x5ade71 = true) {
    let _0x42a2e1 = null;
    $(_0x241b03).each((_0x96d15, _0x47ac87) => {
      if (_0x5ade71 && !$(_0x47ac87).is(":visible")) {
        {
          return true;
        }
      }
      if (_0x1b62d7 == "eq" && $(_0x47ac87).text().trim() == _0x53671c) {
        {
          _0x42a2e1 = $(_0x47ac87);
          return false;
        }
      } else {
        if (_0x1b62d7 == "startsWith" && $(_0x47ac87).text().trim().startsWith(_0x53671c)) {
          {
            _0x42a2e1 = $(_0x47ac87);
            return false;
          }
        } else {
          if (_0x1b62d7 == "endsWith" && $(_0x47ac87).text().trim().endsWith(_0x53671c)) {
            _0x42a2e1 = $(_0x47ac87);
            return false;
          }
        }
      }
    });
    return _0x42a2e1;
  },
  getElListByText(_0x21f3ef, _0x3f2456, _0x2df701 = "eq", _0x2b0aa5 = true) {
    let _0x5b78ed = [];
    $(_0x21f3ef).each((_0xb9968f, _0x9a2b39) => {
      if (_0x2b0aa5 && !$(_0x21f3ef).is(":visible")) {
        {
          return true;
        }
      }
      if (_0x2df701 == "eq" && $(_0x9a2b39).text().trim() == _0x3f2456) {
        _0x5b78ed.push($(_0x9a2b39));
      } else {
        if (_0x2df701 == "startsWith" && $(_0x9a2b39).text().trim().startsWith(_0x3f2456)) {
          {
            _0x5b78ed.push($(_0x9a2b39));
          }
        } else {
          if (_0x2df701 == "endsWith" && $(_0x9a2b39).text().trim().endsWith(_0x3f2456)) {
            {
              _0x5b78ed.push($(_0x9a2b39));
            }
          }
        }
      }
    });
    return _0x5b78ed;
  },
  random(_0x3d5120, _0x6446e3) {
    if (arguments.length === 2) {
      {
        return Math.floor(_0x3d5120 + Math.random() * (_0x6446e3 + 1 - _0x3d5120));
      }
    } else {
      {
        return null;
      }
    }
  },
  downloadTxt(_0x21e9da, _0x1b2190) {
    var _0x39c061 = document.createElement("a");
    _0x39c061.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(_0x1b2190));
    _0x39c061.setAttribute("download", _0x21e9da);
    _0x39c061.style.display = "none";
    document.body.appendChild(_0x39c061);
    _0x39c061.click();
    document.body.removeChild(_0x39c061);
  },
  dateFormat(_0x449b24 = new Date(), _0x5e66ba = "yyyy-MM-dd HH:mm") {
    let _0x4aa70e;
    if (typeof _0x449b24 === "number") {
      _0x449b24 = new Date(_0x449b24);
    }
    const _0x3ba4fc = {
      "y+": _0x449b24.getFullYear().toString(),
      "M+": (_0x449b24.getMonth() + 1).toString(),
      "d+": _0x449b24.getDate().toString(),
      "H+": _0x449b24.getHours().toString(),
      "m+": _0x449b24.getMinutes().toString(),
      "s+": _0x449b24.getSeconds().toString()
    };
    for (let _0x3cdc0a in _0x3ba4fc) {
      _0x4aa70e = new RegExp("(" + _0x3cdc0a + ")").exec(_0x5e66ba);
      if (_0x4aa70e) {
        {
          _0x5e66ba = _0x5e66ba.replace(_0x4aa70e[1], _0x4aa70e[1].length == 1 ? _0x3ba4fc[_0x3cdc0a] : _0x3ba4fc[_0x3cdc0a].padStart(_0x4aa70e[1].length, "0"));
        }
      }
    }
    return _0x5e66ba;
  }
});
_0x1a4a81.setGMData("version", _0x1a4a81.setting.version.version);
_0x1a4a81.init();
if (!unsafeWindow.zfk) {
  unsafeWindow.zfk = _0x1a4a81;
}