class Film{
   constructor (title, director, url){
    this.title = title;
    this.director = director;
    this.url = url;
  }
  showInfo(){
    console.log(` 
    title: ${this.title};
    director: ${this.director};
    url: ${this.url};
    `);
  }
}

// class films extends Film {
//   constructor(title, director, url){
//     super(title, director, url);
//   }
//   showInfo(){
//     console.log
//   }
// }