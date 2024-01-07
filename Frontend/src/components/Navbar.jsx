import React from 'react'
import './Navbar.scss'
import gitHubLogo from './../images/GitHub_Invertocat_Logo.svg'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="nav">
                <div className="hero">
                    <div className="hero-logo">
                        <button className='hero-menu-btn button'>
                            <i className='bx bx-menu'></i>
                        </button>
                        <img src={gitHubLogo} alt="" />
                        <button className='hero-dashboard-btn button'>Dashboard</button>
                    </div>

                    <div className="hero-list">
                        <div className="search-card">
                        <i className='bx bx-search' ></i>
                        <button className='search-card-btn button'><p>Type <span><i className='bx bx-bracket' ></i></span>to search</p><hr />
                        {/* <button className='bx-library-btn'>
                        <i className='bx bx-library'></i>
                        </button> */}
                        </button>
                        </div>
                    </div>

                    <div className="hr"></div>

                    <button className="select-option-new-card">
                    <i className='bx bx-plus' ></i>
                    <i className='bx bxs-down-arrow'></i>
                    </button>

                    <button className='lssues'>
                    <i className='bx bx-disc' ></i>
                    </button>

                    <button className='pull-requests'>
                    <i className='bx bx-git-pull-request' ></i>
                    </button>

                    <button className='notificitions'>
                    <i className='bx bx-hdd'></i>
                    </button>

                    <button className='profile-pic'>
                        <img className='profile-pic-img' src="" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar