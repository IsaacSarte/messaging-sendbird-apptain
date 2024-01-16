import React, { useState } from 'react';
import Channel from '@sendbird/uikit-react/Channel';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import ChannelSettings from '@sendbird/uikit-react/ChannelSettings';
import sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import ChannelHeader from './channel-header';

const ChannelDetail = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

    return (
        <>
            <div className="sendbird-app__wrap">
                {/* channel list */}
                <div className="sendbird-app__channellist-wrap">
                    <ChannelList
                        allowProfileEdit={true}
                        onChannelSelect={(channel) =>
                            setCurrentChannelUrl(channel?.url || '')
                        }
                        renderHeader={() => <ChannelHeader />}
                    />
                </div>

                {/* conversations */}
                <div className="sendbird-app__conversation-wrap">
                    <Channel
                        channelUrl={currentChannelUrl}
                        onChatHeaderActionClick={() => setShowSettings(true)}
                    />
                </div>

                {/* channel settings */}
                {showSettings && (
                    <div className="sendbird-app__settingspanel-wrap">
                        <ChannelSettings
                            channelUrl={currentChannelUrl}
                            onCloseClick={() => {
                                setShowSettings(false);
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    )
};

export default ChannelDetail;