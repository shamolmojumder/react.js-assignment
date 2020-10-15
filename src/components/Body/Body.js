import React from 'react';

const Body = (props) => {
console.log(props);

const {fullname,email,phone,gender,salary}=props.club
const handleButton=props.handleButton
const bodydiv={
border:"1px solid gray",
margin:'5px',
padding:'10px'
}
return (
<div style={bodydiv}>

    <div className="left">
        <img src="../../img/index.jpg" alt=""/>
    </div>
    <div className="right">
        <h3>{fullname}</h3>
        <h4> {gender} </h4>
        <h4> {email} </h4>
        <h4> {phone} </h4>
        <h4> $ {salary}</h4>
        <button onClick={()=>handleButton(props.club)}>Add </button>

    </div>
</div>
);
};

export default Body;