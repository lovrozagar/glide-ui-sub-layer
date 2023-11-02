import { cva } from 'class-variance-authority'

const tabsTriggerListVariants = cva([], {
  variants: {
    variant: {
      solid: [],
      outlined: [],
      light: [],
      lined: [],
      'lined-reverse': [],
      card: [],
      'card-reverse': [],
    },
    orientation: {
      horizontal: [],
      vertical: [],
    },
    isActive: {
      false: [],
      true: [],
    },
    disableDefaultPseudoElements: {
      false: [],
      true: [],
    },
  },
  compoundVariants: [
    {
      className: 'flex w-fit justify-center items-center gap-2 rounded p-1 transition-all',
    },
    {
      orientation: ['horizontal'],
      className: 'flex',
    },
    {
      orientation: ['vertical'],
      className: 'grid',
    },
    {
      variant: ['solid'],
      className: ['bg-accent'],
    },
    {
      variant: ['light'],
      className: ['bg-accent/30'],
    },
    {
      variant: 'outlined',
      className: ['border-2'],
    },
    {
      variant: ['lined', 'lined-reverse', 'outlined', 'card', 'card-reverse'],
      className: ['bg-transparent'],
    },
    {
      orientation: 'horizontal',
      variant: 'card',
      className: ['rounded-b-none', 'border-b-2'],
    },
    {
      orientation: 'horizontal',
      variant: 'card-reverse',
      className: ['rounded-t-none', 'border-t-2'],
    },
    {
      orientation: 'vertical',
      variant: 'card',
      className: ['rounded-l-none', 'border-l-2'],
    },
    {
      orientation: 'vertical',
      variant: 'card-reverse',
      className: ['rounded-r-none', 'border-r-2'],
    },
    {
      variant: ['outlined', 'card', 'card-reverse'],
      className: 'border-accent',
    },
    {
      orientation: 'horizontal',
      variant: ['card', 'card-reverse'],
      className: 'rounded-t-none rounded-b-none',
    },
    {
      orientation: 'vertical',
      variant: ['card', 'card-reverse'],
      className: 'rounded-l-none rounded-r-none',
    },
    {
      orientation: 'horizontal',
      variant: ['card', 'card-reverse'],
      className: 'rounded-t-none rounded-b-none',
    },
    {
      variant: ['solid', 'outlined', 'light', 'lined', 'lined-reverse'],
      className: ['w-fit', 'justify-center', 'items-center', 'gap-2', 'rounded', 'p-1'],
    },
    {
      variant: ['card', 'card-reverse'],
      className: 'p-0 overflow-hidden',
    },
    {
      disableDefaultPseudoElements: false,
      orientation: 'horizontal',
      variant: ['lined'],
      className:
        'relative before:absolute before:bottom-[6px] before:left-0 before:right-0 before:top-auto before:z-10 before:h-[3px] before:w-[100%] before:bg-background before:content-[""]',
    },
    {
      disableDefaultPseudoElements: false,
      orientation: 'horizontal',
      variant: ['lined-reverse'],
      className:
        'relative before:absolute before:top-[6px] before:left-0 before:right-0 before:bottom-auto before:z-10 before:h-[4px] before:w-[100%] before:bg-background before:content-[""]',
    },
    {
      disableDefaultPseudoElements: false,
      orientation: 'vertical',
      variant: ['lined'],
      className:
        'relative before:absolute before:bottom-0 before:left-[6px] before:right-auto before:top-0 before:z-10 before:w-[3px] before:h-[100%] before:bg-background before:content-[""]',
    },
    {
      disableDefaultPseudoElements: false,
      orientation: 'vertical',
      variant: ['lined-reverse'],
      className:
        'relative before:absolute before:bottom-0 before:left-auto before:right-[6px] before:top-0 before:z-10 before:w-[3px] before:h-[100%] before:bg-background before:content-[""]',
    },
  ],
})

export { tabsTriggerListVariants }
