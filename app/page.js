
export default function HomePage() {
  return (
    <main className="page">
      <div className="card">
        <h1>Velvet Choice</h1>
        <p className="tagline">Steamy interactive love stories.</p>

        <div className="story">
          <h2>Chapter 1</h2>
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

          <h2>Chapter 2</h2>
          <p>
            He takes the envelope from your hand, his fingers brushing yours
            just long enough to make your pulse jump.
          </p>

          <p>
            “You don’t belong in a place like this,” he says, studying you.
            “And yet somehow, you fit here better than anyone I’ve met.”
          </p>

          <p>
            The city glows behind him. You should answer. You should say
            something clever. Instead, all you can think about is how close he is.
          </p>
        </div>

        <div className="choices">
          <button className="freeButton">Continue reading free</button>

          <a
            href="https://buy.stripe.com/test_14AbIU8Kg3Pp3AngxQgA801"
            target="_blank"
            rel="noopener noreferrer"
            className="lockedButton"
          >
            🔒 Unlock Chapter 3 — $5/month
          </a>
        </div>

        <p className="small">Read the first two chapters free. Cancel anytime.</p>
      </div>
    </main>
  )
}
