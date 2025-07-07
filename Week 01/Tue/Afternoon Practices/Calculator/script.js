const buttons = {
  'row 1': [7, 8, 9, '/'],
  'row 2': [4, 5, 6, '*'],
  'row 3': [1, 2, 3, '-'],
  'row 4': ['.', 0, '+', 'C'],
};

// display the buttons
const buttonsContainer = document.getElementById('buttons-container');
for (const row in buttons) {
  const buttonRow = document.createElement('div');
  buttonRow.classList.add('flex', 'justify-between', 'items-center');
  buttons[row].forEach((button) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add(
      'bg-white',
      'px-4',
      'py-2',
      'rounded',
      'w-[20%]'
    );
    buttonElement.textContent = button;

    // handle buttons click
    buttonElement.addEventListener('click', () => {
      const display = document.getElementById('display');
      const currentValue = display.textContent;

      if (button === 'C') {
        display.textContent = 0;
      } else {
        // If display is 0, replace it; otherwise, append
        if (currentValue === '0') {
          display.textContent = button.toString();
        } else {
          display.textContent += button.toString();
        }
      }
    });
    buttonRow.appendChild(buttonElement);
  });
  buttonsContainer.appendChild(buttonRow);
}

// add button result
const result = document.createElement('button');
result.classList.add('bg-red-500', 'px-4', 'py-2', 'rounded');
result.textContent = '=';
buttonsContainer.appendChild(result);

// handling click on result button
result.addEventListener('click', () => {
  const display = document.getElementById('display');
  const currentValue = display.textContent;

  try {
    // Evaluate the expression
    const result = eval(currentValue);
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Error';
  }
});
