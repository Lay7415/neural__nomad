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
      <h1 className={props.classes.title} style={props.styles.title}>
        {props.textDescription.title}
      </h1>
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
                <p
                  key={index}
                  className={itemClassName}
                  style={props.styles.text}
                >
                  {item}
                </p>
              );
            })}
          </div>
          {conditionalButtonRender()}
        </div>
        {conditionalImageOderVideoRender()}
      </div>
    </div>
  );
};

export default BannerTextList;
