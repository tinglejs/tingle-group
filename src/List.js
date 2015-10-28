/**
 * Group.List Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const {createStyleContext, unitize} = require('tingle-style');
const style = createStyleContext('tGroup_List');

class List extends React.Component {

    constructor(props) {
        super(props);
        let t = this;
        t._lineIndentClassName= [];
        t._itemIndentClassName= [];

        props.lineIndent && t.addIndent('Line');
        props.itemIndent && t.addIndent('Item');
    }

    // 由props属性转换成css样式规则 并插入到页面
    addIndent(type) {
        let t = this;
        let indentArray = [].concat(t.props[type.toLowerCase() + 'Indent']);

        let className = [];
        className.push(t[`make${type}IndentClassName`]('Left', unitize(indentArray[0])));
        className.push(t[`make${type}IndentClassName`]('Right', unitize(indentArray[1])));

        t[`_${type}IndentClassName`] = className.join(' ');
    }

    /**
     * 生成间隔线缩进对应的`classClass`值和`CSS`样式
     * @param side {String} Left|Right
     * @param value {String} `CSS`样式的长度值
     * @returns {String} 生成的`className`字符串
     */
    makeLineIndentClassName(side, value) {
        if (!value) {
            return;
        }
        let t = this;
        let lowerSide = side.toLowerCase();
        let indent = `${side}${value}`;
        style.add(`lineIndent${indent}`, `
            .tGroup_List.lineIndent${indent} .tGroup_ListItem:after{
                ${lowerSide}: ${value}
            }
        `);
        return `lineIndent${indent}`;
    }

    /**
     * 生成Item缩进对应的`classClass`值和`CSS`样式
     * @param side {String} Left|Right
     * @param value {String} `CSS`样式的长度值
     * @returns {String} 生成的`className`字符串
     */
    makeItemIndentClassName(side, value) {
        if (!value) {
            return;
        }
        let t = this;
        let lowerSide = side.toLowerCase();
        let indent = `${side}${value}`;
        style.add(`itemIndent${indent}`, `
            .tGroup_List.itemIndent${indent} .tGroup_ListItem{
                padding-${lowerSide}: ${value}
            }
        `);
        return `itemIndent${indent}`;
    }

    render() {
        let t = this;
        return (
            <div className={classnames('tGroup_List', {
                [t.props.className]: !!t.props.className,
                [t._LineIndentClassName]: !!t._LineIndentClassName,
                [t._ItemIndentClassName]: !!t._ItemIndentClassName,
            })}>
                {React.Children.map(t.props.children, function (Item) {
                    return <div className='tGroup_ListItem'>{Item}</div>;
                })}
            </div>
        );
    }
}

List.displayName = 'Group.List';

let indentType = React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
    React.PropTypes.array
]);

List.propTypes = {
    className: React.PropTypes.string,
    lineIndent: indentType,
    itemIndent: indentType
};

List.defaultProps = {};

module.exports = List;

