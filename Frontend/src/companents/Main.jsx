export default function Main(){
    return(
        <div className="main">
        <h1 className="main_text">Latest changes</h1>
        <div className="div">
          <h2 className="main_text-one">Yesterday</h2>
          <a
            className="main_link"
            href="https://github.blog/changelog/2024-01-05-you-can-pick-your-account-during-device-flow-login/"
          >
            You can pick your account during device flow login
          </a>
        </div>
        <div className="div2">
          <h2 className="main_text-one">2 weeks ago</h2>
          <a
            className="main_link"
            href="https://github.blog/changelog/2023-12-21-canva-is-now-a-github-secret-scanning-partner/"
          >
            Canva is now a GitHub secret scanning partner
          </a>
        </div>
        <div className="div3">
          <h2 className="main_text-one">2 weeks ago</h2>
          <a
            className="main_link"
            href="https://github.blog/changelog/2023-12-21-codespaces-host-image-upgrades-docker-and-compose/"
          >
            Codespaces host image upgrades Docker and compose
          </a>
        </div>
        <div className="div4">
          <h2 className="main_text-one">2 weeks ago</h2>
          <a
            className="main_link"
            href="https://github.blog/changelog/2023-12-21-codespaces-host-image-upgrades-docker-and-compose/"
          >
            Code scanning is now more adaptable to your codebase with CodeQL threat model settings for Java (beta)
          </a>
        </div>
        <a className="main_a" href="">View changelog →</a>
      </div>
    )
}