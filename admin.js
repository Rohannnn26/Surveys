document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('pollQuestion').value;
    const options = [];
    document.querySelectorAll('#optionsContainer input').forEach(input => {
        options.push({ text: input.value, votes: 0 });
    });
    localStorage.setItem('poll', JSON.stringify({ question, options }));
    alert('Poll created successfully!');
});
