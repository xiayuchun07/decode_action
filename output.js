
const a0_0x26499f = a0_0xc64b;
function a0_0x40db() {
  const _0x12ec28 = ["rechargeModel", "1DOOtTy", "safeBoxRecord", "recharge", "userBlock", "mongoose-auto-increment", "rechargeOrderRecord", "ruleID", "uniqueIDModel", "../../../config/mongo.json", "4460056GLnsGx", "userGameRecordModel", "unionID", "gameVideoRecord", "286220alGuok", "smsCodeRecordModel", "gameVideoRecordModel", "mongodb://", "userPay", "userPayModel", "gameLimit", "8244441icCKhh", "gameLimitModel", "scoreGiveRecord", "4536770oXJTAo", "adminGrantRecord", "union", "userDelModel", "account", "userPayDetail", "unionGameRoom", "1125006kXjufw", "userScore", "unionUserScoreNormalChange", "host", "uid", "userScoreDetail", "userNote", "robotSetting", "smsCodeRecord", "database", "order", "1239kpzJVp", "gameProfitRecord", "user", "adminGrantRecordModel", "orderModel", "teamData", "accountModel", "userModel", "createConnection", "index", "rechargeRecordModel", "mongoose", "uniqueID", "7116XYWScs", "scoreModifyRecord", "admin", "teamDataModel", "20rlkhNy", "rechargeRecord", "4778112VOyJzM", "mongo", "config", "userScoreChangeRecordModel", "userScoreDetailModel", "scoreGiveRecordModel", "initialize", "userDel", "model", "plugin", "userScoreModel", "configModel", "port", "userGameRecord", "userBlockModel", "gameProfitRecordSchemaModel", "userRebateRecord"];
  a0_0x40db = function () {
    return _0x12ec28;
  };
  return a0_0x40db();
}
(function (_0x333e3a, _0x2f43a4) {
  const _0x233b6e = a0_0xc64b;
  const _0x3b5739 = _0x333e3a();
  while (true) {
    try {
      const _0x1aedcf = parseInt(_0x233b6e(296)) / 1 * (-parseInt(_0x233b6e(248)) / 2) + -parseInt(_0x233b6e(259)) / 3 * (-parseInt(_0x233b6e(272)) / 4) + parseInt(_0x233b6e(309)) / 5 + parseInt(_0x233b6e(278)) / 6 + parseInt(_0x233b6e(319)) / 7 + parseInt(_0x233b6e(305)) / 8 + parseInt(_0x233b6e(316)) / 9 * (-parseInt(_0x233b6e(276)) / 10);
      if (_0x1aedcf === _0x2f43a4) {
        break;
      } else {
        _0x3b5739.push(_0x3b5739.shift());
      }
    } catch (_0x5209c7) {
      _0x3b5739.push(_0x3b5739.shift());
    }
  }
})(a0_0x40db, 399339);
let mongoose = require(a0_0x26499f(270));
let autoIncrement = require(a0_0x26499f(300));
let Schema = mongoose.Schema;
let dbConfig = require(a0_0x26499f(304));
let MongoDbAddress;
dbConfig.mongo[a0_0x26499f(261)] !== null && dbConfig[a0_0x26499f(279)].password !== null ? MongoDbAddress = a0_0x26499f(312) + dbConfig.mongo[a0_0x26499f(261)] + ":" + dbConfig[a0_0x26499f(279)].password + "@" + dbConfig[a0_0x26499f(279)][a0_0x26499f(251)] + ":" + dbConfig[a0_0x26499f(279)].port + "/" + dbConfig.mongo[a0_0x26499f(257)] : MongoDbAddress = a0_0x26499f(312) + dbConfig[a0_0x26499f(279)][a0_0x26499f(251)] + ":" + dbConfig[a0_0x26499f(279)][a0_0x26499f(290)] + "/" + dbConfig[a0_0x26499f(279)][a0_0x26499f(257)];
let options = {
  auth: {
    authdb: dbConfig.mongo[a0_0x26499f(257)]
  },
  db: {
    native_parser: true
  },
  server: {
    poolSize: 5
  },
  user: dbConfig[a0_0x26499f(279)].user,
  pass: dbConfig.mongo.password
};
let db = mongoose[a0_0x26499f(267)](MongoDbAddress, options);
autoIncrement[a0_0x26499f(284)](db);
let accountSchema = new Schema({
  uid: {
    type: Number,
    default: 0,
    unique: true
  },
  account: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  phoneAccount: {
    type: String,
    default: ""
  },
  wxAccount: {
    type: String,
    default: ""
  },
  registerInfo: {
    type: String,
    default: ""
  }
});
db[a0_0x26499f(286)]("account", accountSchema);
exports[a0_0x26499f(265)] = db.model(a0_0x26499f(323));
let adminSchema = new Schema({
  account: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  permission: {
    type: Number,
    default: 0
  },
  nickname: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
adminSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: a0_0x26499f(274),
  field: a0_0x26499f(252),
  startAt: 100000,
  incrementBy: 1
});
db[a0_0x26499f(286)](a0_0x26499f(274), adminSchema);
exports.adminModel = db[a0_0x26499f(286)](a0_0x26499f(274));
let teamDataSchema = new Schema({
  unionID: {
    type: Number,
    default: 0
  },
  userCount: {
    type: Number,
    default: 0
  },
  drawCount: {
    type: Number,
    default: 0
  },
  drawTotalCount: {
    type: Number,
    default: 0
  },
  diamondCount: {
    type: Number,
    default: 0
  },
  dateTime: {
    type: String,
    default: ""
  },
  createTime: {
    type: String,
    default: ""
  }
});
db[a0_0x26499f(286)]("teamData", teamDataSchema);
exports[a0_0x26499f(275)] = db[a0_0x26499f(286)](a0_0x26499f(264));
let adminGrantRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  gainUid: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  count: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(320), adminGrantRecordSchema);
exports[a0_0x26499f(262)] = db.model("adminGrantRecord");
let userSchema = new Schema({
  deviceID: {
    type: String,
    default: ""
  },
  beginTime: {
    type: Number,
    default: 0
  },
  endTime: {
    type: Number,
    default: 24
  },
  winScore: {
    type: Number,
    default: 0
  },
  loseScore: {
    type: Number,
    default: 0
  },
  isTest: {
    type: Boolean,
    default: false
  },
  isBind: {
    type: Boolean,
    default: false
  },
  isRobot: {
    type: Boolean,
    default: false
  },
  winType: {
    type: Number,
    default: 0
  },
  winRate: {
    type: Number,
    default: 0
  },
  unionID: {
    type: Number,
    default: 0
  },
  robotType: {
    type: Number,
    default: 0
  },
  gameType: {
    type: Number,
    default: 0
  },
  isReback: {
    type: Boolean,
    default: false
  },
  userType: {
    type: Number,
    default: 0
  },
  account: {
    type: String,
    default: ""
  },
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  avatarTemp: {
    type: String,
    default: ""
  },
  avatar64: {
    type: String,
    default: ""
  },
  avatarFrame: {
    type: String,
    default: ""
  },
  sex: {
    type: Number,
    default: 0
  },
  unionInfo: [{
    inviteID: {
      type: Number,
      default: 0
    },
    unionID: {
      type: Number,
      default: 0
    },
    spreaderID: {
      type: String,
      default: ""
    },
    score: {
      type: Number,
      default: 0
    },
    targetScore: {
      type: Number,
      default: 0
    },
    floatScore: {
      type: Number,
      default: 0
    },
    safeScore: {
      type: Number,
      default: 0
    },
    saveScore: {
      type: Number,
      default: 0
    },
    partner: {
      type: Boolean,
      default: false
    },
    manager: {
      type: Boolean,
      default: false
    },
    showFixScore: {
      type: Boolean,
      default: false
    },
    fixScoreRate: {
      type: Number,
      default: 0
    },
    ticketRate: {
      type: Number,
      default: 0
    },
    rebateRate: {
      type: Number,
      default: 0
    },
    limitScore: {
      type: Number,
      default: 0
    },
    todayDraw: {
      type: Number,
      default: 0
    },
    yesterdayDraw: {
      type: Number,
      default: 0
    },
    totalDraw: {
      type: Number,
      default: 0
    },
    weekDraw: {
      type: Number,
      default: 0
    },
    memberTodayDraw: {
      type: Number,
      default: 0
    },
    memberYesterdayDraw: {
      type: Number,
      default: 0
    },
    todayBigWinDraw: {
      type: Number,
      default: 0
    },
    yesterdayBigWinDraw: {
      type: Number,
      default: 0
    },
    memberTodayBigWinDraw: {
      type: Number,
      default: 0
    },
    memberYesterdayBigWinDraw: {
      type: Number,
      default: 0
    },
    todayProvideRebate: {
      type: Number,
      default: 0
    },
    yesterdayProvideRebate: {
      type: Number,
      default: 0
    },
    todayRebate: {
      type: Number,
      default: 0
    },
    yesterdayRebate: {
      type: Number,
      default: 0
    },
    totalRebate: {
      type: Number,
      default: 0
    },
    todayWin: {
      type: Number,
      default: 0
    },
    yesterdayWin: {
      type: Number,
      default: 0
    },
    prohibitGame: {
      type: Boolean,
      default: false
    },
    joinTime: {
      type: Number,
      default: 0
    }
  }],
  gold: {
    type: Number,
    default: 0
  },
  emailArr: {
    type: String,
    default: ""
  },
  inviteMsg: [{
    uid: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    unionID: {
      type: Number,
      default: 0
    },
    partner: {
      type: Boolean,
      default: false
    },
    unionName: {
      type: String,
      default: ""
    }
  }],
  mobilePhone: {
    type: String,
    default: ""
  },
  realName: {
    type: String,
    default: ""
  },
  isAgent: {
    type: Boolean,
    default: false
  },
  isBind: {
    type: Boolean,
    default: false
  },
  roomID: {
    type: String,
    default: ""
  },
  frontendId: {
    type: String,
    default: ""
  },
  syncLock: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: ""
  },
  isBlockedAccount: {
    type: Number,
    default: 0
  },
  lastLoginIP: {
    type: String,
    default: ""
  },
  lastLoginTime: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
userSchema[a0_0x26499f(268)]({
  uid: 1
});
db[a0_0x26499f(286)](a0_0x26499f(261), userSchema);
exports[a0_0x26499f(266)] = db[a0_0x26499f(286)](a0_0x26499f(261));
let userScoreSchema = new Schema({
  unionID: {
    type: Number,
    default: 0
  },
  uid: {
    type: Number,
    default: 0
  },
  nickname: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  score: {
    type: Number,
    default: 0
  },
  userScore: {
    type: Number,
    default: 0
  },
  saveScore: {
    type: Number,
    default: 0
  },
  dayTime: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
userSchema[a0_0x26499f(268)]({
  dayTime: -1,
  uid: 1,
  unionID: 1
});
db[a0_0x26499f(286)](a0_0x26499f(249), userScoreSchema);
exports[a0_0x26499f(288)] = db[a0_0x26499f(286)](a0_0x26499f(249));
let configSchema = new Schema({
  key: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: ""
  },
  describe: {
    type: String,
    default: ""
  }
});
db.model("config", configSchema);
exports[a0_0x26499f(289)] = db.model(a0_0x26499f(280));
let uniqueIDSchema = new Schema({
  key: {
    type: Number,
    default: 1
  },
  unionInviteID: {
    type: Number,
    default: 23467335
  }
});
db[a0_0x26499f(286)](a0_0x26499f(271), uniqueIDSchema);
exports[a0_0x26499f(303)] = db[a0_0x26499f(286)](a0_0x26499f(271));
let unionSchema = new Schema({
  unionSkinId: {
    type: String,
    default: ""
  },
  unionType: {
    type: Number,
    default: 0
  },
  ownerUid: {
    type: String,
    default: ""
  },
  ownerNickname: {
    type: String,
    default: ""
  },
  ownerAvatar: {
    type: String,
    default: ""
  },
  unionName: {
    type: String,
    default: ""
  },
  ownerPhone: {
    type: String,
    default: ""
  },
  ownerWeChat: {
    type: String,
    default: ""
  },
  curMember: {
    type: Number,
    default: 0
  },
  onlineMember: {
    type: Number,
    default: 0
  },
  roomRuleList: [{
    createTime: {
      type: String,
      default: 0
    },
    gameType: {
      type: Number,
      default: 0
    },
    ruleName: {
      type: String,
      default: ""
    },
    gameRule: {
      type: String,
      default: ""
    }
  }],
  allowCreateRoom: {
    type: Boolean,
    default: true
  },
  maxRoomCount: {
    type: Number,
    default: 30
  },
  notice: {
    type: String,
    default: ""
  },
  noticeSwitch: {
    type: Boolean,
    default: false
  },
  allowMerge: {
    type: Boolean,
    default: false
  },
  opening: {
    type: Boolean,
    default: true
  },
  emptyTable: {
    type: Boolean,
    default: false
  },
  isInvite: {
    type: Boolean,
    default: false
  },
  fullTableLimit: {
    type: Number,
    default: 0
  },
  joinRequestList: [{
    inviteID: {
      type: String,
      default: ""
    },
    spreaderID: {
      type: String,
      default: ""
    },
    uid: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    createTime: {
      type: Number,
      default: 0
    }
  }],
  showRank: {
    type: Boolean,
    default: false
  },
  showSingleRank: {
    type: Boolean,
    default: false
  },
  showUnionActive: {
    type: Boolean,
    default: false
  },
  forbidInvite: {
    type: Boolean,
    default: false
  },
  forbidGive: {
    type: Boolean,
    default: false
  },
  hongBaoInfo: {
    status: {
      type: Boolean,
      default: false
    },
    startTime: {
      type: Number,
      default: 0
    },
    endTime: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    totalScore: {
      type: Number,
      default: 0
    }
  },
  hongBaoScoreList: {
    type: [Number],
    default: []
  },
  resultLotteryInfo: {
    status: {
      type: Boolean,
      default: false
    },
    countArr: {
      type: [Number],
      default: []
    },
    rateArr: {
      type: [Number],
      default: []
    }
  },
  hongBaoUidList: {
    type: [String],
    default: []
  },
  createTime: {
    type: Number,
    default: 0
  },
  serverScore: {
    type: Number,
    default: 0
  },
  tableSort: {
    type: Number,
    default: 0
  },
  isMain: {
    type: Number,
    default: 0
  },
  isDel: {
    type: Boolean,
    default: false
  },
  pumpWaterPattern: {
    type: Boolean,
    default: false
  },
  tableColor: {
    type: Number,
    default: 0
  },
  unionBg: {
    type: Number,
    default: 0
  },
  tableStyle: {
    type: Number,
    default: 0
  },
  disApplyCount: {
    type: Number,
    default: 0
  },
  inviteLimit: {
    type: Boolean,
    default: false
  },
  joinVerify: {
    type: Boolean,
    default: false
  },
  propsLimit: {
    type: Boolean,
    default: false
  },
  tableHideCount: {
    type: Number,
    default: 0
  },
  unReadyKick: {
    type: Number,
    default: 0
  },
  groupLimit: {
    type: Boolean,
    default: false
  },
  dismissType: {
    type: Number,
    default: 0
  },
  canNegativeScore: {
    type: Boolean,
    default: false
  }
});
unionSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: a0_0x26499f(321),
  field: a0_0x26499f(307),
  startAt: 30463,
  incrementBy: 1
});
unionSchema[a0_0x26499f(268)]({
  unionID: 1
});
db[a0_0x26499f(286)](a0_0x26499f(321), unionSchema);
exports.unionModel = db[a0_0x26499f(286)]("union");
let safeBoxRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  unionID: {
    type: String,
    default: ""
  },
  count: {
    type: String,
    default: ""
  },
  type: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
