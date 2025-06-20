
let currentMode = "sprint";
let currentDate = new Date().toISOString().split("T")[0];
let currentSort = {
  column: null,
  direction: "asc"
};
let selectedStockCode = null;
let intervalId = null;
let isAutoRefreshEnabled = false;
let continuousLimitCache = JSON.parse(localStorage.getItem("continuousLimitData")) || {};
let lbcodes = getRecentContinuousLimit();
(async function init() {
  updateTableHeader(currentMode);
  fetchAndRenderData();
  startAutoRefresh();
})();
function getRecentContinuousLimit() {
  const _0x20531d = Object.keys(continuousLimitCache).sort((_0x3a2420, _0x42a9af) => new Date(_0x42a9af) - new Date(_0x3a2420));
  const _0x20b63a = _0x20531d.findIndex(_0x58a90d => _0x58a90d === currentDate);
  let _0x548d37 = _0x20b63a === -1 ? 0 : Math.max(0, _0x20b63a - 2);
  const _0x19e1c1 = _0x20531d.slice(_0x548d37, _0x548d37 + 3);
  const _0x4c5ff3 = _0x19e1c1.reduce((_0x2320ee, _0x463084) => {
    continuousLimitCache[_0x463084] && _0x2320ee.push(...continuousLimitCache[_0x463084]);
    return _0x2320ee;
  }, []);
  return [...new Set(_0x4c5ff3)];
}
function isTradingTime() {
  const _0x4ba593 = new Date();
  const _0x3abc16 = 480;
  const _0x461edd = _0x4ba593.getTime() + (_0x4ba593.getTimezoneOffset() + _0x3abc16) * 60 * 1000;
  const _0x2ec6b7 = new Date(_0x461edd);
  const _0x4d905d = _0x2ec6b7.getHours();
  const _0x5565c6 = _0x2ec6b7.getMinutes();
  const _0x13d0b9 = _0x4d905d * 60 + _0x5565c6;
  const _0x316c89 = _0x2ec6b7.getDay() === 0 || _0x2ec6b7.getDay() === 6;
  if (_0x316c89) {
    return false;
  }
  return _0x13d0b9 >= 565 && _0x13d0b9 <= 690 || _0x13d0b9 >= 780 && _0x13d0b9 <= 900;
}
function startAutoRefresh() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  function _0x33d49d() {
    const _0x39904e = new Date().toISOString().split("T")[0];
    return currentDate === _0x39904e && isTradingTime() || isAutoRefreshEnabled;
  }
  intervalId = setInterval(async () => {
    _0x33d49d() && (await fetchAndRenderData(), await updateRealtimeData());
  }, 5000);
  _0x33d49d() && fetchAndRenderData().then(updateRealtimeData);
}
function updateTableHeader(_0x126d9d) {
  const _0x3671f1 = {
    continuousLimit: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "latest"
    }, {
      text: "涨幅",
      sort: "change_rate"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "形态",
      sort: "limit_up_type"
    }, {
      text: "几天几板",
      sort: "high_days"
    }, {
      text: "封单额",
      sort: "order_amount"
    }, {
      text: "换手率",
      sort: "turnover_rate"
    }, {
      text: "流通市值",
      sort: "currency_value"
    }],
    limitUp: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "latest"
    }, {
      text: "涨幅",
      sort: "change_rate"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "首封时间",
      sort: "first_limit_up_time"
    }, {
      text: "终封时间",
      sort: "last_limit_up_time"
    }, {
      text: "形态",
      sort: "limit_up_type"
    }, {
      text: "开板",
      sort: "open_num"
    }, {
      text: "几天几板",
      sort: "high_days"
    }, {
      text: "封单额",
      sort: "order_amount"
    }, {
      text: "年封板率",
      sort: "limit_up_suc_rate"
    }, {
      text: "换手率",
      sort: "turnover_rate"
    }, {
      text: "流通市值",
      sort: "currency_value"
    }, {
      text: "涨停原因",
      sort: "reason_type"
    }],
    breakLimit: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "latest"
    }, {
      text: "涨幅",
      sort: "change_rate"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "涨速",
      sort: "rise_rate"
    }, {
      text: "开板",
      sort: "open_num"
    }, {
      text: "成交额",
      sort: "turnover"
    }, {
      text: "换手率",
      sort: "turnover_rate"
    }, {
      text: "年封板率",
      sort: "limit_up_suc_rate"
    }, {
      text: "流通市值",
      sort: "currency_value"
    }],
    limitDown: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "latest"
    }, {
      text: "涨幅",
      sort: "change_rate"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "首次跌停",
      sort: "first_limit_down_time"
    }, {
      text: "最后跌停",
      sort: "last_limit_down_time"
    }, {
      text: "换手率",
      sort: "turnover_rate"
    }, {
      text: "流通市值",
      sort: "currency_value"
    }],
    sprint: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "latest"
    }, {
      text: "涨幅",
      sort: "change_rate"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "涨速",
      sort: "rise_rate"
    }, {
      text: "成交额",
      sort: "turnover"
    }, {
      text: "换手率",
      sort: "turnover_rate"
    }, {
      text: "年封板率",
      sort: "limit_up_suc_rate"
    }, {
      text: "流通市值",
      sort: "currency_value"
    }],
    sharpWithdrawal: [{
      text: "代码",
      sort: "code"
    }, {
      text: "简称",
      sort: "name"
    }, {
      text: "价格",
      sort: "xj"
    }, {
      text: "涨幅",
      sort: "zf"
    }, {
      text: "开幅",
      sort: "open_rate"
    }, {
      text: "最大回撤",
      sort: "max_drawdown"
    }, {
      text: "主力属性",
      sort: "attribute"
    }]
  };
  const _0x550a5b = document.querySelector("#tableHeader");
  _0x550a5b.innerHTML = "";
  _0x3671f1[_0x126d9d].forEach(_0x16bf67 => {
    const _0x3c367b = document.createElement("th");
    _0x3c367b.textContent = _0x16bf67.text;
    _0x3c367b.dataset.sort = _0x16bf67.sort;
    _0x3c367b.onclick = () => sortTable(_0x16bf67.sort);
    _0x550a5b.appendChild(_0x3c367b);
  });
}
async function fetchAndRenderData() {
  try {
    let _0x2558b9;
    let _0x5f38ea;
    const _0x4b43b9 = new Date().toISOString().split("T")[0];
    const _0x203a93 = currentDate === _0x4b43b9;
    const _0x47ffd1 = currentDate ? "&date=" + currentDate.replace(/-/g, "") : "";
    switch (currentMode) {
      case "continuousLimit":
        _0x5f38ea = "https://data.10jqka.com.cn/dataapi/limit_up/continuous_limit_pool?page=1&limit=200&field=199112%2C10%2C330329%2C330325%2C133971%2C133970%2C1968584%2C3475914%2C3541450%2C9004&filter=HS%2CGEM2STAR&order_field=330329&order_type=0" + _0x47ffd1;
        break;
      case "limitUp":
        _0x5f38ea = "https://data.10jqka.com.cn/dataapi/limit_up/limit_up_pool?page=1&limit=200&field=199112%2C10%2C9001%2C330323%2C330324%2C330325%2C9002%2C330329%2C133971%2C133970%2C1968584%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=133970&order_type=0" + _0x47ffd1;
        break;
      case "sprint":
        _0x5f38ea = "https://data.10jqka.com.cn/dataapi/limit_up/limit_up?page=1&limit=200&field=199112%2C10%2C48%2C1968584%2C19%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=48&order_type=0" + _0x47ffd1;
        break;
      case "breakLimit":
        _0x5f38ea = "https://data.10jqka.com.cn/dataapi/limit_up/open_limit_pool?page=1&limit=200&field=199112%2C9002%2C48%2C1968584%2C19%2C3475914%2C9003%2C10%2C9004&filter=HS%2CGEM2STAR&order_field=199112&order_type=0" + _0x47ffd1;
        break;
      case "limitDown":
        _0x5f38ea = "https://data.10jqka.com.cn/dataapi/limit_up/lower_limit_pool?page=1&limit=200&field=199112%2C10%2C330333%2C330334%2C1968584%2C3475914%2C9004&filter=HS%2CGEM2STAR&order_field=330334&order_type=0" + _0x47ffd1;
        break;
      case "sharpWithdrawal":
        _0x5f38ea = _0x203a93 ? "https://apphwhq.longhuvip.com/w1/api/index.php?Index=0&Order=0&PhoneOSNew=2&Type=0&VerSion=5.13.0.7&a=SharpWithdrawalList&apiv=w35&c=HomeDingPan&st=30" : "https://apphis.longhuvip.com/w1/api/index.php?Index=0&Order=0&PhoneOSNew=2&Type=0&VerSion=5.13.0.9&a=SharpWithdrawalList&apiv=w35&c=HisHomeDingPan&st=30&Day=" + currentDate;
        break;
    }
    const _0x20812a = await fetch(_0x5f38ea);
    let _0x23bc41;
    if (currentMode === "sharpWithdrawal") {
      if (_0x203a93) {
        _0x23bc41 = await _0x20812a.json();
      } else {
        const _0x665167 = await _0x20812a.text();
        _0x23bc41 = JSON.parse(_0x665167);
      }
      _0x2558b9 = _0x23bc41.info || [];
    } else {
      _0x23bc41 = await _0x20812a.json();
      _0x2558b9 = _0x23bc41.data?.["info"] || [];
    }
    if (currentMode === "continuousLimit") {
      const _0x454a61 = _0x2558b9.map(_0x5957b8 => _0x5957b8.code);
      const _0x549895 = new Date(currentDate).toISOString().split("T")[0];
      continuousLimitCache[_0x549895] = _0x454a61;
      const _0x1c1c93 = Object.keys(continuousLimitCache).sort();
      _0x1c1c93.length > 60 && _0x1c1c93.slice(0, _0x1c1c93.length - 60).forEach(_0x788e62 => {
        delete continuousLimitCache[_0x788e62];
      });
      localStorage.setItem("continuousLimitData", JSON.stringify(continuousLimitCache));
    }
    renderTable(_0x2558b9);
    currentSort.column && sortTable(currentSort.column);
  } catch (_0xa5a3d6) {
    console.error("获取数据失败:", _0xa5a3d6);
    const _0x1be31a = document.getElementById("tableBody");
    _0x1be31a.innerHTML = "<tr><td colspan=\"17\" style=\"text-align: center; color: red;\">获取数据失败，请刷新页面重试</td></tr>";
  }
}
async function updateRealtimeData() {
  const _0x1dded7 = Array.from(document.querySelectorAll("#tableBody tr td:nth-child(1)")).map(_0x371ebc => _0x371ebc.textContent);
  const _0x3eb42a = _0x1dded7.map(_0x370894 => "" + getScStr(_0x370894) + _0x370894).join(",");
  try {
    const _0x10eb83 = await getSinaStockHq(_0x3eb42a);
    const _0x236db5 = _0x10eb83.reduce((_0x33d850, _0x172f7e) => {
      _0x33d850[_0x172f7e.code] = _0x172f7e;
      return _0x33d850;
    }, {});
    document.querySelectorAll("#tableBody tr").forEach(_0x4db7e4 => {
      const _0xd0274a = _0x4db7e4.cells[0].textContent;
      const _0xe2ead7 = _0x236db5[_0xd0274a];
      if (!_0xe2ead7) {
        return;
      }
      const _0x307cdb = {
        continuousLimit: {
          price: 2,
          change: 3,
          openChange: 4
        },
        limitUp: {
          price: 2,
          change: 3,
          openChange: 4
        },
        breakLimit: {
          price: 2,
          change: 3,
          openChange: 4
        },
        limitDown: {
          price: 2,
          change: 3,
          openChange: 4
        },
        sprint: {
          price: 2,
          change: 3,
          openChange: 4
        },
        sharpWithdrawal: {
          price: 2,
          change: 3,
          openChange: 4
        }
      }[currentMode];
      _0x4db7e4.cells[_0x307cdb.price].textContent = _0xe2ead7.xj.toFixed(2);
      _0x4db7e4.cells[_0x307cdb.change].textContent = formatPercent(_0xe2ead7.kf).replace("%", "");
      _0x4db7e4.cells[_0x307cdb.openChange].textContent = formatPercent(_0xe2ead7.zf).replace("%", "");
      _0x4db7e4.cells[_0x307cdb.change].className = _0xe2ead7.kf >= 0 ? "positive" : "negative";
      _0x4db7e4.cells[_0x307cdb.openChange].className = _0xe2ead7.zf >= 0 ? "positive" : "negative";
    });
  } catch (_0x3ecae0) {
    console.error("实时数据更新失败:", _0x3ecae0);
  }
}
function formatPercent(_0x2546e0) {
  if (typeof _0x2546e0 !== "number") {
    return "0.00";
  }
  return _0x2546e0.toFixed(2);
}
function formatNumber(_0x5c8675) {
  try {
    const _0x2b8c36 = Number(_0x5c8675);
    if (isNaN(_0x2b8c36)) {
      return "0";
    }
    if (_0x2b8c36 >= 100000000) {
      return (_0x2b8c36 / 100000000).toFixed(2).replace(/\.?0+$/, "") + "亿";
    }
    if (_0x2b8c36 >= 10000) {
      return (_0x2b8c36 / 10000).toFixed(0).replace(/\.?0+$/, "") + "万";
    }
    return _0x2b8c36.toString();
  } catch {
    return "0";
  }
}
function formatTime(_0x96daf) {
  if (!_0x96daf) {
    return "";
  }
  const _0xc5bd0a = new Date(parseInt(_0x96daf));
  return _0xc5bd0a.getHours().toString().padStart(2, "0") + ":" + _0xc5bd0a.getMinutes().toString().padStart(2, "0") + ":" + _0xc5bd0a.getSeconds().toString().padStart(2, "0");
}
function renderTable(_0x3558ae) {
  const _0x417089 = document.getElementById("tableBody");
  _0x417089.innerHTML = "";
  if (_0x3558ae.length === 0) {
    _0x417089.innerHTML = "<tr><td colspan=\"17\" style=\"text-align: center;\">暂无数据</td></tr>";
    return;
  }
  const _0x3c6813 = {
    sprint: [3, 4, 5],
    breakLimit: [3, 4, 5],
    sharpWithdrawal: [3, 4, 5],
    limitUp: [3, 4],
    limitDown: [3, 4],
    continuousLimit: [3, 4]
  };
  _0x3558ae.forEach(_0x4638fe => {
    const _0x48255e = document.createElement("tr");
    _0x48255e.onclick = () => handleRowClick(_0x4638fe.code || _0x4638fe[0]);
    let _0x590564 = [];
    switch (currentMode) {
      case "continuousLimit":
        _0x590564 = [_0x4638fe.code, _0x4638fe.name, _0x4638fe.latest, formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.change_rate), _0x4638fe.limit_up_type, _0x4638fe.high_days, formatNumber(_0x4638fe.order_amount), formatPercent(_0x4638fe.turnover_rate), formatNumber(_0x4638fe.currency_value)];
        break;
      case "limitUp":
        _0x590564 = [_0x4638fe.code, _0x4638fe.name, _0x4638fe.latest, formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.change_rate), formatTime(_0x4638fe.first_limit_up_time), formatTime(_0x4638fe.last_limit_up_time), _0x4638fe.limit_up_type, _0x4638fe.open_num, _0x4638fe.high_days, formatNumber(_0x4638fe.order_amount), formatPercent(_0x4638fe.limit_up_suc_rate * 100), formatPercent(_0x4638fe.turnover_rate), formatNumber(_0x4638fe.currency_value), _0x4638fe.reason_type];
        break;
      case "breakLimit":
        _0x590564 = [_0x4638fe.code, _0x4638fe.name, _0x4638fe.latest, formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.rise_rate), _0x4638fe.open_num, formatNumber(_0x4638fe.turnover), formatPercent(_0x4638fe.turnover_rate), formatPercent(_0x4638fe.limit_up_suc_rate * 100), formatNumber(_0x4638fe.currency_value)];
        break;
      case "limitDown":
        _0x590564 = [_0x4638fe.code, _0x4638fe.name, _0x4638fe.latest, formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.change_rate), formatTime(_0x4638fe.first_limit_down_time), formatTime(_0x4638fe.last_limit_down_time), formatPercent(_0x4638fe.turnover_rate), formatNumber(_0x4638fe.currency_value)];
        break;
      case "sprint":
        _0x590564 = [_0x4638fe.code, _0x4638fe.name, _0x4638fe.latest, formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.change_rate), formatPercent(_0x4638fe.rise_rate), formatNumber(_0x4638fe.turnover), formatPercent(_0x4638fe.turnover_rate), formatPercent(_0x4638fe.limit_up_suc_rate * 100), formatNumber(_0x4638fe.currency_value)];
        break;
      case "sharpWithdrawal":
        _0x590564 = [_0x4638fe[0], _0x4638fe[1], _0x4638fe[4], formatPercent(_0x4638fe[6]), formatPercent(_0x4638fe[6]), formatPercent(_0x4638fe[5]), _0x4638fe[3]];
        break;
    }
    _0x590564.forEach((_0x2a805c, _0x226a78) => {
      const _0x5af163 = document.createElement("td");
      _0x5af163.textContent = _0x2a805c;
      if (_0x3c6813[currentMode]?.["includes"](_0x226a78)) {
        const _0x192afd = parseFloat(_0x2a805c);
        !isNaN(_0x192afd) && _0x5af163.classList.add(_0x192afd >= 0 ? "positive" : "negative");
      }
      _0x48255e.appendChild(_0x5af163);
    });
    _0x417089.appendChild(_0x48255e);
  });
  const _0x425fe7 = 4;
  document.querySelectorAll("#tableBody td:nth-child(" + (_0x425fe7 + 1) + ")").forEach(_0x3bf6ac => {
    _0x3bf6ac.style.display = isAutoRefreshEnabled ? "" : "none";
  });
  document.querySelectorAll("#tableHeader th:nth-child(" + (_0x425fe7 + 1) + ")").forEach(_0xbc2a84 => {
    _0xbc2a84.style.display = isAutoRefreshEnabled ? "" : "none";
  });
  selectedStockCode && setSelectedRow(selectedStockCode);
}
function setSelectedRow(_0x589b16) {
  const _0x1990ef = document.getElementById("tableBody");
  const _0x375128 = _0x1990ef.getElementsByTagName("tr");
  Array.from(_0x375128).forEach(_0x1a8313 => {
    _0x1a8313.classList.remove("selected");
  });
  if (_0x589b16) {
    const _0x2ab937 = Array.from(_0x375128).find(_0x5c5951 => _0x5c5951.cells[0].textContent === _0x589b16);
    _0x2ab937 && _0x2ab937.classList.add("selected");
  }
}
function handleRowClick(_0x5aa534) {
  selectedStockCode = _0x5aa534;
  setSelectedRow(_0x5aa534);
  const _0x1dda14 = "http://www.treeid/code_" + _0x5aa534;
  window.location.href = _0x1dda14;
}
function sortTable(_0x757502) {
  const _0x9a81a0 = currentSort.column === _0x757502 && currentSort.direction === "asc" ? "desc" : "asc";
  currentSort = {
    column: _0x757502,
    direction: _0x9a81a0
  };
  const _0x3027a3 = document.getElementById("tableBody");
  const _0x3e2901 = Array.from(_0x3027a3.getElementsByTagName("tr"));
  const _0x11e4a2 = Array.from(document.querySelectorAll("th")).findIndex(_0x27f50d => _0x27f50d.dataset.sort === _0x757502);
  if (_0x11e4a2 === -1) {
    return;
  }
  _0x3e2901.sort((_0x4e33c8, _0x2461ed) => {
    let _0x420ce0 = _0x4e33c8.cells[_0x11e4a2].textContent;
    let _0x4da5a3 = _0x2461ed.cells[_0x11e4a2].textContent;
    const _0x57b833 = ["currency_value", "turnover", "open_rate", "change_rate", "turnover_rate", "limit_up_suc_rate", "rise_rate", "zf", "kf", "max_drawdown"];
    _0x57b833.includes(_0x757502) && (_0x420ce0 = parseNumber(_0x420ce0), _0x4da5a3 = parseNumber(_0x4da5a3));
    return _0x9a81a0 === "asc" ? _0x420ce0 - _0x4da5a3 : _0x4da5a3 - _0x420ce0;
  });
  while (_0x3027a3.firstChild) {
    _0x3027a3.removeChild(_0x3027a3.firstChild);
  }
  _0x3e2901.forEach(_0x5507ce => _0x3027a3.appendChild(_0x5507ce));
  document.querySelectorAll("th").forEach(_0x5aa76b => {
    _0x5aa76b.classList.remove("sort-asc", "sort-desc");
    _0x5aa76b.dataset.sort === _0x757502 && _0x5aa76b.classList.add(_0x9a81a0 === "asc" ? "sort-asc" : "sort-desc");
  });
  if (selectedStockCode) {
    setSelectedRow(selectedStockCode);
  }
}
function parseNumber(_0x2d490c) {
  const _0xb57a0 = String(_0x2d490c).replace(/%|,|亿|万/g, _0x373301 => {
    if (_0x373301 === "亿") {
      return "*1e8";
    }
    if (_0x373301 === "万") {
      return "*1e4";
    }
    return "";
  });
  try {
    const _0xa43f2b = _0xb57a0.match(/-?\d+\.?\d*([eE][+-]?\d+)?/);
    if (!_0xa43f2b) {
      return 0;
    }
    return new Function("return " + _0xa43f2b[0])();
  } catch {
    return 0;
  }
}
document.getElementById("btnContinuousLimit").onclick = () => {
  currentMode = "continuousLimit";
  updateTableHeader("continuousLimit");
  fetchAndRenderData();
  updateActiveButton("btnContinuousLimit");
};
document.getElementById("btnLimitUp").onclick = () => {
  currentMode = "limitUp";
  updateTableHeader("limitUp");
  fetchAndRenderData();
  updateActiveButton("btnLimitUp");
};
document.getElementById("btnSprint").onclick = () => {
  currentMode = "sprint";
  updateTableHeader("sprint");
  fetchAndRenderData();
  updateActiveButton("btnSprint");
};
document.getElementById("btnBreakLimit").onclick = () => {
  currentMode = "breakLimit";
  updateTableHeader("breakLimit");
  fetchAndRenderData();
  updateActiveButton("btnBreakLimit");
};
document.getElementById("btnLimitDown").onclick = () => {
  currentMode = "limitDown";
  updateTableHeader("limitDown");
  fetchAndRenderData();
  updateActiveButton("btnLimitDown");
};
document.getElementById("btnSharpWithdrawal").onclick = () => {
  currentMode = "sharpWithdrawal";
  updateTableHeader("sharpWithdrawal");
  fetchAndRenderData();
  updateActiveButton("btnSharpWithdrawal");
};
document.getElementById("datePicker").value = currentDate;
document.getElementById("datePicker").onchange = _0x2487fc => {
  currentDate = _0x2487fc.target.value;
  lbcodes = getRecentContinuousLimit();
  fetchAndRenderData();
};
document.getElementById("prevDate").onclick = () => {
  const _0x5122cf = new Date(currentDate);
  _0x5122cf.setDate(_0x5122cf.getDate() - 1);
  currentDate = _0x5122cf.toISOString().split("T")[0];
  document.getElementById("datePicker").value = currentDate;
  lbcodes = getRecentContinuousLimit();
  fetchAndRenderData();
};
document.getElementById("nextDate").onclick = () => {
  const _0x4dd339 = new Date(currentDate);
  _0x4dd339.setDate(_0x4dd339.getDate() + 1);
  currentDate = _0x4dd339.toISOString().split("T")[0];
  document.getElementById("datePicker").value = currentDate;
  lbcodes = getRecentContinuousLimit();
  fetchAndRenderData();
};
document.getElementById("btnRefresh").onclick = function () {
  isAutoRefreshEnabled = !isAutoRefreshEnabled;
  this.classList.toggle("active", isAutoRefreshEnabled);
  isAutoRefreshEnabled ? (startAutoRefresh(), updateRealtimeData()) : (fetchAndRenderData(), clearInterval(intervalId), intervalId = null);
  this.title = isAutoRefreshEnabled ? "停止实时刷新" : "启动实时刷新";
};
function updateActiveButton(_0x198194) {
  document.querySelectorAll(".button-group button").forEach(_0x1e9d62 => {
    _0x1e9d62.classList.remove("active");
  });
  document.getElementById(_0x198194).classList.add("active");
}
function getSinaStockHq(_0x4c2458) {
  return new Promise((_0x2ecd18, _0xeca224) => {
    var _0x1daa68 = "http://qt.gtimg.cn/q=" + _0x4c2458;
    $.ajax({
      type: "get",
      url: _0x1daa68,
      dataType: "text",
      async: false,
      cache: false,
      timeout: 3000,
      success: function (_0x4c7d85) {
        var _0x54bdf0 = _0x4c7d85.replace(/(")|(=)/g, "").split(";").filter(_0x3ed8cc => _0x3ed8cc.trim());
        const _0x3cfd26 = _0x54bdf0.map(_0x204d7b => {
          const _0x59bb53 = _0x204d7b.split("~");
          if (_0x59bb53.length < 45) {
            console.warn("Invalid data format:", _0x204d7b);
            return null;
          }
          const _0x3db05f = (_0x1dbc12, _0x1b0ec0) => parseFloat(_0x59bb53[_0x1b0ec0]) || 0;
          return {
            code: _0x59bb53[2] || "",
            name: _0x59bb53[1] || "",
            xj: parseFloat(_0x59bb53[3]),
            zf: parseFloat(((parseFloat(_0x59bb53[5]) / parseFloat(_0x59bb53[4]) - 1) * 100).toFixed(2)),
            kf: parseFloat(_0x59bb53[32]),
            hsl: parseFloat(_0x59bb53[38]),
            ltsz: parseFloat(_0x59bb53[44])
          };
        }).filter(Boolean);
        _0x2ecd18(_0x3cfd26);
      },
      error: _0x4f8b50 => {
        _0xeca224;
      }
    });
  });
}
function getScStr(_0x4f5b83) {
  if (_0x4f5b83.startsWith("0") || _0x4f5b83.startsWith("3")) {
    return "sz";
  } else {
    if (_0x4f5b83.startsWith("6")) {
      return "sh";
    } else {
      return _0x4f5b83.startsWith("4") || _0x4f5b83.startsWith("8") ? "bj" : "na";
    }
  }
}