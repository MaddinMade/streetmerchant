import {Store} from "./store";

export const Conrad: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'conrad',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#text-2edced87c2 > p:nth-child(1) > span',
      text: ['leider ausverkauft'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.conrad.de/de/aktionen/product-promotions/sony-ps5.html',
    },
  ]


}
