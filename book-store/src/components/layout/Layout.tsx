import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyle>
  );
}

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 20px 12px;
  }
`;

export default Layout;
