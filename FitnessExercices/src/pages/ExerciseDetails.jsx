import { useContext, useEffect } from "react";
import { GymAppContext } from "../context/GymAppContext";
import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }

  .cta svg {
    position: relative;
    margin-left: 100px;
    margin-bottom: 30px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #b1dae7;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
`;

export default function ExerciseDetails() {
  const { exercise } = useContext(GymAppContext);

  useEffect(() => {}, [exercise]);

  console.log(exercise.muscles.Target);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen mt-20">
      <div className="flex flex-col w-1/2 justify-center items-start gap-5 border border-orange-500 rounded-lg p-6">
        <img src={exercise.image} alt={exercise.name} className="w-full" />
        <p className="text-2xl font-semibold border-b-2 border-orange-500 pr-5">
          {exercise.name}
        </p>
        <p>
          <span className="font-semibold">Body Part:</span>{" "}
          <span className="font-[505] border-b border-orange-500 ml-3 pr-2">
            {exercise.bodyPart || "No body part"}
          </span>
        </p>
        <p>
          <span className="font-semibold">Muscles: </span>
          <span className="font-[505] leading-[1.7] border-b border-orange-500 px-2">
            {exercise.muscles.Target.map((muscle) => muscle.name).join(", ") ||
              "No muscles"}
          </span>
        </p>
        <ul>
          {exercise.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">Step {index + 1}:</span>{" "}
              {instruction.description || "No instructions"}
            </li>
          ))}
        </ul>
        {/*  From Uiverse.io by alexmaracinaru */}
        <StyledWrapper>
          <button className="cta">
            <span>Hover me</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
            </svg>
          </button>
        </StyledWrapper>
      </div>
    </section>
  );
}
