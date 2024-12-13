const Nightmare = require("nightmare"); // Import Nightmare as a class
const sgMail = require("@sendgrid/mail"); // Import SendGrid as a class
const nightmare = new Nightmare({ show: true }); // Create an instance of Nightmare with options

const args = process.argv.slice(2); // Get command line arguments

const url = args[0]; // Get the URL from the command line arguments

async function checkPrice() {
  try {
    const priceString = await nightmare
      .goto(url)
      .wait(".a-price-whole")
      .evaluate(() => document.getElementsByClassName("a-price-whole").innerText)
      .end(); // Close Nightmare instance after completion

    const price = parseFloat(priceString); // Convert the price string to a number

    if (price < 100) {
      sendEmail('Price is low', `The price on ${url} under $100`); // Call the sendEmail function
    }
  } catch (error) {
    console.error("Error retrieving product title:", error);
  }
}

function sendEmail(title, message) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "K4Jp8@example.com", // Replace with your email address
    from: "K4Jp8@example.com", // Replace with your email address
    subject: title,
    text: message,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    })
    .finally(() => {
      process.exit();
    });
}
    

checkPrice(); // Call the function
