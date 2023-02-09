import {Store} from "./store";

export const GameShop: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'gameshop',
  currency: '€',
  labels: {
    outOfStock: [{
      container: '#wrapper > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > span',
      text: ['warteliste voll'],
    },
      {
        container: 'img[src="webpics/ausverkauft_v3.png"]',
        text: [''],
      },
    ],
    inStock:
      {
        container: 'img[src="webpics/warenkorb_button_v3.png"]',
        text: [''],
      },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.gameshop.at/PlayStation_5_Konsole_PS5__12730.html',
    },
  ]
}
