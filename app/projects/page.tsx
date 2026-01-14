import Link from 'next/link'
import '../globals.css'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      tech: 'Next.js, TypeScript, Stripe, MongoDB',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: 'React, Node.js, Socket.io, PostgreSQL',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple locations.',
      tech: 'Next.js, Weather API, Tailwind CSS',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management.',
      tech: 'Next.js, MDX, Prisma, Vercel',
    },
  ]

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
            <h1 className="sectionTitle">My Projects</h1>
            <div className="grid">
              {projects.map((project, index) => (
                <div key={index} className="card">
                  <h3 className="cardTitle">{project.title}</h3>
                  <p className="cardDescription" style={{ marginBottom: '1rem' }}>
                    {project.description}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                    {project.tech}
                  </p>
                </div>
              ))}
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

