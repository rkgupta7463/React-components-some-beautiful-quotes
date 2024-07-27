import React from 'react';

const CardAnimation =   (props) => {
    return (
        <div className="box">
        <p>
            <q>{props.quote}</q>
            <strong><i>- {props.author}</i></strong>
        </p>
    </div>
    
    );
};

export default CardAnimation;
