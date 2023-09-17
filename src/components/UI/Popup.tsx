import { ReactNode } from "react";

type Props = {
  classes: any;
  variant: any;
  styles: any;
  children: ReactNode | string;
  isShow: boolean;
};

const Popup = (props: Props) => {
  const { classes, variant, styles, children, isShow } = props;
  return (
    <>
      {isShow && (
        <div
          {...variant}
          style={styles.container}
          className={classes.container}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Popup;
