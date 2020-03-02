import ConfigErrorId from '@/enums/configErrorId'

const CONFIG_NON_VERIFY_ERRORS = [
  ConfigErrorId.UnexpectedError,
  ConfigErrorId.ConfigNotFound,
  ConfigErrorId.UnableToParseConfig,
]

const CONFIG_VERIFY_ERRORS = (Object.values(ConfigErrorId) as ConfigErrorId[])
  .filter((configErrorId) => !CONFIG_NON_VERIFY_ERRORS.includes(configErrorId))

export default CONFIG_VERIFY_ERRORS
