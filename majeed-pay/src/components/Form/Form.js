import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string(),
  title: yup.string().required(),
  message: yup.string().required(),
});
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className='form'>
      <div className='title'>
        Submit a help request and we’ll get in touch shortly.
      </div>
      <div className='inputs'>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            {...register('name')}
          />
          <p>{errors.name && 'Name is required'}</p>
          <input
            type='text'
            name='email'
            placeholder='Email Address'
            {...register('email')}
          />
          <p>{errors.email && 'Email is required'}</p>

          <input
            type='text'
            name='company'
            placeholder='Company Name'
            {...register('company')}
          />
          <p>{errors.company && 'Company Name is required'}</p>

          <input
            type='text'
            name='title'
            placeholder='Title'
            {...register('title')}
          />
          <p>{errors.title && 'Title is required'}</p>

          <input
            type='text'
            name='message'
            placeholder='Message'
            {...register('message')}
          />
          <p>{errors.message && 'Message is required'}</p>

          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
