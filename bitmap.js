'use strict';

const fs = require('fs'),
  path = require('path');
// change here to generate qr with given id
const id = 121;

const width = 450,
  height = 450,
  bpp = 24; // Bits per pixel
const marco = 75;
const rWidth = width + 2*marco, rHeight = height + 2*marco;

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error.message);
});

(async function () {
  // https://en.wikipedia.org/wiki/BMP_file_format
  // Each row in the Pixel array is padded to a multiple of 4 bytes in size
  let rowSize = Math.floor((bpp * rWidth + 31) / 32) * 4;
  let pixelArraySize = rowSize * rHeight;

  let BMP = new DataView(new ArrayBuffer(54));

  // Bitmap file header
  'BM'.split('').map((v, i) => {
    BMP.setUint8(i, v.charCodeAt(0));
  });
  BMP.setUint32(2, pixelArraySize + 54, true); // File size (bytes): pixel array size + headers (=54 bytes)
  BMP.setUint16(6, 0, true); // Reserved
  BMP.setUint16(8, 0, true); // Reserved
  BMP.setUint32(10, 54, true); // Pixel array offset (=54 bytes)

  // DIB header, Windows BITMAPINFOHEADER
  BMP.setUint32(14, 40, true); // DIB header size (=40 bytes)
  BMP.setUint32(18, rWidth, true); // Width in pixels
  BMP.setUint32(22, rHeight, true); // Height in pixels
  BMP.setUint16(26, 1, true); // Number of color planes (1)
  BMP.setUint16(28, bpp, true); // Bits per pixel
  BMP.setUint32(30, 0, true); // No compression (0)
  BMP.setUint32(34, pixelArraySize, true); // Size of the raw bitmap data (bytes) including rows padding
  BMP.setUint32(38, 2835, true); // Horizontal resolution (pixels per metre, signed integer), 2835 dpm = 72 dpi
  BMP.setUint32(42, 2835, true); // Vertical resolution, 2835 dpm = 72 dpi
  BMP.setUint32(46, 0, true); // Number of colors in the palette (keep 0 for default 2^bpp)
  BMP.setUint32(50, 0, true); // Important colors (0 = every color is important)

  let bmpData = new DataView(new ArrayBuffer(pixelArraySize));

  // Offset of a pixel value
  let i = 0;
  let byesPerPixel = (bpp / 8) | 0;

  const getCuadrante = (w,h) => {
    if(h<height/3){
      if(w<width/3){
        return 0
      }else if(w<width*2/3){
        return 1
      }else{
        return 2
      }
    }else if(h<height*2/3){
      if(w<width/3){
        return 3
      }else if(w<width*2/3){
        return 4
      }else{
        return 5
      }
    }else{
      if(w<width/3){
        return 6
      }else if(w<width*2/3){
        return 7
      }else{
        return 8
      }
    }
  }
  // From bottom row to the top
   for (let y = rHeight; y >= 0; y--) {
     for (let x = 0; x < rWidth; x++) {
      if(x<marco || y<marco || x>marco+width || y>marco+height){
        bmpData.setUint8(i, 0); // B
        bmpData.setUint8(i + 1, 0); // G
        bmpData.setUint8(i + 2, 255); // R
      } else if((id & 1 << getCuadrante(x-marco,y-marco)) != 0){
       bmpData.setUint8(i, 0); // B
       bmpData.setUint8(i + 1, 0); // G
       bmpData.setUint8(i + 2, 0); // R
      } else {
      bmpData.setUint8(i, 255); // B
      bmpData.setUint8(i + 1, 255); // G
      bmpData.setUint8(i + 2, 255); // R
     }
     i += byesPerPixel;
   }
   i = rowSize * (rHeight - y);
  }

  let buffer = Buffer.concat([
    Buffer.from(BMP.buffer),
    Buffer.from(bmpData.buffer),
  ]);

  let outFile = __dirname + '/qrs/' + id +  '.png';
  fs.writeFileSync(outFile, buffer);
})();
