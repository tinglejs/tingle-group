/**
 * Group.Head Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

let Head = (props) => {
    return <div className={classnames('tGroup_Head', {
        [props.className]: !!props.className
    })}>{props.children}</div>
};

Head.displayName = 'Group.Head';

Head.propTypes = {
    className: React.PropTypes.string
};

Head.defaultProps = {
};

module.exports = Head;