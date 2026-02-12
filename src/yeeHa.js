// yeeHa.js

export function yeeHa(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        return "Yee Ha";
    } else if (n % 3 === 0) {
        return "Yee";
    } else if (n % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}

if (import.meta.main) {
    console.log(`yeeHa(21) = ${yeeHa(21)}`);
}