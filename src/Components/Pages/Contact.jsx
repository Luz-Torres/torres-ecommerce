import Form from '../../Components/Form';
import Layout from '../Layout/Layout';
import  Background  from '../Layout/Layout';
const Contact = () => (
    
    <Layout className='h-[83vh]'>
        <Background>
            <h1 className='text-center font-bold text-5xl'>Sitio en desarrollo</h1>
            <h2 className="text-2xl font-semibold mb-6">Contactate con nosotros:</h2>
            <Form/>
        </Background>
    </Layout>
);

export default Contact;