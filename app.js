const app = new Vue({
  el: "#app",
  data() {
    return {
      fromCurrency: "BTC",
      toCurrency: "ETH",
      currencies: ["BTC", "ETH", "USDT", "XMR", "SHIB", "DAI", "BNB", "BUSD", "BTC Lightning", "ADA", "LINK", "DOT", "DOGE", "MATIC", "SOL", "XRP", "TRX", "USDC"],
    };
  },
  methods: {
    async exchangeCrypto() {
      const response = await fetch("/.netlify/functions/exchange", {
        method: "POST",
        body: JSON.stringify({ fromCurrency: this.fromCurrency, toCurrency: this.toCurrency }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log(result);
    },
  },
});