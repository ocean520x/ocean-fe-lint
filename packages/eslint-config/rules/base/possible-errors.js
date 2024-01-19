module.exports = {
  rules: {
    'for-direction': 'error', // for 循环中的计数器应朝着正确方向移动
    'getter-return': ['error', { allowImplicit: true }], // getter 需要有返回值
    'no-async-promise-executor': 'error', // 不要使用 async 函数作为 Promise 的 executor
    'no-await-in-loop': 'warn', // 不要在循环中使用 await，应使用 Promise.all()
    'no-compare-neg-zero': 'error', // 不要与 -0 进行比较
    'no-cond-assign': ['error', 'always'], // 不要在条件表达式中使用赋值语句
    'no-console': 'warn', // 生产环境禁止使用 console
    'no-constant-condition': 'off', // 不要在条件表达式中使用常量
    'no-control-regex': 'off', // 禁止在正则中使用 ctrl 键的 ASCII 码
    'no-debugger': 'error', // 禁止使用 debugger
    'no-dupe-args': 'error', // 函数的参数列表中禁止出现重复命名的参数
    'no-dupe-keys': 'error', // 对象中禁止出现重复命名的 key
    'no-duplicate-case': 'error', // switch 语句中禁止出现重复的 case
    'no-empty': 'error', // 禁止出现空代码块
    'no-empty-character-class': 'error', // 禁止在正则中使用空字符集 []，这不能匹配任何字符，可能是 typo
    'no-ex-assign': 'error', // 禁止对 catch 中的异常重新赋值
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    }], // 禁止不必要的小括号
    'no-extra-semi': 'error', // 禁止不必要的分号
    'no-func-assign': 'error', // 禁止对函数声明重新赋值
    'no-inner-declarations': 'error', // 禁止在嵌套的代码块中出现函数声明
    'no-invalid-regexp': 'error', // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 'error', // 禁止不规则的空白符
    'no-misleading-character-class': 'error', // 禁止在正则的字符集语法 [] 中使用由多个字符点构成的字符
    'no-obj-calls': 'error', // 禁止将全局对象 Math、JSON、Reflect 当作函数进行调用
    'no-prototype-builtins': 'error', // 不要直接在对象上调用 Object.prototypes 上的方法
    'no-regex-spaces': 'error', // 禁止正则表达式中出现多个连续空格
    'no-sparse-arrays': 'error', // 禁止稀疏数组，数组中出现多个连续逗号
    'no-template-curly-in-string': 'warn', // 不要在普通字符串中出现模板字符串占位语法，如 "Hello ${name}!"，旨在防错写。
    'no-unexpected-multiline': 'error', // 避免令人困惑的多行表达式，多是由不加分号导致
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 'error', // 禁止在 finally 中出现控制流语句，如 return, throw, break 或 continue
    'no-unsafe-negation': 'error', // 禁止对关系运算符左边的运算元使用否定操作符，包括 in 和 instanceof
    'require-atomic-updates': 'warn', // 避免因使用 await 或 yield 导致的竞争性赋值
    'use-isnan': 'error', // 使用 Number.isNaN()，而不是直接与 NaN 进行比较
    'valid-jsdoc': 'off', // 强制使用有效的 JSDoc 注释
    'valid-typeof': ['error', { requireStringLiterals: true }], // 同 typeof 表达式结果进行比较的值必须是有效的字符串，即 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'

  },
};
