import PropTypes from 'prop-types';
import { Form, Input } from './SearchBox.styled';

export const SearchBox = ({ name, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Please enter movie"
        value={name}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

SearchBox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
