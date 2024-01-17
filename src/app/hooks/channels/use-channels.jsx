// Channel Hooks

export const useChannels = () => {
    // create channel
    const createGroupChannel = async (channelUrl, createdBy, members) => {
        try {
            const response = await fetch('/api/channels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channelUrl: channelUrl,
                    createdBy: createdBy,
                    chatmate: members,
                }),
            });
    
            const createChannelResponse = await response.json();
    
            console.log('Channel Created: ', createChannelResponse);
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    // update channel message count
    const updateChannelMessageCount = async (currentChannelUrl) => {
        try {
            await fetch('api/channels', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channelUrl: currentChannelUrl,
                }),
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return {
        createGroupChannel,
        updateChannelMessageCount
    };
};