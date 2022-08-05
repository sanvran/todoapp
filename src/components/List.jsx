import React from 'react'

const List = ({ items, removeItem , removeAll}) => {
   return (
      <>
         <div className="card mt-3">
            <div className="card-body">
               <h5 className="card-title">Todo item list</h5>
               <ul className="list-group">
                  {
                     items.length < 1 ? 'No taks found' :
                        items.map((elem) => {
                           return (
                                 <li key={elem.id} className="list-group-item d-flex justify-content-between">{elem.title}
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(elem.id)} >Delete</button>
                                 </li>
                           )
                        })

                  }
                   {items.length > 0 ? <button  onClick={removeAll} className="btn btn-danger btn-sm mt-5">Clear All</button> : ''}
               </ul>
            </div>
         </div>
      </>
   )
}

export default List