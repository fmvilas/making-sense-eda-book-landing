const mailchimp = require("@mailchimp/mailchimp_marketing");

module.exports.handler = async (event) => {
  const formData = JSON.parse(event.body);
  let errorMessage = null;

  if (!formData) {
    errorMessage = "No form data supplied";
    console.log(errorMessage);
    return {
      statusCode: 400,
      body: errorMessage,
    }
  }

  const email = formData.payload.email;

  if (!email) {
    errorMessage = "No EMAIL supplied";
    console.log(errorMessage);
    return {
      statusCode: 400,
      body: errorMessage,
    }
  }

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us12",
  });

  try {
    console.log("Sending data to mailchimp");

    const response = await mailchimp.lists.addListMember("1082538", {
      email_address: email,
      status: "subscribed",
    });
    console.log(response);
    
    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
      },
      body: 'saved email'
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 400,
      body: e.message,
    }
  }
}