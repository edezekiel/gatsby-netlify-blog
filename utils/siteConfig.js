const config = {
  siteTitle: 'Ed Ezekiel',
  siteTitleShort: 'Ed Ezekiel',
  siteTitleAlt: 'Ed Ezekiel',
  siteLogo: '/logos/ed.jpg',
  siteUrl: 'https://www.edezekiel.com',
  repo: 'https://github.com/edezekiel/gatsby-netlify-blog',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    `Ed Ezekiel is full-stack software developer with a passion for solving problems.`,
  googleAnalyticsID: '',
  disqusShortname: 'edezekiel',
  userName: 'Ed',
  userEmail: 'ed.a.ezekiel@gmail.com',
  userTwitter: 'EdwardAEzekiel',
  userLocation: 'Memphis, TN',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'With experience in Ruby on Rails, JavaScript, and React and a background in law, I discovered web development through working at a legal tech startup.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#6b37bf', // Used for setting manifest and progress theme colors.
  backgroundColor: '#6b37bf',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = config
