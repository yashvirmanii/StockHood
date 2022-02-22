import { InputGroup, Input, Button } from 'rsuite';
import './styles.css';

const SelectInputSearch = ({ placeholder, ...props }) => (
    <InputGroup {...props} inside className='searchBar-container'>
        <Input placeholder={placeholder} className='searchBar' />
        <Button style={{ height: "2.4rem", borderRadius: '5px', marginLeft: '-8px', cursor: "pointer" }}>
            Search
        </Button>
    </InputGroup>
);

export default SelectInputSearch;