import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllCustomer from "./Component/Customer/AllCustomer";
import EditCustomer from "./Component/Customer/EditCustomer";
import NewCustomer from "./Component/Customer/NewCustomer";
import Header from "./Component/Header";
import NewInvoice from "./Component/Invoices/NewInvoice";
import AllService from "./Component/Service/AllService";
import NewService from "./Component/Service/NewService";
import EditService from "./Component/Service/EditService";
import ShowInvoice from "./Component/Invoices/ShowInvoice";
import Test from "./Component/Test/Test";
import AllInvoices from "./Component/Invoices/AllInvoices";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/customer" element={<AllCustomer />} />
        <Route path="/customer/newCustomer" element={<NewCustomer />} />
        <Route path="/customer/:id" element={<EditCustomer />} />

        <Route path="/services" element={<AllService />} />
        <Route path="/services/newService" element={<NewService />} />
        <Route path="/services/:id" element={<EditService />} />

        <Route path="/invoice/allInvoices" element={<AllInvoices />} />
        <Route path="/invoice/newInvoice" element={<NewInvoice />} />
        <Route path="/invoice/showInvoice/:id" element={<ShowInvoice />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
