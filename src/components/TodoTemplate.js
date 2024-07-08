import './TodoTemplate.css';

const TodoTemplate = (props) => {
    return (
        <>
            <div className="container">
                <div className="title">일정관리</div>
                <div className="content">{props.children}</div>
            </div>
        </>
    );
};
export default TodoTemplate;
