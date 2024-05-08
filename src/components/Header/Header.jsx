import { Container } from "react-bootstrap"
import DesktopHeader from "./components/DesktopHeader"
import MobileHeader from "./components/MobileHeader"

export default function Header() {
  return (
    <div>
      <div className="bg-white position-fixed w-100 z-3">
        <Container>
          <DesktopHeader />
          <MobileHeader />
        </Container>
      </div>
      <div style={{ height: 90 }} className="hide-mobile"></div>
      <div style={{ height: 60 }} className="hide-desktop"></div>
    </div>
  )
}
