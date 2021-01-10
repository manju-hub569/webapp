import React, {Fragment} from "react";
const Student = (props) =>{
    return (
    <>
		<div className = "manju">
			<img src = {"image/"+props.name+".jpg"} alt = "Mypic" height = "174px" width = "309px"/>
        </div>
    </>
    );
}
export default Student;