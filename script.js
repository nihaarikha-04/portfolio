smartech('dispatch', 'page browse', {});

document.body.style.overflow = 'hidden';

document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter' && !document.getElementById('gate').classList.contains('hidden')) {
        unlockPortfolio();
    }
});

function unlockPortfolio() {
    var name = document.getElementById('g-name').value.trim();
    var email = document.getElementById('g-email').value.trim();
    var mobile = document.getElementById('g-mobile').value.trim();
    var errEl = document.getElementById('g-error');
    var btn = document.getElementById('g-button');
    
    var btn = document.getElementById('g-button');

    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var mobileValid = /^[\d\s\+\-]{7,15}$/.test(mobile);

    if(!name || !emailValid || !mobileValid) {
        errEl.style.display = 'block';
        return;
    }

    errEl.style.display = 'none';
    btn.textContent = 'Unlocking...';
    btn.classList.add('loading');

    smartech('contact', '1', {
        'pk^email': email,
        'mobile': mobile,
        'Name': name,
    });

    setTimeout(function() {
        document.getElementById('gate').classList.add('hidden');
        document.body.style.overflow = '';
    }, 700);
}
