document.getElementById('toggle-theme-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('math-exercises-btn').addEventListener('click', function() {
    window.location.href = 'math-exercises.html'; // Ensure this page exists
}); 