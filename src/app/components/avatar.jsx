import React from 'react';

const Avatar = ({ avatarUrl = null, altText = null }) => {
    // classnames here are based on inspecting elements on Storybook

    return (
        <div
            className="sendbird-avatar z-0 w-8 h-8 cursor-pointer"
            tabIndex={0}
        >
            <div
                className="sendbird-avatar-img sendbird-image-renderer w-full min-w-[calc(32px)] max-w-[400px] h-[calc(32px)]"
            >
                {avatarUrl ? (
                    <>
                        <div
                            className="sendbird-image-renderer__image absolute w-full min-w-[calc(32px)] max-w-[400px] h-[calc(32px)] bg-no-repeat bg-center bg-cover"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        />
                        <img
                            src={avatarUrl}
                            alt={altText}
                            className="sendbird-image-renderer__hidden-image-loader"
                        />
                    </>
                ) : (
                    <div
                        className="sendbird-avatar-img--default w-8 h-8"
                    >
                        <div
                            className="sendbird-icon sendbird-icon-user sendbird-icon-color--content cursor-pointer w-[18.4px] min-w-[18.4px] h-[18.4px] min-h-[18.4px]"
                            tabIndex={0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path
                                    fill="#000"
                                    fillRule="evenodd"
                                    d="M42.667 37.333c7.17 0 13.018 5.66 13.32 12.755l.013.579V56a2.667 2.667 0 0 1-5.315.311L50.667 56v-5.333c0-4.26-3.33-7.743-7.53-7.987l-.47-.013H21.333a8 8 0 0 0-7.986 7.53l-.014.47V56a2.667 2.667 0 0 1-5.316.311L8 56v-5.333c0-7.17 5.66-13.019 12.755-13.321l.578-.013zM32 5.333c7.364 0 13.333 5.97 13.333 13.334S39.363 32 32 32s-13.333-5.97-13.333-13.333S24.637 5.333 32 5.333m0 5.334a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
                                    className="icon-user_svg__fill"
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Avatar;