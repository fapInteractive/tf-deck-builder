module.exports = {
  pluginOptions: {
    electronBuilder: {
        builderOptions: {
            productName: "TF Deck Builder",
            appId: 'https://fapinteractive.github.io/tf-deck-builder/#/',
            win: {
                "target": [
                    "nsis"
                ],
              icon: 'public/icon.ico',
              "requestedExecutionLevel": "requireAdministrator"
            },
            "nsis": {
                "installerIcon": "public/icon.ico",
                "uninstallerIcon": "public/icon.ico",
                "uninstallDisplayName": "CPU Monitor",
                "oneClick": false,
                "allowToChangeInstallationDirectory": true
            }
        },
    },
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/'
}
