import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Scarlett's Quant Interview Hub"
      description="A curated guide for quant interviews">
      <main style={{padding: '2rem 1rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓 Scarlett's Quant Interview Hub</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2.5rem'}}>Select a section below to begin preparing:</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {sections.map(({title, emoji, link, description}) => (
            <Link
              key={link}
              to={link}
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                padding: '1.5rem',
                textDecoration: 'none',
                backgroundColor: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              <h2>{emoji} {title}</h2>
              <p style={{color: '#444'}}>{description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}

const sections = [
  {
    title: 'Quant Questions',
    emoji: '📊',
    link: '/docs/questions',
    description: 'Math, brainteasers, and probability questions.',
  },
  {
    title: 'Learning',
    emoji: '📚',
    link: '/docs/learning',
    description: 'Notes, concepts, and tutorials.',
  },
  {
    title: 'Coding',
    emoji: '💻',
    link: '/docs/coding',
    description: 'Python, Leetcode-style problems and solutions.',
  },
  {
    title: 'Machine Learning',
    emoji: '🤖',
    link: '/docs/machine-learning',
    description: 'ML theory & application in quant roles.',
  },
  {
    title: 'Soft Questions',
    emoji: '💬',
    link: '/docs/soft',
    description: 'Behavioral & communication interview prep.',
  },
  {
    title: 'Contact',
    emoji: '📩',
    link: '/contact',
    description: 'Reach out for collaboration or feedback.',
  },
];