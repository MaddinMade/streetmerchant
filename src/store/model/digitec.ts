import {Store} from "./store";

export const Digitec: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'digitec',
  currency: '€',
  labels: {
    outOfStock: [
      {
      container: '#pageContent > div > div.ZZhk.ZZZ3 > div > div.ZZhm > div > div.ZZo8.ZZZ1',
      text: ['nicht lieferbar'],
      },
      {
        container: 'button[id="addToCartButton"][disabled]',
        text: ['warenkorb'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.digitec.ch/de/s1/product/sony-playstation-5-de-fr-it-en-spielkonsole-12664145',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.digitec.ch/de/s1/product/sony-playstation-5-digital-edition-de-fr-it-en-spielkonsole-13329224',
    },
  ]
}
