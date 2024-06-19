import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-pink-500 text-white shadow hover:bg-pink-200',
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-400',
        outline:
          'border border-gray-300 bg-white shadow-sm hover:bg-pink-100 hover:text-pink-500',
        secondary:
          'bg-pink-200 text-pink-700 shadow-sm hover:bg-pink-300',
        ghost: 'hover:bg-pink-100 hover:text-pink-500',
        link: 'text-pink-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading,
      loadingText,
      variant,
      children,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
        {isLoading && loadingText ? loadingText : children}
        {isLoading ? (
          <span className='ml-1.5 flex items-center gap-1'>
            <span className='animate-flashing w-1 h-1 bg-white rounded-full inline-block' />
            <span className='animate-flashing delay-100 w-1 h-1 bg-white rounded-full inline-block' />
            <span className='animate-flashing delay-200 w-1 h-1 bg-white rounded-full inline-block' />
          </span>
        ) : null}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
