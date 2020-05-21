import React from 'react';

const UserTable = (props) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Username</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{
				props && props.users && props.users.length > 0 ? 
					props.users.map(user => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>
								<button 
									onClick={() => {props.editRow(user)}}
									type="button" className="btn btn-info mr-3"
									data-toggle="modal" data-target="#changeModal"
									>Editar</button>
								<button
									onClick={() => {props.deleteUser(user.id)}}
									type="button" className="btn btn-danger">Borrar</button>
							</td>
						</tr>
					)) : (
						<tr>
							<td colSpan={3}>No se encontraron usuarios</td>
						</tr>
					)
			}

		</tbody>
	</table>
)

export default UserTable;