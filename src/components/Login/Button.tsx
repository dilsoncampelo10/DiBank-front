import { Button } from "@mui/material"

interface ButtonPrimary {
    content:string
}

export const ButtonPrimary = ({content}:ButtonPrimary) => {
    return (
        <div>
            <Button variant="contained">{content}</Button>
        </div>
    )
}