document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingDisplay = document.createElement('p');
    ratingDisplay.textContent = 'Your rating: ';
    document.querySelector('.profile-container').appendChild(ratingDisplay);

    // Load saved rating from localStorage
    const savedRating = localStorage.getItem('bunleapRating');
    if (savedRating) {
        setRating(savedRating);
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            localStorage.setItem('bunleapRating', rating);
            setRating(rating);
        });
    });

    function setRating(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
        ratingDisplay.textContent = `Your rating: ${rating} star(s)`;
    }
});