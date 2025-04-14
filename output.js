//Mon Apr 14 2025 21:34:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var OOCPyyU = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  jruG35,
  Slw7UcR,
  xEW13u,
  uAMAj4X,
  OL5Vbi1,
  wVuS9L,
  zHcTC9y,
  eI5CWG,
  kPyPCsZ,
  AV63GS,
  WE7y26e,
  qdDu4k,
  t4ayUv,
  GdBgI6n;
jruG35 = Object.defineProperty
function CcPmtfh() {
  return globalThis;
}
function lDHDJK() {
  return global;
}
function mWOKZgh() {
  return window;
}
function OY4ub5Q() {
  return new Function("return this")();
}
function sfYqx6c(OOCPyyU = [CcPmtfh, lDHDJK, mWOKZgh, OY4ub5Q], jruG35, cd3jPi = [], iOVJmo = 0x0, Slw7UcR) {
  jruG35 = jruG35;
  try {
    jruG35 = Object
    cd3jPi["push"](''["__proto__"]["constructor"]["name"])
  } catch (e) {}
  cVlqwE: for (iOVJmo = iOVJmo; iOVJmo < OOCPyyU["length"]; iOVJmo++) try {
    jruG35 = OOCPyyU[iOVJmo]();
    for (Slw7UcR = 0; Slw7UcR < cd3jPi["length"]; Slw7UcR++) {
      if (typeof jruG35[cd3jPi[Slw7UcR]] === "undefined") {
        continue cVlqwE;
      }
    }
    return jruG35;
  } catch (e) {}
  return jruG35 || this;
}
Slw7UcR = sfYqx6c() || {}
xEW13u = Slw7UcR["TextDecoder"]
uAMAj4X = Slw7UcR["Uint8Array"]
OL5Vbi1 = Slw7UcR["Buffer"]
wVuS9L = Slw7UcR["String"] || String
zHcTC9y = Slw7UcR["Array"] || Array
eI5CWG = (() => {
  var OOCPyyU = new zHcTC9y(128),
    jruG35,
    cd3jPi;
  jruG35 = wVuS9L["fromCodePoint"] || wVuS9L["fromCharCode"]
  cd3jPi = []
  return (...iOVJmo) => {
    var Slw7UcR;
    iOVJmo.length = 0x1
    iOVJmo["z9XSEp5"] = -109
    var uAMAj4X, OL5Vbi1;
    iOVJmo[130] = iOVJmo.wOsK5F
    iOVJmo[130] = iOVJmo[0x0]["length"]
    cd3jPi["length"] = 0
    for (Slw7UcR = 0; Slw7UcR < iOVJmo[130];) {
      OL5Vbi1 = iOVJmo[0][Slw7UcR++];
      if (OL5Vbi1 <= 127) {
        uAMAj4X = OL5Vbi1;
      } else {
        if (OL5Vbi1 <= 0xdf) {
          uAMAj4X = (OL5Vbi1 & 31) << 6 | iOVJmo[0][Slw7UcR++] & 63;
        } else {
          if (OL5Vbi1 <= 239) {
            uAMAj4X = (OL5Vbi1 & 15) << 12 | (iOVJmo[0][Slw7UcR++] & 0x3f) << 6 | iOVJmo[0x0][Slw7UcR++] & 63;
          } else {
            if (wVuS9L["fromCodePoint"]) {
              uAMAj4X = (OL5Vbi1 & 0x7) << 0x12 | (iOVJmo[0][Slw7UcR++] & 63) << 12 | (iOVJmo[0][Slw7UcR++] & 63) << 6 | iOVJmo[0x0][Slw7UcR++] & 63;
            } else {
              uAMAj4X = 63
              Slw7UcR += 3
            }
          }
        }
      }
      cd3jPi["push"](OOCPyyU[uAMAj4X] || (OOCPyyU[uAMAj4X] = jruG35(uAMAj4X)));
    }
    {
      return cd3jPi["join"]('');
    }
  };
})()
function VcAbXqB(...OOCPyyU) {
  OOCPyyU["length"] = 1
  OOCPyyU[119] = OOCPyyU[0]
  return typeof xEW13u !== "undefined" && xEW13u ? new xEW13u()["decode"](new uAMAj4X(OOCPyyU[0])) : typeof OL5Vbi1 !== "undefined" && OL5Vbi1 ? OL5Vbi1["from"](OOCPyyU[0])["toString"]("utf-8") : eI5CWG(OOCPyyU[0]);
}
kPyPCsZ = ((...OOCPyyU) => {
  OOCPyyU["length"] = 0
  OOCPyyU.ANr7fON = OOCPyyU[3]
  OOCPyyU[0x4d] = 147
  OOCPyyU[56] = OOCPyyU[0x4]
  OOCPyyU.ANr7fON = {
    ["Qi9HOMH"]: "d2JZfh"
  }
  OOCPyyU[68] = OOCPyyU.ANr7fON
  OOCPyyU[0x38] = {
    H07n4V: [],
    DpIZQh: [],
    _Z_GMyX: (OOCPyyU = "length") => {
      if (!kPyPCsZ.DpIZQh[0]) {
        kPyPCsZ.DpIZQh.push(29);
      }
      return kPyPCsZ.DpIZQh[OOCPyyU];
    },
    EhbcZr: OOCPyyU["ANr7fON"]["Qi9HOMH"],
    ypmyOM8: (OOCPyyU = "length") => {
      if (!kPyPCsZ.H07n4V[0x0]) {
        kPyPCsZ.H07n4V.push(54);
      }
      return kPyPCsZ.H07n4V[OOCPyyU];
    },
    drI3A3: "_k3LFsm",
    Pms8Uw: 66,
    un_Qy8: "RiA7fW",
    YVpE_o: 81,
    kTD0fT6: "T1ZFmnQ",
    H497AP5: "vkjwZNx",
    w1yEXd3: [],
    aGE2Mm: (OOCPyyU = "length") => {
      if (!kPyPCsZ.w1yEXd3[0]) {
        kPyPCsZ.w1yEXd3.push(-62);
      }
      return kPyPCsZ.w1yEXd3[OOCPyyU];
    }
  }
  return OOCPyyU[56];
})()
var Z3W1osK,
  cloB6W = function (OOCPyyU) {
    function cd3jPi() {
      return globalThis;
    }
    function iOVJmo() {
      return global;
    }
    function Slw7UcR() {
      return window;
    }
    function xEW13u(...OOCPyyU) {
      OOCPyyU["length"] = 0
      OOCPyyU["ST3xnA"] = OOCPyyU[2]
      OOCPyyU["ST3xnA"] = {
        ["ka9RJS"]: "return"
      }
      OOCPyyU._USXzn = 94
      {
        return new Function(OOCPyyU["ST3xnA"]["ka9RJS"] + " this")();
      }
    }
    function uAMAj4X(OOCPyyU = [cd3jPi, iOVJmo, Slw7UcR, xEW13u], uAMAj4X, OL5Vbi1, wVuS9L, zHcTC9y, eI5CWG = [], awDZuW, hmwAzfD, ewoqdcz, fr5I7qJ, AV63GS, WE7y26e = 0x0, qdDu4k, t4ayUv) {
      zHcTC9y = zHcTC9y
      try {
        awDZuW = 0
        hmwAzfD = {
          ["EBIzPJ"]: awDZuW(12)
        }
        ewoqdcz = awDZuW["apply"](undefined, [11])
        fr5I7qJ = awDZuW["call"](undefined, 9)
        AV63GS = [awDZuW(8)]
        zHcTC9y = Object
        eI5CWG[AV63GS[0x0]](''[fr5I7qJ + awDZuW(10)][ewoqdcz][hmwAzfD["EBIzPJ"]])
        function GdBgI6n(...OOCPyyU) {
          var uAMAj4X;
          OOCPyyU["length"] = 1
          OOCPyyU[193] = OOCPyyU[0x9]
          OOCPyyU[0x1] = '\x5e\x5f\x78\x2b\x75\x28\x2e\x26\x3f\x64\x34\x70\x46\x2f\x45\x57\x63\x7c\x3e\x4d\x71\x53\x76\x5a\x60\x33\x56\x52\x49\x47\x4a\x24\x39\x7a\x6c\x67\x66\x31\x38\x6b\x44\x23\x55\x68\x77\x21\x6f\x4e\x29\x4f\x54\x32\x58\x43\x42\x3d\x73\x50\x40\x61\x6a\x22\x6d\x74\x2a\x6e\x51\x2c\x7b\x5d\x3b\x62\x37\x4c\x35\x48\x79\x59\x25\x5b\x3a\x30\x3c\x41\x65\x69\x72\x36\x4b\x7d\x7e'
          OOCPyyU["YTPnfDX"] = OOCPyyU[193]
          OOCPyyU["K3uAMAa"] = '' + (OOCPyyU[0] || '')
          OOCPyyU[3] = OOCPyyU["K3uAMAa"].length
          OOCPyyU[4] = []
          OOCPyyU[5] = 0
          OOCPyyU[6] = 0x0
          OOCPyyU.EMXBC5 = -1
          for (uAMAj4X = 0; uAMAj4X < OOCPyyU[3]; uAMAj4X++) {
            OOCPyyU["YTPnfDX"] = '\x5e\x5f\x78\x2b\x75\x28\x2e\x26\x3f\x64\x34\x70\x46\x2f\x45\x57\x63\x7c\x3e\x4d\x71\x53\x76\x5a\x60\x33\x56\x52\x49\x47\x4a\x24\x39\x7a\x6c\x67\x66\x31\x38\x6b\x44\x23\x55\x68\x77\x21\x6f\x4e\x29\x4f\x54\x32\x58\x43\x42\x3d\x73\x50\x40\x61\x6a\x22\x6d\x74\x2a\x6e\x51\x2c\x7b\x5d\x3b\x62\x37\x4c\x35\x48\x79\x59\x25\x5b\x3a\x30\x3c\x41\x65\x69\x72\x36\x4b\x7d\x7e'.indexOf(OOCPyyU["K3uAMAa"][uAMAj4X]);
            if (OOCPyyU["YTPnfDX"] === -1) {
              continue;
            }
            if (OOCPyyU.EMXBC5 < 0) {
              OOCPyyU["EMXBC5"] = OOCPyyU["YTPnfDX"];
            } else {
              OOCPyyU["EMXBC5"] += OOCPyyU["YTPnfDX"] * 0x5b
              OOCPyyU[5] |= OOCPyyU.EMXBC5 << OOCPyyU[6]
              OOCPyyU[6] += (OOCPyyU["EMXBC5"] & 8191) > 88 ? 13 : 14
              do {
                OOCPyyU[4].push(OOCPyyU[5] & 255)
                OOCPyyU[0x5] >>= 8
                OOCPyyU[6] -= 0x8
              } while (OOCPyyU[6] > 0x7);
              OOCPyyU["EMXBC5"] = -0x1;
            }
          }
          if (OOCPyyU["EMXBC5"] > -1) {
            OOCPyyU[4].push((OOCPyyU[0x5] | OOCPyyU["EMXBC5"] << OOCPyyU[6]) & 255);
          }
          return VcAbXqB(OOCPyyU[4]);
        }
      } catch (e) {}
      Nldmp3: for (WE7y26e = WE7y26e; WE7y26e < OOCPyyU["length"] && kPyPCsZ.drI3A3["charAt"](5) == "s"; WE7y26e++) try {
        zHcTC9y = OOCPyyU[WE7y26e]();
        for (qdDu4k = 0x0; qdDu4k < eI5CWG["length"] && kPyPCsZ.ypmyOM8(); qdDu4k++) {
          if (typeof zHcTC9y[eI5CWG[qdDu4k]] === "undefined") {
            continue Nldmp3;
          }
        }
        return zHcTC9y;
      } catch (e) {}
      return zHcTC9y || this;
    }
    return Z3W1osK = uAMAj4X["call"](this);
  }["call"]();
