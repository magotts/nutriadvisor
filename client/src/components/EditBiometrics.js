import { Modal, Button } from "react-bootstrap";
import {useState} from "react";

const EditWeight = ({ weight } ) => {

  const updateWeight = async (event) => {
    event.preventDefault();
    try {
      const body = { weights };
      const response  = await fetch(`http://localhost:5000/biometrics/${weight.id}`, {
         method: "PUT",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(body)
    });
    window.location ="/biometrics";
    
    }
    catch (err) {
      console.error(err.message)
    }
  };

  const [weights, setWeights] = useState(weight.weight);
  //const [calories, setCalories] = useState(weight.calories_per_day);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  <Button variant="primary" onClick={handleShow} >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Weight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Biometrics Date: {weight.date_created} {weight.id} <br /><br />
          <strong>Weight:</strong> <input type="text" className="form-control" value={weights} onChange={event => setWeights(event.target.value)}/><br/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={event => updateWeight(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditWeight;

