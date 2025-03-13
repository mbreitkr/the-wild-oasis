import styled from "styled-components";

import Logo from "@/ui/Logo";

const StyledMobileDevice = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  overflow: hidden;
  padding: 2rem;
  background-color: var(--color-grey-50);
`;

const MobileHeading = styled.h1`
  text-align: center;
  line-height: 1.4;
  font-size: 2rem;
`;

const MobileText = styled.p`
  text-align: center;
`;

function MobileDevice() {
  return (
    <StyledMobileDevice>
      <Logo />
      <MobileHeading>
        This website isn't optimized for mobile devices yet!
      </MobileHeading>
      <MobileText>
        To access all the features of this app, please visit on desktop!
      </MobileText>
    </StyledMobileDevice>
  );
}

export default MobileDevice;
