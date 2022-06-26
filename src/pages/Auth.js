export default function Auth() {
  return (
    <form className="Auth">
      <label className="label">
        Email:
        <input className="label1"  type="email" name="email" />
      </label>
      <hr />
      <label>
        Password:
        <input className="label1"type="password" name="password" />
      </label>
      <hr />
      <button className="sign-btn-in">Sign in</button>
      <button className="sign-btn-up">Sign up</button>
    </form>
  );
}
