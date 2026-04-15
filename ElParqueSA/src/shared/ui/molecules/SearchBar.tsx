import { Input } from '../atoms';
import { Button } from '../atoms';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, onSearch, placeholder }: SearchBarProps) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
      <Button onClick={onSearch}>Buscar</Button>
    </div>
  );
}