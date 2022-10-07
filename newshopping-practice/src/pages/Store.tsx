import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItens from "../data/itens.json"

export function Store() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
      {storeItens.map(item => (
        <Col key={item.id}>
          <StoreItem {...item}/>
        </Col>
      )
      )}

      </Row>
    </>
  )
}
