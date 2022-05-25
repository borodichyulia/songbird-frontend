import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import { setAuthorization } from '../../store/userSlice';
import { SignupSchema } from '../../validations/SignupSchema';
import { login } from '../../api';

import '../../routes/sign-up/sign-up.styles.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifyError = (message) => toast.error(message);

  return (
    <div className='sign-in-container'>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: 0,
        }}

        onSubmit={values => {
          const data = {
            email: values.email
          };

          login(data)
            .then((a) => {
              console.log(990);
              dispatch(setAuthorization());
              navigate('/home');
            })
            .catch((err) => {
              if (err.response) {
                notifyError(err.response.data.message);
              }
            });
        }}

      >
        
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
             

            <label htmlFor="password">Пароль</label>
            <Field id="password" name="password" />

            <button type="submit">Sign In </button>
          </Form>
      </Formik>
      <ToastContainer position="top-center" />
    </div>)
};

export default SignIn;
