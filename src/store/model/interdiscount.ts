import {Store} from "./store";

export const Interdiscount: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'interdiscount',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#TOP_CONTENT_ANCHOR > div > div > div._3UBePl._11Oj6F > div:nth-child(1) > div:nth-child(3) > div > div > div > div > p',
      text: ['keine konsole reservieren'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.interdiscount.ch/de/cms/sony-playstation',
    },
  ]
}
