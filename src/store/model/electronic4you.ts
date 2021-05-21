import {Store} from "./store";

export const Electronic4you: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'electronic4you',
  currency: '€',
  labels: {
    outOfStock: {
      container: '.zblock-sony_ps5_sold_out',
      text: ['ausverkauft'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.electronic4you.at/ps5',
    },
  ]
}
