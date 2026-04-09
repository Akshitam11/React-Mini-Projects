import React, { useRef, useState } from 'react'

function App() {

  let nameRef = useRef();
  let ageRef = useRef();
  let countryRef = useRef();
  let [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    let name = nameRef.current.value;
    let age = ageRef.current.value;
    let country = countryRef.current.value;

    let newData = { name, age, country};

    setData([...data, newData]);

    nameRef.current.value = "";
    ageRef.current.value = "";
    countryRef.current.value = "";

    
  }
  function deleteRow(index){
    let newData = data.filter((data,i) => i != index);
    setData(newData);
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter Name' ref={nameRef} />
        <br />
        <input type="text" placeholder='Enter Age' ref={ageRef} />
        <br />
        <input type="text" placeholder='Enter Country' ref={countryRef} />
        <br />
        <button type='submit'> Submit</button>


      </form>
      <br />

{/* 
      {data.map((data, index) => (
        <div key={index}>
          <h4>Card</h4>
          <p>Name : {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Country: {data.country}</p>
        </div>
      ))} */}


      <table border= "1" cellPadding= "10">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
          <th>Action</th>
        </tr>

        {data.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.country}</td>
              <td>
                <button onClick={() => deleteRow(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

      </table>
    </div>
  )
}

export default App

