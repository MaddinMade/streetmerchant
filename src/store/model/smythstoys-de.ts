import {Store} from './store';

export const SmythsToysDE: Store = {
  currency: '€',
  disableAdBlocker: true,
  labels: {
    inStock: {
      container: '#addToCartButton',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.price_tag',
      euroFormat: false,
    },
    outOfStock: {
      container: '#addToCartButton[disabled="disabled"]',
      text: ['In den Warenkorb'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.smythstoys.com/de/de-de/gaming/playstation/playstation-5-konsole-und-zubeh%c3%b6r/sony-playstation-5-konsole/p/195650',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.smythstoys.com/de/de-de/gaming/playstation/playstation-5-konsole-und-zubeh%c3%b6r/sony-playstation-5-konsole-digital-edition/p/195651',
    },
  ],
  name: 'smythstoys-de',
  waitUntil: 'domcontentloaded',
};
