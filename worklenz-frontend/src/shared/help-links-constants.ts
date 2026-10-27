// Every external link on Settings > Help, in one place. Not overridable by
// self-hosted admins in v1 — to add that later, change only this file.
export const WORKLENZ_DOCS_URL = 'https://astraconnect.io/docs';
export const WORKLENZ_STATUS_DOCS_URL = 'https://astraconnect.io/docs/status';
export const WORKLENZ_CHANGELOG_URL = 'https://astraconnect.io/changelog';

export const WORKLENZ_YOUTUBE_URL = 'https://astraconnect.io/youtube';

export const WORKLENZ_DISCORD_URL = 'https://astraconnect.io/community';
export const WORKLENZ_GITHUB_URL = 'https://astraconnect.io/github';
export const WORKLENZ_FACEBOOK_URL = 'https://astraconnect.io/facebook';
export const WORKLENZ_LINKEDIN_URL = 'https://astraconnect.io/linkedin';
export const WORKLENZ_X_URL = 'https://astraconnect.io/x';

export const WORKLENZ_PRIVACY_POLICY_URL = 'https://astraconnect.io/privacy';

// Email support opens the user's mail app (no page, no new tab). The subject is
// prefilled and deliberately not localized: it is addressed to the support team,
// which triages in English.
export const WORKLENZ_SUPPORT_EMAIL = 'support@astraconnect.io';
export const WORKLENZ_SUPPORT_EMAIL_SUBJECT = 'Astra Flow support request';
export const WORKLENZ_SUPPORT_MAILTO_URL = `mailto:${WORKLENZ_SUPPORT_EMAIL}?subject=${encodeURIComponent(WORKLENZ_SUPPORT_EMAIL_SUBJECT)}`;
