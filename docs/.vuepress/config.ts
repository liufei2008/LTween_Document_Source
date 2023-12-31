import { defaultTheme } from "vuepress";

export default {
    locales: {
        '/': {
            lang: 'en-US',
        },
        "/zh-cn/": {
            lang: '中文',
        }
    },
    base: "/LTweenDoc/",
    dest: "$(sourceDir)/../../liufei2008.github.io/LTweenDoc",
    theme: defaultTheme({
        locales: {
            '/':
            {
                colorModeSwitch: true,
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                selectLanguageAriaLabel: 'Languages',
                editLink: true,
                editLinkText: 'Edit this page on Github',
                docsRepo: "https://github.com/liufei2008/LTween_Document_Source",
                docsBranch: "master",
                docsDir: "docs",
                editLinkPattern: ":repo/edit/:branch/:path",
                logo: "logo.png",
                home: "/GetStarted/",
                sidebar: [
                    {
                        text: "Get Started",
                        link: '/GetStarted/',
                    },
                    {
                        text: "Create Custom Tween",
                        link: '/Custom/',
                    },
                    {
                        text: "Useful Functions",
                        link: '/Functions/',
                    },
                    {
                        text: "Tween Sequence",
                        link: '/Sequence/',
                    },
                    {
                        text: "UMG",
                        link: '/UMG/',
                    },
                ]
            },
            '/zh-cn/':
            {
                selectLanguageText: '选择语言',
                selectLanguageName: '中文',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: '在Github上编辑此页面',
                docsRepo: "https://github.com/liufei2008/LTween_Document_Source",
                docsBranch: "master",
                docsDir: "docs",
                editLinkPattern: ":repo/edit/:branch/:path",
                logo: "logo.png",
                home: "/GetStarted/",
                sidebar: [
                    {
                        text: "开始使用",
                        link: '/zh-cn/GetStarted/',
                    },
                    {
                        text: "创建自定义动画",
                        link: '/zh-cn/Custom/',
                    },
                    {
                        text: "一些便捷方法",
                        link: '/zh-cn/Functions/',
                    },
                    {
                        text: "动画序列",
                        link: '/zh-cn/Sequence/',
                    },
                    {
                        text: "UMG",
                        link: '/UMG/',
                    },
                ]
            }
        },
    }),
}