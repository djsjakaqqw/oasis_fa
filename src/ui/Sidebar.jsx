import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
const StyledSidbar = styled.aside`
  padding: 1.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidbar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidbar>
  );
}

export default Sidebar;
