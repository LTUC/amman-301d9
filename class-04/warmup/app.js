let counter = 0;
  $('#click').on('click', () => {
    $('p').on('click', () => counter++);
    console.log(counter);
  });