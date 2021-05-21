import {Store} from "./store";

export const Konsolenkost: Store = {
  backoffStatusCodes: [403, 429, 503],
  name: 'konsolenkost',
  currency: '€',
  labels: {
    outOfStock: {
      container: '#page-body > div > div > div > div > div.widget.widget-grid.widget-two-col.row.mt-3 > div:nth-child(2) > div > div.widget.widget-grid.widget-container.kk-border.p-3 > div > div > div.widget-inner.col-xl-9.widget-prop-xl-2-1.col-lg-9.widget-prop-lg-2-1.col-md-12.widget-prop-md-3-1.col-sm-12.widget-prop-sm-3-1.col-12.widget-prop-3-1 > div > div.widget.widget-grid.widget-two-col.row.mb-0 > div.widget-inner.col-xl-6.widget-prop-xl-3-1.col-lg-6.widget-prop-lg-3-1.col-md-12.widget-prop-md-3-1.widget-stacked-tablet.col-sm-12.widget-prop-sm-3-1.widget-stacked-mobile.col-12.widget-prop-3-1.widget-stacked-mobile > div > div > div > div > div > div > button',
      text: ['ausverkauft'],
    },
    inStock: {
      container: '#page-body > div > div > div > div > div.widget.widget-grid.widget-two-col.row.mt-3 > div:nth-child(2) > div > div.widget.widget-grid.widget-container.kk-border.p-3 > div > div > div.widget-inner.col-xl-9.widget-prop-xl-2-1.col-lg-9.widget-prop-lg-2-1.col-md-12.widget-prop-md-3-1.col-sm-12.widget-prop-sm-3-1.col-12.widget-prop-3-1 > div > div.widget.widget-grid.widget-two-col.row.mb-0 > div.widget-inner.col-xl-6.widget-prop-xl-3-1.col-lg-6.widget-prop-lg-3-1.col-md-12.widget-prop-md-3-1.widget-stacked-tablet.col-sm-12.widget-prop-sm-3-1.widget-stacked-mobile.col-12.widget-prop-3-1.widget-stacked-mobile > div > div > div > div > div > div > button > i',
      text: ['warenkorb'],
    }
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.konsolenkost.de/ps5-konsole-825gb-spider-man-miles-morales-de-version-neu-ovp_9951074_219025/',
    },
  ]
}
