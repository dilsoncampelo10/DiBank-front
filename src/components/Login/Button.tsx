import { Button } from "@mui/material"

interface ButtonPrimary {
    content:string
}

export const ButtonPrimary = ({content}:ButtonPrimary) => {
    return (
        <div>
            <Button onClick={welcome} variant="contained">{content}</Button>
        </div>
    )
}

const welcome = () =>{
    alert('Bem-vindo')
}