let langs = ["Phyton", "C++", "Ruby", "Javascipt"];
let langs2 = ["Rust", "Go"];
let langs3 = ["Java", "Perl"];

// langs.push(langs2[0]);

langs = [...langs3, ...langs, ...langs2]; // Bu 3 noktaya spread operatör denir.  REST

console.log(...langs);
