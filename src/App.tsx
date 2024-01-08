import './App.css'

function LoginLink({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return (
      <a href="https://api.instagram.com/oauth/authorize?client_id=909105997317927&redirect_uri=https%3A%2F%2Flocalhost%3A5173%2F&scope=user_profile,user_media&response_type=code">login</a>
    )
  } else {
    return null
  }
}

function Foo({ code }: { code: string | null }) {
  if (code) {
    return (
      <h1>
        {code}
      </h1>
    )
  } else {
    return null;
  }
}

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  return (
    <>
      <h1>Vite + React</h1>
      <LoginLink isLoggedIn={!code} />
      <Foo code={code} />
    </>
  )
}

export default App
