module.exports = {
  rules: {
    'accessor-pairs': 'off', // 强制 getter 和 setter 在对象中成对出现
    'array-callback-return': ['error', { allowImplicit: true }], // 某些数组方法的回调函数中必须包含 return 语句
    'block-scoped-var': 'error', // 把 var 语句看作是在块级作用域范围之内，不能在块外使用
    'class-methods-use-this': ['off', { exceptMethods: [] }], /// / 强制类的方法使用 this
    complexity: ['off', 10], // 设置圈复杂度最大值// @reason IDE 插件会把大段代码标红，影响编码体验，此类问题适合做后置检查
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    curly: ['error', 'multi-line'], // 多行语句必须用大括号包裹，单行语句推荐用大括号包裹
    'default-case': ['warn', { commentPattern: '^no default$' }], // switch 语句必须有 default
    'dot-loaction': ['error', 'property'], // 统一在点号之前换行
    'dot-notation': ['error', { allowKeywords: true }], // 优先使用 . 访问对象的属性
    eqeqeq: ['warn', 'always', { null: 'ignore' }], // 使用严格相等运算符
    'guard-for-in': 'warn', // for-in 循环中需要对 key 进行验证
    'max-classes-per-file': 'off', // 限制每个文件中类的数量
    'no-alert': 'warn', // 禁止使用 alert
    'no-caller': 'error', // 禁止使用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'error', // case 或 default 字句出现词法声明时，必须用块包裹
    'no-div-regex': 'off', // 不能使用看起来像除法的正则表达式
    'no-else-return': 'off', // 如果一个 if 语句的结果总是返回一个 return 语句，那么最后的 else 是不必要的
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }], // 不要出现空函数
    'no-empty-pattern': 'error', // 不要在解构中出现空模式，即 {} 或 []
    'no-eq-null': 'off', // 与 null 的比较必须使用严格等于操作符
    'no-eval': 'error', // 禁止使用 eval
    'no-extend-native': 'error', // 禁止扩展原生对象
    'no-extra-bind': 'error', // 禁止不必要的 bind
    'no-extra-label': 'error', // 禁止不必要的 label
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-floating-decimal': 'error', // // 不要省略小数点前或小数点后的 0
    'no-global-assign': ['error', { exceptions: [] }], // 禁止对原生对象或只读的全局对象进行赋值
    'no-implicit-coercion': ['off', { boolean: false, number: true, string: true, allow: [] }], // 禁止使用较短的符号实现类型转换
    'no-implicit-globals': 'off', // 禁止在全局范围内使用变量声明和 function 声明
    'no-implied-eval': 'error', // 禁止使用类 eval 的方法，如 setTimeout 传入字符串
    'no-invalid-this': 'off', // 禁止 this 关键字出现在类和类对象之外
    'no-iterator': 'error', // 禁止使用 __iterator__
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁止使用 label
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    'no-loop-func': 'error', // 禁止在循环中的函数内出现外部作用域中定义且会发生变化的变量，以防止闭包副作用
    'no-magic-numbers': ['off', {
      ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false,
    }], // 禁止使用魔术数字
    'no-multi-spaces': ['error', { ignoreEOLComments: false }], // 禁止使用多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-new': 'error', // 禁止使用 new 来生成对象
    'no-new-func': 'error', // 禁止使用 new Function
    'no-new-wrappers': 'error', // 禁止使用 new String，Number 和 Boolean
    'no-octal': 'error', // 禁止使用八进制字面量
    'no-octal-escape': 'error', // 禁止使用八进制转义序列
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: ['acc', 'e', 'ctx', 'draft', 'req', 'request', 'res', 'response', '$scope'],
    }],
    'no-proto': 'error', // 禁止使用 __proto__
    'no-redeclare': 'error', // 禁止重复声明变量
    'no-restricted-properties': 'off', // 禁止使用某些对象属性
    'no-return-assign': ['error', 'always'], // 禁止在 return 语句中使用赋值语句
    'no-return-await': 'off', // 禁止不必要的 return await
    'no-script-url': 'error', // 禁止使用 javascript: url
    'no-self-assign': 'error', // 禁止自我赋值
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 禁止使用逗号操作符
    'no-throw-literal': 'warn', // 禁止抛出字面量错误 throw "error";
    'no-unmodified-loop-condition': 'off', // 禁止在循环中出现不变的条件
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }], // 禁止出现未使用过的表达式
    'no-unused-labels': 'error', // 禁止出现未使用过的 label
    'no-useless-call': 'off', // 禁止不必要的 .call() 和 .apply()
    'no-useless-catch': 'error', // 禁止不必要的 catch 子句
    'no-useless-concat': 'error', // 禁止不必要的字符串拼接
    'no-useless-escape': 'error', // 禁止不必要的转义
    'no-useless-return': 'error', // 禁止多余的 return
    'no-void': 'error', // 禁止使用 void
    'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }], // 禁止在注释中使用特定的警告术语
    'no-with': 'error', // 禁止使用 with
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }], // Promise 的 reject 需要传入 Error 对象
    radix: 'error', // parseInt 必须指定第二个参数
    'require-await': 'off', // async 函数中必须存在 await 语句
    'require-unicode-regexp': 'off', // 正则表达式必须包含 u 标志
    'vars-on-top': 'off', // var 必须放在作用域顶部
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }], // 立即执行函数必须用括号包裹
    yoda: 'warn', // 使用 color === 'red' 而不是 'red' === color
  },
};
