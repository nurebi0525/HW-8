import styled from "styled-components"

export const ExpenseFilter = ({value, onchange}) => {
    return (
        <div>
            <div>
                <label htmlFor="filter">Filter By Year</label>
                <select  id="ilter">
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
};

const StyledSelect = styled.select`
    padding: 8px 14px;
    outline: none;
    border-radius: 8px;
    cursor: pointer
`