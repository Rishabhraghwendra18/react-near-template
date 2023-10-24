import './signInButton.css';

function SignInButton({onClick=()=>{}}) {
  return (
    <button className='sign_in_btn' onClick={onClick}>Sign In</button>
  )
}

export default SignInButton;