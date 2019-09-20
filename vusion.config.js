module.exports = {
    version: '>=0.8.2',
    type: 'library',
    name: 'editors',
    CamelName: 'Editors',
    docs: {
        title: '编辑器',
        logo: '编辑器',
        mode: 'history',
        base: '/editors/',
        github: 'https://github.com/vusion/editors',
        components: [
            { group: '编辑器', name: 'x-ace-editor' },
            { group: '代码染色', name: 'x-highlight' },
        ],
    },
};
