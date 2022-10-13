import { Formik, Field, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SignupSchema } from '../../validations/SignupSchema';
import { create } from '../../api';

import '../../routes/sign-up/sign-up.styles.scss';

const SignUp = () => {

  const notifySuccess = () => toast.success('Success!');
  const notifyError = () => toast.error('Such user exists!');
  return (
    <div className='sign-in-container'>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: 0,
          confirmPassword: 0,
        }}

        onSubmit={values => {
          const data = {
            name: values.name,
            email: values.email,
            password: values.password
          };
          create(data)
            .then((a) => {
              notifySuccess();
            })
            .catch((e) => {
              notifyError();
            });
        }}

        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Имя пользователя</label>
            <Field id="name" name="name" placeholder="Jane" />
            {errors.name && touched.name ? (<div className='error-sign-up'>{errors.name}</div>) : null}

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? <div className='error-sign-up'>{errors.email}</div> : null}

            <label htmlFor="password">Пароль</label>
            <Field id="password" name="password" />
            {errors.password && touched.password ? <div className='error-sign-up'>{errors.password}</div> : null}

            <label htmlFor="confirmPassword">Пароль</label>
            <Field id="confirmPassword" name="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? <div className='error-sign-up'>{errors.confirmPassword}</div> : null}

            <button type="submit">Sign Up </button>
          </Form>
        )}
      </Formik>
      <ToastContainer position="top-center" />
    </div>)
};

export default SignUp;
