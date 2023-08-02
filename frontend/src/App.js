import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import axios from 'axios';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import backgroundWebP from './background.webp';
import logopng from './logo.png'; 




const apiendpoint = process.env.REACT_APP_API_URL;

export default function App() {
  const [query, setQuery] = React.useState('');
  const [result, setResult] = React.useState(null); // State to store the API response
  const [history, setHistory] =  React.useState([]); //Setup history of messages

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    const data = { query };
    const apiUrl = apiendpoint;

    axios.post(apiUrl, data)
      .then((response) => {
        // Handle the API response
        setResult(response.data.query); // Update the result state with the "query" key value
        // Update the history with the current question and its answer
        setHistory((prevHistory) => [
          ...prevHistory,
          { question: query, answer: response.data.query },
        ]);


      })
      .catch((error) => {
        // Handle errors if the API request fails
        console.error('Error:', error);
      });

    
  };

// Function to process the text and format it as needed
function processText(text) {
  const lines = text.split('•');
  const listItems = lines.filter((line) => line.trim() !== '');

  if (listItems.length > 1) {
    return (
      <>
        <p>{listItems[0]}</p>
        <ul>
          {listItems.slice(1).map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </>
    );
  } else {
    return <p>{text}</p>;
  }
}


  return (
    <div
    style={{
      background: `url(${backgroundWebP}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      height: '100vh', // Set the height to 100% of the viewport height
      width: '100vw', // Set the width to 100% of the viewport width
      }}
    >
    
    <CssVarsProvider>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 720 }}>
          
          <Sheet
            sx={{
              mx: 'auto',
              my: 4,
              py: 3,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={logopng}
                alt="Logo"
                style={{
                  position: 'absolute',
                  top: '0px', // Adjust the distance from the top as needed
                  right: '5px', // Adjust the distance from the right as needed
                  height: '40px', // Set the height of your logo
                  width: 'auto', // Maintain the aspect ratio
                  // Add any other styles you want for the logo
                }}
              />
              </div>

             <div>
              <Typography level="h4" component="h1">
                Do you want some Sales Advices?
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel>Ask whatever you want</FormLabel>
              <TextareaAutosize
                name="query"
                placeholder="How could I convince David to sign this contract with me?"
                value={query}
                onChange={handleInputChange}
                minRows={3} 
                style={{ resize: 'none', borderRadius: 'sm', padding: '8px' }}
              />
            </div>

            <Button sx={{ mt: 1 }} fontSize="lg" onClick={handleSubmit}>
              Ask me
            </Button>


            {result && (
        <div style={{ wordWrap: 'break-word', width: '720' }}>
          <Typography level="body-lg"></Typography>
          {processText(result)}
        </div>
      )}

      {/* Display the history of questions and answers */}
    {history.length > 0 && (
      <div style={{ marginTop: '20px' }}>
        <Typography level="h5">Question History</Typography>
        {history.slice().reverse().map((item, index) => (
          <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <Typography level="body-md">
              <span style={{ fontWeight: 'bold' }}>Question {history.length - index}:</span> {item.question}
            </Typography>
            <Typography level="body-sm" style={{ marginTop: '10px' }}>
              {processText(item.answer)}
            </Typography>
          </div>
        ))}
      </div>
    )}
            
          </Sheet>
          
        </div>
        
      </div>
    </CssVarsProvider>

    </div> // background end
  );
};