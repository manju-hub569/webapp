import React, {Fragment} from "react";
const Footer = (props) =>{
    return (
    <>
		<div style = {{width:"300px"}}>
            <p>{props.detail}</p>
        </div>
    </>
    );
}
export default Footer;