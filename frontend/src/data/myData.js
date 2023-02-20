fetch('https://example.com/api/data')
  .then(response => response.json())
  .then(data => {
    // tu môžete spracovať získané dáta
    console.log(data);
  })
  .catch(error => {
    // tu môžete spracovať chyby
    console.error(error);
  });
  