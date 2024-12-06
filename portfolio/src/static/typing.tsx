import { TypeAnimation } from "react-type-animation";

const Typing = () => {

    return (
        <TypeAnimation
            sequence={[
                'Java', 500,
                'Python', 500,
                'JavaScript', 500,
                'TypeScript', 500,
                'SQL', 500
        ]}
        wrapper="span"
        speed={10}
        preRenderFirstString={true}
        style={{ marginLeft: "5px", fontSize: "1em", textAlign: "left", color:"#fffbeb", fontWeight:"bold", display: "inline-block", width:"38.5%"}}
        repeat={Infinity}
        />
    );
};

export default Typing;