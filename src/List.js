import './index.css';
import { useState, useEffect } from 'react';
import Popup from './Popup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({}) => {
  const [newTask, setNewTask] = useState('');
  const [popup, setPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [lists, setList] = useState(() => {
    
        const savedItem = localStorage.getItem("lists");
        if (savedItem){
          return JSON.parse(savedItem);
        }else{
          return[];
        }
        });
       
                  // const handleDelete = (id) => {
                  //   setPopup(true);
                  // const tasklist = lists.filter((task) => task.id !== id);
                  // setList(tasklist);
                  // //localStorage.setList('tasks', JSON.stringify(tasklist));
                  // const handleDelete = (id) => {
                  //   setPopup({
                  //     show: true,
                  //     id,
                  //   });
                  // };
                  //console.log(popup);
                 
                  
                //   const handleDeleteTrue = () => {
                //     if (popup.show && popup.id) {
                //       const tasklist = lists.filter((task) => task.id !== popup.id);
                //     setList(tasklist);
                //     setPopup({
                //       show: false,
                //       id: null,
                //     });
                //   }
                // };
                
                const handleDeleteFalse = () => {
                  setPopup({
                    show: false,
                    id: null,
                  });
                };             
                              
                    const handleAddTask = () =>{
                    //const id = lists.length+ 1;
                    const newTask = [...lists];
                     setList(newTask);
                     setShowModal(!showModal);
                     
                         }
                        const handleInput= (e) =>{
                        setNewTask(e.target.value);

                        }
                          const handleSubmit= (e) =>{
                          e.preventDefault();
                            if(newTask !==""){
                              setList([...lists,{id:lists.length +1, task: newTask.trim()}
                              ]);
                              setNewTask('');
                              }
                          }
                          const [show, setShow] = useState(false);
                          
                          const handleClose = () =>{
                          setShow(false);
                          }

                           const handleShow = (index) =>{
                              setShow({
                              
                             show: true,
                                  index,
                                });
                                setCurrentUser(index);
                                                                                                                            
                                };
                                //console.log(setCurrentUser);
                                const [delshow, setdelShow] = useState(false);
                                const delhandleClose = () =>{
                                  setdelShow(false);
                                  }

                          const handleDeleteshow = (id) => {
                            setdelShow({
                              show:true,
                               id,

                            });
                           

                          }
                          const handleDeleteTrue = () => {
                            if (delshow.show && delshow.id) {
                              const tasklist = lists.filter((task) => task.id !== delshow.id);
                            setList(tasklist);
                            setdelShow(false);
                            
                          }
                        };
                        

                          // const handleDelete = (id) => {
                          //   setPopup({
                          //     show: true,
                          //     id,
                          //   });
                          // };

                          const [state, setState] = useState({task: ""});

                          const handleChange = e => {
                            const { name, value } = e.target;
                            setState({
                                ...state,
                                [name]: value
                            });
                            console.log(value)
                        };

                        const handleupdatee= (index)=> {
                          
                          const newList= [...lists];
                          console.log(newList);
                          const item = newList[index];
                          console.log(item);
                          let newItem= (`Update ${item.task}?`, item.task);
                          console.log(newItem);
                          
                          let todoobj=  {task: newItem};
                          console.log(todoobj);
                          newList.splice(index,1, todoobj);
                          if(newItem ===null || newItem ===""){
                            return;
                            }else{
                              item.task= newItem;
                              //console.log('wrong');
                              }  
                             setState('') ;
                          } ; 

                            ////////////////////////////////////////////////////////////////////
                           
                          //  const handleupdatee =(index) =>{
                          //    //console.log(id);
                          //   const List= [...lists];
                          //   console.log(List);
                          //   const item = List[index];
                          //   console.log(item);
                          //   setState
                          //   (prevState => ({
                          //     ...prevState,
                          //     task:''
                          //   }))
                          //  }
                          // console.log(state);
                                                  
    useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
    },[lists]);
      return (
            <div className='main'>
             <div className="create-task" >
             <form onSubmit={handleSubmit}> 
              <input type='text' name='newTask'  value={newTask} required placeholder='Add Task Here' onChange={handleInput} />
              <button type='submit' onClick={() => handleAddTask()}> Add Task </button>
              </form>
             </div>
            <div className='list'>
               <ol>
                {lists.map((task, index) => (
                   <li
                      key={index}
                      index={index}
                      task={task.task}
                     >
                      <label >{task.task}</label> 
                        {/* <button type='button' onClick={() => updateList(index)} >Edit</button>   */}
                         
                        <button className="button" onClick={() => handleShow(index.task)}>edit</button>   
                        
                        <Modal
                        show={show}
                        onHide={handleClose}
                        // backdrop="static"
                        // keyboard={false}
                        // onSubmit={handleAddTask}
                      
                      >
                        <div className="container mt-3">
                        <Modal.Header>
                          <Modal.Title>Update your task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <input type ="text" name="task" value={state.task} onChange={handleChange}/>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                          <Button variant="primary" onClick={() =>handleupdatee(index)}>Update</Button>
                                                    
                          {/* onClick={() => updateList(index)}  */}
                        </Modal.Footer>
                        </div>
                      </Modal>
                      < Button variant="primary" onClick={() => handleDeleteshow(task.id)}>
                          Delete
                          </Button>
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
                              <Button variant="primary" onClick={() =>handleDeleteTrue(task.id)}>
                            Confirm
                              </Button>
                            </Modal.Footer>
                          </Modal>
                    {/* <button className="button" onClick={() => handleDelete(task.id)}>Delete</button>   */}
                   
                  </li>  
                 ))}
               </ol>
            </div> 
            {/* {popup.show && (
  <Popup
    handleDeleteTrue={handleDeleteTrue}
    handleDeleteFalse={handleDeleteFalse}
  />
)}        */}
          </div>
  )
}

export default List;