function Image(props) {
    const { src, alt, height, width, margin } = props;
    const STYLE = { height, width, margin };

    return (
        <img src={src} alt={alt} style={STYLE}></img>
    )
}

export default Image;
