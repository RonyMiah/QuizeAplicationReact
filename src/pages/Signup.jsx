import images from '../assets/images/signup.svg';
import Illustration from '../components/Illustration';
import SignupFormNormalWay from '../components/SignupFormNormalWay';
function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration images={images} />
        {/* <SignupForm /> */}
        {/* <SignupFormWithUseReducer /> */}
        <SignupFormNormalWay />
      </div>
    </>
  );
}

export default Signup;
