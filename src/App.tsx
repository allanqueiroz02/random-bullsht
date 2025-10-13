import { useState } from "react";
import { TabButton, TabContent, Tabs } from "./components/Tabs";
import { Header } from "./components/Header";
import { EmAsteriscos } from "./pages/EmAsteriscos";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickTab = (index: number) => setCurrentIndex(index);

  return (
    <div>
      <Header />

      <Tabs currentIndex={currentIndex} onClick={handleClickTab}>
        <div>
          <TabButton index={0}>Asterisco (*)</TabButton>
          <TabButton index={1}>Outra coisa</TabButton>
        </div>

        <TabContent index={0}>
          <EmAsteriscos />
        </TabContent>
        <TabContent index={1}>Componente 2</TabContent>
      </Tabs>
    </div>
  );
}

export default App;
