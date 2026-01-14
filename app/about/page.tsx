import Link from 'next/link'
import '../globals.css'

export default function About() {
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
              <h1 className="sectionTitle">About Me</h1>
              <div className="card">
                <p className="cardDescription" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Hello! I'm a passionate developer with a love for creating beautiful and functional web applications.
                  I enjoy solving complex problems and turning ideas into reality through code.
                </p>
                <p className="cardDescription" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  With experience in modern web technologies, I focus on writing clean, maintainable code and
                  building user-friendly interfaces that provide exceptional user experiences.
                </p>
                <p className="cardDescription" style={{ fontSize: '1.1rem' }}>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                Skills & Technologies
              </h2>
              <div className="grid">
                <div className="card">
                  <h3 className="cardTitle">Languages</h3>
                  <p className="cardDescription">
                    JavaScript, TypeScript, Python, HTML, CSS
                  </p>
                </div>
                <div className="card">
                  <h3 className="cardTitle">Frameworks</h3>
                  <p className="cardDescription">
                    React, Next.js, Node.js, Express
                  </p>
                </div>
                <div className="card">
                  <h3 className="cardTitle">Tools</h3>
                  <p className="cardDescription">
                    Git, VS Code, Docker, AWS, Vercel
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

