import Link from 'next/link'
import '../globals.css'

export default function Contact() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Portfolio</h1>
          <ul className="navLinks">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <section className="section">
            <div className="sectionContent">
              <h1 className="sectionTitle">Get In Touch</h1>
              <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#666' }}>
                I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just to say hello.
              </p>

              <div className="grid" style={{ marginBottom: '3rem' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <h3 className="cardTitle">Email</h3>
                  <p className="cardDescription">
                    your.email@example.com
                  </p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                  <h3 className="cardTitle">LinkedIn</h3>
                  <p className="cardDescription">
                    linkedin.com/in/yourprofile
                  </p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                  <h3 className="cardTitle">GitHub</h3>
                  <p className="cardDescription">
                    github.com/yourusername
                  </p>
                </div>
              </div>

              <div className="form">
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
                  Send a Message
                </h2>
                <form>
                  <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" className="button" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

