import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { trivia_categories, trivia_difficulty } from "../data/Data";
import useSelect from "../hooks/useSelect";
import { FaChessBishop, FaUserAlt } from "react-icons/fa";
import "./estilos/Formulario.css";
import { MdCategory } from "react-icons/md";

const Formulario = ({ name, setName }) => {
  // para usar redirección
  let navigate = useNavigate();
  // **
  const [category, SelectCategory] = useSelect(
    "9",
    trivia_categories,
    "Selecciona la categoría",
    <MdCategory size="25" />
  );
  const [difficulty, SelectDifficulty] = useSelect(
    "easy",
    trivia_difficulty,
    "Selecciona la dificultad",
    <FaChessBishop size="25" />
  );

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      SelectCategory(category);
      SelectDifficulty(difficulty);
      // redirigir
      navigate(`/jugar/${name}/${category}/${difficulty}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Row>
            <Col xs={1} className="my-auto text-end">
              <FaUserAlt size="25" />
            </Col>
            <Col>
              <Form.Label>Ingrese el nombre</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Nombre del jugador"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>

          <SelectCategory />
          <SelectDifficulty />
        </Form.Group>
        <div className="text-center">
          <Button variant="outline-primary" type="submit" className="px-3">
            <span className="span-bold mx-5">Jugar</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Formulario;
