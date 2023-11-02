const DEFAULT_TABS_MOTION_BUBBLE_TRANISTION = {
  type: 'spring',
  bounce: 0.15,
  duration: 0.375,
}

const MANDATROY_TABS_TRIGGER_CLASSNAMES = 'relative overflow-visible z-0'

const DEFAULT_TABS_CLASSNAMES = {
  root: '',
  triggerList: '',
  triggers: '',
  contentList: '',
  contents: '',
}

const MILLISECONDS_IN_SECONDS = 1000

const DEFAULT_CONTENT_CLASSNAME =
  'rounded ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

export {
  DEFAULT_TABS_MOTION_BUBBLE_TRANISTION,
  MANDATROY_TABS_TRIGGER_CLASSNAMES,
  DEFAULT_TABS_CLASSNAMES,
  MILLISECONDS_IN_SECONDS,
  DEFAULT_CONTENT_CLASSNAME,
}
