import 'app/components/landingPage/styles.css'
import templateUrl from 'app/components/landingPage/landingPage.template'

const controller = class LandingPageController {
  constructor($log) {
    'ngInject'
  }
}

export const ftLandingPage = {
	controller,
	templateUrl,
	controllerAs: 'landingPage'
}