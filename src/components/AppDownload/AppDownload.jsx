import React from 'react';

/**
 *
 * @returns
 */

function AppDownload() {
    return (
        <div className="appdownload__container">
            <div className="appdownload__image">
                <img src="/Home/App/app.png" alt="App Preview" />
            </div>
            <div className="appdownload__content">
                <h2 className="appdownload__title">Download our app
                    and join the contest</h2>
                <p className="appdownload__description">
                    In order to improve our cooking skills,
                    we do need a food photography
                </p>
                <div className="appdownload__buttons">
                    <img
                        src="/Home/App/app-store.png"
                        alt="Download on the Apple Store"
                        className="appstore__button"
                    />
                    <img
                        src="/Home/App/play-store.png"
                        alt="Get it on Google Play"
                        className="playstore__button"
                    />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
