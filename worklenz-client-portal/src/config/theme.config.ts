import { theme } from '@/shared/antd-imports';
import type { ThemeConfig } from 'antd';

/** Height of buttons, inputs and selects in the client portal; custom controls beside them use it too. */
export const PORTAL_CONTROL_HEIGHT = 36;

const ASTRA_PRIMARY_LIGHT = '#1677FF';
const ASTRA_PRIMARY_DARK = '#4D94FF';
const ASTRA_TEAL = '#13B5A6';
const ASTRA_LIGHT_BG = '#F4F6FB';
const ASTRA_LIGHT_FG = '#0B1324';
const ASTRA_LIGHT_CARD = '#FFFFFF';
const ASTRA_LIGHT_MUTED = '#F7F9FC';
const ASTRA_LIGHT_MUTED_FG = '#5B6478';
const ASTRA_LIGHT_BORDER = '#E3E8F0';
const ASTRA_DARK_BG = '#0A1222';
const ASTRA_DARK_FG = '#E8EDF5';
const ASTRA_DARK_CARD = '#0F182B';
const ASTRA_DARK_MUTED = '#131E33';
const ASTRA_DARK_MUTED_FG = '#9AA6BC';
const ASTRA_DARK_BORDER = '#1E2A42';

export const getThemeConfig = (
  currentTheme: 'light' | 'dark',
  primaryColor?: string | null
): ThemeConfig => {
  // Branding colours surfaces and accents only; the core text colour must stay neutral.
  const coreTextColor = currentTheme === 'dark' ? ASTRA_DARK_FG : ASTRA_LIGHT_FG;
  const defaultPrimary = currentTheme === 'dark' ? ASTRA_PRIMARY_DARK : ASTRA_PRIMARY_LIGHT;
  return {
    algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: primaryColor || defaultPrimary,
      colorInfo: primaryColor || defaultPrimary,
      colorSuccess: currentTheme === 'dark' ? '#4ADE9E' : ASTRA_TEAL,
      borderRadius: 10,
      borderRadiusLG: 16,
      fontFamily:
        "'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      colorBgLayout: currentTheme === 'dark' ? ASTRA_DARK_BG : ASTRA_LIGHT_BG,
      colorBgContainer: currentTheme === 'dark' ? ASTRA_DARK_CARD : ASTRA_LIGHT_CARD,
      colorText: coreTextColor,
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
        itemSelectedBg: 'var(--portal-brand-tint)',
        itemHoverBg: 'var(--portal-brand-tint-soft)',
        itemSelectedColor: coreTextColor,
        itemHoverColor: coreTextColor,
        itemColor: coreTextColor,
        itemMarginBlock: 4,
        itemMarginInline: 8,
        itemPaddingInline: 16,
        itemBorderRadius: 10,
      },
      Tabs: {
        itemColor: coreTextColor,
        itemHoverColor: coreTextColor,
        itemActiveColor: coreTextColor,
        itemSelectedColor: coreTextColor,
      },
      Segmented: {
        itemSelectedColor: coreTextColor,
        borderRadius: 999,
      },
      Card: {
        borderRadiusLG: 18,
        paddingLG: 24,
      },
      Button: {
        borderRadius: 999,
        controlHeight: PORTAL_CONTROL_HEIGHT,
      },
      Input: {
        borderRadius: 10,
        controlHeight: PORTAL_CONTROL_HEIGHT,
      },
      Select: {
        borderRadius: 10,
        controlHeight: PORTAL_CONTROL_HEIGHT,
        optionSelectedColor: coreTextColor,
      },
      Table: {
        borderRadius: 16,
        headerBg: currentTheme === 'dark' ? ASTRA_DARK_MUTED : ASTRA_LIGHT_MUTED,
      },
      Statistic: {
        contentFontSize: 28,
      },
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      },
    },
  };
};
