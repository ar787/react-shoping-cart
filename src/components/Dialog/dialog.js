import { ModalContent } from './dialog.css'
import { Dialog } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Modal = ({ item, open, setOpenDialog, addToCart }) => (
    <Dialog open={open} onClose={()=> setOpenDialog(false)} maxWidth="md" fullWidth>
            <ModalContent>
                <div className="cardTitle" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    // padding: 40,
                    paddingTop: 0,
                }}>
                    <div className="icon" style={{width: "60%",}}>
                        <button style={{width: "100%", textAlign: "left", background:" #115dd8", padding: 10, outline: "none", border: "none"}}> <ArrowBackIcon /> </button>
                    </div>
                    
                    <h2>NEW PRODUCTS</h2> 
                </div>
                <div className="card__body" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // padding: 40,
                    paddingTop: 0,
                }}>
                    <div className="half" style={{paddingTop: 0, padding: 15}}>
                        <div className="featured_text" style={{textAlign: "left"}}>
                            <h1 style={{
                                margin: 0,
                                padding: 0,
                                fontWeight: 800,
                                fontFamily: "Montserrat",
                                // fontSize: 64,
                                // lineHeight: 50,
                                color: "#181e28",
                            }}>{item.title}</h1>
                            <p className="sub" style={{
                                padding: 0,
                                margin: 0,
                                fontSize: 26,
                                textTransform: "uppercase",
                                color: "#686e77",
                                fontWeight: 300,
                                marginBottom: 5,
                            }}>{item.category}</p>
                            <p className="price" style={{
                                padding: 0,
                                margin: 0,
                                color: "#252525",
                                fontSize: 26,
                            }}>${item.price}</p>
                        </div>
                        <div className="image">
                            <img src={item.image} width={400} height={400} alt="" />
                        </div>
                    </div>
                    <div className="half" style={{paddingTop: 0}}>
                        <div className="description">
                            <p style={{textAlign:"left", margin: 0,
            // font-family: "Open Sans", sans-serif;
            fontWeight: 300,
            lineHeight: "27px",
            fontSize: 16,
            color: "#555"}}>{item.description}</p>
                        </div>
                        <button onClick={() => addToCart(item)}>Add</button>
                    </div>
                </div>
                {/* <div style={{textAlign: "right"}}>
                    <button>Add</button>
                </div> */}
            </ModalContent>
    </Dialog>
)

export default Modal