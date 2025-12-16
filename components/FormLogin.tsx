'use client'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {loginSchema} from '../validations/loginSchema';
import { useRouter } from "next/navigation";

type Props = {
    onClick: () => void;
}

type Login = {
    email: string,
    password: string
}

function FormLogin({onClick}: Props) {

    const {register, handleSubmit, formState: {errors}} = useForm<Login>({
        resolver: zodResolver(loginSchema) 
    }); 

    //const navigate = useNavigate();
    const router = useRouter();

    const logueo = (datos: any) => {
        console.log("Ha pasadoo el logueo", datos)
        //Aca se haría el llamado a la bd para verificar los datos y salta al home o dashboard
        //navigate('/dashboard', { replace: true });
        router.push('/home');
    }

  return (
      <>
      <div className="flex flex-col items-center justify-center">
       <div className="flex items-center justify-center w-full h-14 mb-2.5">
        <div className='bg-[#16ae63] w-10 h-10 flex items-center justify-center p-2 m-2 rounded'>
            <i className="bi bi-geo-alt text-white text-2xl"></i>
        </div>
        <p className='text-[#16ae63] text-4xl mb-0'>Planit</p>
      </div>
      <div className='w-10/12 lg:w-7/12 bg-white rounded flex flex-col justify-center items-center p-3 drop-shadow-lg'>
        <h5>Iniciar Sesión</h5>
          <Form className="flex flex-col w-full" onSubmit={handleSubmit(data => {logueo(data)})}>
              <Form.Group className="mb-3 w-full" controlId="exampleForm.ControlInput1">
                  <Form.Label column sm="2" className="!block text-left mb-0 p-0 font-bold text-black">
                      Email
                  </Form.Label>
                  <Col>
                      <Form.Control placeholder="Name@example.com" {...register('email')} className="border border-b-gray-500 rounded" />
                      {
                        errors.email?.message && <p className="text-red-600 text-sm mb-0 mt-1">{errors.email?.message}</p>
                      }
                  </Col>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" className="!block text-left mb-0 p-0 font-bold text-black">
                      Password
                  </Form.Label>
                  <Col>
                      <Form.Control type="password" {...register('password')} className="border border-b-gray-500 rounded"/>
                  </Col>
              </Form.Group>
              <div className="w-full flex flex-col items-center">
              <Button type="submit" className="!bg-[#16ae63] border-0 rounded w-full"><p className="mb-0 font-bold">Entrar</p></Button>
              </div>
          </Form>
          <p className='text-[#16ae63] mt-2 mb-0 cursor-pointer' onClick={onClick}>¿No tienes cuenta? Registrate</p>
          </div>
          </div>
      </>
  )
}

export default FormLogin