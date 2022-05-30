// Конфігурація entry

module.exports = {
    // Назва вихідного файлу, має бути аналогічна назві сторінки
    index: {
        // файли які будуть імпортуватись
        import: [
            "./js/pages/homepage",
            "./js/common",
            './scss/pages/homepage/bootstrap',
        ],
        // Для js файлів є можливість переписати шлях вихідного файлу по сторінково
        // filename: './js/homepage.js?hash=[contenthash]',
    },
    blog: {
        import: [
            './scss/pages/blog/bootstrap',
            "./js/common",
        ],
    },
    works: {
        import: [
            './scss/pages/works/bootstrap',
            "./js/common",
        ],
    },
    'works-view': {
        import: [
            './scss/pages/works/view/bootstrap',
            "./js/common",
        ],
    },
}