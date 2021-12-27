import Button from "components/atoms/Button/Button";

const SignIn: React.FC = () => {
  return (
    <div>
      <Button text="Zaloguj się" clickHandler={() => console.log("xd")} />
    </div>
  );
};

export default SignIn;
