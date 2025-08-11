// -> Every module can have at most one default export.
// -> Named exports can be exported individually (inline).

// Default export
export default function playGuitar() {
    return "Playing guitar!";
}

// Named exports
export const shredding = () => {
    return "Shredding some licks!";
}

export const plucking = () => {
    return "Plucking the strings...";
}

// ->every module has one default export.
// export default  palyGuitar;
// // name export
// export {shredding,plucking};