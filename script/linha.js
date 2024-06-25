document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const progressBar = document.getElementById('progress-bar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressHeight = (scrollPosition / totalHeight) * 100;
    progressBar.style.width = progressHeight + '%';
});
