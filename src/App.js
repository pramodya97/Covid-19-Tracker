import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className= "app__dropdown">
        <Select
         variant="outlined"
         value="abc">
           <MenuItem value="worldwide">Worldwide</MenuItem>
           <MenuItem value="worldwide">Worldwide</MenuItem>
           <MenuItem value="worldwide">Worldwide</MenuItem>
           <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>

      </FormControl>

     {/* Header */}
     {/* Title + Dropdown */}

     {/* Info box */}
     {/* Info box */}
     {/* Info box */}

     {/* Table */}
     {/* Graph */}

     {/* Map */}
    </div>
  );
}

export default App;
