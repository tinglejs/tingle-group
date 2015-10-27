/**
 * GroupList Component Demo for tingle
 * @author jiasong.js
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const Group = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tFS14'>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>默认样式</Group.Head>
                <Group.List>
                    <div className='tLH44'>GroupList是一个容器类组件</div>
                    <div className='tLH44 tP4'>Item的高度取决于内容的高度</div>
                </Group.List>
                <Group.List>
                    <div className='tLH44'>当两个Group.List相邻时，后一个无上边框</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>自定义间隔线左缩进 1rem</Group.Head>
                <Group.List lineIndent={'1rem'}>
                    <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                    <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>自定义间隔线左右缩进 10px</Group.Head>
                <Group.List lineIndent={[10, 10]}>
                    <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                    <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                </Group.List>

                {/* Group写不写都行 */}
                <Group>
                    <Group.Head className='tBCe tFS12 tLH2 tPT16'>自定义间隔线右缩进 10px</Group.Head>
                    <Group.List lineIndent={[null, 10]}>
                        <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                        <div className='tLH44'>间隔线的缩进是独立于Item的</div>
                    </Group.List>
                </Group>
            </div>
        );
    }
}
module.exports = Demo;
