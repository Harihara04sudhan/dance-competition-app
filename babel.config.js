// NativeWind v4 ships `nativewind/babel` as a *preset* (it returns a
// `plugins` array), so it must be listed under `presets` — listing it under
// `plugins` breaks Babel with ".plugins is not a valid Plugin property".
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
