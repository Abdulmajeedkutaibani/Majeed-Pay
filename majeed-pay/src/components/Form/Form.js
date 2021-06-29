import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Checkbox from './Checkbox';
import Btn from '../Btn';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
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
          <div className='input-field'>
            <input
              className={`form-control ${errors.name && 'text-error'}`}
              type='text'
              name='name'
              placeholder='Name'
              {...register('name')}
            />
            <p>{errors.name && 'This field can’t be empty'}</p>
          </div>
          <div className='input-field'>
            <input
              className={`form-control ${errors.email && 'text-error'}`}
              type='text'
              name='email'
              placeholder='Email Address'
              {...register('email')}
            />
            <p>{errors.email && 'Email is required'}</p>
          </div>
          <div className='input-field'>
            <input
              className={`form-control ${errors.company && 'text-error'}`}
              type='text'
              name='company'
              placeholder='Company Name'
              {...register('company')}
            />
            <p>{errors.company && 'This field can’t be empty'}</p>
          </div>
          <div className='input-field'>
            <input
              className={`form-control ${errors.title && 'text-error'}`}
              type='text'
              name='title'
              placeholder='Title'
              {...register('title')}
            />
            <p>{errors.title && 'This field can’t be empty'}</p>
          </div>
          <div className='message-input-field'>
            <input
              className={`form-control ${errors.message && 'text-error'}`}
              type='text'
              name='message'
              placeholder='Message'
              {...register('message')}
            />
            <p>{errors.message && 'This field can’t be empty'}</p>
          </div>
          <Checkbox />
          <Btn btnType='btn-3' btnText='Submit' />
        </form>
      </div>
    </div>
  );
};

export default Form;
