import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon'},
    { id: uuidv4(), name: 'Ben', username: 'benisphere'},
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado)
  }

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div>
      <div className="container">
        <h1>Proyecto Nectia</h1>
        <div className="row">
          <div className="col-12">
            <nav className="navbar justify-content-between">
              <h3 className="navbar-brand">Usuarios</h3>
              <form className="form-inline">
                <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#changeModal">
                  Agregar Usuario
                </button>
              </form>
            </nav>
            <UserTable 
              users={users} 
              deleteUser={deleteUser} 
              editRow={editRow}
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="changeModal" tabIndex="-1" role="dialog" aria-labelledby="userModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {
              editing ? (
                <div>
                  <div className="modal-header">
                    <h5 className="modal-title" id="userModal">Editar Usuario</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <EditUserForm
                      currentUser={currentUser}
                      updateUser={updateUser}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="modal-header">
                    <h5 className="modal-title" id="userModal">Agregar Usuario</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <AddUserForm addUser={addUser} />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
