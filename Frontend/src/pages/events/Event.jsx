import React from 'react'

export default function Event({ actor, repo, created_at, type }) {

  return (
    <div className='event__box'>
      <div className='event__box-top'>
        <img src={actor.avatar_url} className='event__box-avatar' />
        <h3>{actor.login}</h3>
        <p className='event__box-type'>
          {type === "CreateEvent" || type === "MemberEvent" || type === "CommitCommentEvent" ? "created a repository" : ""} 
          {type === "ForkEvent" ? "forked a repository" : ''}
          {type === "WatchEvent" ? "starred a repository" : ''}
          {type === "DeleteEvent" ? "deleted a repository" : ''}
          {type === "PushEvent" ? "pushed to a repository" : ''}
          {type === "ReleaseEvent" ? "released a repository" : ''}
          {type === "GollumEvent" ? "updated a repository" : ''}
          {type === "PullRequestEvent" ? "pull request a repository" : ''}
          {type === "IssueCommentEvent" ? "" : ''}
          {type === "PublicEvent" ? "" : ''}

        </p>
      </div>

      <div className='event__box-bottom'>
        <img src={actor.avatar_url} />
        <a href={`https://github.com/${repo.name}`} >
          {repo.name}
        </a>
      </div>
    </div>
  )
}
