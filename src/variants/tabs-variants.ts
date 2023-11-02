import { cva } from 'class-variance-authority'

const tabsVariants = cva([], {
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
    color: {
      primary: [],
      destructive: [],
      mode: [],
      'mode-contrast': [],
    },
    orientation: {
      horizontal: [],
      vertical: ['grid grid-cols-[auto_1fr] gap-x-2'],
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    orientation: 'horizontal',
  },
})

export { tabsVariants }
