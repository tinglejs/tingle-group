/**
 * Group.Head Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

class Head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let t = this;
        return <div className={classnames('tGroup_Head', {
            [t.props.className]: !!t.props.className
        })}>{t.props.children}</div>
    }
}

Head.propTypes = {
    className: React.PropTypes.string
};

Head.defaultProps = {
};

module.exports = Head;