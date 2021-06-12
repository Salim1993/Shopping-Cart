const StreamerView = (props) => {

  const streamer = props.streamer
  const cost = streamer.viewerCount / 100

  const onClickListener = () => {
    props.onClickListener(streamer);
  }

  return (
    <div key={streamer.name} onClick={onClickListener}>
      <img src={streamer.image} alt={streamer.name} />
      <p className="streamer-name">{streamer.name}</p>
      <p className="streamer-cost">{`$ ${cost}`}</p>
    </div>
  );
}

export default StreamerView;