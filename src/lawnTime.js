// lawnTime.js

export function lawnTime(width, length, rate) {
    let area = width * length;
    let minutes = area / rate;
    return minutes;
}

if (import.meta.main) {
    console.log(`lawnTime(10, 10, 5) = ${lawnTime(10, 10, 5)}`);
}