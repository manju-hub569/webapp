import React, {Fragment} from "react";
const Contents = (props) =>{
    return (
    <>
		<div className = "content">
			<p>{props.info}</p>
        </div>
    </>
    );
}
export default Contents;