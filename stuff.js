const express = require("express");
const request = require("request");
const app = express();

app.use((req, res) => {
  const url = req.url.slice(1);
  if (!url) return res.send("No URL provided");

  request(
    {
      url: url,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    }
  )
    .on("error", () => res.send("Error loading site"))
    .pipe(res);
});

app.listen(3000, () => console.log("Proxy running"));
