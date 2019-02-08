import jss from "jss";
import injectSheet from "react-jss";

const styles = {
  p: {
    color: 'green'
  }
}

const Paragraph = ({classes, children}) => (
  <p className={classes.p}/>
)

export default injectSheet(styles)(Paragraph)
