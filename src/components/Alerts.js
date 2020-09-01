import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import { restartListProcess } from "../actions";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Alerts = () => {
  const dispatch = useDispatch();

  //listen to the list status to decide when to show the alerts
  const { listStatus } = useSelector((state) => {
    return {
      listStatus: state.list.status,
    };
  });

  //track the alert status locally, because they are "effects" only and should not control the list making flow
  const [showCompleteAlert, setShowCompleteAlert] = React.useState(false);
  const [showSubmitAlert, setShowSubmitAlert] = React.useState(false);

  React.useEffect(() => {
    //console.log("listComplete changed");
    if (listStatus === "complete") {
      setShowCompleteAlert(true);
    }
  }, [listStatus]);

  React.useEffect(() => {
    // console.log("listSubmitted changed");
    if (listStatus === "submitted") {
      setShowSubmitAlert(true);
    }
  }, [listStatus]);

  //make sure the alerts
  const handleListClose = () => {
    setShowCompleteAlert(false);
  };

  const handleSubmitClose = () => {
    setShowSubmitAlert(false);
    //after the alert is shown, restart the list making process.
    dispatch(restartListProcess());
  };

  return (
    <>
      <Snackbar
        open={showCompleteAlert}
        elevation={6}
        autoHideDuration={1800}
        onClose={handleListClose}
        TransitionComponent={SlideTransition}
      >
        <MuiAlert severity="info" variant="filled">
          Your list is complete! Please submit it!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={showSubmitAlert}
        elevation={6}
        autoHideDuration={3000}
        TransitionComponent={SlideTransition}
        onClose={handleSubmitClose}
      >
        <MuiAlert severity="success" variant="filled">
          Thank you for submitting your list!
          <IconButton
            size="small"
            aria-label="close"
            color={"inherit"}
            onClick={handleSubmitClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Alerts;
