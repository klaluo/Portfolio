import Link from 'next/link'
import './globals.css'

export default function Home() {
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
            <div className="sectionContent" style={{ textAlign: 'center' }}>
              <h1 className="sectionTitle">Welcome to My Portfolio</h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#666' }}>
                I'm a developer passionate about creating amazing web experiences
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/projects" className="button">View My Work</Link>
                <Link href="/contact" className="button" style={{ background: '#333' }}>Get In Touch</Link>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="sectionContent">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Featured Skills</h2>
              <div className="grid">
                <div className="card">
                  <h3 className="cardTitle">Frontend Development</h3>
                  <p className="cardDescription">
                    Building responsive and interactive user interfaces with modern frameworks and libraries.
                  </p>
                </div>
                <div className="card">
                  <h3 className="cardTitle">Backend Development</h3>
                  <p className="cardDescription">
                    Creating robust server-side applications and APIs with best practices and scalability in mind.
                  </p>
                </div>
                <div className="card">
                  <h3 className="cardTitle">Full Stack Solutions</h3>
                  <p className="cardDescription">
                    End-to-end development from concept to deployment, ensuring seamless user experiences.
                  </p>
                </div>
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

