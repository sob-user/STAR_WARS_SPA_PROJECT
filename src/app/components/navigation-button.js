function NavigationButton(props) {
    const { name, returnCurrentClicked, current } = props;

    let STYLE = {
        height: "fit-content",
        width: "fit-content",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        color: "white",
        cursor: "pointer"
    };

    if(current) {
        STYLE["background"] = "rgba(95, 83, 83, 0.568)";
        STYLE["borderTopLeftRadius"] = "37px 140px";
        STYLE["borderTopRightRadius"] = "23px 130px";
        STYLE["borderBottomLeftRadius"] = "110px 19px";
        STYLE["borderBottomRightRadius"] = "120px 24px";

    }

    return (
        <div 
        className="NavigationButton"
        style={STYLE} 
        onClick={returnCurrentClicked}
        >{name}</div>
    );
}

export default NavigationButton;
