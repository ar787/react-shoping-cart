import React, { useState } from 'react'
// styles
import { Item, Buttons, Description, Quantity, Counter } from './cartItem.css'
// icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// components
import { Button, IconButton } from '@material-ui/core' 
const CartItem = ({ item, addToCart, removeToCart, deleteCartItem }) => {   
    const [counter, setCounter] = useState(item.amount) 

    const minus = () => {

        if(counter > 1) {
            setCounter(prev => prev - 1)
            removeToCart(item.id)
        }
        return null    
    }

    const add = () => {
        setCounter(prev => prev + 1)
        addToCart(item)
    }
    return(
        <Item>
            <Buttons>
                <IconButton onClick={() => deleteCartItem(item.id)}> <DeleteIcon color="secondary"/> </IconButton>
                <IconButton > <FavoriteIcon /> </IconButton>
            </Buttons>
            <Description>
                <img src={item.image} width={100} height={100} alt={item.title}/>
                <p>{item.title}</p> 
            </Description>
            <Quantity>
                <Button variant="contained" color="primary" onClick={minus}><RemoveIcon/></Button>
                    <Counter>{counter}</Counter>
                <Button variant="contained" color="secondary" onClick={add}><AddIcon/></Button>
            </Quantity>
            
            <div>{ (counter * item.price).toFixed(2) }</div>
            <MonetizationOnIcon />
        </Item>
    )
}

export default CartItem