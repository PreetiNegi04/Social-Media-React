const WelcomeMessage = () => {
  return (
    <center className = "welcomeMessage">
      <h1>Oops! no posts</h1>
      <button type="button" className="btn btn-primary">Get post from server</button>
    </center>
  );
}

export default WelcomeMessage;