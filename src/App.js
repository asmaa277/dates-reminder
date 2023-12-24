import { Container } from "react-bootstrap";
import { person } from "./Components/Person";
import DatesCount from "./Components/DatesCount";
import DataPerson from "./Components/DataPerson";
import DatesAction from "./Components/DatesAction";
import { useState } from "react";
function App() {
  const [data, setData] = useState(person);
  const onDelete = () => {
    setData([]);
  };
  const onView = () => {
    setData(person);
  };

  return (
    <div className="font color-body">
      <Container className="p-5">
        <DatesCount per={data}></DatesCount>
        <DataPerson person={data} />
        <DatesAction delet={onDelete} view={onView}></DatesAction>
      </Container>
    </div>
  );
}

export default App;
