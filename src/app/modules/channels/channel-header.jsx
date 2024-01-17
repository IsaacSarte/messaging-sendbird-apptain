import React, { useState } from 'react';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import EditUserProfile from '@sendbird/uikit-react/EditUserProfile';
import CreateChannel from '@sendbird/uikit-react/CreateChannel';
import Avatar from '@/app/components/avatar';
import CreateChannelIcon from './create-channel-icon';
import { useUsers } from '@/app/hooks/users/use-users';
import { useChannels } from '@/app/hooks/channels/use-channels';

const ChannelHeader = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [createChannel, setCreateChannel] = useState(false);

    const { updateUserProfile } = useUsers();
    const { createGroupChannel } = useChannels();

    // Sendbird state context
    const {
        stores: {
            userStore: { user },
        },
    } = useSendbirdStateContext();

    // handle update user profile function
    const handleUpdateUserProfile = async (user) => {
        updateUserProfile(
            user.userId,
            user.nickname,
            user.plainProfileUrl
        );

        setEditProfile(false);
    };

    // handle create channel function
    const handleCreateChannel = async (channel) => {
        // channel should be created if there are 2 or more members
        if (channel.memberCount === 2) {
            createGroupChannel(
                channel.url,
                channel.creator.userId,
                channel.members[1].userId
            );
        }
    
        setCreateChannel(false);
    };

    // classnames here are based on inspecting elements on Storybook

    return (
        <>
            <div className="sendbird-channel-header send-channel-header--allow-edit">
                <div 
                    className="sendbird-channel-header__title cursor-pointer"
                    onClick={() => setEditProfile((prev) => !prev)}
                >
                    {/* avatar */}
                    <div className="sendbird-channel-header__title__left">
                        <Avatar avatarUrl={user?.plainProfileUrl} altText={user?.nickname} />
                    </div>

                    {/* nickname */}
                    <div className="sendbird-channel-header__title__right">
                        <span className="sendbird-channel-header__title__right__name sendbird-label sendbird-label--subtitle-2 sendbird-label--color-onbackground-1">
                            {user?.nickname || 'No name'}
                        </span>
                        <span className="sendbird-channel-header__title__right__user-id sendbird-label sendbird-label--body-2 sendbird-label--color-onbackground-2 text-ellipsis">
                            {user?.userId || ''}
                        </span>
                    </div>
                </div>
                <CreateChannelIcon onClick={() => setCreateChannel((prev) => !prev)} />

                {/* edit user profile from Sendbird */}
                {editProfile && (
                    <EditUserProfile
                        onCancel={() => setEditProfile((prev) => !prev)}
                        onEditProfile={handleUpdateUserProfile}
                    />
                )}

                {/* create channel from Senbird */}
                {createChannel && (
                    <CreateChannel
                        onCancel={() => setCreateChannel((prev) => !prev)}
                        onCreateChannel={handleCreateChannel}
                    />
                )}
            </div>
        </>
    )
}

export default ChannelHeader;