function AQ1aih(...hmH9qW) {
  var OOCPyyU = "length";
  return hmH9qW[hmH9qW[OOCPyyU] - 1];
}
function ly2M8I(...OOCPyyU) {
  OOCPyyU.length = 2
  OOCPyyU[0x71] = OOCPyyU[0x0]
  switch (AV63GS) {
    case -39:
      return !OOCPyyU[0];
    case -5:
      return OOCPyyU[0] + OOCPyyU[0x1];
  }
}
function HORVsR(...OOCPyyU) {
  OOCPyyU["length"] = 1
  OOCPyyU[21] = -0xe
  {
    return AQ1aih(OOCPyyU[0] = AV63GS + (AV63GS = OOCPyyU[0], 0), OOCPyyU[0]);
  }
}
AV63GS = AV63GS
WE7y26e = plLJaz(-879)["create"](null)
function Djwxc6(...OOCPyyU) {
  OOCPyyU.length = 2
  OOCPyyU[208] = 146
  OOCPyyU[2] = {
    ["p1yHcZ"]: "value"
  }
  OOCPyyU["kqF9v94"] = OOCPyyU[2]
  OOCPyyU[3] = "length"
  return qdDu4k(OOCPyyU[0], "length", {
    [OOCPyyU[2]["p1yHcZ"]]: OOCPyyU[1],
    ["configurable"]: true
  });
}
qdDu4k = plLJaz(-879)["defineProperty"]
t4ayUv = plLJaz(-879).create(null)
GdBgI6n = []
x5xL4Kf("x8GbC2", "OpJCZZB")
plLJaz(-565)["log"]('宇')
plLJaz(-565)["log"]("Hello World")
function x5xL4Kf(OOCPyyU, jruG35, cd3jPi, Slw7UcR, xEW13u, uAMAj4X, OL5Vbi1, wVuS9L) {
  uAMAj4X = {
    ["x8GbC2"]: (...OOCPyyU) => {
      var jruG35, cd3jPi, Slw7UcR;
      OOCPyyU.length = 0x0
      OOCPyyU.WNH06q = -131
      OOCPyyU["uoDJeqs"] = {
        ["HgHB8N"]: "charAt"
      }
      jruG35 = 156
      OOCPyyU["KSXtzn"] = OOCPyyU.VpmGkoG
      cd3jPi = -94
      Slw7UcR = {
        b: -26,
        ["j"]: -120,
        ["n"]: () => {
          return cd3jPi = -0x7d;
        },
        ["q"]: () => {
          Slw7UcR["n"]()
          jruG35 += 0x6
          return '\u006f';
        },
        ["c"]: -0x8,
        ["d"]: (OOCPyyU = jruG35 == 156) => {
          if (!OOCPyyU && kPyPCsZ.ypmyOM8()) {
            return "e";
          }
          return cd3jPi = -125;
        },
        ["m"]: 30,
        ["g"]: () => {
          return cd3jPi += 22;
        },
        h: () => {
          return cd3jPi -= 26;
        },
        ["i"]: () => {
          return {};
        }
      }
      while (jruG35 + cd3jPi != 66 && kPyPCsZ.drI3A3[OOCPyyU["uoDJeqs"]["HgHB8N"]](5) == '\x73') {
        OOCPyyU["KSXtzn"] = ["charAt"]
        OOCPyyU.qqDdGG7 = "ivclkr"
        switch (jruG35 + cd3jPi) {
          case 520:
          case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 0x10b : -0xb1:
          case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 0x2c : -147:
          case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 0x142 : 0x3e:
            Slw7UcR["d"]()
            Slw7UcR.g()
            break;
          case !kPyPCsZ._Z_GMyX() ? 0x2d : 36:
            OOCPyyU["PrzuOs"] = Slw7UcR["i"]();
            return GdBgI6n = [false ? plLJaz(0x39c) : xEW13u, OOCPyyU["PrzuOs"]], (Slw7UcR.l = x5xL4Kf)(OOCPyyU.qqDdGG7);
          case !kPyPCsZ._Z_GMyX() ? 0x7c : 70:
            if (!kPyPCsZ._Z_GMyX()) {
              jruG35 += -26
              cd3jPi += -8
              break;
            }
            jruG35 = -(jruG35 - 138)
            jruG35 += -26
            cd3jPi += -8
            break;
          case 0x32d:
          default:
          case kPyPCsZ.Pms8Uw > -64 ? 0x14a : -4:
            var [...xEW13u] = GdBgI6n;
            Slw7UcR.h();
            break;
          case kPyPCsZ.drI3A3[OOCPyyU["KSXtzn"][0]](0x5) == "s" ? 60 : 138:
            if (Slw7UcR["q"]() == "o" && kPyPCsZ._Z_GMyX()) {
              break;
            }
          case kPyPCsZ._Z_GMyX() ? 3 : 0x75:
            if (cd3jPi == 11) {
              jruG35 += 86
              cd3jPi -= 53
              break;
            }
            jruG35 = -44
            jruG35 += 86
            cd3jPi -= 0x35
        }
      }
    },
    ["ivclkr"]: (...OOCPyyU) => {
      OOCPyyU["length"] = 0
      OOCPyyU["ETJDgWK"] = -13
      OOCPyyU["DttM4zZ"] = ["💙 天空蓝"]
      OOCPyyU[1] = "💜 梦幻紫"
      OOCPyyU.fFiNU4a = OOCPyyU[2]
      OOCPyyU.fFiNU4a = "color"
      OOCPyyU["Mc0jJFL"] = {
        ["iDbGB7y"]: "305803",
        ["kr77zO"]: "o.cn/g?b=qq&nk=",
        ["JVeh1YF"]: "🍧 草莓圣代",
        ["nAYOV_"]: "#87cefa"
      }
      var [[], jruG35] = GdBgI6n;
      OOCPyyU[5] = {
        ["menu"]: {
          ["w"]: 160,
          ["x"]: 0x14,
          ["y"]: 20,
          ["m"]: 10
        },
        ["toggle"]: {
          ["s"]: 40,
          ["x"]: 20,
          ["y"]: 20,
          ["t"]: 5
        },
        bg: {
          qq: OOCPyyU["Mc0jJFL"]["iDbGB7y"] + "9382",
          ["url"]: "https://q1.qlog" + OOCPyyU["Mc0jJFL"]["kr77zO"] + "3058039382&s=64" + '\x30',
          ["grad"]: "linear-gradient(135deg, rgba(255,121,198,1), rgba(189,147,249,1))",
          ["color"]: "#ffffff",
          ["o"]: 0x1,
          ["presets"]: [{
            n: OOCPyyU["Mc0jJFL"]["JVeh1YF"],
            g: "linear-gradient(145deg, #ffb3d9, #ff99cc 40%, #ff80bf)",
            ["c"]: "#fff0f5"
          }],
          ["colors"]: [{
            ["n"]: "🎀 粉红甜心",
            ["v"]: "#ff69b4"
          }, {
            ["n"]: "💜 梦幻紫",
            ["v"]: "#d8a8ff"
          }, {
            ["n"]: OOCPyyU["DttM4zZ"][0],
            ["v"]: OOCPyyU["Mc0jJFL"]["nAYOV_"]
          }, {
            n: "💚 薄荷绿",
            ["v"]: "#98fb98"
          }, {
            ["n"]: "💛 奶油黄",
            ["v"]: "#fffacd"
          }, {
            ["n"]: "❤️ 玫瑰红",
            ["v"]: "#ff1493"
          }]
        }
      }
      plLJaz(-0x235)["log"](OOCPyyU[5])
    }
  }
  OL5Vbi1 = OL5Vbi1
  if (jruG35 == "OpJCZZB") {
    GdBgI6n = [];
  }
  wVuS9L = {
    ["ivclkr"]: 2
  };
  function eI5CWG(jruG35, cd3jPi, Slw7UcR, xEW13u, OL5Vbi1, eI5CWG, YRmkCyl) {
    xEW13u = 504
    OL5Vbi1 = -461
    eI5CWG = {
      ["z"]: 59,
      ["F"]: 207,
      ["x"]: (...jruG35) => {
        jruG35["length"] = 1
        jruG35[67] = jruG35[0x0]
        return jruG35[0] - 185;
      },
      ["am"]: () => (xEW13u += 0, OL5Vbi1 += OL5Vbi1 + 461),
      ["W"]: () => xEW13u += 1,
      s: "': ",
      G: 0x104,
      ["C"]: 40,
      ["e"]: 208,
      ["au"]: () => {
        return OL5Vbi1 = -104;
      },
      ["ag"]: () => {
        return {
          ["af"]: (eI5CWG["J"] == 324 ? Djwxc6 : plLJaz(-0xb8))(awDZuW, eI5CWG.B == -76 || hmwAzfD)
        };
      },
      ai: () => xEW13u -= 15,
      M: 37,
      ["N"]: 0x10f,
      ["P"]: 0x3ee,
      ["I"]: "string",
      ["v"]: 0x5,
      ["o"]: 0x196,
      ["aq"]: (jruG35 = eI5CWG["J"] == 324) => {
        if (!jruG35) {
          return OL5Vbi1 == -32;
        }
        return xEW13u += eI5CWG["b"] == 532 ? '\x61\x6f' : 0x4;
      },
      ["d"]: -21,
      ["B"]: 31,
      E: 0xa1,
      ["l"]: 0x13f,
      ["h"]: (...jruG35) => {
        jruG35["length"] = 0x1
        jruG35["lPCoTUW"] = jruG35[0x0]
        return jruG35[0] != -183 && jruG35[0] + 192;
      },
      ["A"]: 87,
      ["T"]: () => {
        OL5Vbi1 = -104
        xEW13u -= 81
        eI5CWG["Q"] = true
        return '\u0052';
      },
      ["L"]: 295,
      p: 92,
      ["k"]: "Invalid data key provided (not type string)",
      O: 0x39d,
      w: 163,
      ["c"]: -0x8b,
      ["u"]: 0xf3,
      ["q"]: 360,
      ["D"]: 2,
      J: 324,
      ["ab"]: function (jruG35 = xEW13u == 484) {
        if (!jruG35 && kPyPCsZ._Z_GMyX()) {
          return arguments;
        }
        return xEW13u *= 2, xEW13u -= 461;
      },
      ["n"]: "number",
      ["al"]: () => {
        if ((eI5CWG.ah = eI5CWG).a && kPyPCsZ.Pms8Uw > -0x40) {
          eI5CWG.ai();
          return "aj";
        }
        xEW13u += 33;
        return '\u0061\u006a';
      },
      ["g"]: 463,
      ["m"]: 1,
      t: 139,
      ["b"]: "Serialization error for data '",
      ["j"]: 290,
      K: 0x113,
      f: -0x1b,
      ["r"]: 0x3e,
      ["i"]: 316,
      ["U"]: () => (xEW13u += 1, eI5CWG["Q"] = true),
      y: 266,
      ["H"]: 0xa2,
      ["av"]: () => (xEW13u -= 37, OL5Vbi1 -= 13, eI5CWG["Q"] = true),
      ["aw"]: (...jruG35) => {
        jruG35["length"] = 2
        jruG35[0x69] = -113
        return jruG35[0]["Q"] ? jruG35[1] != 536 && jruG35[1] != 532 && jruG35[1] != 507 && jruG35[0x1] != 484 && jruG35[1] != 0x1f2 && jruG35[1] != 504 && jruG35[0x1] != 0x244 && jruG35[1] - 0x1cd : -415;
      },
      ["ax"]: (...jruG35) => {
        jruG35["length"] = 0x1
        jruG35[0xe3] = -82
        return jruG35[0] + 532;
      }
    }
    while (xEW13u + OL5Vbi1 != 75 && kPyPCsZ.drI3A3["charAt"](0x5) == "s") switch (xEW13u + OL5Vbi1) {
      case eI5CWG.M:
        if (!(kPyPCsZ.EhbcZr["charAt"](0x0) == "d")) {
          eI5CWG["U"]();
          break;
        }
        eI5CWG["a"] = xEW13u == 0x1f2 ? hmwAzfD : plLJaz(-827)
        eI5CWG["W"]()
        eI5CWG["Q"] = true
        break;
      case !(kPyPCsZ.Pms8Uw > -64) ? -64 : 119:
        if (eI5CWG["T"]() == '\u0052' && kPyPCsZ.ypmyOM8()) {
          break;
        }
      case kPyPCsZ._Z_GMyX() ? eI5CWG["aw"](eI5CWG, xEW13u) : undefined:
      case kPyPCsZ.Pms8Uw > -64 ? 0x16c : -150:
        if (eI5CWG["al"]() == "aj" && kPyPCsZ.drI3A3["charAt"](0x5) == "s") {
          break;
        }
      case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? -116 : 0x1d2:
      case kPyPCsZ._Z_GMyX() ? eI5CWG["ax"](OL5Vbi1) : undefined:
        if (xEW13u == 0x214 && false) {
          eI5CWG.am();
          break;
        }
        return OL5Vbi1 == -94 || awDZuW;
      case kPyPCsZ._Z_GMyX() ? 46 : -0x21:
        xEW13u += 25;
        break;
      case 0x25f:
      case !kPyPCsZ._Z_GMyX() ? -150 : 34:
      case 0x3b6:
      default:
        YRmkCyl = eI5CWG["ag"]();
        if (YRmkCyl === '\u0061\u0065') {
          break;
        } else {
          if (typeof YRmkCyl == "object" && kPyPCsZ.un_Qy8["charCodeAt"](3) == 0x37) {
            return YRmkCyl["af"];
          }
        }
      case !kPyPCsZ._Z_GMyX() ? undefined : xEW13u - 0x1c0:
        eI5CWG["au"]()
        eI5CWG["av"]()
        break;
      case !kPyPCsZ._Z_GMyX() ? 21 : 0x2aa:
      case !kPyPCsZ.ypmyOM8() ? -114 : 0x2b:
        var awDZuW = function (...jruG35) {
            var cd3jPi, Slw7UcR, xEW13u, OL5Vbi1;
            Slw7UcR = 319
            xEW13u = -eI5CWG.y
            OL5Vbi1 = {
              ["p"]: 122,
              ["n"]: 463,
              af: () => {
                Slw7UcR += 0x3b
                xEW13u += xEW13u == xEW13u + 222 ? '\u0061\u0062' : 35
                return '\x61\x64';
              },
              ["aj"]: () => {
                if (OL5Vbi1["a"] && kPyPCsZ.drI3A3["charAt"](5) == "s") {
                  OL5Vbi1["ag"]();
                  return '\u0061\u0068';
                }
                Slw7UcR += eI5CWG["z"];
                return '\x61\x68';
              },
              ["b"]: 39,
              ["i"]: eI5CWG["t"],
              ["e"]: 163,
              ["l"]: 0xec,
              ["s"]: 92,
              ["m"]: 0x1e1,
              o: 0xfb,
              g: -0x6b,
              ["j"]: 173,
              ["c"]: 5,
              ["L"]: (jruG35 = Slw7UcR == -eI5CWG["A"]) => {
                if (jruG35) {
                  return Slw7UcR;
                }
                return "GYqor6" in (OL5Vbi1["K"] = WE7y26e);
              },
              ["d"]: eI5CWG.B,
              ["t"]: 186,
              ["D"]: () => xEW13u += xEW13u + 0x1d4,
              ["E"]: () => {
                return Slw7UcR -= eI5CWG["C"], OL5Vbi1["D"]();
              },
              ["f"]: eI5CWG["D"],
              ["k"]: eI5CWG["E"],
              r: 0x3b,
              ["ag"]: () => (xEW13u *= 2, xEW13u += 0x5d),
              ["v"]: 18,
              ["q"]: 0xf5,
              ["h"]: eI5CWG["i"],
              ["u"]: 182,
              au: (...jruG35) => {
                jruG35["length"] = 0x1
                jruG35["_eBUago"] = jruG35[0]
                return jruG35[0] != -eI5CWG["F"] && jruG35[0] != -266 && jruG35[0] != -0x11b && jruG35[0] != -eI5CWG["G"] && jruG35[0] != -0xe4 && jruG35[0] + eI5CWG.l;
              }
            }
            while (Slw7UcR + xEW13u != 115 && kPyPCsZ.un_Qy8["charCodeAt"](3) == 0x37) {
              switch (Slw7UcR + xEW13u) {
                case !kPyPCsZ.ypmyOM8() ? 179 : 13:
                  cd3jPi = (jruG35, cd3jPi) => {
                    var Slw7UcR = {
                        ["Um6etJO"]: "Invalid data k"
                      },
                      xEW13u,
                      YRmkCyl,
                      awDZuW;
                    xEW13u = eI5CWG.i
                    YRmkCyl = -eI5CWG["j"]
                    awDZuW = {
                      ["p"]: () => {
                        return xEW13u += 0x2;
                      },
                      ["D"]: () => {
                        return (xEW13u == awDZuW["B"] ? awDZuW : NaN)["c"];
                      },
                      ["l"]: (jruG35 = awDZuW.c == eI5CWG["k"]) => {
                        if (!jruG35 && kPyPCsZ.EhbcZr["charAt"](0x0) == "d") {
                          return xEW13u == 0x37;
                        }
                        if ((awDZuW.c == eI5CWG["l"] || false) && kPyPCsZ.ypmyOM8()) {
                          xEW13u -= eI5CWG["m"]
                          YRmkCyl *= xEW13u - OL5Vbi1["h"]
                          YRmkCyl += 76
                          return "j";
                        }
                        awDZuW["f"]()
                        YRmkCyl -= OL5Vbi1["i"]
                        return '\x6a';
                      },
                      ["ae"]: () => {
                        awDZuW["ab"]()
                        xEW13u += 173
                        YRmkCyl -= 109
                        return "ac";
                      },
                      ["r"]: 0x31,
                      ["N"]: -0x12,
                      ["f"]: (jruG35 = typeof awDZuW["c"] == eI5CWG["n"]) => {
                        if (jruG35 && kPyPCsZ.ypmyOM8()) {
                          return awDZuW["i"]();
                        }
                        return xEW13u += eI5CWG["H"];
                      },
                      Z: -eI5CWG.o,
                      ["ab"]: () => xEW13u = eI5CWG["p"],
                      ["G"]: () => {
                        throw new (YRmkCyl == 68 ? plLJaz(336) : plLJaz(370))(awDZuW["D"]());
                      },
                      ["B"]: 479,
                      ["U"]: (jruG35 = awDZuW["r"] == 0x144) => {
                        if (jruG35 && kPyPCsZ.drI3A3["charAt"](0x5) == "s") {
                          return awDZuW;
                        }
                        return xEW13u += 41;
                      },
                      ["L"]: () => {
                        return awDZuW["K"]();
                      },
                      ["q"]: () => {
                        return YRmkCyl += eI5CWG["d"];
                      },
                      Y: eI5CWG["j"],
                      aa: () => YRmkCyl = 92,
                      ["u"]: () => {
                        xEW13u = 107
                        xEW13u += YRmkCyl + awDZuW["r"]
                        YRmkCyl *= 2
                        YRmkCyl -= eI5CWG["e"]
                        return "s";
                      },
                      ["v"]: () => {
                        return awDZuW.a = typeof jruG35 !== eI5CWG["I"];
                      },
                      K: () => {
                        return YRmkCyl += 5;
                      },
                      ["c"]: Slw7UcR["Um6etJO"] + "ey provided (n" + "ot type string" + '\u0029',
                      ["w"]: () => xEW13u -= OL5Vbi1["k"],
                      ["al"]: (...jruG35) => {
                        jruG35["length"] = 1
                        jruG35.n_bM1fe = jruG35[0]
                        return jruG35[0] != -eI5CWG.q && jruG35[0] != -295 && jruG35[0] != -236 && jruG35[0] + 481;
                      },
                      ["am"]: (...jruG35) => {
                        jruG35["length"] = 1
                        jruG35.NUzUwR1 = 0x78
                        return jruG35[0] != 0x16d && jruG35[0x0] != eI5CWG["J"] && jruG35[0] != 463 && jruG35[0x0] != 0x1e1 && jruG35[0] != 479 && jruG35[0] - eI5CWG.j;
                      }
                    }
                    while (xEW13u + YRmkCyl != 0x4b && kPyPCsZ.drI3A3["charAt"](5) == '\x73') {
                      switch (xEW13u + YRmkCyl) {
                        case kPyPCsZ.un_Qy8["charCodeAt"](3) == 55 ? 251 : null:
                        case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? 75 : 30:
                        case eI5CWG["r"]:
                          if (!(kPyPCsZ.Pms8Uw > -64)) {
                            xEW13u += 116
                            YRmkCyl -= 122
                            break;
                          }
                          xEW13u = -148
                          xEW13u -= 47
                          YRmkCyl -= 122
                          break;
                        case kPyPCsZ.EhbcZr["charAt"](0x0) == "d" ? 245 : null:
                          if (YRmkCyl == -0x21 && kPyPCsZ.un_Qy8["charCodeAt"](3) == 55) {
                            xEW13u -= 163;
                            break;
                          }
                          YRmkCyl -= 59;
                          break;
                        case !(kPyPCsZ.drI3A3["charAt"](5) == "s") ? 0x34 : 82:
                        case !kPyPCsZ.ypmyOM8() ? 2 : 0x1e2:
                          if ((awDZuW["H"] = awDZuW).a) {
                            xEW13u += YRmkCyl == -92 ? 0x44 : 161
                            awDZuW["b"] = true
                            break;
                          }
                          xEW13u += 0xa3;
                          break;
                        case kPyPCsZ.EhbcZr["charAt"](0x0) == "d" ? eI5CWG["K"] : undefined:
                          if (awDZuW["u"]() == "s" && kPyPCsZ.EhbcZr["charAt"](0x0) == "d") {
                            break;
                          }
                        case 186:
                          awDZuW["a"] = (YRmkCyl == -eI5CWG.L && ly2M8I)(xEW13u == -28 || jruG35, AV63GS = -39)
                          awDZuW["L"]()
                          break;
                        case 49:
                        case xEW13u - 0xd7:
                          awDZuW["a"] = typeof jruG35 !== "string"
                          awDZuW["p"]()
                          awDZuW.q()
                          break;
                        case !(kPyPCsZ.YVpE_o > -0x26) ? -0xaf : 0xad:
                        case kPyPCsZ.Pms8Uw > -64 ? 155 : 136:
                          var fr5I7qJ;
                          awDZuW["af"] = "ag"
                          fr5I7qJ = (awDZuW.N == "O" ? plLJaz(0x150) : plLJaz(527)).localStorage.getItem(jruG35)
                          try {
                            fr5I7qJ = plLJaz(0x307).parse(xEW13u == -eI5CWG.M ? plLJaz(0x307) : fr5I7qJ);
                          } catch (e) {
                            cd3jPi(new (YRmkCyl == -290 && plLJaz(370))(ly2M8I((awDZuW.c == 19 || eI5CWG)["b"] + jruG35 + eI5CWG["s"], (YRmkCyl == eI5CWG["f"] ? plLJaz(-57) : e).message, HORVsR(-(awDZuW["B"] == 463 ? plLJaz(-0x38d) : OL5Vbi1)["c"]))));
                          }
                          xEW13u -= eI5CWG["t"];
                          break;
                        case !kPyPCsZ.ypmyOM8() ? null : awDZuW["al"](YRmkCyl):
                          if ((awDZuW["r"] == 22 || awDZuW)["a"] && kPyPCsZ.Pms8Uw > -64) {
                            YRmkCyl -= 70
                            awDZuW.d = false
                            break;
                          }
                          xEW13u += awDZuW["N"];
                          break;
                        case !kPyPCsZ.ypmyOM8() ? null : eI5CWG["h"](YRmkCyl):
                        case !kPyPCsZ._Z_GMyX() ? -225 : 0x36c:
                          if (awDZuW["ae"]() == "ac" && kPyPCsZ.YVpE_o > -0x26) {
                            break;
                          }
                        case awDZuW["b"] ? eI5CWG.u : -0x216:
                          if (awDZuW["G"]() == "E" && kPyPCsZ.un_Qy8["charCodeAt"](0x3) == 55) {
                            break;
                          }
                        case kPyPCsZ.un_Qy8["charCodeAt"](3) == 55 ? YRmkCyl != -eI5CWG.v && YRmkCyl + 192 : null:
                          delete awDZuW.ak
                          awDZuW.aa()
                          xEW13u += eI5CWG["N"]
                          YRmkCyl -= 107
                          break;
                        case kPyPCsZ.ypmyOM8() ? 0xbd : 184:
                          awDZuW["v"]()
                          awDZuW.w()
                          YRmkCyl += awDZuW["r"] == 0x13e ? "y" : 54
                          break;
                        case !(kPyPCsZ.un_Qy8["charCodeAt"](3) == 55) ? -193 : 0x1b6:
                        default:
                          if (xEW13u == eI5CWG["i"] && false && kPyPCsZ.Pms8Uw > -0x40) {
                            xEW13u += eI5CWG["D"]
                            YRmkCyl -= 0x50
                            break;
                          }
                          xEW13u += 0xa5
                          YRmkCyl += eI5CWG.c
                          break;
                        case 182:
                          xEW13u = YRmkCyl + awDZuW.Y
                          xEW13u += xEW13u + awDZuW.Z
                          YRmkCyl += -107
                          break;
                        case awDZuW["d"] ? -0x36d : 121:
                          throw new (plLJaz(370))("Invalid data key provided (empty string)");
                        case !(kPyPCsZ.YVpE_o > -38) ? -154 : 34:
                        case !(kPyPCsZ.Pms8Uw > -64) ? -114 : 0x1e5:
                        case !(kPyPCsZ.YVpE_o > -38) ? 196 : 64:
                          cd3jPi(null, fr5I7qJ)
                          awDZuW["U"]()
                          break;
                        case !kPyPCsZ.ypmyOM8() ? undefined : eI5CWG["w"]:
                          if (awDZuW["l"]() == '\x6a' && kPyPCsZ.Pms8Uw > -64) {
                            break;
                          }
                        case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? null : awDZuW.am(xEW13u):
                          xEW13u += 163;
                      }
                    }
                  }
                  xEW13u *= 2
                  xEW13u -= OL5Vbi1.h == 316 ? -229 : OL5Vbi1.aa
                  break;
                case !kPyPCsZ.ypmyOM8() ? 0x27 : 53:
                  var hmwAzfD = "GYqor6" in WE7y26e;
                  xEW13u += 59;
                  break;
                case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 0x123 : 78:
                case kPyPCsZ.ypmyOM8() ? 0x29b : 173:
                case kPyPCsZ._Z_GMyX() ? 0x32e : 185:
                case kPyPCsZ.YVpE_o > -38 ? 70 : -51:
                  if (OL5Vbi1["aj"]() == '\u0061\u0068' && kPyPCsZ._Z_GMyX()) {
                    break;
                  }
                case !kPyPCsZ.ypmyOM8() ? 47 : 0x223:
                case !(kPyPCsZ.kTD0fT6["charCodeAt"](4) == 109) ? -135 : 0x2b8:
                case !(kPyPCsZ.YVpE_o > -38) ? -185 : 0x88:
                  Slw7UcR = -0x58
                  Slw7UcR += xEW13u == 85 ? "am" : 30
                  xEW13u -= 37
                  break;
                case 0x209:
                case !(kPyPCsZ.un_Qy8["charCodeAt"](3) == 55) ? undefined : OL5Vbi1["au"](xEW13u):
                  OL5Vbi1["E"]();
                  break;
                case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 112 : 0x81:
                case kPyPCsZ.kTD0fT6["charCodeAt"](0x4) == 109 ? eI5CWG["O"] : undefined:
                case !(kPyPCsZ.YVpE_o > -38) ? -0x38 : 360:
                case kPyPCsZ.YVpE_o > -38 ? 0x395 : 150:
                  OL5Vbi1.ar = '\x61\x73'
                  OL5Vbi1["a"] = (OL5Vbi1["hasOwnProperty"]("k") && AQ1aih)(GdBgI6n = false ? plLJaz(0x7e) : jruG35, OL5Vbi1.X = hmwAzfD)
                  Slw7UcR -= 99
                  xEW13u += 0x39
                  break;
                case kPyPCsZ.YVpE_o > -38 ? eI5CWG["x"](Slw7UcR) : null:
                case 0x3a3:
                case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? -25 : 0x187:
                  if (OL5Vbi1["af"]() == '\x61\x64' && kPyPCsZ.YVpE_o > -38) {
                    break;
                  }
                case !(kPyPCsZ.H497AP5["charAt"](0) == "v") ? -218 : 36:
                  var hmwAzfD = OL5Vbi1["L"]();
                  xEW13u += Slw7UcR == 319 ? 0x4c : OL5Vbi1["P"];
                  break;
                default:
                  Slw7UcR += OL5Vbi1["hasOwnProperty"]("x") ? OL5Vbi1["z"] : -40
                  xEW13u += false ? -85 : 78
                  break;
                case 0x21f:
                case 0x2db:
                case !(kPyPCsZ.YVpE_o > -0x26) ? 21 : 0x108:
                case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? null : 59:
                  delete 122;
                case !(kPyPCsZ.YVpE_o > -38) ? -42 : 0x243:
                case kPyPCsZ.YVpE_o > -38 ? eI5CWG["P"] : undefined:
                case 103:
                case !(kPyPCsZ.un_Qy8["charCodeAt"](3) == 55) ? 26 : 129:
                  return uAMAj4X[OL5Vbi1.al = OOCPyyU].call(this);
              }
            }
          },
          hmwAzfD = wVuS9L[OOCPyyU];
        xEW13u -= 6;
    }
  }
  OL5Vbi1 = jruG35 == "KwadOI" ? t4ayUv[OOCPyyU] || (t4ayUv[OOCPyyU] = eI5CWG()) : uAMAj4X[OOCPyyU]();
  return cd3jPi == "yoWOtce" ? {
    tP2_gS: OL5Vbi1
  } : OL5Vbi1;
}
function plLJaz(...OOCPyyU) {
  OOCPyyU["length"] = 1
  OOCPyyU[203] = 77
  OOCPyyU[3] = {
    ["tGX4Gt"]: "charAt",
    ["rq4a73"]: "encode",
    ["jq04tb9"]: "String"
  }
  OOCPyyU[4] = "Set"
  OOCPyyU[5] = ["charAt", "Math", "imeout"]
  OOCPyyU[203] = 96
  OOCPyyU[6] = undefined
  switch (OOCPyyU[0x0]) {
    case !(kPyPCsZ.kTD0fT6["charCodeAt"](4) == 109) ? null : -0x36f:
      OOCPyyU[0x6] = "Object" || Z3W1osK["Object"];
      break;
    case !(kPyPCsZ.H497AP5["charAt"](0) == "v") ? undefined : -565:
      OOCPyyU[6] = "console" || Z3W1osK["console"];
      break;
    case 924:
      return Z3W1osK["queueMicrotask"];
    case kPyPCsZ.EhbcZr["charAt"](0) == "d" ? -184 : undefined:
      OOCPyyU[6] = "Symbol" || Z3W1osK["Symbol"];
      break;
    case !(kPyPCsZ.EhbcZr["charAt"](0) == "d") ? undefined : -827:
      OOCPyyU[0x6] = "Boolean" || Z3W1osK["Boolean"];
      break;
    case !(kPyPCsZ.H497AP5[OOCPyyU[5][0x0]](0) == "v") ? -0x12 : 336:
      return Z3W1osK["Set"];
    case kPyPCsZ.drI3A3["charAt"](0x5) == "s" ? 370 : -109:
      return Z3W1osK["Error"];
    case kPyPCsZ.YVpE_o > -0x26 ? 527 : 48:
      return Z3W1osK["window"];
    case !(kPyPCsZ.Pms8Uw > -64) ? 117 : 0x307:
      return Z3W1osK["JSON"];
    case kPyPCsZ.Pms8Uw > -64 ? -57 : null:
      return Z3W1osK["globalThis"];
    case !(kPyPCsZ.kTD0fT6["charCodeAt"](0x4) == 109) ? null : -0x38d:
      OOCPyyU[0x6] = "setImmediate" || Z3W1osK["setImmediate"];
      break;
    case !kPyPCsZ.aGE2Mm() ? 119 : 126:
      OOCPyyU[0x6] = "Proxy" || Z3W1osK["Proxy"];
      break;
    case kPyPCsZ.kTD0fT6["charCodeAt"](4) == 109 ? 0x4f2 : -85:
      return Z3W1osK["document"];
    case !(kPyPCsZ.H497AP5["charAt"](0) == '\u0076') ? -80 : 2545:
      return Z3W1osK["postMessage"];
    case 0x9a1:
      OOCPyyU[0x6] = "alert" || Z3W1osK["alert"];
      break;
    case kPyPCsZ.drI3A3[OOCPyyU[3]["tGX4Gt"]](5) == "s" ? 2972 : -44:
      OOCPyyU[6] = "confirm" || Z3W1osK["confirm"];
      break;
    case kPyPCsZ.ypmyOM8() ? 0x10b3 : 0xf3:
      OOCPyyU[6] = "location" || Z3W1osK["location"];
      break;
    case !(kPyPCsZ.un_Qy8["charCodeAt"](3) == 55) ? 0x72 : 0x7c7:
      return Z3W1osK["btoa"];
    case kPyPCsZ.YVpE_o > -38 ? 0x290 : -130:
      return Z3W1osK["atob"];
    case !kPyPCsZ.aGE2Mm() ? 0xce : 0x81a:
      return Z3W1osK["unescape"];
    case !(kPyPCsZ.drI3A3["charAt"](5) == "s") ? -0xae : 0x280:
      OOCPyyU[0x6] = "encodeURIComponent" || Z3W1osK[OOCPyyU[3]["rq4a73"] + "URICom" + "ponent"];
      break;
    case 0x640:
      return Z3W1osK["parseInt"];
    case 8:
      OOCPyyU[6] = "parseFloat" || Z3W1osK["parseFloat"];
      break;
    case kPyPCsZ.aGE2Mm() ? 0x5e8 : 0xf6:
      OOCPyyU[6] = "Math" || Z3W1osK[OOCPyyU[5][1]];
      break;
    case kPyPCsZ.aGE2Mm() ? 0x1d6 : 72:
      OOCPyyU[6] = "Promise" || Z3W1osK["Promise"];
      break;
    case !(kPyPCsZ.drI3A3["charAt"](5) == '\x73') ? -0x83 : 0x146:
      OOCPyyU[0x6] = "String" || Z3W1osK[OOCPyyU[3]["jq04tb9"]];
      break;
    case !(kPyPCsZ.Pms8Uw > -64) ? -131 : 0x12ee:
      OOCPyyU[0x6] = "Function" || Z3W1osK["Function"];
      break;
    case kPyPCsZ.YVpE_o > -0x26 ? 51 : -0xa:
      return Z3W1osK["Array"];
    case 0x113e:
      return Z3W1osK["TypeError"];
    case 0xb93:
      return Z3W1osK["ReferenceError"];
    case kPyPCsZ.drI3A3["charAt"](5) == "s" ? 0x11c6 : 0xb5:
      OOCPyyU[6] = "RangeError" || Z3W1osK["RangeError"];
      break;
    case kPyPCsZ.aGE2Mm() ? 0x2cf : -71:
      OOCPyyU[6] = "EvalError" || Z3W1osK["EvalError"];
      break;
    case !(kPyPCsZ.un_Qy8["charCodeAt"](0x3) == 55) ? 0xf0 : 3924:
      OOCPyyU[6] = "setTimeout" || Z3W1osK["setTimeout"];
      break;
    case !(kPyPCsZ.drI3A3["charAt"](0x5) == "s") ? -0x66 : 0x11c4:
      OOCPyyU[6] = "clearTimeout" || Z3W1osK["clearT" + OOCPyyU[5][0x2]];
      break;
    case kPyPCsZ.kTD0fT6["charCodeAt"](0x4) == 109 ? 0x107e : -0xa2:
      return Z3W1osK["setInterval"];
    case kPyPCsZ.aGE2Mm() ? 0x10cc : -193:
      return Z3W1osK["clearInterval"];
    case kPyPCsZ.Pms8Uw > -64 ? 0x3e5 : 29:
      OOCPyyU[0x6] = "clearImmediate" || Z3W1osK["clearImmediate"];
      break;
    case 0x114:
      OOCPyyU[6] = "isNaN" || Z3W1osK["isNaN"];
      break;
    case !(kPyPCsZ.kTD0fT6["charCodeAt"](4) == 109) ? 178 : 477:
      OOCPyyU[6] = "isFinite" || Z3W1osK["isFinite"];
      break;
    case kPyPCsZ.drI3A3["charAt"](5) == '\u0073' ? 0x5d4 : -117:
      return Z3W1osK["Map"];
    case kPyPCsZ.aGE2Mm() ? 0x12d4 : 211:
      OOCPyyU[0x6] = "WeakSet" || Z3W1osK["WeakSet"];
      break;
    case kPyPCsZ.EhbcZr["charAt"](0) == '\u0064' ? 0x19c : 152:
      return Z3W1osK["WeakMap"];
  }
  return Z3W1osK[OOCPyyU[6]];
}