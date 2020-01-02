module.exports = {
    productionSourceMap: false,
    baseUrl: process.env.VUE_APP_FILE,
    chainWebpack: config => {
        const ofs = ['vue-modules', 'vue', 'normal-modules', 'normal']
        const cssRules = config.module.rule('css')
        const postRules = config.module.rule('postcss')

        const addSassResourcesLoader = (rules, type) => {
            rules.oneOf(type).use('sass-resoureces-loader').loader('sass-resources-loader').options({
                resources: './src/assets/variables.css' // your resource file or patterns
            })
        }
        ofs.forEach(type => {
            addSassResourcesLoader(cssRules, type)
            addSassResourcesLoader(postRules, type)
        })
        return config
    },
    devServer: {
        disableHostCheck: true
    }

}
