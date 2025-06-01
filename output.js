
let pomelo = require("pomelo");
let httpPlugin = require("pomelo-http-plugin");
let routeUtil = require("./app/util/routeUtil");
let logger = require("pomelo-logger").getLogger("logic");
let app = pomelo.createApp();
app.set("name", "PokerGame");
app.configure("production|development", function () {
  app.route("connector", routeUtil.connector);
  app.route("game", routeUtil.game);
});
app.configure("production|development", "connector", function () {
  const I = {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 5,
    useProtobuf: false
  };
  app.set("connectorConfig", I);
  let p = require("./app/dao/mongo/models");
  app.set("dbClient", p);
  let b = require("./app/servers/connector/domain/centerManager");
  b.init(app);
  app.centerManager = b;
});
app.configure("production|development", "hall", function () {
  const I = {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 30,
    useProtobuf: false
  };
  app.set("connectorConfig", I);
  let p = require("./app/dao/mongo/models");
  app.set("dbClient", p);
});
app.configure("production|development", "game", function () {
  const I = {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 30,
    useProtobuf: false
  };
  app.set("connectorConfig", I);
  let p = require("./app/dao/mongo/models");
  app.set("dbClient", p);
  let b = require("./app/servers/game/domain/unionManager");
  b.init(app);
  app.unionManager = b;
});
app.configure("production|development", "http", function () {
  app.loadConfig("httpConfig", app.getBase() + "/config/http.json");
  app.use(httpPlugin, {
    http: app.get("httpConfig")[app.getServerId()]
  });
  let A = require("./app/dao/mongo/models");
  app.set("dbClient", A);
});
app.configure("production|development", "center", function () {
  const I = {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 30,
    useProtobuf: false
  };
  app.set("connectorConfig", I);
  let p = require("./app/dao/mongo/models");
  app.set("dbClient", p);
  let b = require("./app/servers/center/domain/centerManager");
  b.init();
  app.centerManager = b;
});
app.configure("production|development", "robot", function () {
  const I = {
    connector: pomelo.connectors.hybridconnector,
    heartbeat: 30,
    useProtobuf: false
  };
  app.set("connectorConfig", I);
  let p = require("./app/dao/mongo/models");
  app.set("dbClient", p);
});
app.start();
process.on("uncaughtException", function (A) {
  logger.error(" Caught exception: " + A.stack);
});
process.on("unhandledRejection", A => {
  logger.error(" Caught exception: " + A.stack);
});