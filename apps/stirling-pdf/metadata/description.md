<p align="center"><img src="https://raw.githubusercontent.com/Frooodle/Stirling-PDF/main/docs/stirling.png" width="80" ><br><h1 align="center">Stirling-PDF</h1>
</p>

This is a powerful locally hosted web based PDF manipulation tool using docker that allows you to perform various operations on PDF files, such as splitting merging, converting, reorganizing, adding images, rotating, compressing, and more. This locally hosted web application started as a 100% ChatGPT-made application and has evolved to include a wide range of features to handle all your PDF needs.

Stirling PDF makes no outbound calls for any record keeping or tracking.

All files and PDFs are either purely client side, in server memory only during the execution of the task or within a temporay file only for execution of the task.
Any file which has been downloaded by the user will have already been deleted from the server by that time.

Feel free to request any features or bug fixes either in github issues or our [Discord](https://discord.gg/Cn8pWhQRxZ)

## Features
- Full interactive GUI for merging/splitting/rotating/moving PDFs and their pages.
- Split PDFs into multiple files at specified page numbers or extract all pages as individual files.
- Merge multiple PDFs together into a single resultant file
- Convert PDFs to and from images
- Reorganize PDF pages into different orders.
- Add/Generate signatures
- Format PDFs into a multi-paged page
- Scale page contents size by set % 
- Adjust Contrast
- Crop PDF
- Auto Split PDF (With physically scanned page dividers)
- Flatten PDFs
- Repair PDFs
- Detect and remove blank pages
- Compare 2 PDFs and show differences in text
- Add images to PDFs
- Rotating PDFs in 90 degree increments.
- Compressing PDFs to decrease their filesize. (Using OCRMyPDF)
- Add and remove passwords
- Set PDF Permissions
- Add watermark(s)
- Convert Any common file to PDF (using LibreOffice)
- Convert PDF to Word/Powerpoint/Others (using LibreOffice)
- Convert HTML to PDF
- URL to PDF
- Extract images from PDF
- Extract images from Scans
- Add page numbers
- Auto rename file by detecting PDF header text
- OCR on PDF (Using OCRMyPDF)
- PDF/A conversion (Using OCRMyPDF)
- Edit metadata
- Dark mode support.
- Custom download options (see [here](https://github.com/Frooodle/Stirling-PDF/blob/main/images/settings.png) for example)
- Parallel file processing and downloads
- API for integration with external scripts 

For a overview of the tasks and the technology each uses please view [groups.md](https://github.com/Frooodle/Stirling-PDF/blob/main/Groups.md)
Hosted instance/demo of the app can be seen [here](https://pdf.adminforge.de/) hosted by the team at adminforge.de

## Technologies used
- Spring Boot + Thymeleaf
- PDFBox
- IText7
- [LibreOffice](https://www.libreoffice.org/discover/libreoffice/) for advanced conversions
- [OcrMyPdf](https://github.com/ocrmypdf/OCRmyPDF)
- HTML, CSS, JavaScript
- Docker
- PDF.js
- PDF-LIB.js

