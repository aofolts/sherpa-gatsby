import React from 'react'
import RichText from 'components/rich-text'
import css from './section-content.module.less'
import {getPageUrl} from 'utilities/router'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from 'react-share'

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share'

const SocialSharing = ({
  data
}) => {
  const buttonProps = {
    url: getPageUrl(data.page),
    title: data.title,
    description: 'Hey there!',
    className: css.socialButton,
    via: 'sherpadesignco'
  }

  const iconProps = {
    className: css.socialIcon,
    size: 'initial'
  }

  return (
    <div className={css.socialSharing}>
      <FacebookShareButton {...buttonProps}>
        <FacebookIcon {...iconProps}/>
      </FacebookShareButton>
      <TwitterShareButton {...buttonProps}>
        <TwitterIcon {...iconProps}/>
      </TwitterShareButton>
      <LinkedinShareButton {...buttonProps}>
        <LinkedinIcon {...iconProps}/>
      </LinkedinShareButton>
    </div>
  )
}

const ContentSection = ({
  data
}) => {
  return (
    <section id='content' className={css.section}>
      <div className={css.grid}>
        <SocialSharing data={data}/>
        <div className={css.content}>
          <RichText html={data.content} isLongform={true}/>
        </div>
      </div>
    </section>
  )
}

export default ContentSection