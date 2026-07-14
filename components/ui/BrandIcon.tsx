import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .86-.54 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.32-.25 1-.28 1.14-.05.19-.15.23-.35.14-1.28-.6-2.08-2.46-2.08-3.96 0-3.23 2.34-6.19 6.76-6.19 3.55 0 6.31 2.53 6.31 5.91 0 3.53-2.22 6.37-5.31 6.37-1.04 0-2.01-.54-2.35-1.18l-.64 2.43c-.23.89-.85 2-1.27 2.68.96.3 1.97.45 3.02.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export function BehanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.2 10.9c.6-.3 1-.9 1-1.7 0-1.7-1.3-2.2-2.8-2.2H2v10h4.6c1.6 0 3.1-.8 3.1-2.6 0-1.1-.5-2-1.5-2.3zM4.1 8.6h2c.7 0 1.2.3 1.2 1s-.4 1-1.2 1H4.1v-2zm2.2 6.7H4.1v-2.4h2.3c.8 0 1.4.4 1.4 1.2 0 .9-.6 1.2-1.5 1.2zM17.5 8.1H14V6.9h3.5v1.2zM22 13.4c0-2.3-1.3-4.1-3.7-4.1-2.3 0-3.9 1.7-3.9 4s1.5 3.9 3.9 3.9c1.8 0 3.1-.8 3.5-2.5h-1.9c-.2.5-.7.8-1.4.8-1 0-1.6-.6-1.7-1.6H22c0-.2 0-.3 0-.5zm-5.1-1c.1-.9.6-1.5 1.5-1.5s1.4.6 1.4 1.5h-2.9z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.12 2H8.88C5.4 2 3 4.28 3 7.81v8.37C3 19.72 5.4 22 8.88 22h6.24c3.48 0 5.88-2.28 5.88-5.82V7.81C21 4.28 18.6 2 15.12 2zm-1.1 5.3h1.9l-.2 1.8h-1.7v5.4h-2.2v-5.4H9.8V7.9h1.3V6.8c0-1.1.5-2.8 2.8-2.8l1.9.01v2.1h-1.4c-.2 0-.7.1-.7.8v1.2z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 2.5h2.8c.1 1.8.9 3.4 2.2 4.6-.9.1-1.9.1-2.8-.1v5.5a4.8 4.8 0 1 1-4.8-4.8V7.4c.8.4 1.7.7 2.6.7V2.5zm.1 12.9a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6z" />
    </svg>
  );
}

export function ThreadsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3c2.8 0 5 2.2 5 5v4.5a5 5 0 1 1-10 0V8c0-2.8 2.2-5 5-5z" />
      <path d="M7 8.5a5 5 0 0 0 10 0" />
    </svg>
  );
}
