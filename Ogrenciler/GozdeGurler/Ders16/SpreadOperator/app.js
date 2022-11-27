let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
let langs2 = ["Rust", "Go"];
let langs3 = ["java", "perl"];

//langs.push(langs2[0])

langs = [...langs, ...langs2, ...langs3];
//...langs2 = "Rust","Go" -----> Tek tek alıyor her bir elemeanı
console.log(...langs);
console.log(langs);
