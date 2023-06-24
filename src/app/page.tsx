'use client'
import { AuthCheck } from '@/modules/shared/AuthCheck';
import React, { useEffect, useState } from 'react';

// const url = "http://127.0.0.1:8000/"
const url = 'https://api.daedalus-institute.com/';

const url_send  = url + 'bot/send/';
const url_get   = url + 'bot/get/';
const url_start = url + 'bot/start/';
const url_login = url + 'bot/login/';

const ExcelUploader = ({ uid }: { uid: string }) => {
  const [numbers, setNumbers] = useState<string>('');
  const [data, setData] = useState<any[]>([]);

  const handleNumbersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(event.target.value);
  };

  const handleUpload = () => {
    if (numbers) {
      const requestData = {
        data: numbers.split(','),
        uid: uid,
      };

      fetch(url_send, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          console.log(response);
          // Handle the response from the API
        })
        .catch((error) => {
          console.error(error);
          // Handle errors
        });
    }
  };

  const fetchData = () => {
    fetch(url_get + '?uid=' + uid)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.data);
        // Handle the retrieved data
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>
        <input type="text" value={numbers} onChange={handleNumbersChange} />
      </div>
      <button onClick={handleUpload}>Upload</button>

      <h2>Processed Data:</h2>
      <ul>
        {data &&
          data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

const QRCodeComponent = () => {
  const [qrCodeSrc, setQRCodeSrc] = useState('');
  const [startBotMessage, setStartBotMessage] = useState('');
  const [generateLoginMessage, setGenerateLoginMessage] = useState('');
  const [uid, setUID] = useState('');

  const handleStartBotClick = () => {
    fetch(url_start, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid: uid }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          setStartBotMessage('Bot started successfully.');
        } else {
          setStartBotMessage(`Error starting the bot: ${data.message}`);
        }
      })
      .catch((error) => {
        setStartBotMessage(`Error starting the bot: ${error}`);
      });
  };

  const handleUIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUID(event.target.value);
  };

  const handleGenerateLoginClick = () => {
    fetch(url_login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid: uid }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((data) => {
        if (data.src) {
          setGenerateLoginMessage('Login generated successfully.');
          setQRCodeSrc(data.src);
        } else {
          setGenerateLoginMessage('Error generating login.');
        }
      })
      .catch((error) => {
        setGenerateLoginMessage(`Error generating login: ${error}`);
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <input type="text" value={uid} onChange={handleUIDChange} placeholder="Enter UID" />
      </div>
      <div>
        <button onClick={handleStartBotClick}>Start Bot</button>
        <span>{startBotMessage}</span>
      </div>
      <div>
        <button onClick={handleGenerateLoginClick}>Generate Login</button>
        <span>{generateLoginMessage}</span>
      </div>
      {qrCodeSrc && (
        <>
          <img src={qrCodeSrc} alt="WhatsApp QR Code" />
          <ExcelUploader uid={uid} />
        </>
      )}
    </div>
  );
};

export default AuthCheck(QRCodeComponent);