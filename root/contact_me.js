let email = document.querySelector("#email_button");

// add an event listener on the target element
email.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
    console.log(event);

    let subject = document.querySelector("#subject");
    console.log(subject.value);

    let message = document.querySelector("#message");
    console.log(message.value);

    // https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript
    // window.open('mailto:kaleb2@pdx.edu?subject=Hello!&body=Sup Kaleb,');
}
