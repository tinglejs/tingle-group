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

class Group extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let t = this;
        return <div className={classnames('tGroup', {
            [t.props.className]: !!t.props.className
        })}>{t.props.children}</div>
    }
}

Group.propTypes = {
    className: React.PropTypes.string
};

Group.defaultProps = {
};

Group.Head = Head;
Group.List = List;

module.exports = Group;
