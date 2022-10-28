import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const NoveltieDetail = () => {
  const [noveltie, setNoveltie] = useState(null);

  const { noveltieId } = useParams();

  useEffect(() => {
    Axios.get(`https://secret-headland-86569.herokuapp.com/api/school-events/${noveltieId}`)
      .then(response => setNoveltie(response.data))
      .catch(error => {
        setNoveltie({error: '404'})
        console.clear()
      });
  }, [noveltieId]);

  return (
    <div className='Events-detail'>
      {
        !noveltie && <strong>Loading...</strong>
      }
      {
        noveltie?.error === '404' && <strong>Not Found</strong>
      }
      {
        noveltie?.title && (
          <>
            <div className='Events-detail-header'>
              <div>
                <h2>{noveltie.title}</h2>
                <p>Fecha: {noveltie.startDate} - {noveltie.finishDate}</p>
              </div>
            </div>

            <div className='Events-detail-body'>
              <p>
                {
                  noveltie.description
                }
              </p>
            </div>

            <div className='Events-detail-footer'>
              <Link to='/events'><i className="fa-solid fa-arrow-left"></i>Back to Events</Link>
            </div>
          </>
        )
      }
    </div>
  )
};

export default NoveltieDetail;