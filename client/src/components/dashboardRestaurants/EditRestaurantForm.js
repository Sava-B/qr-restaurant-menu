import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditRestaurantForm({
	id,
	resName,
	show,
	closeForm,
	updateRestaurants,
	handleDelete,
}) {
	const [name, setName] = useState(resName);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateRestaurants(id, name);
		closeForm();
	};

	const deleteRestaurant = () => {
		handleDelete(id);
	};

	return (
		<>
			<Modal
				show={show}
				onHide={closeForm}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Restaurant</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form id="editModal">
						<Form.Group
							className="mb-3 d-flex justify-content-start"
							controlId="formName"
						>
							<Form.Label className="text-nowrap text-secondary col-2 my-auto fw-bold text-end pe-2">
								{name}
							</Form.Label>
							<Form.Control
								onChange={(e) =>
									setName(e.target.value)
								}
								value={name}
								type="text"
								placeholder="Name"
								className="form-control w-75"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className="d-flex flex-row">
					<Button
						className="btn btn-danger"
						onClick={deleteRestaurant}
					>
						Delete
					</Button>
					<Button
						className="btn btn-dark"
						form="editModal"
						onClick={handleSubmit}
					>
						Update
					</Button>
					<Button variant="secondary" onClick={closeForm}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditRestaurantForm;
