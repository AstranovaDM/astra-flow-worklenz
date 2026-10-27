// Matches Asana's left mode-switcher rail width.
export const NAV_RAIL_EXPANDED_WIDTH = 64;
export const NAV_RAIL_COLLAPSED_WIDTH = 56;

// Astra Flow navy sidebar (same in light and dark — white iconography on navy).
// Exact gradient from brand/products/flow/astra-themes.md.
export const ASTRA_SIDEBAR_GRADIENT =
  'linear-gradient(180deg, #0B1733 0%, #091228 60%, #08101F 100%)';

// Shared panel background for every left-rail host (Home, Planner, Reporting,
// Client Portal) and the shared header above them — must stay identical
// across all of them so the header and rail read as one seamless panel.
export const NAV_RAIL_BG_LIGHT = ASTRA_SIDEBAR_GRADIENT;
export const NAV_RAIL_BG_DARK = ASTRA_SIDEBAR_GRADIENT;

// Shared divider color for the border that separates a rail from its content
// pane (rounded top-left corner treatment) on every host.
export const NAV_RAIL_DIVIDER_LIGHT = 'rgba(255, 255, 255, 0.08)';
export const NAV_RAIL_DIVIDER_DARK = 'rgba(255, 255, 255, 0.08)';

// Icon / label color on the navy rail (both themes).
export const NAV_RAIL_FG = 'rgba(255, 255, 255, 0.78)';
export const NAV_RAIL_FG_MUTED = 'rgba(255, 255, 255, 0.45)';
