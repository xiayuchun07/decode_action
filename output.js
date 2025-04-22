//Tue Apr 22 2025 14:40:41 GMT+0000 (Coordinated Universal Time)
//你好
//你好
var intervalId = window.setInterval(function () {}, Number.MAX_SAFE_INTEGER);
for (var _0x45e0fd = 1; _0x45e0fd < intervalId; _0x45e0fd++) {
  window.clearInterval(_0x45e0fd);
}
var _0x2b5e4c = {};
var _0x5efa20;
var _0x5e4e05 = getValueFromStorage("ANKI-DEVICE-ID", "");
if (typeof AnkiDroidJS !== "undefined") {
  if (!_0x5efa20) {
    if (AnkiDroidJS.prototype !== undefined) {
      var _0xc2c85e = {
        "version": "0.0.3",
        "developer": "random9528"
      };
      _0x5efa20 = new AnkiDroidJS(_0xc2c85e);
    } else {
      _0x5efa20 = AnkiDroidJS;
    }
  }
}
var _0x2d6508 = "-1";
var _0x410e20 = "";
var _0x20b153 = "";
var _0x34122f = {
  "zh": {
    "MESSAGE_CONTAINS_CLOZE_NODE": "所选区域包含特殊节点的一部分<br>请包含全部或者不包含该节点",
    "MESSAGE_CANNOT_GET_ELEMENT_SIZE": "获取当前元素大小失败<br>请关闭Anki后重试",
    "MESSAGE_SIZE_OUT_OF_RANGE": "元素大小超过范围，请调整",
    "MESSAGE_SYNC_FAIL": "同步设置失败，请检查网络",
    "MESSAGE_ILLEGAL_USAGE": "未授权的上架版本，请联系微信random9528",
    "MESSAGE_TRAIL_END": "试用时间已到，请联系作者购买授权",
    "MESSAGE_UNLICENSED": "未授权的副本，请购买授权后使用",
    "MESSAGE_COPY_SUCCESS": "复制成功",
    "MESSAGE_COPY_FAIL": "复制失败",
    "LABEL_FOR_TAG": "标签: ",
    "LABEL_SWITCH_COVER_STATUS": "切换全部遮挡状态",
    "LABEL_COPY_COVER_LOCATIONS": "复制遮挡区域坐标",
    "LABEL_SHOW_FIRST_CLOZE": "显示第1个挖空",
    "LABEL_SHOW_NEXT_CLOZE": "显示下一个挖空",
    "LABEL_RANDOM_CLOZE": "随机挖空",
    "LABEL_READ_QUESTION": "朗读问题",
    "LABEL_FOR_VERSION": "版本: V",
    "LABEL_FOR_UPDATE": "更新",
    "LABEL_FOR_AUTHOR": "，作者: 微信random9528",
    "LABEL_FOR_SETTINGS": "卡片设置",
    "LABEL_FOR_TRAIL": "试用到期时间：",
    "LABEL_FOR_SHOW_ANSWER": "显示答案",
    "LABEL_FOR_CURRENT_DECK": "当前牌组：",
    "LABEL_FOR_DOUBLE_CLICK_NOTES": "双击此区域，编辑笔记/解析",
    "QUESTION_TYPE_CLOZE": "【填空题】",
    "QUESTION_TYPE_ESSAY_QUESTION": "【问答题】",
    "QUESTION_TYPE_SELECT_MULTI": "【多选题】",
    "QUESTION_TYPE_SELECT_SINGLE": "【单选题】",
    "QUESTION_TYPE_SELECT_RIGHT_WRONG": "【判断题】",
    "QUESTION_TYPE_IMAGE_COVER": "【遮挡题】",
    "QUESTION_TYPE_IMAGE_MN": "【MN遮挡】",
    "QUESTION_TYPE_IMAGE_CLOZE": "【挖空混合】",
    "QUESTION_TYPE_MINDMAP": "【思维导图】",
    "SETTINGS_LABEL_FUNCTION": "功能设置",
    "SETTINGS_LABEL_SHOW_DECK_NAME": "显示牌组名称",
    "SETTINGS_LABEL_SHOW_QUESTION_TYPE": "显示题目类型",
    "SETTINGS_LABEL_HIDE_QUESTION_OPTIONS": "隐藏选项内容",
    "SETTINGS_LABEL_RANDOM_QUESTION_OPTIONS": "随机选项位置",
    "SETTINGS_LABEL_RESTORE_RANDOM_OPTIONS": "反面还原位置",
    "SETTINGS_LABEL_DELAY_QUESTION_OPTIONS": "延迟显示选项",
    "SETTINGS_LABEL_SELECTION_STATISTICS": "答题情况统计",
    "SETTINGS_LABEL_AUTO_FLIP": "自动翻转卡片",
    "SETTINGS_LABEL_HIDE_DESC": "隐藏解析内容",
    "SETTINGS_LABEL_NOTES_IN_FRONT": "正面显示解析",
    "SETTINGS_LABEL_DESC_LIMIT_HEIGHT": "限制解析高度",
    "SETTINGS_LABEL_ANSWER_LIMIT_HEIGHT": "限制答案高度",
    "SETTINGS_LABEL_CLOZE_ENABLE_INPUT": "挖空开启输入",
    "SETTINGS_LABEL_CLOZE_INPUT_DISABLE": "关闭",
    "SETTINGS_LABEL_CLOZE_INPUT_BLOCK": "方框输入",
    "SETTINGS_LABEL_CLOZE_INPUT_LINE": "横线输入",
    "SETTINGS_LABEL_CLOZE_DRAG_CREATION": "划词制作挖空",
    "SETTINGS_LABEL_CLOZE_RANDOM_FACTOR": "随机挖空因子",
    "SETTINGS_LABEL_IMAGE_REVEAL_DIRECTION": "遮挡显示方向",
    "SETTINGS_LABEL_UP_DOWN_THEN_LEFT_RIGHT": "先上下后左右",
    "SETTINGS_LABEL_LEFT_RIGHT_THEN_UP_DOWN": "先左右后上下",
    "SETTINGS_LABEL_SWITCH_QUESTION_AND_NOTE": "问题答案互换",
    "SETTINGS_LABEL_IMAGE_DRAG_CREATION": "拖拽制作遮挡",
    "SETTINGS_LABEL_READ_QUESTION_CONTENT": "开启内容朗读",
    "SETTINGS_LABEL_STYLE": "样式调整",
    "SETTINGS_LABEL_HIDE_NOTE_TYPE_AUTHOR": "隐藏模板作者",
    "SETTINGS_LABEL_QUESTION_FONT_SIZE": "问题字体大小",
    "SETTINGS_LABEL_OPTIONS_FONT_SIZE": "选项字体大小",
    "SETTINGS_LABEL_DESC_FONT_SIZE": "解析字体大小",
    "SETTINGS_LABEL_ANSWER_FONT_SIZE": "答案字体大小",
    "SETTINGS_LABEL_IMAGE_COVER_COLOR": "图片遮挡颜色",
    "SETTINGS_LABEL_IMAGE_COVER_OPACITY": "遮挡透明程度",
    "SETTINGS_LABEL_SELECT_LANGUAGE": "选择模板语言",
    "SETTINGS_LABEL_FOLLOW_SYSTEM": "跟随系统",
    "COLOR_RED": "红",
    "COLOR_ORANGE": "橙",
    "COLOR_YELLOW": "黄",
    "COLOR_GREEN": "绿",
    "COLOR_CYAN": "青",
    "COLOR_BLUE": "蓝",
    "COLOR_PURPLE": "紫",
    "COLOR_GRAY": "灰",
    "OPTIONS_KEYWORD_1": "正确,错误",
    "OPTIONS_KEYWORD_2": "对,错"
  },
  "en": {
    "MESSAGE_CONTAINS_CLOZE_NODE": "Select part of special node<br>Please reselect",
    "MESSAGE_CANNOT_GET_ELEMENT_SIZE": "Failed to get element size<br>Please restart Anki",
    "MESSAGE_SIZE_OUT_OF_RANGE": "Select size out of range",
    "MESSAGE_SYNC_FAIL": "Failed to sync settings，please check the network",
    "MESSAGE_ILLEGAL_USAGE": "Illegal usage，please contact @random9528",
    "MESSAGE_TRAIL_END": "Trail expired，please purchase license",
    "MESSAGE_UNLICENSED": "Unauthorized copy，please purchase license",
    "MESSAGE_COPY_SUCCESS": "Copied",
    "MESSAGE_COPY_FAIL": "Failed",
    "LABEL_FOR_TAG": "Tags: ",
    "LABEL_SWITCH_COVER_STATUS": "Switch All Cover",
    "LABEL_COPY_COVER_LOCATIONS": "Copy Cover Coordinates",
    "LABEL_SHOW_FIRST_CLOZE": "Reveal First Cloze",
    "LABEL_SHOW_NEXT_CLOZE": "Reveal Next Cloze",
    "LABEL_RANDOM_CLOZE": "Random Cloze",
    "LABEL_READ_QUESTION": "Read Content",
    "LABEL_FOR_VERSION": "Version: V",
    "LABEL_FOR_UPDATE": "UPGRADE",
    "LABEL_FOR_AUTHOR": "，Author: <a href=\"https://twitter.com/random9528\" target=\"_blank\">@random9528</a>",
    "LABEL_FOR_SETTINGS": "Note Settings",
    "LABEL_FOR_TRAIL": "Trail expire at：",
    "LABEL_FOR_SHOW_ANSWER": "Show Answer",
    "LABEL_FOR_CURRENT_DECK": "Current Deck：",
    "LABEL_FOR_DOUBLE_CLICK_NOTES": "Double click this to start editing notes",
    "QUESTION_TYPE_CLOZE": "【CLOZE】",
    "QUESTION_TYPE_ESSAY_QUESTION": "【Q&A】",
    "QUESTION_TYPE_SELECT_MULTI": "【MUL-SEL】",
    "QUESTION_TYPE_SELECT_SINGLE": "【SIN-SEL】",
    "QUESTION_TYPE_SELECT_RIGHT_WRONG": "【TRU-FAL】",
    "QUESTION_TYPE_IMAGE_COVER": "【IMG-COV】",
    "QUESTION_TYPE_IMAGE_MN": "【MN-COV】",
    "QUESTION_TYPE_IMAGE_CLOZE": "【CLZ-MIX】",
    "QUESTION_TYPE_MINDMAP": "【MINDMAP】",
    "SETTINGS_LABEL_FUNCTION": "Functions",
    "SETTINGS_LABEL_SHOW_DECK_NAME": "Show Deck Name",
    "SETTINGS_LABEL_SHOW_QUESTION_TYPE": "Show Question Type",
    "SETTINGS_LABEL_HIDE_QUESTION_OPTIONS": "Hide Option Content",
    "SETTINGS_LABEL_RANDOM_QUESTION_OPTIONS": "Random Option Order",
    "SETTINGS_LABEL_RESTORE_RANDOM_OPTIONS": "Restore Random Order",
    "SETTINGS_LABEL_DELAY_QUESTION_OPTIONS": "Delay Reveal Option",
    "SETTINGS_LABEL_SELECTION_STATISTICS": "Answer Accuracy Tracking",
    "SETTINGS_LABEL_AUTO_FLIP": "Automatic Flip Back",
    "SETTINGS_LABEL_HIDE_DESC": "Hide Description Content",
    "SETTINGS_LABEL_NOTES_IN_FRONT": "Front Show Description",
    "SETTINGS_LABEL_DESC_LIMIT_HEIGHT": "Limit Description Height",
    "SETTINGS_LABEL_ANSWER_LIMIT_HEIGHT": "Limit Answer Height",
    "SETTINGS_LABEL_CLOZE_ENABLE_INPUT": "Cloze Enable Input",
    "SETTINGS_LABEL_CLOZE_INPUT_DISABLE": "Disabled",
    "SETTINGS_LABEL_CLOZE_INPUT_BLOCK": "Square Input",
    "SETTINGS_LABEL_CLOZE_INPUT_LINE": "Line Input",
    "SETTINGS_LABEL_CLOZE_DRAG_CREATION": "Drag Cloze Creation",
    "SETTINGS_LABEL_CLOZE_RANDOM_FACTOR": "Random Cloze Factor",
    "SETTINGS_LABEL_IMAGE_REVEAL_DIRECTION": "Cover Reveal Direction",
    "SETTINGS_LABEL_UP_DOWN_THEN_LEFT_RIGHT": "Top then Left",
    "SETTINGS_LABEL_LEFT_RIGHT_THEN_UP_DOWN": "Left then Top",
    "SETTINGS_LABEL_SWITCH_QUESTION_AND_NOTE": "Switch Question/Answer",
    "SETTINGS_LABEL_IMAGE_DRAG_CREATION": "Drag Cover Creation",
    "SETTINGS_LABEL_READ_QUESTION_CONTENT": "Enable Content Read",
    "SETTINGS_LABEL_STYLE": "Styles",
    "SETTINGS_LABEL_HIDE_NOTE_TYPE_AUTHOR": "Hide Author Name",
    "SETTINGS_LABEL_QUESTION_FONT_SIZE": "Question Font Size",
    "SETTINGS_LABEL_OPTIONS_FONT_SIZE": "Option Font Size",
    "SETTINGS_LABEL_DESC_FONT_SIZE": "Desc Font Size",
    "SETTINGS_LABEL_ANSWER_FONT_SIZE": "Answer Font Size",
    "SETTINGS_LABEL_IMAGE_COVER_COLOR": "Image Cover Color",
    "SETTINGS_LABEL_IMAGE_COVER_OPACITY": "Image Cover Opacity",
    "SETTINGS_LABEL_SELECT_LANGUAGE": "Choose Language",
    "SETTINGS_LABEL_FOLLOW_SYSTEM": "Follow System",
    "COLOR_RED": "R",
    "COLOR_ORANGE": "O",
    "COLOR_YELLOW": "Y",
    "COLOR_GREEN": "G",
    "COLOR_CYAN": "C",
    "COLOR_BLUE": "B",
    "COLOR_PURPLE": "P",
    "COLOR_GRAY": "G",
    "OPTIONS_KEYWORD_1": "false,true",
    "OPTIONS_KEYWORD_2": "correct,incorrect"
  }
};
function _0x33c9b2(_0x3b7bc9) {
  return _0x5efa20 !== undefined && _0x5efa20[_0x3b7bc9] != undefined;
}
function _0x2d98f8() {
  var _0x2fbb1e = "zh";
  if (_0x2b818d === "FOLLOW") {
    var _0x2d3500 = navigator.userLanguage || navigator.language;
    if (_0x2d3500.startsWith("zh")) {
      _0x2fbb1e = "zh";
    } else {
      _0x2fbb1e = "en";
    }
  } else if (_0x2b818d === "SIM-CH") {
    _0x2fbb1e = "zh";
  } else if (_0x2b818d === "ENGLISH") {
    _0x2fbb1e = "en";
  }
  setValueToStorage("ANKI-SETTINGS-PREFERRED-LANGUAGE", _0x2fbb1e);
  return _0x2fbb1e;
}
function _tr(_0x707260) {
  return _0x34122f[_0x29af86][_0x707260] || _0x707260;
}
function regionSelected(_0x2ae52a) {
  if (![_0x239ce3, _0x56eeab, _0x4d2865, _0x1e2d1a].includes(_0x862ba8)) {
    return;
  }
  if (_0x862ba8 === _0x56eeab && _0x3d1fc7()) {
    return;
  }
  if (_0x2b4595 === "0") {
    {
      return;
    }
  }
  if (["svg", "rect"].includes(_0x2ae52a.target.tagName.toLowerCase())) {
    {
      return;
    }
  }
  var _0x2aa413 = document.getSelection();
  var _0x252931 = _0x2aa413.getRangeAt(0);
  if (_0x252931.collapsed || _0x2aa413.toString().trim() === "") {
    return;
  } else {
    {
      if (_0xbf0ad5(_0x252931.startContainer.parentNode)) {
        _0x2aa413.removeAllRanges();
        _0x27b8f4("<img src=\"_final_template_embedded_wrong.png\">" + _tr("MESSAGE_CONTAINS_CLOZE_NODE"), "300px");
        return;
      }
      if (_0xbf0ad5(_0x252931.endContainer.parentNode)) {
        {
          _0x2aa413.removeAllRanges();
          _0x27b8f4("<img src=\"_final_template_embedded_wrong.png\">" + _tr("MESSAGE_CONTAINS_CLOZE_NODE"), "300px");
          return;
        }
      }
    }
  }
  if (_0x252931.startContainer !== _0x252931.endContainer) {
    var _0x354974 = document.createRange();
    _0x354974.setStart(_0x252931.startContainer, _0x252931.startOffset);
    _0x354974.setEnd(_0x252931.endContainer, _0x252931.endOffset);
    var _0x543160 = document.createElement("span");
    _0x543160.className = "cloze show";
    try {
      _0x354974.surroundContents(_0x543160);
    } catch (_0x41a60c) {
      {
        _0x27b8f4("<img src=\"_final_template_embedded_wrong.png\">" + _tr("MESSAGE_CONTAINS_CLOZE_NODE"), "300px");
        _0x2aa413.removeAllRanges();
        return;
      }
    }
    const _0x588d9a = _0x543160.getElementsByClassName("cloze");
    while (_0x588d9a.length > 0) {
      var _0x227585 = _0x588d9a[0];
      _0x227585.outerHTML = _0x227585.innerHTML;
    }
  } else {
    if (_0x252931.toString().endsWith(" ")) {
      _0x252931.setEnd(_0x252931.startContainer, _0x252931.endOffset - 1);
    }
    var _0xa8a1b9 = document.createElement("span");
    _0xa8a1b9.className = "cloze show";
    _0x252931.surroundContents(_0xa8a1b9);
  }
  _0x2aa413.removeAllRanges();
  var _0x11d87b = getElementHtmlById("front-question-body");
  var _0x30d5ad = _0x406d85(_0x11d87b, true, true);
  var _0x9213fe = _0x152695().split("||");
  var _0x1f5209 = _0x291548(_0x30d5ad, _0x317ceb);
  updateElementHtmlById("front-question-body", _0x1f5209);
  var _0x92d1dd = Array.prototype.slice.call(document.getElementById("front-question-body").getElementsByTagName("img"));
  _0x3ed756(_0x92d1dd, _0x9213fe);
  _0x4fd6b5();
  _0xa7ad9e();
  _0x6a7af0();
  _0x1f3edc("on text drag");
}
function _0x6a7af0() {
  for (var _0xd24054 of document.getElementsByName("question-image-svg-wrapper")) {
    _0x471662(_0xd24054);
  }
  for (var _0x2e1694 of document.getElementsByName("svg-rect-block")) {
    _0x4607a5(_0x2e1694);
  }
}
var _0x2d0bab = 0;
function _0x546675(_0x581f6c) {
  var _0x178ca7 = _0x581f6c.target.parentNode;
  _0x2d0bab = _0x178ca7.id;
  var _0x15320d = document.getElementById("global-input");
  var _0x531c4b = document.getElementById("cloze-input-" + _0x2d0bab);
  if (!_0x531c4b) {
    return;
  }
  _0x531c4b.after(_0x15320d);
  _0x15320d.value = _0x531c4b.value;
  _0x15320d.setAttribute("maxlength", _0x5098c3(_0x2d0bab).length);
  _0x15320d.focus();
  _0x2f710b();
}
function _0x2f710b() {
  var _0x4224ff = document.getElementById("front-question-body").getElementsByTagName("square_input");
  for (var _0x528e8c of _0x4224ff) {
    _0x528e8c.className = "";
  }
  var _0x56284d = document.getElementById("cloze-input-" + _0x2d0bab).value;
  var _0x5cd4c6 = _0x5098c3(_0x2d0bab);
  var _0x3292bc = _0x56284d.length;
  if (_0x3292bc > _0x5cd4c6.length - 1) {
    {
      _0x3292bc = _0x5cd4c6.length - 1;
    }
  }
  _0x5cd4c6[_0x3292bc].className = "square_active";
}
function _0x1aa5d7(_0x57fb31) {
  if (_0x317ceb === "1") {
    {
      _0x57fb31.addEventListener("click", _0x546675, false);
    }
  } else if (_0x317ceb === "0") {
    _0x57fb31.addEventListener("click", switchClozeContent, false);
  }
  _0x57fb31.addEventListener("contextmenu", removeCloze, false);
}
function removeCloze(_0x354da8) {
  var _0x3e8a84 = _0x354da8.currentTarget;
  _0x354da8.preventDefault();
  _0x3e8a84.outerHTML = _0x288141(_0x3e8a84);
  _0x4fd6b5();
}
function _0xbf0ad5(_0x8bf9fa) {
  return _0x8bf9fa.nodeName === "SPAN" && _0x8bf9fa.classList.contains("cloze");
}
var _0xfb0986 = "20230611151453fdsvdnl06r";
var _0x1b806c = "https://anki-backend.zhangsn.me";
var _0x483e5b = 89;
var _0x403497 = "0";
var _0x46382c = "1";
var _0x3e8404 = "0";
var _0x6b8210 = "0";
var _0x239c72 = "0";
var _0x936be5 = "0";
var _0x583513 = "0";
var _0x9fc893 = "0";
var _0x41b436 = "1";
var _0x2ca740 = "0";
var _0x52ed43 = "1";
var _0x2f2f0b = "0";
var _0x3654c3 = "0";
var _0x1e644d = "1";
var _0x584d63 = "#FFFF00";
var _0x52c151 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var _0x110580 = "0";
var _0x58acd3 = "11";
var _0x1cc2b4 = "12";
var _0x58cff6 = "13";
var _0x239ce3 = "21";
var _0x1e2d1a = "31";
var _0x4107db = "32";
var _0x4d2865 = "33";
var _0x56eeab = "41";
var _0x35dc29 = "51";
var _0x505ac4 = 10;
var _0x586eb1 = "0.52525";
var _0x263ba0 = "0.2";
var _0x400b76 = "1";
var _0x1004c1 = "0";
var _0x538014 = "FOLLOW";
var _0x1f5cc7 = "0";
var _0x33be79 = "1";
var _0x18418e = "0.3";
var _0xd6ad6f = "1";
var _0x571f3d = "0";
var _0x103933 = 800;
var _0x1e4379 = _0x403497;
var _0x4b088a = _0x46382c;
var _0x5c8540 = _0x3e8404;
var _0x25d340 = _0x6b8210;
var _0x4848ff = _0x239c72;
var _0x1eb2ec = _0x936be5;
var _0x54ff9e = _0x583513;
var _0x49a167 = _0x9fc893;
var _0x20d916 = _0x41b436;
var _0x3799c7 = _0x2ca740;
var _0x862ba8 = "00";
var _0x49d944 = {};
var _0x96bb1c = false;
var _0x556781 = _0x52ed43;
var showNotesInFront = _0x2f2f0b;
var _0x1d2b7e = _0x3654c3;
var _0xcc42f4 = _0x1e644d;
var _0x5382da = false;
var _0xf1b4a0 = _0x110580;
var _0x1f9522 = _0x584d63;
var _0x220001 = _0x263ba0;
var _0x28bc35 = _0x400b76;
var _0x2b818d = _0x538014;
var _0x29af86 = "en";
var _0x317ceb = _0x1f5cc7;
var _0x2b4595 = _0x33be79;
var randomClozeFactor = _0x18418e;
var _0x3ed710 = _0xd6ad6f;
var _0x3fe4e3 = _0x571f3d;
var _0x4ef0ba = !!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i);
var _0x3a17e2 = _0x1004c1;
function switchClozeContent(_0x2670f3) {
  var _0x470387 = _0x2670f3.currentTarget;
  if (_0x470387.classList.contains("show")) {
    {
      _0x470387.classList.remove("show");
    }
  } else {
    _0x470387.classList.add("show");
  }
}
function _0x47b4c8() {
  var _0x5a6155 = document.getElementById("front-question-body").getElementsByClassName("cloze");
  for (var _0x45e0fd = 0; _0x45e0fd < _0x5a6155.length; _0x45e0fd++) {
    {
      var _0x20228d = _0x5a6155[_0x45e0fd];
      if (!_0x20228d.id) {
        {
          _0x20228d.innerHTML = _0x52c151;
        }
      } else {
        _0x20228d.id = _0x45e0fd;
      }
      _0x1aa5d7(_0x20228d);
    }
  }
}
function _0x2ceeb3(_0x12fb19) {
  var _0x44575f = Number(_0x12fb19 * 100).toFixed(2);
  return _0x44575f + "%";
}
function _0x36e850(_0x1fecf1) {
  var _0x24997d = Number(_0x1fecf1 * 100).toFixed(2);
  return Math.abs(_0x24997d) + "%";
}
function _0x4c765e(_0x421eff) {
  var _0x48dc5f = _0x421eff.replace("%", "");
  _0x48dc5f = _0x48dc5f * 1;
  return _0x48dc5f;
}
function _0x47e2cb(_0x43f602, _0x1fb6e4, _0x15163f, _0x2db2c3, _0x4ef304) {
  var _0x510a93 = _0x43f602.clientX;
  var _0x39a651 = _0x43f602.clientY;
  var _0x33380d = _0x43f602.offsetX;
  var _0x36e62f = _0x43f602.offsetY;
  if (_0x43f602.touches) {
    var _0x3d95f3 = _0x43f602.touches[0];
    _0x510a93 = _0x3d95f3.clientX;
    _0x39a651 = _0x3d95f3.clientY;
    var _0x5568c7 = _0x43f602.target.getBoundingClientRect();
    _0x33380d = _0x3d95f3.pageX - _0x5568c7.left;
    _0x36e62f = _0x3d95f3.pageY - (_0x5568c7.top + window.scrollY);
  }
  if (_0x510a93 < _0x1fb6e4) {
    {
      _0x33380d = 0;
      _0x36e62f = _0x39a651 - _0x15163f;
    }
  }
  if (_0x39a651 < _0x15163f) {
    _0x33380d = _0x510a93 - _0x1fb6e4;
    _0x36e62f = 0;
  }
  if (_0x510a93 >= _0x2db2c3 + _0x1fb6e4) {
    {
      _0x33380d = _0x2db2c3;
      _0x36e62f = _0x39a651 - _0x15163f;
    }
  }
  if (_0x39a651 >= _0x4ef304 + _0x15163f) {
    _0x33380d = _0x510a93 - _0x1fb6e4;
    _0x36e62f = _0x4ef304;
  }
  return {
    "relativeXLocation": _0x33380d,
    "relativeYLocation": _0x36e62f
  };
}
function _0x5d0c() {
  return _0x28bc35 === "0" || !_0x11a2ca();
}
function _0x11a2ca() {
  if (!_0x187963()) {
    return false;
  }
  return !_0x5556ff();
}
function _0x3e6beb(_0x1455b0) {
  var _0x5e88a3 = _0x1455b0.getElementsByTagName("rect");
  var _0x23e9da = [];
  var _0x5822ef = [];
  for (var _0x4c20ca of _0x5e88a3) {
    var _0x44aad8 = Number.parseFloat(_0x4c20ca.getAttribute("x"));
    if (0 < _0x44aad8 && _0x44aad8 < 100) {
      _0x23e9da.push(_0x44aad8);
      _0x23e9da.push(Number.parseFloat(_0x4c20ca.getAttribute("width")) + _0x44aad8);
    }
    var _0x4ae2b1 = Number.parseFloat(_0x4c20ca.getAttribute("y"));
    if (0 < _0x4ae2b1 && _0x4ae2b1 < 100) {
      _0x5822ef.push(_0x4ae2b1);
      _0x5822ef.push(Number.parseFloat(_0x4c20ca.getAttribute("height")) + _0x4ae2b1);
    }
  }
  return [_0x23e9da, _0x5822ef];
}
function _0x2cee97() {
  var _0x498eaa = document.getElementById("front-question-body").getElementsByTagName("svg");
  for (var _0x5e2440 of _0x498eaa) {
    if (_0x5e2440.getAttribute("name") === "question-image-svg-wrapper") {
      var _0x56963a = _0x5e2440.getElementsByTagName("line");
      var _0x37d6da = Array.from(_0x56963a);
      _0x37d6da.forEach(_0x3f51bd => {
        _0x3f51bd.remove();
      });
    }
  }
}
function _0xc7e311(_0x5a4ecf, _0x4e721b, _0x32c2f5) {
  if (!_0x5a4ecf) {
    return;
  }
  var _0x3e13af = _0x5a4ecf.getElementsByTagName("line");
  var _0x1ca5a2 = Array.from(_0x3e13af);
  _0x1ca5a2.forEach(_0x54ffcb => {
    {
      if (_0x4e721b) {
        if (_0x54ffcb.getAttribute("is-y-line") === "1") {
          _0x5a4ecf.removeChild(_0x54ffcb);
        }
      } else if (_0x32c2f5) {
        if (_0x54ffcb.getAttribute("is-x-line") === "1") {
          {
            _0x5a4ecf.removeChild(_0x54ffcb);
          }
        }
      } else {
        _0x5a4ecf.removeChild(_0x54ffcb);
      }
    }
  });
}
function _0x509155(_0x4baa60, _0x2afae1, _0x1a70e5, _0x150749, _0x1333eb) {
  var _0x1aeb40 = (_0x55bd59, _0x563db6) => {
    for (const _0x5d69b6 of _0x563db6) {
      if (Math.abs(_0x55bd59 - _0x5d69b6) < 0.1) {
        return true;
      }
    }
    return false;
  };
  var _0x255403 = _0x4baa60.clientWidth;
  var _0x5d8094 = _0x4baa60.clientHeight;
  _0xc7e311(_0x4baa60, _0x1a70e5.length === 0, _0x1333eb.length === 0);
  for (const _0x551a77 of _0x1a70e5) {
    var _0x259088 = Number(_0x551a77 * _0x255403 / 100).toFixed(2);
    _0x5750c7(_0x4baa60, _0x259088, 0, _0x259088, _0x5d8094, _0x1aeb40(_0x551a77, _0x2afae1));
  }
  for (const _0x1c1198 of _0x1333eb) {
    var _0x27cd8c = Number(_0x1c1198 * _0x5d8094 / 100).toFixed(2);
    _0x5750c7(_0x4baa60, 0, _0x27cd8c, _0x255403, _0x27cd8c, _0x1aeb40(_0x1c1198, _0x150749));
  }
}
function _0x5750c7(_0x4ed7a8, _0x1c6465, _0x16122e, _0x3341f1, _0x869421, _0x4e7a5c = false) {
  var _0x48a7f5 = document.createElementNS(_0x4ed7a8.namespaceURI, "line");
  _0x48a7f5.setAttribute("x1", _0x1c6465);
  _0x48a7f5.setAttribute("y1", _0x16122e);
  _0x48a7f5.setAttribute("x2", _0x3341f1);
  _0x48a7f5.setAttribute("y2", _0x869421);
  var _0x25568f = "#FF0000";
  if (_0x1f9522 === _0x25568f) {
    _0x25568f = _0x584d63;
  }
  _0x48a7f5.setAttribute("stroke", _0x4e7a5c ? _0x25568f : _0x1f9522);
  _0x48a7f5.setAttribute("stroke-width", "1");
  _0x48a7f5.setAttribute("stroke-dasharray", "5");
  _0x48a7f5.setAttribute("stroke-opacity", _0x4e7a5c ? "1" : "0.7");
  _0x48a7f5.setAttribute("is-x-line", _0x1c6465 === 0 ? "1" : "0");
  _0x48a7f5.setAttribute("is-y-line", _0x16122e === 0 ? "1" : "0");
  _0x4ed7a8.appendChild(_0x48a7f5);
}
function _0x1baa0b(_0x2e2bc3, _0x19e43e) {
  var _0xa20ed9 = [];
  var _0xf36e7b = _0x4ba4c0 => {
    {
      for (const _0x226304 of _0x19e43e) {
        {
          if (Math.abs(_0x226304 - _0x4ba4c0) < 1) {
            {
              return _0x226304;
            }
          }
        }
      }
      return 0;
    }
  };
  for (const _0x56775d of _0x2e2bc3) {
    {
      var _0x37a7b1 = _0xf36e7b(_0x56775d);
      if (_0x37a7b1 !== 0) {
        _0xa20ed9.push(_0x37a7b1);
      }
    }
  }
  return _0xa20ed9;
}
function _0x471662(_0x54b11d) {
  _0x54b11d.addEventListener("contextmenu", function (_0x3ee193) {
    _0x3ee193.preventDefault();
    if (_0x5d0c()) {
      if (_0x862ba8 === _0x4107db && _0x3ee193.target.tagName.toUpperCase() !== "RECT") {
        {
          _0x3e81e6();
        }
      }
      return;
    }
    if (_0x3ee193.target.tagName.toUpperCase() === "RECT") {
      _0x3ee193.target.remove();
      _0x1f3edc("on context menu");
    }
  });
  _0x1fe23b(_0x54b11d, "touchstart", "mousedown", function (_0x59d916) {
    {
      if (_0x5d0c()) {
        {
          if (_0x862ba8 === _0x4107db && _0x59d916.target.tagName.toUpperCase() !== "RECT") {
            {
              _0x3e81e6();
            }
          }
          return;
        }
      }
      _0x679fa2();
      var _0xdf6c96 = _0x59d916 || window.event;
      var _0x254c83 = _0xdf6c96.clientX;
      var _0x1effe4 = _0xdf6c96.clientY;
      var _0x31e80a = _0xdf6c96.offsetX;
      var _0x405178 = _0xdf6c96.offsetY;
      var _0x521644 = _0xdf6c96.target.clientWidth;
      var _0x496062 = _0xdf6c96.target.clientHeight;
      var _0x1fe402 = false;
      var _0x22a2d1 = _0xdf6c96.target;
      if (_0xdf6c96.touches) {
        {
          var _0x2866dd = _0xdf6c96.touches[0];
          _0x254c83 = _0x2866dd.clientX;
          _0x1effe4 = _0x2866dd.clientY;
          var _0x55cd2d = _0xdf6c96.target.getBoundingClientRect();
          _0x31e80a = _0x2866dd.pageX - _0x55cd2d.left;
          _0x405178 = _0x2866dd.pageY - (_0x55cd2d.top + window.scrollY);
        }
      }
      if (_0x22a2d1.tagName === "svg") {
        var _0x1f6a2b = _0x3e6beb(_0x22a2d1);
        var _0xa2d3ff = document.createElementNS(_0x22a2d1.namespaceURI, "rect");
        _0xa2d3ff.setAttribute("x", _0x2ceeb3(_0x31e80a / _0x521644));
        _0xa2d3ff.setAttribute("y", _0x2ceeb3(_0x405178 / _0x496062));
        _0xa2d3ff.setAttribute("fill", _0x1f9522);
        _0xa2d3ff.setAttribute("fill-opacity", _0x586eb1);
        _0xa2d3ff.setAttribute("cursor", "move");
        _0xa2d3ff.setAttribute("class", "ultimate-template-cloze");
        _0xa2d3ff.setAttribute("name", "svg-rect-block");
        _0x22a2d1.appendChild(_0xa2d3ff);
        _0x1fe402 = true;
        var _0x534b41 = _0x254c83 - _0x31e80a;
        var _0x5162ca = _0x1effe4 - _0x405178;
        _0x1fe23b(document, "touchmove", "mousemove", function (_0xaeaad3) {
          if (_0x1fe402 && _0xa2d3ff) {
            {
              var _0x277550 = _0xaeaad3 || window.event;
              _0x277550.preventDefault();
              var {
                relativeXLocation,
                relativeYLocation
              } = _0x47e2cb(_0x277550, _0x534b41, _0x5162ca, _0x521644, _0x496062);
              _0xa2d3ff.setAttribute("x", _0x2ceeb3(Math.min(relativeXLocation, _0x31e80a) / _0x521644));
              _0xa2d3ff.setAttribute("y", _0x2ceeb3(Math.min(relativeYLocation, _0x405178) / _0x496062));
              _0xa2d3ff.setAttribute("width", _0x2ceeb3(Math.abs(relativeXLocation - _0x31e80a) / _0x521644));
              _0xa2d3ff.setAttribute("height", _0x2ceeb3(Math.abs(relativeYLocation - _0x405178) / _0x496062));
              _0xa2d3ff.setAttribute("rx", 2);
              _0xa2d3ff.setAttribute("ry", 2);
              var _0x2cc073;
              if (relativeXLocation > _0x31e80a) {
                _0x2cc073 = Number.parseFloat(_0xa2d3ff.getAttribute("width")) + Number.parseFloat(_0xa2d3ff.getAttribute("x"));
              } else {
                _0x2cc073 = Number.parseFloat(_0xa2d3ff.getAttribute("x"));
              }
              var _0x31b656;
              if (relativeYLocation > _0x405178) {
                _0x31b656 = Number.parseFloat(_0xa2d3ff.getAttribute("height")) + Number.parseFloat(_0xa2d3ff.getAttribute("y"));
              } else {
                {
                  _0x31b656 = Number.parseFloat(_0xa2d3ff.getAttribute("y"));
                }
              }
              var _0x35bc42 = _0x1baa0b([_0x2cc073], _0x1f6a2b[0]);
              var _0x394834 = _0x1baa0b([_0x31b656], _0x1f6a2b[1]);
              _0x509155(_0x22a2d1, [_0x2cc073], _0x35bc42, [_0x31b656], _0x394834);
              if (_0x35bc42.length === 0 && _0x394834.length === 0) {
                {
                  _0x2cee97();
                }
              }
              _0x49c287(_0xa2d3ff, _0x277550.clientX + _0x277550.clientY);
            }
          }
        });
        _0x1fe23b(document, "touchend", "mouseup", function (_0x11e3a1) {
          {
            _0x50c44c();
            if (_0x1fe402 && _0xa2d3ff) {
              var _0x1a5b2c = _0xa2d3ff.hasAttribute("width");
              var _0x1235b5 = _0xa2d3ff.hasAttribute("height");
              if (_0x1a5b2c && _0x1235b5) {
                var _0x2ae8bd = _0x4c765e(_0xa2d3ff.getAttribute("x"));
                var _0xc639bb = _0x4c765e(_0xa2d3ff.getAttribute("y"));
                var _0x1dae24 = _0x4c765e(_0xa2d3ff.getAttribute("width"));
                var _0x21db9f = _0x4c765e(_0xa2d3ff.getAttribute("height"));
                if (_0x2ae8bd < 0 && _0xc639bb < 0) {
                  _0xa2d3ff.setAttribute("x", "0%");
                  _0xa2d3ff.setAttribute("y", "0%");
                }
                if (_0x1dae24 === 0 || _0x21db9f === 0) {
                  _0x3e81e6();
                  _0xa2d3ff.parentElement.removeChild(_0xa2d3ff);
                }
              } else if (!_0x1a5b2c || !_0x1235b5) {
                _0x3e81e6();
                _0xa2d3ff.parentElement.removeChild(_0xa2d3ff);
              }
              _0xa2d3ff.setAttribute("fill-opacity", "1");
              _0xa2d3ff.addEventListener("mousemove", _0x3f07b5);
              _0x1fe23b(_0xa2d3ff, "touchstart", "mousedown", _0x2f43a3);
              _0x540e9b(_0xa2d3ff);
              _0xa2d3ff = null;
              _0x1f3edc("on mouse move");
            }
            if (_0x4ef0ba) {
              document.ontouchmove = null;
            } else {
              {
                document.onmousemove = null;
              }
            }
            _0x2cee97();
          }
        });
      }
    }
  });
}
function _0x68995e() {
  updateElementHtmlById("all-hide-show-btn", _tr("LABEL_SWITCH_COVER_STATUS"));
  showElementById("all-hide-show-wrapper");
  if (_0x862ba8 === _0x4107db) {
    return;
  }
  updateElementHtmlById("copy-locations-btn", _tr("LABEL_COPY_COVER_LOCATIONS"));
  showElementById("locations-copier-wrapper");
}
function _0x14eecd(_0x36ca7d) {
  for (var _0x5a0639 of _0x36ca7d.split("||")) {
    {
      if (_0x5a0639 !== "[]") {
        return false;
      }
    }
  }
  return true;
}
function _0x5b29cf(_0x3b2b02) {
  if (_0x410e20 === "") {
    return "";
  }
  const _0x2838d8 = aesjs.utils.hex.toBytes(_0x410e20);
  const _0x310e8d = aesjs.utils.hex.toBytes(_0x20b153);
  const _0xffe3d = new aesjs.ModeOfOperation.cbc(_0x2838d8, _0x310e8d);
  var _0x553930 = aesjs.padding.pkcs7.pad(aesjs.utils.utf8.toBytes(_0x3b2b02));
  var _0xce13a3 = _0xffe3d.encrypt(_0x553930);
  return aesjs.utils.hex.fromBytes(_0xce13a3).split("").reverse().join("");
}
function _0x1f3edc(_0x105201) {
  if (typeof pycmd !== "undefined" && _0x862ba8 !== _0x4107db) {
    {
      var _0x26cc96 = _0x152695();
      if (!_0x14eecd(_0x26cc96)) {
        pycmd("save-image-covers::" + _0x5b29cf(_0x26cc96));
      }
    }
  }
  if (typeof AnkiDroidJS !== "undefined") {
    var _0x26cc96 = _0x152695();
    _0x22ccc0(2, _0x26cc96);
  }
  _0x68995e();
  _0xf1022a();
  _0x493c91(_0x4b088a);
}
function _0x4fd6b5() {
  if ([_0x239ce3, _0x56eeab, _0x4d2865, _0x1e2d1a].includes(_0x862ba8)) {
    var _0x233cbb = getElementHtmlById("front-question-body");
    var _0xae06ce = _0x406d85(_0x233cbb, true, true);
    _0x261b5c("ANKI-RERENDERED-QUESTION", _0xae06ce);
    if (typeof AnkiDroidJS !== "undefined") {
      _0x22ccc0(1, _0xae06ce);
    } else {
      pycmd("save-clozes::" + _0x5b29cf(_0xae06ce));
    }
  }
}
function _0x170022(_0x3a5a4c) {
  var _0x135d50 = Array.prototype.slice.call(_0x3a5a4c);
  var _0x452807 = function (_0x46cced) {
    {
      return _0x46cced.tagName.toUpperCase() === "SPAN";
    }
  };
  var _0x2fa70d = function (_0x2e2585, _0x3b38b7) {
    {
      return Number.parseFloat(_0x2e2585.getAttribute(_0x3b38b7).replace("%", ""));
    }
  };
  _0x135d50.sort(function compareFn(_0x4910fe, _0x4d9ed1) {
    if (_0x452807(_0x4910fe)) {
      {
        if (!_0x452807(_0x4d9ed1)) {
          {
            return -1;
          }
        } else {
          {
            return 0;
          }
        }
      }
    } else {
      if (_0x452807(_0x4d9ed1)) {
        return 1;
      } else {
        {
          var _0x26f034 = _0x2fa70d(_0x4910fe, "x");
          var _0x674aca = _0x2fa70d(_0x4910fe, "y");
          var _0x49319c = _0x2fa70d(_0x4d9ed1, "x");
          var _0x47e7d9 = _0x2fa70d(_0x4d9ed1, "y");
          if (_0x3fe4e3 === "0") {
            {
              if (Math.abs(_0x674aca - _0x47e7d9) < 1) {
                return _0x26f034 - _0x49319c;
              } else {
                {
                  return _0x674aca - _0x47e7d9;
                }
              }
            }
          } else {
            if (Math.abs(_0x26f034 - _0x49319c) < 1) {
              return _0x674aca - _0x47e7d9;
            } else {
              return _0x26f034 - _0x49319c;
            }
          }
        }
      }
    }
  });
  return _0x135d50;
}
function _0x33efce(_0x1473fa, _0x1572a8, _0x24d099) {
  var _0x577c64 = "svg-container-" + _0x1473fa;
  var _0x1a8ccc = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  _0x1a8ccc.setAttribute("width", "100%");
  _0x1a8ccc.setAttribute("height", "100%");
  _0x1a8ccc.setAttribute("name", "question-image-svg-wrapper");
  _0x1a8ccc.setAttribute("id", _0x577c64);
  _0x1a8ccc.style.left = 0;
  _0x1a8ccc.style.top = 0;
  _0x1a8ccc.style.bottom = 0;
  _0x1a8ccc.style.right = 0;
  _0x1a8ccc.style.position = "absolute";
  _0x1a8ccc.style["user-select"] = "none";
  var _0x4911b8 = document.createElement("div");
  _0x4911b8.className = "question-image-container";
  _0x4911b8.setAttribute("name", "cover-image");
  var _0x5aef0f = document.createElement("div");
  _0x5aef0f.appendChild(_0x4911b8);
  _0x5aef0f.className = "question-image-wrapper";
  var _0x18db46 = _0x1572a8.cloneNode(true);
  _0x4911b8.appendChild(_0x1a8ccc);
  _0x4911b8.appendChild(_0x18db46);
  _0x1572a8.parentElement.insertBefore(_0x5aef0f, _0x1572a8);
  _0x1572a8.parentElement.removeChild(_0x1572a8);
  if (_0x24d099 && [_0x1e2d1a, _0x4107db, _0x4d2865].includes(_0x862ba8)) {
    _0x68995e();
    for (const _0x2ab0cb of JSON.parse(_0x24d099)) {
      let _0x462f25 = _0x2ab0cb.sX;
      let _0x58d661 = _0x2ab0cb.w;
      let _0x311b3 = _0x2ab0cb.sY;
      let _0x81e825 = _0x2ab0cb.h;
      if (_0x58d661.indexOf("-") > -1) {
        {
          _0x462f25 = Number.parseFloat(_0x462f25) + Number.parseFloat(_0x58d661);
          _0x58d661 = _0x58d661.replace("-", "");
        }
      }
      if (_0x81e825.indexOf("-") > -1) {
        _0x311b3 = Number.parseFloat(_0x311b3) + Number.parseFloat(_0x81e825);
        _0x81e825 = _0x81e825.replace("-", "");
      }
      var _0x446978 = document.createElementNS(_0x1a8ccc.namespaceURI, "rect");
      _0x446978.setAttribute("x", _0x462f25 + "%");
      _0x446978.setAttribute("y", _0x311b3 + "%");
      _0x446978.setAttribute("fill", _0x1f9522);
      _0x446978.setAttribute("width", _0x58d661 + "%");
      _0x446978.setAttribute("height", _0x81e825 + "%");
      if (_0x2ab0cb.nid) {
        {
          _0x446978.setAttribute("nid", _0x2ab0cb.nid);
        }
      }
      _0x446978.setAttribute("fill-opacity", _0x2ab0cb.show ? _0x263ba0 : "1");
      _0x446978.setAttribute("class", "ultimate-template-cloze");
      _0x446978.setAttribute("name", "svg-rect-block");
      _0x4607a5(_0x446978);
      _0x1a8ccc.appendChild(_0x446978);
    }
  }
  _0x471662(_0x1a8ccc);
}
function _0x1fe23b(_0x41a485, _0x3c982c, _0x2e42bd, _0x5d9bd2) {
  if (_0x4ef0ba) {
    _0x41a485.addEventListener(_0x3c982c, _0x5d9bd2, {
      "passive": false
    });
    if ("on" + _0x2e42bd in _0x41a485) {
      {
        _0x41a485.addEventListener(_0x2e42bd, _0x5d9bd2, {
          "passive": false
        });
      }
    }
  } else {
    {
      _0x41a485.addEventListener(_0x2e42bd, _0x5d9bd2, false);
    }
  }
}
function _0x1a2173(_0x503889, _0x13c592, _0x323635, _0x22a045) {
  if (_0x4ef0ba) {
    _0x503889.removeEventListener(_0x13c592, _0x22a045);
    if ("on" + _0x323635 in _0x503889) {
      _0x503889.removeEventListener(_0x323635, _0x22a045);
    }
  } else {
    {
      _0x503889.removeEventListener(_0x323635, _0x22a045);
    }
  }
}
function _0x4607a5(_0x482996) {
  if (_0x862ba8 !== _0x4107db) {
    {
      _0x482996.setAttribute("cursor", "move");
      _0x1fe23b(_0x482996, "touchmove", "mousemove", _0x3f07b5);
    }
  }
  _0x1fe23b(_0x482996, "touchstart", "mousedown", _0x2f43a3);
}
function _0x3ed756(_0x2082e3, _0x2e4897) {
  for (var _0x45e0fd = 0; _0x45e0fd < _0x2082e3.length; ++_0x45e0fd) {
    var _0x47be95 = _0x2082e3[_0x45e0fd];
    var _0x24e0f7 = _0x2e4897[_0x45e0fd];
    _0x33efce(_0x45e0fd, _0x47be95, _0x24e0f7);
  }
}
function _0x34662f(_0x5ac3be, _0xe0fac2) {
  var _0x2977d5 = " " + _0xe0fac2 + "=\"-?[0-9.]+ ?";
  var _0x363a40 = [];
  var _0x3dfdf7 = _0x5ac3be.match(new RegExp(_0x2977d5, "g")) || [];
  for (var _0x37b903 of _0x3dfdf7) {
    var _0x21394f = _0x37b903.substring(_0xe0fac2.length + 3);
    _0x363a40.push(_0x21394f);
  }
  return _0x363a40;
}
function _0x5d3611(_0x3268e0) {
  var _0x171419 = [];
  var _0x5c5894 = _0x3268e0.match(new RegExp("fill=\"(.*?)\"", "g")) || [];
  for (var _0x1c3c68 of _0x5c5894) {
    _0x171419.push(_0x1c3c68.substring(7).replace("\"", ""));
  }
  if (_0x5c09d6(_0x171419)) {
    return [];
  } else {
    return _0x171419;
  }
}
function _0x5c09d6(_0x3fbc48) {
  for (var _0x5de224 of _0x3fbc48) {
    if (_0x5de224 !== "FFFFFF") {
      return false;
    }
  }
  return true;
}
function _0x296cf6(_0x2f32d7, _0x309b56) {
  return (Number.parseFloat(_0x2f32d7) / Number.parseFloat(_0x309b56) * 100).toFixed(2);
}
function _0xdee5e2(_0xbc6b83) {
  var _0x56e293 = [];
  if (!_0xbc6b83) {
    {
      return JSON.stringify(_0x56e293);
    }
  }
  var _0x51bc81 = _0x34662f(_0xbc6b83, "x");
  var _0x55f236 = _0x34662f(_0xbc6b83, "width");
  var _0x19ca4e = _0x55f236[0];
  var _0x3a97fe = _0x55f236.splice(1);
  var _0x10e556 = _0x34662f(_0xbc6b83, "y");
  var _0x22c47e = _0x34662f(_0xbc6b83, "height");
  var _0x379bbe = _0x5d3611(_0xbc6b83);
  var _0x4af297 = _0x22c47e[0];
  var _0x2f2ef9 = _0x22c47e.splice(1);
  for (let _0x45e0fd = 0; _0x45e0fd < _0x51bc81.length; _0x45e0fd++) {
    {
      _0x56e293.push({
        "sX": _0x296cf6(_0x51bc81[_0x45e0fd], _0x19ca4e),
        "sY": _0x296cf6(_0x10e556[_0x45e0fd], _0x4af297),
        "w": _0x296cf6(_0x3a97fe[_0x45e0fd], _0x19ca4e),
        "h": _0x296cf6(_0x2f2ef9[_0x45e0fd], _0x4af297),
        "show": _0x379bbe[_0x45e0fd] === "FFFFFF"
      });
    }
  }
  return JSON.stringify(_0x56e293);
}
function _0x3553b7(_0x51ee9c) {
  var _0x4569d6 = "";
  if (_0x51ee9c.startsWith("file://") && _0x33c9b2("ankiReadFileContent")) {
    {
      _0x4569d6 = _0x5efa20.ankiReadFileContent(_0x51ee9c);
    }
  } else {
    var _0x4b7433 = new XMLHttpRequest();
    _0x4b7433.open("GET", _0x51ee9c, false);
    _0x4b7433.send();
    _0x4569d6 = _0x4b7433.responseText;
  }
  return _0xdee5e2(_0x4569d6);
}
function _0x5bba84(_0x46f7f3, _0x1a2f29, _0x4bece1) {
  _0x47b4c8();
  if (document.getElementById("front-question-body").getElementsByTagName("img").length > 0) {
    if (_0x862ba8 === _0x4107db) {
      var _0x122a63 = [];
      var _0x28ef48 = [];
      var _0x88c78a = document.getElementById("front-question-part").getElementsByClassName("io-original");
      for (var _0xdc87b9 of _0x88c78a) {
        _0x122a63.push(_0xdc87b9.getElementsByTagName("img")[0]);
      }
      var _0x13c743 = document.getElementById("front-question-part").getElementsByClassName("io-overlay");
      for (let _0x45e0fd = 0; _0x45e0fd < _0x13c743.length; _0x45e0fd++) {
        {
          var _0x4c8a30 = _0x13c743[_0x45e0fd].getElementsByTagName("img")[0].src;
          _0x28ef48.push(_0x3553b7(_0x4c8a30));
        }
      }
      if (_0x122a63.length === _0x28ef48.length) {
        _0x3ed756(_0x122a63, _0x28ef48);
      }
    } else if (_0x862ba8 !== _0x35dc29) {
      var _0x561a2d = Array.prototype.slice.call(document.getElementById("front-question-body").getElementsByTagName("img"));
      _0x28ef48 = getElementHtmlById("front-options-value").split("||");
      _0x3ed756(_0x561a2d, _0x28ef48);
    }
  }
  if (!_0x201d51()) {
    showElementById("show-answer-btn-wrapper");
    return;
  }
  var _0x2c7e9c = [];
  var _0x1857c4 = _0x308df3(_0x1a2f29);
  _0xee0a4a(_0x1857c4);
  var _0x5e245a = "";
  for (var _0x45e0fd in _0x1857c4) {
    var _0x20bac1 = _0x1857c4[_0x45e0fd];
    var _0x538928 = _0x20bac1.label;
    if (_0x46f7f3 === "1") {
      {
        var _0x17ae6a = _0x20bac1.label.indexOf("《") > -1 ? 2 : 1;
        _0x538928 = _0x20bac1.label.substring(0, _0x17ae6a);
      }
    }
    _0x5e245a += "<li id='" + _0x20bac1.key + "' class='option' onclick='markSelected(this)'>" + _0x538928 + "</li>";
    _0x2c7e9c.push(_0x20bac1.key);
  }
  setValueToStorage("ANKI-OPTIONS-ORDER", _0x2c7e9c.toString());
  if (_0x4bece1 === "1") {
    _0x5382da = true;
    setTimeout(function () {
      _0x2611e5(_0x5e245a);
      _0x5382da = false;
    }, 1500);
  } else {
    if (_0x5382da) {
      {
        setTimeout(function () {
          _0x2611e5(_0x5e245a);
        }, 1500);
      }
    } else {
      _0x2611e5(_0x5e245a);
    }
  }
}
function _0x2611e5(_0xe27e0) {
  updateElementHtmlById("front-options", _0xe27e0);
  if (_0xe27e0.includes("\\(") && _0xe27e0.includes("\\)") && typeof MathJax !== "undefined") {
    var _0x378c47 = document.getElementById("front-options").getElementsByClassName("option");
    try {
      {
        MathJax.typeset(_0x378c47);
      }
    } catch (_0x24e266) {}
  }
}
function _0xee0a4a(_0x460af5) {
  var _0x57e5da = "";
  for (var _0x45e0fd in _0x460af5) {
    _0x57e5da += "<li class='option'></li>";
  }
  updateElementHtmlById("front-options", _0x57e5da);
}
function _0xb9c303(_0xe461d6, _0x22c532) {
  _0xe461d6 = Math.ceil(_0xe461d6);
  _0x22c532 = Math.floor(_0x22c532);
  return Math.floor(Math.random() * (_0x22c532 - _0xe461d6 + 1)) + _0xe461d6;
}
function _0x159a2c(_0x10a484, _0x189f84) {
  for (var _0x469c8e of _0x10a484) {
    if (_0x469c8e.key === _0x189f84) {
      return true;
    }
  }
  return false;
}
function _0x308df3(_0xffa6c0) {
  var _0x3c1bcb = _0xffa6c0;
  var _0x22ca81 = getElementHtmlById("front-options-value").split("||");
  var _0x2cf631 = getElementHtmlById("front-answer-value");
  var _0x24d843 = [];
  if (_0x2cf631.startsWith("::random::")) {
    {
      _0x3c1bcb = "1";
      var _0x5e1850 = _0x2cf631.substr(10);
      var _0x25dcf2 = _0x5e1850.indexOf("/");
      var _0x370a4e = _0x5e1850.substr(0, _0x25dcf2).split("||");
      var _0x55c040 = _0x5e1850.substr(_0x25dcf2 + 1);
      for (var _0x3b3a67 of _0x370a4e) {
        var _0x1d1c11 = Number.parseInt(_0x3b3a67);
        _0x24d843.push({
          "key": _0x1d1c11,
          "label": _0x22ca81[_0x1d1c11 - 1]
        });
      }
      while (_0x24d843.length < _0x55c040) {
        var _0x433a42 = _0xb9c303(0, _0x22ca81.length - 1);
        var _0x24c70c = _0x433a42 + 1;
        if (!_0x159a2c(_0x24d843, _0x24c70c)) {
          {
            _0x24d843.push({
              "key": _0x24c70c,
              "label": _0x22ca81[_0x433a42]
            });
          }
        }
      }
    }
  } else {
    for (var _0x45e0fd in _0x22ca81) {
      {
        _0x24d843.push({
          "key": Number.parseInt(_0x45e0fd) + 1,
          "label": _0x22ca81[_0x45e0fd]
        });
      }
    }
  }
  if (_0x3c1bcb === "1") {
    {
      for (let _0x45e0fd = 1; _0x45e0fd < _0x24d843.length; _0x45e0fd++) {
        var _0x270180 = Math.floor(Math.random() * (_0x45e0fd + 1));
        var _0x1643c8 = _0x24d843[_0x45e0fd];
        _0x24d843[_0x45e0fd] = _0x24d843[_0x270180];
        _0x24d843[_0x270180] = _0x1643c8;
      }
    }
  }
  return _0x24d843;
}
function _0x273087() {
  return _0x54ff9e === "1" ? "selected" : "selected-light";
}
function _0x270be5() {
  var _0x2cb0f1 = _0x596dfd();
  if (_0x2cb0f1.length === 0) {
    return false;
  }
  for (var _0x4d7ba8 of _0x2cb0f1) {
    if (_0x4d7ba8.getAttribute("fill-opacity") === "1") {
      {
        return false;
      }
    }
  }
  return true;
}
function _0x4838ee(_0x37651, _0x35f328) {
  _0x5e717f("/subscribe/preference", {
    "key": "ANKI-STYLE-" + _0x37651,
    "value": _0x35f328 + "px"
  });
  updateElementFontSize(_0x37651, _0x35f328 + "px");
  _0x2e35ef(_0x37651 + "-input", _0x35f328 + "px");
}
function updateElementFontSize(_0xf2fccb, _0x25df65) {
  var _0x3b5224 = document.getElementById(_0xf2fccb);
  _0x3b5224.style.fontSize = _0x25df65;
}
function adjustRandomClozeFactor(_0x3de0cd) {
  if (randomClozeFactor <= 0.1 && _0x3de0cd < 0) {
    {
      return;
    }
  }
  if (randomClozeFactor > 0.8 && _0x3de0cd > 0) {
    {
      return;
    }
  }
  var _0x1cb094 = "random-cloze-factor";
  var _0x5638b5 = (Number.parseFloat(randomClozeFactor) + _0x3de0cd).toFixed(1);
  _0x5e717f("/subscribe/preference", {
    "key": "ANKI-STYLE-" + _0x1cb094,
    "value": _0x5638b5
  });
  randomClozeFactor = _0x5638b5;
  document.getElementById(_0x1cb094 + "-input").innerText = randomClozeFactor;
  setValueToStorage("ANKI-SETTINGS-RANDOM-CLOZE-FACTOR", randomClozeFactor);
}
function adjustCoverOpacity(_0x22816b) {
  if (_0x220001 <= 0.1 && _0x22816b < 0) {
    return;
  }
  if (_0x220001 > 0.8 && _0x22816b > 0) {
    {
      return;
    }
  }
  var _0x40e5e8 = (Number.parseFloat(_0x220001) + _0x22816b).toFixed(1);
  var _0x4b0b79 = "ANKI-SETTINGS-IMAGE-COVER-OPACITY";
  _0x5e717f("/subscribe/preference", {
    "key": _0x4b0b79,
    "value": _0x40e5e8
  });
  _0x220001 = _0x40e5e8;
  document.getElementById("cover-opacity-input").innerText = _0x220001;
  setValueToStorage(_0x4b0b79, _0x220001);
  let _0x1aad0f = _0x596dfd();
  for (var _0x54f916 of _0x1aad0f) {
    {
      if (_0x54f916.getAttribute("fill-opacity") !== "1") {
        _0x54f916.setAttribute("fill-opacity", _0x220001);
      }
    }
  }
}
function adjustFontSizeByOffset(_0x53c8ef, _0x2ff864) {
  var _0x479f8a = _0x25147a(_0x53c8ef);
  if (_0x479f8a > 40 || _0x479f8a < 10) {
    _0x27b8f4("<img src=\"_final_template_embedded_wrong.png\">" + _tr("MESSAGE_CANNOT_GET_ELEMENT_SIZE"), "260px");
    return;
  }
  var _0x3c0708 = _0x479f8a + Number.parseInt(_0x2ff864);
  if (_0x3c0708 > 40 || _0x3c0708 < 10) {
    _0x27b8f4("<img src=\"_final_template_embedded_missed.png\">" + _tr("MESSAGE_SIZE_OUT_OF_RANGE"), "260px");
    return;
  }
  _0x4838ee(_0x53c8ef, _0x3c0708);
}
function _0x27b8f4(_0x16e325, _0x2b06a9) {
  updateElementHtmlById("notification", _0x16e325);
  var _0x380dd4 = document.getElementById("notification");
  _0x380dd4.className = "show";
  _0x380dd4.style.width = _0x2b06a9;
  setTimeout(function () {
    {
      _0x380dd4.className = _0x380dd4.className.replace("show", "");
    }
  }, 2000);
}
function _0x25147a(_0xf1adb3) {
  var _0xc4bcfc = document.getElementById(_0xf1adb3);
  return Number.parseInt(getComputedStyle(_0xc4bcfc).fontSize.replace("px", ""));
}
function _0x49c287(_0x2ab34a, _0x3b902c) {
  var _0x3effcc = "#FF0000";
  if (_0x1f9522 === _0x3effcc) {
    _0x3effcc = _0x584d63;
  }
  _0x2ab34a.setAttribute("stroke", _0x3effcc);
  _0x2ab34a.setAttribute("stroke-width", "3");
  _0x2ab34a.setAttribute("stroke-dasharray", "10");
  _0x2ab34a.setAttribute("fill-opacity", _0x586eb1);
  _0x2ab34a.setAttribute("stroke-dashoffset", Math.abs(_0x3b902c));
}
function _0x596dfd() {
  let _0x58e581 = [];
  var _0x992c2a = document.getElementById("front-question-body").getElementsByTagName("svg");
  for (var _0x4d5883 of _0x992c2a) {
    {
      if (_0x4d5883.getAttribute("name") === "question-image-svg-wrapper") {
        for (var _0x1b08c1 of _0x4d5883.getElementsByTagName("rect")) {
          _0x58e581.push(_0x1b08c1);
        }
      }
    }
  }
  return _0x58e581;
}
function _0x540e9b(_0x542b7d) {
  if (_0x542b7d.getAttribute("stroke")) {
    if (_0x542b7d.getAttribute("fill-opacity") === _0x586eb1) {
      _0x542b7d.setAttribute("fill-opacity", "1");
    }
    _0x542b7d.removeAttribute("stroke");
    _0x542b7d.removeAttribute("stroke-width");
    _0x542b7d.removeAttribute("stroke-dasharray");
    _0x542b7d.removeAttribute("stroke-dashoffset");
  }
}
function _0x3f07b5(_0xf55d8f) {
  if (_0x5d0c()) {
    return;
  }
  var _0x193398 = _0xf55d8f.target;
  var _0x2479e4 = _0x193398.parentElement;
  var _0x26065d = _0x2479e4.clientWidth;
  var _0x898713 = _0x2479e4.clientHeight;
  var _0x37f87f = _0xf55d8f.offsetX;
  var _0x3fef2f = _0xf55d8f.offsetY;
  var _0x4d1629 = _0x505ac4;
  var _0x1716eb = _0x4c765e(_0x193398.getAttribute("x")) * _0x26065d / 100;
  var _0x2053e7 = (_0x4c765e(_0x193398.getAttribute("x")) + _0x4c765e(_0x193398.getAttribute("width"))) * _0x26065d / 100;
  var _0x97ddf9 = _0x4c765e(_0x193398.getAttribute("y")) * _0x898713 / 100;
  var _0x5e4a02 = (_0x4c765e(_0x193398.getAttribute("y")) + _0x4c765e(_0x193398.getAttribute("height"))) * _0x898713 / 100;
  if (_0x37f87f - _0x1716eb < _0x4d1629) {
    {
      if (_0x3fef2f - _0x97ddf9 < _0x4d1629) {
        {
          _0x193398.setAttribute("cursor", "nwse-resize");
        }
      } else if (_0x5e4a02 - _0x3fef2f < _0x4d1629) {
        _0x193398.setAttribute("cursor", "nesw-resize");
      }
    }
  } else if (_0x2053e7 - _0x37f87f < _0x4d1629) {
    {
      if (_0x3fef2f - _0x97ddf9 < _0x4d1629) {
        _0x193398.setAttribute("cursor", "nesw-resize");
      } else if (_0x5e4a02 - _0x3fef2f < _0x4d1629) {
        {
          _0x193398.setAttribute("cursor", "nwse-resize");
        }
      }
    }
  } else {
    {
      _0x193398.setAttribute("cursor", "move");
    }
  }
}
function _0x679fa2() {
  if (_0x4ef0ba) {
    {
      document.body.style.overflow = "hidden";
    }
  }
}
function _0x50c44c() {
  if (_0x4ef0ba) {
    document.body.style.overflow = "scroll";
  }
}
var _0x396cd7;
function _0x2f43a3(_0x44fd60) {
  var _0x29675f = true;
  _0x679fa2();
  _0x396cd7 = setTimeout(() => {
    {
      if (_0x5d0c()) {
        {
          return;
        }
      }
      let _0x2cc6dc = _0x44fd60.target;
      if (_0x2cc6dc.getAttribute("fill-opacity") !== _0x586eb1) {
        {
          _0x2cc6dc.remove();
          if (_0x44fd60.button !== 2) {
            _0x1f3edc("on mouse down");
          }
        }
      }
      _0x2cee97();
    }
  }, _0x103933);
  var _0x1a0ade = _0x44fd60.clientX;
  var _0x413eb8 = _0x44fd60.clientY;
  var _0x99856f = _0x44fd60.offsetX;
  var _0x1eba8e = _0x44fd60.offsetY;
  var _0x563282 = _0x505ac4;
  if (_0x1a0ade === undefined && _0x44fd60.touches) {
    {
      _0x563282 = 20;
      var _0x43cc07 = _0x44fd60.touches[0];
      _0x1a0ade = _0x43cc07.clientX;
      _0x413eb8 = _0x43cc07.clientY;
      var _0x3c8b5d = _0x44fd60.target.parentElement.getBoundingClientRect();
      _0x99856f = _0x43cc07.pageX - _0x3c8b5d.left;
      _0x1eba8e = _0x43cc07.pageY - (_0x3c8b5d.top + window.scrollY);
    }
  }
  var _0xbee526 = _0x1a0ade - _0x99856f;
  var _0x512a98 = _0x413eb8 - _0x1eba8e;
  var _0x186e71 = _0x44fd60.target;
  var _0x1a11ac = _0x186e71.parentElement;
  var _0x4cad41 = _0x1a11ac.clientWidth;
  var _0x227b75 = _0x1a11ac.clientHeight;
  var _0x1f992a = _0x3e6beb(_0x1a11ac);
  var _0x749221 = _0x4c765e(_0x186e71.getAttribute("x")) * _0x4cad41 / 100;
  var _0xd879e3 = _0x4c765e(_0x186e71.getAttribute("width")) * _0x4cad41 / 100;
  var _0x3be12e = _0x749221 + _0xd879e3;
  var _0x51ecce = _0x4c765e(_0x186e71.getAttribute("y")) * _0x227b75 / 100;
  var _0x142651 = _0x4c765e(_0x186e71.getAttribute("height")) * _0x227b75 / 100;
  var _0x1d4fe5 = _0x142651;
  var _0xb8f1cb = false,
    _0x541c52 = false,
    _0x1e4816 = false,
    _0x8f7a58 = false;
  if (_0x99856f - _0x749221 < _0x563282) {
    if (_0x1eba8e - _0x51ecce < _0x563282) {
      _0xb8f1cb = true;
    } else if (_0x1d4fe5 - _0x1eba8e < _0x563282) {
      _0x1e4816 = true;
    }
  } else if (_0x3be12e - _0x99856f < _0x563282) {
    if (_0x1eba8e - _0x51ecce < _0x563282) {
      _0x541c52 = true;
    } else if (_0x1d4fe5 - _0x1eba8e < _0x563282) {
      {
        _0x8f7a58 = true;
      }
    }
  }
  var _0x70fab = new Date().getTime();
  var _0x2560bf = function (_0x242b8f) {
    if (!_0x29675f) {
      {
        return;
      }
    }
    var _0xd22464 = _0x242b8f.clientX;
    var _0x57bae5 = _0x242b8f.clientY;
    if (_0x4ef0ba) {
      _0x242b8f.preventDefault();
      if (_0xd22464 === undefined) {
        var _0x43cc07 = _0x242b8f.touches[0];
        _0xd22464 = _0x43cc07.clientX;
        _0x57bae5 = _0x43cc07.clientY;
      }
    }
    if (_0xb8f1cb) {
      if (_0xd879e3 + _0x1a0ade - _0xd22464 > 0) {
        _0x186e71.setAttribute("x", _0x2ceeb3((_0x749221 - _0x1a0ade + _0xd22464) / _0x4cad41));
      }
      _0x186e71.setAttribute("width", _0x36e850((_0xd879e3 + _0x1a0ade - _0xd22464) / _0x4cad41));
      if (_0x142651 + _0x413eb8 - _0x57bae5 > 0) {
        _0x186e71.setAttribute("y", _0x2ceeb3((_0x51ecce - _0x413eb8 + _0x57bae5) / _0x227b75));
      }
      _0x186e71.setAttribute("height", _0x36e850((_0x142651 + _0x413eb8 - _0x57bae5) / _0x227b75));
    } else if (_0x8f7a58) {
      {
        if (_0xbee526 + _0x749221 - _0xd22464 > 0) {
          {
            _0x186e71.setAttribute("x", _0x2ceeb3((_0xd22464 - _0xbee526) / _0x4cad41));
            _0x186e71.setAttribute("width", _0x2ceeb3((_0x749221 + _0xbee526 - _0xd22464) / _0x4cad41));
          }
        } else {
          _0x186e71.setAttribute("width", _0x2ceeb3((_0xd879e3 - _0x1a0ade + _0xd22464) / _0x4cad41));
        }
        if (_0x512a98 + _0x51ecce - _0x57bae5 > 0) {
          _0x186e71.setAttribute("y", _0x2ceeb3((_0x57bae5 - _0x512a98) / _0x227b75));
          _0x186e71.setAttribute("height", _0x36e850((_0x512a98 + _0x51ecce - _0x57bae5) / _0x227b75));
        } else {
          _0x186e71.setAttribute("height", _0x36e850((_0x142651 - _0x413eb8 + _0x57bae5) / _0x227b75));
        }
      }
    } else if (_0x541c52) {
      if (_0xbee526 + _0x749221 - _0xd22464 > 0) {
        {
          _0x186e71.setAttribute("x", _0x2ceeb3((_0xd22464 - _0xbee526) / _0x4cad41));
          _0x186e71.setAttribute("width", _0x2ceeb3((_0x749221 + _0xbee526 - _0xd22464) / _0x4cad41));
        }
      } else {
        _0x186e71.setAttribute("width", _0x2ceeb3((_0xd879e3 - _0x1a0ade + _0xd22464) / _0x4cad41));
      }
      if (_0x142651 + _0x413eb8 - _0x57bae5 > 0) {
        _0x186e71.setAttribute("y", _0x2ceeb3((_0x51ecce - _0x413eb8 + _0x57bae5) / _0x227b75));
      }
      _0x186e71.setAttribute("height", _0x36e850((_0x142651 + _0x413eb8 - _0x57bae5) / _0x227b75));
    } else if (_0x1e4816) {
      {
        if (_0xd879e3 + _0x1a0ade - _0xd22464 > 0) {
          _0x186e71.setAttribute("x", _0x2ceeb3((_0x749221 - _0x1a0ade + _0xd22464) / _0x4cad41));
        }
        _0x186e71.setAttribute("width", _0x36e850((_0xd879e3 + _0x1a0ade - _0xd22464) / _0x4cad41));
        if (_0x512a98 + _0x51ecce - _0x57bae5 > 0) {
          _0x186e71.setAttribute("y", _0x2ceeb3((_0x57bae5 - _0x512a98) / _0x227b75));
          _0x186e71.setAttribute("height", _0x36e850((_0x512a98 + _0x51ecce - _0x57bae5) / _0x227b75));
        } else {
          {
            _0x186e71.setAttribute("height", _0x36e850((_0x142651 - _0x413eb8 + _0x57bae5) / _0x227b75));
          }
        }
      }
    } else {
      _0x186e71.setAttribute("x", _0x2ceeb3((_0x749221 - _0x1a0ade + _0xd22464) / _0x4cad41));
      _0x186e71.setAttribute("y", _0x2ceeb3((_0x51ecce - _0x413eb8 + _0x57bae5) / _0x227b75));
    }
    var _0x560331 = Number.parseFloat(_0x186e71.getAttribute("x"));
    var _0x3be12e = Number.parseFloat(_0x186e71.getAttribute("width")) + _0x560331;
    var _0xc462d6 = _0x1baa0b([_0x560331, _0x3be12e], _0x1f992a[0]);
    var _0x56ce17 = Number.parseFloat(_0x186e71.getAttribute("y"));
    var _0x1d4fe5 = Number.parseFloat(_0x186e71.getAttribute("height")) + _0x56ce17;
    var _0x272994 = _0x1baa0b([_0x56ce17, _0x1d4fe5], _0x1f992a[1]);
    _0x509155(_0x1a11ac, [_0x560331, _0x3be12e], _0xc462d6, [_0x56ce17, _0x1d4fe5], _0x272994);
    if (_0xc462d6.length === 0 && _0x272994.length === 0) {
      {
        _0x2cee97();
      }
    }
    _0x49c287(_0x186e71, _0xd22464 + _0x57bae5);
  };
  var _0x1e1b08 = function (_0x1d7722) {
    {
      _0x29675f = false;
      if (_0x396cd7) {
        clearTimeout(_0x396cd7);
      }
      _0x1d7722 = _0x1d7722 || window.event;
      _0x1d7722.preventDefault();
      var _0x1cc2dd = new Date().getTime();
      _0x540e9b(_0x186e71);
      _0x50c44c();
      _0x2cee97();
      if (_0x1d7722.button === 2) {
        _0x1a2173(document, "touchend", "mouseup", _0x1e1b08);
        _0x1a2173(document, "touchmove", "mousemove", _0x2560bf);
        return;
      }
      if (_0x1cc2dd - _0x70fab < 200) {
        _0xd206aa(_0x186e71);
      } else {
        _0x1f3edc("on mouse up");
      }
      _0x1a2173(document, "touchend", "mouseup", _0x1e1b08);
      _0x1a2173(document, "touchmove", "mousemove", _0x2560bf);
    }
  };
  _0x1fe23b(document, "touchend", "mouseup", _0x1e1b08);
  if (!_0x5d0c()) {
    {
      _0x1fe23b(document, "touchmove", "mousemove", _0x2560bf);
    }
  }
}
function _0xd206aa(_0x4cad08) {
  var _0x5a5e57 = _0x4cad08.getAttribute("fill-opacity");
  if (_0x5a5e57 !== "1") {
    _0x4cad08.setAttribute("fill-opacity", "1");
  } else {
    _0x4cad08.setAttribute("stroke", _0x1f9522);
    _0x4cad08.setAttribute("stroke-width", "2");
    _0x4cad08.setAttribute("stroke-opacity", "0.8");
    _0x4cad08.setAttribute("fill-opacity", _0x220001);
  }
  if (_0x270be5()) {
    flipToBack();
  }
}
function markSelected(_0x58bd9f) {
  var _0x12785b = _0x273087();
  if (getElementHtmlById("front-answer-value").indexOf("||") > 0) {
    var _0x2aac17 = getValueFromStorage("ANKI-SELECTED", "");
    var _0x7318d1 = _0x2aac17 ? _0x2aac17.split(",") : [];
    if (_0x58bd9f.className.indexOf(_0x12785b) > 0) {
      {
        _0x7318d1.splice(_0x7318d1.indexOf(_0x58bd9f.id), 1);
      }
    } else {
      {
        _0x7318d1.push(_0x58bd9f.id);
      }
    }
    setValueToStorage("ANKI-SELECTED", _0x7318d1.toString());
    if (_0x7318d1.length === getElementHtmlById("front-answer-value").split("||").length && _0x20d916 === "1") {
      setTimeout(function () {
        flipToBack();
      }, 100);
    }
    if (_0x58bd9f.className.indexOf(_0x12785b) > 0) {
      _0x58bd9f.className = "option";
    } else {
      {
        _0x58bd9f.className = "option " + _0x12785b;
      }
    }
  } else {
    {
      for (var _0x1c5529 of document.getElementsByClassName("option")) {
        _0x1c5529.className = "option";
      }
      _0x58bd9f.className = "option " + _0x12785b;
      setValueToStorage("ANKI-SELECTED", _0x58bd9f.id);
      if (_0x20d916 === "1") {
        setTimeout(function () {
          flipToBack();
        }, 100);
      }
    }
  }
}
function flipToBack() {
  if (_0x96bb1c) {
    return;
  }
  if (typeof pycmd !== "undefined") {
    pycmd("ans");
  } else if (typeof study !== "undefined") {
    study.drawAnswer();
  } else if (typeof AnkiDroidJS !== "undefined") {
    {
      showAnswer();
    }
  } else if (typeof webkit !== "undefined") {
    {
      webkit.messageHandlers.cb.postMessage(JSON.stringify({
        "scheme": "ankitap",
        "msg": "midCenter"
      }));
    }
  }
}
function _0x8e5672() {
  var _0x2c08d7 = "{{Tags}}";
  if (!_0x2c08d7) return;
  _0x2c08d7 = _0x2c08d7.split(" ");
  var _0x2d51a3 = "<span class=\"tag-title\">" + _tr("LABEL_FOR_TAG") + "</span>";
  for (var _0x5ed17f of _0x2c08d7) {
    if (_0x5ed17f) {
      _0x2d51a3 += "<span class=\"single-tag\">" + _0x5ed17f + "</span>";
    }
  }
  updateElementHtmlById("front-tag", _0x2d51a3);
}
function showSettings() {
  showElementById("settingsModal");
}
function hideSettings() {
  hideElementById("settingsModal");
}
function _0x6c0f98() {
  if (window.sendMessage) {
    {
      window.sendMessage2 = window.sendMessage;
      window.sendMessage = null;
    }
  } else if (typeof anki !== "undefined") {
    document.ontouchend = function (_0x2009b6) {
      if (anki.k && anki.k()) {
        _0x2009b6.preventDefault();
      }
    };
  }
}
var _0xac9b6b = new Date().getTime();
function _0x256a9d() {
  _0xac9b6b = new Date().getTime();
  var _0x2ea072 = document.activeElement;
  if (_0x2ea072 && _0x2ea072.id === "front-notes") {
    _0xac9b6b = _0xac9b6b - 400;
  }
}
function _0x509720(_0x21437a) {
  const _0x1a2cee = ["ultimate-template-cloze", "btn-container", "number-value", "number-input-and-down", "input-number_decrease", "input-number_increase", "color-picker", "answer-container", "settings-container", "close", "tab-content", "modal-content", "settings-block", "single-setting", "setting-switch", "setting-label"];
  if (_0x21437a.button !== 0) {
    {
      return;
    }
  }
  var _0x20e319 = new Date().getTime();
  if (_0x20e319 - _0xac9b6b < 300) {
    {
      var _0x177092 = _0x21437a.target;
      for (const _0x2431a6 of _0x1a2cee) {
        {
          if (_0x177092.classList.contains(_0x2431a6)) {
            {
              return;
            }
          }
        }
      }
      if (_0x177092.getAttribute("name") === "question-image-svg-wrapper") {
        return;
      }
      if (["RECT", "A", "INPUT", "LABEL", "SQUARE_INPUT", "SELECT"].includes(_0x177092.tagName.toUpperCase())) {
        {
          return;
        }
      }
      _0x3e81e6();
    }
  }
}
function _0x21f8c6() {
  const _0x12baf2 = getElementHtmlById("front-question-value").indexOf("}}") > -1;
  const _0x1da6e1 = _0x425721("span");
  return _0x12baf2 || _0x1da6e1;
}
function _0x19cb4f() {
  let _0x311a05 = getElementHtmlById("front-question-value");
  _0x311a05 = escapeHTMLChars(_0x311a05);
  const _0xa35761 = /^#+\s.*/gm;
  const _0x381a33 = /^(\s*[-*]\s+.*)+/gm;
  return _0xa35761.test(_0x311a05) && _0x381a33.test(_0x311a05);
}
function _0x4c0143() {
  return new Date().toISOString().substring(0, 10);
}
function _0x5c9a46() {
  _0x2d6508 = getValueFromStorage("ANKI-SUBSCRIBE-CODE", "-2");
  _0x410e20 = getValueFromStorage("ANKI-ENC-KEY", "");
  _0x20b153 = getValueFromStorage("ANKI-ENC-IV", "");
  _0x4b088a = getValueFromStorage("ANKI-SETTINGS-SHOW-QUESTION-TYPE", _0x46382c);
  _0x5c8540 = getValueFromStorage("ANKI-SETTINGS-HIDE-OPTIONS", _0x3e8404);
  _0x25d340 = getValueFromStorage("ANKI-SETTINGS-RANDOM-OPTIONS", _0x6b8210);
  _0x4848ff = getValueFromStorage("ANKI-SETTINGS-REVERSE-ORDER", _0x239c72);
  _0x1eb2ec = getValueFromStorage("ANKI-SETTINGS-DELAY-OPTIONS", _0x936be5);
  _0x54ff9e = getValueFromStorage("ANKI-SETTINGS-NORMAL-OPTIONS", _0x583513);
  _0x20d916 = getValueFromStorage("ANKI-SETTINGS-AUTO-FLIP", _0x41b436);
  _0x3799c7 = getValueFromStorage("ANKI-SETTINGS-FRONT-BACK-SWITCH", _0x2ca740);
  _0x556781 = getValueFromStorage("ANKI-SETTINGS-LIMIT-DESC-HEIGHT", _0x52ed43);
  showNotesInFront = getValueFromStorage("ANKI-SETTINGS-SHOW-NOTES-IN-FRONT", _0x2f2f0b);
  _0x1d2b7e = getValueFromStorage("ANKI-SETTINGS-LIMIT-ANSWER-HEIGHT", _0x3654c3);
  _0x1e4379 = getValueFromStorage("ANKI-SETTINGS-SHOW-DECK-NAME", _0x403497);
  _0xcc42f4 = getValueFromStorage("ANKI-SETTINGS-SELECT-QUESTION-ANALYSIS", _0x1e644d);
  _0xf1b4a0 = getValueFromStorage("ANKI-SETTINGS-HIDE-AUTHOR-NAME", _0x110580);
  _0x1f9522 = getValueFromStorage("ANKI-SETTINGS-IMAGE-COVER-COLOR", _0x584d63);
  _0x220001 = getValueFromStorage("ANKI-SETTINGS-IMAGE-COVER-OPACITY", _0x263ba0);
  _0x28bc35 = getValueFromStorage("ANKI-SETTINGS-IMAGE-DRAG-CREATION", _0x400b76);
  _0x3a17e2 = getValueFromStorage("ANKI-SETTINGS-HAS-NEW-VERSION", _0x1004c1);
  _0x317ceb = getValueFromStorage("ANKI-SETTINGS-CLOZE-INPUT-MODE", _0x1f5cc7);
  _0x3fe4e3 = getValueFromStorage("ANKI-SETTINGS-IMAGE-REVEAL-DIRECTION", _0x571f3d);
  _0x2b4595 = getValueFromStorage("ANKI-SETTINGS-CLOZE-DRAG-CREATION", _0x33be79);
  randomClozeFactor = getValueFromStorage("ANKI-SETTINGS-RANDOM-CLOZE-FACTOR", _0x18418e);
  _0x3ed710 = getValueFromStorage("ANKI-SETTINGS-READ-CONTENT", _0xd6ad6f);
  _0x2b818d = getValueFromStorage("ANKI-SETTINGS-LANGUAGE-PREFER", _0x538014);
  _0x29af86 = _0x2d98f8();
}
function _0x435052(_0x28e44f) {
  var _0x1783d3 = getValueFromStorage("PREFERENCE-FETCH-ON", "");
  var _0x571b17 = _0x4c0143();
  if (typeof _MyCrypt !== "undefined" || typeof decryptFront !== "undefined") {
    updateElementHtmlById("front-question-body", _tr("MESSAGE_ILLEGAL_USAGE"));
    _0x28e44f(false);
    return;
  }
  if (_0x1783d3 !== _0x571b17) {
    _0x5e717f("/subscribe/preference", undefined, function (_0x1fc221) {
      if (_0x1fc221.code === -9) {
        {
          if (!_0x45919d) {
            updateElementHtmlById("front-question-body", _tr("MESSAGE_SYNC_FAIL") + "：" + _0x1fc221.message);
          } else {
            _0x5c9a46();
          }
          _0x28e44f(false);
        }
      } else if (_0x1fc221.code === -4) {
        {
          updateElementHtmlById("front-question-body", _tr("MESSAGE_TRAIL_END"));
          _0x28e44f(false);
        }
      } else if (_0x1fc221.code !== 0) {
        {
          var _0x938ca0 = _0x1fc221.message || _tr("MESSAGE_UNLICENSED");
          updateElementHtmlById("front-question-body", _0x938ca0);
          _0x28e44f(false);
        }
      } else {
        setValueToStorage("PREFERENCE-FETCH-ON", _0x571b17);
        _0x5c9a46();
        _0x28e44f(true);
      }
    });
  } else {
    {
      _0x5c9a46();
      _0x28e44f(true);
    }
  }
}
function _0x557909(_0x572797, _0x22842d) {
  var _0x198ec0 = document.getElementById(_0x572797);
  if (_0x198ec0) {
    if (typeof _0x22842d === "boolean") {
      {
        _0x198ec0.checked = _0x22842d;
      }
    } else if (_0x198ec0.tagName.toUpperCase() === "SPAN") {
      {
        _0x198ec0.innerText = _0x22842d;
      }
    } else {
      {
        _0x198ec0.value = _0x22842d;
      }
    }
  }
}
function _0x24a73a() {
  if (_0x1f9522.indexOf("#") !== 0) {
    _0x1f9522 = "#" + _0x1f9522;
  }
  _0x557909("cover-opacity-input", _0x220001);
  _0x557909("random-cloze-factor-input", randomClozeFactor);
  setValueToStorage("ANKI-SELECTED", "");
  setValueToStorage("ANKI-QUESTION-CLOZED", "");
  if (typeof author === "undefined" && typeof AnkiDroidJS === "undefined") {
    {
      setValueToStorage("ANKI-STATIS-TOTAL-ITEMS", "0");
      setValueToStorage("ANKI-STATIS-SINGLE-CORRECT-ITEMS", "0");
      setValueToStorage("ANKI-STATIS-MULTI-CORRECT-ITEMS", "0");
      var _0xefdda5 = document.createElement("script");
      _0xefdda5.innerHTML = "var author='random9528'";
      document.head.appendChild(_0xefdda5);
      if (_0x4ef0ba) {
        document.addEventListener("click", _0x256a9d, false);
        document.addEventListener("click", _0x509720, false);
      } else {
        _0x1fe23b(document, "touchend", "mouseup", _0x509720);
        _0x1fe23b(document, "touchstart", "mousedown", _0x256a9d);
      }
    }
  } else if (typeof AnkiDroidJS !== "undefined") {
    document.addEventListener("click", _0x256a9d, false);
    document.addEventListener("click", _0x509720, false);
  }
  _0x557909("show-type", _0x4b088a === "1");
  _0x557909("show-deck-name", _0x1e4379 === "1");
  _0x557909("switch-hide-author-name", _0xf1b4a0 === "1");
  _0x557909("language-selector", _0x2b818d);
  _0x557909("cloze-input-selector", _0x317ceb);
  _0x557909("image-reveal-direction-selector", _0x3fe4e3);
  _0x557909("hide-option", _0x5c8540 === "1");
  _0x557909("random-option", _0x25d340 === "1");
  _0x557909("reverse-order", _0x4848ff === "1");
  _0x557909("delay-option", _0x1eb2ec === "1");
  _0x557909("select-question-analysis", _0xcc42f4 === "1");
  _0x557909("auto-flip", _0x20d916 === "1");
  _0x557909("limit-desc-height", _0x556781 === "1");
  _0x557909("limit-answer-height", _0x1d2b7e === "1");
  _0x557909("switch-question-and-answer", _0x3799c7 === "1");
  _0x557909("cloze-drag-creation", _0x2b4595 === "1");
  _0x557909("image-drag-creation", _0x28bc35 === "1");
  _0x557909("read-question-content", _0x3ed710 === "1");
  _0x557909("show-notes-in-front", showNotesInFront === "1");
  _0x167145("front-question-part");
  _0x167145("front-options");
  _0x167145("back-notes", "front-notes");
  _0x167145("back-answer");
}
function _0x187963() {
  return new RegExp("<img\\b[^>]*>", "i").test(getElementHtmlById("front-question-value"));
}
function _0x3d1fc7() {
  var _0x5e13bf = _0x3799c7 === "1";
  var _0x52f05d = !getElementHtmlById("front-question-value") || !getElementHtmlById("front-answer-value");
  if (_0x52f05d) {
    {
      _0x5e13bf = false;
    }
  }
  return _0x5e13bf;
}
function _0x2dea17() {
  var _0x2940ce = [];
  var _0x4d6557 = document.getElementById("front-question-body").getElementsByClassName("cloze-inactive");
  for (var _0x11ce4b of _0x4d6557) {
    var _0x4e78c3 = _0x11ce4b.getAttribute("data-ordinal");
    if (_0x4e78c3) {
      _0x2940ce.push(Number.parseInt(_0x4e78c3) - 1);
    }
  }
  return _0x2940ce;
}
var _0x3ae57b = [];
function escapeHTMLChars(_0x2f32ed) {
  return _0x2f32ed.replace(/<[\/]?pre[^>]*>/gi, "").replace(/<br\s*[\/]?[^>]*>/gi, "\n").replace(/<br\s*[\/]?[^>]*>/gi, "\n").replace(/<[\/]?span[^>]*>/gi, "").replace(/<ol[^>]*>/gi, "").replace(/<\/ol[^>]*>/gi, "\n").replace(/<ul[^>]*>/gi, "").replace(/<\/ul[^>]*>/gi, "\n").replace(/<div[^>]*>/gi, "").replace(/<\/div[^>]*>/gi, "\n").replace(/<li[^>]*>/gi, "- ").replace(/<\/li[^>]*>/gi, "\n").replace(/&nbsp;/gi, " ").replace(/&tab;/gi, " ").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&amp;/gi, "&");
}
function _0x503419() {
  _0x24a73a();
  if (_0x862ba8 === _0x35dc29) {
    var _0x29ed93 = getElementHtmlById("front-question-value");
    renderMindMap(_0x29ed93, "front-ultimate-mindmap-graph");
  } else if (_0x862ba8 !== _0x56eeab) {
    if (_0x21f8c6()) {
      _0x3ae57b = _0x2dea17();
      var _0x29ed93 = getElementHtmlById("front-question-value");
      var _0x2b48a8 = _0x291548(_0x29ed93, _0x317ceb);
      updateElementHtmlById("front-question-body", _0x2b48a8);
      if (![_0x1cc2b4, _0x58acd3].includes(_0x862ba8)) {
        _0xa7ad9e();
      }
    } else {
      {
        _0x32b6a9(false);
      }
    }
  } else {
    _0x32b6a9(_0x3d1fc7());
    var _0x170926 = _0x187963() && !getElementHtmlById("front-answer-value");
    if (_0x170926) {
      _0x28bc35 = "1";
    }
  }
  _0x493c91(_0x4b088a);
  _0x5bba84(_0x5c8540, _0x25d340, _0x1eb2ec);
  if (_0x2663be() || _0x862ba8 === _0x1e2d1a) {
    {
      updateElementHtmlById("step-show-answer-btn", _tr("LABEL_SHOW_FIRST_CLOZE"));
      showElementById("step-show-wrapper");
      if (_0x2663be()) {
        {
          updateElementHtmlById("random-cloze-btn", _tr("LABEL_RANDOM_CLOZE"));
          showElementById("random-cloze-wrapper");
        }
      }
    }
  } else if (_0x862ba8 === _0x56eeab) {
    updateElementHtmlById("random-cloze-btn", _tr("LABEL_RANDOM_CLOZE"));
    showElementById("random-cloze-wrapper");
  }
  if (_0x1e4379 === "1") {
    {
      showElementById("front-deck-wrapper");
    }
  } else {
    hideElementById("front-deck-wrapper");
  }
  if (showNotesInFront === "1") {
    showNotesContentInFront();
  }
  if (Persistence.isAvailable()) {
    var _0x45e64c = Persistence.getAllKeys();
    for (var _0x170f60 of _0x45e64c) {
      if (_0x170f60.startsWith("ANKI-CLOZE-INPUT-")) {
        setValueToStorage(_0x170f60, "");
      }
    }
  }
}
function _0x167145(_0x59c0d0, _0x1f87a1) {
  var _0x8c4489 = _0x59c0d0 + "-input";
  var _0x4dcf15 = "ANKI-STYLE-" + _0x59c0d0;
  var _0x5c8b31 = getValueFromStorage(_0x4dcf15, "");
  if (_0x5c8b31) {
    _0x2e35ef(_0x8c4489, _0x5c8b31);
    updateElementFontSize(_0x59c0d0, _0x5c8b31);
    if (_0x1f87a1) {
      updateElementFontSize(_0x1f87a1, _0x5c8b31);
    }
  } else {
    {
      var _0x2b12f2 = _0x25147a(_0x59c0d0);
      _0x2e35ef(_0x8c4489, _0x2b12f2 + "px");
    }
  }
}
function _0x2e35ef(_0x4d8574, _0x935644) {
  var _0x211bc1 = document.getElementById(_0x4d8574);
  if (_0x211bc1) {
    _0x211bc1.innerText = _0x935644;
  } else {
    return;
  }
  var _0x15d2a4 = "ANKI-STYLE-" + _0x4d8574.replace("-input", "");
  setValueToStorage(_0x15d2a4, _0x935644);
}
function switchHideOption(_0x118fad) {
  _0x342f3c(_0x118fad, "ANKI-SETTINGS-HIDE-OPTIONS");
}
function switchDelayOption(_0x22ba94) {
  _0x342f3c(_0x22ba94, "ANKI-SETTINGS-DELAY-OPTIONS");
}
function switchRandomOption(_0x3a1b4b) {
  _0x342f3c(_0x3a1b4b, "ANKI-SETTINGS-RANDOM-OPTIONS");
}
function switchReverseOrder(_0x44a4fd) {
  _0x46a075(_0x44a4fd, "ANKI-SETTINGS-REVERSE-ORDER");
}
function _0x53630d(_0x342146) {
  _0x46a075(_0x342146, "ANKI-SETTINGS-NORMAL-OPTIONS");
  var _0xb7900c = _0x273087();
  for (var _0x3a5aa0 of document.getElementsByClassName("option")) {
    {
      if (_0x3a5aa0.className.indexOf(" ") > -1) {
        {
          _0x3a5aa0.className = "option " + _0xb7900c;
        }
      }
    }
  }
}
function switchLimitDescHeight(_0x11db99) {
  _0x46a075(_0x11db99, "ANKI-SETTINGS-LIMIT-DESC-HEIGHT");
}
function _0x22ccc0(_0x1fb806, _0x3ae117) {
  if ((_0x2d6508 === "30" || _0x2d6508 === "1") && _0x33c9b2("ankiSaveFieldValue")) {
    {
      _0x5efa20.ankiSaveFieldValue(_0x1fb806, _0x3ae117);
    }
  }
}
function _0x587f70(_0x23139d) {
  if (_0x4ef0ba) {
    if (!_0x33c9b2("ankiSaveFieldValue")) {
      return;
    }
  }
  var _0x37055f = _0x23139d.target;
  _0x37055f.contentEditable = true;
  _0x37055f.focus();
}
function _0x3c78b4(_0x1ea8d8) {
  var _0x554fdb = _0x1ea8d8.target.innerHTML;
  _0x261b5c("ANKI-UPDATED-NOTES", _0x554fdb);
  if (typeof AnkiDroidJS !== "undefined") {
    {
      _0x22ccc0(4, _0x554fdb);
    }
  } else {
    {
      pycmd("save-notes::" + _0x5b29cf(_0x554fdb));
    }
  }
}
function showNotesContentInFront() {
  var _0x4ef0dc = replaceGeogebraLink(getElementHtmlById("front-notes-value"));
  if (_0x4ef0dc) {
    {
      updateElementHtmlById("front-notes", _0x4ef0dc);
    }
  } else {
    {
      document.getElementById("front-notes").setAttribute("text-placeholder", _tr("LABEL_FOR_DOUBLE_CLICK_NOTES"));
    }
  }
  document.getElementById("front-notes").addEventListener("dblclick", _0x587f70);
  document.getElementById("front-notes").addEventListener("blur", _0x3c78b4);
  showElementById("front-notes");
}
function switchShowNotesInFront(_0x4d9359) {
  _0x46a075(_0x4d9359, "ANKI-SETTINGS-SHOW-NOTES-IN-FRONT");
  if (_0x4d9359.checked) {
    showNotesContentInFront();
  } else {
    hideElementById("front-notes");
  }
}
function _0x244b49(_0x539968) {
  _0x46a075(_0x539968, "ANKI-SETTINGS-LIMIT-ANSWER-HEIGHT");
}
function switchSelectQuestionAnalysis(_0x91a1db) {
  _0x46a075(_0x91a1db, "ANKI-SETTINGS-SELECT-QUESTION-ANALYSIS");
}
function switchShowDeckName(_0x47ad0a) {
  _0x46a075(_0x47ad0a, "ANKI-SETTINGS-SHOW-DECK-NAME");
  if (_0x47ad0a.checked) {
    {
      showElementById("front-deck-wrapper");
    }
  } else {
    hideElementById("front-deck-wrapper");
  }
}
function switchShowType(_0x832b6e) {
  _0x46a075(_0x832b6e, "ANKI-SETTINGS-SHOW-QUESTION-TYPE");
  _0x493c91(_0x4b088a);
}
function switchAutoFlip(_0x28eaf8) {
  _0x46a075(_0x28eaf8, "ANKI-SETTINGS-AUTO-FLIP");
}
function setValueToStorage(_0x208d7e, _0x420419) {
  _0x2b5e4c[_0x208d7e] = _0x420419;
  if (Persistence.isAvailable()) {
    {
      Persistence.setItem(_0x208d7e, _0x420419);
    }
  }
}
function getValueFromStorage(_0x30b9b8, _0x471b0a) {
  if (Persistence.isAvailable()) {
    var _0x32cdc2 = Persistence.getItem(_0x30b9b8);
    if (!_0x32cdc2) {
      Persistence.setItem(_0x30b9b8, _0x471b0a);
      return _0x471b0a;
    } else {
      {
        return _0x32cdc2;
      }
    }
  } else {
    return _0x2b5e4c[_0x30b9b8] || _0x471b0a;
  }
}
function _0x5b5c70(_0x437e4a) {
  setValueToStorage("ANKI-SUBSCRIBE-CODE", (_0x437e4a.subscribeType || 0) + "");
  setValueToStorage("ANKI-ENC-KEY", _0x437e4a.encKey || "");
  setValueToStorage("ANKI-ENC-IV", _0x437e4a.encIv || "");
  if (_0x437e4a.subscribeType === 1 || _0x437e4a.subscribeType === 2) {
    _0x49d944 = {
      "trailMode": true,
      "endTime": _0x437e4a.subscribeEndTime
    };
  } else {
    _0x49d944 = {};
  }
  var _0x1780d7 = _0x437e4a.latestVersion;
  if (Number.parseInt(_0x1780d7 || 0) > _0x483e5b) {
    {
      _0x3a17e2 = "1";
    }
  } else {
    _0x3a17e2 = "0";
  }
  setValueToStorage("ANKI-SETTINGS-HAS-NEW-VERSION", _0x3a17e2);
  setValueToStorage("ANKI-SETTINGS-LATEST-VERSION", _0x1780d7);
  const _0x3dd7f2 = JSON.parse(_0x437e4a.preference);
  for (var _0xfd4c39 in _0x3dd7f2) {
    if (_0x3dd7f2.hasOwnProperty(_0xfd4c39)) {
      {
        setValueToStorage(_0xfd4c39, _0x3dd7f2[_0xfd4c39]);
      }
    }
  }
}
function _0x74072e(_0x854909) {
  try {
    {
      const _0x3fe80c = _0x854909.split("").reverse().join("");
      const _0x4fe0ef = Number.parseInt(_0xfb0986.substring(0, 14)) * 300 + "";
      let _0xa45c71 = aesjs.utils.utf8.toBytes(_0x4fe0ef);
      const _0x35ace = new aesjs.ModeOfOperation.ctr(_0xa45c71, new aesjs.Counter(9527));
      var _0x3e8c60 = aesjs.utils.hex.toBytes(_0x3fe80c);
      var _0x246992 = _0x35ace.decrypt(_0x3e8c60);
      var _0x1b305c = aesjs.utils.utf8.fromBytes(_0x246992);
      return JSON.parse(_0x1b305c);
    }
  } catch (_0x255b57) {
    return {};
  }
}
function _0x5e717f(_0x3dd972, _0x2fddc5, _0x350895) {
  var _0x71ecb5 = _0x1b806c + _0x3dd972 + "?version=" + _0x483e5b + "&order_id=" + _0xfb0986;
  var _0x20918c = _0x2fddc5 !== undefined ? "POST" : "GET";
  var _0x28fb48 = new XMLHttpRequest();
  _0x28fb48.open(_0x20918c, _0x71ecb5, true);
  _0x28fb48.setRequestHeader("X-Ultimate-Agent", "ultimate-template-client");
  if (_0x5e4e05) {
    _0x28fb48.setRequestHeader("x-device-id", _0x5e4e05);
  }
  _0x28fb48.onreadystatechange = function () {
    if (_0x28fb48.readyState === 4) {
      if (_0x28fb48.status === 200) {
        var _0x50a620 = _0x28fb48.responseText;
        var _0x25a035 = _0x74072e(_0x50a620);
        if (_0x25a035.code === 0) {
          _0x5b5c70(_0x25a035.data);
          setValueToStorage("ANKI-LOCAL-DATA-EXPIRED", "1");
        }
        if (_0x350895) {
          {
            _0x350895(_0x25a035);
          }
        }
      } else {
        {
          if (_0x350895) {
            {
              return _0x350895({
                "code": -9,
                "message": _0x28fb48.status
              });
            }
          }
        }
      }
    }
  };
  _0x28fb48.onerror = function () {
    if (_0x350895) {
      return _0x350895({
        "code": -9,
        "message": "XHR-Error"
      });
    }
  };
  if (_0x20918c === "POST") {
    {
      _0x28fb48.setRequestHeader("Content-Type", "application/json");
      _0x28fb48.send(JSON.stringify(_0x2fddc5));
    }
  } else {
    _0x28fb48.send();
  }
}
function _0x46a075(_0x58339c, _0x366f41) {
  var _0x5ecd66 = _0x58339c.checked ? "1" : "0";
  _0x5e717f("/subscribe/preference", {
    "key": _0x366f41,
    "value": _0x5ecd66
  });
  setValueToStorage(_0x366f41, _0x5ecd66);
  if (["ANKI-SETTINGS-RANDOM-OPTIONS", "ANKI-SETTINGS-DELAY-OPTIONS", "ANKI-SETTINGS-HIDE-OPTIONS"].includes(_0x366f41)) {
    setValueToStorage("ANKI-SELECTED", "");
  }
  if (_0x366f41 === "ANKI-SETTINGS-HIDE-OPTIONS") {
    {
      _0x5c8540 = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-DELAY-OPTIONS") {
    {
      _0x1eb2ec = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-RANDOM-OPTIONS") {
    {
      _0x25d340 = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-REVERSE-ORDER") {
    {
      _0x4848ff = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-NORMAL-OPTIONS") {
    _0x54ff9e = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-SHOW-QUESTION-TYPE") {
    _0x4b088a = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-AUTO-FLIP") {
    _0x20d916 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-FRONT-BACK-SWITCH") {
    _0x3799c7 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-LIMIT-DESC-HEIGHT") {
    _0x556781 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-SHOW-NOTES-IN-FRONT") {
    {
      showNotesInFront = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-LIMIT-ANSWER-HEIGHT") {
    _0x1d2b7e = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-SHOW-DECK-NAME") {
    _0x1e4379 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-SELECT-QUESTION-ANALYSIS") {
    _0xcc42f4 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-HIDE-AUTHOR-NAME") {
    {
      _0xf1b4a0 = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-IMAGE-DRAG-CREATION") {
    {
      _0x28bc35 = _0x5ecd66;
    }
  } else if (_0x366f41 === "ANKI-SETTINGS-CLOZE-DRAG-CREATION") {
    _0x2b4595 = _0x5ecd66;
  } else if (_0x366f41 === "ANKI-SETTINGS-READ-CONTENT") {
    _0x3ed710 = _0x5ecd66;
  }
  return _0x5ecd66;
}
function _0x342f3c(_0x4633a6, _0x1e23f7) {
  _0x46a075(_0x4633a6, _0x1e23f7);
  _0x5bba84(_0x5c8540, _0x25d340, _0x1eb2ec, _0x54ff9e);
}
function _0x493c91(_0x4b088a) {
  var _0x3fa97b = " ";
  if (_0x862ba8 === _0x239ce3) {
    _0x3fa97b = _tr("QUESTION_TYPE_CLOZE");
  } else if (_0x862ba8 === _0x56eeab) {
    _0x3fa97b = _tr("QUESTION_TYPE_ESSAY_QUESTION");
  } else if (_0x862ba8 === _0x1cc2b4) {
    _0x3fa97b = _tr("QUESTION_TYPE_SELECT_MULTI");
  } else if (_0x862ba8 === _0x58acd3) {
    {
      _0x3fa97b = _tr("QUESTION_TYPE_SELECT_SINGLE");
    }
  } else if (_0x862ba8 === _0x58cff6) {
    _0x3fa97b = _tr("QUESTION_TYPE_SELECT_RIGHT_WRONG");
  } else if (_0x862ba8 === _0x1e2d1a) {
    {
      _0x68995e();
      _0x3fa97b = _tr("QUESTION_TYPE_IMAGE_COVER");
    }
  } else if (_0x862ba8 === _0x4107db) {
    {
      _0x3fa97b = _tr("QUESTION_TYPE_IMAGE_MN");
    }
  } else if (_0x862ba8 === _0x4d2865) {
    _0x3fa97b = _tr("QUESTION_TYPE_IMAGE_CLOZE");
  } else if (_0x862ba8 === _0x35dc29) {
    _0x3fa97b = _tr("QUESTION_TYPE_MINDMAP");
  }
  var _0x6669d9 = _0x4b088a === "1" ? _0x3fa97b : " ";
  updateElementHtmlById("question-type", _0x6669d9);
  setValueToStorage("ANKI-SETTINGS-QUESTION-TYPE-TEXT", _0x6669d9);
  setValueToStorage("ANKI-SETTINGS-QUESTION-TYPE", _0x862ba8);
}
function _0x201d51() {
  return [_0x58cff6, _0x1cc2b4, _0x58acd3].includes(_0x862ba8);
}
function isNonExcludeRandomOptionMode() {
  return !getElementHtmlById("front-answer-value").startsWith("::random::");
}
function _0x356759() {
  return [_0x56eeab, _0x1e2d1a, _0x4d2865].includes(_0x862ba8);
}
function _0x5667c6() {
  return [_0x1e2d1a, _0x4d2865, _0x4107db].includes(_0x862ba8);
}
function _0x4a6f2e(_0x5245d0) {
  var _0x1e9a11 = "<ul class=\"tabs\">\n      <li>\n        <input type=\"radio\" name=\"tabs\" id=\"tab1\"" + (_0x5245d0 === "tab1" ? " checked " : "") + " />\n" + "        <label for=\"tab1\">" + _tr("SETTINGS_LABEL_FUNCTION") + "</label>\n" + "        <div id=\"tab-content1\" class=\"tab-content\">\n" + "          <span class=\"close\" onclick=\"hideSettings()\">&times;</span>" + "<div class=\"modal-content\">\n" + "    <div class=\"settings-block\">\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_SHOW_DECK_NAME") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"show-deck-name\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchShowDeckName(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_SHOW_QUESTION_TYPE") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"show-type\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchShowType(this)\">\n" + "        </div>\n" + "      </div>";
  if (_0x201d51()) {
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_HIDE_QUESTION_OPTIONS") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"hide-option\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchHideOption(this)\">\n" + "        </div>\n" + "      </div>\n";
    if (isNonExcludeRandomOptionMode()) {
      _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_RANDOM_QUESTION_OPTIONS") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"random-option\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchRandomOption(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_RESTORE_RANDOM_OPTIONS") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"reverse-order\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchReverseOrder(this)\">\n" + "        </div>\n" + "      </div>\n";
    }
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_DELAY_QUESTION_OPTIONS") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"delay-option\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchDelayOption(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_SELECTION_STATISTICS") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"select-question-analysis\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchSelectQuestionAnalysis(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_AUTO_FLIP") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"auto-flip\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchAutoFlip(this)\">\n" + "        </div>\n" + "      </div>\n";
  } else if (_0x2663be()) {
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_CLOZE_ENABLE_INPUT") + "</div>\n" + "        <div class=\"setting-selection\">\n" + "            <select onchange=\"switchClozeInput(this)\" id=\"cloze-input-selector\">\n" + "               <option value=\"0\">" + _tr("SETTINGS_LABEL_CLOZE_INPUT_DISABLE") + "</option>\n" + "               <option value=\"1\">" + _tr("SETTINGS_LABEL_CLOZE_INPUT_BLOCK") + "</option>\n" + "               <option value=\"2\">" + _tr("SETTINGS_LABEL_CLOZE_INPUT_LINE") + "</option>\n" + "            </select>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_CLOZE_DRAG_CREATION") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"cloze-drag-creation\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchClozeDragCreation(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_CLOZE_RANDOM_FACTOR") + "</div>\n" + "        <div class=\"number-input-and-down\">\n" + "          <span class=\"input-number_decrease\" onclick=\"adjustRandomClozeFactor(-0.1)\">-</span>\n" + "          <span class=\"number-value\" id=\"random-cloze-factor-input\"></span>" + "          <span class=\"input-number_increase\" onclick=\"adjustRandomClozeFactor(0.1)\">+</span>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_IMAGE_DRAG_CREATION") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"image-drag-creation\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchImageDragCreation(this)\">\n" + "        </div>\n" + "      </div>\n";
  } else if (_0x356759()) {
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_IMAGE_DRAG_CREATION") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"image-drag-creation\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchImageDragCreation(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_CLOZE_DRAG_CREATION") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"cloze-drag-creation\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchClozeDragCreation(this)\">\n" + "        </div>\n" + "      </div>\n";
  }
  if (_0x5667c6()) {
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_IMAGE_REVEAL_DIRECTION") + "</div>\n" + "        <div class=\"setting-selection\">\n" + "            <select onchange=\"switchImageRevealDirection(this)\" id=\"image-reveal-direction-selector\">\n" + "               <option value=\"0\">" + _tr("SETTINGS_LABEL_UP_DOWN_THEN_LEFT_RIGHT") + "</option>\n" + "               <option value=\"1\">" + _tr("SETTINGS_LABEL_LEFT_RIGHT_THEN_UP_DOWN") + "</option>\n" + "            </select>\n" + "        </div>\n" + "      </div>\n";
  }
  if (_0x862ba8 !== _0x56eeab) {
    {
      _0x1e9a11 = _0x1e9a11 + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_DESC_LIMIT_HEIGHT") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"limit-desc-height\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchLimitDescHeight(this)\">\n" + "        </div>\n" + "      </div>\n";
    }
  } else {
    _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_ANSWER_LIMIT_HEIGHT") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"limit-answer-height\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchLimitAnswerHeight(this)\">\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_SWITCH_QUESTION_AND_NOTE") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"switch-question-and-answer\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchQuestionAndNotes(this)\">\n" + "        </div>\n" + "      </div>\n";
  }
  _0x1e9a11 = _0x1e9a11 + "" + "      <div class=\"single-setting\">\n" + "        <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_NOTES_IN_FRONT") + "</div>\n" + "        <div class=\"setting-switch\">\n" + "          <input id=\"show-notes-in-front\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchShowNotesInFront(this)\">\n" + "        </div>\n" + "      </div>\n";
  _0x1e9a11 = _0x1e9a11 + "    </div>\n" + "  </div>\n" + "</div>\n" + "</li>\n" + "<li>\n" + "        <input type=\"radio\" name=\"tabs\" id=\"tab2\"" + (_0x5245d0 === "tab2" ? " checked " : "") + " />\n" + "        <label for=\"tab2\">" + _tr("SETTINGS_LABEL_STYLE") + "</label>\n" + "        <div id=\"tab-content2\" class=\"tab-content\">\n" + "          <span class=\"close\" onclick=\"hideSettings()\">&times;</span>\n" + "          <div class=\"modal-content\">\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_HIDE_NOTE_TYPE_AUTHOR") + "</div>\n" + "              <div class=\"setting-switch\">\n" + "                <input id=\"switch-hide-author-name\" class=\"mui-switch mui-switch-anim\" type=\"checkbox\" onchange=\"switchHideAuthorName(this)\">\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_SELECT_LANGUAGE") + "</div>\n" + "              <div class=\"setting-selection\">\n" + "                <select onchange=\"switchLanguage(this)\" id=\"language-selector\">\n" + "                   <option value=\"FOLLOW\">" + _tr("SETTINGS_LABEL_FOLLOW_SYSTEM") + "</option>\n" + "                   <option value=\"SIM-CH\">简体中文</option>\n" + "                   <option value=\"ENGLISH\">English</option>\n" + "                </select>\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_QUESTION_FONT_SIZE") + "</div>\n" + "              <div class=\"number-input-and-down\">\n" + "                <span class=\"input-number_decrease\" onclick=\"adjustFontSizeByOffset('front-question-part', -1)\">-</span>\n" + "                <span class=\"number-value\" id=\"front-question-part-input\"></span>" + "                <span class=\"input-number_increase\" onclick=\"adjustFontSizeByOffset('front-question-part', 1)\">+</span>\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_OPTIONS_FONT_SIZE") + "</div>\n" + "              <div class=\"number-input-and-down\">\n" + "                <span class=\"input-number_decrease\" onclick=\"adjustFontSizeByOffset('front-options', -1)\">-</span>\n" + "                <span class=\"number-value\" id=\"front-options-input\"></span>" + "                <span class=\"input-number_increase\" onclick=\"adjustFontSizeByOffset('front-options', 1)\">+</span>\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_ANSWER_FONT_SIZE") + "</div>\n" + "              <div class=\"number-input-and-down\">\n" + "                <span class=\"input-number_decrease\" onclick=\"adjustFontSizeByOffset('back-answer', -1)\">-</span>\n" + "                <span class=\"number-value\" id=\"back-answer-input\"></span>" + "                <span class=\"input-number_increase\" onclick=\"adjustFontSizeByOffset('back-answer', 1)\">+</span>\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_DESC_FONT_SIZE") + "</div>\n" + "              <div class=\"number-input-and-down\">\n" + "                <span class=\"input-number_decrease\" onclick=\"adjustFontSizeByOffset('back-notes', -1)\">-</span>\n" + "                <span class=\"number-value\" id=\"back-notes-input\"></span>" + "                <span class=\"input-number_increase\" onclick=\"adjustFontSizeByOffset('back-notes', 1)\">+</span>\n" + "              </div>\n" + "            </div>\n" + "            <div class=\"cover-color-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_IMAGE_COVER_COLOR") + "</div>\n" + "              <div class=\"color-picker-container\">" + getColorPickers() + "</div>" + "            </div>\n" + "            <div class=\"single-setting\">\n" + "              <div class=\"setting-label\">" + _tr("SETTINGS_LABEL_IMAGE_COVER_OPACITY") + "</div>\n" + "              <div class=\"number-input-and-down\">\n" + "                <span class=\"input-number_decrease\" onclick=\"adjustCoverOpacity(-0.1)\">-</span>\n" + "                <span class=\"number-value\" id=\"cover-opacity-input\"></span>" + "                <span class=\"input-number_increase\" onclick=\"adjustCoverOpacity(0.1)\">+</span>\n" + "              </div>\n" + "            </div>\n" + "          </div>\n" + "        </div>\n" + "      </li>\n" + "    </ul>";
  updateElementHtmlById("settingsModal", _0x1e9a11);
}
function updateCoverColor(_0x312d60) {
  var _0x166634 = "ANKI-SETTINGS-IMAGE-COVER-COLOR";
  _0x5e717f("/subscribe/preference", {
    "key": _0x166634,
    "value": _0x312d60.replace("#", "")
  });
  setValueToStorage(_0x166634, _0x312d60);
  _0x1f9522 = _0x312d60;
  var _0x1b0240 = _0x596dfd();
  for (var _0x5645d2 of _0x1b0240) {
    {
      _0x5645d2.setAttribute("fill", _0x312d60);
      _0x5645d2.setAttribute("stroke", _0x312d60);
    }
  }
}
function getColorPickers() {
  var _0x54c521 = function (_0x5b97bb, _0x367f97) {
    {
      return "<div class=\"color-picker\" style=\"background-color: " + _0x367f97 + "\" onclick=\"updateCoverColor('" + _0x367f97 + "')\">" + _0x5b97bb + "</div>";
    }
  };
  var _0x5461c2 = "";
  _0x5461c2 += _0x54c521(_tr("COLOR_RED"), "#FF0000");
  _0x5461c2 += _0x54c521(_tr("COLOR_ORANGE"), "#FF7F00");
  _0x5461c2 += _0x54c521(_tr("COLOR_YELLOW"), "#FFFF00");
  _0x5461c2 += _0x54c521(_tr("COLOR_GREEN"), "#00FF00");
  _0x5461c2 += _0x54c521(_tr("COLOR_CYAN"), "#00FFFF");
  _0x5461c2 += _0x54c521(_tr("COLOR_BLUE"), "#0000FF");
  _0x5461c2 += _0x54c521(_tr("COLOR_PURPLE"), "#8B00FF");
  _0x5461c2 += _0x54c521(_tr("COLOR_GRAY"), "#C0C0C0");
  return _0x5461c2;
}
function _0x121a8e() {
  var _0x1314d2 = _tr("LABEL_FOR_VERSION") + _0x483e5b;
  if (_0x3a17e2 === "1" && Number.parseInt(getValueFromStorage("ANKI-SETTINGS-LATEST-VERSION") || "0") > _0x483e5b) {
    _0x1314d2 = _0x1314d2 + "（<a href=\"https://anki.zhangsn.me/anki/template?languagePrefer=" + _0x2b818d + "&orderId=" + _0xfb0986 + "\">" + _tr("LABEL_FOR_UPDATE") + "</a>）";
  }
  _0x1314d2 = _0x1314d2 + (_0xf1b4a0 === "1" ? "" : _tr("LABEL_FOR_AUTHOR"));
  if (_0x49d944.trailMode === true) {
    if (new Date().getTime() < new Date(_0x49d944.endTime).getTime()) {
      _0x1314d2 = _0x1314d2 + "，<a href=\"javascript:showSettings();\" class=\"note-settings-icon\">" + _tr("LABEL_FOR_SETTINGS") + "</a>";
      setValueToStorage("ANKI-TRAIL-EXPIRED", "0");
    } else {
      _0x96bb1c = true;
      setValueToStorage("ANKI-TRAIL-EXPIRED", "1");
      updateElementHtmlById("front-question-body", _tr("MESSAGE_TRAIL_END"));
    }
    var _0x368db8 = new Date(_0x49d944.endTime).toLocaleString(_0x29af86);
    _0x1314d2 = _0x1314d2 + "<br><br><span class=\"trail-info\">" + _tr("LABEL_FOR_TRAIL") + _0x368db8 + "</span>";
  } else {
    setValueToStorage("ANKI-TRAIL-EXPIRED", "0");
    _0x1314d2 = _0x1314d2 + "，<a href=\"javascript:showSettings();\" class=\"note-settings-icon\">" + _tr("LABEL_FOR_SETTINGS") + "</a>";
  }
  updateElementHtmlById("front-footer", _0x1314d2);
  updateElementHtmlById("show-answer-btn", _tr("LABEL_FOR_SHOW_ANSWER"));
}
function _0x3d6070() {
  var _0x4e158c = getElementHtmlById("front-deck-value").split("::");
  var _0x239c21 = _tr("LABEL_FOR_CURRENT_DECK");
  for (var _0x45e0fd = 0; _0x45e0fd < _0x4e158c.length; _0x45e0fd++) {
    var _0x5bba9d = _0x4e158c[_0x45e0fd];
    _0x239c21 += "<span class=\"single-deck\">" + _0x5bba9d + "</span>";
    if (_0x45e0fd !== _0x4e158c.length - 1) {
      _0x239c21 += "<span class=\"path-seperator\">></span>";
    }
  }
  updateElementHtmlById("front-deck", _0x239c21);
}
function isImageCover(_0x4d0d43) {
  if (_0x4d0d43) {
    {
      return _0x4d0d43.includes("\"sX\":") && _0x4d0d43.includes("\"sY\":") && _0x4d0d43.includes("\"w\":") && _0x4d0d43.includes("\"h\":");
    }
  } else {
    {
      return false;
    }
  }
}
function _0x46f03f(_0x14e75d, _0x3eddf4) {
  var _0x46c891 = document.getElementsByClassName(_0x14e75d);
  if (_0x46c891.length === 0) {
    {
      return false;
    }
  }
  for (var _0xd32482 of _0x46c891) {
    var _0x161200 = _0xd32482.getElementsByTagName("img");
    if (_0x161200.length !== 1) {
      return false;
    } else {
      {
        if (!_0x161200[0].src.endsWith(_0x3eddf4)) {
          return false;
        }
      }
    }
  }
  return true;
}
function _0x5556ff() {
  return _0x46f03f("io-overlay", "svg") && _0x46f03f("io-original", "jpg");
}
function isMarginNoteExported() {
  return getElementHtmlById("front-question-part").indexOf("<a href=\"marginnote3app://note/") > 0;
}
function _0x425721(_0x3d06a0, _0x45280b = "ultimate-template-cloze") {
  return document.querySelector(_0x3d06a0 + "." + _0x45280b) !== null;
}
function _0xf1022a() {
  if (isMarginNoteExported()) {
    hideElementById("front-dot");
  }
  if (_0x5556ff()) {
    {
      _0x862ba8 = _0x4107db;
      hideElementById("front-dot");
      return;
    }
  }
  var _0x3ba913 = getElementHtmlById("front-options-value");
  var _0x27805e = _0x425721("rect");
  if (isImageCover(_0x3ba913) || _0x27805e) {
    if (_0x21f8c6()) {
      {
        _0x862ba8 = _0x4d2865;
      }
    } else {
      {
        _0x862ba8 = _0x1e2d1a;
        hideElementById("front-dot");
      }
    }
    return;
  }
  var _0x3a4c10 = _0x3ba913.split("||").sort();
  if (_0x3a4c10.length === 1) {
    {
      if (_0x19cb4f()) {
        _0x862ba8 = _0x35dc29;
      } else if (_0x21f8c6()) {
        _0x862ba8 = _0x239ce3;
      } else {
        _0x862ba8 = _0x56eeab;
      }
    }
  } else {
    if (getElementHtmlById("front-answer-value").indexOf("||") === -1) {
      var _0x35dcb9 = _0x3a4c10.toString().toLowerCase();
      if (_0x35dcb9 === _tr("OPTIONS_KEYWORD_1") || _0x35dcb9 === _tr("OPTIONS_KEYWORD_2")) {
        _0x862ba8 = _0x58cff6;
      } else {
        {
          _0x862ba8 = _0x58acd3;
        }
      }
    } else {
      {
        _0x862ba8 = _0x1cc2b4;
      }
    }
  }
}
function switchQuestionAndNotes(_0x54f438) {
  _0x46a075(_0x54f438, "ANKI-SETTINGS-FRONT-BACK-SWITCH");
  _0x32b6a9(_0x54f438.checked);
}
function switchLanguage(_0xa3381e) {
  var _0x4055eb = _0xa3381e.value;
  _0x5e717f("/subscribe/preference", {
    "key": "ANKI-SETTINGS-LANGUAGE-PREFER",
    "value": _0x4055eb
  });
  _0x2b818d = _0x4055eb;
  _0x29af86 = _0x2d98f8();
  setValueToStorage("ANKI-SETTINGS-LANGUAGE-PREFER", _0x2b818d);
  _0x12dcf1("tab2");
}
function switchHideAuthorName(_0x17b6c4) {
  _0x46a075(_0x17b6c4, "ANKI-SETTINGS-HIDE-AUTHOR-NAME");
  _0x121a8e();
}
function _0x261b5c(_0x5f38be, _0x1cb6d9) {
  setValueToStorage(_0x5f38be, btoa(encodeURIComponent(_0x1cb6d9)));
}
function randomCloze() {
  if (_0x862ba8 === _0x56eeab) {
    {
      updateElementHtmlById("step-show-answer-btn", _tr("LABEL_SHOW_FIRST_CLOZE"));
      showElementById("step-show-wrapper");
      _0x862ba8 = _0x239ce3;
      _0x493c91(_0x4b088a);
      _0x4a6f2e("tab1");
      _0x24a73a();
    }
  }
  var _0x1f4f38 = getElementHtmlById("front-question-value");
  var _0xef8604 = _0x291548(_0x1f4f38, _0x1f5cc7);
  var _0x1267bc = _0x406d85(_0xef8604, false, false);
  var _0x182399 = /\b[a-zA-Z0-9]+\b(?![^<]*>)|[\u4e00-\u9fa5]/g;
  _0x1267bc = _0x1267bc.replace(_0x182399, function (_0x49aa7a) {
    var _0x55e0fb = Math.ceil(Math.random() * 100) <= Number.parseFloat(randomClozeFactor) * 100;
    if (_0x55e0fb) {
      return _0x5794bd(_0x49aa7a);
    } else {
      {
        return _0x49aa7a;
      }
    }
  }).replace(/}}\{\{/g, "");
  _0x261b5c("ANKI-RERENDERED-QUESTION", _0x1267bc);
  _0xef8604 = _0x291548(_0x1267bc, _0x317ceb);
  updateElementHtmlById("front-question-body", _0xef8604);
  _0xa7ad9e();
}
function stepShowAnswerAction() {
  var _0x3a12bd = document.getElementById("front-question-body");
  if (!_0x3a12bd) {
    return -1;
  }
  var _0x3780cb = _0x3a12bd.getElementsByClassName("ultimate-template-cloze");
  _0x3780cb = _0x170022(_0x3780cb);
  var _0x40d217 = _0x3780cb.length;
  if (_0x40d217 === 0) {
    {
      return;
    }
  }
  for (var _0x17d20b = 0; _0x17d20b < _0x3780cb.length; _0x17d20b++) {
    {
      var _0x56df25 = _0x3780cb[_0x17d20b];
      if (_0x56df25.tagName.toUpperCase() === "SPAN") {
        if (_0x317ceb === "1") {
          var _0x1eb5cb = _0x56df25.getElementsByTagName("input")[0];
          if (!_0x1eb5cb || !_0x1eb5cb.value) {
            var _0x2af829 = _0x56df25.getElementsByTagName("cloze-origin")[0].innerText;
            _0x1eb5cb.value = _0x2af829;
            var _0x258bad = _0x2af829.split("");
            var _0x135163 = _0x56df25.getElementsByTagName("square_input");
            for (let _0x45e0fd = 0; _0x45e0fd < _0x135163.length; _0x45e0fd++) {
              _0x135163[_0x45e0fd].innerText = _0x258bad[_0x45e0fd] ? _0x258bad[_0x45e0fd] : "";
            }
            _0x40d217 = _0x17d20b;
            break;
          }
        } else {
          if (!_0x56df25.classList.contains("show")) {
            {
              _0x56df25.classList.add("show");
              _0x40d217 = _0x17d20b;
              break;
            }
          }
        }
      } else if (_0x56df25.tagName.toUpperCase() === "RECT") {
        {
          if (_0x56df25.getAttribute("fill-opacity") === "1") {
            _0x56df25.setAttribute("stroke", _0x1f9522);
            _0x56df25.setAttribute("stroke-width", "2");
            _0x56df25.setAttribute("stroke-opacity", "0.8");
            _0x56df25.setAttribute("fill-opacity", _0x220001);
            _0x40d217 = _0x17d20b;
            break;
          }
        }
      }
    }
  }
  if (_0x40d217 < _0x3780cb.length - 1) {
    updateElementHtmlById("step-show-answer-btn", _tr("LABEL_SHOW_NEXT_CLOZE"));
  } else {
    flipToBack();
  }
}
function _0x3e81e6() {}
function switchStepShowAnswer(_0x801f66) {
  _0x46a075(_0x801f66, "ANKI-SETTINGS-STEP-SHOW-ANSWER");
  if (_0x801f66.checked) {
    updateElementHtmlById("step-show-answer-btn", _tr("LABEL_SHOW_FIRST_CLOZE"));
    showElementById("step-show-wrapper");
  } else {
    {
      _0x47b4c8();
      updateElementHtmlById("step-show-answer-btn", "");
      hideElementById("step-show-wrapper");
    }
  }
}
function _0x464eb5(_0x2473e5, _0x211143, _0x101b53) {
  var _0x22d6a4 = _0x211143.value;
  _0x5e717f("/subscribe/preference", {
    "key": _0x2473e5,
    "value": _0x22d6a4
  }, function () {
    _0x101b53(_0x22d6a4);
  });
  setValueToStorage(_0x2473e5, _0x22d6a4);
  _0x503419();
}
function switchImageRevealDirection(_0x46c0da) {
  _0x464eb5("ANKI-SETTINGS-IMAGE-REVEAL-DIRECTION", _0x46c0da, _0x4a5aa3 => {
    _0x3fe4e3 = _0x4a5aa3;
  });
}
function switchClozeInput(_0x31866e) {
  _0x464eb5("ANKI-SETTINGS-CLOZE-INPUT-MODE", _0x31866e, _0x119447 => {
    {
      _0x317ceb = _0x119447;
    }
  });
}
function showElementById(_0x4fb470) {
  document.getElementById(_0x4fb470).style.display = "block";
}
function hideElementById(_0x2ba150) {
  document.getElementById(_0x2ba150).style.display = "none";
}
function updateElementHtmlById(_0xfde0c9, _0x5236ec) {
  document.getElementById(_0xfde0c9).innerHTML = _0x5236ec;
}
function getElementHtmlById(_0x5baacd) {
  return document.getElementById(_0x5baacd).innerHTML.trim();
}
function _0xdb5d7(_0x1b6677) {
  return document.getElementById(_0x1b6677).innerText.trim();
}
function _0x54f0b5(_0x40812e) {
  return _0x40812e.match(/\{\{[\s\S]*?}}/g) || [];
}
function _0x5794bd(_0x188828) {
  return "{".repeat(2) + _0x188828 + "}".repeat(2);
}
function _0x288141(_0x52f313) {
  var _0x135e10 = _0x52f313.getElementsByTagName("input");
  for (var _0x2b0dba of _0x135e10) {
    _0x2b0dba.remove();
  }
  var _0x23ba2b = _0x52f313.getElementsByTagName("square_input");
  for (var _0x160cf5 of _0x23ba2b) {
    _0x160cf5.remove();
  }
  var _0x203253 = _0x52f313.getElementsByTagName("cloze-origin");
  if (_0x203253[0]) {
    return _0x203253[0].innerText;
  } else {
    return _0x52f313.innerHTML;
  }
}
function _0x406d85(_0x2a87db, _0x437492, _0x4d1e58) {
  var _0x4c36d6 = document.createElement("div");
  _0x4c36d6.id = "front-question-copy";
  _0x4c36d6.innerHTML = _0x2a87db;
  var _0x1ddeff = _0x4c36d6.getElementsByClassName("cloze");
  while (_0x1ddeff.length > 0) {
    {
      var _0x34f167 = _0x1ddeff[0];
      if (_0x437492) {
        var _0x2f88ab = _0x288141(_0x34f167);
        _0x34f167.outerHTML = _0x5794bd(_0x2f88ab);
      } else {
        {
          _0x34f167.outerHTML = _0x34f167.innerHTML;
        }
      }
    }
  }
  var _0xe571fc = _0x4c36d6.getElementsByTagName("input");
  for (var _0x47812d of _0xe571fc) {
    if (_0x47812d.id === "global-input") {
      {
        _0x47812d.remove();
      }
    }
  }
  if (_0x4d1e58) {
    const _0xab6b07 = _0x4c36d6.getElementsByClassName("question-image-wrapper");
    while (_0xab6b07.length > 0) {
      const _0x76c58d = _0xab6b07[0];
      var _0x156da2 = _0x76c58d.getElementsByTagName("img");
      _0x76c58d.outerHTML = _0x156da2[0].outerHTML;
    }
  }
  return _0x4c36d6.innerHTML;
}
function _0x5098c3(_0x26529f) {
  var _0x535945 = document.getElementById("front-question-body").getElementsByClassName("cloze cloze-noborder");
  for (var _0x33a584 of _0x535945) {
    if (_0x33a584.id === _0x26529f) {
      {
        return _0x33a584.getElementsByTagName("square_input");
      }
    }
  }
}
function _0x2663be() {
  return [_0x239ce3, _0x4107db, _0x4d2865].includes(_0x862ba8);
}
function _0x291548(_0x1d95c6, _0x317ceb) {
  var _0x11d106 = _0x1d95c6;
  var _0x1ade7c = _0x54f0b5(_0x1d95c6);
  for (var _0x45e0fd = 0; _0x45e0fd < _0x1ade7c.length; _0x45e0fd++) {
    var _0x55747a = _0x1ade7c[_0x45e0fd];
    var _0x3ae25b = _0x55747a.substring(2, _0x55747a.length - 2);
    _0x3ae25b = _0x3ae25b.replace(/^c\d+::/, "");
    var _0xd5cde5 = "cloze ultimate-template-cloze";
    if (_0x3ae57b.includes(_0x45e0fd)) {
      _0xd5cde5 = _0xd5cde5 + " show";
    }
    if (_0x317ceb !== _0x1f5cc7 && _0x2663be()) {
      if (_0x317ceb === "1") {
        var _0x33c67e = "<span class=\"cloze-noborder " + _0xd5cde5 + "\" id=\"" + _0x45e0fd + "\" tabindex=0><input id=\"cloze-input-" + _0x45e0fd + "\" type=\"hidden\"/>";
        for (var _0x49c90c = 0; _0x49c90c < _0x3ae25b.length; _0x49c90c++) {
          _0x33c67e = _0x33c67e + "<square_input></square_input>";
        }
        _0x33c67e = _0x33c67e + "<cloze-origin class=\"hidden-pre\">" + _0x3ae25b + "</cloze-origin>";
        _0x33c67e = _0x33c67e + "</span>";
      } else if (_0x317ceb === "2") {
        var _0x33c67e = "<span class=\"cloze-noborder " + _0xd5cde5 + "\" id=\"" + _0x45e0fd + "\" tabindex=0><input id=\"cloze-input-" + _0x45e0fd + "\" class=\"line_input\"/>";
        _0x33c67e = _0x33c67e + "<cloze-origin class=\"hidden-pre\">" + _0x3ae25b + "</cloze-origin>";
        _0x33c67e = _0x33c67e + "</span>";
      }
    } else {
      var _0x33c67e = "<span class=\"" + _0xd5cde5 + "\" id=\"" + _0x45e0fd + "\">" + _0x3ae25b + "</span>";
    }
    _0x11d106 = _0x11d106.replace(_0x55747a, _0x33c67e);
  }
  if (_0x317ceb !== _0x1f5cc7) {
    {
      _0x11d106 = _0x11d106 + "<input id=\"global-input\" type=\"text\">";
    }
  }
  return _0x11d106;
}
function _0xa7ad9e() {
  if (_0x317ceb === "1") {
    var _0x21dbce = document.getElementById("global-input");
    _0x21dbce.addEventListener("compositionstart", _0x953b44);
    _0x21dbce.addEventListener("compositionend", _0x14a7f0);
    _0x21dbce.addEventListener("change", _0x14a7f0);
    function _0x953b44(_0x14823b) {
      _0x14823b.target.composing = true;
    }
    function _0x14a7f0(_0x26725f) {
      {
        if (!_0x26725f.target.composing) {
          {
            return;
          }
        }
        _0x26725f.target.composing = false;
        const _0x51bf06 = document.createEvent("HTMLEvents");
        _0x51bf06.initEvent("input", true, true);
        _0x26725f.target.dispatchEvent(_0x51bf06);
      }
    }
    _0x21dbce.addEventListener("input", _0x3ef9b3 => {
      if (_0x3ef9b3.target.composing) {
        {
          return;
        }
      }
      var _0xc4d3c1 = _0x3ef9b3.currentTarget.value;
      var _0x16db86 = _0xc4d3c1.split("");
      var _0x344ac6 = _0x5098c3(_0x2d0bab);
      for (let _0x45e0fd = 0; _0x45e0fd < _0x344ac6.length; _0x45e0fd++) {
        _0x344ac6[_0x45e0fd].innerText = _0x16db86[_0x45e0fd] ? _0x16db86[_0x45e0fd] : "";
      }
      setValueToStorage("ANKI-CLOZE-INPUT-" + _0x2d0bab, _0xc4d3c1);
      _0x2f710b();
    });
  }
  var _0x5c5898 = document.getElementById("front-question-body").getElementsByClassName("cloze");
  for (let _0x45e0fd = 0; _0x45e0fd < _0x5c5898.length; _0x45e0fd++) {
    {
      let _0x5237f8 = _0x5c5898[_0x45e0fd];
      if (_0x317ceb === "2") {
        {
          var _0x112f41 = document.getElementById("cloze-input-" + _0x45e0fd);
          _0x112f41.addEventListener("input", _0x4294b6 => {
            let _0x4d51c3 = _0x4294b6.currentTarget.value;
            let _0x3eb8ec = _0x4294b6.currentTarget.id;
            setValueToStorage(_0x3eb8ec.replace("cloze-input-", "ANKI-CLOZE-INPUT-"), _0x4d51c3);
          });
        }
      }
      _0x1aa5d7(_0x5237f8);
    }
  }
}
function _0x1788ce(_0x56fec0) {
  const _0x139e16 = new RegExp("\\\\\\([^]*?\\\\\\)");
  return _0x139e16.test(_0x56fec0);
}
function _0x32b6a9(_0x460445) {
  var _0x5c54bb = getElementHtmlById("front-question-value");
  if (!_0x1788ce(_0x5c54bb)) {
    {
      _0x5c54bb = _0x5c54bb.replace(new RegExp(" *{[^]*} *"), "");
    }
  }
  if (_0x460445) {
    {
      _0x5c54bb = getElementHtmlById("front-answer-value");
    }
  }
  if (_0x5c54bb.startsWith("<img")) {
    {
      _0x5c54bb = "<br>" + _0x5c54bb;
    }
  }
  _0x5c54bb = replaceGeogebraLink(_0x5c54bb);
  updateElementHtmlById("front-question-body", _0x5c54bb);
}
function switchClozeDragCreation(_0x53d41c) {
  _0x46a075(_0x53d41c, "ANKI-SETTINGS-CLOZE-DRAG-CREATION");
}
function switchImageDragCreation(_0x4f89d5) {
  _0x46a075(_0x4f89d5, "ANKI-SETTINGS-IMAGE-DRAG-CREATION");
}
function switchHideShowForAll() {
  var _0x289117 = _0x596dfd();
  var _0x26b550 = 0;
  for (var _0x16ec6d of _0x289117) {
    {
      if (_0x16ec6d.getAttribute("fill-opacity") !== "1") {
        {
          _0x26b550 += 1;
        }
      }
    }
  }
  var _0x462d96 = _0x26b550 > 0 ? "1" : _0x220001;
  for (var _0x4f2bb7 of _0x289117) {
    _0x4f2bb7.setAttribute("stroke", _0x1f9522);
    _0x4f2bb7.setAttribute("stroke-width", "2");
    _0x4f2bb7.setAttribute("stroke-opacity", "0.8");
    _0x4f2bb7.setAttribute("fill-opacity", _0x462d96);
  }
}
function copyLocationsToClipboard() {
  let _0x550a31;
  let _0x511a8a;
  try {
    _0x550a31 = document.createElement("textarea");
    _0x550a31.setAttribute("readonly", true);
    _0x550a31.setAttribute("contenteditable", true);
    _0x550a31.style.position = "fixed";
    _0x550a31.value = _0x152695();
    document.body.appendChild(_0x550a31);
    _0x550a31.select();
    const _0xb0d4a8 = document.createRange();
    _0xb0d4a8.selectNodeContents(_0x550a31);
    const _0x4d1ca4 = window.getSelection();
    _0x4d1ca4.removeAllRanges();
    _0x4d1ca4.addRange(_0xb0d4a8);
    _0x550a31.setSelectionRange(0, _0x550a31.value.length);
    _0x511a8a = document.execCommand("copy");
    _0x27b8f4("<img src=\"_final_template_embedded_correct.png\">" + _tr("MESSAGE_COPY_SUCCESS"), "150px");
  } catch (_0x4b0353) {
    _0x511a8a = null;
    _0x27b8f4("<img src=\"_final_template_embedded_wrong.png\">" + _tr("MESSAGE_COPY_FAIL"), "150px");
  } finally {
    {
      document.body.removeChild(_0x550a31);
    }
  }
}
function _0x4c3fbc(_0x10494e) {
  var _0x2461a2 = _0x47ba09 => {
    {
      var _0x50c0d5 = Number.parseFloat(_0x10494e[_0x47ba09]);
      return _0x50c0d5 > 100 || _0x50c0d5 < 0.1;
    }
  };
  var _0x53fd61 = ["sX", "sY", "w", "h"];
  for (const _0x13e565 of _0x53fd61) {
    {
      if (_0x2461a2(_0x13e565)) {
        return false;
      }
    }
  }
  return true;
}
function _0x4cd358(_0xe2f10c, _0x6f1fb) {
  const _0x5dc5f2 = JSON.stringify(_0x6f1fb);
  for (const _0x4921da of _0xe2f10c) {
    if (JSON.stringify(_0x4921da) === _0x5dc5f2) {
      {
        return false;
      }
    }
  }
  return true;
}
function _0x152695() {
  var _0x52eb45 = [];
  var _0x48da6a = function (_0x5b857d, _0x258f6c) {
    return (_0x5b857d.getAttribute(_0x258f6c) || "").replace("%", "");
  };
  var _0x89ea71 = Array.prototype.slice.call(document.getElementById("front-question-body").getElementsByTagName("svg"));
  for (var _0xc7f820 of _0x89ea71) {
    if ("question-image-svg-wrapper" === _0xc7f820.getAttribute("name")) {
      var _0xd0020 = _0xc7f820.getElementsByTagName("rect");
      var _0x5d1e15 = [];
      for (var _0x37c11e of _0xd0020) {
        var _0x315991 = {
          "sX": _0x48da6a(_0x37c11e, "x"),
          "sY": _0x48da6a(_0x37c11e, "y"),
          "w": _0x48da6a(_0x37c11e, "width"),
          "h": _0x48da6a(_0x37c11e, "height")
        };
        if (!_0x4c3fbc(_0x315991)) {
          {
            continue;
          }
        }
        var _0x2421eb = _0x48da6a(_0x37c11e, "nid");
        if (_0x2421eb) {
          _0x315991.nid = _0x2421eb;
        }
        if (_0x4cd358(_0x5d1e15, _0x315991)) {
          {
            _0x5d1e15.push(_0x315991);
          }
        }
      }
      _0x52eb45.push(JSON.stringify(_0x5d1e15));
    }
  }
  return _0x52eb45.join("||");
}
function numberTriggered(_0x234eac) {
  var _0x1fbaaf = document.getElementById("front-options");
  if (_0x1fbaaf) {
    var _0x2ef79f = _0x1fbaaf.getElementsByTagName("li");
    var _0x4aed12 = Number.parseInt(_0x234eac) - 1;
    if (_0x4aed12 <= _0x2ef79f.length - 1) {
      {
        markSelected(_0x2ef79f[_0x4aed12]);
      }
    }
  }
}
function _0x12dcf1(_0x2fb2f5) {
  if (_0x45919d) {
    {
      _0xf1022a();
      _0x4a6f2e(_0x2fb2f5);
      _0x503419();
      _0x121a8e();
    }
  }
  _0x435052(function (_0x5db85f) {
    if (_0x5db85f) {
      _0xf1022a();
      _0x4a6f2e(_0x2fb2f5);
      _0x503419();
    }
    _0x121a8e();
  });
  _0x3d6070();
  _0x8e5672();
}
function _0x5cc581() {
  if (_0x557e26 === "1") {
    {
      return false;
    }
  }
  var _0x40cbc2 = _0x74072e(offlineData);
  if (_0x40cbc2.code === 0) {
    if (Math.floor(Date.now() / 1000) < _0x40cbc2.data.dataExpireTime) {
      _0x5b5c70(_0x40cbc2.data);
      return true;
    }
  }
  return false;
}
cardStatus = "F";
setValueToStorage("ANKI-RERENDERED-QUESTION", "");
_0x6c0f98();
var _0x557e26 = getValueFromStorage("ANKI-LOCAL-DATA-EXPIRED", "0");
var _0x45919d = _0x5cc581();
if (_0x5e4e05 === "" && _0x33c9b2("ankiGetDeviceId")) {
  if (AnkiDroidJS.prototype !== undefined) {
    _0x5efa20.ankiGetDeviceId().then(_0x3e6894 => {
      _0x5e4e05 = _0x3e6894.value;
      setValueToStorage("ANKI-DEVICE-ID", _0x5e4e05);
      _0x12dcf1("tab1");
    });
  } else {
    _0x5e4e05 = _0x5efa20.ankiGetDeviceId();
    _0x12dcf1("tab1");
  }
} else {
  _0x12dcf1("tab1");
}