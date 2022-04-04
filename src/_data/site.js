const { DateTime } = require('luxon')

module.exports = {
    title: 'Wedgwood Design',
    short_title: 'WD',
    description: 'Wedgwood Design, based in West Sussex, England, offers consulting, strategy, design, and development of accessible, standards-compliant, high-performing websites.',
    rootUrl: process.env.URL || '',
  	environment: process.env.NODE_ENV,
    logo: '/assets/images/common/logo.png',
    theme_color: '#212227',
    accent_color: '#20e',
    background_color: '#fff',
    favicon: '/assets/ico/favicon.ico',
    icon: '/assets/ico/apple-touch-icon.png',
	dateTimeNow: DateTime.local().toFormat('dd LLLL yyyy @ t'),
	timeCurrent: DateTime.local().diff(DateTime.local(1982, 5, 25)).milliseconds,
    author: {
      name: 'Bruce Taylor',
      url: 'https://brootaylor.com'
    },
};
