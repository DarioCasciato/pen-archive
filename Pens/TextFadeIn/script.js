const fadeInText = document.querySelector('.text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px 0px 0px'
});

observer.observe(fadeInText);