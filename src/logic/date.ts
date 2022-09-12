import { useI18n } from 'vue-i18n'

export const formatDate = (date: string) => {
  const { t } = useI18n()
  const split = date.split('/')

  return date === 'Today'
    ? t('date.today')
    : `${t(`date.months.${split[0]}`)} ${split[1]}`
}
