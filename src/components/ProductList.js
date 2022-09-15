import './productList.scss';
import Card from './Card';
import { useStateValue } from './StateProvider';
const ProductList = () => {
     const { initialState } = useStateValue();

    return   <div className='productList'>{
   initialState.productList.map((items,index)=><Card  key= {index} {...items}/>)

    }
</div>
    
}
export default ProductList;