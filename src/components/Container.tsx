import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type ContainerProps<T extends ElementType> = {
  // as: ElementType; // it works as a valid identifier of component
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// export default function Container({as: Component}: ContainerProps)
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...props}> {children}</Component>;
}
