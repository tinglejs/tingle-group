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
                    <div className='tLH30'>Item的高度取决于内容的高度</div>
                </Group.List>
                <Group.List>
                    <div className='tLH44'>当两个Group.List相邻时，后一个无上边框</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>间隔线左缩进30px & Item两边缩进14px</Group.Head>
                <Group.List lineIndent={30} itemIndent={[14, 14]}>
                    <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                </Group.List>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>间隔线两边缩进10px & Item无缩进(默认)</Group.Head>
                <Group.List lineIndent={[10, 10]}>
                    <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                </Group.List>
                <div className="tPL14 tPT10 tBCe">
                    <div className="tFS16 tFC6">总体概览</div>
                    <div className="tFS12 tFCa tLH2 tOmit">小标题蚊子小标题蚊子</div>
                </div>
                <Group>
                    <Group.List itemIndent={[10, 10]}>
                        <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                        <div className='tLH44 tOmit'>间隔线的缩进是独立于Item的缩进的，很长很长的测试文字</div>
                    </Group.List>
                </Group>
                <Group.Head className='tBCe tFS12 tLH2 tPT16'>列表项有空值(null, undefined, '')的情况</Group.Head>
                <Group>
                    <Group.List itemIndent={[10, 10]}>
                        {0}
                        {''/*该项不输出*/}
                        {null/*该项不输出*/}
                        {undefined/*该项不输出*/}
                        {React.Children.toArray([1,2,3].map((value) => {
                            return <div>遍历项: {value}</div>;
                        }))}
                    </Group.List>
                </Group>
            </div>
        );
    }
}
module.exports = Demo;
