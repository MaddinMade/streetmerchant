import {Store} from "./store";

export const WOG: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'wog (world of games)',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#cart-div > div.padding-8.margin-b-6.float-right.position-relative.width-264.border-r.border-b.border-l.round-b.shadow-b > div > span',
      text: ['nicht bestellbar'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.wog.ch/index.cfm/details/product/107286-PlayStation-5',
    },
  ]
}
