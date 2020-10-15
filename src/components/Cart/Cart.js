import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart=props.cart
    let totalsalary=0;
    for (let i = 0; i < cart.length; i++) {
        const amount = cart[i];
        totalsalary=totalsalary+amount.salary   
    }

    return (
        <div>
            <h1>Salary : {totalsalary} </h1>
        </div>
    );
};

export default Cart;