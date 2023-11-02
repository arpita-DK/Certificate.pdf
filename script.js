const PDFDocument = require("pdfkit");
const fs = require("fs");

const pageWidthMM = 388;
const pageHeightMM = 289;
const mmToPoints = 2.83465;
const cmToPoints = 28.3465; // 1 mm = 2.83465 points
const pageWidthPoints = pageWidthMM * mmToPoints;
const pageHeightPoints = pageHeightMM * mmToPoints;

const doc = new PDFDocument({
  size: [pageWidthPoints, pageHeightPoints],
});

const outputStream = fs.createWriteStream("certificate.pdf");
doc.pipe(outputStream);

const backgroundImage = "./assets/CertificateImage.jpeg";
const signatureImage = "./assets/signature.png";
const ASUCareerCatalyst = "./assets/ASUCareerCatalyst.png";
const burstGold = "./assets/burstGold.png";

const centerX = pageWidthPoints / 2;

doc.image(backgroundImage, 0, 0, {
  width: pageWidthPoints,
  height: pageHeightPoints,
});

// ASUCareerCatalyst image at the start
doc.image(ASUCareerCatalyst, centerX - (12.7 * cmToPoints) / 2, 85, {
  width: 12.7 * cmToPoints,
  height: 2.64 * cmToPoints,
  align: "center",
});
doc.moveDown(10);

doc.rect(315, 208, 470, 65).fill("#ffc627");

// Text in the middle
doc
  .font("./font/Roboto-Bold.ttf")
  .fontSize(55)
  .fillColor("black")
  .text("Stephanie Powell", { align: "center", characterSpacing: 1.5 });
doc.moveDown(0.5);

doc
  .font("./font/Roboto-Regular.ttf")
  .fontSize(24)
  .fillColor("#747474")
  .text("has earned satisfactory scores", { align: "center" });
doc.text("and completed the certificate:", { align: "center" });
doc.moveDown(1);

doc
  .font("./font/Roboto-Bold.ttf")
  .fontSize(30)
  .fillColor("black")
  .text("W. P. Carey Certificate in Foundations of Supply Chain", {
    align: "center",
    characterSpacing: 1,
  });
doc.text("Management - Fall 2023", { align: "center" });
doc.moveDown(1);

doc
  .font("./font/Roboto-Regular.ttf")
  .fontSize(21)
  .fillColor("#747474")
  .text("September 27, 2023", { align: "center" });

doc.image(signatureImage, centerX - 180, doc.y + 25, {
  width: 14.36 * cmToPoints,
  height: 3.25 * cmToPoints,
  align: "center",
});
doc.moveDown(5);

// Line after the signatureImage
doc
  .save()
  .moveTo((pageWidthPoints - 13.55 * cmToPoints) / 2, doc.y - 5) // Move to the center of the page
  .lineTo((pageWidthPoints + 13.55 * cmToPoints) / 2, doc.y - 5)
  .lineWidth(0.07 * cmToPoints)
  .stroke("#ffc627")
  .restore();
// "signature information"
doc
  .font("./font/Roboto-Regular.ttf")
  .fontSize(20)
  .fillColor("black")
  .text("Darcy Richardson", { align: "center" });
doc.moveDown(0.5);

doc
  .font("./font/Roboto-Italic.ttf")
  .fontSize(16)
  .fillColor("#747474")
  .text("Senior Director, CareerCatalyst Implementation", { align: "center" });
doc.text("Arizona State University", { align: "center" });

// burstGold image at the right corner
doc.image(burstGold, pageWidthPoints - 190, doc.y - 100, {
  width: 4.94 * cmToPoints,
  height: 4.94 * cmToPoints,
  align: "center",
});

doc.end();

console.log("Certificate generated successfully.");
