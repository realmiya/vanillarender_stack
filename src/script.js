class Stack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }
//  class里面function不用写function？
// Method Definition in Class
// When defining a method inside a class, you do not need to use the function keyword. This is because the method is automatically assigned to the class prototype. Here is how it looks in a class:
  push(item) {// it is a method, so it does not need 'function' 
    if (this.stack.length >= this.maxSize) {
      alert('Stack was already full!');
    } else {
      this.stack.push(item); //js的array是用push而不是append！！！
      this.render();
    }
  }

  pop() {
    if (this.stack.length === 0) {
      alert('Operation not allowed!');
    } else {
      this.stack.pop();
      this.render();
    }
  }

  empty() {
    if (this.stack.length === 0) {
      alert('Yes, Stack is empty');
    } else {
      alert('No, Stack is not empty');
    }
  }

  peek() {
    if (this.stack.length === 0) {
      alert('Operation not allowed!');
    } else {
      alert('Top Value is: ' + this.stack[this.stack.length - 1]);
    }
  }

  swap() {
    if (this.stack.length < 2) {
      alert('Operation not allowed!');
    } else {
      let top = this.stack.length - 1;
      [this.stack[top], this.stack[top - 1]] = [
        this.stack[top - 1],
        this.stack[top],
      ];
      this.render();
    }
  }

  // 以下是create那个stack div的全过程，前面的代码里面，你每次叫this.render（）你都会叫出来那个div
  render() {
    const stackDiv = document.getElementById('stack');
    stackDiv.innerHTML = '';
    this.stack.forEach(item => {
      let element = document.createElement('div');
      element.textContent = item;
      stackDiv.appendChild(element);
    });
  }
}

const stack = new Stack(5);
// 之所以要你在stack那个class里面定义那些function
// 这里你用的时候就写stack.pop(）
function push() {
  const inputValue = document.getElementById('inputValue').value;
  if (inputValue === '') {
    alert('Please enter a value!');
  } else {
    stack.push(inputValue);
    document.getElementById('inputValue').value = '';
  }
}

function pop() {
  stack.pop();
}

function empty() {
  stack.empty();
}

function peek() {
  stack.peek();
}

function swap() {
  stack.swap();
}
