document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.getElementById('reviewForm');

    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(event) {
        // Select the textarea element
        const review = document.getElementById('review');

        // Perform validation
        if (review.value.trim() === '') {
            // Prevent form submission
            event.preventDefault();
            alert('Please write a review before submitting.');
            review.focus();
        }
    });
});