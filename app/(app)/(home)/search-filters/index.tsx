import { SearchInput } from './seach-input';
import { Category } from './category';

interface SearchFiltersProps {
  data: any;
}

// SearchFilter component

const SearchFilter = ({ data }: SearchFiltersProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <Category data={data} />
    </div>
  )
}

export default SearchFilter