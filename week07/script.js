const clark = { name: "Clark" };

function hello() {
  return `Hello from ${this.name}`;
}

function hey(clark) {
  return `Hello from ${clark}`;
}
