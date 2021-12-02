import { motion } from 'framer-motion';

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'circInOut',
  duration: 3,
};

function Work() {
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
      <div>Work</div>
    </motion.div>
  );
}

export default Work;
