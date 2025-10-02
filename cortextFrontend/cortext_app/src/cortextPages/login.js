export default function LoginPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login to CorText Dashboard</h1>
      <form>
        <label>
          Email:
          <input type="email" placeholder="you@example.com" />
        </label>
        <br /><br />
        <label>
          Password:
          <input type="password" placeholder="••••••••" />
        </label>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
