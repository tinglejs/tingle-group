# tingle-group [![npm version](https://badge.fury.io/js/tingle-group.svg)](http://badge.fury.io/js/tingle-group)



`Group`是列表容器组件。封装了以下功能：

* 灵活配置间隔线的缩进值，使`IOS`和`Material`风格的多样列表更加容易实现。
* 在支持`hairline`显示的设备上自动优化显示成极细的线。

## Usage


```js
let {Group} = Tingle;
...
render() {
    return (<Group>
        <Group.Head>title</Group.Head>
        <Group.List>
            <div>content</div>
            <div>content</div>
        </Group.List>
    </Group>);
}
```

## Group.List

#### className

添加扩展的样式类。

* 可选
* 默认值：无
* 类型：String

示例：

```js
render() {
    return (
        <Group.List className="customStyle">...</Group.List>
    );
}
```

#### lineIndent

配置间隔线的缩进值。

* 可选
* 默认值：无
* 类型：
  - Number：设置左缩进，默认追加`px`作为单位，如：`10`
  - String：设置左缩进，自定义长度单位，如：`1rem`
  - Array: 设置左右缩进，数组成员的类型为`Number`或`String`，默认处理如上。

示例：

```js
render() {
    return (<div>
        <Group.List lineIndent={10}>...</Group.List>
        <Group.List lineIndent={'1rem'}>...</Group.List>
        <Group.List lineIndent={[20, 20]}>...</Group.List>
        <Group.List lineIndent={['10px', '10px']}>...</Group.List>
    </div>);
}
```

## Links

- [Issues](http://github.com/tinglejs/tingle-group/issues)
