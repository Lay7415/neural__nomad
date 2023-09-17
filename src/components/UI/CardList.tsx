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
  // console.log(typeof props.cards, typeof props.ChildComponent, "CardList 18");
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
      <p className={props.classes.text} style={props.styles.text}>
        {props.textDescription.text}
      </p>
      <div
        className={props.classes.cardContainer}
        style={props.styles.cardContainer}
      >
        {props.cards.map((item, index) => {
          return <props.ChildComponent key={index} {...item} />;
        })}
      </div>
      {conditionalButtonRender()}
    </div>
  );
};

export default CardList;
