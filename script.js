//const contenedorQR = document.getElementById('contenedorQr');
//const QR = new QRCode(contenedorQR);
//new QRCode(contenedorQR, 'https://www..com')

document.getElementById('pdfButton').addEventListener('click', function() {
    // URL del archivo PDF
    var archivoPDF = <img src="https://picsum.photos/200/300" />;
  
    // Generar el código QR
    var codigoQR = new QRCode(document.getElementById("codigoQR"), {
      text: archivoPDF,
      width: 128,
      height: 128
    });
  
    // Abrir el archivo PDF al hacer clic en el código QR
    document.getElementById("codigoQR").addEventListener('click', function() {
      window.location.href = archivoPDF;
    });
  });