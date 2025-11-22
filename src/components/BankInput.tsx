import type React from "react"
import BankOptions from "./BankOptions"

export interface BankInputProps {
    setSelectedBank: Function
}

export const BankInput : React.FC<BankInputProps> = ({setSelectedBank}) => {
    return (
        <>
        <div className={"row"}>
            <p>Banka</p>
            <select
                id="bank"
                name="bank"
                onChange={(e) => setSelectedBank(e.target.value)}
                required
            >
            <option value="default">— vyberte banku —</option>
            <option value="all">Všechny banky</option>
            <BankOptions></BankOptions>
            </select>
        </div>
        </>
    )
}