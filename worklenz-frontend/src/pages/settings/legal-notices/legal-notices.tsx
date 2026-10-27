import { Card, Flex, Typography, theme } from '@/shared/antd-imports';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '@/hooks/useDoumentTItle';

/**
 * Post-sign-in Legal notices page. This is the only UI surface allowed to
 * name third-party licences and upstream projects (AGPL section 13 offer).
 */
export const LegalNoticesPage = () => {
  const { t } = useTranslation('settings/help');
  const { token } = theme.useToken();

  useDocumentTitle(t('legalNotices.pageTitle', { defaultValue: 'Legal notices' }));

  return (
    <Card style={{ width: '100%', maxWidth: 800, borderRadius: token.borderRadiusLG }}>
      <Flex vertical gap={20}>
        <Flex vertical gap={4}>
          <Typography.Title level={4} style={{ marginBlockEnd: 0 }}>
            {t('legalNotices.pageTitle', { defaultValue: 'Legal notices' })}
          </Typography.Title>
          <Typography.Text type="secondary">
            {t('legalNotices.pageDescription', {
              defaultValue: 'Third-party software notices and source-code availability.',
            })}
          </Typography.Text>
        </Flex>

        <section>
          <Typography.Title level={5}>
            {t('legalNotices.openSourceTitle', { defaultValue: 'Open-source components' })}
          </Typography.Title>
          <Typography.Paragraph>
            This product includes software developed by third parties. Notable components include:
          </Typography.Paragraph>
          <ul>
            <li>
              <Typography.Text>
                Worklenz — licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
                Copyright of the respective Worklenz contributors.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                twenty-ui (from the Twenty CRM project) — MIT License. Styling patterns inspired by
                or adapted from <code>packages/twenty-ui</code>. See{' '}
                <code>THIRD_PARTY_NOTICES</code> in the repository root.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Other dependencies are listed in <code>worklenz-backend/src/public/3rdpartylicenses.txt</code>.
              </Typography.Text>
            </li>
          </ul>
        </section>

        <section>
          <Typography.Title level={5}>
            {t('legalNotices.sourceOfferTitle', { defaultValue: 'Corresponding source' })}
          </Typography.Title>
          <Typography.Paragraph>
            {t('legalNotices.sourceOfferBody', {
              defaultValue:
                'In accordance with AGPL-3.0 section 13, the corresponding source for the network-accessible copy of this application is available on request. Contact support@astraconnect.io and we will provide the complete corresponding source for the version you are using, including any modifications, at no charge beyond reasonable media costs if applicable.',
            })}
          </Typography.Paragraph>
        </section>

        <section>
          <Typography.Title level={5}>
            {t('legalNotices.contactTitle', { defaultValue: 'Contact' })}
          </Typography.Title>
          <Typography.Paragraph>
            {t('legalNotices.contactBody', {
              defaultValue: 'Legal and compliance: support@astraconnect.io',
            })}
          </Typography.Paragraph>
        </section>
      </Flex>
    </Card>
  );
};

export default LegalNoticesPage;
