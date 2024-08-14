import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import { TFontDictionary } from 'pdfmake/interfaces';
import { pdfDef } from './pdfDef';
import * as fs from 'fs';

const fonts: TFontDictionary = {
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique',
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique',
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic',
  },
  Symbol: {
    normal: 'Symbol',
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats',
  },
};

@Injectable()
export class AppService {
  getHello(): string {
    this.generatePdf();
    return 'Hello World!';
  }
  generatePdf = () => {
    const pdfMake = new PdfPrinter(fonts);
    const pdfDoc = pdfMake.createPdfKitDocument(pdfDef);
    pdfDoc.pipe(fs.createWriteStream('document.pdf'));
    pdfDoc.end();
  };
}
