import type React from "react";

export interface ResultProps {
  result: number;
}

export const Result: React.FC<ResultProps> = ({ result }) => {
    if (result > 0) {
        return (
            <div className="result-block">
                <h3>Výsledek je: {result} Kč</h3>
            </div>
        );    
    }
    
};

export default Result
