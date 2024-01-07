import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div>
         <a className="fa-brands fa-telegram"></a>
        <div className="footer">
         <div className='footer-logo'>
         <a href="https://github.com/" className="fa-brands fa-github"></a>
         <a href="https://github.com/">2024 GitHub, Inc</a>
         </div>
         <ul>
            <li><a href="https://github.blog/">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
            <li><a href="https://www.thegithubshop.com/">Shop</a></li>
            <li><a href="https://support.github.com/?tags=dotcom-footer">Contact GitHub</a></li>
            <li><a href="https://github.com/pricing">Pricing</a></li>
         </ul>
         <ul>
            <li><a href="https://docs.github.com/en">API</a></li>
            <li><a href="https://github.com/services/">Training</a></li>
            <li><a href="https://www.githubstatus.com/">Status</a></li>
            <li><a href="https://github.com/security">Security</a></li>
         </ul>
         <ul>
            <li><a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a></li>
            <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a></li>
            <li><a href="https://docs.github.com/en">Docs</a></li>
        </ul>
        </div>
    </div>
  )
}
