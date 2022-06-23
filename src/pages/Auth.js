export default function Auth() {
  return (
    <form className="Auth">
      <label className="label">
        Email:
        <input type="email" name="email" />
      </label>
      <hr />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <hr />
      <button className="sign-btn-in">Sign in</button>
      <button className="sign-btn-up">Sign up</button>
    </form>
  );
}
