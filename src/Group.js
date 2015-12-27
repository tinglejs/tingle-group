/**
 * Group Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const Head = require('./Head');
const List = require('./List');

let Group = (props) => {
    return <div className={classnames('tGroup', {
        [props.className]: !!props.className
    })}>{props.children}</div>
}

Group.displayName = 'Group';

Group.propTypes = {
    className: React.PropTypes.string
};

Group.defaultProps = {
};

Group.Head = Head;
Group.List = List;

module.exports = Group;
