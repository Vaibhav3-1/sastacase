// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const

export const Size = {
  name: 'sizes',
  options: [
    {
      label: '6.1 in',
      value: '6.1 in',
    },
    {
      label: '6.3 in',
      value: '6.3 in',
    },
    {
      label: '6.5 in',
      value: '6.5 in',
    },
    {
      label: '6.7 in',
      value: '6.7 in',
    },
    {
      label: '6.9 in',
      value: '6.9 in',
    },
  ],
}as const 

export const Camera = {
  name: 'camera sizes',
  options: [
    {
      label: 'Round Central',
      value: 'iphone11',
    },
    {
      label: 'Round Left',
      value: 'iphone12',
    },
    {
      label: 'Rectangular left ',
      value: 'iphone13',
    },
    {
      label: 'Square Left',
      value: 'iphone14',
    },
    {
      label: 'Left Straight',
      value: 'iphone15',
    },
  ],
}as const 

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iPhone',
      value: 'iphone',
    },
    {
      label: 'Samsung',
      value: 'Samsung',
    },
    {
      label: 'Vivo',
      value: 'vivo',
    },
    {
      label: 'Oppo',
      value: 'Oppo',
    },
    {
      label: 'Any Other',
      value: 'Other',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Dashing Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft-touch Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant, Soft Beautiful touch',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
