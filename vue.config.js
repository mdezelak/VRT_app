module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    },
    name: "Running app",
    shortName: "RUN",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    manifestOptions: {
      start_url: "/",
    },
  },
};
