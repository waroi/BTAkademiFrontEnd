let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
let langs2 = ["Rust", "Go"];
let langs3 = ["Java", "Perl"];

// langs.push(langs2[0]);

langs = [...langs3, ...langs, ...langs2];

//...langs => "Rust","Go"
console.log(...langs);
