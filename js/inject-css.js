'use strict'


const fs = require('fs')

function read_style(path) {
  const css = fs.readFileSync(path, 'utf-8')
  return `<style>${css}</style>`
}

//
exports.read_style = read_style
