const puppeteer = require("puppeteer"); // eslint-disable-line
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:5001", { waitUntil: "networkidle0" }); // Adjust the URL and port if necessary
  await page.pdf({
    path: path.join(__dirname, "resume.pdf"),
    format: "A4",
    printBackground: true,
    scale: 0.75, // Adjust the scale as necessary to fit everything on one page
  });

  await browser.close();
  console.info("PDF generated successfully.");
})();
