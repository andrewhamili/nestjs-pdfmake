import { ImageDefinition, TDocumentDefinitions } from 'pdfmake/interfaces';

const imageList: Record<string, ImageDefinition> = {
  logo: {
    url: 'https://picsum.photos/640/480',
  },
};
export const pdfDef: TDocumentDefinitions = {
  pageMargins: [65, 50, 65, 100],
  header: {
    columns: [
      {
        image: 'logo',
        alignment: 'right',
        fit: [100, 100],
        margin: [0, 0, 70, 0],
      },
    ],
  },
  content: [],
  images: imageList,
  defaultStyle: {
    font: 'Helvetica',
  },
  styles: {
    header: {
      fontSize: 16,
      bold: true,
      decoration: 'underline',
      alignment: 'center',
    },
    content: {
      fontSize: 10,
      alignment: 'justify',
      italics: true,
    },
    content1: {
      fontSize: 10,
      bold: true,
      alignment: 'justify',
      italics: true,
    },
  },
};
