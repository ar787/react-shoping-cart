

import { Drawer, IconButton, Menu, MenuItem, Typography} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import { Wrapper } from './sideBar.css'
import CartItem from '../CartItem/cartItem'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import { useState } from 'react';
const SideBar = ({open, setOpen, cartItems, setCartItems, getTotalPrice, addToCart, removeToCart, deleteCartItem}) => {
    const [anchorEl, setAnchorEl] = useState(null)
   
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    }

    const sortA_Z = () => {
        setCartItems(prev => 
            prev.sort((a, b) => a.id - b.id )
        )
        handleClose()
    }

    const sortZ_A = () => {
        setCartItems(prev => 
            prev.sort((a, b) => b.id - a.id )
        )
        handleClose()
    }
    console.log(cartItems)
    return (
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            
                <Wrapper>
                {cartItems.length !== 0  ?
                    <>
                    <IconButton style={{position: "absolute", right: 0, top: 0}} onClick={handleClick}>
                        <SortIcon />
                    </IconButton>
                    <Menu
                    
                        anchorEl={anchorEl}
                        keepMounted
                        open={!!anchorEl}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={sortZ_A}>Z-A</MenuItem>
                            <MenuItem onClick={sortA_Z}>A-Z</MenuItem>
                    </Menu> 
                    </>
                    : null}
                    {cartItems.length === 0 ? <p> No items in cart </p> : null}
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} addToCart={addToCart} removeToCart={removeToCart} deleteCartItem={deleteCartItem}/>
                        ))}
                    <Typography variant="h2">Total: {getTotalPrice()}<MonetizationOnIcon style={{fontSize: "inherit"}}/></Typography>
                </Wrapper>
            </Drawer>
        )
}
export default SideBar
