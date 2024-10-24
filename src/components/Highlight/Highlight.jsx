import React from 'react';

/**
 *
 * @returns
 */

function Highlight() {

    const banner = {
        id: '7654567534',
        name: 'Eat What You Cook With Us, Together!',
        description: 'When you eat something that cooked by yourself, the happiness is priceless..',
        url: '/Home/Highlight/Highlight.png',
        link: '#'
    };

    return (
        <div className="banner__head">
            <div className="banner__wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="banner__content">
                    <h1 className="banner__title">{banner.name}</h1>
                    <p className="banner__description">{banner.description}</p>
                    <a href={banner.link} className="banner__button">
                        <button>Saiba Mais</button>
                    </a>
                </div>
                <div className="banner__image-wrapper">
                    <img className="banner__image" src={banner.url} alt={banner.name} style={{ maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Highlight;
