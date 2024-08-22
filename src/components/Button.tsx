import { ComponentPropsWithoutRef } from 'react';

// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>;
//
// type AnchorProps = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string };
type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}
export default function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props;
  // if (props.el === 'anchor')
  // if ('href' in props)
  if (isAnchorProp(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
