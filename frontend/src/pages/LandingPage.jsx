import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Zap, Terminal, Cpu, Braces } from 'lucide-react';

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);

  useEffect(() => {
    // Auto-complete intro after 4 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    // Progress animation
    const interval = setInterval(() => {
      setIntroProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowIntro(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const clubName = 'Code With Us'.split('');

  const codeSnippets = [
    '{ innovation }',
    'const code = () => magic',
    'while(learning) { grow(); }',
    'function build() { return awesome; }',
    'import { future } from "tech"',
    'export default Success',
  ];

  return (
    <>
      {/* Cinematic Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
            onClick={() => setShowIntro(false)}
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Radial Glow */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"
            />

            {/* Central 3D Holographic Element */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Rotating 3D Cube/Logo */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative mb-12"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border-2 border-cyan-400/50 flex items-center justify-center relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 0 80px rgba(56, 189, 248, 0.6), inset 0 0 80px rgba(168, 85, 247, 0.3)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Code2 size={80} className="text-cyan-400" strokeWidth={1.5} />
                  </motion.div>

                  {/* Corner Accents */}
                  {[0, 90, 180, 270].map((rotation, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 border-t-2 border-l-2 border-cyan-400"
                      style={{
                        top: -2,
                        left: -2,
                        transform: `rotate(${rotation}deg)`,
                        boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                      }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>

                {/* Orbiting Icons */}
                {[Terminal, Cpu, Braces].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      x: [0, Math.cos((i / 3) * Math.PI * 2 + (Date.now() / 1000)) * 120],
                      y: [0, Math.sin((i / 3) * Math.PI * 2 + (Date.now() / 1000)) * 120],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.4,
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/40 to-cyan-500/40 backdrop-blur-sm border border-purple-400/50 flex items-center justify-center"
                      style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}
                    >
                      <Icon size={20} className="text-purple-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Code Snippets */}
              {codeSnippets.map((snippet, i) => (
                <motion.div
                  key={i}
                  className="absolute text-cyan-400/60 font-mono text-sm"
                  initial={{
                    x: Math.random() * window.innerWidth - window.innerWidth / 2,
                    y: Math.random() * window.innerHeight - window.innerHeight / 2,
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, (Math.random() - 0.5) * 200],
                    opacity: [0, 0.8, 0],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  {snippet}
                </motion.div>
              ))}

              {/* Loading Text Animation */}
              <motion.div className="text-center space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #a855f7, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px rgba(56, 189, 248, 0.5)',
                  }}
                >
                  Initializing Code With Us...
                </motion.h1>

                {/* Progress Bar */}
                <div className="w-80 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-cyan-400/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"
                    style={{
                      width: `${introProgress}%`,
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>

                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gray-400 text-sm"
                >
                  {introProgress < 30 && 'Connecting Innovators...'}
                  {introProgress >= 30 && introProgress < 60 && 'Loading Creative Minds...'}
                  {introProgress >= 60 && introProgress < 90 && 'Preparing Experience...'}
                  {introProgress >= 90 && 'Ready to Code!'}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-cyan-400/60 text-xs cursor-pointer hover:text-cyan-400 transition-colors"
                  onClick={() => setShowIntro(false)}
                >
                  Click or scroll to skip →
                </motion.p>
              </motion.div>

              {/* Particle System */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-cyan-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: '0 0 4px rgba(56, 189, 248, 0.8)',
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Scanning Lines */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            width: 4 + Math.random() * 4,
            height: 4 + Math.random() * 4,
            background: `rgba(${56 + Math.random() * 100}, ${189 + Math.random() * 50}, 248, 0.8)`,
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated 3D Logo */}
        <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(56, 189, 248, 0.6)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(34, 211, 238, 0.6)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Code2 size={80} className="text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Club Name with Letter Animation */}
        <div className="mb-6 flex justify-center flex-wrap gap-2">
          {clubName.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-6xl md:text-8xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #38bdf8, #a855f7, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
                display: 'inline-block',
              }}
              whileHover={{
                scale: 1.2,
                rotateZ: 5,
                transition: { duration: 0.3 },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Tagline with Glowing Underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-wider">
            <span className="glow-underline text-gray-300">One Club, Infinite Learning</span>
          </h2>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center gap-8 flex-wrap"
        >
          {[
            { icon: Sparkles, label: 'Innovate', color: 'cyan' },
            { icon: Code2, label: 'Code', color: 'purple' },
            { icon: Zap, label: 'Build', color: 'cyan' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.2 + i * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl glass cursor-pointer
                ${item.color === 'cyan' ? 'glow-cyan' : 'glow-purple'}`}
            >
              <item.icon size={32} className={`text-${item.color}-400`} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 3 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-cyan-400 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
              style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)' }}
            />
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default LandingPage;