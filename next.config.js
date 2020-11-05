const p = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    // api: p ? "/api" : "http://192.168.1.19:10800",
  },
};
