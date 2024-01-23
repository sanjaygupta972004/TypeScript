
type ListProps<T> = {
   items: T[];
   onClick: (value: T) => void;
   
}

const Lists = <T extends {} >({items , onClick}: ListProps<T>) => {
  return (
      <div>
         <ul>
         {items.map((item, index) => (
            <li key={index} onClick={() => onClick(item)}>
               {item.toString()}
            </li>
         ))}
         </ul>
      </div>
   
  )
}

export default Lists