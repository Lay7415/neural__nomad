import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

type Props = {
  classes: any;
  variant: any;
  styles: any;
  buttonDescription: {
    text: string;
    callbacks: any;
  };
  textDescription: {
    title: string;
    text: string;
  };
  video: {
    src: string;
    config: any;
  };
  imageSrc: string;
};

const Banner = (props: Props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const conditionalImageOderVideoRender = () => {
    if (props.video.src) {
      return (
        <motion.video
          variants={props.variant.video}
          initial="hidden"
          animate={control}
          className={props.classes.video}
          style={props.styles.video}
          {...props.video.config}
          src={props.video.src}
        ></motion.video>
      );
    } else if (props.imageSrc) {
      return (
        <motion.img
          variants={props.variant.image}
          initial="hidden"
          animate={control}
          className={props.classes.image}
          style={props.styles.image}
          src={props.imageSrc}
          loading="lazy"
        />
      );
    }
  };

  const conditionalButtonRender = () => {
    if (props.buttonDescription.text) {
      return (
        <motion.button
          variants={props.variant.button}
          initial="hidden"
          animate={control}
          className={props.classes.button}
          style={props.styles.button}
          {...props.buttonDescription.callbacks}
        >
          {props.buttonDescription.text}
        </motion.button>
      );
    }
  };
  return (
    <motion.div
      variants={props.variant.container}
      initial="hidden"
      animate={control}
      ref={ref}
      className={props.classes.container}
      style={props.styles.container}
    >
      <div
        className={props.classes.contentContainer}
        style={props.styles.contentContainer}
      >
        <motion.h1
          variants={props.variant.title}
          initial="hidden"
          animate={control}
          className={props.classes.title}
          style={props.styles.title}
        >
          {props.textDescription.title}
        </motion.h1>

        <motion.p
          variants={props.variant.text}
          initial="hidden"
          animate={control}
          className={props.classes.text}
          style={props.styles.text}
        >
          {props.textDescription.text}
        </motion.p>
        {conditionalButtonRender()}
      </div>
      {conditionalImageOderVideoRender()}
    </motion.div>
  );
};

export default Banner;
