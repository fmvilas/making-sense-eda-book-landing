const request = require("request");

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;

module.exports.handler = (event, context, callback) => {
  const formData = JSON.parse(event.body);
  let errorMessage = null;

  if (!formData) {
    errorMessage = "No form data supplied";
    console.log(errorMessage);
    callback(errorMessage);
  }

  const email = formData.email;

  if (!email) {
    errorMessage = "No EMAIL supplied";
    console.log(errorMessage);
    callback(errorMessage);
  }

  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {}
  };

  const subscriber = JSON.stringify(data);
  console.log("Sending data to mailchimp", subscriber);

  request({
    method: "POST",
    url: `https://us12.api.mailchimp.com/3.0/lists/1082538/members`,
    body: subscriber,
    headers: {
      "Authorization": `apikey ${mailChimpAPI}`,
      "Content-Type": "application/json"
    }
  }, (error, response, body) => {
    if (error) {
      callback(error, null)
    }
    const bodyObj = JSON.parse(body);

    console.log("Mailchimp body: " + JSON.stringify(bodyObj));
    console.log("Status Code: " + response.statusCode);

    if (response.statusCode < 300 || (bodyObj.status === 400 && bodyObj.title === "Member Exists")) {
      console.log("Added to list in Mailchimp subscriber list");
      callback(null, {
        statusCode: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify({
          status: "saved email"
        })
      })
    } else {
      console.log("Error from mailchimp", bodyObj.detail);
      callback(bodyObj.detail, null);
    }

  });

}