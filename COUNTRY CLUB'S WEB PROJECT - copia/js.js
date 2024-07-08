document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navb_loginuser').addEventListener('click', function() {
        document.querySelector('.loginuser__square').style.display = 'flex';
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.querySelector('.loginuser__square').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('opener__downelement').addEventListener('click', function() {
    document.getElementById('menu__sections').classList.toggle('active');
    });
});
