import React, { useState } from 'react';
import Channel from '@sendbird/uikit-react/Channel';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import ChannelSettings from '@sendbird/uikit-react/ChannelSettings';
import ChannelHeader from './channel-header';
import { useChannels } from '@/app/hooks/channels/use-channels';

const ChannelDetail = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

    const { updateChannelMessageCount } = useChannels();

    // update message count function
    const updateMessageCount = async () => {
        updateChannelMessageCount(currentChannelUrl);
    };
    
    // on before send user message function
    const onBeforeSendUserMessage = (text) => {
        updateMessageCount();
        return { message: text };
    };
    
    // on before sending file messages function
    const onBeforeSendFileMessage = (file) => {
        updateMessageCount();
        return { file: file };
    };

    // classnames here are based on inspecting elements on Storybook

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
                        onBeforeSendUserMessage={onBeforeSendUserMessage}
                        onBeforeSendFileMessage={onBeforeSendFileMessage}
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