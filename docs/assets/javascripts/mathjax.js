window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true,
        macros: {
            NN: '{\\mathbb N}',
            ZZ: '{\\mathbb Z}',
            RR: '{\\mathbb R}',
            QQ: '{\\mathbb Q}',
            bigO: '{\\mathcal O}',
            smallO: '{o}',
            bigOmega: '{\\Omega}',
            smallOmega: '{\\omega}',
        },
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex",
        enableMenu: false,
    }
};

document$.subscribe(() => {
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
})