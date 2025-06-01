
const plateApiUrl = "https://apphq.longhuvip.com/w1/api/index.php?Order=1&a=RealRankingInfo&st=30&apiv=w21&Type=1&c=ZhiShuRanking&PhoneOSNew=1&VerSion=5&ZSType=7&",
  sonPlateApiUrl = "https://apphq.longhuvip.com/w1/api/index.php?a=SonPlate_Info&PhoneOSNew=2&Token=0&UserID=0&VerSion=5.12.0.1&c=ZhiShuRanking&apiv=w26&PlateID=";
let platesList = [],
  currentPlateId = null,
  currentSubPlateId = null,
  currentPlateName = "",
  currentSubPlateName = "";
async function fetchPlates() {
  try {
    {
      const _0x2f609a = await fetch(plateApiUrl),
        _0x10ed1f = await _0x2f609a.json();
      platesList = _0x10ed1f.list.slice(0, 30);
      updatePlateTable();
      if (platesList.length > 0) {
        currentPlateId = platesList[0][0];
        currentPlateName = platesList[0][1];
        displayComponentStocks(currentPlateId);
        setActivePlate(0);
        for (let _0x224652 = 0; _0x224652 < Math.min(10, platesList.length); _0x224652++) {
          calculateLimitUpCount(platesList[_0x224652][0], _0x224652, platesList[_0x224652][1]);
        }
      }
    }
  } catch (_0x19262d) {
    console.error("获取板块数据失败:", _0x19262d);
  }
}
function updatePlateTable() {
  const _0x59dbb2 = document.getElementById("plate-table-body");
  _0x59dbb2.innerHTML = "";
  platesList.forEach((_0x185a49, _0x21de1c) => {
    const _0x17106d = _0x59dbb2.insertRow();
    _0x17106d.dataset.plateId = _0x185a49[0];
    const _0x4f23d1 = _0x17106d.insertCell(0),
      _0x7a3ba9 = _0x17106d.insertCell(1),
      _0x1b9c0a = _0x17106d.insertCell(2),
      _0x512bd6 = _0x17106d.insertCell(3),
      _0x4ae040 = _0x17106d.insertCell(4);
    _0x4f23d1.innerText = _0x21de1c + 1;
    _0x7a3ba9.innerText = _0x185a49[1];
    _0x1b9c0a.innerText = _0x185a49[2];
    _0x512bd6.innerText = parseFloat(_0x185a49[3]).toFixed(2);
    _0x4ae040.innerText = " ";
    const _0x28d77b = parseFloat(_0x185a49[3]);
    if (_0x28d77b > 0) _0x512bd6.classList.add("positive-change");else _0x28d77b < 0 && _0x512bd6.classList.add("negative-change");
    _0x17106d.onclick = async _0x817406 => {
      _0x817406.stopPropagation();
      setActivePlate(_0x21de1c);
      currentPlateId = _0x185a49[0];
      currentPlateName = _0x185a49[1];
      currentSubPlateId = null;
      currentSubPlateName = "";
      await displayComponentStocks(currentPlateId);
      await fetchSubPlates(currentPlateId, _0x17106d);
      calculateLimitUpCount(currentPlateId, _0x21de1c, currentPlateName);
    };
  });
}
function setActivePlate(_0x4eed31) {
  const _0x142eaa = document.querySelectorAll("#plate-table-body tr");
  _0x142eaa.forEach((_0x3a51e1, _0xcf7742) => {
    if (_0xcf7742 === _0x4eed31) {
      _0x3a51e1.classList.add("active");
    } else _0x3a51e1.classList.remove("active");
  });
}
async function fetchSubPlates(_0x357657, _0x54e639) {
  try {
    const _0x1aecf5 = "" + sonPlateApiUrl + _0x357657,
      _0x12b4a2 = await fetch(_0x1aecf5),
      _0x3b175b = await _0x12b4a2.json(),
      _0x249685 = _0x3b175b.List;
    if (_0x249685 && _0x249685.length > 0) {
      const _0x56b7e4 = document.getElementById("sub-plate-table-body");
      _0x56b7e4.innerHTML = "";
      _0x249685.forEach(_0x39f5a5 => {
        {
          const _0x10980b = _0x56b7e4.insertRow();
          _0x10980b.dataset.plateId = _0x39f5a5[0];
          _0x10980b.innerHTML = "  \n <td>" + _0x39f5a5[1] + "</td>  \n <td>" + _0x39f5a5[2] + "</td>  \n ";
          _0x10980b.onclick = _0x13e0b2 => {
            _0x13e0b2.stopPropagation();
            currentSubPlateId = _0x39f5a5[0];
            currentSubPlateName = _0x39f5a5[1];
            displayComponentStocks(currentSubPlateId);
            calculateLimitUpCount(currentSubPlateId, null, currentSubPlateName);
          };
        }
      });
      showSubPlateWindow();
    }
  } catch (_0x35dc71) {
    console.error("获取子板块数据失败:", _0x35dc71);
  }
}
function showSubPlateWindow() {
  const _0x13b761 = document.getElementById("sub-plate-window");
  _0x13b761.style.display = "block";
}
async function displayComponentStocks(_0x165537) {
  const _0xd9a80 = "https://apphq.longhuvip.com/w1/api/index.php?Order=1&st=60&a=ZhiShuStockList_W8&c=ZhiShuRanking&PhoneOSNew=1&apiv=W21&Type=6&PlateID=" + _0x165537;
  let _0xb74aea = [],
    _0x137a75 = 0,
    _0x15a6bf = true;
  try {
    {
      while (_0x15a6bf) {
        const _0x45c333 = _0xd9a80 + "&Index=" + _0x137a75,
          _0x280660 = await fetch(_0x45c333),
          _0x407195 = await _0x280660.json(),
          _0x1df754 = _0x407195.list || [];
        _0x1df754.length > 0 ? (_0xb74aea = _0xb74aea.concat(_0x1df754), _0x137a75 += _0x1df754.length) : _0x15a6bf = false;
      }
      const _0x46a872 = document.getElementById("data-table-body");
      _0x46a872.innerHTML = "";
      const _0x4947d2 = document.getElementById("stock-count");
      _0x4947d2.innerText = "(" + _0xb74aea.length + ")";
      _0xb74aea.forEach(_0x171891 => {
        const _0x272d80 = _0x46a872.insertRow();
        _0x272d80.setAttribute("data-stock-code", _0x171891[0]);
        const _0xdeebfc = _0x272d80.insertCell(0),
          _0x3956d9 = _0x272d80.insertCell(1),
          _0x528c17 = _0x272d80.insertCell(2),
          _0x4ded96 = _0x272d80.insertCell(3),
          _0x37cbf1 = _0x272d80.insertCell(4),
          _0x482685 = _0x272d80.insertCell(5),
          _0x245d64 = _0x171891[1] || "",
          _0x40135f = "http://www.treeid/code_" + _0x171891[0];
        _0xdeebfc.innerText = _0x245d64;
        _0x3956d9.innerText = _0x171891[5] ? _0x171891[5].toFixed(2) : "";
        _0x528c17.innerText = _0x171891[6] !== undefined ? _0x171891[6] ? _0x171891[6].toFixed(2) + "%" : "" : "";
        _0x4ded96.innerText = _0x171891[4] || "";
        _0x37cbf1.innerText = _0x171891[24] || "";
        _0x482685.innerText = _0x171891[23] || "";
        const _0x3ede25 = parseFloat(_0x171891[6]);
        if (_0x3ede25 > 0) _0x528c17.classList.add("positive-change");else _0x3ede25 < 0 && _0x528c17.classList.add("negative-change");
        _0x272d80.style.cursor = "pointer";
        _0x272d80.addEventListener("click", () => {
          window.location.href = _0x40135f;
        });
        _0x171891[23] && !_0x171891[23].includes("昨") && _0x482685.classList.add("highlight-limit-up");
      });
      if (_0xb74aea.length === 0) {
        {
          const _0x5211e3 = _0x46a872.insertRow(),
            _0x543eee = _0x5211e3.insertCell(0);
          _0x543eee.colSpan = 6;
          _0x543eee.innerText = "没有找到股票数据";
        }
      }
    }
  } catch (_0x2f8a0a) {
    console.error("获取股票数据失败:", _0x2f8a0a);
  }
}
document.getElementById("collectStocksBtn").onclick = function (_0x4cd903) {
  _0x4cd903.preventDefault();
  const _0x42b101 = document.querySelectorAll("#data-table-body tr");
  let _0x21aa58 = [];
  _0x42b101.forEach(_0x1e4d80 => {
    const _0x3a1513 = _0x1e4d80.getAttribute("data-stock-code");
    if (_0x3a1513) {
      let _0x47176d;
      if (_0x3a1513.startsWith("6")) _0x47176d = "1#" + _0x3a1513;else {
        if (_0x3a1513.startsWith("0") || _0x3a1513.startsWith("3")) {
          _0x47176d = "0#" + _0x3a1513;
        } else (_0x3a1513.startsWith("4") || _0x3a1513.startsWith("8") || _0x3a1513.startsWith("9")) && (_0x47176d = "2#" + _0x3a1513);
      }
      _0x47176d && _0x21aa58.push(_0x47176d);
    }
  });
  if (_0x21aa58.length > 0) {
    const _0x1eed91 = _0x21aa58.join("|"),
      _0x312cb6 = "http://www.treeid/AddToBlock_" + _0x1eed91;
    navigator.clipboard.writeText(_0x1eed91).then(() => {
      alert("股票代码已复制到剪贴板。");
      window.location.href = _0x312cb6;
    }).catch(_0x54a8a6 => {
      const _0x4b4f78 = document.createElement("textarea");
      _0x4b4f78.value = _0x1eed91;
      document.body.appendChild(_0x4b4f78);
      _0x4b4f78.select();
      try {
        document.execCommand("copy");
        window.location.href = _0x312cb6;
      } catch (_0x201cef) {
        alert("复制到剪贴板失败: " + _0x201cef);
      }
      document.body.removeChild(_0x4b4f78);
    });
  } else alert("没有可收集的股票。");
};
async function calculateLimitUpCount(_0x4bab1f, _0x4e6d0d, _0x45ff46) {
  if (_0x4e6d0d === null) return;
  const _0x515b9a = "https://apphq.longhuvip.com/w1/api/index.php?Order=1&st=60&a=ZhiShuStockList_W8&c=ZhiShuRanking&PhoneOSNew=1&apiv=W21&Type=6&PlateID=" + _0x4bab1f;
  let _0x207710 = [],
    _0x4a9043 = 0,
    _0x16e16d = true;
  try {
    while (_0x16e16d) {
      const _0x86194b = _0x515b9a + "&Index=" + _0x4a9043,
        _0xc22ff8 = await fetch(_0x86194b),
        _0x2b5c07 = await _0xc22ff8.json(),
        _0x3d6ce3 = _0x2b5c07.list || [];
      _0x3d6ce3.length > 0 ? (_0x207710 = _0x207710.concat(_0x3d6ce3), _0x4a9043 += _0x3d6ce3.length) : _0x16e16d = false;
    }
    let _0x59e8ce = 0;
    _0x207710.forEach(_0x1327c5 => {
      const _0x3e5a48 = _0x1327c5[1] || "",
        _0x3fc500 = _0x1327c5[23] || "",
        _0x36e71a = _0x1327c5[6] || 0;
      if (_0x45ff46 === "北交所") {
        _0x36e71a >= 29.9 && !_0x3e5a48.toLowerCase().includes("st") && _0x59e8ce++;
      } else _0x3fc500 && !_0x3fc500.includes("昨") && !_0x3e5a48.toLowerCase().includes("st") && _0x59e8ce++;
    });
    const _0x396b22 = document.querySelectorAll("#plate-table-body tr");
    if (_0x4e6d0d < 10 && _0x396b22[_0x4e6d0d]) {
      {
        const _0x1932ac = _0x396b22[_0x4e6d0d].cells[4];
        _0x1932ac.innerText = _0x59e8ce;
        _0x59e8ce > 0 && _0x1932ac.classList.add("highlight-limit-up");
      }
    }
  } catch (_0x48ac4c) {
    console.error("获取股票数据失败:", _0x48ac4c);
  }
}
document.addEventListener("click", function (_0x582113) {
  const _0x8554a5 = document.getElementById("sub-plate-window");
  !_0x8554a5.contains(_0x582113.target) && !_0x582113.target.closest("#plate-table") && (_0x8554a5.style.display = "none");
});
document.querySelector("#sub-plate-window .close-btn").onclick = function () {
  document.getElementById("sub-plate-window").style.display = "none";
};
fetchPlates();