

import './App.css';
import { Button, Loader, MantineProvider, Paper, Text} from '@mantine/core';



function App() {
  return (
    <div className='App'>
      <MantineProvider theme={{
  
      }
      }>
      <Paper>
        <Text>This is a simple Text Tag</Text>
      </Paper>
    <Button>Hello World</Button>
    <Button>Hello World</Button>
    <Loader />
    </MantineProvider>
    </div>
  );
}

export default App;
