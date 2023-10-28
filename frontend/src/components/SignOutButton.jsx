import './signOutButton.css';

function SignOutButton({onClick=()=>{},accountId}) {
  return (
    <button className='sign_out_btn' onClick={onClick}>{accountId}</button>
  )
}

export default SignOutButton;