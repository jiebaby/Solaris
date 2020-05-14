import React from 'react';

import Dialog from '../../components/Dialog';

import Style from './Download.less';
import Common from './Common.less';

interface DownloadProps {
    visible: boolean;
    onClose: () => void;
}

function Download(props: DownloadProps) {
    const { visible, onClose } = props;
    return (
        <Dialog className={Style.download} visible={visible} title="应用" onClose={onClose}>
            <div className={Common.container}>
                <div className={Common.block}>
                    <div className={Style.android}>
                        <img src={require('../../assets/images/android-apk.png')} alt="公众号二维码" />
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default Download;
