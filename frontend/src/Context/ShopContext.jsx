import React,{createContext,useEffect,useState} from "react";
export const ShopContext = createContext(null);

    const ShopContextProvider = ( props ) => {
        const [all_products, setAllProduct] = useState([]);
        //functions
       const getDefaultCart = () => {
        let cart=[];
        for (let index =0; index < 300; index++){
            cart[index] = [{
                id:index,
                size:"S",
                quantity:0
            
            },
            {
                id:index,
                size:"M",
                quantity:0
            },
            {
                id:index,
                size:"L",
                quantity:0
            }]
            
        }
        return cart;
    }
    
    


        const [cartItems, setCartItems] = useState(getDefaultCart());

        const [cart, setCart] = useState(0);

        
        
       
        
      
        const logout=()=>{
            localStorage.removeItem('auth_token');
            setCart(0);
            const buffer=cartItems;
            console.log(cartItems);
            let mm="quantity";
            for(let i=0;i<300;i++){
                    buffer[i][0][mm]=0;
                    buffer[i][1][mm]=0;
                    buffer[i][2][mm]=0;
                
            }
            setCartItems(buffer);
            getTotalCartItems();
        }
        
    
        const addToCart = (id,size) => {
            let buffer=cartItems;
            buffer[id][size].quantity++;
            getTotalCartItems();
            setCartItems(buffer);
            console.log(cartItems);
            //api
            if(localStorage.getItem('auth_token')){
                fetch('http://localhost:4000/add',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'auth_token':`${localStorage.getItem('auth_token')}`,
                        Accept:'application/json'
                    },
                    body:JSON.stringify({
                        id:id,
                        size:size
                    }),
                })
                .then((response) => response.json())
                .then((data) => {console.log(data)})
            }
        }

        
        // Frontend code (Assuming this is part of a React component)
        useEffect(() => {
            getTotalCartItems();
            fetch('http://localhost:4000/allproducts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'auth_token': `${localStorage.getItem('auth_token')}`
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setAllProduct(data);
                console.log("All products:", data);
            })
            .catch((error) => {
                console.error("Error fetching all products:", error);
            });
            const token =localStorage.getItem('auth_token');
            if(!token) {
                setCartItems(getDefaultCart());
            }
            else{
                fetch('http://localhost:4000/getcart', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth_token': `${localStorage.getItem('auth_token')}`,
                        Accept: 'application/json'
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("User's cart:", data);
                    setCartItems(data);
                    getTotalCartItems();
                })
                .catch((error) => {
                    console.error("Error fetching user's cart:", error);
                });
            } 
        }, []);
        const getTotalCartItems = () => {
            let total=0;
            console.log("tgus us cart uis",cartItems)
            for(let i=0;i<300;i++){
                total+=cartItems[i][0].quantity+cartItems[i][1].quantity+cartItems[i][2].quantity;
            }
            setCart(total);
            return total;
        }

        const getTotalCartAmount = () => {
            let total=0;
            for(let i=0;i<new_price.length;i++){
                total+= (cartItems[i][0].quantity+cartItems[i][1].quantity+cartItems[i][2].quantity)*Number(new_price[i]);
            }
            return total;
        }
        const getNewPrice = () => {
            const arr=[];
            for(let i=0;i<all_products.length;i++){
                arr.push(all_products[i].new_price);
            }
            return arr;
        }
        const new_price=getNewPrice();

        const removeFromCart = (id,size) => {
            const buffer=cartItems;
            if(buffer[id][size].quantity>0){
                buffer[id][size].quantity--;
            }
            getTotalCartItems();
            setCartItems(buffer);
            console.log('remove');
            //api
            if(localStorage.getItem('auth_token')){
                console.log('remove');
                fetch('http://localhost:4000/remove',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'auth_token':`${localStorage.getItem('auth_token')}`,
                        Accept:'application/json'
                    },
                    body:JSON.stringify({
                        id:id,
                        size:size
                    }),
                })
                .then((response) => response.json())
                .then((data) => {console.log(data)})
            }
        }
        

        const contextValue = {logout,all_products,cart,new_price,cartItems,getDefaultCart,getTotalCartItems,getTotalCartAmount,addToCart,removeFromCart};
        return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        );
}

export default ShopContextProvider;

