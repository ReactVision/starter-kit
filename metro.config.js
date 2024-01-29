const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      ...defaultConfig.resolver.assetExts,
      "obj",
      "mtl",
      "JPG",
      "vrx",
      "hdr",
      "gltf",
      "glb",
      "bin",
      "arobject",
      "gif",
    ],
  },
};

module.exports = mergeConfig(defaultConfig, config);
