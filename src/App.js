import "./styles.css";

export default function App() {
  return (
    <body>
      <div class="wrapper">
        <section class="left">
          <img class="logo" src="/Porikkha logo.png" alt="" />
          <div class="question">
        
              New User?
          
          </div>
          <div class="btn">
            <button class="join" type="submit">
              Sign Up
            </button>
          </div>
        </section>
        <section class="right">
          <div>
            <h2 class="signIn">Sign In</h2>
          </div>
          <form action="post">
            <div class="input-box">
              <input class="name" type="text" placeholder="Name" required />
            </div>
            <div>
              <input class="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <input
                class="phnNo"
                type="tel"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div>
              <input
                class="pass"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button class="btnSignIn" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </section>
      </div>
    </body>
  );
}
