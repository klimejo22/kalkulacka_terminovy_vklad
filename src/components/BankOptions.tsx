import banks from "../utils/banks"
import removeDiacritics from "../utils/removeDiacritics"

export const BankOptions = () => {
    return (
        <>
            {Object.entries(banks).map(([key, value]) => {
                return (<option key={key} value={removeDiacritics(key)}>{key} - {value}%</option>)
            })}
        </>
    )
}

export default BankOptions