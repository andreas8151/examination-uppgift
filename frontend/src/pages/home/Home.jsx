import Form from "../../components/form/Form";

function Home() {
  return (
    <div>
      <Form
        title="Add Todo"
        buttonTitleOne="Login"
        buttonTitleTwo="To Register"
        linkTo="/register"
      />
    </div>
  );
}

export default Home;
