import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import List from './components/List';

//geting data from local storage

const getItemsData = () => { 
	const itemData = localStorage.getItem('items');
	if (itemData) {
		return JSON.parse(itemData)
	} else {
		return []
	}
};

const App = () => {

	const [title, setTitle] = useState('')
	const [items, setItems] = useState(getItemsData());

	// add item to list
	const handleAddItem = (e) => {
		e.preventDefault();
		if (!title) return toast.error('Please enter a task !')
		const newTask = { id: new Date().getTime().toString(), title: title }
		setItems([...items, newTask]);
		setTitle('');


	};

	// remove todo task
	const removeItem = (id) => {
		const filterItem = items.filter((elem) => {
			return elem.id !== id
		})
		console.log("id===>", id)
		setItems(filterItem);
	};

	// remove all
	const removeAll = () => {
		 setItems([]);
	};

	// saving the data on component mount
	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
	}, [items])


	return (
		<>
			<Toaster position='top-center' />
			<div className="container my-5">
				<h3>Todo app</h3>
				<form>
					<div className="row">
						<div className="col-md-6">
							<input type="text" className="form-control"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<button type="submit" onClick={handleAddItem} className="btn btn-primary mt-2">Add</button>
							<List items={items} removeItem={ removeItem} removeAll={removeAll} />
						</div>

					</div>
				</form>
			</div>

		</>
	)
}

export default App