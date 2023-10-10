import * as React from 'react';
import {SVGProps} from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      stroke={props.stroke || '#5E2605'}
      strokeWidth={2}
      d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12V7ZM17 13h1a4 4 0 0 0 0-8h-1M17 13H3"
    />
    <path
      stroke={props.stroke || '#5E2605'}
      strokeLinecap="round"
      strokeWidth={2}
      d="M22 21H2"
    />
  </svg>
);
export default SvgComponent;
