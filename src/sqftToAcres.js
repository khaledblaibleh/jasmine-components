// sqftToAcres.js

export function sqftToAcres(squareFeet) {
    let acres = squareFeet / 43560;
    return acres;
}

if (import.meta.main) {
    console.log(`sqftToAcres(43560) = ${sqftToAcres(43560)}`);
}