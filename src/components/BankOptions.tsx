import banks from "../utils/banks"
import removeDiacritics from "../utils/removeDiacritics"

export const BankOptions = () => {
    // console.log(Object.entries(banks))
    
    return (
        
        <>
            {Object.entries(banks).map(([key, value]) => {
                return (<option key={key} value={removeDiacritics(key)}>{key} - {value}%</option>)
            })}
        </>
    )
}

export default BankOptions