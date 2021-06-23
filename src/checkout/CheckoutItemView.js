import "./checkout_item_view.css"
import close_icon from "./close_icon.png"

const CheckoutItemView = (props) => {

  const streamer = props.streamer
  const cost = streamer.viewerCount / 100

  const removeItemListener = () => {
    props.removeItemListener(streamer);
  }

  return (
    <div className="checkout_item_view" key={streamer.name}>
      <img src={streamer.image} alt={streamer.name} />
      <p className="streamer-name">{streamer.name}</p>
      <p className="streamer-cost">{`$ ${cost}`}</p>
      <img src={close_icon} alt={"Remove Streamer Icon"} onClick={removeItemListener}/>
    </div>
  );
}

export default CheckoutItemView;