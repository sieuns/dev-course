import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";
import Empty from "../common/Empty";

function OrderEmpty() {
  return (
    <Empty
      icon={<FaSmile />}
      title="주문 내역이 없습니다."
      description={<Link to="/Home">홈으로 이동</Link>}
    ></Empty>
  );
}

export default OrderEmpty;
