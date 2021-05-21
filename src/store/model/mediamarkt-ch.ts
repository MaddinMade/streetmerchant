import {Store} from "./store";

export const MediamarktCh: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'mediamarkt-ch',
  currency: '€',
  waitForSelector: '#content',
  labels: {
    outOfStock: {
      container: '#content > div:nth-child(1) > div.fg-box.bpx0.bpy4.bsx5.bsy1.mpx0.mpy4.msx4.msy1.spx0.spy4.ssx3.ssy1.fg-box-size-x-5 > div > div',
      text: ['ausverkauft'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mediamarkt.ch/de/shop/ps5.html?ga_query=playstation+5',
    },
  ]
}
