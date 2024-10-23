import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

/**
 *
 * @returns
 */

function Testimonial() {
    const testimonial = {
        text: "Este produto foi incrível! Superou todas as minhas expectativas e com certeza eu recomendo para todos que estão buscando qualidade.",
        author: {
            name: 'Maria Silva',
            role: 'Gerente de Marketing',
            imageUrl: 'https://placeholder.co/100x100' // Link da imagem do autor
        }
    };

    return (
        <div className="testimonial__container">
            {/* Texto da avaliação */}
            <div className="testimonial__quote">
                <FaQuoteLeft className="quote__icon" />
                <p className="testimonial__text">{testimonial.text}</p>
            </div>

            {/* Imagem e informações da pessoa */}
            <div className="testimonial__author">
                <img
                    className="author__image"
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                />
                <div className="author__info">
                    <h4 className="author__name">{testimonial.author.name}</h4>
                    <p className="author__role">{testimonial.author.role}</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
    