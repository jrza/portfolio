import Tag from "./Tag";

function Project({ headline, image, text, tags, link }: { headline: string, image: string, text: string, tags: string[], link: string }) {
    return (
        <a href={link} aria-label={text}>
            <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-50 bg-amber-50 rounded-lg max-h-max max-w-96 m-3">
                <img className="w-fit h-fit rounded-t-lg max-h-64 h-full" alt={text} src={image} />
                <div className="p-4">
                    <div className="text-xl font-medium wb-4 text-black">{headline}</div>
                    <p className="text-black">{text}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Tools & technologies:">
                        {tags.map((item, index) =>
                            <li key={index} className="mr-1.5 mt-2"><Tag title={item} /></li>
                        )}
                    </ul>
                </div>
            </div>
        </a>
    );
}

export default Project;
