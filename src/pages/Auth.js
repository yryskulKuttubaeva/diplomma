import { useDispatch } from "react-redux";
import { start } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
    }));
    navigate('/');
  }

  return (
    <form onSubmit={onAuthStart}>
      <label className="label">
        Email:
        <input className="label1" type="email" name="email" />
      </label>
      <label className="label">
        Password:
        <input className="label1" type="password" name="password" />
      </label>

      <button className="button1">Sign in</button>
      <button className="button1" >Sign up</button>
    </form>
  );
}


// export default function Auth() {
//   return (
//     <form className="Auth">
//       <label className="label">
//         Email:
//         <input className="label1"  type="email" name="email" />
//       </label>
//       <hr />
//       <label>
//         Password:
//         <input className="label1"type="password" name="password" />
//       </label>
//       <hr />
//       <button className="sign-btn-in">Sign in</button>
//       <button className="sign-btn-up">Sign up</button>
//     </form>
//   );
// }
