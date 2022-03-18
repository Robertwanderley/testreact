import React from "react";

function Footer(props){
    return(
        <footer className="container text-center">
            <br/>
         {props.ano}{props.Marca}
        </footer>
    )
}
export default Footer;