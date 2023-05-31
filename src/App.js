import SignMessage from "./SignMessage";
import VerifyMessage from "./VerifyMessage";
import logo from './logo.png';

export default function App() {
  return (
    <div>
      <img src={logo} alt="Logo" className="mx-auto my-4 w-40" />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <SignMessage />
        </div>
        <div className="w-full lg:w-1/2">
          <VerifyMessage />
        </div>
      </div>
    </div>
  );
}