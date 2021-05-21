import {Store} from "./store";

export const Fust: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'fust',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#anchor_JIAMCS > div > div > p',
      text: ['nicht alle bestellungen'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.fust.ch/de/sony-playstation-5-_content---1--1266--8055329.html',
    },
  ]
}
