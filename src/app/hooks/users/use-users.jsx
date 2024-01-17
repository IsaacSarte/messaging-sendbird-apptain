// User Hooks

export const useUsers = () => {
    // add user profile
    const addUserProfile = async (userId, nickname, setUser) => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: userId,
                    nickname: nickname,
                }),
            });

            const addUserResponse = await response.json();

            setUser({
                identifier: addUserResponse.user.identifier,
                nickname: addUserResponse.user.nickname,
                accessToken: addUserResponse.user.accessToken,
            });

            console.log('User Added: ', addUserResponse);
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    // update user profile
    const updateUserProfile = async (userId, nickname, avatarUrl) => {
        try {
            await fetch('/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: userId,
                    nickname: nickname,
                    profileUrl: avatarUrl,
                }),
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return {
        addUserProfile,
        updateUserProfile
    };
};