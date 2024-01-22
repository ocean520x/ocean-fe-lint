'use strict'
const rule = require('../../rules/no-http-url')
const {RuleTester} = require('eslint')
const ruleTester = new RuleTester()
ruleTester.run('no-http-url', rule, {
    valid: [{
        code: "var test='https://ocean.com'",
    },], invalid: [{
        code: "var test='http://ocean.com'", output: "var test='http://ocean.com'", errors: [{
            message: 'Recommended "http://ocean.com" switch to HTTPS',
        }]
    }, {
        code: "<img src='http://ocean.com'>",
        output: "<img src='http://ocean.com'>",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        errors: [
            {
                message: 'Recommended "http://ocean.com" switch to HTTPS'
            },
        ]
    }]
})