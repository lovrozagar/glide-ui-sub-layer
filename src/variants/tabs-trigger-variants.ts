import { cva } from 'class-variance-authority'

const tabsTriggerVariants = cva([], {
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
    isActive: {
      false: [],
      true: [],
    },
  },
  compoundVariants: [
    {
      className: 'bg-transparent outline-none',
    },
    {
      isActive: true,
      color: 'primary',
      className: 'text-primary-foreground',
    },
    {
      isActive: false,
      color: 'primary',
      className: 'text-primary-foreground/50',
    },
    {
      color: 'primary',
      className: 'ring-primary',
    },
    {
      isActive: true,
      color: 'destructive',
      className: 'text-destructive-foreground',
    },
    {
      isActive: false,
      color: 'destructive',
      className: 'text-destructive-foreground/50',
    },
    {
      color: 'destructive',
      className: 'ring-destructive',
    },
    {
      variant: ['solid', 'light', 'outlined'],
      className: 'ring-offset-accent focus-visible:ring-ring-width focus-visible:ring-offset-offset',
    },
    {
      variant: ['lined', 'lined-reverse'],
      className: 'ring-offset-accent focus-visible:ring-ring-width focus-visible:ring-inset',
    },
    {
      variant: ['solid', 'light', 'outlined', 'lined', 'lined-reverse'],
      className: 'rounded-small',
    },
    {
      variant: ['card', 'card-reverse'],
      className: 'rounded-none ring-offset-background focus-visible:ring-ring-width focus-visible:ring-offset-offset',
    },
  ],
})

export { tabsTriggerVariants }