safeBoxRecordSchema.plugin(autoIncrement[a0_0x26499f(287)], {
  model: a0_0x26499f(297),
  field: a0_0x26499f(268),
  startAt: 10000001,
  incrementBy: 1
});
db[a0_0x26499f(286)](a0_0x26499f(297), safeBoxRecordSchema);
exports.safeBoxRecordModel = db[a0_0x26499f(286)](a0_0x26499f(297));
let scoreModifyRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  gainUid: {
    type: String,
    default: ""
  },
  gainNickname: {
    type: String,
    default: ""
  },
  gainAvatar: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
scoreModifyRecordSchema[a0_0x26499f(287)](autoIncrement.plugin, {
  model: a0_0x26499f(273),
  field: a0_0x26499f(268),
  startAt: 1000001,
  incrementBy: 1
});
db.model(a0_0x26499f(273), scoreModifyRecordSchema);
exports.scoreModifyRecordModel = db[a0_0x26499f(286)](a0_0x26499f(273));
let scoreGiveRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  gainUid: {
    type: String,
    default: ""
  },
  gainNickname: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
function a0_0xc64b(_0x310e5e, _0x519e53) {
  const _0x52ec78 = a0_0x40db();
  a0_0xc64b = function (_0x56bdfa, _0x9c35dc) {
    _0x56bdfa = _0x56bdfa - 246;
    let _0x5e50bf = _0x52ec78[_0x56bdfa];
    return _0x5e50bf;
  };
  return a0_0xc64b(_0x310e5e, _0x519e53);
}
scoreGiveRecordSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: "scoreGiveRecord",
  field: a0_0x26499f(268),
  startAt: 1000001,
  incrementBy: 1
});
db[a0_0x26499f(286)](a0_0x26499f(318), scoreGiveRecordSchema);
exports[a0_0x26499f(283)] = db[a0_0x26499f(286)]("scoreGiveRecord");
let gameProfitRecordSchema = new Schema({
  day: {
    type: String,
    default: ""
  },
  register: {
    type: Number,
    default: 0
  },
  active: {
    type: Number,
    default: 0
  },
  drawCount: {
    gameType: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  expendGold: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(260), gameProfitRecordSchema);
exports[a0_0x26499f(293)] = db[a0_0x26499f(286)](a0_0x26499f(260));
let rechargeOrderRecordSchema = new Schema({
  orderID: {
    type: String,
    default: ""
  },
  uid: {
    type: String,
    default: ""
  },
  itemID: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(301), rechargeOrderRecordSchema);
exports.rechargeOrderRecordModel = db.model(a0_0x26499f(301));
let rechargeRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  spreaderID: {
    type: String,
    default: "0"
  },
  rechargeMoney: {
    type: Number,
    default: 0
  },
  goldCount: {
    type: Number,
    default: 0
  },
  userOrderID: {
    type: String,
    default: ""
  },
  platformReturnOrderID: {
    type: String,
    default: ""
  },
  platform: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
rechargeRecordSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: a0_0x26499f(277),
  field: "index",
  startAt: 1000000,
  incrementBy: 1
});
db[a0_0x26499f(286)](a0_0x26499f(277), rechargeRecordSchema);
exports[a0_0x26499f(269)] = db.model(a0_0x26499f(277));
let userGameRecordSchema = new Schema({
  roomID: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  creatorUid: {
    type: String,
    default: ""
  },
  gameType: {
    type: Number,
    default: 0
  },
  userList: [{
    uid: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    score: {
      type: Number,
      default: 0
    },
    rebateScore: {
      type: Number,
      default: 0
    },
    spreaderID: {
      type: String,
      default: ""
    }
  }],
  detail: {
    type: String,
    default: ""
  },
  videoRecordID: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
userGameRecordSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: "userGameRecord",
  field: a0_0x26499f(268),
  startAt: 1000000,
  incrementBy: 1
});
db.model(a0_0x26499f(291), userGameRecordSchema);
exports[a0_0x26499f(306)] = db[a0_0x26499f(286)](a0_0x26499f(291));
let userBlockSchema = new Schema({
  unionID: {
    type: Number,
    default: 0
  },
  creatorUid: {
    type: String,
    default: ""
  },
  userList: [{
    uid: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    }
  }],
  createTime: {
    type: Number,
    default: 0
  }
});
userBlockSchema[a0_0x26499f(287)](autoIncrement.plugin, {
  model: a0_0x26499f(299),
  field: a0_0x26499f(302),
  startAt: 100,
  incrementBy: 1
});
db[a0_0x26499f(286)]("userBlock", userBlockSchema);
exports[a0_0x26499f(292)] = db[a0_0x26499f(286)]("userBlock");
let gameVideoRecordSchema = new Schema({
  roomID: {
    type: String,
    default: ""
  },
  gameType: {
    type: Number,
    default: 0
  },
  detail: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
gameVideoRecordSchema[a0_0x26499f(287)](autoIncrement[a0_0x26499f(287)], {
  model: a0_0x26499f(308),
  field: "videoRecordID",
  startAt: 1000000,
  incrementBy: 1
});
db[a0_0x26499f(286)](a0_0x26499f(308), gameVideoRecordSchema);
exports[a0_0x26499f(311)] = db[a0_0x26499f(286)](a0_0x26499f(308));
let userRebateRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  roomID: {
    type: String,
    default: ""
  },
  gameType: {
    type: Number,
    default: 0
  },
  unionID: {
    type: Number,
    default: 0
  },
  playerUid: {
    type: String,
    default: ""
  },
  playerNickname: {
    type: String,
    default: ""
  },
  playerAvatar: {
    type: String,
    default: ""
  },
  totalCount: {
    type: Number,
    default: 0
  },
  gainCount: {
    type: Number,
    default: 0
  },
  start: {
    type: Boolean,
    default: false
  },
  type: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(294), userRebateRecordSchema);
exports.userRebateRecordModel = db[a0_0x26499f(286)]("userRebateRecord");
let smsCodeRecordSchema = new Schema({
  phone: {
    type: String,
    default: ""
  },
  code: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(256), smsCodeRecordSchema);
exports[a0_0x26499f(310)] = db[a0_0x26499f(286)](a0_0x26499f(256));
let userScoreChangeRecordSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  changeCount: {
    type: Number,
    default: 0
  },
  leftCount: {
    type: Number,
    default: 0
  },
  leftSafeBoxCount: {
    type: Number,
    default: 0
  },
  leftSaveBoxCount: {
    type: Number,
    default: 0
  },
  gameType: {
    type: Number,
    default: 0
  },
  changeType: {
    type: Number,
    default: 0
  },
  describe: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)]("userScoreChangeRecord", userScoreChangeRecordSchema);
