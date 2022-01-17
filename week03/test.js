// This keyword references the current object that is executing the current function
// method(this) -> object
// function(this) -> global (window, global objects in node)

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },
};

user.sayHi(); // John

// this reference gets the current object
// when you reference this without adding it after the forEach function
// it will reference the current function which si the showTags method,
// which will in turn not reference the title like we want, you have to add
// this after the showTags method will reference the previous object which is the
// video constant you see.
const video = {
  title: "hello world",
  tags: ["a", "c", "b"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();

// video.stop = function () {
//   console.log(this);
// };

// video.stop();

// global this keyword.
// function playVideo() {
//   console.log(this);
// }

// playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

// the context here is that you have a video function
// that will take in a title as a parameter
// then using this references the object Video = {}
// this will reference this new object which using the new keyword
// will allow you to reference the title inside the object
// const v = new Video("Hi");
