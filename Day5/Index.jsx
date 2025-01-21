import Greeting from "./Day5/basicprop";
import UserProfile from "./Day5/MultipleProps";
import Car from "./Day5/DefaultProps";
import Product from "./Day5/propstypevalidation";
import StatusMessage from "./Day5/conditionalrendring";
import ParentChildComponent from "./Day5/passingfunction";
import Grandparent from "./Day5/nestedcomponent";
import ConditionalRenderingComponent from "./Day5/conditionalrendring";
function App() {
  return (
    <div className="App">
      {/* <h1>Hello, World!</h1>
      <p>This is a React app.</p>
       */}
<Greeting name="Alice" />
<UserProfile firstName="John" lastName="Doe" age={30} />
<Product name="Laptop" price={999} isAvailable={true} />
<Car brand="Honda" />
<StatusMessage status="loading" />
<ParentChildComponent />
<Grandparent />
<ConditionalRenderingComponent />
</div>
  );
}

export default App;
