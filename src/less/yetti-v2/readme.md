# ❄️ yetti

Yetti is a platform-agnostic Less.js library that uses abbreviated properties to make writing CSS faster and less verbose.

## Glossary

[glossary.less](https://github.com/aofolts/yetti/blob/master/glossary.less): Contains abbreviated, parametric mixins for commmon CSS properties.

**Example:**

```
h1 {
  .fs(6.5rem); // font-size
  .lh(1em); // line-height
  .mb(.75em); // margin-bottom
}

.backgroundImage {
  .abs; // position: absolute
  .t; // top: 0
  .l; // left: 0
}
```