import userEvent from "@testing-library/user-event"



function Rating(props) {
    const starRating = props.value
    return <div>{starRating}</div>

}

export default Rating