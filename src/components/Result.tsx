import type React from "react";

export interface ResultProps {
  result: number;
  bank: string
}

export const Result: React.FC<ResultProps> = ({ result, bank}) => {
    if (result > 0) {
        return (
            <div className="result-block">
                <h3>Výsledek pro banku {bank}: {result.toLocaleString('cs-CZ')} Kč</h3>
            </div>
        );    
    }
    
};

export default Result
