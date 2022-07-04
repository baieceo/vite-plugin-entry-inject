function vitePluginEntryInject(config) {
    return {
        name: 'rollup-plugin-entry-inject',
        transformIndexHtml(html, ctx) {
            const { injectTo = 'body' } = config;

            let script = '';

            if (ctx.chunk.isEntry) {
                html = html.replace(new RegExp('<script[^<>]+' + ctx.chunk.fileName + '[^<>]+><\/script>'), match => {
                    script = match;

                    return '';
                });

                const injectMap = {
                    'head': {
                        tag: '</head>',
                        template: `${script}</head>`,
                    },
                    'head-prepend': {
                        tag: '<head>',
                        template: `<head>${script}`,
                    },
                    'body': {
                        tag: '</body>',
                        template: `${script}</body>`,
                    },
                    'body-prepend': {
                        tag: '<body>',
                        template: `<body>${script}`,
                    }
                };

                html = html.replace(injectMap[injectTo].tag, injectMap[injectTo].template);
            }

            return html;
        }
    };
}

module.exports = vitePluginEntryInject;