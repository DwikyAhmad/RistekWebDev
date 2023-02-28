document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(myForm);

      fetch('http://localhost:3000/data', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(data => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <h2>${data[data.length - 1].name}</h2>
          `;
          document.body.appendChild(card);
        });
    });
  });