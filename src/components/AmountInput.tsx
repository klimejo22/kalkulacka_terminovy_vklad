import type React from "react"

export interface AmountInputProps {
    amount: number,
    setAmount: Function
}

export const AmountInput : React.FC<AmountInputProps> = ({amount, setAmount}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
        if (amount < 0) {
        setAmount(0)
        e.target.value = "0"
        }
    }
    
    return (
        <>
            <div className={"row"}>
            <p>Částka</p>
            <input
                id="amount"
                name="amount"
                type="number"
                placeholder="0"
                min="0"
                onChange={(e) => handleChange(e)}
                required
            />
            <div className={"hint"}>Zadejte částku v Kč</div>
            </div>
        </>
    )
}