/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroNavLogo = () => <h2 css={styles}>WorldMovie App</h2>;

const styles = css`
  font-size: 22px;
  color: #52b788;
  font-weight: 900;
  user-select: none;
`;

export default HeroNavLogo;
