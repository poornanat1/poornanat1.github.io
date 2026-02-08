import { useEffect, useState } from "react";

const headshot = new URL('../assets/95114d3562739b941ecdb2866a4039ff26b1c9b6.png', import.meta.url).href;

export default function App() {
  const [expandedExperiences, setExpandedExperiences] = useState<{ [key: string]: boolean }>({});

  const toggleExperience = (key: string) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    document.title = "Poorna - CV";
  }, []);

  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#D4BEB0',
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="max-w-7xl mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Sidebar */}
          <div className="md:col-span-5 bg-transparent pr-0 md:pr-12 pb-8 md:pb-0">
            {/* Large Name */}
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: '900',
                color: '#000',
                letterSpacing: '-0.04em',
                lineHeight: '0.9',
                marginBottom: '2rem'
              }}
            >
              Poorna
              <br />
              Natarajan
            </h1>

            {/* Contact Info */}
            <div className="mb-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/poorna-natarajan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-70 transition-opacity"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/poornanat1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:opacity-70 transition-opacity"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Title/Role */}
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '900',
                color: '#000',
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
                marginBottom: '3rem'
              }}
            >
              Machine Learning
              <br />
              Engineer
            </h2>

            {/* Photo */}
            <div className="mt-8 mb-8">
              <img
                src={headshot}
                alt="Poorna Natarajan"
                style={{
                  width: '100%',
                  maxWidth: '280px',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Bio */}
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#000',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}
              >
                I ship AI systems end-to-end in regulated environments, translating technical trade-offs into defensible decisions.
              </p>

              {/* Photography Button */}
              <div className="mt-4">
                <a
                  href="/photos.html"
                  className="hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#000',
                    textDecoration: 'underline',
                    fontWeight: '500'
                  }}
                >
                  Photography (past few years) →
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-7 bg-white bg-opacity-40 p-6 md:p-8">
            {/* Experience Section */}
            <div className="mb-8 pb-8" style={{ borderBottom: '2px solid #000' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '900',
                  color: '#000',
                  marginBottom: '0.75rem'
                }}
              >
                Experience
              </h3>
              <div className="space-y-5">
                {/* Latham & Watkins */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                        Senior Machine Learning Engineer
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                        Latham & Watkins
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ marginLeft: '1rem' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap' }}>
                        2025—now
                      </div>
                      <button
                        onClick={() => toggleExperience('latham')}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#000',
                          fontWeight: '700',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {expandedExperiences['latham'] ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedExperiences['latham'] && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#000', lineHeight: '1.5', fontWeight: '400', marginTop: '0.5rem' }}>
                      Architect and lead development of a full-stack enterprise AI legal research platform with sub-second semantic search. Develop agent-based architecture to orchestrate reasoning across structured/unstructured legal data.
                    </p>
                  )}
                </div>

                {/* Palantir */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                        Deployment Strategist
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                        Palantir Technologies
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ marginLeft: '1rem' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap' }}>
                        2024—2025
                      </div>
                      <button
                        onClick={() => toggleExperience('palantir')}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#000',
                          fontWeight: '700',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {expandedExperiences['palantir'] ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedExperiences['palantir'] && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#000', lineHeight: '1.5', fontWeight: '400', marginTop: '0.5rem' }}>
                      Led architecture and deployment of IL5-accredited, LLM-integrated enterprise platforms, building a 0→1 GenAI system that reduced U.S. Air Force job classification cycles from months to minutes.
                    </p>
                  )}
                </div>

                {/* SMX */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                        Machine Learning Engineer
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                        SMX
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ marginLeft: '1rem' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap' }}>
                        2022—2024
                      </div>
                      <button
                        onClick={() => toggleExperience('smx')}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#000',
                          fontWeight: '700',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {expandedExperiences['smx'] ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedExperiences['smx'] && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#000', lineHeight: '1.5', fontWeight: '400', marginTop: '0.5rem' }}>
                      Architected large-scale unstructured data pipelines and LLM-powered extraction systems, delivering a 92%-F1 active-learning NER platform and GPU-accelerated inference in production.
                    </p>
                  )}
                </div>

                {/* Deloitte */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                        Senior Consultant
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                        Deloitte
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ marginLeft: '1rem' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap' }}>
                        2019—2022
                      </div>
                      <button
                        onClick={() => toggleExperience('deloitte')}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#000',
                          fontWeight: '700',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {expandedExperiences['deloitte'] ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedExperiences['deloitte'] && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#000', lineHeight: '1.5', fontWeight: '400', marginTop: '0.5rem' }}>
                      Delivered cloud-native analytics and ML platforms for federal clients, including real-time COVID-19 operations for the White House and data systems supporting Air Force contract wins.
                    </p>
                  )}
                </div>

                {/* Booz Allen */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                        Data Scientist
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                        Booz Allen Hamilton
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ marginLeft: '1rem' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap' }}>
                        2018—2019
                      </div>
                      <button
                        onClick={() => toggleExperience('booz')}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.875rem',
                          color: '#000',
                          fontWeight: '700',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {expandedExperiences['booz'] ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedExperiences['booz'] && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#000', lineHeight: '1.5', fontWeight: '400', marginTop: '0.5rem' }}>
                      Built NLP and time-series forecasting systems across nationwide healthcare and defense environments, enabling patient safety monitoring and proactive operational risk mitigation.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-8 pb-8" style={{ borderBottom: '2px solid #000' }}>
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '900',
                  color: '#000',
                  marginBottom: '0.75rem'
                }}
              >
                Education
              </h3>
              <div className="space-y-4">
                {/* Georgia Tech */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                      M.S. in Computer Science
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                      Georgia Institute of Technology
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                    2026
                  </div>
                </div>

                {/* University of Maryland */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: '700', color: '#000' }}>
                      B.S. in Bioengineering, B.A. in Economics
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000' }}>
                      University of Maryland
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                    2015
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-0">
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '900',
                  color: '#000',
                  marginBottom: '0.75rem'
                }}
              >
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '700', color: '#000', marginBottom: '0.25rem' }}>
                    Machine Learning & GenAI
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', lineHeight: '1.5' }}>
                    RAG/CAG<br />
                    Agentic Systems<br />
                    Embeddings<br />
                    Fine-Tuning (SFT)<br />
                    LLM Evaluation<br />
                    ONNX Runtime
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '700', color: '#000', marginBottom: '0.25rem' }}>
                    Backend & Data
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', lineHeight: '1.5' }}>
                    Python<br />
                    FastAPI<br />
                    Airflow<br />
                    PostgreSQL<br />
                    ChromaDB<br />
                    Elasticsearch
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '700', color: '#000', marginBottom: '0.25rem' }}>
                    Cloud & Platforms
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: '400', color: '#000', lineHeight: '1.5' }}>
                    Azure<br />
                    AWS<br />
                    Docker<br />
                    Kubernetes<br />
                    CUDA<br />
                    LangChain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
