import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

import { LOGO_LIGHT, LOGO_DARK, XMAS_LOGO_LIGHT, XMAS_LOGO_DARK } from '@/shared/constants';
import { PROJECTS_RAIL_SUB_ROUTES, FINANCE_RAIL_SUB_ROUTES } from '@/features/navigation/nav-registry';

const PROJECT_DETAIL_PATH =
  /^\/worklenz\/projects\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

const NavbarLogo = () => {
  const { t } = useTranslation('navbar');
  const location = useLocation();
  const themeMode = useSelector((state: RootState) => state.themeReducer.mode);
  const organization = useSelector((state: RootState) => state.adminCenterReducer.organization);
  const loadingOrganization = useSelector(
    (state: RootState) => state.adminCenterReducer.loadingOrganization
  );

  const isChristmasSeason = useMemo(() => {
    const now = new Date();
    return now.getMonth() === 11; // December
  }, []);

  // Header sits on navy rail chrome for these routes even in light theme —
  // use the reversed (light-ink) lockup so the mark stays readable.
  const isDarkChrome = useMemo(() => {
    if (themeMode === 'dark') return true;
    const path = location.pathname;
    if (
      path === '/worklenz/home' ||
      path.endsWith('/home') ||
      path.startsWith('/worklenz/home/') ||
      path.includes('/worklenz/planner') ||
      path.includes('/worklenz/schedule') ||
      path.includes('/worklenz/reporting') ||
      path.includes('/worklenz/client-portal') ||
      path === '/worklenz/projects' ||
      (path.endsWith('/projects') && !path.includes('/admin-center/')) ||
      PROJECT_DETAIL_PATH.test(path) ||
      path.includes('/worklenz/team-lead-reports') ||
      path === '/worklenz/finance' ||
      path.endsWith('/finance')
    ) {
      return true;
    }
    if (path.startsWith('/worklenz/projects/')) {
      const segment = path.slice('/worklenz/projects/'.length).split('/')[0];
      if (PROJECTS_RAIL_SUB_ROUTES.has(segment)) return true;
    }
    if (path.startsWith('/worklenz/finance/')) {
      const segment = path.slice('/worklenz/finance/'.length).split('/')[0];
      if (FINANCE_RAIL_SUB_ROUTES.has(segment)) return true;
    }
    return false;
  }, [themeMode, location.pathname]);

  const defaultLogo = useMemo(
    () =>
      isDarkChrome
        ? isChristmasSeason
          ? XMAS_LOGO_DARK
          : LOGO_DARK
        : isChristmasSeason
          ? XMAS_LOGO_LIGHT
          : LOGO_LIGHT,
    [isDarkChrome, isChristmasSeason]
  );

  const logoSrc = useMemo(() => {
    // If API logo is available, save to localStorage and use it
    if (organization?.logo_url) {
      localStorage.setItem('organizationLogo', organization.logo_url);
      return organization.logo_url;
    }

    // Organization has loaded but has no logo — clear cache and use default
    if (organization !== null && !loadingOrganization) {
      localStorage.removeItem('organizationLogo');
      return defaultLogo;
    }

    // Organization not yet loaded — use cached logo to avoid flash
    const cachedLogo = localStorage.getItem('organizationLogo');
    if (cachedLogo) return cachedLogo;

    return defaultLogo;
  }, [organization, loadingOrganization, defaultLogo]);

  const logoHeight = useMemo(() => {
    // Brand lockup should read clearly in the header; custom org logos stay slightly smaller.
    // Use the dark lockup on dark backgrounds (LOGO_DARK) so the mark stays readable.
    if (organization?.logo_url) {
      return isChristmasSeason ? 42 : 36;
    }
    return isChristmasSeason ? 46 : 44;
  }, [organization?.logo_url, isChristmasSeason]);

  return (
    <Link to={'/worklenz/home'}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 48 }}>
        <img
          src={logoSrc}
          alt={t('logoAlt')}
          style={{
            height: logoHeight,
            maxHeight: 48,
            maxWidth: 200,
            display: 'block',
            marginBottom: isChristmasSeason && !organization?.logo_url ? 12 : 0,
            objectFit: 'contain',
          }}
          onError={e => {
            // Fallback to default logo on error
            const target = e.target as HTMLImageElement;
            target.src = defaultLogo;
          }}
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
