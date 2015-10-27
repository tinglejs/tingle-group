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
        t.state = {
            lineLndentClassName: []
        };

        // 由props属性转换成css样式规则 并插入到页面
        if (props.lineIndent) {
            let lineIndentArray;
            if (Array.isArray(props.lineIndent)) {
                lineIndentArray = props.lineIndent;
            } else {
                lineIndentArray = [].concat(props.lineIndent);
            }

            t.addLineIndentStyle('Left', unitize(lineIndentArray[0]));
            t.addLineIndentStyle('Right', unitize(lineIndentArray[1]));

            t.state.lineIndentClassName = t.state.lineLndentClassName.join(' ');
        }
    }

    addLineIndentStyle(side, value) {
        if (!value) {
            return;
        }
        let t = this;
        t.state.lineLndentClassName.push(`lineIndent${side}${value}`);
        style.addRule(`${side}${value}`, `
            .tGroup_List.lineIndent${side}${value} .tGroup_ListItem:after{
                ${side}: ${value}
            }
        `);
    }

    render() {
        let t = this;
        return (
            <div className={classnames('tGroup_List', {
                [t.props.className]: !!t.props.className,
                [t.state.lineIndentClassName]: !!t.state.lineIndentClassName
            })}>
                {React.Children.map(t.props.children, function (Item) {
                    return <div className='tGroup_ListItem'>{Item}</div>;
                })}
            </div>
        );
    }
}

List.propTypes = {
    className: React.PropTypes.string,
    lineIndent: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
        React.PropTypes.array
    ])
};

List.defaultProps = {
};

module.exports = List;