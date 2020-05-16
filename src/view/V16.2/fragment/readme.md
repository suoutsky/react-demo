```js
render() {
  return (
 // Extraneous div element :(
    <Fragement>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
    </Fragement>
  );
}
```
用数组写....

```js
render() {
 return [
  "Some text.",
  <h2 key="heading-1">A heading</h2>,
  "More text.",
  <h2 key="heading-2">Another heading</h2>,
  "Even more text."
 ];
}
```

缺点：

数组里的子节点必须要用逗号分离
数组里的子节点必须要带key防止waring
string类型要用双引号括住
所以，Fragement还是很大程度上给我们提供了便利。
