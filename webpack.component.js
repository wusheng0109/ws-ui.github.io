const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

//node自带的库
const glob = require('glob')
const list = {};
// {
//     card: './componets/lib/card/index.js'
//     demo: './componets/lib/demo/index.js'
// }
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    // console.log('files:', files)
    for (const file of files) {
        const component = file.split(/[/.]/)[2]
        // console.log('component:', component)
        list[component] = `./${file}`
    }
    console.log('list::', list)
}

makeList('components/lib', list)

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js', //生成card.umd.js文件
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}
