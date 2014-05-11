xterm-256color-palette
======================

> JS module exposing xterm-256color's palette as a list of Strings

This can be easily consumed by modules such as the
[eight-bit-color-picker](https://github.com/bilalq/eight-bit-color-picker/).

Since this module exposes itself via the
[UMD returnExports format](https://github.com/umdjs/umd/blob/master/returnExports.js),
it will work with whatever module loading system you're using. If you're in a
browser and have no module loader present, it will register a global called
`xterm256ColorPalette`.

Install
-------
npm:

```sh
npm install --save xterm-256color-palette
```

Bower:

```sh
bower install --save xterm-256color-palette
```

Component:

```sh
component install bilalq/xterm-256color-palette
```

License
-------
[MIT](https://github.com/bilalq/xterm-256color-palette/blob/master/LICENSE)
