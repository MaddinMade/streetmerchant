import {Store} from "./store";

export const Mueller: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'mueller',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#page > main > div > div.mu-column-layout__content > div > div:nth-child(2) > div > div > strong',
      text: ['ausverkauft'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mueller.de/multi-media/playstation-5/',
    },
  ]
}
