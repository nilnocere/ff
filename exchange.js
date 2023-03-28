const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { fromCurrency, toCurrency } = JSON.parse(event.body);
  const apiKey = "TdigosxNUhJagX94LpH2I5USQUrAgqw1ZIemCu4n";
  const apiUrl = `https://api.fixedfloat.com/v1/orders?from=${fromCurrency}&to=${toCurrency}&amount=1&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: "Internal Server Error" };
  }
};