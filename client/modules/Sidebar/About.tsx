import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './About.less';
import Common from './Common.less';

interface AboutProps {
    visible: boolean;
    onClose: () => void;
}

function About(props: AboutProps) {
    const { visible, onClose } = props;
    return (
        <Dialog className={Style.about} visible={visible} title="关于" onClose={onClose}>
            <div>
                <div className={Common.block}>
                    <p className={Common.title}>本喵主页</p>
                    <a href="http://acg.jaydreamy.com/" target="_black" rel="noopener noreferrer">
                        http://acg.jaydreamy.com/
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>我的博客</p>
                    <a
                        href="https://www.cnblogs.com/cappuccino-jay/"
                        target="_black"
                        rel="noopener noreferrer"
                    >
                        https://www.cnblogs.com/cappuccino-jay/
                    </a>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>输入框快捷键</p>
                    <ul>
                        <li>Alt + S: 发送滑稽</li>
                        <li>Alt + D: 发送表情</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>命令消息</p>
                    <ul>
                        <li>-roll [number]: 掷点</li>
                        <li>-rps: 石头剪刀布</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>友情链接</p>
                    <ul>
                        <li>
                            <a
                                href="https://jaylovable.com/"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                卡布诺奇
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
}

export default About;
