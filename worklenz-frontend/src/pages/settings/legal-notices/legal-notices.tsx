import { Card, Flex, Typography, theme } from '@/shared/antd-imports';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '@/hooks/useDoumentTItle';

/**
 * Post-sign-in Legal notices page. Shows licence names only (no project or
 * repository names) plus the Astra support source-availability line.
 */
export const LegalNoticesPage = () => {
  const { t } = useTranslation('settings/help');
  const { token } = theme.useToken();

  useDocumentTitle(t('legalNotices.pageTitle', { defaultValue: 'Legal notices' }));

  return (
    <Card style={{ width: '100%', maxWidth: 800, borderRadius: token.borderRadiusLG }}>
      <Flex vertical gap={20}>
        <Typography.Title level={4} style={{ marginBlockEnd: 0 }}>
          {t('legalNotices.pageTitle', { defaultValue: 'Legal notices' })}
        </Typography.Title>

        <ul style={{ margin: 0, paddingInlineStart: 20 }}>
          <li>
            <Typography.Text>
              {t('legalNotices.agplName', {
                defaultValue: 'GNU Affero General Public License v3.0 (AGPL-3.0)',
              })}
            </Typography.Text>
          </li>
          <li>
            <Typography.Text>
              {t('legalNotices.mitName', { defaultValue: 'MIT License' })}
            </Typography.Text>
          </li>
        </ul>

        <Typography.Paragraph style={{ marginBottom: 0 }}>
          {t('legalNotices.sourceOfferBody', {
            defaultValue:
              'Source code available on request via Astra support — support@astraconnect.io',
          })}
        </Typography.Paragraph>
      </Flex>
    </Card>
  );
};

export default LegalNoticesPage;
