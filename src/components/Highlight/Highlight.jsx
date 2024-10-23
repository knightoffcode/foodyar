import React from 'react'

/**
 *
 * @returns
 */

function Highlight() {

    const banner = {
        id: '7654567534',
        name: 'Banner Título',
        description: 'Essa é uma descrição breve do banner.',
        url: 'https://placeholder.co/600x600',
        link: '#'
    };

    return (
        <div className="banner__head">
            <div className="banner__wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="banner__content" style={{ flex: 1 }}>
                    <h1 className="banner__title">{banner.name}</h1>
                    <p className="banner__description">{banner.description}</p>
                    <a href={banner.link} className="banner__button">
                        <button>Saiba Mais</button>
                    </a>
                </div>
                <div className="banner__image-wrapper" style={{ flex: 1 }}>
                    <img className="banner__image" src={banner.url} alt={banner.name} style={{ maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Highlight;
