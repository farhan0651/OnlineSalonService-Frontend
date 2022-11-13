import React from 'react'

const ListDetails = ({customerList}) => {
    console.log("List Details->")
    console.log(customerList);
  return (
    <div>
    {/* Heading for Card List */}
    <h4 style={{fontWeight:"800"}}>Customer Details</h4>
    <div className="card" 
        style={{
            marginRight: "200px",
            padding: "30px 25px",
            marginTop: "20px"
        }}>
            <div key={customerList[0]?.address.door_no} className="d-flex">
                    <div style={{
                        marginLeft: "10px",
                        marginRight: "80px",
                        marginBottom: "20px",
                    }}>
                        <h6><span style={{fontWeight:"600"}}>Customer Name:</span><span>{customerList[0]?.name}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Email:</span><span>{customerList[0]?.email}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>Contact No.:</span><span>{customerList[0]?.contactNo}</span></h6>
                        <h6><span style={{fontWeight:"600"}}>House Number:</span><span>{customerList[0]?.address.door_no}</span></h6>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ListDetails