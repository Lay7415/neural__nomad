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
  const conditionalImageOderVideoRender = () => {
    if (props.video.src) {
      return (
        <video
          className={props.classes.video}
          style={props.styles.video}
          {...props.video.config}
          src={props.video.src}
        ></video>
      );
    } else if (props.imageSrc) {
      return (
        <img
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
        <button
          className={props.classes.button}
          style={props.styles.button}
          {...props.buttonDescription.callbacks}
        >
          {props.buttonDescription.text}
        </button>
      );
    }
  };
  return (
    <div className={props.classes.container} style={props.styles.container}>
      <div
        className={props.classes.contentContainer}
        style={props.styles.contentContainer}
      >
        <h1 className={props.classes.title} style={props.styles.title}>
          {props.textDescription.title}
        </h1>

        <p className={props.classes.text} style={props.styles.text}>
          {props.textDescription.text}
        </p>
        {conditionalButtonRender()}
      </div>
      {conditionalImageOderVideoRender()}
    </div>
  );
};

export default Banner;
