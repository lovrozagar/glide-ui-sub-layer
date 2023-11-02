import { cva } from 'class-variance-authority'

const tabsCursorVariants = cva(['absolute z-[-10] inset-0 rounded-small'], {
  variants: {
    color: {
      primary: [],
      destructive: [],
      mode: [],
      'mode-contrast': [],
    },
    variant: {
      solid: [],
      outlined: [],
      ghost: [],
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
  },
  compoundVariants: [
    {
      variant: 'lined',
      orientation: 'horizontal',
      className: ['top-auto', 'right-0', 'left-0', 'bottom-0'],
    },
    {
      variant: 'lined-reverse',
      orientation: 'horizontal',
      className: ['bottom-auto', 'right-0', 'left-0', 'top-0'],
    },
    {
      variant: 'lined',
      orientation: 'vertical',
      className: ['top-0', 'right-auto', 'left-0', 'bottom-0'],
    },
    {
      variant: 'lined-reverse',
      orientation: 'vertical',
      className: ['bottom-0', 'right-0', 'left-auto', 'top-0'],
    },
    {
      variant: ['lined', 'lined-reverse'],
      orientation: 'horizontal',
      className: ['h-[2px] w-full'],
    },
    {
      variant: ['lined', 'lined-reverse'],
      orientation: 'vertical',
      className: ['w-[2px] h-full'],
    },
    {
      orientation: 'horizontal',
      variant: 'card',
      className: ['rounded-b-none'],
    },
    {
      orientation: 'horizontal',
      variant: 'card-reverse',
      className: ['rounded-t-none'],
    },
    {
      orientation: 'vertical',
      variant: 'card',
      className: ['rounded-l-none'],
    },
    {
      orientation: 'vertical',
      variant: 'card-reverse',
      className: ['rounded-r-none'],
    },
    {
      variant: ['solid', 'outlined', 'lined', 'lined-reverse', 'card', 'card-reverse'],
      color: 'primary',
      className: ['bg-primary'],
    },
    {
      color: 'primary',
      variant: 'light',
      className: 'bg-primary/20',
    },
    {
      variant: ['solid', 'outlined', 'lined', 'lined-reverse', 'card', 'card-reverse'],
      color: 'destructive',
      className: ['bg-destructive'],
    },
    {
      color: 'destructive',
      variant: 'light',
      className: 'bg-destructive/20',
    },
  ],
})

export { tabsCursorVariants }
