import {Card, CardMedia, CardActions, CardContent, Typography, CardActionArea, Button, Tooltip} from '@material-ui/core'
import { useState } from 'react'
import Modal from '../Dialog/dialog'
const Item = ({ item, addToCart }) => {
const [openDialog, setOpenDialog] = useState(false)
    return (
        <>
           {/* {openDialog ?  <Dialog item={item} openDialog={openDialog} setOpenDialog={setOpenDialog}/> : null} */}
            <Modal item={item} open={openDialog} setOpenDialog={setOpenDialog} addToCart={addToCart}/>
            <Card style={{width:300}}>
                <CardActionArea onClick={() => setOpenDialog(true)}>
                <CardMedia
                        style={{width:"100%", height:200}}
                        image={item.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                       <Tooltip title={item.title} placement="top" arrow>
                            <Typography noWrap>{item.title}</Typography>
                        </Tooltip> 
                        <Typography>{item.price}$</Typography>
                    </CardContent>
            
                </CardActionArea>
                <CardActions>
                    <Button style={{width:"100%", textAlign:"center"}} onClick={()=> addToCart(item)}>Add</Button>
                </CardActions>
            </Card>
            </>
    )
}

export default Item
