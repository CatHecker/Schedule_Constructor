import { useState } from 'react';

function FormComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.test.value; 
    
    try {
      const response = await fetch('http://localhost:3000/submit-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: inputValue })
      });
      const data = await response.json();
      setResponseData(data.receivedData); 
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="table_block">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input name="test" type="text" className="test"/>
          <button type="submit">Создать</button>
        </form>
      ) : (
        <div className="response-data">
          <h3>Данные получены:</h3>
          <p>{responseData}</p>
          <button onClick={() => setSubmitted(false)}>Вернуться</button>
        </div>
      )}
    </div>
  );
}

export default FormComponent;