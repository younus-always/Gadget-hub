import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/Error.svg'
const ErrorPage = () => {
      const navigate = useNavigate()
      return (
            <div className="max-h-screen">
                  <div className='h-[600px]'>
                        <img src={errorImg} alt="" className='w-full h-full' />
                  </div>
                  <div className='flex items-center justify-center'>
                        <button onClick={() => navigate(-1)} className='py-2 px-6 rounded-lg text-slate-50 font-semibold bg-blue-500'>Go Back</button>
                  </div>
            </div>
      );
};

export default ErrorPage;