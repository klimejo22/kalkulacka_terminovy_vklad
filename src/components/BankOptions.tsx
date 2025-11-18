export const BankOptions = () => {

    const banks : object= {
        "Moneta": 3.4,
        "Česká spořitelna": 2.25,
        "Komerční banka": 3,
        "Air Bank" : 3.2
    }

    function removeDiacritics(str: string) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "");
    }

    console.log(Object.entries(banks))
    
    return (
        
        <>
            {Object.entries(banks).map(([key, value]) => {
                return (<option key={key} value={removeDiacritics(key)}>{key} - {value}%</option>)
            })}
        </>
    )
}

export default BankOptions