import {Store} from "./store";

export const Libro: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'libro',
  currency: '€',
  labels: {
    outOfStock: {
      text: ['Wenn Sie keine Konsole bestellen konnten'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.libro.at/ps5',
    },
  ]
}
