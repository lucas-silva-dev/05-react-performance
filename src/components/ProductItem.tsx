import { memo, useState } from 'react';
import { AddProductToWishlist } from './AddToWishList';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

// const addToWishList = useCallback(async (id: number) => {
//   console.log(id);
// }, []);

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/** USAGE OF MEMO
 * 1. Pure Function Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 *
 * Ele faz uma comparação profunda com o Object.is ou o padrão que seria a rasa (shallow)
 */

/** useMemo
 *
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação para um component filho)
 *
 */

/** useCallback
 *
 * Igualdade referencial quando a função é passada para vários components (filhos ou contexto)
 *
 */
