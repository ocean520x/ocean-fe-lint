module.exports = {
  rules: {
    'arrow-body-style': ['off', 'as-needed', { requireReturnForObjectLiteral: false }], // 箭头函数-函数体风格
    'arrow-parens': ['warn', 'always'], // 箭头函数-函数参数始终加上小括号
    'arrow-spacing': ['error', { before: true, after: true }], // 箭头函数-箭头前后空格
    'constructor-super': 'error', // 子类的 constructor 中必须使用 super，非子类的 constructor 中不能使用 super
    'generator-star-spacing': ['error', { before: false, after: true }], // generator 函数的 * 号前面无空格，后面有一个空格
    'no-class-assign': 'error', // 禁止对类声明变量重新赋值
    'no-confusing-arrow': 'error', // 避免箭头函数与比较操作符产生混淆
    'no-const-assign': 'error', // 禁止对使用 const 定义的常量重新赋值
    'no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
    'no-duplicate-imports': 'off', // 不要用多个 import 引入同一模块
    'no-new-symbol': 'error', // 禁止使用 new Symbol
    'no-restricted-imports': ['off', { paths: [], patterns: [] }], // 禁止导入指定的模块
    'no-this-before-super': 'error', // 在 constructor 中，禁止在调用 super() 前使用 this 或 super 关键字
    'no-useless-computed-key': 'error', // 对象的属性名不要使用无必要的计算属性
    'no-useless-constructor': 'error', // 禁止出现无用的构造函数
    'no-useless-rename': ['error', { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }], // 禁止在解构/import/export时进行无用的重命名
    'no-var': 'error', // 尽量使用 let/const 而不是 var
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }], // 使用对象属性和方法的简写语法
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }], // 回调函数尽量使用箭头函数
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }], // 尽量使用 const
    'prefer-destructuring': ['warn', {
      VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: false, object: false },
    }, { enforceForRenamedProperties: false }], // 尽量使用数组和对象解构
    'prefer-numeric-literals': 'off', // 禁止使用 parseInt() 进行二、八、十六禁止转换
    'prefer-rest-params': 'warn', // 使用 rest 操作符替代 arguments 对象
    'prefer-spread': 'warn', // 使用扩展运算符替代 apply()
    'prefer-template': 'warn', // 使用模板字符串替代字符串拼接
    'require-yield': 'error', // generator 函数内必须有 yield
    'rest-spread-spacing': ['error', 'never'], // rest 操作符和扩展运算符后面不要有空格
    'sort-imports': ['off', {
      ignoreCase: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }], // import 排序
    'symbol-description': 'warn', // 创建 Symbol 时必须传入参数
    'template-curly-spacing': 'warn', // 模板字符串的 ${} 中不要出现空格
    'yield-star-spacing': ['error', 'after'], // yield* 表达式的 * 号前面无空格，后面有一个空格
  },
};
