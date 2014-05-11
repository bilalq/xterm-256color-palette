/* jshint node:true */
var assert = require('assert')
  , palette = require('../index')

assert.ok(Array.isArray(palette), 'Palette should be an array')

assert.equal(palette.length, 256, 'Palette should have 256 colors')

palette.forEach(function(color, index) {
  assert.ok(
    /^#[a-f0-9]{6}$/.test(color),
    'Color "' + color + '" at index ' + index + ' should be in full hex format with a leading "#"'
  )
})

console.log('\x1B[32m All tests pass \x1B[39m')
