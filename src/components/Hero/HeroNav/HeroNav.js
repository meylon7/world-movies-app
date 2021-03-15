/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import Container from "../../GlobalComponents/Container";
import HeroNavLogo from "./HeroNavLogo";
import HeroNavMenu from "./HeroNavMenu";
import HeroNavSearch from "./HeroNavSearch";

const HeroNav = () => {
  const { hiddenMenu, setHiddenMenu } = useContext(MovieContext);

  return (
    <nav css={styles}>
      <Container>
        <div className="wrapper">
          <HeroNavLogo />
          <HeroNavMenu />
        </div>
        <HeroNavSearch />
        <i
          onClick={() => setHiddenMenu(!hiddenMenu)}
          id="burgerMenu"
          className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
        ></i>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #000000;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #52b788;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default HeroNav;
