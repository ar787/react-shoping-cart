import './App.css'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { LinearProgress, Grid, IconButton, Badge } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Item from './components/Item/Item'
import SideBar from './components/SideBar/sideBar'

async function getProducts() {
  return await( await fetch("https://fakestoreapi.com/products")).json()
}

function App() {
  const {data, isLoading, isError, error} = useQuery("products", getProducts)
  const [openSideBar, setOpenSideBar] = useState(false)
  const [cartItems, setCartItems] = useState([])

  if (isLoading) return <LinearProgress  color="secondary"/>

  if(isError) return <p>{error.message}</p>

  const getTotalItems = () => cartItems.length
  const getTotalPrice = () => cartItems.reduce((acc, item) => +Number((acc + item.price) * item.amount).toFixed(2), 0)
  const getItem = (id) => cartItems.find(el => el.id === id)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find(el => el.id === item.id)

      if(isItemInCart) {
        return prev.map((el) => el.id === item.id ?  {...item, amount: el.amount + 1} : el)
      }

      return [...prev, {...item, amount: 1}]
    })
  }
  const removeToCart = (id) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  }

  const deleteCartItem = (id) => {
    setCartItems(prev => prev.filter(el => el.id !== id))
  }

  const props = {
    open: openSideBar,
    setCartItems: setCartItems,
    setOpen:setOpenSideBar,
    removeToCart: removeToCart, 
    deleteCartItem: deleteCartItem,
    getTotalPrice: getTotalPrice,
    addToCart: addToCart
  }
  return (
    <div className="App">
        <Grid container direction="row" justify="flex-end" alignItems="center"  style={{position: "sticky", top: 0, zIndex: 1}}>
          <Grid item >
            <IconButton style={{marginRight: "1rem"}} onClick={() => setOpenSideBar(true)}>
              <Badge badgeContent={getTotalItems()} color="secondary" max={100}>
                <AddShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
        <Grid container
           direction="row"
           justify="center"
           alignItems="flex-start"
        >
            {data.map(item => (
              <Grid item key={item.id} style={{margin: 5}} zeroMinWidth>
                <Badge badgeContent={getItem(item.id)?.amount ?? null} color="secondary" max={999}>
                    <Item item={item}  addToCart={addToCart}/>
                  </Badge>
              </Grid>
            ))} 
        </Grid>
        <SideBar cartItems={cartItems} {...props}/>
    </div>
  );
}

export default App;
