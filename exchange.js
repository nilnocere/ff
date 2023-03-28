const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { fromCurrency, toCurrency, toAddress } = JSON.parse(event.body);
  const apiKey = "TdigosxNUhJagX94LpH2I5USQUrAgqw1ZIemCu4n";
  const apiUrl = `https://api.fixedfloat.com/v2/orders?from=${fromCurrency}&to=${toCurrency}&amount=1&address=${toAddress}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { method: "POST" });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: "Internal Server Error" };
  }
};