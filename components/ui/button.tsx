import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-action-primary text-text-on-action hover:bg-action-hover',
        secondary:
          'bg-surface-soft text-text-primary hover:bg-surface-active transition-colors duration-200',
        outline:
          'border border-border-header bg-transparent text-text-supporting hover:bg-transparent hover:border-action-primary hover:text-text-hero transition-colors duration-200',
        ghost: 'text-text-primary hover:bg-surface-soft',
        link: 'text-action-primary underline-offset-4 hover:text-action-hover hover:underline cursor-pointer',
      },
      size: {
        default: 'min-h-11 px-5 py-2',
        sm: 'min-h-10 px-3',
        lg: 'min-h-11 px-8',
        icon: 'size-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
