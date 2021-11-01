const CoachRequested = (props) => {
  return (
    <div>
      <br />
      <center>
        <h2 style= {{color: "cadetblue"}}>
          Congratulations! 🎉 <br />
          You are now assigned to {props.name}!
        </h2>
      </center>
    </div>
  );
};

export default CoachRequested;
