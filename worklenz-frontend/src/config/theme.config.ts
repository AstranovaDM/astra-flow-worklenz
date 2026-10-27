import { theme } from '@/shared/antd-imports';
import type { ThemeConfig } from 'antd';

/** Astra Flow default 'astra' theme tokens (see brand/products/flow/astra-themes.md). */
export const ASTRA_PRIMARY_LIGHT = '#1677FF';
export const ASTRA_PRIMARY_DARK = '#4D94FF';
export const ASTRA_TEAL = '#13B5A6';
export const ASTRA_LIGHT_BG = '#F4F6FB';
export const ASTRA_LIGHT_FG = '#0B1324';
export const ASTRA_LIGHT_CARD = '#FFFFFF';
export const ASTRA_LIGHT_MUTED = '#F7F9FC';
export const ASTRA_LIGHT_MUTED_FG = '#5B6478';
export const ASTRA_LIGHT_BORDER = '#E3E8F0';
export const ASTRA_DARK_BG = '#0A1222';
export const ASTRA_DARK_FG = '#E8EDF5';
export const ASTRA_DARK_CARD = '#0F182B';
export const ASTRA_DARK_MUTED = '#131E33';
export const ASTRA_DARK_MUTED_FG = '#9AA6BC';
export const ASTRA_DARK_BORDER = '#1E2A42';
export const ASTRA_SIDEBAR_GRADIENT =
  'linear-gradient(180deg, #0B1733 0%, #091228 60%, #08101F 100%)';

export const getThemeConfig = (currentTheme: 'light' | 'dark'): ThemeConfig => ({
  algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: currentTheme === 'dark' ? ASTRA_PRIMARY_DARK : ASTRA_PRIMARY_LIGHT,
    colorInfo: currentTheme === 'dark' ? ASTRA_PRIMARY_DARK : ASTRA_PRIMARY_LIGHT,
    colorSuccess: currentTheme === 'dark' ? '#4ADE9E' : ASTRA_TEAL,
    borderRadius: 10,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    fontFamily:
      "'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    colorBgLayout: currentTheme === 'dark' ? ASTRA_DARK_BG : ASTRA_LIGHT_BG,
    colorBgContainer: currentTheme === 'dark' ? ASTRA_DARK_CARD : ASTRA_LIGHT_CARD,
    colorText: currentTheme === 'dark' ? ASTRA_DARK_FG : ASTRA_LIGHT_FG,
    colorTextSecondary: currentTheme === 'dark' ? ASTRA_DARK_MUTED_FG : ASTRA_LIGHT_MUTED_FG,
    colorBorder: currentTheme === 'dark' ? ASTRA_DARK_BORDER : ASTRA_LIGHT_BORDER,
    colorBorderSecondary: currentTheme === 'dark' ? '#1A2438' : '#EEF2F7',
    colorFillSecondary:
      currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(11, 19, 36, 0.06)',
    colorFillTertiary:
      currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(11, 19, 36, 0.04)',
  },
  components: {
    Layout: {
      siderBg: currentTheme === 'dark' ? ASTRA_DARK_BG : ASTRA_LIGHT_CARD,
      headerBg: currentTheme === 'dark' ? ASTRA_DARK_CARD : ASTRA_LIGHT_CARD,
      bodyBg: currentTheme === 'dark' ? ASTRA_DARK_BG : ASTRA_LIGHT_BG,
    },
    Menu: {
      colorBgContainer: 'transparent',
      itemBg: 'transparent',
      itemSelectedBg:
        currentTheme === 'dark' ? 'rgba(77, 148, 255, 0.18)' : 'rgba(22, 119, 255, 0.1)',
      itemHoverBg: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(11, 19, 36, 0.04)',
      itemSelectedColor: currentTheme === 'dark' ? ASTRA_PRIMARY_DARK : ASTRA_PRIMARY_LIGHT,
      itemColor: currentTheme === 'dark' ? ASTRA_DARK_FG : ASTRA_LIGHT_FG,
      itemMarginBlock: 4,
      itemMarginInline: 8,
      itemPaddingInline: 16,
      itemBorderRadius: 10,
    },
    Card: {
      borderRadiusLG: 18,
      paddingLG: 24,
    },
    Segmented: {
      itemSelectedBg: currentTheme === 'dark' ? ASTRA_DARK_CARD : ASTRA_LIGHT_CARD,
      itemSelectedColor: currentTheme === 'dark' ? ASTRA_DARK_FG : ASTRA_LIGHT_FG,
      itemHoverBg: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(11, 19, 36, 0.06)',
      itemColor: currentTheme === 'dark' ? ASTRA_DARK_MUTED_FG : ASTRA_LIGHT_MUTED_FG,
      trackBg: currentTheme === 'dark' ? ASTRA_DARK_MUTED : ASTRA_LIGHT_MUTED,
      trackPadding: 2,
      borderRadius: 999,
      borderRadiusSM: 999,
    },
    Button: {
      // Pill shape inspired by twenty-ui control styling (MIT).
      borderRadius: 999,
      controlHeight: 36,
    },
    Input: {
      borderRadius: 10,
      controlHeight: 36,
    },
    Select: {
      borderRadius: 10,
      controlHeight: 36,
    },
    Table: {
      borderRadius: 16,
      headerBg: currentTheme === 'dark' ? ASTRA_DARK_MUTED : ASTRA_LIGHT_MUTED,
    },
    Statistic: {
      contentFontSize: 28,
    },
    Tooltip: {
      colorBgSpotlight: currentTheme === 'dark' ? ASTRA_DARK_CARD : ASTRA_LIGHT_CARD,
      colorTextLightSolid: currentTheme === 'dark' ? ASTRA_DARK_FG : ASTRA_LIGHT_FG,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
});
