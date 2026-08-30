import {
    createContext,
    useState,
    useEffect,
    useContext
} from "react";

import {
    useNavigate
} from "react-router-dom";

import axios from "axios";

import {
    AuthContext
} from "./AuthContext";


export const ServiceContext = createContext();


const ServiceContextProvider = (props) => {

    const currency = "₹";


    const backendUrl =
        import.meta.env.VITE_BACKEND_URL;


    // =====================================================
    // AUTHENTICATION
    // =====================================================

    const {
        token,
        isAuthenticated
    } = useContext(AuthContext);


    // =====================================================
    // STATES
    // =====================================================

    const [cartItems, setCartItems] =
        useState({});


    const [orderData, setOrderData] =
        useState(null);


    const [orderPlaced, setOrderPlaced] =
        useState(false);


    const [products, setProducts] =
        useState([]);


    const [orders, setOrders] =
        useState([]);


    const navigate = useNavigate();


    // =====================================================
    // GET PRODUCTS
    // =====================================================

    const getProductData = async () => {

        try {

            const response = await axios.get(
                `${backendUrl}/api/product/list`
            );


            if (response.data.success) {

                setProducts(
                    response.data.products
                );

            } else {

                console.log(
                    response.data.message
                );

            }

        } catch (error) {

            console.log(
                "Error fetching products:",
                error
            );

        }
    };


    useEffect(() => {

        getProductData();

    }, []);


    // =====================================================
    // LOAD USER CART
    // =====================================================

    const loadUserCart = async () => {

        try {

            if (!token) {

                setCartItems({});

                return;

            }


            const response = await axios.get(

                `${backendUrl}/api/cart/get`,

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );


            if (response.data.success) {

                setCartItems(
                    response.data.cartData || {}
                );

            } else {

                console.log(
                    response.data.message
                );

            }

        } catch (error) {

            console.log(
                "Error loading cart:",
                error
            );

        }
    };


    useEffect(() => {

        if (
            isAuthenticated &&
            token
        ) {

            loadUserCart();

        } else {

            setCartItems({});

        }

    }, [
        token,
        isAuthenticated
    ]);


    // =====================================================
    // SAVE CART
    // =====================================================

    const saveCart = async (cartData) => {

        try {

            if (!token) {

                return;

            }


            const response = await axios.post(

                `${backendUrl}/api/cart/update`,

                {
                    cartData
                },

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }

            );


            if (!response.data.success) {

                console.log(
                    response.data.message
                );

            }

        } catch (error) {

            console.log(
                "Error saving cart:",
                error
            );

        }

    };


    // =====================================================
    // ADD TO CART
    // =====================================================

    const addToCart = async (itemId) => {

        if (
            !isAuthenticated ||
            !token
        ) {

            navigate("/login");

            return;

        }


        const cartData =
            structuredClone(cartItems);


        if (cartData[itemId]) {

            cartData[itemId] += 1;

        } else {

            cartData[itemId] = 1;

        }


        setCartItems(cartData);


        await saveCart(cartData);

    };


    // =====================================================
    // GET CART COUNT
    // =====================================================

    const getCartCount = () => {

        let totalCount = 0;


        for (
            const itemId in cartItems
        ) {

            if (
                cartItems[itemId] > 0
            ) {

                totalCount +=
                    cartItems[itemId];

            }

        }


        return totalCount;

    };


    // =====================================================
    // UPDATE CART QUANTITY
    // =====================================================

    const updateQuantity = async (
        itemId,
        quantity
    ) => {

        if (
            !isAuthenticated ||
            !token
        ) {

            navigate("/login");

            return;

        }


        const cartData =
            structuredClone(cartItems);


        if (quantity <= 0) {

            delete cartData[itemId];

        } else {

            cartData[itemId] =
                quantity;

        }


        setCartItems(cartData);


        await saveCart(cartData);

    };


    // =====================================================
    // GET CART AMOUNT
    // =====================================================

    const getCartAmount = () => {

        let totalAmount = 0;


        for (
            const itemId in cartItems
        ) {

            const quantity =
                cartItems[itemId];


            if (quantity > 0) {

                const itemInfo =
                    products.find(
                        (product) =>
                            product._id === itemId
                    );


                if (itemInfo) {

                    totalAmount +=
                        itemInfo.price *
                        quantity;

                }

            }

        }


        return totalAmount;

    };


    // =====================================================
    // PLACE ORDER
    // =====================================================

    const placeOrder = async (
        customerData
    ) => {

        // -----------------------------
        // Check authentication
        // -----------------------------

        if (
            !isAuthenticated ||
            !token
        ) {

            navigate("/login");

            return {
                success: false,
                message: "Please login first"
            };

        }


        // -----------------------------
        // Build order items
        // -----------------------------

        const items = [];


        for (
            const itemId in cartItems
        ) {

            if (
                cartItems[itemId] > 0
            ) {

                const product =
                    products.find(
                        (item) =>
                            item._id === itemId
                    );


                if (product) {

                    items.push({

                        _id: product._id,

                        name: product.name,

                        price: product.price,

                        quantity:
                            cartItems[itemId],

                        image:
                            product.image || [],

                        category:
                            product.category || "",

                        subCategory:
                            product.subCategory || ""

                    });

                }

            }

        }


        // -----------------------------
        // Empty cart check
        // -----------------------------

        if (items.length === 0) {

            return {

                success: false,

                message: "Your cart is empty"

            };

        }


        // -----------------------------
        // Create order object
        // -----------------------------

        const order = {

            customer: customerData,

            items,

            totalAmount:
                getCartAmount(),

            date:
                new Date().toLocaleDateString()

        };


        // -----------------------------
        // Send order to backend
        // -----------------------------

        try {

            const response =
                await axios.post(

                    `${backendUrl}/api/order/create`,

                    order,

                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }

                );


            // -----------------------------
            // Order successfully created
            // -----------------------------

            if (
                response.data.success
            ) {

                const savedOrder =
                    response.data.order;


                // Save order in React state

                setOrderData(
                    savedOrder
                );


                // Show success

                setOrderPlaced(true);


                // Clear cart UI

                setCartItems({});


                // Navigate to orders

                navigate("/order");


                return {

                    success: true,

                    order: savedOrder

                };

            }


            return {

                success: false,

                message:
                    response.data.message

            };


        } catch (error) {

            console.log(
                "Place order error:",
                error
            );


            return {

                success: false,

                message:
                    error.response?.data?.message ||
                    "Failed to place order"

            };

        }

    };


    // =====================================================
    // GET USER ORDERS
    // =====================================================

    const getUserOrders = async () => {

        try {

            if (!token) {

                setOrders([]);

                return;

            }


            const response =
                await axios.get(

                    `${backendUrl}/api/order/user-orders`,

                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }

                );


            if (
                response.data.success
            ) {

                setOrders(
                    response.data.orders || []
                );

            } else {

                console.log(
                    response.data.message
                );

            }

        } catch (error) {

            console.log(
                "Get orders error:",
                error
            );

        }

    };


    // Load orders whenever user logs in

    useEffect(() => {

        if (
            isAuthenticated &&
            token
        ) {

            getUserOrders();

        } else {

            setOrders([]);

        }

    }, [
        token,
        isAuthenticated
    ]);


    // =====================================================
    // CONTEXT VALUE
    // =====================================================

    const value = {

        // Products

        products,


        // Currency

        currency,


        // Backend

        backendUrl,


        // Authentication

        token,

        isAuthenticated,


        // Cart

        cartItems,

        addToCart,

        getCartCount,

        updateQuantity,

        getCartAmount,


        // Navigation

        navigate,


        // Orders

        orderData,

        orders,

        placeOrder,

        getUserOrders,


        // Order Toast

        orderPlaced,

        setOrderPlaced

    };


    return (

        <ServiceContext.Provider
            value={value}
        >

            {props.children}

        </ServiceContext.Provider>

    );

};


export default ServiceContextProvider;

