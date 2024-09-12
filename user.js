document.addEventListener('DOMContentLoaded', function() {
    const poll = JSON.parse(localStorage.getItem('poll'));
    if (poll) {
        displayPoll(poll.question, poll.options);
    } else {
        document.getElementById('pollDisplay').innerHTML = 'No active polls available.';
    }
});

function displayPoll(question, options) {
    const pollDisplay = document.getElementById('pollDisplay');
    pollDisplay.innerHTML = `<h2>${question}</h2>`;
    options.forEach((option, index) => {
        pollDisplay.innerHTML += `
            <div>
                <input type="radio" name="pollOption" id="option${index}" value="${index}">
                <label for="option${index}">${option.text}</label>
            </div>
        `;
    });
    pollDisplay.innerHTML += `<button id="voteButton">Vote</button>`;

    document.getElementById('voteButton').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="pollOption"]:checked');
        if (selectedOption) {
            const index = selectedOption.value;
            const poll = JSON.parse(localStorage.getItem('poll'));
            poll.options[index].votes += 1;
            localStorage.setItem('poll', JSON.stringify(poll));
            alert('Vote submitted!');
        } else {
            alert('Please select an option to vote.');
        }
    });
}
