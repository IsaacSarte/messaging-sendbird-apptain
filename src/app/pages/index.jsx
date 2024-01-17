'use client';
import React, { useState } from 'react';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { SENDBIRD_CREDENTIALS } from '../utils/constants';
import ChannelDetail from '../modules/channels/channel-detail';
import Modal from '../components/modal';

const Home = () => {
    const [user, setUser] = useState({
        identifier: '',
        nickname: '',
        accessToken: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <>
            <div className="w-screen h-screen">
                {/* sendbird provider */}
                <SendbirdProvider
                    appId={SENDBIRD_CREDENTIALS.APP_ID}
                    userId={user.identifier}
                    accessToken={user.accessToken}
                >
                    <ChannelDetail />
                </SendbirdProvider>

                {/* modal */}
                <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    user={user}
                    setUser={setUser}
                />
            </div>
        </>
    )
}

export default Home;