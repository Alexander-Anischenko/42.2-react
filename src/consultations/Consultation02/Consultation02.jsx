import "./styles.css";
import CommentCard from "../../components/CommentCard/CommentCard";

function Consultation02() {
    const commentCardInfo = [
        {
            text: "I can’t recommend this podcast enough",
            author: "Betty Lacey",
        },
        { text: "Jacob is the best in the business", author: "Adam Driver" },
        { text: "A wealth of audio knowledge", author: "Marcus Brown" },
    ];
    return (
        <div className="consultation02-wrapper">
            <CommentCard
                text={commentCardInfo[0].text}
                //author={commentCardInfo[0].author}
            />

            <CommentCard
                text={commentCardInfo[1].text}
                author={commentCardInfo[1].author}
            />

            <CommentCard
                text={commentCardInfo[2].text}
                author={commentCardInfo[2].author}
            />
        </div>
    );
}

export default Consultation02;
