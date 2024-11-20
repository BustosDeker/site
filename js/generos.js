function App() {
    this.tracks = {
        aventura: document.querySelector('#track-aventura'),
        comedia: document.querySelector('#track-comedia'),
        isekai: document.querySelector('#track-isekai'),
        romance: document.querySelector('#track-romance')
    };
    this.slickWidths = {
        aventura: this.tracks.aventura.querySelector('.slick').offsetWidth,
        comedia: this.tracks.comedia.querySelector('.slick').offsetWidth,
        isekai: this.tracks.isekai.querySelector('.slick').offsetWidth,
        romance: this.tracks.romance.querySelector('.slick').offsetWidth
    };
    this.trackWidths = {
        aventura: this.tracks.aventura.scrollWidth,
        comedia: this.tracks.comedia.scrollWidth,
        isekai: this.tracks.isekai.scrollWidth,
        romance: this.tracks.romance.scrollWidth
    };
    this.listWidths = {
        aventura: this.tracks.aventura.parentNode.offsetWidth,
        comedia: this.tracks.comedia.parentNode.offsetWidth,
        isekai: this.tracks.isekai.parentNode.offsetWidth,
        romance: this.tracks.romance.parentNode.offsetWidth
    };
    this.updateButtonVisibility('aventura');
    this.updateButtonVisibility('comedia');
    this.updateButtonVisibility('isekai');
    this.updateButtonVisibility('romance');
}

App.prototype.processButton = function(event, category) {
    const button = event.currentTarget.dataset.button;
    const track = this.tracks[category];
    let leftPosition = track.style.left ? parseFloat(track.style.left) : 0;

    if (button === 'prev' && leftPosition < 0) {
        leftPosition += this.slickWidths[category];
    } else if (button === 'next' && leftPosition > -(this.trackWidths[category] - this.listWidths[category])) {
        leftPosition -= this.slickWidths[category];
    }

    track.style.left = `${leftPosition}px`;
    this.updateButtonVisibility(category);
};

App.prototype.updateButtonVisibility = function(category) {
    const leftPosition = parseFloat(this.tracks[category].style.left) || 0;
    document.querySelector(`#slick-list-${category} .slick-prev`).style.display = leftPosition >= 0 ? 'none' : 'block';
    document.querySelector(`#slick-list-${category} .slick-next`).style.display = leftPosition <= -(this.trackWidths[category] - this.listWidths[category]) ? 'none' : 'block';
};

window.onload = () => window.app = new App();