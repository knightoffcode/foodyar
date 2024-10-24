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
            name: 'Healthy Food',
            items: [
                {
                    id: '1',
                    imageUrl: '/Home/Recommendation/R1.png',
                    title: 'Item 1',
                    description: 'Descrição do item 1',
                    rating: 4
                },
                {
                    id: '2',
                    imageUrl: '/Home/Recommendation/R2.png',
                    title: 'Item 2',
                    description: 'Descrição do item 2',
                    rating: 3
                },
                {
                    id: '3',
                    imageUrl: '/Home/Recommendation/R3.png',
                    title: 'Item 3',
                    description: 'Descrição do item 3',
                    rating: 5
                },
                {
                    id: '4',
                    imageUrl: '/Home/Recommendation/R4.png',
                    title: 'Item 4',
                    description: 'Descrição do item 4',
                    rating: 2
                },
            ],
        },
        {
            id: 1,
            name: 'Lunch',
            items: [/* Itens para a Aba 2 */],
        },
        {
            id: 2,
            name: 'Vage Desert',
            items: [/* Itens para a Aba 3 */],
        },
        {
            id: 3,
            name: 'Shake',
            items: [/* Itens para a Aba 4 */],
        },
    ];

    return (
        <div className="section__container">
            <h3 className="section__subheader" style={{ textAlign: 'center' }}>Watch Now</h3>
            <h1 className="section__header" style={{ textAlign: 'center', fontSize: '2rem' }}>Special to Try</h1>

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

            <div className="section__items">
                {tabs[selectedTab].items.map((item) => (
                    <div key={item.id} className="card">
                        <img className="card__image" src={item.imageUrl} alt={item.title}  />
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
