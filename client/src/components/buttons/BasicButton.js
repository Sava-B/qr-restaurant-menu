import Button from "@mui/material/Button";
import { Children } from "react";

const BasicButton = ({ text, onClick, color, hoverColor, size, marginX, marginY, }) => {

    return (
        <Button
            sx={{
                display: "block",
                color: `${color}`,
                textAlign: "center",
                width: `${size}rem`,
                maxHeight: '2.5rem',
                border: '1px black solid',
                borderRadius: '13px',
                mx: `${marginX}rem`,
                my: `${marginY}rem`,
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default BasicButton;
