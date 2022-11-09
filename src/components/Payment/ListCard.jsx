import React from 'react'

const ListCard = ({cardList}) => {

    <div>
    <h6>Cards List</h6>
    <div>
        {
            cardList.map((c,i)=>{
                return (
                    <div key={i} className="d-flex">
                <span>{i+1}</span>
                <div>
                    <h6>Card Name:<span>{c.cardName}</span></h6>
                    <h6>Card Number:<span>{c.cardNumber}</span></h6>
                    <h6>Expiry Date:<span>{c.expiryDate}</span></h6>
                    <h6>Bank Name:<span>{c.bankName}</span></h6>
                </div>
                </div>
            )
            })
        }
        </div>
    </div>

}

export default ListCard