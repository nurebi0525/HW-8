import styled from "styled-components"

export const ExpenseFilter = ({value, onchange}) => {
    return (
        <Box>
            <StyledText>Выбран год 2025</StyledText>
            <div>
                <label htmlFor="filter">Filter By Year</label>
                <StyledSelect  id="ilter" value={value} onChange={onChange}>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </StyledSelect>
            </div>
        </Box>
    );
};

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

const STyledLabel = styled.label`
    margin-right: 20px;
`

const StyledSelect = styled.select`
    padding: 8px 14px;
    outline: none;
    border-radius: 8px;
    cursor: pointer
`;
const StyledText = styled.div`
   color: #200a2a;
   background-color: white;
   padding: 8px 20px;
   border-radius: 8px;
   
`