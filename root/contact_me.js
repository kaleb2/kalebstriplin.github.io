let email = document.querySelector("#email_button");

// add an event listener on the target element
email.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
    console.log(event);
    window.open('mailto:kaleb2@pdx.edu?subject=Hello!&body=Sup Kaleb,');
}
