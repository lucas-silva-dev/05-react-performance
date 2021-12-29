import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

interface SearchResultProps {
  totalPrice: number;
  results: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }[];
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