exports[a0_0x26499f(281)] = db[a0_0x26499f(286)]("userScoreChangeRecord");
let userScoreDetailSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  changeCount: {
    type: Number,
    default: 0
  },
  leftCount: {
    type: Number,
    default: 0
  },
  leftSafeBoxCount: {
    type: Number,
    default: 0
  },
  leftSaveBoxCount: {
    type: Number,
    default: 0
  },
  changeType: {
    type: Number,
    default: 0
  },
  gameType: {
    type: Number,
    default: 0
  },
  describe: {
    type: String,
    default: ""
  },
  createTime: {
    type: String,
    default: 0
  }
});
userScoreDetailSchema[a0_0x26499f(268)]({
  unionID: 1,
  changeType: 1,
  createTime: -1
});
db[a0_0x26499f(286)](a0_0x26499f(253), userScoreDetailSchema);
exports[a0_0x26499f(282)] = db[a0_0x26499f(286)](a0_0x26499f(253));
let unionUserScoreNormalChangeSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  gameType: {
    type: Number,
    default: 0
  },
  changeCount: {
    type: Number,
    default: 0
  },
  changeDate: {
    type: String,
    default: ""
  },
  describe: {
    type: String,
    default: ""
  },
  createTime: {
    type: String,
    default: ""
  }
});
db[a0_0x26499f(286)]("unionUserScoreNormalChange", unionUserScoreNormalChangeSchema);
exports[a0_0x26499f(250)] = db[a0_0x26499f(286)]("unionUserScoreNormalChange");
let unionGameRoomSchema = new Schema({
  ruleID: {
    type: String,
    default: ""
  },
  roomID: {
    type: Number,
    default: ""
  },
  unionID: {
    type: Number,
    default: 0
  },
  payDiamond: {
    type: Number,
    default: 0
  },
  creatorInfo: {
    type: String,
    default: ""
  },
  createTime: {
    type: String,
    default: ""
  },
  status: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(247), unionGameRoomSchema);
exports[a0_0x26499f(247)] = db[a0_0x26499f(286)]("unionGameRoom");
let robotSettingSchema = new Schema({
  unionID: {
    type: Number,
    default: 0
  },
  kind: {
    type: Number,
    default: 0
  },
  curInventoryValue: {
    type: Number,
    default: 0
  },
  minInventoryValue: {
    type: Number,
    default: 0
  },
  extractionRatio: {
    type: Number,
    default: 0
  },
  robotEnable: {
    type: Number,
    default: 0
  },
  createTime: {
    type: String,
    default: ""
  },
  robotMatchEnable: {
    type: Number,
    default: 0
  },
  maxRobotCount: {
    type: Number,
    default: 0
  },
  robotWinRateArr: []
});
db[a0_0x26499f(286)]("robotSetting", robotSettingSchema);
exports[a0_0x26499f(255)] = db[a0_0x26499f(286)](a0_0x26499f(255));
let userNoteSchema = new Schema({
  uid: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  },
  contact: {
    type: String,
    default: ""
  },
  reply: {
    type: String,
    default: ""
  },
  createTime: {
    type: String,
    default: ""
  },
  replyTime: {
    type: String,
    default: ""
  },
  replyMessage: {
    type: String,
    default: ""
  },
  status: {
    type: Number,
    default: 0
  }
});
db.model(a0_0x26499f(254), userNoteSchema);
exports.userNoteModel = db[a0_0x26499f(286)](a0_0x26499f(254));
let useDelSchema = new Schema({
  unionID: {
    type: String,
    default: ""
  },
  uid: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  score: {
    type: Number,
    default: ""
  },
  doneUid: {
    type: String,
    default: ""
  },
  doneAvatar: {
    type: String,
    default: ""
  },
  doneNickname: {
    type: String,
    default: ""
  },
  type: {
    type: Number,
    default: 0
  },
  createTime: {
    type: String,
    default: ""
  }
});
db[a0_0x26499f(286)](a0_0x26499f(285), useDelSchema);
exports[a0_0x26499f(322)] = db.model(a0_0x26499f(285));
let gameLimitSchema = new Schema({
  unionID: {
    type: String,
    default: ""
  },
  uid: {
    type: String,
    default: ""
  },
  list: [],
  createTime: {
    type: String,
    default: ""
  }
});
db[a0_0x26499f(286)](a0_0x26499f(315), gameLimitSchema);
exports[a0_0x26499f(317)] = db[a0_0x26499f(286)](a0_0x26499f(315));
let userPaySchema = new Schema({
  unionID: {
    type: String,
    default: ""
  },
  uid: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  count: {
    type: Number,
    default: 0
  },
  day: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: ""
  }
});
db[a0_0x26499f(286)](a0_0x26499f(313), userPaySchema);
exports[a0_0x26499f(314)] = db[a0_0x26499f(286)]("userPay");
let userPayDetailSchema = new Schema({
  unionID: {
    type: String,
    default: ""
  },
  roomID: {
    type: Number,
    default: 0
  },
  gameType: {
    type: Number,
    default: 0
  },
  uid: {
    type: String,
    default: ""
  },
  avatar: {
    type: String,
    default: ""
  },
  nickname: {
    type: String,
    default: ""
  },
  count: {
    type: Number,
    default: 0
  },
  day: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: ""
  }
});
db.model(a0_0x26499f(246), userPayDetailSchema);
exports.userPayDetailModel = db[a0_0x26499f(286)]("userPayDetail");
let rechargeSchema = new Schema({
  gold: {
    type: Number,
    default: 0
  },
  addGold: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)](a0_0x26499f(298), rechargeSchema);
exports[a0_0x26499f(295)] = db.model(a0_0x26499f(298));
let orderSchema = new Schema({
  uid: {
    type: Number,
    default: 0
  },
  gold: {
    type: Number,
    default: 0
  },
  addGold: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  tradeNo: {
    type: String,
    default: ""
  },
  orderNo: {
    type: String,
    default: ""
  },
  payType: {
    type: String,
    default: ""
  },
  goodName: {
    type: String,
    default: ""
  },
  createTime: {
    type: Number,
    default: 0
  },
  endTime: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0
  }
});
db[a0_0x26499f(286)]("order", orderSchema);
exports[a0_0x26499f(263)] = db[a0_0x26499f(286)](a0_0x26499f(258));