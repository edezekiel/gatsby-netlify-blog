import urljoin from 'url-join'
import config from './siteConfig'
import moment from 'moment'
import { graphql } from 'gatsby'

const formatDate = date => moment.utc(date).format(config.dateFormat)

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat)
  return urljoin(config.repo, '/tree/master/src/pages/posts', `${date}-${post.slug}.md`)
}

export { formatDate, editOnGithub }
