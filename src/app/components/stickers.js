import Image from "./image"

function Sticker(props) {
    const 
    { 
        src, 
        alt, 
        height, 
        width, 
        margin, 
        info, 
        fontSize , 
        clickable, 
        callbackFunc
    } = props;

    let STICKER_STYLE = {
        height: "23px",
        width: "fit-content",
        margin: "20px",
        display: "flex"
    };

    let INFO_STYLE = {
        fontSize,
        padding: "5px",
        margin: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase"
    };

    let handleClick;

    if(clickable) {
        const error = "Callback function missing in component Sticker";
        if(!callbackFunc) throw Error(error);
        STICKER_STYLE["cursor"] = "pointer"
        handleClick = callbackFunc
    }

    return (
        <div style={STICKER_STYLE} onClick={handleClick}>
            <Image 
                src={src}
                alt={alt}
                height={height}
                width={width}
                margin={margin}
            />
            <div style={INFO_STYLE}>{info}</div>
        </div>
    )
}

export default Sticker;
