type textDescriptionI = {
  text: string;
  title: string;
};

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
    text: textDescriptionI[];
  };
  video: {
    src: string;
    config: any;
  };
  imageSrc: string;
  imageCallback: any;
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
          {...props.imageCallback}
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
            {props.textDescription.text.map(({ title, text }, index) => {
              const textClassName = `${props.classes.text + (index + 1)} ${
                props.classes.text
              }`;
              const textTitleClassName = `${
                props.classes.textTitle + (index + 1)
              } ${props.classes.textTitle}`;
              return (
                <>
                  <p
                    key={index}
                    className={textTitleClassName}
                    style={props.styles.text}
                  >
                    {title}
                  </p>
                  <p
                    key={index + "t"}
                    className={textClassName}
                    style={props.styles.text}
                  >
                    {text}
                  </p>
                </>
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
