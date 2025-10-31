import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'President',
      image: 'https://i.pravatar.cc/300?img=12',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Full Stack Dev',
    },
    {
      name: 'Sarah Chen',
      role: 'Vice President',
      image: 'https://i.pravatar.cc/300?img=45',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'AI/ML Engineer',
    },
    {
      name: 'Marcus Johnson',
      role: 'Technical Lead',
      image: 'https://i.pravatar.cc/300?img=33',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Backend Architect',
    },
    {
      name: 'Emily Zhang',
      role: 'Events Coordinator',
      image: 'https://i.pravatar.cc/300?img=47',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Frontend Dev',
    },
    {
      name: 'David Park',
      role: 'Community Manager',
      image: 'https://i.pravatar.cc/300?img=52',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'DevOps',
    },
    {
      name: 'Lisa Anderson',
      role: 'Workshop Lead',
      image: 'https://i.pravatar.cc/300?img=48',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Mobile Dev',
    },
    {
      name: 'Ryan Martinez',
      role: 'Marketing Head',
      image: 'https://i.pravatar.cc/300?img=60',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'UI/UX Designer',
    },
    {
      name: 'Priya Sharma',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/300?img=49',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      specialty: 'Cloud Engineer',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 inline-block"
            style={{
              background: 'linear-gradient(135deg, #38bdf8, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Meet Our Team
          </motion.h1>

          {/* Orbiting Particles around title */}
          <div className="relative inline-block">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.8)',
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i / 6) * Math.PI * 2) * 100],
                  y: [0, Math.sin((i / 6) * Math.PI * 2) * 100],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mt-6"
          >
            The brilliant minds driving innovation and fostering a thriving coding community
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                y: -15,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.4 },
              }}
              className="card-3d group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="relative rounded-2xl overflow-hidden border border-cyan-400/20 group-hover:border-cyan-400/60 transition-all duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(56, 189, 248, 0.1)',
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/80 via-purple-500/50 to-transparent flex items-end justify-center pb-6 gap-4"
                  >
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/30"
                      style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/30"
                      style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Specialty Badge */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full glass border border-cyan-400/50 backdrop-blur-md flex items-center gap-2"
                    style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}
                  >
                    <Code2 size={14} className="text-cyan-400" />
                    <span className="text-xs font-medium">{member.specialty}</span>
                  </motion.div>
                </div>

                {/* Info Container */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-1 neon-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-purple-400 text-sm font-medium"
                    style={{
                      textShadow: '0 0 10px rgba(168, 85, 247, 0.6)',
                    }}
                  >
                    {member.role}
                  </motion.p>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                    className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mt-3"
                    style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}
                  />
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1), transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 rounded-full glass border border-cyan-400/50 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.3)',
            }}
          >
            <span className="text-xl font-semibold neon-text">Want to Join Our Team?</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;