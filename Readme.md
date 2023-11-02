# install Dependencies:

node.js , express
Create a New Project:

# proper glance of https://pdfkit.org/ library before start
# texts styling , images , examples


Install PDFKit:

# Install the PDFKit library - npm install pdfkit

Set Up Your Fonts:

Download the required fonts from google ( Roboto-Regular.ttf, Roboto-Bold.ttf, Roboto-Italic.ttf) extract the necessary font needed from the zip file in a font directory of the project

# Write JavaScript Code:

in the script.js
Include PDFKit and File System Module:

- const PDFDocument = require('pdfkit');
- const fs = require('fs');

# Add Assets:

provide path to all assets and store it
Set Page Dimensions:

# Define the page dimensions and convert them from millimeters to points.

- 1cm= 28.3465pt
  Set up the PDF document using PDFKit.
  Create a PDF Document:

Create a PDF document and pipe it to an output stream for writing to a file

- const doc = new PDFDocument()
  Add Background Image:

Add the certificate background image to the PDF.
set the width and height of the background image as the page size

# ASUCareercatalyst image : doc.image()

Position the ASUCareerCatalyst image at the top of the certificate.
convert the required size of image and align

- {align :center}

# Background Rectangle for Text: doc.rect()

- doc.rect()
  background rectangle for the name "Stephanie Powell" with a background color of #ffc627.

# adding text with : doc.text()

Add "Stephanie Powell" in a bold font, with custom character spacing, and centered.continuing the same with other text providing required style
Add Text for Certificate Details:
Add the certificate details ( program name, year 2023) below the name. center it

# To keep the proper spacing between each content use methods :

- modeUp()
  -moveDown()

# Add Signature Image:

# Draw a line to hold the signature

to positin the line I used

- moveTO()
- lineTo()

Add the signatory information ( name and title) below the signature.
Position BurstGold Image:
Position the burstGold image at the right corner of the signatory information.

to position the image at corner :
pagewidth - required value
page height -required value 
{align:center}

finished the document
# doc.end()

Generate and Save PDF:
Save the PDF document and end it.

# Run the Script: node filename.js

Run the script.js using Node.js.

# getting the generated script -express js

require the express
define the port

# iniate the get request with the endpoint '\download'

run the server.js
Review the Generated Certificate:
