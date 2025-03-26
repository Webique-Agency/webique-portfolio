import {motion} from 'framer-motion';
import React, {ReactNode} from 'react';

export default function Inner({children}: { children: ReactNode }) {

  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
    }
  }

  const opacity = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    exit: {
      opacity: 1
    }
  }

  return (
      <motion.div {...anim(opacity)}>
        {children}
      </motion.div>
  );
}
