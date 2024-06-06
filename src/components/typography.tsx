import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export const Typography = {
  H1: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  ),
  H2: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  ),
  H3: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  ),
  H4: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  ),
  Paragraph: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7', className)} {...rest}>
      {children}
    </p>
  ),
  Code: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <code className={cn('bg-background p-1', className)} {...rest}>
      {children}
    </code>
  ),
  CodeBlock: ({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLParagraphElement>) => (
    <div className="relative">
      <pre className="pt-10 pb-6 bg-background rounded-md">
        <code className={cn('p-6', className)} {...rest}>
          {children}
        </code>
      </pre>
      <span className="absolute top-4 left-4 text-xs">bash</span>
    </div>
  ),
}
