function externe(msg) {
//
  function interne() {
    console.log(msg);

  }
  return interne;
}

externe('Hello');
