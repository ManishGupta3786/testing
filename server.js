const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const jsPDF = require('jspdf');
app.use(express.static('./uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
pdfDoc.text("My Sample PDF Document");
pdfDoc.end();

app.get('/getPdf', (req, res) => {
    console.log("hello")
    // let str = `<html>
    // <head>
    // </head>
    // <body>
    //     <table cellspacing="0" cellpadding="2">
    //         <tr>
    //             <td align="center" width="100%">
    //                 <img src="<?php echo CDN_URL ?>images/icons/final-logo.png" alt="Cityfurnish" height="45" width="160">
    //             </td>
    //         </tr>
    //         <tr>
    //             <td width="100%">
    //                 <h4>CF-172259</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td width="100%">
    //                 <h4>kunjshah</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td width="50%">
    //                 <h4>kunj@cityfurnish.com</h4>
    //             </td>
    //             <td align="right" width="50%">
    //                 <p>2/6/2024</p>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td width="33%">
    //                 <h4>Total Invoices: INR 0 </h4>
    //             </td>
    //             <td width="33%">
    //                 <h4>Total Payment: INR 0</h4>
    //             </td>
    //             <td width="34%">
    //                 <h4>Balance: INR 0</h4>
    //             </td>
    //         </tr>
    //         <!--<br>
    //       {DATE_RANGE}
    //       <br>-->

    //         <tr>
    //             <td width="100%">
    //                 <h4>Invoices</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <th width="18%" style="border:1px solid #000;">Invoice Number</th>
    //             <th width="18%" style="border:1px solid #000;">Invoice Date</th>
    //             <th width="15%" style="border:1px solid #000;">Invoice Amount</th>
    //             <th width="29%" style="border:1px solid #000;">Balance</th>
    //             <th width="20%" style="border:1px solid #000;">Status</th>
    //         </tr>


    //         <tr>
    //             <td width="100%">
    //                 <h4>Payments</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <th width="18%" style="border:1px solid #000;">Invoice Number</th>
    //             <th width="18%" style="border:1px solid #000;">Invoice Date</th>
    //             <th width="15%" style="border:1px solid #000;">Amount Paid</th>
    //             <th width="29%" style="border:1px solid #000;">Payment Date</th>
    //             <th width="20%" style="border:1px solid #000;">Payment Number</th>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-12-11</td>
    //             <td style="border:1px solid #000;">1400</td>
    //             <td style="border:1px solid #000;">12/11/2023, 11:39:23 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000074019</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-12-11</td>
    //             <td style="border:1px solid #000;">41</td>
    //             <td style="border:1px solid #000;">12/11/2023, 11:39:28 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000074020</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-11-30</td>
    //             <td style="border:1px solid #000;">10</td>
    //             <td style="border:1px solid #000;">12/1/2023, 5:57:56 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000072843</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-10-30</td>
    //             <td style="border:1px solid #000;">499</td>
    //             <td style="border:1px solid #000;">10/30/2023, 12:48:12 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000070005</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-10-30</td>
    //             <td style="border:1px solid #000;">63</td>
    //             <td style="border:1px solid #000;">10/30/2023, 12:48:15 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000070006</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-10-26</td>
    //             <td style="border:1px solid #000;">5</td>
    //             <td style="border:1px solid #000;">10/26/2023, 12:36:42 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000069708</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">2023-10-26</td>
    //             <td style="border:1px solid #000;">198</td>
    //             <td style="border:1px solid #000;">10/26/2023, 4:36:07 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000069640</td>
    //         </tr>

    //         <tr>
    //             <td width="100%">
    //                 <h4>Credit Notes</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <th width="18%" style="border:1px solid #000;">Applied Invoice</th>
    //             <th width="18%" style="border:1px solid #000;">Credit Note Number</th>
    //             <th width="15%" style="border:1px solid #000;">Amount</th>
    //             <th width="29%" style="border:1px solid #000;">Credit Note Date</th>
    //             <th width="20%" style="border:1px solid #000;">Status</th>
    //         </tr>

    //         <tr>
    //             <td width="100%">
    //                 <h4>Retainer Invoice</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <th width="18%" style="border:1px solid #000;">Invoice ID</th>
    //             <th width="18%" style="border:1px solid #000;">Invoice Date</th>
    //             <th width="15%" style="border:1px solid #000;">Amount Paid</th>
    //             <th width="29%" style="border:1px solid #000;">Payment Date</th>
    //             <th width="20%" style="border:1px solid #000;">Payment Number</th>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">246710001305391209</td>
    //             <td style="border:1px solid #000;">10/30/2023</td>
    //             <td style="border:1px solid #000;">998</td>
    //             <td style="border:1px solid #000;">10/30/2023, 11:00:23 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000070000</td>
    //         </tr>
    //         <tr>
    //             <td width="100%">
    //                 <h4>Refunds</h4>
    //             </td>
    //         </tr>
    //         <tr>
    //             <th width="18%" style="border:1px solid #000;">Invoice Number</th>
    //             <th width="18%" style="border:1px solid #000;">Invoice Date</th>
    //             <th width="15%" style="border:1px solid #000;">Amount Refund</th>
    //             <th width="29%" style="border:1px solid #000;">Refund Date</th>
    //             <th width="20%" style="border:1px solid #000;">Payment Number</th>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">12/11/2023</td>
    //             <td style="border:1px solid #000;">41</td>
    //             <td style="border:1px solid #000;">12/13/2023, 11:25:40 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000074020</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">11/30/2023</td>
    //             <td style="border:1px solid #000;">10</td>
    //             <td style="border:1px solid #000;">1/4/2024, 12:54:55 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000072843</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">10/30/2023</td>
    //             <td style="border:1px solid #000;">63</td>
    //             <td style="border:1px solid #000;">10/31/2023, 12:28:17 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000070006</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">10/26/2023</td>
    //             <td style="border:1px solid #000;">5</td>
    //             <td style="border:1px solid #000;">10/31/2023, 11:56:38 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000069708</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">10/26/2023</td>
    //             <td style="border:1px solid #000;">198</td>
    //             <td style="border:1px solid #000;">10/31/2023, 11:48:59 AM</td>
    //             <td style="border:1px solid #000;">CP-KR-000069640</td>
    //         </tr>
    //         <tr>
    //             <td style="border:1px solid #000;">NA</td>
    //             <td style="border:1px solid #000;">10/30/2023</td>
    //             <td style="border:1px solid #000;">998</td>
    //             <td style="border:1px solid #000;">10/31/2023, 12:28:38 PM</td>
    //             <td style="border:1px solid #000;">CP-KR-000070000</td>
    //         </tr>
    //     </table>
    //     <br>
    //     <hr>
    //     <p style="font-size:8px;">* Computer generated document, does not require signature</p>

    // </body>
    // </html>`;
    // let pdfDoc = new PDFDocument;
    // pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, './uploads/example.pdf')));
    // pdfDoc.text(str);
    // pdfDoc.end();
    const doc = new PDFDocument();

    const htmlContent = `
    <h1>Hello PDFKit</h1>
    <p>This is a paragraph in the PDF document.</p>
    `;

    doc.text(htmlContent, {
        align: 'left',
        indent: 30,
        width: 500,
    });

    const outputStream = fs.createWriteStream(path.join(__dirname, './uploads/example.pdf'));
    doc.pipe(outputStream);
    doc.end();
    res.status(200).json({ msg: "success" })
    // res.sendFile(`./example.pdf`, { root: __dirname });
})

app.get('/createPdf', async (req, res) => {
    const htmlContent = `
    <h1>Hello PDFKit</h1>
    <p>This is a paragraph in the PDF document.</p>
    `;

    let outputPath = path.join(__dirname, './uploads/example.pdf');

    try {
        const doc = new jsPDF();
        doc.text(htmlContent, 10, 10);
        doc.save(outputPath);
        console.log('PDF generated successfully');
        res.status(200).json({ msg:'success' });
    } catch (error) {
        console.error('Error fetching URL:', error);
    }

})


app.listen(3000, () => {
    console.log("server is running at port : 3000");
})
