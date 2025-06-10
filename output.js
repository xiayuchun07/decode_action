
const end = false;
const usetime = 33;
(function validateCardKey() {
  try {
    {
      console.log("卡密状态: 过期=" + end + ", 类型=" + usetime + "å¤©");
      if (g.modelName === "claude-4-sonnet-thinking") {
        {
          g.modelName = "claude-3.7-sonnet-thinking";
        }
      }
      g.modelName === "claude-4-sonnet" && (g.modelName = "claude-3.7-sonnet");
      if (g.modelName === "claude-4-opus-thinking") {
        {
          g.modelName = "claude-3.7-sonnet-thinking";
        }
      }
      {
        {
          console.log("高级卡密，保持maxMode为false");
        }
      }
      if (g.maxMode === true) {
        {
          g.maxMode = false;
        }
      }
    }
  } catch (_0x41ec99) {
    {
      console.error("处理过程出é”™:", _0x41ec99);
    }
  }
})();