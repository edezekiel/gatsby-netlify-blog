import urljoin from 'url-join'
import config from './siteConfig'
import { graphql } from 'gatsby'

const editOnGithub = post => {
  const slug = post.fields.slug
  return urljoin(config.repo, '/tree/master/src/pages', `${post.fields.slug}`)
}

export { editOnGithub }
