import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
    console.log(data)

    props.addUser(data)

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label mb-2">Nombre</label>
        <div className="col-sm-10 mb-2">
          <input type="text" className="form-control" id="name" name="name" ref={
              register({
                required: {value: true, message : 'Campo Requerido'}
              })
            } />
        </div>
        <div>
          {errors?.name?.message}
        </div>
        <label htmlFor="user" className="col-sm-2 col-form-label">Usuarios</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="username" name="username" ref={
          register({
            required: {value: true, message : 'Campo Requerido'}
          })
        } />
        </div>
        <div>
          {errors?.username?.message}
        </div>
        <div className="text-right mt-2 ml-3">
          <button className="btn btn-success">Agregar Usuario</button>
        </div>
      </div>
    </form>
  )

}

export default AddUserForm;