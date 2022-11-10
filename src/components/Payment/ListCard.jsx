const ListCard = ({cardList})=>{
    return(
    
    <div>
    {/* Heading for Card List */}
    <h4 style={{fontWeight:"800"}}>Cards List</h4>
    <div className="card" 
        style={{
            marginRight: "200px",
            padding: "30px 25px",
            marginTop: "20px"
        }}>
        {/* Loop for Adding List */}
        {
            cardList.map((c,i)=>{
                return (
                    <div key={i} className="d-flex">
                    <span style={{fontWeight:"800",}} >{i+1}</span>
                    <div style={{
                        marginLeft: "10px",
                        marginRight: "80px",
                        marginBottom: "20px",
                    }}>
                        <h6><span style={{fontWeight:"600"}}>Card Name:</span><span>{c.cardName}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Card Number:</span><span>{c.cardNumber}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Expiry Date:</span><span>{c.expiryDate}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>BankName:</span><span>{c.bankName}</span></h6>
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