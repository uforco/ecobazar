import React from 'react'

interface Props {}

function CartTotal(props: Props) {
    const {} = props

    return (
        <div className=' border  rounded-md p-5 ' >
            <h2 className="text-xl mb-4  poppinsFont " >Cart Total</h2>
            <div className=' flex justify-between items-center border-b py-3 ' >
                <p>Subtotal:</p>
                <p>$84.00</p>
            </div>
            <div className=' flex justify-between items-center border-b py-3 ' >
                <p>Shipping:</p>
                <p className='font-semibold' >Free</p>
            </div>
            <div className=' flex justify-between items-center py-3 ' >
                <p>Total:</p>
                <p className='font-semibold text-xl' >$84.00</p>
            </div>
            <div className="mt-4 mb-2" >
                <button className=' w-full rounded-full bg-Primary  p-3 text-white font-poppins ' > Proceed to checkout</button>
            </div>
        </div>
    )
}

export default CartTotal
