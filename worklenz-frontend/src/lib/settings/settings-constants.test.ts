import { describe, expect, it, vi } from 'vitest';

// Imported eagerly by settings-constants; irrelevant here and heavy to load.
vi.mock('@/pages/settings/rate-card-settings/RateCardSettings', () => ({ default: () => null }));

import {
  getAccessibleSettings,
  HELP_UI_FLAGS,
  SETTINGS_UI_FLAGS,
  settingsItems,
} from './settings-constants';

const helpItem = settingsItems.find(item => item.key === 'help');
const mobileAppItem = settingsItems.find(item => item.key === 'mobile-app');
const legalNoticesItem = settingsItems.find(item => item.key === 'legal-notices');

describe('settings-constants: Mobile App visibility', () => {
  it('should keep the Mobile App route registered but hide it from the sidebar by default', () => {
    expect(mobileAppItem).toBeDefined();
    expect(mobileAppItem?.endpoint).toBe('mobile-app');
    expect(SETTINGS_UI_FLAGS.showMobileAppInSidebar).toBe(false);
    expect(mobileAppItem?.showInSidebar).toBe(false);
  });
});

describe('settings-constants: Legal notices placement', () => {
  it('should live under Help & Support and stay out of the settings sidebar list', () => {
    expect(legalNoticesItem).toBeDefined();
    expect(legalNoticesItem?.groupKey).toBe('help-support');
    expect(legalNoticesItem?.groupKey).not.toBe('account-personal');
    expect(legalNoticesItem?.showInSidebar).toBe(false);
  });
});

describe('settings-constants: HELP_UI_FLAGS', () => {
  it('should hide docs, changelog, community links, and release notes by default', () => {
    expect(HELP_UI_FLAGS.showDocsAndChangelog).toBe(false);
    expect(HELP_UI_FLAGS.showReleaseNotes).toBe(false);
    expect(HELP_UI_FLAGS.showCommunityLinks).toBe(false);
  });
});

describe('settings-constants: Help tab', () => {
  it('should register a Help item in the HELP & SUPPORT group', () => {
    expect(helpItem).toBeDefined();
    expect(helpItem?.endpoint).toBe('help');
    expect(helpItem?.groupKey).toBe('help-support');
    expect(helpItem?.groupDefaultValue).toBe('Help & Support');
  });

  it('should never be gated by role or plan', () => {
    expect(helpItem?.adminOnly).toBeUndefined();
    expect(helpItem?.requiredFeature).toBeUndefined();
    expect(helpItem?.showInSidebar).not.toBe(false);
  });

  it('should be visible to non-admin users', () => {
    const memberKeys = getAccessibleSettings(false, null).map(item => item.key);

    expect(memberKeys).toContain('help');
  });

  it('should be visible to admins', () => {
    const adminKeys = getAccessibleSettings(true, null).map(item => item.key);

    expect(adminKeys).toContain('help');
  });

  it('should sit directly above the Danger Zone, which stays last', () => {
    // The sidebar orders groups by first appearance in this array.
    const groupOrder = [...new Set(settingsItems.map(item => item.groupKey))];

    expect(groupOrder[groupOrder.length - 1]).toBe('danger-zone');
    expect(groupOrder[groupOrder.length - 2]).toBe('help-support');
  });
});
