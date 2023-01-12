import React, { useEffect, useState } from "react";
import Button from "./Button/Index";
import Input from "./Input/Index";
import styles from "./index.module.scss";

const Index = (props) => 
{
  
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
    setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
    };

    const modalContent = show ? (
        <>
            <Input
                titleLabel="firstname"
                inputType="text"
                inputPlaceholder="firstname"
                inputName="firstName"
            />
            <Input
                titleLabel="lastname"
                inputType="text"
                inputPlaceholder="lastname"
                inputName="lastName"
            />
            <Input
                titleLabel="email"
                inputType="email"
                inputPlaceholder="email"
                inputName="email"
            />
            <a href="#" onClick={handleCloseClick}>
            <Button>Close</Button>
            </a>
        </>
    ) : null;

}

export default Index;
