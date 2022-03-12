import { InputGroup, Input, Button } from 'rsuite';
import './styles.css';

const SelectInputSearch = ({ btnOptions, inputOptions, placeholder, ...props }) => (
    <InputGroup {...props} inside className='searchBar-container' style={{ borderWidth: '0px' }}>
        <Input placeholder={placeholder} className='searchBar'{...inputOptions} />
        <Button {...btnOptions} style={{ height: "2.4rem", borderRadius: '5px', marginLeft: '-8px', cursor: "pointer", margin: "auto auto" }}>
            Search
        </Button>
    </InputGroup>
);

export default SelectInputSearch;