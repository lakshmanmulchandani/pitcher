import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "lighten",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "500px",
    // width: "50%",
    // minWidth: "300px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    width: "30%",
    minWidth: "300px",
    height: "500px",
    position: "relative",
    background: "#ffffff1a",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    border: " 1px solid rgba(255, 255, 255, 0.5)",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",

    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    color: "#fff",
  },
  about: {
    color: " rgba(255, 255, 255, 0.5)",
  },
  details: {
    color: " rgba(255, 255, 255, 0.5)",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
