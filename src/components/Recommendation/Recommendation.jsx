import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

/**
 *
 * @returns
 */

function Recommendation() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        {
            id: 0,
            name: 'Aba 1',
            items: [
                {
                    id: '1',
                    imageUrl: 'https://placeholder.co/150x150',
                    title: 'Item 1',
                    description: 'Descrição do item 1',
                    rating: 4
                },
                {
                    id: '2',
                    imageUrl: 'https://placeholder.co/150x150',
                    title: 'Item 2',
                    description: 'Descrição do item 2',
                    rating: 3
                },
                {
                    id: '3',
                    imageUrl: 'https://placeholder.co/150x150',
                    title: 'Item 3',
                    description: 'Descrição do item 3',
                    rating: 5
                },
                {
                    id: '4',
                    imageUrl: 'https://placeholder.co/150x150',
                    title: 'Item 4',
                    description: 'Descrição do item 4',
                    rating: 2
                },
            ],
        },
        {
            id: 1,
            name: 'Aba 2',
            items: [/* Itens para a Aba 2 */],
        },
        {
            id: 2,
            name: 'Aba 3',
            items: [/* Itens para a Aba 3 */],
        },
        {
            id: 3,
            name: 'Aba 4',
            items: [/* Itens para a Aba 4 */],
        },
    ];

    return (
        <div className="section__container">
            {/* Nome centralizado no topo */}
            <h3 className="section__subheader" style={{ textAlign: 'center' }}>Nome da Seção</h3>
            <h1 className="section__header" style={{ textAlign: 'center', fontSize: '2rem' }}>Título Grande da Seção</h1>

            {/* Abas centralizadas */}
            <div className="section__tabs" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        className={`tab__button ${selectedTab === index ? 'active' : ''}`}
                        onClick={() => setSelectedTab(index)}
                        style={{
                            padding: '10px 20px',
                            margin: '0 10px',
                            cursor: 'pointer',
                            borderBottom: selectedTab === index ? '2px solid black' : 'none',
                            background: 'none',
                        }}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Itens da aba selecionada */}
            <div className="section__items" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {tabs[selectedTab].items.map((item) => (
                    <div key={item.id} className="card" style={{ width: '200px', textAlign: 'center', marginBottom: '20px' }}>
                        <img src={item.imageUrl} alt={item.title} style={{ width: '100%' }} />
                        <h4 className="card__title">{item.title}</h4>
                        <p className="card__description">{item.description}</p>
                        <div className="card__rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    color={i < item.rating ? '#ffc107' : '#e4e5e9'}
                                    size={20}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommendation;
