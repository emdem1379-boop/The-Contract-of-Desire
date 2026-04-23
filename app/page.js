
export default function HomePage() {
  return (
    <main className="page">
      <div className="card">
        <h1>Velvet Choice</h1>
        <p className="tagline">Steamy interactive love stories.</p>

        <div className="story">
          <p>
            You step into the penthouse office expecting a routine delivery.
            Instead, his eyes meet yours like he has been expecting you all along.
          </p>

          <p>
            “Most people knock,” he says softly.
          </p>

          <p>
            You should leave. You know you should. But something in his voice
            makes staying feel dangerous in exactly the right way.
          </p>
        </div>

        <div className="choices">
          <button className="freeButton">A) Keep it professional</button>

          <a
            href="https://buy.stripe.com/test_14AbIU8Kg3Pp3AngxQgA801"
            target="_blank"
            rel="noopener noreferrer"
            className="lockedButton"
          >
            🔒 Unlock the next chapter — $5/month
          </a>
        </div>

        <p className="small">Monthly subscription. Cancel anytime.</p>
      </div>
    </main>
  )
}
