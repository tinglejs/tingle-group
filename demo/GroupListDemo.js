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
                <Group.Head className='tBCe tFS12 tLH2'>默认样式</Group.Head>
                <Group.List>
                    <div>GroupList是一个容器类组件</div>
                    <div>Ite默认最小高度是44px，以满足大多数场景</div>
                </Group.List>
                <Group.List>
                    <div>当两个GroupList相邻时，后一个无上边框</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2'>自定义间隔线左缩进 1rem</Group.Head>
                <Group.List lineIndent={'1rem'}>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2'>自定义间隔线左右缩进 10px</Group.Head>
                <Group.List lineIndent={[10, 10]}>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                    <div>间隔线的缩进是独立于Item的</div>
                </Group.List>

                {/* Group写不写都行 */}
                <Group>
                    <Group.Head className='tBCe tFS12 tLH2'>自定义间隔线右缩进 10px</Group.Head>
                    <Group.List lineIndent={[null, 10]}>
                        <div>间隔线的缩进是独立于Item的</div>
                        <div>间隔线的缩进是独立于Item的</div>
                        <div>间隔线的缩进是独立于Item的</div>
                    </Group.List>
                </Group>
            </div>
        );
    }
}
module.exports = Demo;
