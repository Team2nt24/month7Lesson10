
import { useGlobalContext } from '../context'

export default function LoginPage() {
    const {username,  errorMessage, handleUsernameChange, handleFormSubmit, signOut} = useGlobalContext()
  return (
    <div>
         <h1>GitHub Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="name" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        {/* <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label> */}
        {/* <br /> */}
        <button type="submit">Login</button>
          <br /> <br />
        <button onClick={() => signOut()}> Sign Out </button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  )
}
