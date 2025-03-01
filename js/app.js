particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

async function copyText(e) {
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link);
    try {
        await navigator.clipboard.writeText(link);
        alert("texto copiado: " + link);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));