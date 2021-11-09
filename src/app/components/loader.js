function Loader() {
    const LOADER_STYLE = {
        height: "60px",
        width: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const LOADER_BLOCK_STYLE = {
        display: "inline-block",
        margin: "3px",
        left: "8px",
        width: "4px",
        borderRadius: "5px"
    }


    return (
        <div className="Loader" style={LOADER_STYLE}>
        <div style={LOADER_BLOCK_STYLE} className="LoaderBlock"></div>
        <div style={LOADER_BLOCK_STYLE} className="LoaderBlock"></div>
        <div style={LOADER_BLOCK_STYLE} className="LoaderBlock"></div>
        <div style={LOADER_BLOCK_STYLE} className="LoaderBlock"></div>
        </div>
    );
}

export default Loader;
