import React from 'react'

const defaultTrustBadge = {
  text: 'Trusted by forward-thinking teams.',
  icons: ['✨'],
}

const defaultHeadline = {
  line1: 'Launch Your',
  line2: 'Workflow Into Orbit',
}

const defaultButtons = {
  primary: { text: 'Get Started for Free', onClick: () => {} },
  secondary: { text: 'Explore Features', onClick: () => {} },
}

const AnimatedShaderHero = ({
  trustBadge = defaultTrustBadge,
  headline = defaultHeadline,
  subtitle = 'Supercharge productivity with AI-powered automation and integrations built for the next generation of teams — fast, seamless, and limitless.',
  buttons = defaultButtons,
  className = '',
}) => {
  const primaryButton = buttons?.primary ?? defaultButtons.primary
  const secondaryButton = buttons?.secondary ?? defaultButtons.secondary

  return (
    <>
      <style>{`
        @keyframes drift {
          0% { transform: scale(1) translate3d(0, 0, 0); }
          50% { transform: scale(1.08) translate3d(-12px, 8px, 0); }
          100% { transform: scale(1) translate3d(0, 0, 0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(212, 169, 89, 0.3); }
          50% { box-shadow: 0 0 30px rgba(212, 169, 89, 0.45); }
        }
      `}</style>

      <section
        className={className}
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center',
          background: '#0d0907',
          color: '#f8f3ee',
          fontFamily: 'sans-serif',
          borderBottom: '1px solid rgba(214, 170, 90, 0.2)',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(0.75) contrast(1.15) brightness(0.7)',
            opacity: 0.9,
          }}
        >
          <source src='https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080.mp4' type='video/mp4' />
        </video>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(12,9,7,0.82) 0%, rgba(12,9,7,0.7) 32%, rgba(12,9,7,0.48) 58%, rgba(12,9,7,0.72) 100%), radial-gradient(circle at 70% 30%, rgba(212,169,89,0.18), transparent 22%), linear-gradient(135deg, rgba(27,17,12,0.7), rgba(7,6,5,0.6))',
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: '7%',
            top: '12%',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 215, 141, 0.25)',
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,250,237,0.8), rgba(255,214,126,0.25) 15%, rgba(166,119,45,0.2) 40%, rgba(24,18,13,0.2) 70%)',
            boxShadow: '0 0 50px rgba(212,169,89,0.18)',
            animation: 'pulseGlow 4s ease-in-out infinite',
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: '12%',
            bottom: '12%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 228, 170, 0.18)',
            background:
              'radial-gradient(circle at 35% 35%, rgba(255,236,175,0.7), rgba(196,147,72,0.55) 18%, rgba(121,83,32,0.2) 48%, rgba(18,10,6,0.1) 100%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '0.65rem 1rem',
                border: '1px solid rgba(255, 216, 140, 0.24)',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                color: '#f1d9a4',
                fontSize: '0.82rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ display: 'inline-flex', gap: '0.4rem' }}>
                {trustBadge?.icons?.map((icon, index) => (
                  <span key={`${icon}-${index}`}>{icon}</span>
                ))}
              </span>
              <span>{trustBadge?.text || defaultTrustBadge.text}</span>
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(3rem, 6vw, 5.8rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.06em',
                fontWeight: 700,
                color: '#fff8ef',
              }}
            >
              <div>{headline?.line1 || defaultHeadline.line1}</div>
              <div style={{ color: '#d5a657' }}>{headline?.line2 || defaultHeadline.line2}</div>
            </h1>

            <p
              style={{
                maxWidth: '560px',
                marginTop: '1.4rem',
                color: 'rgba(246, 235, 224, 0.8)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              {subtitle}
            </p>

            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                type='button'
                onClick={primaryButton?.onClick}
                style={{
                  border: 'none',
                  borderRadius: '999px',
                  padding: '1rem 1.6rem',
                  background: 'linear-gradient(135deg, #d8b05c, #b98630)',
                  color: '#1b120b',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(184, 134, 48, 0.35)',
                }}
              >
                {primaryButton?.text || defaultButtons.primary.text}
              </button>

              <button
                type='button'
                onClick={secondaryButton?.onClick}
                style={{
                  border: '1px solid rgba(255, 241, 214, 0.32)',
                  borderRadius: '999px',
                  padding: '1rem 1.6rem',
                  background: 'transparent',
                  color: '#f8f3ee',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                }}
              >
                {secondaryButton?.text || defaultButtons.secondary.text}
              </button>
            </div>
          </div>

          <div
            style={{
              flex: '0 0 420px',
              minHeight: '420px',
              borderRadius: '28px',
              border: '1px solid rgba(255, 218, 144, 0.18)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02)), rgba(14,11,9,0.38)',
              boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(212,169,89,0.18), rgba(255,255,255,0.04) 30%, rgba(0,0,0,0.1) 100%)',
              }}
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(0.9) contrast(1.1) brightness(0.8)',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, #2b1e17, #100d0b)',
              }}
            >
              <source src='https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080.mp4' type='video/mp4' />
            </video>

            <div
              style={{
                position: 'absolute',
                inset: '18px',
                borderRadius: '22px',
                border: '1px solid rgba(255,215,141,0.18)',
                background: 'linear-gradient(180deg, rgba(9,9,9,0.08), rgba(9,9,9,0.32))',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '26px',
                transform: 'translateX(-50%)',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                overflow: 'hidden',
                background:
                  'radial-gradient(circle at 38% 30%, #fff9ec 0%, #f9e39e 10%, #e3be60 22%, #c38a35 40%, #976525 62%, #4a2d15 100%)',
                border: '8px solid rgba(245, 220, 156, 0.35)',
                boxShadow: '0 0 40px rgba(212,169,89,0.25), inset 0 0 18px rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '12px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.5)',
                  boxShadow: 'inset 0 0 12px rgba(255,255,255,0.3)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 50% 50%, transparent 0%, transparent 58%, rgba(62,42,20,0.2) 72%, rgba(21,14,10,0.42) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AnimatedShaderHero
