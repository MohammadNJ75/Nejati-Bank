import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { MotionAnimate } from "react-motion-animate";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <MotionAnimate>
        <h1 style={{ fontFamily: "sans-serif",color:"white" }}>🏦Nejati Bank⚛️</h1>
        <h2 style={{color:"white"}}>small project made with RTK( redux toolkit)</h2>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </MotionAnimate>
    </div>
  );
}

export default App;
