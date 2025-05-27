
console.log("\n %c 咪哩视频 %c\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:24px;", "background: #fadfa3; padding:5px 0; font-size:12px;");
console.log("\n %c MaDouYm.Com %c HTTPS://MADOUYM.COM \n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:24px;", "background: #fadfa3; padding:5px 0; font-size:24px;");
var Madou = {
  "Cookie": {
    "Set": function (_0x1e0d3b, _0x3b00dd, _0x5dc5d2) {
      var _0x3e1020;
      if (_0x5dc5d2) {
        {
          _0x3e1020 = _0x5dc5d2;
        }
      } else {
        _0x3e1020 = "";
      }
      $.cookie(_0x1e0d3b, _0x3b00dd, {
        "expires": _0x3e1020,
        "path": "/"
      });
    },
    "Get": function (_0x361265) {
      var _0x13d470 = $.cookie(_0x361265);
      return _0x13d470;
    },
    "Del": function (_0x3c10ec) {
      $.cookie(_0x3c10ec, null, {
        "expires": -1,
        "path": "/"
      });
    }
  },
  "load": function () {
    var _0x1484a5 = $(window).width();
    if (_0x1484a5 < 768) {
      {
        var _0x39de7a = Madou.Cookie.Get("load_state");
        var _0x5595f1 = Madou.Cookie.Get("load_img");
        var _0x1cfab1 = Madou.Cookie.Get("load_url");
        var _0xfb4df6 = Madou.Cookie.Get("load_autoe");
        var _0x2417fd = Madou.Cookie.Get("load_time");
        var _0x1d355e = "<div class=\"loader\" id=\"loader\"><a id=\"loader_link\" href=\"" + _0x1cfab1 + "\" target=\"_blank\"><img  src=\"" + _0x5595f1 + "\" alt=\"loading\"> <div class=\"num\" id=\"num\"></div></a></div>";
        var _0x189b28 = Madou.Cookie.Get("loader");
        if (_0x39de7a == 1) {
          if (_0x189b28 == null) {
            $("body").append(_0x1d355e);
            var _0x26a406 = Number(_0x2417fd);
            var _0x133238 = setInterval(function () {
              _0x26a406--;
              document.getElementById("num").innerHTML = _0x26a406;
              if (_0x26a406 === 0) {
                {
                  $("#num").remove();
                  $("#loader_link").append("<i class=\"num van-icon van-icon-cross\" id=\"fa-times\"></i>");
                  clearInterval(_0x133238);
                  if (_0xfb4df6 == 1) {
                    {
                      Madou.Cookie.Set("loader", "1");
                      $("#loader").remove();
                      location.reload();
                    }
                  } else {
                    $("#fa-times").click(function (_0x141208) {
                      _0x141208.preventDefault();
                      Madou.Cookie.Set("loader", "1");
                      $("#loader").remove();
                      location.reload();
                    });
                  }
                }
              }
            }, 1000);
          }
        }
      }
    }
  },
  "invite": function () {
    function _0x5dcac4(_0x19d762) {
      var _0x4cdfcc = window.location.search.substring(1);
      var _0x20b5f0 = _0x4cdfcc.split("&");
      for (var _0x287eac = 0; _0x287eac < _0x20b5f0.length; _0x287eac++) {
        var _0x5c02a5 = _0x20b5f0[_0x287eac].split("=");
        if (_0x5c02a5[0] == _0x19d762) {
          {
            return _0x5c02a5[1];
          }
        }
      }
      return false;
    }
    var _0x152d56 = _0x5dcac4("invite");
    if (_0x152d56 == 0) {} else {
      {
        document.cookie = "invite=" + _0x152d56;
      }
    }
    function _0x38d68a(_0x496f10) {
      var _0x3204fb = document.cookie;
      var _0x23ce30 = _0x3204fb.split("; ");
      for (var _0x52a091 = 0; _0x52a091 < _0x23ce30.length; _0x52a091++) {
        {
          var _0x1f7af2 = _0x23ce30[_0x52a091].split("=");
          if (_0x496f10 == _0x1f7af2[0]) {
            return _0x1f7af2[1];
          }
        }
      }
      return "";
    }
    var _0x5b9ea0 = _0x38d68a("invite");
    $("#codes").attr("value", _0x5b9ea0);
    $(".codes").attr("value", _0x5b9ea0);
  },
  "unique": function (_0x4bfb73, _0x11f930) {
    var _0xf69ee2 = [];
    var _0x1511d9 = [];
    for (var _0x175ab0 = 0; _0x175ab0 < _0x4bfb73.length; _0x175ab0++) {
      console.log(_0xf69ee2.indexOf(_0x4bfb73[_0x175ab0][_0x11f930]));
      if (_0xf69ee2.indexOf(_0x4bfb73[_0x175ab0][_0x11f930]) == -1) {
        {
          _0xf69ee2.push(_0x4bfb73[_0x175ab0][_0x11f930]);
          _0x1511d9.push(_0x4bfb73[_0x175ab0]);
        }
      } else {}
    }
    return _0x1511d9;
  },
  "swiper": function () {
    $.getScript(maccms.path + "/MDassets/js/swiper.min.js", function () {
      var _0x5acb39 = new Swiper(".van-swipe", {
        "wrapperClass": "van-swipe__track",
        "slideClass": "van-swipe-item",
        "loop": true,
        "speed": 300,
        "spaceBetween": 10,
        "autoplay": {
          "delay": 5000,
          "disableOnInteraction": false
        },
        "pagination": {
          "el": ".custom-indicator"
        },
        "lazy": {
          "loadPrevNext": true,
          "loadOnTransitionStart": true
        },
        "on": {
          "slideChangeTransitionEnd": function () {
            $(".md-lazy").lazyload({
              "threshold": 130
            });
          }
        }
      });
      var _0x3e6512 = new Swiper(".swiper-container", {
        "loop": true,
        "speed": 300,
        "effect": "coverflow",
        "pagination": {
          "el": ".swiper-pagination"
        }
      });
      var _0xd39130 = new Swiper(".rank-swiper", {
        "loop": true,
        "speed": 300,
        "spaceBetween": -10,
        "slidesPerView": 2,
        "lazy": {
          "loadPrevNext": true,
          "loadOnTransitionStart": true
        },
        "on": {
          "slideChangeTransitionEnd": function () {
            {
              $(".md-lazy").lazyload({
                "threshold": 130
              });
            }
          }
        }
      });
      var _0x175310 = $(".van-nav-bar__content").innerHeight();
      $(".van-nav-bar__placeholder").css("height", _0x175310);
      $(".van-sticky-tabs").css("top", _0x175310);
    });
  },
  "scroll": function (_0x5b58cd, _0x584d6b) {
    if ($(_0x5b58cd).offset()) {
      var _0x53cb46 = $(_0x5b58cd).offset().left + $(_0x584d6b).scrollLeft() - $(_0x584d6b).offset().left;
      var _0x3b0f14 = ($(_0x584d6b).width() - $(_0x5b58cd).width()) / 2;
      $(_0x584d6b).scrollLeft(_0x53cb46 - _0x3b0f14);
    }
  },
  "images": function () {
    $("img.md-lazy").lazyload({
      "effect": "fadeIn",
      "threshold": 200,
      "failurelimit": 20
    });
  },
  "copy": function () {
    var _0x530fe9 = new ClipboardJS("#share");
    _0x530fe9.on("success", function (_0x14d4b0) {
      layer.msg("复制成功,快去分享吧！");
    });
    _0x530fe9.on("error", function (_0x37813c) {
      console.log(_0x37813c);
    });
  },
  "playlist": function () {
    $("#plays a").click(function () {
      {
        $(this).addClass("active").siblings().removeClass("active");
        index = $("#plays a").index(this);
        $("#play-list #playsx").eq(index).fadeIn(800).siblings().hide();
        $("#play-list #playsx").eq(index).addClass("asc").siblings().removeClass("asc");
      }
    });
    $(".play-sort-btn").click(function () {
      var _0x2e1498 = $(".asc").find("li");
      var _0x5ce2a6 = _0x2e1498.length;
      for (var _0x2b010b = 0; _0x2b010b < _0x5ce2a6; _0x2b010b++) {
        for (var _0x33204f = _0x2b010b; _0x33204f < _0x5ce2a6; _0x33204f++) {
          {
            $(_0x2e1498).eq(_0x33204f).insertBefore($(_0x2e1498).eq(_0x2b010b));
            $(_0x2e1498).eq(_0x2b010b).insertAfter($(_0x2e1498).eq(_0x33204f));
          }
        }
      }
      return;
    });
    $(".el-video-content").click(function () {
      {
        $(".el-video-content").toggleClass("active");
        if ($(".tips-desc").hasClass("oneLine")) {
          $(".tips-desc").removeClass("oneLine").addClass("moreLine");
        } else {
          $(".tips-desc").addClass("oneLine").removeClass("moreLine");
        }
      }
    });
  },
  "menu": function () {
    $(".mdmenu").click(function () {
      var _0x215387 = $(this);
      var _0x7ae486 = _0x215387.attr("id");
      var _0x5a9b51 = _0x215387.attr("aria-icon");
      var _0xb3f377 = _0x215387.attr("aria-content");
      if ($("#" + _0x5a9b51).hasClass("is-active")) {
        {
          $("#" + _0x5a9b51).removeClass("is-active");
          $("#" + _0xb3f377).slideUp();
        }
      } else {
        $("#" + _0x5a9b51).addClass("is-active");
        $("#" + _0xb3f377).slideDown();
      }
    });
  },
  "notice": function () {
    var _0x53c780 = Madou.Cookie.Get("notice_state");
    if (_0x53c780 == 1) {
      var _0x475310 = Madou.Cookie.Get("notice");
      if (_0x475310 == null) {
        {
          $("body").addClass("van-overflow-hidden");
          $("body").append("<div class='v-modal van-overlay' style='z-index: 2001;'></div>");
          $(".md-notice").show();
          $(".notice-close,.v-modal,.md-notice-close").click(function () {
            {
              $(".v-modal").remove();
              $(".md-notice").remove();
              $("body").removeClass("van-overflow-hidden");
              Madou.Cookie.Set("notice", "1");
            }
          });
        }
      }
    }
  },
  "login": function () {
    $(".el-badge").mouseenter(function () {
      $(".el-logged,.el-logged-pop").show();
    });
    $(".el-logged,.el-login-pop").mouseleave(function () {
      $(".el-logged,.el-logged-pop").hide();
    });
    $(".login-btn").click(function () {
      $(".v-modal").remove();
      $(".el-login").show();
      $(".el-reg").hide();
      $(".el-find").hide();
      $("body").addClass("el-popup-parent--hidden");
      $("body").append("<div class='v-modal' style='z-index: 2001;'></div>");
    });
    $(".login-close").click(function () {
      {
        $(".el-login").hide();
        $(".v-modal").remove();
        $("body").removeClass("el-popup-parent--hidden");
      }
    });
    $(".reg-btn").click(function () {
      $(".el-login").hide();
      $(".el-find").hide();
      $(".el-reg").show();
    });
    $(".reg-close").click(function () {
      $(".el-reg").hide();
      $(".v-modal").remove();
      $("body").removeClass("el-popup-parent--hidden");
    });
    $(".find-btn").click(function () {
      $(".el-login").hide();
      $(".el-reg").hide();
      $(".el-find").show();
    });
    $(".find-close").click(function () {
      $(".el-find").hide();
      $(".v-modal").remove();
      $("body").removeClass("el-popup-parent--hidden");
    });
  },
  "goTop": function () {
    $(".goTop").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
          $(".van-stickys").addClass("van-sticky--fixed");
          $("#sticky").css("height", "102px");
          $(".detail-nav").show();
          $(".comments").show();
        } else {
          {
            $(".van-stickys").removeClass("van-sticky--fixed");
            $("#sticky").css("height", "");
            $(".detail-nav").hide();
            $(".comments").hide();
          }
        }
        if ($(window).scrollTop() > 300) {
          $(".goTop").fadeIn(300);
        } else {
          $(".goTop").fadeOut(200);
        }
      });
      $(".goTop").click(function () {
        $("body,html").animate({
          "scrollTop": 0
        }, 300);
        return false;
      });
    });
  },
  "more": function () {
    var _0x5183c3 = false;
    $(window).scroll(function () {
      if (!_0x5183c3 && $(window).scrollTop() + $(window).height() >= $(document).height() - 250) {
        {
          _0x5183c3 = true;
          _0x34d5fc();
        }
      }
    });
    function _0x34d5fc() {
      var _0x9a45b8 = $(".madou_more").attr("href");
      if (_0x9a45b8 != undefined) {
        $.ajax({
          "url": _0x9a45b8,
          "type": "get",
          "error": function (_0x319945) {},
          "success": function (_0x7022c7) {
            var _0x22b189 = $(_0x7022c7).find(".list_item");
            $("#content").append(_0x22b189.fadeIn(500));
            var _0x1d391e = $(_0x7022c7).find(".madou_more").attr("href");
            if (_0x1d391e != _0x9a45b8) {
              {
                $(".madou_more").attr("href", _0x1d391e);
                $(".madou_more").hide();
                setTimeout("$('.madou_more').show();", 2000);
              }
            } else {
              $(".madou_more").remove();
              $(".van-list__finished-text").show();
            }
            $("img.md-lazy").lazyload({
              "effect": "fadeIn",
              "threshold": 200,
              "failurelimit": 20
            });
            _0x5183c3 = false;
          }
        });
      }
      return false;
    }
  }
};
$(document).ready(function () {
  Madou.load();
  Madou.invite();
  Madou.menu();
  Madou.notice();
  Madou.images();
  Madou.copy();
  Madou.playlist();
  Madou.login();
  Madou.goTop();
  Madou.swiper();
  Madou.scroll(".van-tab--active", ".van-tabs__nav");
  Madou.scroll(".van-tab--active-list", ".van-tabs__nav_list");
  Madou.more();
});