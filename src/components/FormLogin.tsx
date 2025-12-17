import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {loginSchema} from '../validations/loginSchema';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

type Props = {}

type Login = {
    email: string,
    password: string
}

function FormLogin({}: Props) {

    const {register, handleSubmit, formState: {errors}} = useForm<Login>({
        resolver: zodResolver(loginSchema) 
    }); 

    const navigate = useNavigate();

    const logueo = (datos: any) => {
        console.log("Ha pasadoo el logueo", datos)
        //Aca se haría el llamado a la bd para verificar los datos y salta al home o dashboard
        navigate('/dashboard', { replace: true });
    }

  return (
      <>
      <div className="border border-black p-3 rounded">
          <Form className="flex flex-col" onSubmit={handleSubmit(data => {logueo(data)})}>
              <Form.Group className="mb-3 w-full" controlId="exampleForm.ControlInput1">
                  <Form.Label column sm="2" className="!block text-left mb-1 text-white">
                      Email
                  </Form.Label>
                  <Col sm="10">
                      <Form.Control placeholder="Name@example.com" {...register('email')} />
                      {
                        errors.email?.message && <p className="text-red-600 text-sm ">{errors.email?.message}</p>
                      }
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" className="!block text-left mb-1 text-white">
                      Password
                  </Form.Label>
                  <Col sm="10">
                      <Form.Control type="password" {...register('password')}/>
                  </Col>
              </Form.Group>
              <Button type="submit" className="bg-green-500 rounded">Ingresar</Button>
          </Form>
          </div>
      </>
  )
}

export default FormLogin