function updateWOD() {
    // ... (This function remains unchanged from the previous response)
}

function loadWOD() {
    document.getElementById('warmup-name').textContent = localStorage.getItem('warmup') || 'Not set';
    document.getElementById('preworkout-name').textContent = localStorage.getItem('preworkout') || 'Not set';
    document.getElementById('wod-name').textContent = localStorage.getItem('wod') || 'Not set';
    document.getElementById('timer-type').textContent = localStorage.getItem('timerType') || 'Not set';
}

function addUser() {
    // ... (This function remains unchanged from the previous response)
}

function loadUsers() {
    // ... (This function remains unchanged from the previous response)
}

function updateAnnouncements(message) {
    localStorage.setItem('announcement', message.trim());
    loadAnnouncements();
}


function loadAnnouncements() {
    const announcement = localStorage.getItem('announcement') || "No announcements at this time.";
    document.getElementById('announcement-content').textContent = announcement;
}


// Added this to run load functions after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadWOD();
    loadUsers();
    loadAnnouncements();
});


function saveScore(event) {
    // ... (This function remains unchanged from the previous response)
}