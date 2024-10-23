import React from 'react';

/**
 *
 * @returns
 */

function Advantages() {
    const advantages = [
        {
            id: 1,
            text: "Menu Food",
        },
        {
            id: 2,
            text: "Chefs",
        },
        {
            id: 3,
            text: "Course",
        },
        {
            id: 4,
            text: "Alumni",
        }
    ];

    return (
        <div className="advantages__container">
            {advantages.map((advantage) => (
                <div key={advantage.id} className="advantage__item">
                    <h2 className="advantage__number">{advantage.id}</h2>
                    <h3 className="advantage__name">{advantage.text}</h3>
                </div>
            ))}
        </div>
    );
};

export default Advantages;
