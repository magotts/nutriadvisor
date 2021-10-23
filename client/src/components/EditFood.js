import { Modal, Button } from "react-bootstrap";
import {useState} from "react";

const EditFood = ({ food } ) => {

  const updateFood = async (event) => {
    event.preventDefault();
    try {
      const body = {breakfast, lunch, dinner, snacks};
    const response  = await fetch(`http://localhost:5000/food_diary/${food.id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });
    window.location ="/food_diary";
    
    }
    catch (err) {
      console.error(err.message)
    }
  };

  const [breakfast, setBreakfast] = useState(food.breakfast);
  const [lunch, setLunch] = useState(food.lunch);
  const [dinner, setDinner] = useState(food.dinner);
  const [snacks, setSnacks] = useState(food.snacks);
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
          <Modal.Title>Edit Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Food Diary Date: {food.date_created} <br /><br />
          <strong>Breakfast:</strong> <input type="text" className="form-control" value={breakfast} onChange={event => setBreakfast(event.target.value)}/><br/>
          <strong>Lunch:</strong> <input type="text" className="form-control" value={lunch} onChange={event => setLunch(event.target.value)}/><br/>
          <strong>Dinner:</strong> <input type="text" className="form-control" value={dinner} onChange={event => setDinner(event.target.value)}/><br/>
          <strong>Snacks:</strong> <input type="text" className="form-control" value={snacks} onChange={event => setSnacks(event.target.value)}/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={event => updateFood(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditFood;

