import React from 'react';

/**
 *
 * @returns
 */

function Advantages() {
    const advantages = [
        {
            id: 180000,
            text: "Menu Food",
        },
        {
            id: 20000,
            text: "Chefs",
        },
        {
            id: 400000,
            text: "Course",
        },
        {
            id: 6900000,
            text: "Alumni",
        }   
    ];

    return (
        <div className="advantages__container">
            {advantages.map((advantage) => (
                <div key={advantage.id} className="advantages__item">
                    <h2 className="advantages__number">{advantage.id.toLocaleString('pt-BR')}+</h2>
                    <h3 className="advantages__name">{advantage.text}</h3>
                </div>
            ))}
        </div>
    );
};

export default Advantages;
