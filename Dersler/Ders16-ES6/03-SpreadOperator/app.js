let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
let langs2 = ["Rust", "Go"];
let langs3 = ["Java", "Perl"];

// langs.push(langs2[0]);
langs = [...langs3, ...langs, ...langs2]; // [Java, Perl, Python, C++, Go, Ruby, Javascript, Rust, Go]
langs = ["C#",...langs ]; // [C#, Java, Perl, Python, C++, Go, Ruby, Javascript, Rust, Go]
langs.push("C"); // [Java, Perl, Python, C++, Go, Ruby, Javascript, Rust, Go, C#, C]  // push() methodu ile sona ekleme yapılır.

// ...langs2 => "Rust", "Go"
console.log(...langs);
