function debounce(func, delay) {
  let timerId;
  return function() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func.apply(this, [...arguments]), delay);
  };
}

function sayHello(name) {
  name = name || 'john';
  console.log(`hello ${name}`);
}
let deboundedHello = debounce(sayHello, 2000);

deboundedHello();
deboundedHello();
deboundedHello();
deboundedHello();
deboundedHello();
deboundedHello();
