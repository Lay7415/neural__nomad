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
    text: string[];
  };
  video: {
    src: string;
    config: any;
  };
  imageSrc: string;
};

const BannerTextList = (props: Props) => {
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
      ref={ref} 
      variants={props.variant.container}
      initial="hidden"
      animate={control}
      className={props.classes.container}
      style={props.styles.container}
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
      <div
        className={props.classes.contentContainer}
        style={props.styles.contentContainer}
      >
        <div
          className={props.classes.informationContainer}
          style={props.styles.informationContainer}
        >
          <div
            className={props.classes.textContainer}
            style={props.styles.textContainer}
          >
            {props.textDescription.text.map((item, index) => {
              const itemClassName = `${props.classes.text + (index + 1)} ${
                props.classes.text
              }`;
              return (
                <motion.p
                  variants={props.variant.text}
                  initial="hidden"
                  animate={control}
                  key={index}
                  className={itemClassName}
                  style={props.styles.text}
                >
                  {item}
                </motion.p>
              );
            })}
          </div>
          {conditionalButtonRender()}
        </div>
        {conditionalImageOderVideoRender()}
      </div>
    </motion.div>
  );
};

export default BannerTextList;
