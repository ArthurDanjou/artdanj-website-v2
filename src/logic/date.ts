import { useI18n } from 'vue-i18n'

export const formatDate = (date: string) => {
  const { t } = useI18n()

  return date === 'Today'
    ? t('date.today')
    : `months.${date.split('/')[0]} ${date.split('/')[1]}`
}
