import React, { useState } from 'react';
import { FaStar, FaAlignCenter   } from 'react-icons/fa';

/**
 * Componente Review para exibir detalhes de um item com comentários e evolução.
 */
function Review() {
    const item = {
        title: "Hamburguer Gourmet",
        imageUrl: "https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_my18jv",
        rating: 4,
        description: "Delicioso hambúrguer gourmet com carne de qualidade, queijo derretido, alface crocante e molho especial.",
    };

    const [selectedTab, setSelectedTab] = useState(0);
    const [comments, setComments] = useState([
        { id: 1, user: 'User 1', comment: 'Adorei este item, super saboroso!', date: '2024-10-01' },
        { id: 2, user: 'User 2', comment: 'Muito bom, mas poderia ser um pouco mais picante.', date: '2024-10-03' },
    ]);

    const postHistory = [
        { date: '2024-10-01', change: 'Adicionada a primeira versão do item no sistema.' },
        { date: '2024-10-05', change: 'Alteração na descrição e adição de novos ingredientes.' },
        { date: '2024-10-10', change: 'Atualização da imagem do item.' },
    ];

    const tabs = [
        {
            id: 1, name: 'Comentários', content: comments.map((comment) => (
                <div key={comment.id} className="review__comment" style={{ marginBottom: '20px' }}>
                    <strong>{comment.user}</strong>
                    <p>{comment.comment}</p>
                    <small>{comment.date}</small>
                </div>
            ))
        },
        {
            id: 2, name: 'Histórico de Alterações', content: postHistory.map((history, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <strong>{history.date}</strong>: {history.change}
                </div>
            ))
        }
    ];

    return (
        <div className="review">
            <div className="review__container">
                <div className="review__header" style={{ textAlign: 'center' }}>
                    <img src={item.imageUrl} alt={item.title} className="review__image" />
                    <h1 className="review__title">{item.title}</h1>
                    <div className="review__rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                color={i < item.rating ? '#ffc107' : '#e4e5e9'}
                                size={30}
                            />
                        ))}
                    </div>
                </div>

                <div className="review__description">
                    <FaAlignCenter />
                    <h3>Descrição Completa</h3>
                    <p>{item.description}</p>
                </div>

                <div className="review__tabs" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
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

                <div className="review__content" style={{ padding: '20px' }}>
                    {tabs[selectedTab].content}
                </div>

                {selectedTab === 0 && (
                    <div className="review__comment-form" style={{ padding: '20px' }}>
                        <textarea placeholder="Deixe seu comentário..." rows="4"></textarea>
                        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Adicionar Comentário</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Review;
