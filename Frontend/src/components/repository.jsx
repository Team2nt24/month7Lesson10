/* eslint-disable react/prop-types */



function Repository({data, search}) {

  return (
    <div className="repos">
    {/* <h1> {data.login}</h1> */}
    <div className="profil-box">
      <img className="avatar-url" src={data.avatar_url} alt="" />
   <p className="login">{data.login}</p>
 <button className="profil-btn">edit profil</button>
<div className="follow-box">
  <div className="followers">
   <p>{data.followers}</p>
  <p className="followers-p">followers</p>
</div>

  {/* <img src={data.followers_url} alt="" /> */}
  <div className="followers">
   <p>{data.following}</p>
  <p className="followers-p">following</p>
</div>
</div>
    </div>




<div className="repos2">
<input className="inpt" type="text" placeholder="Find a repository"onChange={(e)=>search(e.target.value)}/>
<select className="types-selected"  id="asdaf">
    <option value="1">Type</option>
    <option value="2">All</option>
    <option value="3" >public</option>
    <option value="4">Private</option>
      <option value="5">Sources</option>
    <option value="6" >Forks</option>
    <option value="7">Archived</option>
</select>
<select className="types-selected1" id="ddlViewBy">
    <option value="1">language</option>
    <option value="2" >All</option>
    <option value="3">JavaScript</option>
    <option value="4" >HTML</option>
    <option value="5">SCSS</option>
    <option value="6" >CSS</option>

  </select>
  <select className="types-selected2" id="ddlViewBy">
    <option value="1">Sort</option>
    <option value="2" >Last update</option>
    <option value="3">Name</option>
    <option value="4" >Stars</option>

  </select>

<button className="new_btn">New</button>
</div>




   {/* <p>{ data.bio}</p>
  <p>{data.blog}</p>
  <p>{data.company}</p>
  <h1>{data.created_at}</h1>
  <p>{data.email}</p> */}
  {/* <img src={data.events_url} alt="" /> */}
  {/* <div style={{background:"red"}}> */}


    {/* <img src={data.following_url} alt="" /> */}

  {/* </div><img src={data.gists_url
} alt="" />
<p>{data.gravatar_id
}</p>
<p>{data.hireable}</p> */}
{/* <img style={} src={data.html_url} alt="" /> */}
{/* <p>{data.id}</p> */}
{/* <p>{data.location}</p>
<h2>{data.login}</h2>
<p>{data.name}</p>
<p>{data.node_id}</p>
<img src={data.organizations_url} alt="" />
<p>{data.public_gists}</p>
<p>{data.public_repos}</p>
<img src={data.received_events_url} alt="" />
<img src={data.received_events_url} alt="" />
<img src={data.repos_ur} alt="" />
<p>{data.site_admin}</p>
<img src={data.starred_url} alt="" />
<img src={data.subscriptions_url} alt="" />
<p>{data.twitter_username}</p> */}
    </div>
  )
}

export default Repository