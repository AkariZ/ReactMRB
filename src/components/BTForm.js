import Button from 'react-bootstrap/Button';
import Form from '../pages/Form';
function BTForm() {
  return (
    <>
        <div className="button">
      <Button href='<Form />' variant="success" size="lg"  active>
        Book Now
      </Button>
      </div>
    </>
  );
}

export default BTForm;