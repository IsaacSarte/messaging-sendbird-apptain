'use client';
import React from 'react';
import SendBirdApp from "@sendbird/uikit-react/App";
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { SENDBIRD_CREDENTIALS } from '../utils/constants';
import ChannelDetail from '../modules/channels/channel-detail';
import Modal from '../components/modal';

const Home = () => {
    return (
        <>
            <div className="w-screen h-screen">
                {/* sendbird provider */}
                <SendbirdProvider
                    appId={SENDBIRD_CREDENTIALS.APP_ID}
                >
                    <ChannelDetail />
                </SendbirdProvider>

                {/* modal */}
                <Modal />
            </div>
        </>
    )
}

export default Home;