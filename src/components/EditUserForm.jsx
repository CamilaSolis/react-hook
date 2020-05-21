import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

  console.log(props.currentUser)

  const {register, errors, handleSubmit, setValue} = useForm({
    defaultValues: props.currentUser
  });

  setValue('name', props.currentUser.name);
  setValue('username', props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data)
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)

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
        <button className="btn btn-success">Editar Usuario</button>
        </div>
      </div>
    </form>
  )

}

export default EditUserForm;