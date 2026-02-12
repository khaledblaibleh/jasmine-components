// slope.js

export function slope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    let slp = rise / run;
    return slp;
}

if (import.meta.main) {
    console.log(`slope(0,0,1,1) = ${slope(0,0,1,1)}`);
}