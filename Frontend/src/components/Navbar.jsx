
import './Navbar.scss'
import gitHubLogo from './../images/GitHub_Invertocat_Logo.svg'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const {img,
         isOpen, 
         setIsOpen, 
         isOpenRight,
         setIsOpenRight,  
         isOpenSearchModal, 
         setIsOpenSearchModal,
         comandaPalette, 
         setComandaPalette,
         createNew, 
         setCreateNew,
         
        } = useGlobalContext();
  return (
    <div>
        <div className="navbar">
            <div className="nav">
                <div className="hero">
                    <div className="hero-logo">
                        <button
                        onClick={() =>setIsOpen(!isOpen)}
                        className='hero-menu-btn button'>
                            <i className='bx bx-menu'></i>
                        </button>
                        <img src={gitHubLogo} alt="" />
                        <button className='hero-dashboard-btn button'>Dashboard</button>
                    </div>

                    <div className="hero-list">
                        <div className="search-card">
                        <i className='bx bx-search' ></i>
                        <button onClick={() => setIsOpenSearchModal(!isOpenSearchModal)} className='search-card-btn button'><p>Type <span><i className='bx bx-bracket' ></i></span>to search</p><hr />
                        </button>
                        <button onClick={() => setComandaPalette(!comandaPalette)} className='bx-library-btn'>
                        <i className='bx bx-library'></i>
                        </button>
                        </div>
                    </div>

                    <div className="hr"></div>

                    <button onClick={() => setCreateNew(!createNew)} className="select-option-new-card">
                    <i className='bx bx-plus' ></i>
                    <i className='bx bxs-down-arrow'></i>
                    </button>

                    <a href='https://github.com/issues' className='lssues'>
                    <i className='bx bx-disc' ></i>
                   
                    </a>

                    <a href='https://github.com/pulls' className='pull-requests'>
                    <i className='bx bx-git-pull-request' ></i>
                    </a>

                    <a href='https://github.com/notifications' className='notificitions'>
                    <i className='bx bx-hdd'></i>
                    </a>

                    <button
                    onClick={() =>setIsOpenRight(!isOpenRight)} 
                    className='profile-pic'>
                        <img className='profile-pic-img' src={img} alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar