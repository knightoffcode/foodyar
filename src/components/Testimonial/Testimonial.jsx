import React from 'react';

/**
 *
 * @returns
 */

function Testimonial() {

    const testimonial = {
        text: "Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka lebih suka makan malam di rumah demi menyantap masakan yang saya buat sendiri.",
        author: {
            name: 'Camella Sarrah',
            role: 'Vege Master',
            imageUrl: '/Home/Testimonial/T1.png'
        }
    };

    return (
        <div className="testimonial__container">
            <div className="testimonial__quote">
                <img
                    className="quote__icon"
                    src="/Home/Testimonial/quotes.png"
                    alt="Quotes"
                />
                <p className="testimonial__text">{testimonial.text}</p>
            </div>
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
};

export default Testimonial;
