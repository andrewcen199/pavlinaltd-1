const CarouselItem = (props) => {
  return (
    <div class={`carousel-item ${props.active}`}>
      <img
        class="d-block w-100"
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
};

export default CarouselItem;