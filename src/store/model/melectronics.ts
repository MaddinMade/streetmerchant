import {Store} from "./store";
import {Browser, Page} from "puppeteer";

export const Melectronics: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'melectronics',
  currency: '€',
  labels: {
    outOfStock: [
      {
      container: '#test-detail-btn-order[disabled]',
      text: ['Warenkorb'],
      },
      {
        container: '.buybox--annotation-text',
        text: ['nicht verfügbar'],
      },
    ],
    inStock:
      [
        {
          container: '#test-detail-btn-order',
          text: ['Warenkorb'],
        },
        {
          container: '.buybox--annotation-text',
          text: ['Lager'],
        },
      ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      openCartAction: (async browser => {
        const page: Page = await browser.newPage();
        await page.goto('https://www.melectronics.ch/de/p/785445700000/sony-playstation-5');
        await page.waitForSelector('#test-detail-btn-order', {visible: true})
        await page.click('#test-detail-btn-order');
        if(await page.waitForSelector('#test-lightbox-btn-add', {timeout: 5000, visible: true}) != null)
          await page.click('#test-lightbox-btn-add');
        await page.goto('https://www.melectronics.ch/de/cart');
        return 'https://www.melectronics.ch/de/cart';
      }),
      series: 'sonyps5c',
      url:
        'https://www.melectronics.ch/de/p/785445700000/sony-playstation-5',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      openCartAction: (async browser => {
        const page: Page = await browser.newPage();
        await page.goto('https://www.melectronics.ch/de/p/785445800000/sony-playstation-5-digital-edition');
        await page.waitForSelector('#test-detail-btn-order', {visible: true})
        await page.click('#test-detail-btn-order');
        if(await page.waitForSelector('#test-lightbox-btn-add', {timeout: 5000, visible: true}) != null)
          await page.click('#test-lightbox-btn-add');
        await page.goto('https://www.melectronics.ch/de/cart');
        return 'https://www.melectronics.ch/de/cart';
      }),
      series: 'sonyps5de',
      url:
        'https://www.melectronics.ch/de/p/785445800000/sony-playstation-5-digital-edition',
    },
  ]
}
