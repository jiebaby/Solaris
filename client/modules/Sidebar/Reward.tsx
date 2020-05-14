import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './Reward.less';

interface RewardProps {
    visible: boolean;
    onClose: () => void;
}

function Reward(props: RewardProps) {
    const { visible, onClose } = props;
    return (
        <Dialog
            className={Style.reward}
            visible={visible}
            title="打赏"
            onClose={onClose}
        >
            <div>
                <p className={Style.text}>
                    本喵是在可怜，希望打赏下给个鼓励~~QAQ
                    <br />
                    如有疑问欢迎加我微信：JayeeBean
                </p>
                <div className={Style.imageContainer}>
                    <img className={Style.image} src={require('../../assets/images/alipay.png')} alt="QQ二维码" />
                    <img className={Style.image} src={require('../../assets/images/wxpay.png')} alt="微信二维码" />
                </div>
            </div>
        </Dialog>
    );
}

export default Reward;
