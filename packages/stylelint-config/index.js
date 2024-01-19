module.exports = {
    defaultSeverity: 'warning', plugins: ['stylelint-scss'], rules: {
        "at-rule-no-unknown": null,//禁止未知的@规则
        "scss/at-rule-no-unknown": true,//禁止未知的@规则
        "block-no-empty": true,//禁止空块
        'color-no-invalid-hex': true,//禁止无效的十六进制颜色
        'comment-no-empty': true,//禁止空注释
        'declaration-block-no-duplicate-properties': [true, {ignore: ['consecutive-duplicates-with-different-values']}],//禁止声明块中的重复属性
        'declaration-block-no-shorthand-property-overrides': true,//禁止缩写属性覆盖相关的全属性
        'font-family-no-duplicate-names': true,//禁止字体族名称中的重复名称
        'function-calc-no-unspaced-operator': true,//禁止calc函数内不加空格
        'function-linear-gradient-no-nonstandard-direction': true,//禁止linear-gradient()中的非标准方向语法
        'keyframe-declaration-no-important': true,//禁止在关键帧声明中使用!important
        'media-feature-name-no-unknown': true,//禁止未知的媒体功能名称
        'no-descending-specificity': null,//禁止低优先级的选择器出现在高优先级的选择器之后
        'no-duplicate-at-import-rules': true,//禁止@import规则中的重复
        'no-duplicate-selectors': true,//禁止重复选择器
        'no-empty-source': null,//禁止空源
        'no-extra-semicolons': true,//禁止多余的分号
        'no-invalid-double-slash-comments': true,//禁止双斜杠注释(/ /...)不支持CSS
        'property-no-unknown': true,//禁止未知属性
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['global', 'local', 'export'],
        },],//禁止未知的伪类选择器
        'selector-pseudo-element-no-unknown': true,//禁止未知的伪元素选择器
        'string-no-newline': true,//禁止字符串中的（未转义的）换行符
        'unit-no-unknown': [true, {
            ignoreUnits: ['rpx'],
        },],//禁止未知单位
        indentation: 2,//缩进
        'block-closing-brace-newline-before': 'always-multi-line',//在多行块的末尾括号之前强制执行新行
        'block-closing-brace-space-before': 'always-single-line',//在单行块的末尾括号之前强制执行空格
        'block-opening-brace-newline-after': 'always-multi-line',//在多行块的开头括号之后强制执行新行
        'block-opening-brace-space-before': 'always',//在块的开头括号之前强制执行空格
        'block-opening-brace-space-after': 'always-single-line',//在单行块的开头括号之后强制执行空格
        'color-hex-case': 'lower',//十六进制颜色小写
        'color-hex-length': 'short',//十六进制颜色缩写
        'comment-whitespace-inside': 'always',//注释内部空格
        'declaration-colon-space-before': 'never',//在声明的冒号之前禁止空格
        'declaration-colon-space-after': 'always',//在声明的冒号之后强制执行空格
        'declaration-block-single-line-max-declarations': 1,//声明块中的单行最大声明数
        'declaration-block-trailing-semicolon': ['always', {
            severity: 'error',
        },],//声明块中的尾分号
        'length-zero-no-unit': [true, {
            ignore: ['custom-properties'],
        },],//禁止零长度单位
        'max-line-length': 100,//最大行长度
        'selector-max-id': 0,//选择器中的最大ID数
        'value-list-comma-space-after': 'always-single-line',//在值列表的逗号之后强制执行空格
        'scss/double-slash-comment-whitespace-inside': 'always',//双斜杠注释内部空格
        ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],//忽略文件
    }
}