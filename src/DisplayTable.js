import React from 'react';
import {Table} from 'react-bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css';

    
    const row=(x,
    i,
    header,
    handleRemove,
    startEditing,
    editid,
    handleChange,
    stopEditing)=>
    {
     const currentlyEditing = editid===i;
      return(
      <tr key={i}>
        {header.map((y,k)=>(
          <td key={k}>
          { currentlyEditing ? (
          <input 
          responsive
          className="container-fluid text-center"
          name={y.prop}  
          onChange={e=>handleChange(e,y.prop,i)}
          value={x[y.prop]}
          />
          ) : (x[y.prop])}
         </td>
        ))}
          <td>
          
            {currentlyEditing ? (

          <button onClick={()=>stopEditing()} className="btn btn-primary btn-sm rounded-0" title="Cancel"><i className="fa fa-check"></i></button>
            ):(
              <button onClick={()=>startEditing(i)} className="btn btn-primary btn-sm rounded-0" title="Edit"><i className="fa fa-edit"></i></button>
            )}
          
          </td>
          <td>
          <button onClick={()=>handleRemove(i)} className="btn btn-danger btn-sm rounded-0" title="Edit"><i className="fa fa-trash"></i></button>
          </td>
    </tr>
    );
}

export default ({data,
  header,
  handleRemove,
  startEditing,
  editid,
  handleChange,
  stopEditing})=>
(
  <Table className="container text-center" responsive>
  <thead>
    <tr>
      {header.map((x,i)=>(
        <th key={i}>{x.name}</th>
      ))}
      <th/><th/><th/>
    </tr>
  </thead>

  <tbody>
  {data.map((x,i) => 
  row(
    x,
    i,
    header,
    handleRemove,
    startEditing,
    editid,
    handleChange,
    stopEditing
  ))}
  </tbody>
  </Table>          
)