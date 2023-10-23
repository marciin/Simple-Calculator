addEventListener('click', (e) => {
  if (e.target.classList.contains('equals')) {
    calculate(e);
  } else if (e.target.classList.contains('op')) {
    if (/[*/+-]/.test(document.getElementById('firstLine').textContent)) {
      return;
    } else {
      document.getElementById('firstLine').textContent += e.target.textContent;
    }
  } else if (e.target.classList.contains('num')) {
    if (!/[*/+-]/.test(document.getElementById('firstLine').textContent)) {
      document.getElementById('firstLine').textContent += e.target.textContent;
    } else {
      document.getElementById('secondLine').textContent += e.target.textContent;
    }
  }
});

document.getElementById('ac').addEventListener('click', (e) => {
  document.getElementById('firstLine').textContent = '';
  document.getElementById('secondLine').textContent = '';
});

document.getElementById('del').addEventListener('click', (e) => {
  let firstLine = document.getElementById('firstLine');
  let secondLine = document.getElementById('secondLine');
  if (secondLine.textContent != '') {
    secondLine.textContent = secondLine.textContent.slice(0, -1);
  } else {
    firstLine.textContent = firstLine.textContent.slice(0, -1);
  }
});

function calculate(e) {
  let firstLine = document.getElementById('firstLine');
  let firstNum = parseFloat(firstLine.textContent.slice(0, -1));
  let secondNum = parseFloat(document.getElementById('secondLine').textContent);
  let op = firstLine.textContent.charAt(firstLine.textContent.length - 1);

  if (op === '*') {
    document.getElementById('firstLine').textContent = (
      firstNum * secondNum
    ).toFixed(2);
    document.getElementById('secondLine').textContent = '';
  } else if (op === '/') {
    document.getElementById('firstLine').textContent = (
      firstNum / secondNum
    ).toFixed(2);
    document.getElementById('secondLine').textContent = '';
  } else if (op === '+') {
    document.getElementById('firstLine').textContent = firstNum + secondNum;
    document.getElementById('secondLine').textContent = '';
  } else if (op === '-') {
    document.getElementById('firstLine').textContent = firstNum - secondNum;
    document.getElementById('secondLine').textContent = '';
  }
}
