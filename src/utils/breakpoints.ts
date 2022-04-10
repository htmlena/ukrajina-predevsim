import { css } from 'styled-components';

export const breakpoints = {
  small: 320,
  medium: 750,
  large: 1120,
  xlarge: 1300,
};

export const mq = {
  largeDown: {
    css: (arg, ...args) => css`
      @media (max-width: ${breakpoints.xlarge - 1}px) {
        ${css(arg, ...args)};
      }
    `,
  },
  mediumDown: {
    css: (arg, ...args) => css`
      @media (max-width: ${breakpoints.large - 1}px) {
        ${css(arg, ...args)};
      }
    `,
  },

  mediumUp: {
    css: (arg, ...args) => css`
      @media (min-width: ${breakpoints.medium}px) {
        ${css(arg, ...args)};
      }
    `,
  },

  largeUp: {
    css: (arg, ...args) => css`
      @media (min-width: ${breakpoints.large}px) {
        ${css(arg, ...args)};
      }
    `,
  },

  small: {
    css: (arg, ...args) => css`
      @media (max-width: ${breakpoints.medium - 1}px) {
        ${css(arg, ...args)};
      }
    `,
  },
  medium: {
    css: (arg, ...args) => css`
      @media (min-width: ${breakpoints.medium}px) and (max-width: ${breakpoints.large -
        1}px) {
        ${css(arg, ...args)};
      }
    `,
  },
  large: {
    css: (arg, ...args) => css`
      @media (min-width: ${breakpoints.large}px) {
        ${css(arg, ...args)};
      }
    `,
  },
  xlarge: {
    css: (arg, ...args) => css`
      @media (min-width: ${breakpoints.xlarge}px) {
        ${css(arg, ...args)};
      }
    `,
  },
};
