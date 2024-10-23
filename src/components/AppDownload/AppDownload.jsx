import React from 'react';

/**
 *
 * @returns
 */

function AppDownload() {
    return (
        <div className="appdownload__container">
            <div className="appdownload__image">
                <img src="https://placeholder.co/400x600" alt="App Preview" />
            </div>

            <div className="appdownload__content">
                <h2 className="appdownload__title">Download our App</h2>
                <p className="appdownload__description">
                    Tenha a melhor experiência ao nosso alcance com o app!
                    Faça o download agora para iOS e Android.
                </p>

                <div className="appdownload__buttons">
                    <img
                        src="https://placeholder.co/150x50"
                        alt="Download on the App Store"
                        className="appstore__button"
                    />
                    <img
                        src="https://placeholder.co/150x50"
                        alt="Get it on Google Play"
                        className="playstore__button"
                    />
                </div>
            </div>
        </div>
    );
}

export default AppDownload;
