import React, {
    useContext,
    useEffect
} from "react";

import {
    ServiceContext
} from "../context/ServiceContext";


const Order = () => {

    const {
        orders,
        getUserOrders,
        currency
    } = useContext(ServiceContext);


    useEffect(() => {

        getUserOrders();

    }, []);


    return (

        <main className="min-h-screen px-4 py-10 sm:px-8 lg:px-12">

            <div className="max-w-6xl mx-auto">

                <div className="mb-10">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
                        ORDER HISTORY
                    </p>

                    <h1 className="mt-3 text-4xl font-extrabold text-[#754e17]">
                        Your Orders
                    </h1>

                </div>


                {orders.length === 0 ? (

                    <div className="py-20 text-center">

                        <p className="text-[#a98040]">
                            You haven't placed any orders yet.
                        </p>

                    </div>

                ) : (

                    <div className="flex flex-col gap-8">

                        {orders.map((order) => (

                            <div
                                key={order._id}
                                className="border border-[#754e17]/15 bg-[#eee5dc] p-6"
                            >

                                {/* ORDER HEADER */}

                                <div className="flex flex-col gap-2 border-b border-[#754e17]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

                                    <div>

                                        <p className="text-xs uppercase tracking-wider text-[#a98040]">
                                            Order ID
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#754e17] break-all">
                                            {order._id}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-xs uppercase tracking-wider text-[#a98040]">
                                            Status
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#754e17]">
                                            {order.status}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-xs uppercase tracking-wider text-[#a98040]">
                                            Date
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-[#754e17]">
                                            {order.date}
                                        </p>

                                    </div>

                                </div>


                                {/* ITEMS */}

                                <div className="mt-6 flex flex-col gap-4">

                                    {order.items.map(
                                        (item, index) => (

                                            <div
                                                key={`${item._id}-${index}`}
                                                className="flex items-center gap-4"
                                            >

                                                {item.image?.[0] && (

                                                    <img
                                                        src={item.image[0]}
                                                        alt={item.name}
                                                        className="h-20 w-20 object-cover"
                                                    />

                                                )}


                                                <div className="flex-1">

                                                    <p className="font-bold text-[#754e17]">
                                                        {item.name}
                                                    </p>

                                                    <p className="mt-1 text-sm text-[#a98040]">
                                                        Quantity: {item.quantity}
                                                    </p>

                                                    <p className="mt-1 text-sm text-[#a98040]">
                                                        {currency}{item.price}
                                                    </p>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>


                                {/* TOTAL */}

                                <div className="mt-6 flex justify-end border-t border-[#754e17]/10 pt-5">

                                    <div className="text-right">

                                        <p className="text-xs uppercase tracking-wider text-[#a98040]">
                                            Total
                                        </p>

                                        <p className="mt-1 text-xl font-bold text-[#754e17]">
                                            {currency}
                                            {order.totalAmount}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>

    );

};


export default Order;

