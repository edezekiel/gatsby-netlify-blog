import urljoin from 'url-join'
import config from './siteConfig'

const editOnGithub = post => {
  return urljoin(config.repo, '/tree/master/src/pages', `${post.fields.slug}`)
}

export { editOnGithub }
