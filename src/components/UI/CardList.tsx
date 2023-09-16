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
  cards: any[];
  ChildComponent: any;
};

const CardList = (props: Props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  console.log(typeof props.cards, typeof props.ChildComponent, "CardList 18");
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
      <motion.p
        variants={props.variant.text}
        initial="hidden"
        animate={control}
        className={props.classes.text}
        style={props.styles.text}
      >
        {props.textDescription.text}
      </motion.p>
      <div
        className={props.classes.cardContainer}
        style={props.styles.cardContainer}
      >
        {props.cards.map((item, index) => {
          return <props.ChildComponent key={index} {...item} />;
        })}
      </div>
      {conditionalButtonRender()}
    </motion.div>
  );
};

export default CardList;
