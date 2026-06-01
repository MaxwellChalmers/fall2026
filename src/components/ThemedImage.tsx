import type { ImgHTMLAttributes } from 'react';

interface ThemedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  darkSrc?: string;
}

function mergeClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export default function ThemedImage({
  src,
  darkSrc,
  className,
  id,
  ...props
}: ThemedImageProps) {
  if (!darkSrc) {
    return <img id={id} src={src} className={className} {...props} />;
  }

  return (
    <>
      <img
        id={id}
        src={src}
        className={mergeClassNames(className, 'dark:hidden')}
        {...props}
      />
      <img
        src={darkSrc}
        className={mergeClassNames(className, 'hidden dark:block')}
        {...props}
      />
    </>
  );
}
