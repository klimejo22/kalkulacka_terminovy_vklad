# kalkulacka_terminovy_vklad
Projekt na React číslo 2

Kalkulačka na termínové vklady, uživatel zadá částku, vybere banku a aplikace vypočítá zisk po úrocích a dani za jeden rok.

## Sekce naprogramované chatem
### Veškeré HTML + CSS

### Oprava výpočtu (App.tsx od řádku 37 po 40)

```typescript
const interest = Number(amount) * Number(banks[bankAliases[selectedBank]]);
const netInterest = interest * (1 - RATE);

setResult(Math.round(netInterest * 100) / 100);
```

### removeDiacritics.ts, celý

```typescript
export const removeDiacritics = (str: string) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
}

export default removeDiacritics;
```

### Vraceni vysledku ve formatu ResultProps

```typescript
if (selectedBank === "all") {
    const allResults: ResultProps[] = Object.keys(banks).map((bankKey) => {
    const interest = Number(amount) * Number(banks[bankKey]);
    const netInterest = interest * (1 - RATE);
    const result = Math.round(netInterest * 100) / 100;
    return { result, bank: bankKey };
    });
    setResults((prev) => [...allResults, ...prev]);
} else {
    const interest = Number(amount) * Number(banks[bankAliases[selectedBank]]);
    const netInterest = interest * (1 - RATE);
    const result = Math.round(netInterest * 100) / 100;
    setResults((prev) => [{ result, bank: bankAliases[selectedBank] }, ...prev]);
}
```

### Oddelovani radu cisel (Result.tsx, 12)

```tsx
<h3>Výsledek pro banku {bank}: {result.toLocaleString('cs-CZ')} Kč</h3>
```
