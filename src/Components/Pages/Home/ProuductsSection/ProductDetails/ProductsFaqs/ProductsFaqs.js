import React from 'react';

const ProductsFaqs = ({toggle}) => {
    return (
        <div className={toggle === 2 ? "block" : "hidden"}>
            <h1>ProductsFaqs</h1>
        </div>
    );
};

export default ProductsFaqs;