import { useState } from "react";
import { BsBracesAsterisk } from "react-icons/bs";

import { Header } from "../Header";
import { TabButton, TabContent, Tabs } from "../Tabs";
import { EmAsteriscos } from "../../pages/EmAsteriscos";

import "./styles.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickTab = (index: number) => setCurrentIndex(index);

  return (
    <div>
      <Header />

      <main className="container-main">
        <Tabs currentIndex={currentIndex} onClick={handleClickTab}>
          <div>
            <TabButton index={0} Icon={BsBracesAsterisk}>
              Asterisco
            </TabButton>
            <TabButton index={1}>Outra coisa</TabButton>
          </div>

          <TabContent index={0}>
            <EmAsteriscos />
          </TabContent>
          <TabContent index={1}>Componente 2</TabContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
