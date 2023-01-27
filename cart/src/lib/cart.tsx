import { Banner } from '@otterly-outstanding/shared/ui';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';

// export interface RoutesCartProps {}

export function RoutesCart() {
  return (
    <div className={styles.container}>
      <Banner text="Welcome to the cart." />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default RoutesCart;
