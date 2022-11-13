import { useState } from "react";
import { Button } from "react-bootstrap";
const ListCard = ({cardList})=>{
    const [setStatus] = useState(null);
    const [setErrorMessage] = useState(null);

  const ClickHandle = (e,id) => {
    //console.log(id)
    // DELETE request using fetch with error handling
    fetch(`http://localhost:8000/card/deleteCard/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        //console.log(response)
        setStatus("Delete successful");
      })
      .catch((error) => {
        setErrorMessage(error);
        //console.error("There was an error!", error);
      });
    window.location.reload(false);
  };
    return(
    
    <div>
    {/* Heading for Card List */}
    <h4 style={{fontWeight:"800"}}>Cards List</h4>
    <div className="card" 
        style={{
            width:"400px",
            marginRight: "200px",
            padding: "30px 25px",
            marginTop: "20px"
        }}>
        {/* Loop for Adding List */}
        {
            
            cardList.map((c,i)=>{
                console.log(c)
                return (
                    <div key={i} className="d-flex">
                    <span style={{fontWeight:"800"}} >{i+1}</span>
                    <div style={{
                        marginLeft: "10px",
                        marginRight: "80px",
                        marginBottom: "20px",
                        marginTop: "4px"
                    }}>
                        <h6><span style={{fontWeight:"600"}}>Card Name:</span><span>{c.cardName}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Card Number:</span><span>{c.cardNumber}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Expiry Date:</span><span>{c.expiryDate}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>BankName:</span><span>{c.bankName}</span></h6>
                        <Button data-testid="cardsbutton" 
                        onClick={(e)=>ClickHandle(e,c.cardId)} 
                        variant="primary" 
                        style={{
                        marginTop: "6px"}}>
                             Delete
                        </Button>
                    </div>
                </div>
            )
            })
        }
        </div>
    </div>
    
    )
}
export default ListCard