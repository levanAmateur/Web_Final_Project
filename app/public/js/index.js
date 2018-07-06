var loginForm = document.getElementById('login-form');


if(window.addEventListener) {
    loginForm.addEventListener('submit', loginSubmit, true);
}

function loginSubmit(e) {
    fld = this.elements['username'];
    if ( fld.value.length < 8 ) {
        alert( 'Invalid user name' );
        fld.focus();
        e.preventDefault();
    }
}