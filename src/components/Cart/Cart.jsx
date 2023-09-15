import PropTypes from 'prop-types';
const Cart = ({cart, creditTaken, creditRemaining, price}) => {
    console.log(creditRemaining, creditTaken);
    return (
        <div className="max-w-[312px] p-4 flex flex-col justify-between bg-white rounded-xl text-[#1c1b1b99] m-8">
            <h3 className="text-lg font-bold text-[#2F80ED] pb-4">Credit Hour Remaining {creditRemaining} hr</h3>
            <hr />
            <h2 className="font-bold text-black text-xl pt-4">Course Name</h2>
            <ol className="py-5">
                {
                    cart.map((item,idx) => <li key={idx}>{idx+1} {item.course_name}</li>)
                }
            </ol>
            <hr />
            <h3 className=" py-4 font-semibold">Total Credit Hour : {creditTaken}</h3>
            <hr />
            <h3 className="font-bold py-4">Total Price: {price} USD</h3>

        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    creditRemaining: PropTypes.number,
    creditTaken : PropTypes.number
  };

export default Cart;