import { useRef, useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const QuizWindow = styled.div`
  text-align: center;
  font-size: clamp(18px, 2.5vw, 18px);
  margin-top: 1vh;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em auto;

  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`;

const Option = styled.button`
  display: block;
  border: 1px solid #616a94;
  border-radius: 15px;
  padding: 15px 30px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  font-size: 1em;
  outline: none;
  user-select: none;
  margin-top: 1em;
  cursor: pointer;

  @media screen and (min-width: 1180px) {
    &:hover {
      color: white;
      background-color: #616a94;
    }
  }
`;

const Question = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Trivia = ({ trivia, numero, setNumero }) => {
  const [contador, setContador] = useState(30);
  const intervalo = useRef();
  const decreaseNum = () => setContador((prev) => prev - 1);
  useEffect(() => {
    intervalo.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalo.current);
  }, []);

  if (contador <= 0) {
    clearInterval(intervalo.current);
    setNumero(11);
  }

  const responderPregunta = (e) => {
    const respuestaUsusario = e.target.outerText;
    const colorOpcion = e.target.style;

    if (trivia[numero].respuesta === respuestaUsusario) {
      colorOpcion.backgroundColor = "green";
      clearInterval(intervalo.current);
      setTimeout(function () {
        colorOpcion.backgroundColor = "#161A31";
        setNumero((numero += 1));
        setContador(30);
        intervalo.current = setInterval(decreaseNum, 1000);
      }, 5000);
    } else {
      colorOpcion.backgroundColor = "red";
      clearInterval(intervalo.current);
      setTimeout(function () {
        setNumero(11);
      }, 500);
    }
  };

  return (
    <QuizWindow>
      {trivia[numero] && (
        <>
          <h3 className="bg-white text-center ">{contador}</h3>
          <br />
          <ProgressBar now={contador * 3.3333} />
          <br />
          <Question
            dangerouslySetInnerHTML={{ __html: trivia[numero].pregunta }}
          ></Question>

          <Options>
            {trivia[numero].opciones.map((item, index) => (
              <Option
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={responderPregunta}
              ></Option>
            ))}
          </Options>
        </>
      )}
      {}
    </QuizWindow>
  );
};

export default Trivia;
