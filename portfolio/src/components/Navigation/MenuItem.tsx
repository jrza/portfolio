const MenuItem = ({title}:{title:string}) => {

    return <a href={"/#"+title}>{title}</a>;
}

export default MenuItem;