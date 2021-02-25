import { colors } from './colors'

export const theme = {
  colors: {
    black: colors.black,
    white: colors.white,
    background: colors.white,
    text: colors.text,
    modes: {
      dark: {
        black: colors.black,
        white: colors.white,
        background: '#111',
        text: '#eee',
      }
    }
  },

  lineHeights: {
    normal: 1.5
  },

  fonts: {
    'sansSerif': 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },

  fontSizes: {
  },

  radii: {
    normal: '4rpx',
  },

  space: {
    s0: 0,
    s1: '4rpx',
    s2: '8rpx',
    s3: '12rpx',
    s4: '16rpx',
    s5: '20rpx',
    s6: '24rpx',
    s7: '28rpx',
    s8: '32rpx',
    s9: '36rpx',
    s10: '40rpx',
    s11: '44rpx',
    s12: '48rpx',
    s13: '52rpx',
    s14: '56rpx',
    s15: '60rpx',
    s16: '64rpx',
    s17: '68rpx',
    s18: '72rpx',
    s19: '76rpx',
    s20: '80rpx',
  },

  screens: {
    sm: 576, // => @media (min-width: 576px) { ... }
    md: 768, // => @media (min-width: 768px) { ... }
    lg: 992, // => @media (min-width: 992px) { ... }
    xl: 1200, // => @media (min-width: 1024px) { ... }
    xxl: 1400,  // => @media (min-width: 1200px) { ... }
  },
}

export type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    demo?: unknown
  }
}