import './index.css';
import { useState, useEffect } from 'react';
import Popup from './Popup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";

//const initialContact = { task: "", description: "", date: "" };
const List = ({ }) => {
  const [showModal, setShowModal] = useState(false);
//   const [lists, setList] = useState([{
//     task:'',
//     description:'',
//     date:''  
// } ]);

 const [lists, setList] = useState(() => {

    const savedItem = localStorage.getItem("lists");
    if (savedItem) {
      return JSON.parse(savedItem);
    } else {
      return [];
      
    }
  });
  const [validation, setValidation] = useState({
    task: "",
    description: "",
     date: "",
  });
  
  const [taskid, setTaskid] = useState();
  const [ntask, setNTask] = useState();
    const [ndesc, setNDesc] = useState();
    const [ndate, setNDate] = useState();
    const [newTask, setNewTask] = useState('');

const handleInput = (name) => (event) => {
  setNewTask((newTask) => ({
    ...newTask,
    [name]: event.target.value
   
  }));

};


const checkValidation = () => {
  let errors = validation;

  //ftask Name validation
  if (!newTask.task) {
    errors.task = "";
  } else {
    errors.task = "";
  }
  // //descriptionvalidation
  // if (!newTask.description.trim()) {
  //   errors.description = "Last name is required";
  // } else {
  //   errors.description = "";
  // }


  if (!newTask.date) {
    errors.date = "";
  } else {
    errors.date = "";
  }


  setValidation(errors);
};






  const handleSubmitt = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      setList([...lists, { id: lists.length + 1, task: newTask.task,
      description: newTask.description,
    date: newTask.date}
      ]);
      setShowModal(!showModal);  
     // console.log(newTask);
      setNewTask({text: ''});
      
      
    }
   
    e.target.reset();
  
  }
 

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }

  const [editid, setEditid] = useState();
  const [editindex, setEditindex] = useState();
  const [defvalue, setdefvalue] = useState();
  const [defdesc, setdefvalueDesc] = useState();
  const [defdate, setdefvalueDate] = useState();
  const handleShow = (index, id, task, description, date) => {
    setShow({

      show: true,
      index,
    });
    setEditid(id);
    setEditindex(index);
    setdefvalue(task);
    setdefvalueDesc(description);
    setdefvalueDate(date);
  };

  const [ischange, setIschange] = useState(false);
  const [newval, setNewVal] = useState();


  
const handleChange = (name) => (event) => {
  event.preventDefault();
  setNewVal((lists) => ({
    ...lists,
    [name]: event.target.value
  }));
 
 
};
console.log("this is updated value", newval);

  const handleupdatee = (id) => {
    setEditid(id);
    const updatedlist = lists[editindex] = newval;
    const updlist = [...lists];
    setList(updlist);
    setShow(false);

  };

  const [delshow, setdelShow] = useState(false);
  const delhandleClose = () => {
    setdelShow(false);
  }

  const handleDeleteshow = (id) => {
    setdelShow({
      show: true,
      id,

    });


  }
 
//   const handleDeleteTrue = (index)=>{
//     const rows = [...lists];
//     rows.splice(index, 1);
//     setList(rows);
//     setdelShow(false);
// }
const handleDeleteTrue = (id) => {
  if (delshow.show && delshow.id) {
    const tasklist = lists.filter((task) => task.id !== delshow.id);
    setList(tasklist);
    setdelShow(false);
    console.log("this is deleted id", id);
  }
};

   const removeAlllists= () => {
    setList([]);
    
  } 
  const [removeshow, setremoveShow] = useState(false);
  const removehandleClose = () => {
    setdelShow(false);
  }

  const handleremoveshow = (id) => {
    setdelShow({
      show: true,
      id,

    });


  }

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
    checkValidation();
  }, [lists]);

  return (
    <div className='main'>
      <div class="container-fluid mt-3">
        <form onSubmit ={handleSubmitt}>
          <input className='form-control' type='text' name='task' value={newTask.task}  placeholder='Add Task Here' onChange={handleInput("task")} required />
          {validation.task && <p>{validation.task}</p>}
            {validation.task && console.log(validation)}
            <input className='form-control' type='text' name='description' value={newTask.description}  placeholder='Add description here' onChange={handleInput("description")} required />
      
          <input className='form-control' type='date' name='date' value={newTask.newdate}  placeholder='Add Date Here' onChange={handleInput("date")} required/>
          {validation.date && <p>{validation.date}</p>}
          {validation.date && console.log(validation.date)}
          
         
          <button className='btn btn-primary' type='submit' > Add Task </button>
        </form>
          {  lists.map((name, index) => {
        
      
        
         return( 
          <ul className="list-group list-group-flush">

          <li className="list-group-item"
          key={index}
        index={index}
        >
      <div class="row">
      <div class="col p-3 bg-primary text-white">   <label>{name.task}</label></div>
    <div class="col p-3 bg-primary text-white">   <label>{name.description}</label></div>
    <div class="col p-3 bg-primary text-white"> <label>{name.date}</label></div>
    <div class="col p-3 bg-dark text-white">
     <button className="btn btn-info" onClick={() => handleShow(index, name.id, name)}>edit</button>
         
          </div>
            
          <div class="col p-3 bg-dark text-white">
          <Button variant="btn btn-warning" onClick={() => handleDeleteshow(name.id)}>
            Delete
          </Button>
          </div>
          </div>
         
          {/* <button className="button" onClick={() => handleDelete(task.id)}>Delete</button>   */}

        </li>
       
        </ul>
    
       );
      })}
        
  
      
        
        
        <div className="container mt-3">
        <Modal
                show={show}
                onHide={handleClose}
               

              >
                  
                  <Modal.Header>
                    <Modal.Title>Update your task</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    {/* <input type="text" name="task" value={state.task} onChange={handleChange} /> */}
                    <input className='form-control' type="text" name="task" defaultValue={defvalue?.task} onChange={handleChange("task")} />
                    <input className='form-control' type="text" name="description" defaultValue={defvalue?.description} onChange={handleChange("description")} />
                    <input className='form-control' type="date" name="date" defaultValue={defvalue?.date} onChange={handleChange("date")} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="btn btn-success" onClick={handleupdatee}>Update</Button>

                    
                  </Modal.Footer>
                  </Modal>
                </div>
                
                <div className='container mt-3'>
                <Modal show={delshow}
                onHide={() => setdelShow(false)}
                
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> You sure you wanna delete?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={delhandleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={(index) => handleDeleteTrue(index)}>
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
                </div>
      
      
                <Modal show={removeshow}
                onHide={() => setremoveShow(false)}
                
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> You sure you wanna remove all lists?</Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={removehandleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={removeAlllists}>
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
     
</div>
    </div>
  )
}

export default List;