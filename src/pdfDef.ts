import { ImageDefinition, TDocumentDefinitions } from 'pdfmake/interfaces';

const imageList: Record<string, ImageDefinition> = {
  logo: {
    url: 'https://picsum.photos/640/480',
  },
};
export const pdfDef: TDocumentDefinitions = {
  content: [{text: "Hello"},{
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 0,
        x2: 514,
        y2: 0,
        lineWidth: 1,
        lineColor: '#000000',
      },
    ],
  },{text: "Hello"},],
  images: imageList,
  defaultStyle: {
    font: 'Helvetica',
  }
};
