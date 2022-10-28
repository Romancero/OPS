import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const EventDetail = () => {
  const [event, setEvent] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    Axios.get(`https://secret-headland-86569.herokuapp.com/api/school-events/${eventId}`)
      .then(response => setEvent(response.data))
      .catch(error => {
        setEvent({error: '404'})
        console.clear()
      });
  }, [eventId]);

  return (
    <div className='Events-detail'>
      {
        !event && <strong>Loading...</strong>
      }
      {
        event?.error === '404' && <strong>Not Found</strong>
      }
      {
        event?.title && (
          <>
            <div className='Events-detail-header'>
              <div>
                <h2>{event.title}</h2>
                <p>Fecha: {event.startDate} - {event.finishDate}</p>
              </div>
            </div>

            <div className='Events-detail-body'>
              <p>
                {
                  event.description
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

export default EventDetail;