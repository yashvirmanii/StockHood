import { InputGroup, Input } from 'rsuite';
import './styles.css';

const SelectInputSearch = ({ inputOptions, placeholder, ...props }) => (
    <InputGroup {...props} inside className='searchBar-container'>
        <Input placeholder={placeholder} className='searchBar' {...inputOptions} />
    </InputGroup>
);

export default SelectInputSearch;