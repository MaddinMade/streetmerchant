import {Store} from "./store";

export const MyToys: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'mytoys',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#top > div.oos.js-pdp > div.grid-gap.prod-info > div > div.prod-info__box > div.grid-gap__m.prod-info__buttons > div > div.prod-info__add-to-cart--cropped.js-addtocart > button > span',
      text: ['nicht verfügbar'],
    },
    inStock: {
      container: '#top > div.pdp.js-pdp > div.grid-gap.prod-info > div > div.prod-info__box > div.grid-gap__m.prod-info__buttons > div > div.prod-info__add-to-cart--cropped.js-addtocart > button',
      text: ['warenkorb', 'bestellen'],
    }
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mytoys.de/sony-ps5-playstation-5-konsole-inkl-laufwerk-17235694.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.mytoys.de/sony-ps5-playstation-5-konsole-digital-version-17235665.html',
    },
  ]


}
