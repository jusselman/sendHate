// Pages //
const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const podcastsPage = document.getElementById('podcasts');
const mainPage = document.getElementById('main');
const mainBack = document.getElementById('mainBack');
const vidEl = document.getElementById('video');
const logoFlip = document.getElementById('logoFlip');
const togAbout = document.getElementById('toggleABout');

// Funcionality to switch among pages //
function toggleAbout() {
    aboutPage.classList.toggle('about-view');
    mainPage.classList.toggle('main-rotate-left');
}

// function touchAbout() {
//     aboutPage.classList.toggle('about-view');

// }

function toggleContact() {
    contactPage.classList.toggle('contact-view');
    mainPage.classList.toggle('main-contact');
    mainPage.classList.toggle('main-rotate-right');
}

function togglePodcasts() {
    podcastsPage.classList.toggle('podcasts-view')
}

function toggleFlip() {
    mainPage.classList.toggle('main-view');
    mainBack.classList.toggle('main--back-view');
    vidEl.classList.toggle('video-view');
    logoFlip.classList.toggle('video-view');
}

// Event Listeners //
// togAbout.addEventListener('touchstart', () => {
//     aboutPage.classList.toggle('about-view');
//     console.log('tapped');
// });

// var UA = navigator.userAgent;
// iOS = (UA.match(/iPad/i) || UA.match(/iPhone/i) || UA.match(/Macintosh/i));

// const toggleAbout = document.getElementById('toggleAbout');
// const toggleContact = document.getElementById('toggleContact');
// const togglePodcast = document.getElementById('togglePodcast');
// const about = document.getElementById('about');
// const contact = document.getElementById('contact');

// function checkUser() {
//     if (iOS) {
//         toggleAbout.addEventListener('touchstart', () => {
//             about.classList.toggle('about-view');
//         });
//         toggleContact.addEventListener('touchstart', () => {
//             contact.classList.toggle('contact-view');
//         });

//     } else {
//         toggleAbout.addEventListener('click', () => {
//             about.classList.toggle('about-view');
//         });
//         toggleContact.addEventListener('click', () => {
//             contact.classList.toggle('contact-view');
//         });
//     }
// }

// checkUser();

// console.log(UA);
// console.log(iOS);

