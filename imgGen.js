var bmp = new Bitmap(w, h);
bmp.pixel[x][y] = [r, g, b, a];
bmp.subsample(n);
var url = bmp.dataURL();
