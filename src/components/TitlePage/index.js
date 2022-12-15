import React from "react";

const Index = (props) => {
    return (
        <div className="title__page">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
        
    );
}

export default Index;