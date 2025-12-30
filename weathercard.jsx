import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WeatherCard({date,temp,min,max}) {
  return (
    <div className='w'> 
    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
           <div>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                 {/* Temperature */}
                <h1>{temp}°C</h1>
                
                {/* Min-Max */}
                <div>{min}°C - {max}°C</div>
        
       
    
       
      </Card.Body>
    </Card>
      </div>
  );
}

export default WeatherCard;