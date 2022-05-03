module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            text: '博客',
            iconClass: 'aurora-navbar-blaze-line',
            children: [
                //在这里面的是二级标题，不能为二级标题设置图标
                {
                    text: '时间轴',
                    link: '/archive/'
                },
                {
                    text: "标签",
                    link: '/tag',
                },
            ]
        },
        {
            text: '说说',
            link: '/mood/',
            iconClass: 'aurora-navbar-shoulijindu-xuanzhong'
        },
        {
            text: '相册',
            link: '/photo',
            iconClass: 'aurora-navbar-si-glyph-egg'
        },
        {
            text: '关于',
            link: '/about',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
        
    ]
}