import React from "react";


function Button(props) {

    return (
        <div className="Buttons">
            {
                props.names.map((x) => {
                    return (<button className="button" key={x.value} type="button">{x.inner}</button>)
                })
            }
        </div>
    );
}

export default Button;