import "./startPage.scss"

export default function StartPage() {
  return (
    <div className="start-page-wrapper">
      <h1>Unlimited movies, TV shows, and more</h1>
      <div className="line-1">
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <div className="line-2">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <form action="">
        <div className="sign-up-block">
          <div className="sign-up-input">
            <input type="text" placeholder="Email address" required />
          </div>
          <div className="get-start-btn">
            <button type="submit">Get Started </button>
          </div>
        </div>
          </form>
      </div>
      
      
  );
}
