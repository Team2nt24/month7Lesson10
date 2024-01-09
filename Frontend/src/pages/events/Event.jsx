import React from 'react'

export default function Event({ actor, repo, created_at }) {

  return (
    <div className='event__box'>
      <div className='event__box-top'>
        <img src={actor.avatar_url} className='event__box-avatar' />
        <h3>{actor.login}</h3>
      </div>

      <div className='event__box-bottom'>
        <img src={actor.avatar_url} />
        <a href='' >
          {repo.name}
        </a>
      </div>
    </div>
  )
}
